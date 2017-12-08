(ns figwheel.connect.build-client (:require [figwheel.client] [figwheel.client.utils] [altfolio.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/altfolio.core.run (apply js/altfolio.core.run x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'altfolio.core/run' is missing"))), :build-id "client", :websocket-url "ws://localhost:3449/figwheel-ws"})

