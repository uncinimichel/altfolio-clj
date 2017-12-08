(defproject altfolio-clj "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [;;[org.clojure/clojure "1.9.0-alpha16"]
                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/core.async "0.3.442"]
                 [ring/ring-json "0.4.0"]
                 [compojure "1.6.0"]
                 [clj-http "3.7.0"]
                 [org.clojure/clojurescript  "1.9.908"]
                 [reagent "0.7.0"]
                 [re-frame "0.10.1"]
                 [org.clojure/data.json "0.2.6"]
                 [org.clojure/test.check "0.9.0"]]

  :plugins [[lein-ring "0.7.1"]
            [lein-cljsbuild "1.1.5"]
            [lein-figwheel  "0.5.13"]]

  :hooks [leiningen.cljsbuild]

  :profiles {:dev {:cljsbuild
                   {:builds {:client {:figwheel     {:on-jsload "altfolio.core/run"}
                                      :compiler     {:main "altfolio.core"
                                                     :asset-path "js"
                                                     :optimizations :none
                                                     :source-map true
                                                     :source-map-timestamp true}}}}}

             :prod {:cljsbuild
                    {:builds {:client {:compiler    {:optimizations :advanced
                                                     :elide-asserts true
                                                     :pretty-print false}}}}}}

  :figwheel {:repl false}

  :clean-targets ^{:protect false} ["resources/public/js"]

  :cljsbuild {:builds {:client {:source-paths ["src"]
                                :compiler     {:output-dir "resources/public/js"
                                               :output-to  "resources/public/js/client.js"}}}}
  :ring {:handler altfolio.rest/app})

