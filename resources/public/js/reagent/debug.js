// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__30282__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30283__i = 0, G__30283__a = new Array(arguments.length -  0);
while (G__30283__i < G__30283__a.length) {G__30283__a[G__30283__i] = arguments[G__30283__i + 0]; ++G__30283__i;}
  args = new cljs.core.IndexedSeq(G__30283__a,0,null);
} 
return G__30282__delegate.call(this,args);};
G__30282.cljs$lang$maxFixedArity = 0;
G__30282.cljs$lang$applyTo = (function (arglist__30284){
var args = cljs.core.seq(arglist__30284);
return G__30282__delegate(args);
});
G__30282.cljs$core$IFn$_invoke$arity$variadic = G__30282__delegate;
return G__30282;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__30285__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30286__i = 0, G__30286__a = new Array(arguments.length -  0);
while (G__30286__i < G__30286__a.length) {G__30286__a[G__30286__i] = arguments[G__30286__i + 0]; ++G__30286__i;}
  args = new cljs.core.IndexedSeq(G__30286__a,0,null);
} 
return G__30285__delegate.call(this,args);};
G__30285.cljs$lang$maxFixedArity = 0;
G__30285.cljs$lang$applyTo = (function (arglist__30287){
var args = cljs.core.seq(arglist__30287);
return G__30285__delegate(args);
});
G__30285.cljs$core$IFn$_invoke$arity$variadic = G__30285__delegate;
return G__30285;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1512749437116
