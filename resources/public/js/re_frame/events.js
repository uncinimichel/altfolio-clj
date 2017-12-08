// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__30962_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__30962_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4657__auto___30963 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___30963)){
var not_i_30964 = temp__4657__auto___30963;
if(cljs.core.fn_QMARK_.call(null,not_i_30964)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_30964);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_30964);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_30965 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_30966 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__30910__auto___30979 = re_frame.interop.now.call(null);
var duration__30911__auto___30980 = (end__30910__auto___30979 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__30967_30981 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__30968_30982 = null;
var count__30969_30983 = (0);
var i__30970_30984 = (0);
while(true){
if((i__30970_30984 < count__30969_30983)){
var vec__30971_30985 = cljs.core._nth.call(null,chunk__30968_30982,i__30970_30984);
var k__30912__auto___30986 = cljs.core.nth.call(null,vec__30971_30985,(0),null);
var cb__30913__auto___30987 = cljs.core.nth.call(null,vec__30971_30985,(1),null);
try{cb__30913__auto___30987.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30911__auto___30980,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e30974){if((e30974 instanceof java.lang.Exception)){
var e__30914__auto___30988 = e30974;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__30912__auto___30986,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__30914__auto___30988);
} else {
throw e30974;

}
}
var G__30989 = seq__30967_30981;
var G__30990 = chunk__30968_30982;
var G__30991 = count__30969_30983;
var G__30992 = (i__30970_30984 + (1));
seq__30967_30981 = G__30989;
chunk__30968_30982 = G__30990;
count__30969_30983 = G__30991;
i__30970_30984 = G__30992;
continue;
} else {
var temp__4657__auto___30993 = cljs.core.seq.call(null,seq__30967_30981);
if(temp__4657__auto___30993){
var seq__30967_30994__$1 = temp__4657__auto___30993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30967_30994__$1)){
var c__29129__auto___30995 = cljs.core.chunk_first.call(null,seq__30967_30994__$1);
var G__30996 = cljs.core.chunk_rest.call(null,seq__30967_30994__$1);
var G__30997 = c__29129__auto___30995;
var G__30998 = cljs.core.count.call(null,c__29129__auto___30995);
var G__30999 = (0);
seq__30967_30981 = G__30996;
chunk__30968_30982 = G__30997;
count__30969_30983 = G__30998;
i__30970_30984 = G__30999;
continue;
} else {
var vec__30975_31000 = cljs.core.first.call(null,seq__30967_30994__$1);
var k__30912__auto___31001 = cljs.core.nth.call(null,vec__30975_31000,(0),null);
var cb__30913__auto___31002 = cljs.core.nth.call(null,vec__30975_31000,(1),null);
try{cb__30913__auto___31002.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30911__auto___30980,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e30978){if((e30978 instanceof java.lang.Exception)){
var e__30914__auto___31003 = e30978;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__30912__auto___31001,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__30914__auto___31003);
} else {
throw e30978;

}
}
var G__31004 = cljs.core.next.call(null,seq__30967_30994__$1);
var G__31005 = null;
var G__31006 = (0);
var G__31007 = (0);
seq__30967_30981 = G__31004;
chunk__30968_30982 = G__31005;
count__30969_30983 = G__31006;
i__30970_30984 = G__31007;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_30966;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_30965;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1512749438921
