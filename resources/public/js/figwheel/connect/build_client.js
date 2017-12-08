// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_client');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('altfolio.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__37889__delegate = function (x){
if(cljs.core.truth_(altfolio.core.run)){
return cljs.core.apply.call(null,altfolio.core.run,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'altfolio.core/run' is missing");
}
};
var G__37889 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__37890__i = 0, G__37890__a = new Array(arguments.length -  0);
while (G__37890__i < G__37890__a.length) {G__37890__a[G__37890__i] = arguments[G__37890__i + 0]; ++G__37890__i;}
  x = new cljs.core.IndexedSeq(G__37890__a,0,null);
} 
return G__37889__delegate.call(this,x);};
G__37889.cljs$lang$maxFixedArity = 0;
G__37889.cljs$lang$applyTo = (function (arglist__37891){
var x = cljs.core.seq(arglist__37891);
return G__37889__delegate(x);
});
G__37889.cljs$core$IFn$_invoke$arity$variadic = G__37889__delegate;
return G__37889;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"client",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_client.js.map?rel=1512749446342
