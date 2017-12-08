(ns altfolio.coinbase
  (:require
   [altfolio.common :as common]
   [clojure.core.async :as async :refer [pipeline-blocking go go-loop put! take! <! >! <!! timeout to-chan chan alt! go]]))

(defn calc-current-val
  [price amount]
  (* price amount))

(defn calc-roi
  [invest current]
  (format "%.0f%%" (* 100 (/ (- current invest) invest))))

(defn how-much
  [price amount]
  (* (common/parse-num price)
     (common/parse-num amount)))

(def parallelism (+ (.availableProcessors (Runtime/getRuntime)) 1))

(defn api-url-fomat [convert crypto] (format "https://api.coinmarketcap.com/v1/ticker/%s/?convert=%s" (name crypto) convert))

(def coinmarket-to-domain
  {:id {:ethereum :crypto/ETH
        :bitcoin :crypto/BTC
        :iota :crypto/MIOTA
        :monero :crypto/XMR
        :cardano :crypto/ADA}
   :props {:price_gbp :crypto/price_gbp
           :price_usd :crypto/price_usd
           :percent_change_1h :crypto/percent_change_1h}})

(def altfolio
  (atom
   {:altfolio/invest_gbp 750
    :cryptos {             
              :crypto/BTC   {:altfolio/id :bitcoin
                             :altfolio/amount 0.0619406}
              :crypto/MIOTA {:altfolio/id :iota
                             :altfolio/amount 0.8720016}
              :crypto/ETH   {:altfolio/id :ethereum
                             :altfolio/amount 0.39068333}
              :crypto/ADA   {:altfolio/id :cardano
                             :altfolio/amount 1337.6610107}
              :crypto/XMR   {:altfolio/id :monero
                             :altfolio/amount 0.0981984065}}}))

(def crypto (atom {}))

(defn altfolio-value
  [altfolio crypto]
  (reduce (fn [old-a [k v]]
            (let [crypto-props (get crypto k)]
              (println k v "props")
              (println crypto-props)
              (assoc old-a k {:altfolio/value_usd (how-much (:crypto/price_usd crypto-props)
                                                            (:altfolio/amount v))
                              :altfolio/value_gbp (how-much (:crypto/price_gbp crypto-props)
                                                            (:altfolio/amount v))})))
          {}
          altfolio))

(defn return-of-investment 
  [altfolio]
  (into {} (for [[k v] @altfolio]
             [k (calc-roi (:altfolio/invest v)
                          (:altfolio/current v))])))

(def update-crypto
  (map (fn [{:keys [:feed/id :feed/response] :as stream}]
         (let [domain-crypto (get-in coinmarket-to-domain [:id id])]
           (swap! crypto assoc domain-crypto response)))))

(def get-urls
  (let [fn-format (partial api-url-fomat "GBP")]
    (map (fn [{:keys [:feed/id] :as response}]
           (merge response {:feed/url (fn-format id)})))))

(def query-coinmarket
  (map (fn [{:keys [:feed/id :feed/url] :as stream}]
         (let [response (common/parse-response (<!! (common/http-get url)))]
           (merge stream {:feed/response (get response 0)})))))

(def adapter-coinmarket
  "map coinmarket raw response to domain with the :crypto/SYM as a key"
  (map (fn [{:keys [:feed/id :feed/response] :as stream}]
         (let [domain-crypto (get-in coinmarket-to-domain [:id id])]
           (assoc stream :feed/response (reduce (fn [old-map [k-from k-to]]
                                                  (assoc old-map k-to (k-from response)))
                                                {}
                                                (:props coinmarket-to-domain)))))))

(defn updating-coinmarket-pipeline
  [in]
  (let [out-urls (chan 1)
        out-raw-response (chan 1)
        out-response (chan 1)
        out-updated-crypto (chan 1)]
    ;; Prepare all the urls and return a
    (pipeline-blocking parallelism out-urls get-urls in)
    (pipeline-blocking parallelism out-raw-response query-coinmarket out-urls)
    (pipeline-blocking parallelism out-response adapter-coinmarket out-raw-response)
    (pipeline-blocking parallelism out-updated-crypto update-crypto out-response)
    out-updated-crypto))

(comment
  (let [feeds [{:feed/id :ethereum} {:feed/id :iota} {:feed/id :bitcoin} {:feed/id :monero } {:feed/id :cardano}]
        _ (<!! (async/reduce conj [] (updating-coinmarket-pipeline (to-chan feeds))))]
    (common/pp (altfolio-value (get @altfolio :cryptos) @crypto)))
  )
