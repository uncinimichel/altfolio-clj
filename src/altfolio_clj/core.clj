(ns altfolio-clj.core
  (:require
   [altfolio-clj.common :as common]
   [clojure.core.async :as async :refer [pipeline-blocking go go-loop put! take! <! >! <!! timeout to-chan chan alt! go]]))

(defn calc-current-val
  [price amount]
  (* price amount))

(defn calc-roi
  [invest current]
  (format "%.0f%%" (* 100 (/ (- current invest) invest))))

(def altfolio
  (atom
   {:crypto/BTC {:altfolio/id :bitcoin
                 :altfolio/amount 0.0342
                 :altfolio/invest 250.0000
                 :altfolio/current 289.30
                 :altfolio/roi 0}
    :crypto/MIOTA {:altfolio/id :iota
                   :altfolio/amount 127.8720016
                   :altfolio/invest 125.0
                   :altfolio/current 219.78
                   :altfolio/roi 0}
    :crypto/ETH {:altfolio/id :ethereum
                 :altfolio/amount 0.78175
                 :altfolio/invest 250.0000
                 :altfolio/current 269.83
                 :altfolio/roi 0}
    :crypto/ADA {:altfolio/id :cardano
                 :altfolio/amount 1337.6610107
                 :altfolio/invest 125.0
                 :altfolio/current 135.11
                 :altfolio/roi 0}}))

(defn return-of-investment 
  [altfolio]
  (into {} (for [[k v] @altfolio]
             [k (calc-roi (:altfolio/invest v)
                          (:altfolio/current v))])))


(defn api-url-fomat [convert crypto] (format "https://api.coinmarketcap.com/v1/ticker/%s/?convert=%s/" crypto convert))

(defn update-feed
  [altfolio feed]
  (let [{:keys [:feed/crypto :feed/property :feed/new-v]} feed]
    (swap! altfolio assoc-in [crypto property] new-v)))

(defn updade-altfolio [] 
  (update-feed altfolio (get-feed)))

(common/pp (common/parse-response (<!! (common/http-get "https://api.coinmarketcap.com/v1/ticker/ripple/?convert=GBP"))))

(defn print-rof []
  (go-loop []
    (<! (timeout 1000))
    (clojure.pprint/pprint (return-of-investment @altfolio))
    (recur)))

(def parallelism (+ (.availableProcessors (Runtime/getRuntime)) 1))

(def coinmarket-to-domain
  {:id {:ethereum :crypto/ETH
        :bitcoin :crypto/BTC
        :iota :crypto/MIOTA
        :cardano :crypto/ADA}
   :props {:price_gbp :altfolio/price
           :percent_change_1h :altfolio/percent_change_1h}})


(def get-urls
  (let [fn-format (partial api-url-fomat "GBP")]
    (map (fn [{:keys [:feed/id] :as response}]
           (merge response {:feed/url (fn-format id)})))))

(def query-coinmarket
  (map (fn [{:keys [:feed/id :feed/url] :as stream}]
         (let [response (common/parse-response (<!! (common/http-get url)))]
           (merge stream {:feed/response response})))))

(def adapter-coinmarket
  "map coinmarket response to domain with the :crypto/SYM as a key"
  (map (fn [{:keys [:feed/id :feed/response]}]
         (let [domain-crypto (get-in coinmarket-to-domain [:id id])
               props (:props coinmarket-to-domain)]
           (hash-map domain-crypto (reduce (fn [old-map [k-from k-to]]
                                             (assoc old-map k-to (k-from response)))
                                           {}
                                           (:props coinmarket-to-domain)))))))

(def update-domain
  (map (fn [{:keys [:feed/id :feed/response]}]
         (let [domain-crypto (get-in coinmarket-to-domain [:id id])]
           (swap! altfolio (fn [old crypto]
                             (let [new-crypto (merge )])))
           (let [new-crypto (merge )])))))


(def mock-response {:percent_change_7d "-6.74",
                    :available_supply "38706833272.0",
                    :price_usd "0.25108",
                    :symbol "XRP",
                    :name "Ripple",
                    :market_cap_usd "9718511698.0",
                    :rank "4",
                    :last_updated "1512464941",
                    :total_supply "99993128226.0",
                    :24h_volume_usd "127326000.0",
                    :max_supply "100000000000",
                    :market_cap_gbp "7215295203.0",
                    :price_btc "0.00002122",
                    :id "ripple",
                    :24h_volume_gbp "94530387.528",
                    :percent_change_1h "0.03",
                    :price_gbp "0.1864088222",
                    :percent_change_24h "-1.13"})

(def pipe {:feed/id :ethereum
           :feed/response mock-response})
(def pipe2 {:feed/id :iota
            :feed/response mock-response})


(keys (transduce adapter-coinmarket into {} [pipe pipe2]))
(transduce adapter-coinmarket into {} [pipe])

(comment
  (time (into {} (for [[k-from k-to] (:props coinmarket-to-domain)]
                   [k-to (k-from mock-response)])))

  (time (reduce (fn [old-map [k-from k-to]]
                  (assoc old-map k-to (k-from mock-response))) {} (:props coinmarket-to-domain))))


(defn updating-coinmarket-pipeline
  [in]
  (let [out-urls (chan 1)
        out-raw-response (chan 1)]
    (pipeline-blocking parallelism out-urls get-urls in)
    (pipeline-blocking parallelism out-raw-response query-coinmarket get-urls)
    out-raw-response))

(comment
  (let [feeds [{:feed/id :ethereum} {:feed/id :iota}]
        a (<!! (async/reduce merge {} (updating-coinmarket-pipeline (to-chan feeds))))]
    (common/pp a)
    a))
