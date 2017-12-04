(ns altfolio-clj.core
  (:require
   [clj-wave-rider.common :as common]
   [clojure.core.async :as async :refer [go go-loop put! take! <! >! <!! timeout chan alt! go]]))

(defn calc-roi
  [invest current]
  (format "%.0f%%" (* 100 (/ (- current invest) invest))))

(def altfolio
  (atom
   {:crypto/BTC {:altfolio/amount 0.0342
                 :altfolio/invest 250.0000
                 :altfolio/current 289.30
                 :altfolio/roi 0}
    :crypto/MIOTA {:altfolio/amount 127.8720016
                   :altfolio/invest 125.0
                   :altfolio/current 219.78
                   :altfolio/roi 0}
    :crypto/ETH {:altfolio/amount 0.78175
                 :altfolio/invest 250.0000
                 :altfolio/current 269.83
                 :altfolio/roi 0}
    :crypto/ADA {:altfolio/amount 1337.6610107
                 :altfolio/invest 125.0
                 :altfolio/current 135.11
                 :altfolio/roi 0}}))

(defn return-of-investment
  [altfolio]
  (into {} (for [[k v] @altfolio]
             [k (calc-roi (:altfolio/invest v)
                          (:altfolio/current v))])))

(def c [:crypto/BTC :crypto/MIOTA :crypto/ETH :crypto/ADA])

(def p [125.2 985.5 762. 420.5])

(defn get-feed [] {:feed/crypto (rand-nth c)
                   :feed/property :altfolio/current
                   :feed/new-v (rand-nth p)})

(defn update-feed
  [altfolio feed]
  (let [{:keys [:feed/crypto :feed/property :feed/new-v]} feed]
    (swap! altfolio assoc-in [crypto property] new-v)))

(defn updade-altfolio [] 
  (update-feed altfolio (get-feed)))

(<!! (common/http-get "https://api.coinmarketcap.com/v1/ticker/?convert=GBP&limit=10"))

(defn print-rof []
  (go-loop []
    .    (<! (timeout 1000))
    (clojure.pprint/pprint (return-of-investment @altfolio))
    (recur)))
