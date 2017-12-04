(ns altfolio-clj.common
  (:require [clj-http.client :as client]
            [clojure.data.json :as json]
            [clojure.core.async :as async :refer [go go-loop put! take! <! >! <!! timeout chan alt! go]]))

(defn http-get [url]
  (let [c (chan)]
    (println "Calling this url:" url)
    (client/get url
                {:async? true
                 :insecure? true}
                (fn [r] (put! c r))
                (fn [e] (put! c e)))
    c))

(defn parse-response
  ([response] (parse-response response true))
  ([response json?]
   (let [{:keys [status headers body]} response]
     (if (= status 200)
       (json/read-str body)
       status))))

(defn pp [r] (clojure.pprint/pprint r))
