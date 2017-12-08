// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__37416 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37417 = null;
var count__37418 = (0);
var i__37419 = (0);
while(true){
if((i__37419 < count__37418)){
var vec__37420 = cljs.core._nth.call(null,chunk__37417,i__37419);
var effect_key = cljs.core.nth.call(null,vec__37420,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37420,(1),null);
var temp__4655__auto___37426 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___37426)){
var effect_fn_37427 = temp__4655__auto___37426;
effect_fn_37427.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__37428 = seq__37416;
var G__37429 = chunk__37417;
var G__37430 = count__37418;
var G__37431 = (i__37419 + (1));
seq__37416 = G__37428;
chunk__37417 = G__37429;
count__37418 = G__37430;
i__37419 = G__37431;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37416);
if(temp__4657__auto__){
var seq__37416__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37416__$1)){
var c__29129__auto__ = cljs.core.chunk_first.call(null,seq__37416__$1);
var G__37432 = cljs.core.chunk_rest.call(null,seq__37416__$1);
var G__37433 = c__29129__auto__;
var G__37434 = cljs.core.count.call(null,c__29129__auto__);
var G__37435 = (0);
seq__37416 = G__37432;
chunk__37417 = G__37433;
count__37418 = G__37434;
i__37419 = G__37435;
continue;
} else {
var vec__37423 = cljs.core.first.call(null,seq__37416__$1);
var effect_key = cljs.core.nth.call(null,vec__37423,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37423,(1),null);
var temp__4655__auto___37436 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___37436)){
var effect_fn_37437 = temp__4655__auto___37436;
effect_fn_37437.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__37438 = cljs.core.next.call(null,seq__37416__$1);
var G__37439 = null;
var G__37440 = (0);
var G__37441 = (0);
seq__37416 = G__37438;
chunk__37417 = G__37439;
count__37418 = G__37440;
i__37419 = G__37441;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__37442 = cljs.core.seq.call(null,value);
var chunk__37443 = null;
var count__37444 = (0);
var i__37445 = (0);
while(true){
if((i__37445 < count__37444)){
var map__37446 = cljs.core._nth.call(null,chunk__37443,i__37445);
var map__37446__$1 = ((((!((map__37446 == null)))?((((map__37446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37446):map__37446);
var effect = map__37446__$1;
var ms = cljs.core.get.call(null,map__37446__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__37446__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__37442,chunk__37443,count__37444,i__37445,map__37446,map__37446__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__37442,chunk__37443,count__37444,i__37445,map__37446,map__37446__$1,effect,ms,dispatch))
,ms);
}

var G__37450 = seq__37442;
var G__37451 = chunk__37443;
var G__37452 = count__37444;
var G__37453 = (i__37445 + (1));
seq__37442 = G__37450;
chunk__37443 = G__37451;
count__37444 = G__37452;
i__37445 = G__37453;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37442);
if(temp__4657__auto__){
var seq__37442__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37442__$1)){
var c__29129__auto__ = cljs.core.chunk_first.call(null,seq__37442__$1);
var G__37454 = cljs.core.chunk_rest.call(null,seq__37442__$1);
var G__37455 = c__29129__auto__;
var G__37456 = cljs.core.count.call(null,c__29129__auto__);
var G__37457 = (0);
seq__37442 = G__37454;
chunk__37443 = G__37455;
count__37444 = G__37456;
i__37445 = G__37457;
continue;
} else {
var map__37448 = cljs.core.first.call(null,seq__37442__$1);
var map__37448__$1 = ((((!((map__37448 == null)))?((((map__37448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37448.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37448):map__37448);
var effect = map__37448__$1;
var ms = cljs.core.get.call(null,map__37448__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__37448__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__37442,chunk__37443,count__37444,i__37445,map__37448,map__37448__$1,effect,ms,dispatch,seq__37442__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__37442,chunk__37443,count__37444,i__37445,map__37448,map__37448__$1,effect,ms,dispatch,seq__37442__$1,temp__4657__auto__))
,ms);
}

var G__37458 = cljs.core.next.call(null,seq__37442__$1);
var G__37459 = null;
var G__37460 = (0);
var G__37461 = (0);
seq__37442 = G__37458;
chunk__37443 = G__37459;
count__37444 = G__37460;
i__37445 = G__37461;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__37462 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__37463 = null;
var count__37464 = (0);
var i__37465 = (0);
while(true){
if((i__37465 < count__37464)){
var event = cljs.core._nth.call(null,chunk__37463,i__37465);
re_frame.router.dispatch.call(null,event);

var G__37466 = seq__37462;
var G__37467 = chunk__37463;
var G__37468 = count__37464;
var G__37469 = (i__37465 + (1));
seq__37462 = G__37466;
chunk__37463 = G__37467;
count__37464 = G__37468;
i__37465 = G__37469;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37462);
if(temp__4657__auto__){
var seq__37462__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37462__$1)){
var c__29129__auto__ = cljs.core.chunk_first.call(null,seq__37462__$1);
var G__37470 = cljs.core.chunk_rest.call(null,seq__37462__$1);
var G__37471 = c__29129__auto__;
var G__37472 = cljs.core.count.call(null,c__29129__auto__);
var G__37473 = (0);
seq__37462 = G__37470;
chunk__37463 = G__37471;
count__37464 = G__37472;
i__37465 = G__37473;
continue;
} else {
var event = cljs.core.first.call(null,seq__37462__$1);
re_frame.router.dispatch.call(null,event);

var G__37474 = cljs.core.next.call(null,seq__37462__$1);
var G__37475 = null;
var G__37476 = (0);
var G__37477 = (0);
seq__37462 = G__37474;
chunk__37463 = G__37475;
count__37464 = G__37476;
i__37465 = G__37477;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__37478 = cljs.core.seq.call(null,value);
var chunk__37479 = null;
var count__37480 = (0);
var i__37481 = (0);
while(true){
if((i__37481 < count__37480)){
var event = cljs.core._nth.call(null,chunk__37479,i__37481);
clear_event.call(null,event);

var G__37482 = seq__37478;
var G__37483 = chunk__37479;
var G__37484 = count__37480;
var G__37485 = (i__37481 + (1));
seq__37478 = G__37482;
chunk__37479 = G__37483;
count__37480 = G__37484;
i__37481 = G__37485;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37478);
if(temp__4657__auto__){
var seq__37478__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37478__$1)){
var c__29129__auto__ = cljs.core.chunk_first.call(null,seq__37478__$1);
var G__37486 = cljs.core.chunk_rest.call(null,seq__37478__$1);
var G__37487 = c__29129__auto__;
var G__37488 = cljs.core.count.call(null,c__29129__auto__);
var G__37489 = (0);
seq__37478 = G__37486;
chunk__37479 = G__37487;
count__37480 = G__37488;
i__37481 = G__37489;
continue;
} else {
var event = cljs.core.first.call(null,seq__37478__$1);
clear_event.call(null,event);

var G__37490 = cljs.core.next.call(null,seq__37478__$1);
var G__37491 = null;
var G__37492 = (0);
var G__37493 = (0);
seq__37478 = G__37490;
chunk__37479 = G__37491;
count__37480 = G__37492;
i__37481 = G__37493;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1512749445780
