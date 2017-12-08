// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__28914__auto__,writer__28915__auto__,opt__28916__auto__){
return cljs.core._write.call(null,writer__28915__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35777 = arguments.length;
var i__29460__auto___35778 = (0);
while(true){
if((i__29460__auto___35778 < len__29459__auto___35777)){
args__29466__auto__.push((arguments[i__29460__auto___35778]));

var G__35779 = (i__29460__auto___35778 + (1));
i__29460__auto___35778 = G__35779;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq35776){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35776));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35781 = arguments.length;
var i__29460__auto___35782 = (0);
while(true){
if((i__29460__auto___35782 < len__29459__auto___35781)){
args__29466__auto__.push((arguments[i__29460__auto___35782]));

var G__35783 = (i__29460__auto___35782 + (1));
i__29460__auto___35782 = G__35783;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq35780){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35780));
});

var g_QMARK__35784 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_35785 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35784){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__35784))
,null));
var mkg_35786 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35784,g_35785){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__35784,g_35785))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__35784,g_35785,mkg_35786){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35784).call(null,x);
});})(g_QMARK__35784,g_35785,mkg_35786))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__35784,g_35785,mkg_35786){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_35786).call(null,gfn);
});})(g_QMARK__35784,g_35785,mkg_35786))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__35784,g_35785,mkg_35786){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_35785).call(null,generator);
});})(g_QMARK__35784,g_35785,mkg_35786))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__29552__auto___35806 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__29552__auto___35806){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35807 = arguments.length;
var i__29460__auto___35808 = (0);
while(true){
if((i__29460__auto___35808 < len__29459__auto___35807)){
args__29466__auto__.push((arguments[i__29460__auto___35808]));

var G__35809 = (i__29460__auto___35808 + (1));
i__29460__auto___35808 = G__35809;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___35806))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___35806){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___35806),args);
});})(g__29552__auto___35806))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__29552__auto___35806){
return (function (seq35787){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35787));
});})(g__29552__auto___35806))
;


var g__29552__auto___35810 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__29552__auto___35810){
return (function cljs$spec$gen$alpha$list(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35811 = arguments.length;
var i__29460__auto___35812 = (0);
while(true){
if((i__29460__auto___35812 < len__29459__auto___35811)){
args__29466__auto__.push((arguments[i__29460__auto___35812]));

var G__35813 = (i__29460__auto___35812 + (1));
i__29460__auto___35812 = G__35813;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___35810))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___35810){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___35810),args);
});})(g__29552__auto___35810))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__29552__auto___35810){
return (function (seq35788){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35788));
});})(g__29552__auto___35810))
;


var g__29552__auto___35814 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__29552__auto___35814){
return (function cljs$spec$gen$alpha$map(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35815 = arguments.length;
var i__29460__auto___35816 = (0);
while(true){
if((i__29460__auto___35816 < len__29459__auto___35815)){
args__29466__auto__.push((arguments[i__29460__auto___35816]));

var G__35817 = (i__29460__auto___35816 + (1));
i__29460__auto___35816 = G__35817;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___35814))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___35814){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___35814),args);
});})(g__29552__auto___35814))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__29552__auto___35814){
return (function (seq35789){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35789));
});})(g__29552__auto___35814))
;


var g__29552__auto___35818 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__29552__auto___35818){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35819 = arguments.length;
var i__29460__auto___35820 = (0);
while(true){
if((i__29460__auto___35820 < len__29459__auto___35819)){
args__29466__auto__.push((arguments[i__29460__auto___35820]));

var G__35821 = (i__29460__auto___35820 + (1));
i__29460__auto___35820 = G__35821;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___35818))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___35818){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___35818),args);
});})(g__29552__auto___35818))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__29552__auto___35818){
return (function (seq35790){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35790));
});})(g__29552__auto___35818))
;


var g__29552__auto___35822 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__29552__auto___35822){
return (function cljs$spec$gen$alpha$set(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35823 = arguments.length;
var i__29460__auto___35824 = (0);
while(true){
if((i__29460__auto___35824 < len__29459__auto___35823)){
args__29466__auto__.push((arguments[i__29460__auto___35824]));

var G__35825 = (i__29460__auto___35824 + (1));
i__29460__auto___35824 = G__35825;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___35822))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___35822){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___35822),args);
});})(g__29552__auto___35822))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__29552__auto___35822){
return (function (seq35791){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35791));
});})(g__29552__auto___35822))
;


var g__29552__auto___35826 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__29552__auto___35826){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35827 = arguments.length;
var i__29460__auto___35828 = (0);
while(true){
if((i__29460__auto___35828 < len__29459__auto___35827)){
args__29466__auto__.push((arguments[i__29460__auto___35828]));

var G__35829 = (i__29460__auto___35828 + (1));
i__29460__auto___35828 = G__35829;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___35826))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___35826){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___35826),args);
});})(g__29552__auto___35826))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__29552__auto___35826){
return (function (seq35792){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35792));
});})(g__29552__auto___35826))
;


var g__29552__auto___35830 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__29552__auto___35830){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35831 = arguments.length;
var i__29460__auto___35832 = (0);
while(true){
if((i__29460__auto___35832 < len__29459__auto___35831)){
args__29466__auto__.push((arguments[i__29460__auto___35832]));

var G__35833 = (i__29460__auto___35832 + (1));
i__29460__auto___35832 = G__35833;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___35830))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___35830){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___35830),args);
});})(g__29552__auto___35830))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__29552__auto___35830){
return (function (seq35793){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35793));
});})(g__29552__auto___35830))
;


var g__29552__auto___35834 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__29552__auto___35834){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35835 = arguments.length;
var i__29460__auto___35836 = (0);
while(true){
if((i__29460__auto___35836 < len__29459__auto___35835)){
args__29466__auto__.push((arguments[i__29460__auto___35836]));

var G__35837 = (i__29460__auto___35836 + (1));
i__29460__auto___35836 = G__35837;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___35834))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___35834){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___35834),args);
});})(g__29552__auto___35834))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__29552__auto___35834){
return (function (seq35794){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35794));
});})(g__29552__auto___35834))
;


var g__29552__auto___35838 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__29552__auto___35838){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35839 = arguments.length;
var i__29460__auto___35840 = (0);
while(true){
if((i__29460__auto___35840 < len__29459__auto___35839)){
args__29466__auto__.push((arguments[i__29460__auto___35840]));

var G__35841 = (i__29460__auto___35840 + (1));
i__29460__auto___35840 = G__35841;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___35838))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___35838){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___35838),args);
});})(g__29552__auto___35838))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__29552__auto___35838){
return (function (seq35795){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35795));
});})(g__29552__auto___35838))
;


var g__29552__auto___35842 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__29552__auto___35842){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35843 = arguments.length;
var i__29460__auto___35844 = (0);
while(true){
if((i__29460__auto___35844 < len__29459__auto___35843)){
args__29466__auto__.push((arguments[i__29460__auto___35844]));

var G__35845 = (i__29460__auto___35844 + (1));
i__29460__auto___35844 = G__35845;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___35842))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___35842){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___35842),args);
});})(g__29552__auto___35842))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__29552__auto___35842){
return (function (seq35796){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35796));
});})(g__29552__auto___35842))
;


var g__29552__auto___35846 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__29552__auto___35846){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35847 = arguments.length;
var i__29460__auto___35848 = (0);
while(true){
if((i__29460__auto___35848 < len__29459__auto___35847)){
args__29466__auto__.push((arguments[i__29460__auto___35848]));

var G__35849 = (i__29460__auto___35848 + (1));
i__29460__auto___35848 = G__35849;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___35846))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___35846){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___35846),args);
});})(g__29552__auto___35846))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__29552__auto___35846){
return (function (seq35797){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35797));
});})(g__29552__auto___35846))
;


var g__29552__auto___35850 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__29552__auto___35850){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35851 = arguments.length;
var i__29460__auto___35852 = (0);
while(true){
if((i__29460__auto___35852 < len__29459__auto___35851)){
args__29466__auto__.push((arguments[i__29460__auto___35852]));

var G__35853 = (i__29460__auto___35852 + (1));
i__29460__auto___35852 = G__35853;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___35850))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___35850){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___35850),args);
});})(g__29552__auto___35850))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__29552__auto___35850){
return (function (seq35798){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35798));
});})(g__29552__auto___35850))
;


var g__29552__auto___35854 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__29552__auto___35854){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35855 = arguments.length;
var i__29460__auto___35856 = (0);
while(true){
if((i__29460__auto___35856 < len__29459__auto___35855)){
args__29466__auto__.push((arguments[i__29460__auto___35856]));

var G__35857 = (i__29460__auto___35856 + (1));
i__29460__auto___35856 = G__35857;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___35854))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___35854){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___35854),args);
});})(g__29552__auto___35854))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__29552__auto___35854){
return (function (seq35799){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35799));
});})(g__29552__auto___35854))
;


var g__29552__auto___35858 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__29552__auto___35858){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35859 = arguments.length;
var i__29460__auto___35860 = (0);
while(true){
if((i__29460__auto___35860 < len__29459__auto___35859)){
args__29466__auto__.push((arguments[i__29460__auto___35860]));

var G__35861 = (i__29460__auto___35860 + (1));
i__29460__auto___35860 = G__35861;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___35858))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___35858){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___35858),args);
});})(g__29552__auto___35858))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__29552__auto___35858){
return (function (seq35800){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35800));
});})(g__29552__auto___35858))
;


var g__29552__auto___35862 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__29552__auto___35862){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35863 = arguments.length;
var i__29460__auto___35864 = (0);
while(true){
if((i__29460__auto___35864 < len__29459__auto___35863)){
args__29466__auto__.push((arguments[i__29460__auto___35864]));

var G__35865 = (i__29460__auto___35864 + (1));
i__29460__auto___35864 = G__35865;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___35862))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___35862){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___35862),args);
});})(g__29552__auto___35862))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__29552__auto___35862){
return (function (seq35801){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35801));
});})(g__29552__auto___35862))
;


var g__29552__auto___35866 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__29552__auto___35866){
return (function cljs$spec$gen$alpha$return(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35867 = arguments.length;
var i__29460__auto___35868 = (0);
while(true){
if((i__29460__auto___35868 < len__29459__auto___35867)){
args__29466__auto__.push((arguments[i__29460__auto___35868]));

var G__35869 = (i__29460__auto___35868 + (1));
i__29460__auto___35868 = G__35869;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___35866))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___35866){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___35866),args);
});})(g__29552__auto___35866))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__29552__auto___35866){
return (function (seq35802){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35802));
});})(g__29552__auto___35866))
;


var g__29552__auto___35870 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__29552__auto___35870){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35871 = arguments.length;
var i__29460__auto___35872 = (0);
while(true){
if((i__29460__auto___35872 < len__29459__auto___35871)){
args__29466__auto__.push((arguments[i__29460__auto___35872]));

var G__35873 = (i__29460__auto___35872 + (1));
i__29460__auto___35872 = G__35873;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___35870))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___35870){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___35870),args);
});})(g__29552__auto___35870))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__29552__auto___35870){
return (function (seq35803){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35803));
});})(g__29552__auto___35870))
;


var g__29552__auto___35874 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__29552__auto___35874){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35875 = arguments.length;
var i__29460__auto___35876 = (0);
while(true){
if((i__29460__auto___35876 < len__29459__auto___35875)){
args__29466__auto__.push((arguments[i__29460__auto___35876]));

var G__35877 = (i__29460__auto___35876 + (1));
i__29460__auto___35876 = G__35877;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___35874))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___35874){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___35874),args);
});})(g__29552__auto___35874))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__29552__auto___35874){
return (function (seq35804){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35804));
});})(g__29552__auto___35874))
;


var g__29552__auto___35878 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__29552__auto___35878){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35879 = arguments.length;
var i__29460__auto___35880 = (0);
while(true){
if((i__29460__auto___35880 < len__29459__auto___35879)){
args__29466__auto__.push((arguments[i__29460__auto___35880]));

var G__35881 = (i__29460__auto___35880 + (1));
i__29460__auto___35880 = G__35881;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29552__auto___35878))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29552__auto___35878){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29552__auto___35878),args);
});})(g__29552__auto___35878))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__29552__auto___35878){
return (function (seq35805){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35805));
});})(g__29552__auto___35878))
;

var g__29565__auto___35903 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__29565__auto___35903){
return (function cljs$spec$gen$alpha$any(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35904 = arguments.length;
var i__29460__auto___35905 = (0);
while(true){
if((i__29460__auto___35905 < len__29459__auto___35904)){
args__29466__auto__.push((arguments[i__29460__auto___35905]));

var G__35906 = (i__29460__auto___35905 + (1));
i__29460__auto___35905 = G__35906;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35903))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35903){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35903);
});})(g__29565__auto___35903))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__29565__auto___35903){
return (function (seq35882){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35882));
});})(g__29565__auto___35903))
;


var g__29565__auto___35907 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__29565__auto___35907){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35908 = arguments.length;
var i__29460__auto___35909 = (0);
while(true){
if((i__29460__auto___35909 < len__29459__auto___35908)){
args__29466__auto__.push((arguments[i__29460__auto___35909]));

var G__35910 = (i__29460__auto___35909 + (1));
i__29460__auto___35909 = G__35910;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35907))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35907){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35907);
});})(g__29565__auto___35907))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__29565__auto___35907){
return (function (seq35883){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35883));
});})(g__29565__auto___35907))
;


var g__29565__auto___35911 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__29565__auto___35911){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35912 = arguments.length;
var i__29460__auto___35913 = (0);
while(true){
if((i__29460__auto___35913 < len__29459__auto___35912)){
args__29466__auto__.push((arguments[i__29460__auto___35913]));

var G__35914 = (i__29460__auto___35913 + (1));
i__29460__auto___35913 = G__35914;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35911))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35911){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35911);
});})(g__29565__auto___35911))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__29565__auto___35911){
return (function (seq35884){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35884));
});})(g__29565__auto___35911))
;


var g__29565__auto___35915 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__29565__auto___35915){
return (function cljs$spec$gen$alpha$char(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35916 = arguments.length;
var i__29460__auto___35917 = (0);
while(true){
if((i__29460__auto___35917 < len__29459__auto___35916)){
args__29466__auto__.push((arguments[i__29460__auto___35917]));

var G__35918 = (i__29460__auto___35917 + (1));
i__29460__auto___35917 = G__35918;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35915))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35915){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35915);
});})(g__29565__auto___35915))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__29565__auto___35915){
return (function (seq35885){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35885));
});})(g__29565__auto___35915))
;


var g__29565__auto___35919 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__29565__auto___35919){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35920 = arguments.length;
var i__29460__auto___35921 = (0);
while(true){
if((i__29460__auto___35921 < len__29459__auto___35920)){
args__29466__auto__.push((arguments[i__29460__auto___35921]));

var G__35922 = (i__29460__auto___35921 + (1));
i__29460__auto___35921 = G__35922;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35919))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35919){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35919);
});})(g__29565__auto___35919))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__29565__auto___35919){
return (function (seq35886){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35886));
});})(g__29565__auto___35919))
;


var g__29565__auto___35923 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__29565__auto___35923){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35924 = arguments.length;
var i__29460__auto___35925 = (0);
while(true){
if((i__29460__auto___35925 < len__29459__auto___35924)){
args__29466__auto__.push((arguments[i__29460__auto___35925]));

var G__35926 = (i__29460__auto___35925 + (1));
i__29460__auto___35925 = G__35926;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35923))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35923){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35923);
});})(g__29565__auto___35923))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__29565__auto___35923){
return (function (seq35887){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35887));
});})(g__29565__auto___35923))
;


var g__29565__auto___35927 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__29565__auto___35927){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35928 = arguments.length;
var i__29460__auto___35929 = (0);
while(true){
if((i__29460__auto___35929 < len__29459__auto___35928)){
args__29466__auto__.push((arguments[i__29460__auto___35929]));

var G__35930 = (i__29460__auto___35929 + (1));
i__29460__auto___35929 = G__35930;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35927))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35927){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35927);
});})(g__29565__auto___35927))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__29565__auto___35927){
return (function (seq35888){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35888));
});})(g__29565__auto___35927))
;


var g__29565__auto___35931 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__29565__auto___35931){
return (function cljs$spec$gen$alpha$double(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35932 = arguments.length;
var i__29460__auto___35933 = (0);
while(true){
if((i__29460__auto___35933 < len__29459__auto___35932)){
args__29466__auto__.push((arguments[i__29460__auto___35933]));

var G__35934 = (i__29460__auto___35933 + (1));
i__29460__auto___35933 = G__35934;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35931))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35931){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35931);
});})(g__29565__auto___35931))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__29565__auto___35931){
return (function (seq35889){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35889));
});})(g__29565__auto___35931))
;


var g__29565__auto___35935 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__29565__auto___35935){
return (function cljs$spec$gen$alpha$int(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35936 = arguments.length;
var i__29460__auto___35937 = (0);
while(true){
if((i__29460__auto___35937 < len__29459__auto___35936)){
args__29466__auto__.push((arguments[i__29460__auto___35937]));

var G__35938 = (i__29460__auto___35937 + (1));
i__29460__auto___35937 = G__35938;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35935))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35935){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35935);
});})(g__29565__auto___35935))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__29565__auto___35935){
return (function (seq35890){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35890));
});})(g__29565__auto___35935))
;


var g__29565__auto___35939 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__29565__auto___35939){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35940 = arguments.length;
var i__29460__auto___35941 = (0);
while(true){
if((i__29460__auto___35941 < len__29459__auto___35940)){
args__29466__auto__.push((arguments[i__29460__auto___35941]));

var G__35942 = (i__29460__auto___35941 + (1));
i__29460__auto___35941 = G__35942;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35939))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35939){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35939);
});})(g__29565__auto___35939))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__29565__auto___35939){
return (function (seq35891){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35891));
});})(g__29565__auto___35939))
;


var g__29565__auto___35943 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__29565__auto___35943){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35944 = arguments.length;
var i__29460__auto___35945 = (0);
while(true){
if((i__29460__auto___35945 < len__29459__auto___35944)){
args__29466__auto__.push((arguments[i__29460__auto___35945]));

var G__35946 = (i__29460__auto___35945 + (1));
i__29460__auto___35945 = G__35946;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35943))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35943){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35943);
});})(g__29565__auto___35943))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__29565__auto___35943){
return (function (seq35892){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35892));
});})(g__29565__auto___35943))
;


var g__29565__auto___35947 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__29565__auto___35947){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35948 = arguments.length;
var i__29460__auto___35949 = (0);
while(true){
if((i__29460__auto___35949 < len__29459__auto___35948)){
args__29466__auto__.push((arguments[i__29460__auto___35949]));

var G__35950 = (i__29460__auto___35949 + (1));
i__29460__auto___35949 = G__35950;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35947))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35947){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35947);
});})(g__29565__auto___35947))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__29565__auto___35947){
return (function (seq35893){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35893));
});})(g__29565__auto___35947))
;


var g__29565__auto___35951 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__29565__auto___35951){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35952 = arguments.length;
var i__29460__auto___35953 = (0);
while(true){
if((i__29460__auto___35953 < len__29459__auto___35952)){
args__29466__auto__.push((arguments[i__29460__auto___35953]));

var G__35954 = (i__29460__auto___35953 + (1));
i__29460__auto___35953 = G__35954;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35951))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35951){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35951);
});})(g__29565__auto___35951))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__29565__auto___35951){
return (function (seq35894){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35894));
});})(g__29565__auto___35951))
;


var g__29565__auto___35955 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__29565__auto___35955){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35956 = arguments.length;
var i__29460__auto___35957 = (0);
while(true){
if((i__29460__auto___35957 < len__29459__auto___35956)){
args__29466__auto__.push((arguments[i__29460__auto___35957]));

var G__35958 = (i__29460__auto___35957 + (1));
i__29460__auto___35957 = G__35958;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35955))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35955){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35955);
});})(g__29565__auto___35955))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__29565__auto___35955){
return (function (seq35895){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35895));
});})(g__29565__auto___35955))
;


var g__29565__auto___35959 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__29565__auto___35959){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35960 = arguments.length;
var i__29460__auto___35961 = (0);
while(true){
if((i__29460__auto___35961 < len__29459__auto___35960)){
args__29466__auto__.push((arguments[i__29460__auto___35961]));

var G__35962 = (i__29460__auto___35961 + (1));
i__29460__auto___35961 = G__35962;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35959))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35959){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35959);
});})(g__29565__auto___35959))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__29565__auto___35959){
return (function (seq35896){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35896));
});})(g__29565__auto___35959))
;


var g__29565__auto___35963 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__29565__auto___35963){
return (function cljs$spec$gen$alpha$string(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35964 = arguments.length;
var i__29460__auto___35965 = (0);
while(true){
if((i__29460__auto___35965 < len__29459__auto___35964)){
args__29466__auto__.push((arguments[i__29460__auto___35965]));

var G__35966 = (i__29460__auto___35965 + (1));
i__29460__auto___35965 = G__35966;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35963))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35963){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35963);
});})(g__29565__auto___35963))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__29565__auto___35963){
return (function (seq35897){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35897));
});})(g__29565__auto___35963))
;


var g__29565__auto___35967 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__29565__auto___35967){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35968 = arguments.length;
var i__29460__auto___35969 = (0);
while(true){
if((i__29460__auto___35969 < len__29459__auto___35968)){
args__29466__auto__.push((arguments[i__29460__auto___35969]));

var G__35970 = (i__29460__auto___35969 + (1));
i__29460__auto___35969 = G__35970;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35967))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35967){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35967);
});})(g__29565__auto___35967))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__29565__auto___35967){
return (function (seq35898){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35898));
});})(g__29565__auto___35967))
;


var g__29565__auto___35971 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__29565__auto___35971){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35972 = arguments.length;
var i__29460__auto___35973 = (0);
while(true){
if((i__29460__auto___35973 < len__29459__auto___35972)){
args__29466__auto__.push((arguments[i__29460__auto___35973]));

var G__35974 = (i__29460__auto___35973 + (1));
i__29460__auto___35973 = G__35974;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35971))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35971){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35971);
});})(g__29565__auto___35971))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__29565__auto___35971){
return (function (seq35899){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35899));
});})(g__29565__auto___35971))
;


var g__29565__auto___35975 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__29565__auto___35975){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35976 = arguments.length;
var i__29460__auto___35977 = (0);
while(true){
if((i__29460__auto___35977 < len__29459__auto___35976)){
args__29466__auto__.push((arguments[i__29460__auto___35977]));

var G__35978 = (i__29460__auto___35977 + (1));
i__29460__auto___35977 = G__35978;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35975))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35975){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35975);
});})(g__29565__auto___35975))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__29565__auto___35975){
return (function (seq35900){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35900));
});})(g__29565__auto___35975))
;


var g__29565__auto___35979 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__29565__auto___35979){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35980 = arguments.length;
var i__29460__auto___35981 = (0);
while(true){
if((i__29460__auto___35981 < len__29459__auto___35980)){
args__29466__auto__.push((arguments[i__29460__auto___35981]));

var G__35982 = (i__29460__auto___35981 + (1));
i__29460__auto___35981 = G__35982;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35979))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35979){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35979);
});})(g__29565__auto___35979))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__29565__auto___35979){
return (function (seq35901){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35901));
});})(g__29565__auto___35979))
;


var g__29565__auto___35983 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__29565__auto___35983){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35984 = arguments.length;
var i__29460__auto___35985 = (0);
while(true){
if((i__29460__auto___35985 < len__29459__auto___35984)){
args__29466__auto__.push((arguments[i__29460__auto___35985]));

var G__35986 = (i__29460__auto___35985 + (1));
i__29460__auto___35985 = G__35986;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});})(g__29565__auto___35983))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29565__auto___35983){
return (function (args){
return cljs.core.deref.call(null,g__29565__auto___35983);
});})(g__29565__auto___35983))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__29565__auto___35983){
return (function (seq35902){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35902));
});})(g__29565__auto___35983))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__29466__auto__ = [];
var len__29459__auto___35989 = arguments.length;
var i__29460__auto___35990 = (0);
while(true){
if((i__29460__auto___35990 < len__29459__auto___35989)){
args__29466__auto__.push((arguments[i__29460__auto___35990]));

var G__35991 = (i__29460__auto___35990 + (1));
i__29460__auto___35990 = G__35991;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__35987_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35987_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq35988){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35988));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__35992_SHARP_){
return (new Date(p1__35992_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1512749443742
