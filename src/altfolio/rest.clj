(ns altfolio.rest
  (:require [compojure.core :refer :all]
            [ring.middleware.json :refer [wrap-json-response]]
            [ring.util.response :refer [response]]
            [compojure.route :as route]))

(defn handler [request]
  (response {:foo "bar"}))

(defroutes app
  (GET "/" [] "<h1>Hello World</h1>")
  (GET "/api" [] (wrap-json-response handler))
  (route/not-found "<h1>Page not found</h1>"))
