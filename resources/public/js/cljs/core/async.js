// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32024 = arguments.length;
switch (G__32024) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32025 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32025 = (function (f,blockable,meta32026){
this.f = f;
this.blockable = blockable;
this.meta32026 = meta32026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32027,meta32026__$1){
var self__ = this;
var _32027__$1 = this;
return (new cljs.core.async.t_cljs$core$async32025(self__.f,self__.blockable,meta32026__$1));
});

cljs.core.async.t_cljs$core$async32025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32027){
var self__ = this;
var _32027__$1 = this;
return self__.meta32026;
});

cljs.core.async.t_cljs$core$async32025.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32025.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32025.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32025.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32026","meta32026",-473170116,null)], null);
});

cljs.core.async.t_cljs$core$async32025.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32025.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32025";

cljs.core.async.t_cljs$core$async32025.cljs$lang$ctorPrWriter = (function (this__28914__auto__,writer__28915__auto__,opt__28916__auto__){
return cljs.core._write.call(null,writer__28915__auto__,"cljs.core.async/t_cljs$core$async32025");
});

cljs.core.async.__GT_t_cljs$core$async32025 = (function cljs$core$async$__GT_t_cljs$core$async32025(f__$1,blockable__$1,meta32026){
return (new cljs.core.async.t_cljs$core$async32025(f__$1,blockable__$1,meta32026));
});

}

return (new cljs.core.async.t_cljs$core$async32025(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32031 = arguments.length;
switch (G__32031) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32034 = arguments.length;
switch (G__32034) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32037 = arguments.length;
switch (G__32037) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32039 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32039);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32039,ret){
return (function (){
return fn1.call(null,val_32039);
});})(val_32039,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32041 = arguments.length;
switch (G__32041) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__29235__auto___32043 = n;
var x_32044 = (0);
while(true){
if((x_32044 < n__29235__auto___32043)){
(a[x_32044] = (0));

var G__32045 = (x_32044 + (1));
x_32044 = G__32045;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32046 = (i + (1));
i = G__32046;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32047 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32047 = (function (flag,meta32048){
this.flag = flag;
this.meta32048 = meta32048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32049,meta32048__$1){
var self__ = this;
var _32049__$1 = this;
return (new cljs.core.async.t_cljs$core$async32047(self__.flag,meta32048__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32047.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32049){
var self__ = this;
var _32049__$1 = this;
return self__.meta32048;
});})(flag))
;

cljs.core.async.t_cljs$core$async32047.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32047.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32047.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32048","meta32048",558360181,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32047.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32047";

cljs.core.async.t_cljs$core$async32047.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28914__auto__,writer__28915__auto__,opt__28916__auto__){
return cljs.core._write.call(null,writer__28915__auto__,"cljs.core.async/t_cljs$core$async32047");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32047 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32047(flag__$1,meta32048){
return (new cljs.core.async.t_cljs$core$async32047(flag__$1,meta32048));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32047(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32050 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32050 = (function (flag,cb,meta32051){
this.flag = flag;
this.cb = cb;
this.meta32051 = meta32051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32052,meta32051__$1){
var self__ = this;
var _32052__$1 = this;
return (new cljs.core.async.t_cljs$core$async32050(self__.flag,self__.cb,meta32051__$1));
});

cljs.core.async.t_cljs$core$async32050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32052){
var self__ = this;
var _32052__$1 = this;
return self__.meta32051;
});

cljs.core.async.t_cljs$core$async32050.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32050.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32050.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32050.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32051","meta32051",1938333876,null)], null);
});

cljs.core.async.t_cljs$core$async32050.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32050";

cljs.core.async.t_cljs$core$async32050.cljs$lang$ctorPrWriter = (function (this__28914__auto__,writer__28915__auto__,opt__28916__auto__){
return cljs.core._write.call(null,writer__28915__auto__,"cljs.core.async/t_cljs$core$async32050");
});

cljs.core.async.__GT_t_cljs$core$async32050 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32050(flag__$1,cb__$1,meta32051){
return (new cljs.core.async.t_cljs$core$async32050(flag__$1,cb__$1,meta32051));
});

}

return (new cljs.core.async.t_cljs$core$async32050(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32053_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32053_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32054_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32054_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28289__auto__ = wport;
if(cljs.core.truth_(or__28289__auto__)){
return or__28289__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32055 = (i + (1));
i = G__32055;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28289__auto__ = ret;
if(cljs.core.truth_(or__28289__auto__)){
return or__28289__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28277__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28277__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28277__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29466__auto__ = [];
var len__29459__auto___32061 = arguments.length;
var i__29460__auto___32062 = (0);
while(true){
if((i__29460__auto___32062 < len__29459__auto___32061)){
args__29466__auto__.push((arguments[i__29460__auto___32062]));

var G__32063 = (i__29460__auto___32062 + (1));
i__29460__auto___32062 = G__32063;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((1) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29467__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32058){
var map__32059 = p__32058;
var map__32059__$1 = ((((!((map__32059 == null)))?((((map__32059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32059):map__32059);
var opts = map__32059__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32056){
var G__32057 = cljs.core.first.call(null,seq32056);
var seq32056__$1 = cljs.core.next.call(null,seq32056);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32057,seq32056__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32065 = arguments.length;
switch (G__32065) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31978__auto___32111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___32111){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto___32111){
return (function (state_32089){
var state_val_32090 = (state_32089[(1)]);
if((state_val_32090 === (7))){
var inst_32085 = (state_32089[(2)]);
var state_32089__$1 = state_32089;
var statearr_32091_32112 = state_32089__$1;
(statearr_32091_32112[(2)] = inst_32085);

(statearr_32091_32112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (1))){
var state_32089__$1 = state_32089;
var statearr_32092_32113 = state_32089__$1;
(statearr_32092_32113[(2)] = null);

(statearr_32092_32113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (4))){
var inst_32068 = (state_32089[(7)]);
var inst_32068__$1 = (state_32089[(2)]);
var inst_32069 = (inst_32068__$1 == null);
var state_32089__$1 = (function (){var statearr_32093 = state_32089;
(statearr_32093[(7)] = inst_32068__$1);

return statearr_32093;
})();
if(cljs.core.truth_(inst_32069)){
var statearr_32094_32114 = state_32089__$1;
(statearr_32094_32114[(1)] = (5));

} else {
var statearr_32095_32115 = state_32089__$1;
(statearr_32095_32115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (13))){
var state_32089__$1 = state_32089;
var statearr_32096_32116 = state_32089__$1;
(statearr_32096_32116[(2)] = null);

(statearr_32096_32116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (6))){
var inst_32068 = (state_32089[(7)]);
var state_32089__$1 = state_32089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32089__$1,(11),to,inst_32068);
} else {
if((state_val_32090 === (3))){
var inst_32087 = (state_32089[(2)]);
var state_32089__$1 = state_32089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32089__$1,inst_32087);
} else {
if((state_val_32090 === (12))){
var state_32089__$1 = state_32089;
var statearr_32097_32117 = state_32089__$1;
(statearr_32097_32117[(2)] = null);

(statearr_32097_32117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (2))){
var state_32089__$1 = state_32089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32089__$1,(4),from);
} else {
if((state_val_32090 === (11))){
var inst_32078 = (state_32089[(2)]);
var state_32089__$1 = state_32089;
if(cljs.core.truth_(inst_32078)){
var statearr_32098_32118 = state_32089__$1;
(statearr_32098_32118[(1)] = (12));

} else {
var statearr_32099_32119 = state_32089__$1;
(statearr_32099_32119[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (9))){
var state_32089__$1 = state_32089;
var statearr_32100_32120 = state_32089__$1;
(statearr_32100_32120[(2)] = null);

(statearr_32100_32120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (5))){
var state_32089__$1 = state_32089;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32101_32121 = state_32089__$1;
(statearr_32101_32121[(1)] = (8));

} else {
var statearr_32102_32122 = state_32089__$1;
(statearr_32102_32122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (14))){
var inst_32083 = (state_32089[(2)]);
var state_32089__$1 = state_32089;
var statearr_32103_32123 = state_32089__$1;
(statearr_32103_32123[(2)] = inst_32083);

(statearr_32103_32123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (10))){
var inst_32075 = (state_32089[(2)]);
var state_32089__$1 = state_32089;
var statearr_32104_32124 = state_32089__$1;
(statearr_32104_32124[(2)] = inst_32075);

(statearr_32104_32124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32090 === (8))){
var inst_32072 = cljs.core.async.close_BANG_.call(null,to);
var state_32089__$1 = state_32089;
var statearr_32105_32125 = state_32089__$1;
(statearr_32105_32125[(2)] = inst_32072);

(statearr_32105_32125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31978__auto___32111))
;
return ((function (switch__31890__auto__,c__31978__auto___32111){
return (function() {
var cljs$core$async$state_machine__31891__auto__ = null;
var cljs$core$async$state_machine__31891__auto____0 = (function (){
var statearr_32106 = [null,null,null,null,null,null,null,null];
(statearr_32106[(0)] = cljs$core$async$state_machine__31891__auto__);

(statearr_32106[(1)] = (1));

return statearr_32106;
});
var cljs$core$async$state_machine__31891__auto____1 = (function (state_32089){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_32089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e32107){if((e32107 instanceof Object)){
var ex__31894__auto__ = e32107;
var statearr_32108_32126 = state_32089;
(statearr_32108_32126[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32127 = state_32089;
state_32089 = G__32127;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$state_machine__31891__auto__ = function(state_32089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31891__auto____1.call(this,state_32089);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31891__auto____0;
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31891__auto____1;
return cljs$core$async$state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto___32111))
})();
var state__31980__auto__ = (function (){var statearr_32109 = f__31979__auto__.call(null);
(statearr_32109[(6)] = c__31978__auto___32111);

return statearr_32109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___32111))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32128){
var vec__32129 = p__32128;
var v = cljs.core.nth.call(null,vec__32129,(0),null);
var p = cljs.core.nth.call(null,vec__32129,(1),null);
var job = vec__32129;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31978__auto___32300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___32300,res,vec__32129,v,p,job,jobs,results){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto___32300,res,vec__32129,v,p,job,jobs,results){
return (function (state_32136){
var state_val_32137 = (state_32136[(1)]);
if((state_val_32137 === (1))){
var state_32136__$1 = state_32136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32136__$1,(2),res,v);
} else {
if((state_val_32137 === (2))){
var inst_32133 = (state_32136[(2)]);
var inst_32134 = cljs.core.async.close_BANG_.call(null,res);
var state_32136__$1 = (function (){var statearr_32138 = state_32136;
(statearr_32138[(7)] = inst_32133);

return statearr_32138;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32136__$1,inst_32134);
} else {
return null;
}
}
});})(c__31978__auto___32300,res,vec__32129,v,p,job,jobs,results))
;
return ((function (switch__31890__auto__,c__31978__auto___32300,res,vec__32129,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____0 = (function (){
var statearr_32139 = [null,null,null,null,null,null,null,null];
(statearr_32139[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__);

(statearr_32139[(1)] = (1));

return statearr_32139;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____1 = (function (state_32136){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_32136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e32140){if((e32140 instanceof Object)){
var ex__31894__auto__ = e32140;
var statearr_32141_32301 = state_32136;
(statearr_32141_32301[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32302 = state_32136;
state_32136 = G__32302;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__ = function(state_32136){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____1.call(this,state_32136);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto___32300,res,vec__32129,v,p,job,jobs,results))
})();
var state__31980__auto__ = (function (){var statearr_32142 = f__31979__auto__.call(null);
(statearr_32142[(6)] = c__31978__auto___32300);

return statearr_32142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___32300,res,vec__32129,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32143){
var vec__32144 = p__32143;
var v = cljs.core.nth.call(null,vec__32144,(0),null);
var p = cljs.core.nth.call(null,vec__32144,(1),null);
var job = vec__32144;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29235__auto___32303 = n;
var __32304 = (0);
while(true){
if((__32304 < n__29235__auto___32303)){
var G__32147_32305 = type;
var G__32147_32306__$1 = (((G__32147_32305 instanceof cljs.core.Keyword))?G__32147_32305.fqn:null);
switch (G__32147_32306__$1) {
case "compute":
var c__31978__auto___32308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32304,c__31978__auto___32308,G__32147_32305,G__32147_32306__$1,n__29235__auto___32303,jobs,results,process,async){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (__32304,c__31978__auto___32308,G__32147_32305,G__32147_32306__$1,n__29235__auto___32303,jobs,results,process,async){
return (function (state_32160){
var state_val_32161 = (state_32160[(1)]);
if((state_val_32161 === (1))){
var state_32160__$1 = state_32160;
var statearr_32162_32309 = state_32160__$1;
(statearr_32162_32309[(2)] = null);

(statearr_32162_32309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32161 === (2))){
var state_32160__$1 = state_32160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32160__$1,(4),jobs);
} else {
if((state_val_32161 === (3))){
var inst_32158 = (state_32160[(2)]);
var state_32160__$1 = state_32160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32160__$1,inst_32158);
} else {
if((state_val_32161 === (4))){
var inst_32150 = (state_32160[(2)]);
var inst_32151 = process.call(null,inst_32150);
var state_32160__$1 = state_32160;
if(cljs.core.truth_(inst_32151)){
var statearr_32163_32310 = state_32160__$1;
(statearr_32163_32310[(1)] = (5));

} else {
var statearr_32164_32311 = state_32160__$1;
(statearr_32164_32311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32161 === (5))){
var state_32160__$1 = state_32160;
var statearr_32165_32312 = state_32160__$1;
(statearr_32165_32312[(2)] = null);

(statearr_32165_32312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32161 === (6))){
var state_32160__$1 = state_32160;
var statearr_32166_32313 = state_32160__$1;
(statearr_32166_32313[(2)] = null);

(statearr_32166_32313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32161 === (7))){
var inst_32156 = (state_32160[(2)]);
var state_32160__$1 = state_32160;
var statearr_32167_32314 = state_32160__$1;
(statearr_32167_32314[(2)] = inst_32156);

(statearr_32167_32314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32304,c__31978__auto___32308,G__32147_32305,G__32147_32306__$1,n__29235__auto___32303,jobs,results,process,async))
;
return ((function (__32304,switch__31890__auto__,c__31978__auto___32308,G__32147_32305,G__32147_32306__$1,n__29235__auto___32303,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____0 = (function (){
var statearr_32168 = [null,null,null,null,null,null,null];
(statearr_32168[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__);

(statearr_32168[(1)] = (1));

return statearr_32168;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____1 = (function (state_32160){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_32160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e32169){if((e32169 instanceof Object)){
var ex__31894__auto__ = e32169;
var statearr_32170_32315 = state_32160;
(statearr_32170_32315[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32316 = state_32160;
state_32160 = G__32316;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__ = function(state_32160){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____1.call(this,state_32160);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__;
})()
;})(__32304,switch__31890__auto__,c__31978__auto___32308,G__32147_32305,G__32147_32306__$1,n__29235__auto___32303,jobs,results,process,async))
})();
var state__31980__auto__ = (function (){var statearr_32171 = f__31979__auto__.call(null);
(statearr_32171[(6)] = c__31978__auto___32308);

return statearr_32171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(__32304,c__31978__auto___32308,G__32147_32305,G__32147_32306__$1,n__29235__auto___32303,jobs,results,process,async))
);


break;
case "async":
var c__31978__auto___32317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32304,c__31978__auto___32317,G__32147_32305,G__32147_32306__$1,n__29235__auto___32303,jobs,results,process,async){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (__32304,c__31978__auto___32317,G__32147_32305,G__32147_32306__$1,n__29235__auto___32303,jobs,results,process,async){
return (function (state_32184){
var state_val_32185 = (state_32184[(1)]);
if((state_val_32185 === (1))){
var state_32184__$1 = state_32184;
var statearr_32186_32318 = state_32184__$1;
(statearr_32186_32318[(2)] = null);

(statearr_32186_32318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32185 === (2))){
var state_32184__$1 = state_32184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32184__$1,(4),jobs);
} else {
if((state_val_32185 === (3))){
var inst_32182 = (state_32184[(2)]);
var state_32184__$1 = state_32184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32184__$1,inst_32182);
} else {
if((state_val_32185 === (4))){
var inst_32174 = (state_32184[(2)]);
var inst_32175 = async.call(null,inst_32174);
var state_32184__$1 = state_32184;
if(cljs.core.truth_(inst_32175)){
var statearr_32187_32319 = state_32184__$1;
(statearr_32187_32319[(1)] = (5));

} else {
var statearr_32188_32320 = state_32184__$1;
(statearr_32188_32320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32185 === (5))){
var state_32184__$1 = state_32184;
var statearr_32189_32321 = state_32184__$1;
(statearr_32189_32321[(2)] = null);

(statearr_32189_32321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32185 === (6))){
var state_32184__$1 = state_32184;
var statearr_32190_32322 = state_32184__$1;
(statearr_32190_32322[(2)] = null);

(statearr_32190_32322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32185 === (7))){
var inst_32180 = (state_32184[(2)]);
var state_32184__$1 = state_32184;
var statearr_32191_32323 = state_32184__$1;
(statearr_32191_32323[(2)] = inst_32180);

(statearr_32191_32323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32304,c__31978__auto___32317,G__32147_32305,G__32147_32306__$1,n__29235__auto___32303,jobs,results,process,async))
;
return ((function (__32304,switch__31890__auto__,c__31978__auto___32317,G__32147_32305,G__32147_32306__$1,n__29235__auto___32303,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____0 = (function (){
var statearr_32192 = [null,null,null,null,null,null,null];
(statearr_32192[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__);

(statearr_32192[(1)] = (1));

return statearr_32192;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____1 = (function (state_32184){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_32184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e32193){if((e32193 instanceof Object)){
var ex__31894__auto__ = e32193;
var statearr_32194_32324 = state_32184;
(statearr_32194_32324[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32325 = state_32184;
state_32184 = G__32325;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__ = function(state_32184){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____1.call(this,state_32184);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__;
})()
;})(__32304,switch__31890__auto__,c__31978__auto___32317,G__32147_32305,G__32147_32306__$1,n__29235__auto___32303,jobs,results,process,async))
})();
var state__31980__auto__ = (function (){var statearr_32195 = f__31979__auto__.call(null);
(statearr_32195[(6)] = c__31978__auto___32317);

return statearr_32195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(__32304,c__31978__auto___32317,G__32147_32305,G__32147_32306__$1,n__29235__auto___32303,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32147_32306__$1)].join('')));

}

var G__32326 = (__32304 + (1));
__32304 = G__32326;
continue;
} else {
}
break;
}

var c__31978__auto___32327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___32327,jobs,results,process,async){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto___32327,jobs,results,process,async){
return (function (state_32217){
var state_val_32218 = (state_32217[(1)]);
if((state_val_32218 === (1))){
var state_32217__$1 = state_32217;
var statearr_32219_32328 = state_32217__$1;
(statearr_32219_32328[(2)] = null);

(statearr_32219_32328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (2))){
var state_32217__$1 = state_32217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32217__$1,(4),from);
} else {
if((state_val_32218 === (3))){
var inst_32215 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32217__$1,inst_32215);
} else {
if((state_val_32218 === (4))){
var inst_32198 = (state_32217[(7)]);
var inst_32198__$1 = (state_32217[(2)]);
var inst_32199 = (inst_32198__$1 == null);
var state_32217__$1 = (function (){var statearr_32220 = state_32217;
(statearr_32220[(7)] = inst_32198__$1);

return statearr_32220;
})();
if(cljs.core.truth_(inst_32199)){
var statearr_32221_32329 = state_32217__$1;
(statearr_32221_32329[(1)] = (5));

} else {
var statearr_32222_32330 = state_32217__$1;
(statearr_32222_32330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (5))){
var inst_32201 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32217__$1 = state_32217;
var statearr_32223_32331 = state_32217__$1;
(statearr_32223_32331[(2)] = inst_32201);

(statearr_32223_32331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (6))){
var inst_32198 = (state_32217[(7)]);
var inst_32203 = (state_32217[(8)]);
var inst_32203__$1 = cljs.core.async.chan.call(null,(1));
var inst_32204 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32205 = [inst_32198,inst_32203__$1];
var inst_32206 = (new cljs.core.PersistentVector(null,2,(5),inst_32204,inst_32205,null));
var state_32217__$1 = (function (){var statearr_32224 = state_32217;
(statearr_32224[(8)] = inst_32203__$1);

return statearr_32224;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32217__$1,(8),jobs,inst_32206);
} else {
if((state_val_32218 === (7))){
var inst_32213 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
var statearr_32225_32332 = state_32217__$1;
(statearr_32225_32332[(2)] = inst_32213);

(statearr_32225_32332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (8))){
var inst_32203 = (state_32217[(8)]);
var inst_32208 = (state_32217[(2)]);
var state_32217__$1 = (function (){var statearr_32226 = state_32217;
(statearr_32226[(9)] = inst_32208);

return statearr_32226;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32217__$1,(9),results,inst_32203);
} else {
if((state_val_32218 === (9))){
var inst_32210 = (state_32217[(2)]);
var state_32217__$1 = (function (){var statearr_32227 = state_32217;
(statearr_32227[(10)] = inst_32210);

return statearr_32227;
})();
var statearr_32228_32333 = state_32217__$1;
(statearr_32228_32333[(2)] = null);

(statearr_32228_32333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__31978__auto___32327,jobs,results,process,async))
;
return ((function (switch__31890__auto__,c__31978__auto___32327,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____0 = (function (){
var statearr_32229 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32229[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__);

(statearr_32229[(1)] = (1));

return statearr_32229;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____1 = (function (state_32217){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_32217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e32230){if((e32230 instanceof Object)){
var ex__31894__auto__ = e32230;
var statearr_32231_32334 = state_32217;
(statearr_32231_32334[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32335 = state_32217;
state_32217 = G__32335;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__ = function(state_32217){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____1.call(this,state_32217);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto___32327,jobs,results,process,async))
})();
var state__31980__auto__ = (function (){var statearr_32232 = f__31979__auto__.call(null);
(statearr_32232[(6)] = c__31978__auto___32327);

return statearr_32232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___32327,jobs,results,process,async))
);


var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__,jobs,results,process,async){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto__,jobs,results,process,async){
return (function (state_32270){
var state_val_32271 = (state_32270[(1)]);
if((state_val_32271 === (7))){
var inst_32266 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
var statearr_32272_32336 = state_32270__$1;
(statearr_32272_32336[(2)] = inst_32266);

(statearr_32272_32336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (20))){
var state_32270__$1 = state_32270;
var statearr_32273_32337 = state_32270__$1;
(statearr_32273_32337[(2)] = null);

(statearr_32273_32337[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (1))){
var state_32270__$1 = state_32270;
var statearr_32274_32338 = state_32270__$1;
(statearr_32274_32338[(2)] = null);

(statearr_32274_32338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (4))){
var inst_32235 = (state_32270[(7)]);
var inst_32235__$1 = (state_32270[(2)]);
var inst_32236 = (inst_32235__$1 == null);
var state_32270__$1 = (function (){var statearr_32275 = state_32270;
(statearr_32275[(7)] = inst_32235__$1);

return statearr_32275;
})();
if(cljs.core.truth_(inst_32236)){
var statearr_32276_32339 = state_32270__$1;
(statearr_32276_32339[(1)] = (5));

} else {
var statearr_32277_32340 = state_32270__$1;
(statearr_32277_32340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (15))){
var inst_32248 = (state_32270[(8)]);
var state_32270__$1 = state_32270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32270__$1,(18),to,inst_32248);
} else {
if((state_val_32271 === (21))){
var inst_32261 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
var statearr_32278_32341 = state_32270__$1;
(statearr_32278_32341[(2)] = inst_32261);

(statearr_32278_32341[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (13))){
var inst_32263 = (state_32270[(2)]);
var state_32270__$1 = (function (){var statearr_32279 = state_32270;
(statearr_32279[(9)] = inst_32263);

return statearr_32279;
})();
var statearr_32280_32342 = state_32270__$1;
(statearr_32280_32342[(2)] = null);

(statearr_32280_32342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (6))){
var inst_32235 = (state_32270[(7)]);
var state_32270__$1 = state_32270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32270__$1,(11),inst_32235);
} else {
if((state_val_32271 === (17))){
var inst_32256 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
if(cljs.core.truth_(inst_32256)){
var statearr_32281_32343 = state_32270__$1;
(statearr_32281_32343[(1)] = (19));

} else {
var statearr_32282_32344 = state_32270__$1;
(statearr_32282_32344[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (3))){
var inst_32268 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32270__$1,inst_32268);
} else {
if((state_val_32271 === (12))){
var inst_32245 = (state_32270[(10)]);
var state_32270__$1 = state_32270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32270__$1,(14),inst_32245);
} else {
if((state_val_32271 === (2))){
var state_32270__$1 = state_32270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32270__$1,(4),results);
} else {
if((state_val_32271 === (19))){
var state_32270__$1 = state_32270;
var statearr_32283_32345 = state_32270__$1;
(statearr_32283_32345[(2)] = null);

(statearr_32283_32345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (11))){
var inst_32245 = (state_32270[(2)]);
var state_32270__$1 = (function (){var statearr_32284 = state_32270;
(statearr_32284[(10)] = inst_32245);

return statearr_32284;
})();
var statearr_32285_32346 = state_32270__$1;
(statearr_32285_32346[(2)] = null);

(statearr_32285_32346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (9))){
var state_32270__$1 = state_32270;
var statearr_32286_32347 = state_32270__$1;
(statearr_32286_32347[(2)] = null);

(statearr_32286_32347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (5))){
var state_32270__$1 = state_32270;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32287_32348 = state_32270__$1;
(statearr_32287_32348[(1)] = (8));

} else {
var statearr_32288_32349 = state_32270__$1;
(statearr_32288_32349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (14))){
var inst_32248 = (state_32270[(8)]);
var inst_32250 = (state_32270[(11)]);
var inst_32248__$1 = (state_32270[(2)]);
var inst_32249 = (inst_32248__$1 == null);
var inst_32250__$1 = cljs.core.not.call(null,inst_32249);
var state_32270__$1 = (function (){var statearr_32289 = state_32270;
(statearr_32289[(8)] = inst_32248__$1);

(statearr_32289[(11)] = inst_32250__$1);

return statearr_32289;
})();
if(inst_32250__$1){
var statearr_32290_32350 = state_32270__$1;
(statearr_32290_32350[(1)] = (15));

} else {
var statearr_32291_32351 = state_32270__$1;
(statearr_32291_32351[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (16))){
var inst_32250 = (state_32270[(11)]);
var state_32270__$1 = state_32270;
var statearr_32292_32352 = state_32270__$1;
(statearr_32292_32352[(2)] = inst_32250);

(statearr_32292_32352[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (10))){
var inst_32242 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
var statearr_32293_32353 = state_32270__$1;
(statearr_32293_32353[(2)] = inst_32242);

(statearr_32293_32353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (18))){
var inst_32253 = (state_32270[(2)]);
var state_32270__$1 = state_32270;
var statearr_32294_32354 = state_32270__$1;
(statearr_32294_32354[(2)] = inst_32253);

(statearr_32294_32354[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32271 === (8))){
var inst_32239 = cljs.core.async.close_BANG_.call(null,to);
var state_32270__$1 = state_32270;
var statearr_32295_32355 = state_32270__$1;
(statearr_32295_32355[(2)] = inst_32239);

(statearr_32295_32355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31978__auto__,jobs,results,process,async))
;
return ((function (switch__31890__auto__,c__31978__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____0 = (function (){
var statearr_32296 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32296[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__);

(statearr_32296[(1)] = (1));

return statearr_32296;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____1 = (function (state_32270){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_32270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e32297){if((e32297 instanceof Object)){
var ex__31894__auto__ = e32297;
var statearr_32298_32356 = state_32270;
(statearr_32298_32356[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32357 = state_32270;
state_32270 = G__32357;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__ = function(state_32270){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____1.call(this,state_32270);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31891__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto__,jobs,results,process,async))
})();
var state__31980__auto__ = (function (){var statearr_32299 = f__31979__auto__.call(null);
(statearr_32299[(6)] = c__31978__auto__);

return statearr_32299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__,jobs,results,process,async))
);

return c__31978__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32359 = arguments.length;
switch (G__32359) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32362 = arguments.length;
switch (G__32362) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32365 = arguments.length;
switch (G__32365) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31978__auto___32414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___32414,tc,fc){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto___32414,tc,fc){
return (function (state_32391){
var state_val_32392 = (state_32391[(1)]);
if((state_val_32392 === (7))){
var inst_32387 = (state_32391[(2)]);
var state_32391__$1 = state_32391;
var statearr_32393_32415 = state_32391__$1;
(statearr_32393_32415[(2)] = inst_32387);

(statearr_32393_32415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (1))){
var state_32391__$1 = state_32391;
var statearr_32394_32416 = state_32391__$1;
(statearr_32394_32416[(2)] = null);

(statearr_32394_32416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (4))){
var inst_32368 = (state_32391[(7)]);
var inst_32368__$1 = (state_32391[(2)]);
var inst_32369 = (inst_32368__$1 == null);
var state_32391__$1 = (function (){var statearr_32395 = state_32391;
(statearr_32395[(7)] = inst_32368__$1);

return statearr_32395;
})();
if(cljs.core.truth_(inst_32369)){
var statearr_32396_32417 = state_32391__$1;
(statearr_32396_32417[(1)] = (5));

} else {
var statearr_32397_32418 = state_32391__$1;
(statearr_32397_32418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (13))){
var state_32391__$1 = state_32391;
var statearr_32398_32419 = state_32391__$1;
(statearr_32398_32419[(2)] = null);

(statearr_32398_32419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (6))){
var inst_32368 = (state_32391[(7)]);
var inst_32374 = p.call(null,inst_32368);
var state_32391__$1 = state_32391;
if(cljs.core.truth_(inst_32374)){
var statearr_32399_32420 = state_32391__$1;
(statearr_32399_32420[(1)] = (9));

} else {
var statearr_32400_32421 = state_32391__$1;
(statearr_32400_32421[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (3))){
var inst_32389 = (state_32391[(2)]);
var state_32391__$1 = state_32391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32391__$1,inst_32389);
} else {
if((state_val_32392 === (12))){
var state_32391__$1 = state_32391;
var statearr_32401_32422 = state_32391__$1;
(statearr_32401_32422[(2)] = null);

(statearr_32401_32422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (2))){
var state_32391__$1 = state_32391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32391__$1,(4),ch);
} else {
if((state_val_32392 === (11))){
var inst_32368 = (state_32391[(7)]);
var inst_32378 = (state_32391[(2)]);
var state_32391__$1 = state_32391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32391__$1,(8),inst_32378,inst_32368);
} else {
if((state_val_32392 === (9))){
var state_32391__$1 = state_32391;
var statearr_32402_32423 = state_32391__$1;
(statearr_32402_32423[(2)] = tc);

(statearr_32402_32423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (5))){
var inst_32371 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32372 = cljs.core.async.close_BANG_.call(null,fc);
var state_32391__$1 = (function (){var statearr_32403 = state_32391;
(statearr_32403[(8)] = inst_32371);

return statearr_32403;
})();
var statearr_32404_32424 = state_32391__$1;
(statearr_32404_32424[(2)] = inst_32372);

(statearr_32404_32424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (14))){
var inst_32385 = (state_32391[(2)]);
var state_32391__$1 = state_32391;
var statearr_32405_32425 = state_32391__$1;
(statearr_32405_32425[(2)] = inst_32385);

(statearr_32405_32425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (10))){
var state_32391__$1 = state_32391;
var statearr_32406_32426 = state_32391__$1;
(statearr_32406_32426[(2)] = fc);

(statearr_32406_32426[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32392 === (8))){
var inst_32380 = (state_32391[(2)]);
var state_32391__$1 = state_32391;
if(cljs.core.truth_(inst_32380)){
var statearr_32407_32427 = state_32391__$1;
(statearr_32407_32427[(1)] = (12));

} else {
var statearr_32408_32428 = state_32391__$1;
(statearr_32408_32428[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31978__auto___32414,tc,fc))
;
return ((function (switch__31890__auto__,c__31978__auto___32414,tc,fc){
return (function() {
var cljs$core$async$state_machine__31891__auto__ = null;
var cljs$core$async$state_machine__31891__auto____0 = (function (){
var statearr_32409 = [null,null,null,null,null,null,null,null,null];
(statearr_32409[(0)] = cljs$core$async$state_machine__31891__auto__);

(statearr_32409[(1)] = (1));

return statearr_32409;
});
var cljs$core$async$state_machine__31891__auto____1 = (function (state_32391){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_32391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e32410){if((e32410 instanceof Object)){
var ex__31894__auto__ = e32410;
var statearr_32411_32429 = state_32391;
(statearr_32411_32429[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32430 = state_32391;
state_32391 = G__32430;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$state_machine__31891__auto__ = function(state_32391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31891__auto____1.call(this,state_32391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31891__auto____0;
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31891__auto____1;
return cljs$core$async$state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto___32414,tc,fc))
})();
var state__31980__auto__ = (function (){var statearr_32412 = f__31979__auto__.call(null);
(statearr_32412[(6)] = c__31978__auto___32414);

return statearr_32412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___32414,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto__){
return (function (state_32451){
var state_val_32452 = (state_32451[(1)]);
if((state_val_32452 === (7))){
var inst_32447 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
var statearr_32453_32472 = state_32451__$1;
(statearr_32453_32472[(2)] = inst_32447);

(statearr_32453_32472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (1))){
var inst_32431 = init;
var state_32451__$1 = (function (){var statearr_32454 = state_32451;
(statearr_32454[(7)] = inst_32431);

return statearr_32454;
})();
var statearr_32455_32473 = state_32451__$1;
(statearr_32455_32473[(2)] = null);

(statearr_32455_32473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (4))){
var inst_32434 = (state_32451[(8)]);
var inst_32434__$1 = (state_32451[(2)]);
var inst_32435 = (inst_32434__$1 == null);
var state_32451__$1 = (function (){var statearr_32456 = state_32451;
(statearr_32456[(8)] = inst_32434__$1);

return statearr_32456;
})();
if(cljs.core.truth_(inst_32435)){
var statearr_32457_32474 = state_32451__$1;
(statearr_32457_32474[(1)] = (5));

} else {
var statearr_32458_32475 = state_32451__$1;
(statearr_32458_32475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (6))){
var inst_32434 = (state_32451[(8)]);
var inst_32431 = (state_32451[(7)]);
var inst_32438 = (state_32451[(9)]);
var inst_32438__$1 = f.call(null,inst_32431,inst_32434);
var inst_32439 = cljs.core.reduced_QMARK_.call(null,inst_32438__$1);
var state_32451__$1 = (function (){var statearr_32459 = state_32451;
(statearr_32459[(9)] = inst_32438__$1);

return statearr_32459;
})();
if(inst_32439){
var statearr_32460_32476 = state_32451__$1;
(statearr_32460_32476[(1)] = (8));

} else {
var statearr_32461_32477 = state_32451__$1;
(statearr_32461_32477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (3))){
var inst_32449 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32451__$1,inst_32449);
} else {
if((state_val_32452 === (2))){
var state_32451__$1 = state_32451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32451__$1,(4),ch);
} else {
if((state_val_32452 === (9))){
var inst_32438 = (state_32451[(9)]);
var inst_32431 = inst_32438;
var state_32451__$1 = (function (){var statearr_32462 = state_32451;
(statearr_32462[(7)] = inst_32431);

return statearr_32462;
})();
var statearr_32463_32478 = state_32451__$1;
(statearr_32463_32478[(2)] = null);

(statearr_32463_32478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (5))){
var inst_32431 = (state_32451[(7)]);
var state_32451__$1 = state_32451;
var statearr_32464_32479 = state_32451__$1;
(statearr_32464_32479[(2)] = inst_32431);

(statearr_32464_32479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (10))){
var inst_32445 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
var statearr_32465_32480 = state_32451__$1;
(statearr_32465_32480[(2)] = inst_32445);

(statearr_32465_32480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (8))){
var inst_32438 = (state_32451[(9)]);
var inst_32441 = cljs.core.deref.call(null,inst_32438);
var state_32451__$1 = state_32451;
var statearr_32466_32481 = state_32451__$1;
(statearr_32466_32481[(2)] = inst_32441);

(statearr_32466_32481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__31978__auto__))
;
return ((function (switch__31890__auto__,c__31978__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31891__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31891__auto____0 = (function (){
var statearr_32468 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32468[(0)] = cljs$core$async$reduce_$_state_machine__31891__auto__);

(statearr_32468[(1)] = (1));

return statearr_32468;
});
var cljs$core$async$reduce_$_state_machine__31891__auto____1 = (function (state_32451){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_32451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e32469){if((e32469 instanceof Object)){
var ex__31894__auto__ = e32469;
var statearr_32470_32482 = state_32451;
(statearr_32470_32482[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32483 = state_32451;
state_32451 = G__32483;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31891__auto__ = function(state_32451){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31891__auto____1.call(this,state_32451);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31891__auto____0;
cljs$core$async$reduce_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31891__auto____1;
return cljs$core$async$reduce_$_state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto__))
})();
var state__31980__auto__ = (function (){var statearr_32471 = f__31979__auto__.call(null);
(statearr_32471[(6)] = c__31978__auto__);

return statearr_32471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__))
);

return c__31978__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__,f__$1){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto__,f__$1){
return (function (state_32489){
var state_val_32490 = (state_32489[(1)]);
if((state_val_32490 === (1))){
var inst_32484 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32489__$1 = state_32489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32489__$1,(2),inst_32484);
} else {
if((state_val_32490 === (2))){
var inst_32486 = (state_32489[(2)]);
var inst_32487 = f__$1.call(null,inst_32486);
var state_32489__$1 = state_32489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32489__$1,inst_32487);
} else {
return null;
}
}
});})(c__31978__auto__,f__$1))
;
return ((function (switch__31890__auto__,c__31978__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31891__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31891__auto____0 = (function (){
var statearr_32491 = [null,null,null,null,null,null,null];
(statearr_32491[(0)] = cljs$core$async$transduce_$_state_machine__31891__auto__);

(statearr_32491[(1)] = (1));

return statearr_32491;
});
var cljs$core$async$transduce_$_state_machine__31891__auto____1 = (function (state_32489){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_32489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e32492){if((e32492 instanceof Object)){
var ex__31894__auto__ = e32492;
var statearr_32493_32495 = state_32489;
(statearr_32493_32495[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32496 = state_32489;
state_32489 = G__32496;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31891__auto__ = function(state_32489){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31891__auto____1.call(this,state_32489);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31891__auto____0;
cljs$core$async$transduce_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31891__auto____1;
return cljs$core$async$transduce_$_state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto__,f__$1))
})();
var state__31980__auto__ = (function (){var statearr_32494 = f__31979__auto__.call(null);
(statearr_32494[(6)] = c__31978__auto__);

return statearr_32494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__,f__$1))
);

return c__31978__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32498 = arguments.length;
switch (G__32498) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto__){
return (function (state_32523){
var state_val_32524 = (state_32523[(1)]);
if((state_val_32524 === (7))){
var inst_32505 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
var statearr_32525_32546 = state_32523__$1;
(statearr_32525_32546[(2)] = inst_32505);

(statearr_32525_32546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (1))){
var inst_32499 = cljs.core.seq.call(null,coll);
var inst_32500 = inst_32499;
var state_32523__$1 = (function (){var statearr_32526 = state_32523;
(statearr_32526[(7)] = inst_32500);

return statearr_32526;
})();
var statearr_32527_32547 = state_32523__$1;
(statearr_32527_32547[(2)] = null);

(statearr_32527_32547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (4))){
var inst_32500 = (state_32523[(7)]);
var inst_32503 = cljs.core.first.call(null,inst_32500);
var state_32523__$1 = state_32523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32523__$1,(7),ch,inst_32503);
} else {
if((state_val_32524 === (13))){
var inst_32517 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
var statearr_32528_32548 = state_32523__$1;
(statearr_32528_32548[(2)] = inst_32517);

(statearr_32528_32548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (6))){
var inst_32508 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
if(cljs.core.truth_(inst_32508)){
var statearr_32529_32549 = state_32523__$1;
(statearr_32529_32549[(1)] = (8));

} else {
var statearr_32530_32550 = state_32523__$1;
(statearr_32530_32550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (3))){
var inst_32521 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32523__$1,inst_32521);
} else {
if((state_val_32524 === (12))){
var state_32523__$1 = state_32523;
var statearr_32531_32551 = state_32523__$1;
(statearr_32531_32551[(2)] = null);

(statearr_32531_32551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (2))){
var inst_32500 = (state_32523[(7)]);
var state_32523__$1 = state_32523;
if(cljs.core.truth_(inst_32500)){
var statearr_32532_32552 = state_32523__$1;
(statearr_32532_32552[(1)] = (4));

} else {
var statearr_32533_32553 = state_32523__$1;
(statearr_32533_32553[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (11))){
var inst_32514 = cljs.core.async.close_BANG_.call(null,ch);
var state_32523__$1 = state_32523;
var statearr_32534_32554 = state_32523__$1;
(statearr_32534_32554[(2)] = inst_32514);

(statearr_32534_32554[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (9))){
var state_32523__$1 = state_32523;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32535_32555 = state_32523__$1;
(statearr_32535_32555[(1)] = (11));

} else {
var statearr_32536_32556 = state_32523__$1;
(statearr_32536_32556[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (5))){
var inst_32500 = (state_32523[(7)]);
var state_32523__$1 = state_32523;
var statearr_32537_32557 = state_32523__$1;
(statearr_32537_32557[(2)] = inst_32500);

(statearr_32537_32557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (10))){
var inst_32519 = (state_32523[(2)]);
var state_32523__$1 = state_32523;
var statearr_32538_32558 = state_32523__$1;
(statearr_32538_32558[(2)] = inst_32519);

(statearr_32538_32558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32524 === (8))){
var inst_32500 = (state_32523[(7)]);
var inst_32510 = cljs.core.next.call(null,inst_32500);
var inst_32500__$1 = inst_32510;
var state_32523__$1 = (function (){var statearr_32539 = state_32523;
(statearr_32539[(7)] = inst_32500__$1);

return statearr_32539;
})();
var statearr_32540_32559 = state_32523__$1;
(statearr_32540_32559[(2)] = null);

(statearr_32540_32559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31978__auto__))
;
return ((function (switch__31890__auto__,c__31978__auto__){
return (function() {
var cljs$core$async$state_machine__31891__auto__ = null;
var cljs$core$async$state_machine__31891__auto____0 = (function (){
var statearr_32541 = [null,null,null,null,null,null,null,null];
(statearr_32541[(0)] = cljs$core$async$state_machine__31891__auto__);

(statearr_32541[(1)] = (1));

return statearr_32541;
});
var cljs$core$async$state_machine__31891__auto____1 = (function (state_32523){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_32523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e32542){if((e32542 instanceof Object)){
var ex__31894__auto__ = e32542;
var statearr_32543_32560 = state_32523;
(statearr_32543_32560[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32561 = state_32523;
state_32523 = G__32561;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$state_machine__31891__auto__ = function(state_32523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31891__auto____1.call(this,state_32523);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31891__auto____0;
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31891__auto____1;
return cljs$core$async$state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto__))
})();
var state__31980__auto__ = (function (){var statearr_32544 = f__31979__auto__.call(null);
(statearr_32544[(6)] = c__31978__auto__);

return statearr_32544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__))
);

return c__31978__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28972__auto__ = (((_ == null))?null:_);
var m__28973__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28972__auto__)]);
if(!((m__28973__auto__ == null))){
return m__28973__auto__.call(null,_);
} else {
var m__28973__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28973__auto____$1 == null))){
return m__28973__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28972__auto__ = (((m == null))?null:m);
var m__28973__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28972__auto__)]);
if(!((m__28973__auto__ == null))){
return m__28973__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28973__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28973__auto____$1 == null))){
return m__28973__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28972__auto__ = (((m == null))?null:m);
var m__28973__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28972__auto__)]);
if(!((m__28973__auto__ == null))){
return m__28973__auto__.call(null,m,ch);
} else {
var m__28973__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28973__auto____$1 == null))){
return m__28973__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28972__auto__ = (((m == null))?null:m);
var m__28973__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28972__auto__)]);
if(!((m__28973__auto__ == null))){
return m__28973__auto__.call(null,m);
} else {
var m__28973__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28973__auto____$1 == null))){
return m__28973__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32562 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32562 = (function (ch,cs,meta32563){
this.ch = ch;
this.cs = cs;
this.meta32563 = meta32563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32564,meta32563__$1){
var self__ = this;
var _32564__$1 = this;
return (new cljs.core.async.t_cljs$core$async32562(self__.ch,self__.cs,meta32563__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32564){
var self__ = this;
var _32564__$1 = this;
return self__.meta32563;
});})(cs))
;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32562.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32563","meta32563",809685993,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32562.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32562";

cljs.core.async.t_cljs$core$async32562.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28914__auto__,writer__28915__auto__,opt__28916__auto__){
return cljs.core._write.call(null,writer__28915__auto__,"cljs.core.async/t_cljs$core$async32562");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32562 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32562(ch__$1,cs__$1,meta32563){
return (new cljs.core.async.t_cljs$core$async32562(ch__$1,cs__$1,meta32563));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32562(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31978__auto___32784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___32784,cs,m,dchan,dctr,done){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto___32784,cs,m,dchan,dctr,done){
return (function (state_32699){
var state_val_32700 = (state_32699[(1)]);
if((state_val_32700 === (7))){
var inst_32695 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
var statearr_32701_32785 = state_32699__$1;
(statearr_32701_32785[(2)] = inst_32695);

(statearr_32701_32785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (20))){
var inst_32598 = (state_32699[(7)]);
var inst_32610 = cljs.core.first.call(null,inst_32598);
var inst_32611 = cljs.core.nth.call(null,inst_32610,(0),null);
var inst_32612 = cljs.core.nth.call(null,inst_32610,(1),null);
var state_32699__$1 = (function (){var statearr_32702 = state_32699;
(statearr_32702[(8)] = inst_32611);

return statearr_32702;
})();
if(cljs.core.truth_(inst_32612)){
var statearr_32703_32786 = state_32699__$1;
(statearr_32703_32786[(1)] = (22));

} else {
var statearr_32704_32787 = state_32699__$1;
(statearr_32704_32787[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (27))){
var inst_32647 = (state_32699[(9)]);
var inst_32642 = (state_32699[(10)]);
var inst_32640 = (state_32699[(11)]);
var inst_32567 = (state_32699[(12)]);
var inst_32647__$1 = cljs.core._nth.call(null,inst_32640,inst_32642);
var inst_32648 = cljs.core.async.put_BANG_.call(null,inst_32647__$1,inst_32567,done);
var state_32699__$1 = (function (){var statearr_32705 = state_32699;
(statearr_32705[(9)] = inst_32647__$1);

return statearr_32705;
})();
if(cljs.core.truth_(inst_32648)){
var statearr_32706_32788 = state_32699__$1;
(statearr_32706_32788[(1)] = (30));

} else {
var statearr_32707_32789 = state_32699__$1;
(statearr_32707_32789[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (1))){
var state_32699__$1 = state_32699;
var statearr_32708_32790 = state_32699__$1;
(statearr_32708_32790[(2)] = null);

(statearr_32708_32790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (24))){
var inst_32598 = (state_32699[(7)]);
var inst_32617 = (state_32699[(2)]);
var inst_32618 = cljs.core.next.call(null,inst_32598);
var inst_32576 = inst_32618;
var inst_32577 = null;
var inst_32578 = (0);
var inst_32579 = (0);
var state_32699__$1 = (function (){var statearr_32709 = state_32699;
(statearr_32709[(13)] = inst_32579);

(statearr_32709[(14)] = inst_32578);

(statearr_32709[(15)] = inst_32617);

(statearr_32709[(16)] = inst_32577);

(statearr_32709[(17)] = inst_32576);

return statearr_32709;
})();
var statearr_32710_32791 = state_32699__$1;
(statearr_32710_32791[(2)] = null);

(statearr_32710_32791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (39))){
var state_32699__$1 = state_32699;
var statearr_32714_32792 = state_32699__$1;
(statearr_32714_32792[(2)] = null);

(statearr_32714_32792[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (4))){
var inst_32567 = (state_32699[(12)]);
var inst_32567__$1 = (state_32699[(2)]);
var inst_32568 = (inst_32567__$1 == null);
var state_32699__$1 = (function (){var statearr_32715 = state_32699;
(statearr_32715[(12)] = inst_32567__$1);

return statearr_32715;
})();
if(cljs.core.truth_(inst_32568)){
var statearr_32716_32793 = state_32699__$1;
(statearr_32716_32793[(1)] = (5));

} else {
var statearr_32717_32794 = state_32699__$1;
(statearr_32717_32794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (15))){
var inst_32579 = (state_32699[(13)]);
var inst_32578 = (state_32699[(14)]);
var inst_32577 = (state_32699[(16)]);
var inst_32576 = (state_32699[(17)]);
var inst_32594 = (state_32699[(2)]);
var inst_32595 = (inst_32579 + (1));
var tmp32711 = inst_32578;
var tmp32712 = inst_32577;
var tmp32713 = inst_32576;
var inst_32576__$1 = tmp32713;
var inst_32577__$1 = tmp32712;
var inst_32578__$1 = tmp32711;
var inst_32579__$1 = inst_32595;
var state_32699__$1 = (function (){var statearr_32718 = state_32699;
(statearr_32718[(13)] = inst_32579__$1);

(statearr_32718[(14)] = inst_32578__$1);

(statearr_32718[(18)] = inst_32594);

(statearr_32718[(16)] = inst_32577__$1);

(statearr_32718[(17)] = inst_32576__$1);

return statearr_32718;
})();
var statearr_32719_32795 = state_32699__$1;
(statearr_32719_32795[(2)] = null);

(statearr_32719_32795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (21))){
var inst_32621 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
var statearr_32723_32796 = state_32699__$1;
(statearr_32723_32796[(2)] = inst_32621);

(statearr_32723_32796[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (31))){
var inst_32647 = (state_32699[(9)]);
var inst_32651 = done.call(null,null);
var inst_32652 = cljs.core.async.untap_STAR_.call(null,m,inst_32647);
var state_32699__$1 = (function (){var statearr_32724 = state_32699;
(statearr_32724[(19)] = inst_32651);

return statearr_32724;
})();
var statearr_32725_32797 = state_32699__$1;
(statearr_32725_32797[(2)] = inst_32652);

(statearr_32725_32797[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (32))){
var inst_32641 = (state_32699[(20)]);
var inst_32639 = (state_32699[(21)]);
var inst_32642 = (state_32699[(10)]);
var inst_32640 = (state_32699[(11)]);
var inst_32654 = (state_32699[(2)]);
var inst_32655 = (inst_32642 + (1));
var tmp32720 = inst_32641;
var tmp32721 = inst_32639;
var tmp32722 = inst_32640;
var inst_32639__$1 = tmp32721;
var inst_32640__$1 = tmp32722;
var inst_32641__$1 = tmp32720;
var inst_32642__$1 = inst_32655;
var state_32699__$1 = (function (){var statearr_32726 = state_32699;
(statearr_32726[(20)] = inst_32641__$1);

(statearr_32726[(21)] = inst_32639__$1);

(statearr_32726[(22)] = inst_32654);

(statearr_32726[(10)] = inst_32642__$1);

(statearr_32726[(11)] = inst_32640__$1);

return statearr_32726;
})();
var statearr_32727_32798 = state_32699__$1;
(statearr_32727_32798[(2)] = null);

(statearr_32727_32798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (40))){
var inst_32667 = (state_32699[(23)]);
var inst_32671 = done.call(null,null);
var inst_32672 = cljs.core.async.untap_STAR_.call(null,m,inst_32667);
var state_32699__$1 = (function (){var statearr_32728 = state_32699;
(statearr_32728[(24)] = inst_32671);

return statearr_32728;
})();
var statearr_32729_32799 = state_32699__$1;
(statearr_32729_32799[(2)] = inst_32672);

(statearr_32729_32799[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (33))){
var inst_32658 = (state_32699[(25)]);
var inst_32660 = cljs.core.chunked_seq_QMARK_.call(null,inst_32658);
var state_32699__$1 = state_32699;
if(inst_32660){
var statearr_32730_32800 = state_32699__$1;
(statearr_32730_32800[(1)] = (36));

} else {
var statearr_32731_32801 = state_32699__$1;
(statearr_32731_32801[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (13))){
var inst_32588 = (state_32699[(26)]);
var inst_32591 = cljs.core.async.close_BANG_.call(null,inst_32588);
var state_32699__$1 = state_32699;
var statearr_32732_32802 = state_32699__$1;
(statearr_32732_32802[(2)] = inst_32591);

(statearr_32732_32802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (22))){
var inst_32611 = (state_32699[(8)]);
var inst_32614 = cljs.core.async.close_BANG_.call(null,inst_32611);
var state_32699__$1 = state_32699;
var statearr_32733_32803 = state_32699__$1;
(statearr_32733_32803[(2)] = inst_32614);

(statearr_32733_32803[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (36))){
var inst_32658 = (state_32699[(25)]);
var inst_32662 = cljs.core.chunk_first.call(null,inst_32658);
var inst_32663 = cljs.core.chunk_rest.call(null,inst_32658);
var inst_32664 = cljs.core.count.call(null,inst_32662);
var inst_32639 = inst_32663;
var inst_32640 = inst_32662;
var inst_32641 = inst_32664;
var inst_32642 = (0);
var state_32699__$1 = (function (){var statearr_32734 = state_32699;
(statearr_32734[(20)] = inst_32641);

(statearr_32734[(21)] = inst_32639);

(statearr_32734[(10)] = inst_32642);

(statearr_32734[(11)] = inst_32640);

return statearr_32734;
})();
var statearr_32735_32804 = state_32699__$1;
(statearr_32735_32804[(2)] = null);

(statearr_32735_32804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (41))){
var inst_32658 = (state_32699[(25)]);
var inst_32674 = (state_32699[(2)]);
var inst_32675 = cljs.core.next.call(null,inst_32658);
var inst_32639 = inst_32675;
var inst_32640 = null;
var inst_32641 = (0);
var inst_32642 = (0);
var state_32699__$1 = (function (){var statearr_32736 = state_32699;
(statearr_32736[(20)] = inst_32641);

(statearr_32736[(21)] = inst_32639);

(statearr_32736[(27)] = inst_32674);

(statearr_32736[(10)] = inst_32642);

(statearr_32736[(11)] = inst_32640);

return statearr_32736;
})();
var statearr_32737_32805 = state_32699__$1;
(statearr_32737_32805[(2)] = null);

(statearr_32737_32805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (43))){
var state_32699__$1 = state_32699;
var statearr_32738_32806 = state_32699__$1;
(statearr_32738_32806[(2)] = null);

(statearr_32738_32806[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (29))){
var inst_32683 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
var statearr_32739_32807 = state_32699__$1;
(statearr_32739_32807[(2)] = inst_32683);

(statearr_32739_32807[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (44))){
var inst_32692 = (state_32699[(2)]);
var state_32699__$1 = (function (){var statearr_32740 = state_32699;
(statearr_32740[(28)] = inst_32692);

return statearr_32740;
})();
var statearr_32741_32808 = state_32699__$1;
(statearr_32741_32808[(2)] = null);

(statearr_32741_32808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (6))){
var inst_32631 = (state_32699[(29)]);
var inst_32630 = cljs.core.deref.call(null,cs);
var inst_32631__$1 = cljs.core.keys.call(null,inst_32630);
var inst_32632 = cljs.core.count.call(null,inst_32631__$1);
var inst_32633 = cljs.core.reset_BANG_.call(null,dctr,inst_32632);
var inst_32638 = cljs.core.seq.call(null,inst_32631__$1);
var inst_32639 = inst_32638;
var inst_32640 = null;
var inst_32641 = (0);
var inst_32642 = (0);
var state_32699__$1 = (function (){var statearr_32742 = state_32699;
(statearr_32742[(20)] = inst_32641);

(statearr_32742[(29)] = inst_32631__$1);

(statearr_32742[(21)] = inst_32639);

(statearr_32742[(10)] = inst_32642);

(statearr_32742[(11)] = inst_32640);

(statearr_32742[(30)] = inst_32633);

return statearr_32742;
})();
var statearr_32743_32809 = state_32699__$1;
(statearr_32743_32809[(2)] = null);

(statearr_32743_32809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (28))){
var inst_32639 = (state_32699[(21)]);
var inst_32658 = (state_32699[(25)]);
var inst_32658__$1 = cljs.core.seq.call(null,inst_32639);
var state_32699__$1 = (function (){var statearr_32744 = state_32699;
(statearr_32744[(25)] = inst_32658__$1);

return statearr_32744;
})();
if(inst_32658__$1){
var statearr_32745_32810 = state_32699__$1;
(statearr_32745_32810[(1)] = (33));

} else {
var statearr_32746_32811 = state_32699__$1;
(statearr_32746_32811[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (25))){
var inst_32641 = (state_32699[(20)]);
var inst_32642 = (state_32699[(10)]);
var inst_32644 = (inst_32642 < inst_32641);
var inst_32645 = inst_32644;
var state_32699__$1 = state_32699;
if(cljs.core.truth_(inst_32645)){
var statearr_32747_32812 = state_32699__$1;
(statearr_32747_32812[(1)] = (27));

} else {
var statearr_32748_32813 = state_32699__$1;
(statearr_32748_32813[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (34))){
var state_32699__$1 = state_32699;
var statearr_32749_32814 = state_32699__$1;
(statearr_32749_32814[(2)] = null);

(statearr_32749_32814[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (17))){
var state_32699__$1 = state_32699;
var statearr_32750_32815 = state_32699__$1;
(statearr_32750_32815[(2)] = null);

(statearr_32750_32815[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (3))){
var inst_32697 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32699__$1,inst_32697);
} else {
if((state_val_32700 === (12))){
var inst_32626 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
var statearr_32751_32816 = state_32699__$1;
(statearr_32751_32816[(2)] = inst_32626);

(statearr_32751_32816[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (2))){
var state_32699__$1 = state_32699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32699__$1,(4),ch);
} else {
if((state_val_32700 === (23))){
var state_32699__$1 = state_32699;
var statearr_32752_32817 = state_32699__$1;
(statearr_32752_32817[(2)] = null);

(statearr_32752_32817[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (35))){
var inst_32681 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
var statearr_32753_32818 = state_32699__$1;
(statearr_32753_32818[(2)] = inst_32681);

(statearr_32753_32818[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (19))){
var inst_32598 = (state_32699[(7)]);
var inst_32602 = cljs.core.chunk_first.call(null,inst_32598);
var inst_32603 = cljs.core.chunk_rest.call(null,inst_32598);
var inst_32604 = cljs.core.count.call(null,inst_32602);
var inst_32576 = inst_32603;
var inst_32577 = inst_32602;
var inst_32578 = inst_32604;
var inst_32579 = (0);
var state_32699__$1 = (function (){var statearr_32754 = state_32699;
(statearr_32754[(13)] = inst_32579);

(statearr_32754[(14)] = inst_32578);

(statearr_32754[(16)] = inst_32577);

(statearr_32754[(17)] = inst_32576);

return statearr_32754;
})();
var statearr_32755_32819 = state_32699__$1;
(statearr_32755_32819[(2)] = null);

(statearr_32755_32819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (11))){
var inst_32598 = (state_32699[(7)]);
var inst_32576 = (state_32699[(17)]);
var inst_32598__$1 = cljs.core.seq.call(null,inst_32576);
var state_32699__$1 = (function (){var statearr_32756 = state_32699;
(statearr_32756[(7)] = inst_32598__$1);

return statearr_32756;
})();
if(inst_32598__$1){
var statearr_32757_32820 = state_32699__$1;
(statearr_32757_32820[(1)] = (16));

} else {
var statearr_32758_32821 = state_32699__$1;
(statearr_32758_32821[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (9))){
var inst_32628 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
var statearr_32759_32822 = state_32699__$1;
(statearr_32759_32822[(2)] = inst_32628);

(statearr_32759_32822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (5))){
var inst_32574 = cljs.core.deref.call(null,cs);
var inst_32575 = cljs.core.seq.call(null,inst_32574);
var inst_32576 = inst_32575;
var inst_32577 = null;
var inst_32578 = (0);
var inst_32579 = (0);
var state_32699__$1 = (function (){var statearr_32760 = state_32699;
(statearr_32760[(13)] = inst_32579);

(statearr_32760[(14)] = inst_32578);

(statearr_32760[(16)] = inst_32577);

(statearr_32760[(17)] = inst_32576);

return statearr_32760;
})();
var statearr_32761_32823 = state_32699__$1;
(statearr_32761_32823[(2)] = null);

(statearr_32761_32823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (14))){
var state_32699__$1 = state_32699;
var statearr_32762_32824 = state_32699__$1;
(statearr_32762_32824[(2)] = null);

(statearr_32762_32824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (45))){
var inst_32689 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
var statearr_32763_32825 = state_32699__$1;
(statearr_32763_32825[(2)] = inst_32689);

(statearr_32763_32825[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (26))){
var inst_32631 = (state_32699[(29)]);
var inst_32685 = (state_32699[(2)]);
var inst_32686 = cljs.core.seq.call(null,inst_32631);
var state_32699__$1 = (function (){var statearr_32764 = state_32699;
(statearr_32764[(31)] = inst_32685);

return statearr_32764;
})();
if(inst_32686){
var statearr_32765_32826 = state_32699__$1;
(statearr_32765_32826[(1)] = (42));

} else {
var statearr_32766_32827 = state_32699__$1;
(statearr_32766_32827[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (16))){
var inst_32598 = (state_32699[(7)]);
var inst_32600 = cljs.core.chunked_seq_QMARK_.call(null,inst_32598);
var state_32699__$1 = state_32699;
if(inst_32600){
var statearr_32767_32828 = state_32699__$1;
(statearr_32767_32828[(1)] = (19));

} else {
var statearr_32768_32829 = state_32699__$1;
(statearr_32768_32829[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (38))){
var inst_32678 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
var statearr_32769_32830 = state_32699__$1;
(statearr_32769_32830[(2)] = inst_32678);

(statearr_32769_32830[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (30))){
var state_32699__$1 = state_32699;
var statearr_32770_32831 = state_32699__$1;
(statearr_32770_32831[(2)] = null);

(statearr_32770_32831[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (10))){
var inst_32579 = (state_32699[(13)]);
var inst_32577 = (state_32699[(16)]);
var inst_32587 = cljs.core._nth.call(null,inst_32577,inst_32579);
var inst_32588 = cljs.core.nth.call(null,inst_32587,(0),null);
var inst_32589 = cljs.core.nth.call(null,inst_32587,(1),null);
var state_32699__$1 = (function (){var statearr_32771 = state_32699;
(statearr_32771[(26)] = inst_32588);

return statearr_32771;
})();
if(cljs.core.truth_(inst_32589)){
var statearr_32772_32832 = state_32699__$1;
(statearr_32772_32832[(1)] = (13));

} else {
var statearr_32773_32833 = state_32699__$1;
(statearr_32773_32833[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (18))){
var inst_32624 = (state_32699[(2)]);
var state_32699__$1 = state_32699;
var statearr_32774_32834 = state_32699__$1;
(statearr_32774_32834[(2)] = inst_32624);

(statearr_32774_32834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (42))){
var state_32699__$1 = state_32699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32699__$1,(45),dchan);
} else {
if((state_val_32700 === (37))){
var inst_32667 = (state_32699[(23)]);
var inst_32658 = (state_32699[(25)]);
var inst_32567 = (state_32699[(12)]);
var inst_32667__$1 = cljs.core.first.call(null,inst_32658);
var inst_32668 = cljs.core.async.put_BANG_.call(null,inst_32667__$1,inst_32567,done);
var state_32699__$1 = (function (){var statearr_32775 = state_32699;
(statearr_32775[(23)] = inst_32667__$1);

return statearr_32775;
})();
if(cljs.core.truth_(inst_32668)){
var statearr_32776_32835 = state_32699__$1;
(statearr_32776_32835[(1)] = (39));

} else {
var statearr_32777_32836 = state_32699__$1;
(statearr_32777_32836[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32700 === (8))){
var inst_32579 = (state_32699[(13)]);
var inst_32578 = (state_32699[(14)]);
var inst_32581 = (inst_32579 < inst_32578);
var inst_32582 = inst_32581;
var state_32699__$1 = state_32699;
if(cljs.core.truth_(inst_32582)){
var statearr_32778_32837 = state_32699__$1;
(statearr_32778_32837[(1)] = (10));

} else {
var statearr_32779_32838 = state_32699__$1;
(statearr_32779_32838[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31978__auto___32784,cs,m,dchan,dctr,done))
;
return ((function (switch__31890__auto__,c__31978__auto___32784,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31891__auto__ = null;
var cljs$core$async$mult_$_state_machine__31891__auto____0 = (function (){
var statearr_32780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32780[(0)] = cljs$core$async$mult_$_state_machine__31891__auto__);

(statearr_32780[(1)] = (1));

return statearr_32780;
});
var cljs$core$async$mult_$_state_machine__31891__auto____1 = (function (state_32699){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_32699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e32781){if((e32781 instanceof Object)){
var ex__31894__auto__ = e32781;
var statearr_32782_32839 = state_32699;
(statearr_32782_32839[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32840 = state_32699;
state_32699 = G__32840;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31891__auto__ = function(state_32699){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31891__auto____1.call(this,state_32699);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31891__auto____0;
cljs$core$async$mult_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31891__auto____1;
return cljs$core$async$mult_$_state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto___32784,cs,m,dchan,dctr,done))
})();
var state__31980__auto__ = (function (){var statearr_32783 = f__31979__auto__.call(null);
(statearr_32783[(6)] = c__31978__auto___32784);

return statearr_32783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___32784,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32842 = arguments.length;
switch (G__32842) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28972__auto__ = (((m == null))?null:m);
var m__28973__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28972__auto__)]);
if(!((m__28973__auto__ == null))){
return m__28973__auto__.call(null,m,ch);
} else {
var m__28973__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28973__auto____$1 == null))){
return m__28973__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28972__auto__ = (((m == null))?null:m);
var m__28973__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28972__auto__)]);
if(!((m__28973__auto__ == null))){
return m__28973__auto__.call(null,m,ch);
} else {
var m__28973__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28973__auto____$1 == null))){
return m__28973__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28972__auto__ = (((m == null))?null:m);
var m__28973__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28972__auto__)]);
if(!((m__28973__auto__ == null))){
return m__28973__auto__.call(null,m);
} else {
var m__28973__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28973__auto____$1 == null))){
return m__28973__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28972__auto__ = (((m == null))?null:m);
var m__28973__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28972__auto__)]);
if(!((m__28973__auto__ == null))){
return m__28973__auto__.call(null,m,state_map);
} else {
var m__28973__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28973__auto____$1 == null))){
return m__28973__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28972__auto__ = (((m == null))?null:m);
var m__28973__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28972__auto__)]);
if(!((m__28973__auto__ == null))){
return m__28973__auto__.call(null,m,mode);
} else {
var m__28973__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28973__auto____$1 == null))){
return m__28973__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29466__auto__ = [];
var len__29459__auto___32854 = arguments.length;
var i__29460__auto___32855 = (0);
while(true){
if((i__29460__auto___32855 < len__29459__auto___32854)){
args__29466__auto__.push((arguments[i__29460__auto___32855]));

var G__32856 = (i__29460__auto___32855 + (1));
i__29460__auto___32855 = G__32856;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((3) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29467__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32848){
var map__32849 = p__32848;
var map__32849__$1 = ((((!((map__32849 == null)))?((((map__32849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32849):map__32849);
var opts = map__32849__$1;
var statearr_32851_32857 = state;
(statearr_32851_32857[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32849,map__32849__$1,opts){
return (function (val){
var statearr_32852_32858 = state;
(statearr_32852_32858[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32849,map__32849__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32853_32859 = state;
(statearr_32853_32859[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32844){
var G__32845 = cljs.core.first.call(null,seq32844);
var seq32844__$1 = cljs.core.next.call(null,seq32844);
var G__32846 = cljs.core.first.call(null,seq32844__$1);
var seq32844__$2 = cljs.core.next.call(null,seq32844__$1);
var G__32847 = cljs.core.first.call(null,seq32844__$2);
var seq32844__$3 = cljs.core.next.call(null,seq32844__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32845,G__32846,G__32847,seq32844__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32860 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32860 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32861){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32861 = meta32861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32862,meta32861__$1){
var self__ = this;
var _32862__$1 = this;
return (new cljs.core.async.t_cljs$core$async32860(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32861__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32860.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32862){
var self__ = this;
var _32862__$1 = this;
return self__.meta32861;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32860.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32860.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32860.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32860.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32860.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32860.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32860.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32860.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32860.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32861","meta32861",-1423950003,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32860.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32860";

cljs.core.async.t_cljs$core$async32860.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28914__auto__,writer__28915__auto__,opt__28916__auto__){
return cljs.core._write.call(null,writer__28915__auto__,"cljs.core.async/t_cljs$core$async32860");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32860 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32860(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32861){
return (new cljs.core.async.t_cljs$core$async32860(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32861));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32860(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31978__auto___33024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___33024,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto___33024,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32964){
var state_val_32965 = (state_32964[(1)]);
if((state_val_32965 === (7))){
var inst_32879 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
var statearr_32966_33025 = state_32964__$1;
(statearr_32966_33025[(2)] = inst_32879);

(statearr_32966_33025[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (20))){
var inst_32891 = (state_32964[(7)]);
var state_32964__$1 = state_32964;
var statearr_32967_33026 = state_32964__$1;
(statearr_32967_33026[(2)] = inst_32891);

(statearr_32967_33026[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (27))){
var state_32964__$1 = state_32964;
var statearr_32968_33027 = state_32964__$1;
(statearr_32968_33027[(2)] = null);

(statearr_32968_33027[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (1))){
var inst_32866 = (state_32964[(8)]);
var inst_32866__$1 = calc_state.call(null);
var inst_32868 = (inst_32866__$1 == null);
var inst_32869 = cljs.core.not.call(null,inst_32868);
var state_32964__$1 = (function (){var statearr_32969 = state_32964;
(statearr_32969[(8)] = inst_32866__$1);

return statearr_32969;
})();
if(inst_32869){
var statearr_32970_33028 = state_32964__$1;
(statearr_32970_33028[(1)] = (2));

} else {
var statearr_32971_33029 = state_32964__$1;
(statearr_32971_33029[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (24))){
var inst_32938 = (state_32964[(9)]);
var inst_32915 = (state_32964[(10)]);
var inst_32924 = (state_32964[(11)]);
var inst_32938__$1 = inst_32915.call(null,inst_32924);
var state_32964__$1 = (function (){var statearr_32972 = state_32964;
(statearr_32972[(9)] = inst_32938__$1);

return statearr_32972;
})();
if(cljs.core.truth_(inst_32938__$1)){
var statearr_32973_33030 = state_32964__$1;
(statearr_32973_33030[(1)] = (29));

} else {
var statearr_32974_33031 = state_32964__$1;
(statearr_32974_33031[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (4))){
var inst_32882 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
if(cljs.core.truth_(inst_32882)){
var statearr_32975_33032 = state_32964__$1;
(statearr_32975_33032[(1)] = (8));

} else {
var statearr_32976_33033 = state_32964__$1;
(statearr_32976_33033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (15))){
var inst_32909 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
if(cljs.core.truth_(inst_32909)){
var statearr_32977_33034 = state_32964__$1;
(statearr_32977_33034[(1)] = (19));

} else {
var statearr_32978_33035 = state_32964__$1;
(statearr_32978_33035[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (21))){
var inst_32914 = (state_32964[(12)]);
var inst_32914__$1 = (state_32964[(2)]);
var inst_32915 = cljs.core.get.call(null,inst_32914__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32916 = cljs.core.get.call(null,inst_32914__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32917 = cljs.core.get.call(null,inst_32914__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32964__$1 = (function (){var statearr_32979 = state_32964;
(statearr_32979[(10)] = inst_32915);

(statearr_32979[(12)] = inst_32914__$1);

(statearr_32979[(13)] = inst_32916);

return statearr_32979;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32964__$1,(22),inst_32917);
} else {
if((state_val_32965 === (31))){
var inst_32946 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
if(cljs.core.truth_(inst_32946)){
var statearr_32980_33036 = state_32964__$1;
(statearr_32980_33036[(1)] = (32));

} else {
var statearr_32981_33037 = state_32964__$1;
(statearr_32981_33037[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (32))){
var inst_32923 = (state_32964[(14)]);
var state_32964__$1 = state_32964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32964__$1,(35),out,inst_32923);
} else {
if((state_val_32965 === (33))){
var inst_32914 = (state_32964[(12)]);
var inst_32891 = inst_32914;
var state_32964__$1 = (function (){var statearr_32982 = state_32964;
(statearr_32982[(7)] = inst_32891);

return statearr_32982;
})();
var statearr_32983_33038 = state_32964__$1;
(statearr_32983_33038[(2)] = null);

(statearr_32983_33038[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (13))){
var inst_32891 = (state_32964[(7)]);
var inst_32898 = inst_32891.cljs$lang$protocol_mask$partition0$;
var inst_32899 = (inst_32898 & (64));
var inst_32900 = inst_32891.cljs$core$ISeq$;
var inst_32901 = (cljs.core.PROTOCOL_SENTINEL === inst_32900);
var inst_32902 = (inst_32899) || (inst_32901);
var state_32964__$1 = state_32964;
if(cljs.core.truth_(inst_32902)){
var statearr_32984_33039 = state_32964__$1;
(statearr_32984_33039[(1)] = (16));

} else {
var statearr_32985_33040 = state_32964__$1;
(statearr_32985_33040[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (22))){
var inst_32924 = (state_32964[(11)]);
var inst_32923 = (state_32964[(14)]);
var inst_32922 = (state_32964[(2)]);
var inst_32923__$1 = cljs.core.nth.call(null,inst_32922,(0),null);
var inst_32924__$1 = cljs.core.nth.call(null,inst_32922,(1),null);
var inst_32925 = (inst_32923__$1 == null);
var inst_32926 = cljs.core._EQ_.call(null,inst_32924__$1,change);
var inst_32927 = (inst_32925) || (inst_32926);
var state_32964__$1 = (function (){var statearr_32986 = state_32964;
(statearr_32986[(11)] = inst_32924__$1);

(statearr_32986[(14)] = inst_32923__$1);

return statearr_32986;
})();
if(cljs.core.truth_(inst_32927)){
var statearr_32987_33041 = state_32964__$1;
(statearr_32987_33041[(1)] = (23));

} else {
var statearr_32988_33042 = state_32964__$1;
(statearr_32988_33042[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (36))){
var inst_32914 = (state_32964[(12)]);
var inst_32891 = inst_32914;
var state_32964__$1 = (function (){var statearr_32989 = state_32964;
(statearr_32989[(7)] = inst_32891);

return statearr_32989;
})();
var statearr_32990_33043 = state_32964__$1;
(statearr_32990_33043[(2)] = null);

(statearr_32990_33043[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (29))){
var inst_32938 = (state_32964[(9)]);
var state_32964__$1 = state_32964;
var statearr_32991_33044 = state_32964__$1;
(statearr_32991_33044[(2)] = inst_32938);

(statearr_32991_33044[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (6))){
var state_32964__$1 = state_32964;
var statearr_32992_33045 = state_32964__$1;
(statearr_32992_33045[(2)] = false);

(statearr_32992_33045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (28))){
var inst_32934 = (state_32964[(2)]);
var inst_32935 = calc_state.call(null);
var inst_32891 = inst_32935;
var state_32964__$1 = (function (){var statearr_32993 = state_32964;
(statearr_32993[(7)] = inst_32891);

(statearr_32993[(15)] = inst_32934);

return statearr_32993;
})();
var statearr_32994_33046 = state_32964__$1;
(statearr_32994_33046[(2)] = null);

(statearr_32994_33046[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (25))){
var inst_32960 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
var statearr_32995_33047 = state_32964__$1;
(statearr_32995_33047[(2)] = inst_32960);

(statearr_32995_33047[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (34))){
var inst_32958 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
var statearr_32996_33048 = state_32964__$1;
(statearr_32996_33048[(2)] = inst_32958);

(statearr_32996_33048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (17))){
var state_32964__$1 = state_32964;
var statearr_32997_33049 = state_32964__$1;
(statearr_32997_33049[(2)] = false);

(statearr_32997_33049[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (3))){
var state_32964__$1 = state_32964;
var statearr_32998_33050 = state_32964__$1;
(statearr_32998_33050[(2)] = false);

(statearr_32998_33050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (12))){
var inst_32962 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32964__$1,inst_32962);
} else {
if((state_val_32965 === (2))){
var inst_32866 = (state_32964[(8)]);
var inst_32871 = inst_32866.cljs$lang$protocol_mask$partition0$;
var inst_32872 = (inst_32871 & (64));
var inst_32873 = inst_32866.cljs$core$ISeq$;
var inst_32874 = (cljs.core.PROTOCOL_SENTINEL === inst_32873);
var inst_32875 = (inst_32872) || (inst_32874);
var state_32964__$1 = state_32964;
if(cljs.core.truth_(inst_32875)){
var statearr_32999_33051 = state_32964__$1;
(statearr_32999_33051[(1)] = (5));

} else {
var statearr_33000_33052 = state_32964__$1;
(statearr_33000_33052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (23))){
var inst_32923 = (state_32964[(14)]);
var inst_32929 = (inst_32923 == null);
var state_32964__$1 = state_32964;
if(cljs.core.truth_(inst_32929)){
var statearr_33001_33053 = state_32964__$1;
(statearr_33001_33053[(1)] = (26));

} else {
var statearr_33002_33054 = state_32964__$1;
(statearr_33002_33054[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (35))){
var inst_32949 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
if(cljs.core.truth_(inst_32949)){
var statearr_33003_33055 = state_32964__$1;
(statearr_33003_33055[(1)] = (36));

} else {
var statearr_33004_33056 = state_32964__$1;
(statearr_33004_33056[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (19))){
var inst_32891 = (state_32964[(7)]);
var inst_32911 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32891);
var state_32964__$1 = state_32964;
var statearr_33005_33057 = state_32964__$1;
(statearr_33005_33057[(2)] = inst_32911);

(statearr_33005_33057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (11))){
var inst_32891 = (state_32964[(7)]);
var inst_32895 = (inst_32891 == null);
var inst_32896 = cljs.core.not.call(null,inst_32895);
var state_32964__$1 = state_32964;
if(inst_32896){
var statearr_33006_33058 = state_32964__$1;
(statearr_33006_33058[(1)] = (13));

} else {
var statearr_33007_33059 = state_32964__$1;
(statearr_33007_33059[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (9))){
var inst_32866 = (state_32964[(8)]);
var state_32964__$1 = state_32964;
var statearr_33008_33060 = state_32964__$1;
(statearr_33008_33060[(2)] = inst_32866);

(statearr_33008_33060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (5))){
var state_32964__$1 = state_32964;
var statearr_33009_33061 = state_32964__$1;
(statearr_33009_33061[(2)] = true);

(statearr_33009_33061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (14))){
var state_32964__$1 = state_32964;
var statearr_33010_33062 = state_32964__$1;
(statearr_33010_33062[(2)] = false);

(statearr_33010_33062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (26))){
var inst_32924 = (state_32964[(11)]);
var inst_32931 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32924);
var state_32964__$1 = state_32964;
var statearr_33011_33063 = state_32964__$1;
(statearr_33011_33063[(2)] = inst_32931);

(statearr_33011_33063[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (16))){
var state_32964__$1 = state_32964;
var statearr_33012_33064 = state_32964__$1;
(statearr_33012_33064[(2)] = true);

(statearr_33012_33064[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (38))){
var inst_32954 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
var statearr_33013_33065 = state_32964__$1;
(statearr_33013_33065[(2)] = inst_32954);

(statearr_33013_33065[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (30))){
var inst_32915 = (state_32964[(10)]);
var inst_32924 = (state_32964[(11)]);
var inst_32916 = (state_32964[(13)]);
var inst_32941 = cljs.core.empty_QMARK_.call(null,inst_32915);
var inst_32942 = inst_32916.call(null,inst_32924);
var inst_32943 = cljs.core.not.call(null,inst_32942);
var inst_32944 = (inst_32941) && (inst_32943);
var state_32964__$1 = state_32964;
var statearr_33014_33066 = state_32964__$1;
(statearr_33014_33066[(2)] = inst_32944);

(statearr_33014_33066[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (10))){
var inst_32866 = (state_32964[(8)]);
var inst_32887 = (state_32964[(2)]);
var inst_32888 = cljs.core.get.call(null,inst_32887,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32889 = cljs.core.get.call(null,inst_32887,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32890 = cljs.core.get.call(null,inst_32887,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32891 = inst_32866;
var state_32964__$1 = (function (){var statearr_33015 = state_32964;
(statearr_33015[(16)] = inst_32890);

(statearr_33015[(17)] = inst_32888);

(statearr_33015[(18)] = inst_32889);

(statearr_33015[(7)] = inst_32891);

return statearr_33015;
})();
var statearr_33016_33067 = state_32964__$1;
(statearr_33016_33067[(2)] = null);

(statearr_33016_33067[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (18))){
var inst_32906 = (state_32964[(2)]);
var state_32964__$1 = state_32964;
var statearr_33017_33068 = state_32964__$1;
(statearr_33017_33068[(2)] = inst_32906);

(statearr_33017_33068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (37))){
var state_32964__$1 = state_32964;
var statearr_33018_33069 = state_32964__$1;
(statearr_33018_33069[(2)] = null);

(statearr_33018_33069[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32965 === (8))){
var inst_32866 = (state_32964[(8)]);
var inst_32884 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32866);
var state_32964__$1 = state_32964;
var statearr_33019_33070 = state_32964__$1;
(statearr_33019_33070[(2)] = inst_32884);

(statearr_33019_33070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31978__auto___33024,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31890__auto__,c__31978__auto___33024,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31891__auto__ = null;
var cljs$core$async$mix_$_state_machine__31891__auto____0 = (function (){
var statearr_33020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33020[(0)] = cljs$core$async$mix_$_state_machine__31891__auto__);

(statearr_33020[(1)] = (1));

return statearr_33020;
});
var cljs$core$async$mix_$_state_machine__31891__auto____1 = (function (state_32964){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_32964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e33021){if((e33021 instanceof Object)){
var ex__31894__auto__ = e33021;
var statearr_33022_33071 = state_32964;
(statearr_33022_33071[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33072 = state_32964;
state_32964 = G__33072;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31891__auto__ = function(state_32964){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31891__auto____1.call(this,state_32964);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31891__auto____0;
cljs$core$async$mix_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31891__auto____1;
return cljs$core$async$mix_$_state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto___33024,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31980__auto__ = (function (){var statearr_33023 = f__31979__auto__.call(null);
(statearr_33023[(6)] = c__31978__auto___33024);

return statearr_33023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___33024,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28972__auto__ = (((p == null))?null:p);
var m__28973__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28972__auto__)]);
if(!((m__28973__auto__ == null))){
return m__28973__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28973__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28973__auto____$1 == null))){
return m__28973__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28972__auto__ = (((p == null))?null:p);
var m__28973__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28972__auto__)]);
if(!((m__28973__auto__ == null))){
return m__28973__auto__.call(null,p,v,ch);
} else {
var m__28973__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28973__auto____$1 == null))){
return m__28973__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33074 = arguments.length;
switch (G__33074) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28972__auto__ = (((p == null))?null:p);
var m__28973__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28972__auto__)]);
if(!((m__28973__auto__ == null))){
return m__28973__auto__.call(null,p);
} else {
var m__28973__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28973__auto____$1 == null))){
return m__28973__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28972__auto__ = (((p == null))?null:p);
var m__28973__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28972__auto__)]);
if(!((m__28973__auto__ == null))){
return m__28973__auto__.call(null,p,v);
} else {
var m__28973__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28973__auto____$1 == null))){
return m__28973__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33078 = arguments.length;
switch (G__33078) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28289__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28289__auto__)){
return or__28289__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28289__auto__,mults){
return (function (p1__33076_SHARP_){
if(cljs.core.truth_(p1__33076_SHARP_.call(null,topic))){
return p1__33076_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33076_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28289__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33079 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33080){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33080 = meta33080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33081,meta33080__$1){
var self__ = this;
var _33081__$1 = this;
return (new cljs.core.async.t_cljs$core$async33079(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33080__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33081){
var self__ = this;
var _33081__$1 = this;
return self__.meta33080;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33079.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33079.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33079.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33079.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33079.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33079.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33079.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33079.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33080","meta33080",134284930,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33079";

cljs.core.async.t_cljs$core$async33079.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28914__auto__,writer__28915__auto__,opt__28916__auto__){
return cljs.core._write.call(null,writer__28915__auto__,"cljs.core.async/t_cljs$core$async33079");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33079 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33079(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33080){
return (new cljs.core.async.t_cljs$core$async33079(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33080));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33079(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31978__auto___33199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___33199,mults,ensure_mult,p){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto___33199,mults,ensure_mult,p){
return (function (state_33153){
var state_val_33154 = (state_33153[(1)]);
if((state_val_33154 === (7))){
var inst_33149 = (state_33153[(2)]);
var state_33153__$1 = state_33153;
var statearr_33155_33200 = state_33153__$1;
(statearr_33155_33200[(2)] = inst_33149);

(statearr_33155_33200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (20))){
var state_33153__$1 = state_33153;
var statearr_33156_33201 = state_33153__$1;
(statearr_33156_33201[(2)] = null);

(statearr_33156_33201[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (1))){
var state_33153__$1 = state_33153;
var statearr_33157_33202 = state_33153__$1;
(statearr_33157_33202[(2)] = null);

(statearr_33157_33202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (24))){
var inst_33132 = (state_33153[(7)]);
var inst_33141 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33132);
var state_33153__$1 = state_33153;
var statearr_33158_33203 = state_33153__$1;
(statearr_33158_33203[(2)] = inst_33141);

(statearr_33158_33203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (4))){
var inst_33084 = (state_33153[(8)]);
var inst_33084__$1 = (state_33153[(2)]);
var inst_33085 = (inst_33084__$1 == null);
var state_33153__$1 = (function (){var statearr_33159 = state_33153;
(statearr_33159[(8)] = inst_33084__$1);

return statearr_33159;
})();
if(cljs.core.truth_(inst_33085)){
var statearr_33160_33204 = state_33153__$1;
(statearr_33160_33204[(1)] = (5));

} else {
var statearr_33161_33205 = state_33153__$1;
(statearr_33161_33205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (15))){
var inst_33126 = (state_33153[(2)]);
var state_33153__$1 = state_33153;
var statearr_33162_33206 = state_33153__$1;
(statearr_33162_33206[(2)] = inst_33126);

(statearr_33162_33206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (21))){
var inst_33146 = (state_33153[(2)]);
var state_33153__$1 = (function (){var statearr_33163 = state_33153;
(statearr_33163[(9)] = inst_33146);

return statearr_33163;
})();
var statearr_33164_33207 = state_33153__$1;
(statearr_33164_33207[(2)] = null);

(statearr_33164_33207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (13))){
var inst_33108 = (state_33153[(10)]);
var inst_33110 = cljs.core.chunked_seq_QMARK_.call(null,inst_33108);
var state_33153__$1 = state_33153;
if(inst_33110){
var statearr_33165_33208 = state_33153__$1;
(statearr_33165_33208[(1)] = (16));

} else {
var statearr_33166_33209 = state_33153__$1;
(statearr_33166_33209[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (22))){
var inst_33138 = (state_33153[(2)]);
var state_33153__$1 = state_33153;
if(cljs.core.truth_(inst_33138)){
var statearr_33167_33210 = state_33153__$1;
(statearr_33167_33210[(1)] = (23));

} else {
var statearr_33168_33211 = state_33153__$1;
(statearr_33168_33211[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (6))){
var inst_33134 = (state_33153[(11)]);
var inst_33084 = (state_33153[(8)]);
var inst_33132 = (state_33153[(7)]);
var inst_33132__$1 = topic_fn.call(null,inst_33084);
var inst_33133 = cljs.core.deref.call(null,mults);
var inst_33134__$1 = cljs.core.get.call(null,inst_33133,inst_33132__$1);
var state_33153__$1 = (function (){var statearr_33169 = state_33153;
(statearr_33169[(11)] = inst_33134__$1);

(statearr_33169[(7)] = inst_33132__$1);

return statearr_33169;
})();
if(cljs.core.truth_(inst_33134__$1)){
var statearr_33170_33212 = state_33153__$1;
(statearr_33170_33212[(1)] = (19));

} else {
var statearr_33171_33213 = state_33153__$1;
(statearr_33171_33213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (25))){
var inst_33143 = (state_33153[(2)]);
var state_33153__$1 = state_33153;
var statearr_33172_33214 = state_33153__$1;
(statearr_33172_33214[(2)] = inst_33143);

(statearr_33172_33214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (17))){
var inst_33108 = (state_33153[(10)]);
var inst_33117 = cljs.core.first.call(null,inst_33108);
var inst_33118 = cljs.core.async.muxch_STAR_.call(null,inst_33117);
var inst_33119 = cljs.core.async.close_BANG_.call(null,inst_33118);
var inst_33120 = cljs.core.next.call(null,inst_33108);
var inst_33094 = inst_33120;
var inst_33095 = null;
var inst_33096 = (0);
var inst_33097 = (0);
var state_33153__$1 = (function (){var statearr_33173 = state_33153;
(statearr_33173[(12)] = inst_33095);

(statearr_33173[(13)] = inst_33119);

(statearr_33173[(14)] = inst_33096);

(statearr_33173[(15)] = inst_33094);

(statearr_33173[(16)] = inst_33097);

return statearr_33173;
})();
var statearr_33174_33215 = state_33153__$1;
(statearr_33174_33215[(2)] = null);

(statearr_33174_33215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (3))){
var inst_33151 = (state_33153[(2)]);
var state_33153__$1 = state_33153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33153__$1,inst_33151);
} else {
if((state_val_33154 === (12))){
var inst_33128 = (state_33153[(2)]);
var state_33153__$1 = state_33153;
var statearr_33175_33216 = state_33153__$1;
(statearr_33175_33216[(2)] = inst_33128);

(statearr_33175_33216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (2))){
var state_33153__$1 = state_33153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33153__$1,(4),ch);
} else {
if((state_val_33154 === (23))){
var state_33153__$1 = state_33153;
var statearr_33176_33217 = state_33153__$1;
(statearr_33176_33217[(2)] = null);

(statearr_33176_33217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (19))){
var inst_33134 = (state_33153[(11)]);
var inst_33084 = (state_33153[(8)]);
var inst_33136 = cljs.core.async.muxch_STAR_.call(null,inst_33134);
var state_33153__$1 = state_33153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33153__$1,(22),inst_33136,inst_33084);
} else {
if((state_val_33154 === (11))){
var inst_33108 = (state_33153[(10)]);
var inst_33094 = (state_33153[(15)]);
var inst_33108__$1 = cljs.core.seq.call(null,inst_33094);
var state_33153__$1 = (function (){var statearr_33177 = state_33153;
(statearr_33177[(10)] = inst_33108__$1);

return statearr_33177;
})();
if(inst_33108__$1){
var statearr_33178_33218 = state_33153__$1;
(statearr_33178_33218[(1)] = (13));

} else {
var statearr_33179_33219 = state_33153__$1;
(statearr_33179_33219[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (9))){
var inst_33130 = (state_33153[(2)]);
var state_33153__$1 = state_33153;
var statearr_33180_33220 = state_33153__$1;
(statearr_33180_33220[(2)] = inst_33130);

(statearr_33180_33220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (5))){
var inst_33091 = cljs.core.deref.call(null,mults);
var inst_33092 = cljs.core.vals.call(null,inst_33091);
var inst_33093 = cljs.core.seq.call(null,inst_33092);
var inst_33094 = inst_33093;
var inst_33095 = null;
var inst_33096 = (0);
var inst_33097 = (0);
var state_33153__$1 = (function (){var statearr_33181 = state_33153;
(statearr_33181[(12)] = inst_33095);

(statearr_33181[(14)] = inst_33096);

(statearr_33181[(15)] = inst_33094);

(statearr_33181[(16)] = inst_33097);

return statearr_33181;
})();
var statearr_33182_33221 = state_33153__$1;
(statearr_33182_33221[(2)] = null);

(statearr_33182_33221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (14))){
var state_33153__$1 = state_33153;
var statearr_33186_33222 = state_33153__$1;
(statearr_33186_33222[(2)] = null);

(statearr_33186_33222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (16))){
var inst_33108 = (state_33153[(10)]);
var inst_33112 = cljs.core.chunk_first.call(null,inst_33108);
var inst_33113 = cljs.core.chunk_rest.call(null,inst_33108);
var inst_33114 = cljs.core.count.call(null,inst_33112);
var inst_33094 = inst_33113;
var inst_33095 = inst_33112;
var inst_33096 = inst_33114;
var inst_33097 = (0);
var state_33153__$1 = (function (){var statearr_33187 = state_33153;
(statearr_33187[(12)] = inst_33095);

(statearr_33187[(14)] = inst_33096);

(statearr_33187[(15)] = inst_33094);

(statearr_33187[(16)] = inst_33097);

return statearr_33187;
})();
var statearr_33188_33223 = state_33153__$1;
(statearr_33188_33223[(2)] = null);

(statearr_33188_33223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (10))){
var inst_33095 = (state_33153[(12)]);
var inst_33096 = (state_33153[(14)]);
var inst_33094 = (state_33153[(15)]);
var inst_33097 = (state_33153[(16)]);
var inst_33102 = cljs.core._nth.call(null,inst_33095,inst_33097);
var inst_33103 = cljs.core.async.muxch_STAR_.call(null,inst_33102);
var inst_33104 = cljs.core.async.close_BANG_.call(null,inst_33103);
var inst_33105 = (inst_33097 + (1));
var tmp33183 = inst_33095;
var tmp33184 = inst_33096;
var tmp33185 = inst_33094;
var inst_33094__$1 = tmp33185;
var inst_33095__$1 = tmp33183;
var inst_33096__$1 = tmp33184;
var inst_33097__$1 = inst_33105;
var state_33153__$1 = (function (){var statearr_33189 = state_33153;
(statearr_33189[(12)] = inst_33095__$1);

(statearr_33189[(17)] = inst_33104);

(statearr_33189[(14)] = inst_33096__$1);

(statearr_33189[(15)] = inst_33094__$1);

(statearr_33189[(16)] = inst_33097__$1);

return statearr_33189;
})();
var statearr_33190_33224 = state_33153__$1;
(statearr_33190_33224[(2)] = null);

(statearr_33190_33224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (18))){
var inst_33123 = (state_33153[(2)]);
var state_33153__$1 = state_33153;
var statearr_33191_33225 = state_33153__$1;
(statearr_33191_33225[(2)] = inst_33123);

(statearr_33191_33225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (8))){
var inst_33096 = (state_33153[(14)]);
var inst_33097 = (state_33153[(16)]);
var inst_33099 = (inst_33097 < inst_33096);
var inst_33100 = inst_33099;
var state_33153__$1 = state_33153;
if(cljs.core.truth_(inst_33100)){
var statearr_33192_33226 = state_33153__$1;
(statearr_33192_33226[(1)] = (10));

} else {
var statearr_33193_33227 = state_33153__$1;
(statearr_33193_33227[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31978__auto___33199,mults,ensure_mult,p))
;
return ((function (switch__31890__auto__,c__31978__auto___33199,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31891__auto__ = null;
var cljs$core$async$state_machine__31891__auto____0 = (function (){
var statearr_33194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33194[(0)] = cljs$core$async$state_machine__31891__auto__);

(statearr_33194[(1)] = (1));

return statearr_33194;
});
var cljs$core$async$state_machine__31891__auto____1 = (function (state_33153){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_33153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e33195){if((e33195 instanceof Object)){
var ex__31894__auto__ = e33195;
var statearr_33196_33228 = state_33153;
(statearr_33196_33228[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33229 = state_33153;
state_33153 = G__33229;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$state_machine__31891__auto__ = function(state_33153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31891__auto____1.call(this,state_33153);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31891__auto____0;
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31891__auto____1;
return cljs$core$async$state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto___33199,mults,ensure_mult,p))
})();
var state__31980__auto__ = (function (){var statearr_33197 = f__31979__auto__.call(null);
(statearr_33197[(6)] = c__31978__auto___33199);

return statearr_33197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___33199,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33231 = arguments.length;
switch (G__33231) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33234 = arguments.length;
switch (G__33234) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33237 = arguments.length;
switch (G__33237) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31978__auto___33304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___33304,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto___33304,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33276){
var state_val_33277 = (state_33276[(1)]);
if((state_val_33277 === (7))){
var state_33276__$1 = state_33276;
var statearr_33278_33305 = state_33276__$1;
(statearr_33278_33305[(2)] = null);

(statearr_33278_33305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (1))){
var state_33276__$1 = state_33276;
var statearr_33279_33306 = state_33276__$1;
(statearr_33279_33306[(2)] = null);

(statearr_33279_33306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (4))){
var inst_33240 = (state_33276[(7)]);
var inst_33242 = (inst_33240 < cnt);
var state_33276__$1 = state_33276;
if(cljs.core.truth_(inst_33242)){
var statearr_33280_33307 = state_33276__$1;
(statearr_33280_33307[(1)] = (6));

} else {
var statearr_33281_33308 = state_33276__$1;
(statearr_33281_33308[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (15))){
var inst_33272 = (state_33276[(2)]);
var state_33276__$1 = state_33276;
var statearr_33282_33309 = state_33276__$1;
(statearr_33282_33309[(2)] = inst_33272);

(statearr_33282_33309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (13))){
var inst_33265 = cljs.core.async.close_BANG_.call(null,out);
var state_33276__$1 = state_33276;
var statearr_33283_33310 = state_33276__$1;
(statearr_33283_33310[(2)] = inst_33265);

(statearr_33283_33310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (6))){
var state_33276__$1 = state_33276;
var statearr_33284_33311 = state_33276__$1;
(statearr_33284_33311[(2)] = null);

(statearr_33284_33311[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (3))){
var inst_33274 = (state_33276[(2)]);
var state_33276__$1 = state_33276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33276__$1,inst_33274);
} else {
if((state_val_33277 === (12))){
var inst_33262 = (state_33276[(8)]);
var inst_33262__$1 = (state_33276[(2)]);
var inst_33263 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33262__$1);
var state_33276__$1 = (function (){var statearr_33285 = state_33276;
(statearr_33285[(8)] = inst_33262__$1);

return statearr_33285;
})();
if(cljs.core.truth_(inst_33263)){
var statearr_33286_33312 = state_33276__$1;
(statearr_33286_33312[(1)] = (13));

} else {
var statearr_33287_33313 = state_33276__$1;
(statearr_33287_33313[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (2))){
var inst_33239 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33240 = (0);
var state_33276__$1 = (function (){var statearr_33288 = state_33276;
(statearr_33288[(9)] = inst_33239);

(statearr_33288[(7)] = inst_33240);

return statearr_33288;
})();
var statearr_33289_33314 = state_33276__$1;
(statearr_33289_33314[(2)] = null);

(statearr_33289_33314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (11))){
var inst_33240 = (state_33276[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33276,(10),Object,null,(9));
var inst_33249 = chs__$1.call(null,inst_33240);
var inst_33250 = done.call(null,inst_33240);
var inst_33251 = cljs.core.async.take_BANG_.call(null,inst_33249,inst_33250);
var state_33276__$1 = state_33276;
var statearr_33290_33315 = state_33276__$1;
(statearr_33290_33315[(2)] = inst_33251);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33276__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (9))){
var inst_33240 = (state_33276[(7)]);
var inst_33253 = (state_33276[(2)]);
var inst_33254 = (inst_33240 + (1));
var inst_33240__$1 = inst_33254;
var state_33276__$1 = (function (){var statearr_33291 = state_33276;
(statearr_33291[(7)] = inst_33240__$1);

(statearr_33291[(10)] = inst_33253);

return statearr_33291;
})();
var statearr_33292_33316 = state_33276__$1;
(statearr_33292_33316[(2)] = null);

(statearr_33292_33316[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (5))){
var inst_33260 = (state_33276[(2)]);
var state_33276__$1 = (function (){var statearr_33293 = state_33276;
(statearr_33293[(11)] = inst_33260);

return statearr_33293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33276__$1,(12),dchan);
} else {
if((state_val_33277 === (14))){
var inst_33262 = (state_33276[(8)]);
var inst_33267 = cljs.core.apply.call(null,f,inst_33262);
var state_33276__$1 = state_33276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33276__$1,(16),out,inst_33267);
} else {
if((state_val_33277 === (16))){
var inst_33269 = (state_33276[(2)]);
var state_33276__$1 = (function (){var statearr_33294 = state_33276;
(statearr_33294[(12)] = inst_33269);

return statearr_33294;
})();
var statearr_33295_33317 = state_33276__$1;
(statearr_33295_33317[(2)] = null);

(statearr_33295_33317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (10))){
var inst_33244 = (state_33276[(2)]);
var inst_33245 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33276__$1 = (function (){var statearr_33296 = state_33276;
(statearr_33296[(13)] = inst_33244);

return statearr_33296;
})();
var statearr_33297_33318 = state_33276__$1;
(statearr_33297_33318[(2)] = inst_33245);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33276__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33277 === (8))){
var inst_33258 = (state_33276[(2)]);
var state_33276__$1 = state_33276;
var statearr_33298_33319 = state_33276__$1;
(statearr_33298_33319[(2)] = inst_33258);

(statearr_33298_33319[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31978__auto___33304,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31890__auto__,c__31978__auto___33304,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31891__auto__ = null;
var cljs$core$async$state_machine__31891__auto____0 = (function (){
var statearr_33299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33299[(0)] = cljs$core$async$state_machine__31891__auto__);

(statearr_33299[(1)] = (1));

return statearr_33299;
});
var cljs$core$async$state_machine__31891__auto____1 = (function (state_33276){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_33276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e33300){if((e33300 instanceof Object)){
var ex__31894__auto__ = e33300;
var statearr_33301_33320 = state_33276;
(statearr_33301_33320[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33321 = state_33276;
state_33276 = G__33321;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$state_machine__31891__auto__ = function(state_33276){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31891__auto____1.call(this,state_33276);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31891__auto____0;
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31891__auto____1;
return cljs$core$async$state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto___33304,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31980__auto__ = (function (){var statearr_33302 = f__31979__auto__.call(null);
(statearr_33302[(6)] = c__31978__auto___33304);

return statearr_33302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___33304,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33324 = arguments.length;
switch (G__33324) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31978__auto___33378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___33378,out){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto___33378,out){
return (function (state_33356){
var state_val_33357 = (state_33356[(1)]);
if((state_val_33357 === (7))){
var inst_33335 = (state_33356[(7)]);
var inst_33336 = (state_33356[(8)]);
var inst_33335__$1 = (state_33356[(2)]);
var inst_33336__$1 = cljs.core.nth.call(null,inst_33335__$1,(0),null);
var inst_33337 = cljs.core.nth.call(null,inst_33335__$1,(1),null);
var inst_33338 = (inst_33336__$1 == null);
var state_33356__$1 = (function (){var statearr_33358 = state_33356;
(statearr_33358[(9)] = inst_33337);

(statearr_33358[(7)] = inst_33335__$1);

(statearr_33358[(8)] = inst_33336__$1);

return statearr_33358;
})();
if(cljs.core.truth_(inst_33338)){
var statearr_33359_33379 = state_33356__$1;
(statearr_33359_33379[(1)] = (8));

} else {
var statearr_33360_33380 = state_33356__$1;
(statearr_33360_33380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (1))){
var inst_33325 = cljs.core.vec.call(null,chs);
var inst_33326 = inst_33325;
var state_33356__$1 = (function (){var statearr_33361 = state_33356;
(statearr_33361[(10)] = inst_33326);

return statearr_33361;
})();
var statearr_33362_33381 = state_33356__$1;
(statearr_33362_33381[(2)] = null);

(statearr_33362_33381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (4))){
var inst_33326 = (state_33356[(10)]);
var state_33356__$1 = state_33356;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33356__$1,(7),inst_33326);
} else {
if((state_val_33357 === (6))){
var inst_33352 = (state_33356[(2)]);
var state_33356__$1 = state_33356;
var statearr_33363_33382 = state_33356__$1;
(statearr_33363_33382[(2)] = inst_33352);

(statearr_33363_33382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (3))){
var inst_33354 = (state_33356[(2)]);
var state_33356__$1 = state_33356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33356__$1,inst_33354);
} else {
if((state_val_33357 === (2))){
var inst_33326 = (state_33356[(10)]);
var inst_33328 = cljs.core.count.call(null,inst_33326);
var inst_33329 = (inst_33328 > (0));
var state_33356__$1 = state_33356;
if(cljs.core.truth_(inst_33329)){
var statearr_33365_33383 = state_33356__$1;
(statearr_33365_33383[(1)] = (4));

} else {
var statearr_33366_33384 = state_33356__$1;
(statearr_33366_33384[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (11))){
var inst_33326 = (state_33356[(10)]);
var inst_33345 = (state_33356[(2)]);
var tmp33364 = inst_33326;
var inst_33326__$1 = tmp33364;
var state_33356__$1 = (function (){var statearr_33367 = state_33356;
(statearr_33367[(11)] = inst_33345);

(statearr_33367[(10)] = inst_33326__$1);

return statearr_33367;
})();
var statearr_33368_33385 = state_33356__$1;
(statearr_33368_33385[(2)] = null);

(statearr_33368_33385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (9))){
var inst_33336 = (state_33356[(8)]);
var state_33356__$1 = state_33356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33356__$1,(11),out,inst_33336);
} else {
if((state_val_33357 === (5))){
var inst_33350 = cljs.core.async.close_BANG_.call(null,out);
var state_33356__$1 = state_33356;
var statearr_33369_33386 = state_33356__$1;
(statearr_33369_33386[(2)] = inst_33350);

(statearr_33369_33386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (10))){
var inst_33348 = (state_33356[(2)]);
var state_33356__$1 = state_33356;
var statearr_33370_33387 = state_33356__$1;
(statearr_33370_33387[(2)] = inst_33348);

(statearr_33370_33387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (8))){
var inst_33337 = (state_33356[(9)]);
var inst_33335 = (state_33356[(7)]);
var inst_33336 = (state_33356[(8)]);
var inst_33326 = (state_33356[(10)]);
var inst_33340 = (function (){var cs = inst_33326;
var vec__33331 = inst_33335;
var v = inst_33336;
var c = inst_33337;
return ((function (cs,vec__33331,v,c,inst_33337,inst_33335,inst_33336,inst_33326,state_val_33357,c__31978__auto___33378,out){
return (function (p1__33322_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33322_SHARP_);
});
;})(cs,vec__33331,v,c,inst_33337,inst_33335,inst_33336,inst_33326,state_val_33357,c__31978__auto___33378,out))
})();
var inst_33341 = cljs.core.filterv.call(null,inst_33340,inst_33326);
var inst_33326__$1 = inst_33341;
var state_33356__$1 = (function (){var statearr_33371 = state_33356;
(statearr_33371[(10)] = inst_33326__$1);

return statearr_33371;
})();
var statearr_33372_33388 = state_33356__$1;
(statearr_33372_33388[(2)] = null);

(statearr_33372_33388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31978__auto___33378,out))
;
return ((function (switch__31890__auto__,c__31978__auto___33378,out){
return (function() {
var cljs$core$async$state_machine__31891__auto__ = null;
var cljs$core$async$state_machine__31891__auto____0 = (function (){
var statearr_33373 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33373[(0)] = cljs$core$async$state_machine__31891__auto__);

(statearr_33373[(1)] = (1));

return statearr_33373;
});
var cljs$core$async$state_machine__31891__auto____1 = (function (state_33356){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_33356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e33374){if((e33374 instanceof Object)){
var ex__31894__auto__ = e33374;
var statearr_33375_33389 = state_33356;
(statearr_33375_33389[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33390 = state_33356;
state_33356 = G__33390;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$state_machine__31891__auto__ = function(state_33356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31891__auto____1.call(this,state_33356);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31891__auto____0;
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31891__auto____1;
return cljs$core$async$state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto___33378,out))
})();
var state__31980__auto__ = (function (){var statearr_33376 = f__31979__auto__.call(null);
(statearr_33376[(6)] = c__31978__auto___33378);

return statearr_33376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___33378,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33392 = arguments.length;
switch (G__33392) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31978__auto___33437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___33437,out){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto___33437,out){
return (function (state_33416){
var state_val_33417 = (state_33416[(1)]);
if((state_val_33417 === (7))){
var inst_33398 = (state_33416[(7)]);
var inst_33398__$1 = (state_33416[(2)]);
var inst_33399 = (inst_33398__$1 == null);
var inst_33400 = cljs.core.not.call(null,inst_33399);
var state_33416__$1 = (function (){var statearr_33418 = state_33416;
(statearr_33418[(7)] = inst_33398__$1);

return statearr_33418;
})();
if(inst_33400){
var statearr_33419_33438 = state_33416__$1;
(statearr_33419_33438[(1)] = (8));

} else {
var statearr_33420_33439 = state_33416__$1;
(statearr_33420_33439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33417 === (1))){
var inst_33393 = (0);
var state_33416__$1 = (function (){var statearr_33421 = state_33416;
(statearr_33421[(8)] = inst_33393);

return statearr_33421;
})();
var statearr_33422_33440 = state_33416__$1;
(statearr_33422_33440[(2)] = null);

(statearr_33422_33440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33417 === (4))){
var state_33416__$1 = state_33416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33416__$1,(7),ch);
} else {
if((state_val_33417 === (6))){
var inst_33411 = (state_33416[(2)]);
var state_33416__$1 = state_33416;
var statearr_33423_33441 = state_33416__$1;
(statearr_33423_33441[(2)] = inst_33411);

(statearr_33423_33441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33417 === (3))){
var inst_33413 = (state_33416[(2)]);
var inst_33414 = cljs.core.async.close_BANG_.call(null,out);
var state_33416__$1 = (function (){var statearr_33424 = state_33416;
(statearr_33424[(9)] = inst_33413);

return statearr_33424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33416__$1,inst_33414);
} else {
if((state_val_33417 === (2))){
var inst_33393 = (state_33416[(8)]);
var inst_33395 = (inst_33393 < n);
var state_33416__$1 = state_33416;
if(cljs.core.truth_(inst_33395)){
var statearr_33425_33442 = state_33416__$1;
(statearr_33425_33442[(1)] = (4));

} else {
var statearr_33426_33443 = state_33416__$1;
(statearr_33426_33443[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33417 === (11))){
var inst_33393 = (state_33416[(8)]);
var inst_33403 = (state_33416[(2)]);
var inst_33404 = (inst_33393 + (1));
var inst_33393__$1 = inst_33404;
var state_33416__$1 = (function (){var statearr_33427 = state_33416;
(statearr_33427[(10)] = inst_33403);

(statearr_33427[(8)] = inst_33393__$1);

return statearr_33427;
})();
var statearr_33428_33444 = state_33416__$1;
(statearr_33428_33444[(2)] = null);

(statearr_33428_33444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33417 === (9))){
var state_33416__$1 = state_33416;
var statearr_33429_33445 = state_33416__$1;
(statearr_33429_33445[(2)] = null);

(statearr_33429_33445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33417 === (5))){
var state_33416__$1 = state_33416;
var statearr_33430_33446 = state_33416__$1;
(statearr_33430_33446[(2)] = null);

(statearr_33430_33446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33417 === (10))){
var inst_33408 = (state_33416[(2)]);
var state_33416__$1 = state_33416;
var statearr_33431_33447 = state_33416__$1;
(statearr_33431_33447[(2)] = inst_33408);

(statearr_33431_33447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33417 === (8))){
var inst_33398 = (state_33416[(7)]);
var state_33416__$1 = state_33416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33416__$1,(11),out,inst_33398);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31978__auto___33437,out))
;
return ((function (switch__31890__auto__,c__31978__auto___33437,out){
return (function() {
var cljs$core$async$state_machine__31891__auto__ = null;
var cljs$core$async$state_machine__31891__auto____0 = (function (){
var statearr_33432 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33432[(0)] = cljs$core$async$state_machine__31891__auto__);

(statearr_33432[(1)] = (1));

return statearr_33432;
});
var cljs$core$async$state_machine__31891__auto____1 = (function (state_33416){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_33416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e33433){if((e33433 instanceof Object)){
var ex__31894__auto__ = e33433;
var statearr_33434_33448 = state_33416;
(statearr_33434_33448[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33449 = state_33416;
state_33416 = G__33449;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$state_machine__31891__auto__ = function(state_33416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31891__auto____1.call(this,state_33416);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31891__auto____0;
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31891__auto____1;
return cljs$core$async$state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto___33437,out))
})();
var state__31980__auto__ = (function (){var statearr_33435 = f__31979__auto__.call(null);
(statearr_33435[(6)] = c__31978__auto___33437);

return statearr_33435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___33437,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33451 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33451 = (function (f,ch,meta33452){
this.f = f;
this.ch = ch;
this.meta33452 = meta33452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33453,meta33452__$1){
var self__ = this;
var _33453__$1 = this;
return (new cljs.core.async.t_cljs$core$async33451(self__.f,self__.ch,meta33452__$1));
});

cljs.core.async.t_cljs$core$async33451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33453){
var self__ = this;
var _33453__$1 = this;
return self__.meta33452;
});

cljs.core.async.t_cljs$core$async33451.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33451.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33451.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33451.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33451.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33454 = (function (f,ch,meta33452,_,fn1,meta33455){
this.f = f;
this.ch = ch;
this.meta33452 = meta33452;
this._ = _;
this.fn1 = fn1;
this.meta33455 = meta33455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33456,meta33455__$1){
var self__ = this;
var _33456__$1 = this;
return (new cljs.core.async.t_cljs$core$async33454(self__.f,self__.ch,self__.meta33452,self__._,self__.fn1,meta33455__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33456){
var self__ = this;
var _33456__$1 = this;
return self__.meta33455;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33454.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33454.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33450_SHARP_){
return f1.call(null,(((p1__33450_SHARP_ == null))?null:self__.f.call(null,p1__33450_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33454.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33452","meta33452",1994136447,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33451","cljs.core.async/t_cljs$core$async33451",168346025,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33455","meta33455",1610084377,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33454";

cljs.core.async.t_cljs$core$async33454.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28914__auto__,writer__28915__auto__,opt__28916__auto__){
return cljs.core._write.call(null,writer__28915__auto__,"cljs.core.async/t_cljs$core$async33454");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33454 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33454(f__$1,ch__$1,meta33452__$1,___$2,fn1__$1,meta33455){
return (new cljs.core.async.t_cljs$core$async33454(f__$1,ch__$1,meta33452__$1,___$2,fn1__$1,meta33455));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33454(self__.f,self__.ch,self__.meta33452,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28277__auto__ = ret;
if(cljs.core.truth_(and__28277__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28277__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33451.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33451.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33452","meta33452",1994136447,null)], null);
});

cljs.core.async.t_cljs$core$async33451.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33451.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33451";

cljs.core.async.t_cljs$core$async33451.cljs$lang$ctorPrWriter = (function (this__28914__auto__,writer__28915__auto__,opt__28916__auto__){
return cljs.core._write.call(null,writer__28915__auto__,"cljs.core.async/t_cljs$core$async33451");
});

cljs.core.async.__GT_t_cljs$core$async33451 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33451(f__$1,ch__$1,meta33452){
return (new cljs.core.async.t_cljs$core$async33451(f__$1,ch__$1,meta33452));
});

}

return (new cljs.core.async.t_cljs$core$async33451(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33457 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33457 = (function (f,ch,meta33458){
this.f = f;
this.ch = ch;
this.meta33458 = meta33458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33459,meta33458__$1){
var self__ = this;
var _33459__$1 = this;
return (new cljs.core.async.t_cljs$core$async33457(self__.f,self__.ch,meta33458__$1));
});

cljs.core.async.t_cljs$core$async33457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33459){
var self__ = this;
var _33459__$1 = this;
return self__.meta33458;
});

cljs.core.async.t_cljs$core$async33457.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33457.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33457.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33457.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33457.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33457.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33458","meta33458",313780923,null)], null);
});

cljs.core.async.t_cljs$core$async33457.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33457.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33457";

cljs.core.async.t_cljs$core$async33457.cljs$lang$ctorPrWriter = (function (this__28914__auto__,writer__28915__auto__,opt__28916__auto__){
return cljs.core._write.call(null,writer__28915__auto__,"cljs.core.async/t_cljs$core$async33457");
});

cljs.core.async.__GT_t_cljs$core$async33457 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33457(f__$1,ch__$1,meta33458){
return (new cljs.core.async.t_cljs$core$async33457(f__$1,ch__$1,meta33458));
});

}

return (new cljs.core.async.t_cljs$core$async33457(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33460 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33460 = (function (p,ch,meta33461){
this.p = p;
this.ch = ch;
this.meta33461 = meta33461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33462,meta33461__$1){
var self__ = this;
var _33462__$1 = this;
return (new cljs.core.async.t_cljs$core$async33460(self__.p,self__.ch,meta33461__$1));
});

cljs.core.async.t_cljs$core$async33460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33462){
var self__ = this;
var _33462__$1 = this;
return self__.meta33461;
});

cljs.core.async.t_cljs$core$async33460.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33460.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33460.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33460.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33460.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33460.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33460.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33461","meta33461",-2075065594,null)], null);
});

cljs.core.async.t_cljs$core$async33460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33460";

cljs.core.async.t_cljs$core$async33460.cljs$lang$ctorPrWriter = (function (this__28914__auto__,writer__28915__auto__,opt__28916__auto__){
return cljs.core._write.call(null,writer__28915__auto__,"cljs.core.async/t_cljs$core$async33460");
});

cljs.core.async.__GT_t_cljs$core$async33460 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33460(p__$1,ch__$1,meta33461){
return (new cljs.core.async.t_cljs$core$async33460(p__$1,ch__$1,meta33461));
});

}

return (new cljs.core.async.t_cljs$core$async33460(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33464 = arguments.length;
switch (G__33464) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31978__auto___33504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___33504,out){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto___33504,out){
return (function (state_33485){
var state_val_33486 = (state_33485[(1)]);
if((state_val_33486 === (7))){
var inst_33481 = (state_33485[(2)]);
var state_33485__$1 = state_33485;
var statearr_33487_33505 = state_33485__$1;
(statearr_33487_33505[(2)] = inst_33481);

(statearr_33487_33505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33486 === (1))){
var state_33485__$1 = state_33485;
var statearr_33488_33506 = state_33485__$1;
(statearr_33488_33506[(2)] = null);

(statearr_33488_33506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33486 === (4))){
var inst_33467 = (state_33485[(7)]);
var inst_33467__$1 = (state_33485[(2)]);
var inst_33468 = (inst_33467__$1 == null);
var state_33485__$1 = (function (){var statearr_33489 = state_33485;
(statearr_33489[(7)] = inst_33467__$1);

return statearr_33489;
})();
if(cljs.core.truth_(inst_33468)){
var statearr_33490_33507 = state_33485__$1;
(statearr_33490_33507[(1)] = (5));

} else {
var statearr_33491_33508 = state_33485__$1;
(statearr_33491_33508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33486 === (6))){
var inst_33467 = (state_33485[(7)]);
var inst_33472 = p.call(null,inst_33467);
var state_33485__$1 = state_33485;
if(cljs.core.truth_(inst_33472)){
var statearr_33492_33509 = state_33485__$1;
(statearr_33492_33509[(1)] = (8));

} else {
var statearr_33493_33510 = state_33485__$1;
(statearr_33493_33510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33486 === (3))){
var inst_33483 = (state_33485[(2)]);
var state_33485__$1 = state_33485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33485__$1,inst_33483);
} else {
if((state_val_33486 === (2))){
var state_33485__$1 = state_33485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33485__$1,(4),ch);
} else {
if((state_val_33486 === (11))){
var inst_33475 = (state_33485[(2)]);
var state_33485__$1 = state_33485;
var statearr_33494_33511 = state_33485__$1;
(statearr_33494_33511[(2)] = inst_33475);

(statearr_33494_33511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33486 === (9))){
var state_33485__$1 = state_33485;
var statearr_33495_33512 = state_33485__$1;
(statearr_33495_33512[(2)] = null);

(statearr_33495_33512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33486 === (5))){
var inst_33470 = cljs.core.async.close_BANG_.call(null,out);
var state_33485__$1 = state_33485;
var statearr_33496_33513 = state_33485__$1;
(statearr_33496_33513[(2)] = inst_33470);

(statearr_33496_33513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33486 === (10))){
var inst_33478 = (state_33485[(2)]);
var state_33485__$1 = (function (){var statearr_33497 = state_33485;
(statearr_33497[(8)] = inst_33478);

return statearr_33497;
})();
var statearr_33498_33514 = state_33485__$1;
(statearr_33498_33514[(2)] = null);

(statearr_33498_33514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33486 === (8))){
var inst_33467 = (state_33485[(7)]);
var state_33485__$1 = state_33485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33485__$1,(11),out,inst_33467);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31978__auto___33504,out))
;
return ((function (switch__31890__auto__,c__31978__auto___33504,out){
return (function() {
var cljs$core$async$state_machine__31891__auto__ = null;
var cljs$core$async$state_machine__31891__auto____0 = (function (){
var statearr_33499 = [null,null,null,null,null,null,null,null,null];
(statearr_33499[(0)] = cljs$core$async$state_machine__31891__auto__);

(statearr_33499[(1)] = (1));

return statearr_33499;
});
var cljs$core$async$state_machine__31891__auto____1 = (function (state_33485){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_33485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e33500){if((e33500 instanceof Object)){
var ex__31894__auto__ = e33500;
var statearr_33501_33515 = state_33485;
(statearr_33501_33515[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33516 = state_33485;
state_33485 = G__33516;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$state_machine__31891__auto__ = function(state_33485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31891__auto____1.call(this,state_33485);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31891__auto____0;
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31891__auto____1;
return cljs$core$async$state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto___33504,out))
})();
var state__31980__auto__ = (function (){var statearr_33502 = f__31979__auto__.call(null);
(statearr_33502[(6)] = c__31978__auto___33504);

return statearr_33502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___33504,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33518 = arguments.length;
switch (G__33518) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto__){
return (function (state_33581){
var state_val_33582 = (state_33581[(1)]);
if((state_val_33582 === (7))){
var inst_33577 = (state_33581[(2)]);
var state_33581__$1 = state_33581;
var statearr_33583_33621 = state_33581__$1;
(statearr_33583_33621[(2)] = inst_33577);

(statearr_33583_33621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (20))){
var inst_33547 = (state_33581[(7)]);
var inst_33558 = (state_33581[(2)]);
var inst_33559 = cljs.core.next.call(null,inst_33547);
var inst_33533 = inst_33559;
var inst_33534 = null;
var inst_33535 = (0);
var inst_33536 = (0);
var state_33581__$1 = (function (){var statearr_33584 = state_33581;
(statearr_33584[(8)] = inst_33535);

(statearr_33584[(9)] = inst_33536);

(statearr_33584[(10)] = inst_33558);

(statearr_33584[(11)] = inst_33533);

(statearr_33584[(12)] = inst_33534);

return statearr_33584;
})();
var statearr_33585_33622 = state_33581__$1;
(statearr_33585_33622[(2)] = null);

(statearr_33585_33622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (1))){
var state_33581__$1 = state_33581;
var statearr_33586_33623 = state_33581__$1;
(statearr_33586_33623[(2)] = null);

(statearr_33586_33623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (4))){
var inst_33522 = (state_33581[(13)]);
var inst_33522__$1 = (state_33581[(2)]);
var inst_33523 = (inst_33522__$1 == null);
var state_33581__$1 = (function (){var statearr_33587 = state_33581;
(statearr_33587[(13)] = inst_33522__$1);

return statearr_33587;
})();
if(cljs.core.truth_(inst_33523)){
var statearr_33588_33624 = state_33581__$1;
(statearr_33588_33624[(1)] = (5));

} else {
var statearr_33589_33625 = state_33581__$1;
(statearr_33589_33625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (15))){
var state_33581__$1 = state_33581;
var statearr_33593_33626 = state_33581__$1;
(statearr_33593_33626[(2)] = null);

(statearr_33593_33626[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (21))){
var state_33581__$1 = state_33581;
var statearr_33594_33627 = state_33581__$1;
(statearr_33594_33627[(2)] = null);

(statearr_33594_33627[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (13))){
var inst_33535 = (state_33581[(8)]);
var inst_33536 = (state_33581[(9)]);
var inst_33533 = (state_33581[(11)]);
var inst_33534 = (state_33581[(12)]);
var inst_33543 = (state_33581[(2)]);
var inst_33544 = (inst_33536 + (1));
var tmp33590 = inst_33535;
var tmp33591 = inst_33533;
var tmp33592 = inst_33534;
var inst_33533__$1 = tmp33591;
var inst_33534__$1 = tmp33592;
var inst_33535__$1 = tmp33590;
var inst_33536__$1 = inst_33544;
var state_33581__$1 = (function (){var statearr_33595 = state_33581;
(statearr_33595[(14)] = inst_33543);

(statearr_33595[(8)] = inst_33535__$1);

(statearr_33595[(9)] = inst_33536__$1);

(statearr_33595[(11)] = inst_33533__$1);

(statearr_33595[(12)] = inst_33534__$1);

return statearr_33595;
})();
var statearr_33596_33628 = state_33581__$1;
(statearr_33596_33628[(2)] = null);

(statearr_33596_33628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (22))){
var state_33581__$1 = state_33581;
var statearr_33597_33629 = state_33581__$1;
(statearr_33597_33629[(2)] = null);

(statearr_33597_33629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (6))){
var inst_33522 = (state_33581[(13)]);
var inst_33531 = f.call(null,inst_33522);
var inst_33532 = cljs.core.seq.call(null,inst_33531);
var inst_33533 = inst_33532;
var inst_33534 = null;
var inst_33535 = (0);
var inst_33536 = (0);
var state_33581__$1 = (function (){var statearr_33598 = state_33581;
(statearr_33598[(8)] = inst_33535);

(statearr_33598[(9)] = inst_33536);

(statearr_33598[(11)] = inst_33533);

(statearr_33598[(12)] = inst_33534);

return statearr_33598;
})();
var statearr_33599_33630 = state_33581__$1;
(statearr_33599_33630[(2)] = null);

(statearr_33599_33630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (17))){
var inst_33547 = (state_33581[(7)]);
var inst_33551 = cljs.core.chunk_first.call(null,inst_33547);
var inst_33552 = cljs.core.chunk_rest.call(null,inst_33547);
var inst_33553 = cljs.core.count.call(null,inst_33551);
var inst_33533 = inst_33552;
var inst_33534 = inst_33551;
var inst_33535 = inst_33553;
var inst_33536 = (0);
var state_33581__$1 = (function (){var statearr_33600 = state_33581;
(statearr_33600[(8)] = inst_33535);

(statearr_33600[(9)] = inst_33536);

(statearr_33600[(11)] = inst_33533);

(statearr_33600[(12)] = inst_33534);

return statearr_33600;
})();
var statearr_33601_33631 = state_33581__$1;
(statearr_33601_33631[(2)] = null);

(statearr_33601_33631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (3))){
var inst_33579 = (state_33581[(2)]);
var state_33581__$1 = state_33581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33581__$1,inst_33579);
} else {
if((state_val_33582 === (12))){
var inst_33567 = (state_33581[(2)]);
var state_33581__$1 = state_33581;
var statearr_33602_33632 = state_33581__$1;
(statearr_33602_33632[(2)] = inst_33567);

(statearr_33602_33632[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (2))){
var state_33581__$1 = state_33581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33581__$1,(4),in$);
} else {
if((state_val_33582 === (23))){
var inst_33575 = (state_33581[(2)]);
var state_33581__$1 = state_33581;
var statearr_33603_33633 = state_33581__$1;
(statearr_33603_33633[(2)] = inst_33575);

(statearr_33603_33633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (19))){
var inst_33562 = (state_33581[(2)]);
var state_33581__$1 = state_33581;
var statearr_33604_33634 = state_33581__$1;
(statearr_33604_33634[(2)] = inst_33562);

(statearr_33604_33634[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (11))){
var inst_33533 = (state_33581[(11)]);
var inst_33547 = (state_33581[(7)]);
var inst_33547__$1 = cljs.core.seq.call(null,inst_33533);
var state_33581__$1 = (function (){var statearr_33605 = state_33581;
(statearr_33605[(7)] = inst_33547__$1);

return statearr_33605;
})();
if(inst_33547__$1){
var statearr_33606_33635 = state_33581__$1;
(statearr_33606_33635[(1)] = (14));

} else {
var statearr_33607_33636 = state_33581__$1;
(statearr_33607_33636[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (9))){
var inst_33569 = (state_33581[(2)]);
var inst_33570 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33581__$1 = (function (){var statearr_33608 = state_33581;
(statearr_33608[(15)] = inst_33569);

return statearr_33608;
})();
if(cljs.core.truth_(inst_33570)){
var statearr_33609_33637 = state_33581__$1;
(statearr_33609_33637[(1)] = (21));

} else {
var statearr_33610_33638 = state_33581__$1;
(statearr_33610_33638[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (5))){
var inst_33525 = cljs.core.async.close_BANG_.call(null,out);
var state_33581__$1 = state_33581;
var statearr_33611_33639 = state_33581__$1;
(statearr_33611_33639[(2)] = inst_33525);

(statearr_33611_33639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (14))){
var inst_33547 = (state_33581[(7)]);
var inst_33549 = cljs.core.chunked_seq_QMARK_.call(null,inst_33547);
var state_33581__$1 = state_33581;
if(inst_33549){
var statearr_33612_33640 = state_33581__$1;
(statearr_33612_33640[(1)] = (17));

} else {
var statearr_33613_33641 = state_33581__$1;
(statearr_33613_33641[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (16))){
var inst_33565 = (state_33581[(2)]);
var state_33581__$1 = state_33581;
var statearr_33614_33642 = state_33581__$1;
(statearr_33614_33642[(2)] = inst_33565);

(statearr_33614_33642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (10))){
var inst_33536 = (state_33581[(9)]);
var inst_33534 = (state_33581[(12)]);
var inst_33541 = cljs.core._nth.call(null,inst_33534,inst_33536);
var state_33581__$1 = state_33581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33581__$1,(13),out,inst_33541);
} else {
if((state_val_33582 === (18))){
var inst_33547 = (state_33581[(7)]);
var inst_33556 = cljs.core.first.call(null,inst_33547);
var state_33581__$1 = state_33581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33581__$1,(20),out,inst_33556);
} else {
if((state_val_33582 === (8))){
var inst_33535 = (state_33581[(8)]);
var inst_33536 = (state_33581[(9)]);
var inst_33538 = (inst_33536 < inst_33535);
var inst_33539 = inst_33538;
var state_33581__$1 = state_33581;
if(cljs.core.truth_(inst_33539)){
var statearr_33615_33643 = state_33581__$1;
(statearr_33615_33643[(1)] = (10));

} else {
var statearr_33616_33644 = state_33581__$1;
(statearr_33616_33644[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31978__auto__))
;
return ((function (switch__31890__auto__,c__31978__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31891__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31891__auto____0 = (function (){
var statearr_33617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33617[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31891__auto__);

(statearr_33617[(1)] = (1));

return statearr_33617;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31891__auto____1 = (function (state_33581){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_33581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e33618){if((e33618 instanceof Object)){
var ex__31894__auto__ = e33618;
var statearr_33619_33645 = state_33581;
(statearr_33619_33645[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33646 = state_33581;
state_33581 = G__33646;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31891__auto__ = function(state_33581){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31891__auto____1.call(this,state_33581);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31891__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31891__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto__))
})();
var state__31980__auto__ = (function (){var statearr_33620 = f__31979__auto__.call(null);
(statearr_33620[(6)] = c__31978__auto__);

return statearr_33620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__))
);

return c__31978__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33648 = arguments.length;
switch (G__33648) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33651 = arguments.length;
switch (G__33651) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33654 = arguments.length;
switch (G__33654) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31978__auto___33701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___33701,out){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto___33701,out){
return (function (state_33678){
var state_val_33679 = (state_33678[(1)]);
if((state_val_33679 === (7))){
var inst_33673 = (state_33678[(2)]);
var state_33678__$1 = state_33678;
var statearr_33680_33702 = state_33678__$1;
(statearr_33680_33702[(2)] = inst_33673);

(statearr_33680_33702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (1))){
var inst_33655 = null;
var state_33678__$1 = (function (){var statearr_33681 = state_33678;
(statearr_33681[(7)] = inst_33655);

return statearr_33681;
})();
var statearr_33682_33703 = state_33678__$1;
(statearr_33682_33703[(2)] = null);

(statearr_33682_33703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (4))){
var inst_33658 = (state_33678[(8)]);
var inst_33658__$1 = (state_33678[(2)]);
var inst_33659 = (inst_33658__$1 == null);
var inst_33660 = cljs.core.not.call(null,inst_33659);
var state_33678__$1 = (function (){var statearr_33683 = state_33678;
(statearr_33683[(8)] = inst_33658__$1);

return statearr_33683;
})();
if(inst_33660){
var statearr_33684_33704 = state_33678__$1;
(statearr_33684_33704[(1)] = (5));

} else {
var statearr_33685_33705 = state_33678__$1;
(statearr_33685_33705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (6))){
var state_33678__$1 = state_33678;
var statearr_33686_33706 = state_33678__$1;
(statearr_33686_33706[(2)] = null);

(statearr_33686_33706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (3))){
var inst_33675 = (state_33678[(2)]);
var inst_33676 = cljs.core.async.close_BANG_.call(null,out);
var state_33678__$1 = (function (){var statearr_33687 = state_33678;
(statearr_33687[(9)] = inst_33675);

return statearr_33687;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33678__$1,inst_33676);
} else {
if((state_val_33679 === (2))){
var state_33678__$1 = state_33678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33678__$1,(4),ch);
} else {
if((state_val_33679 === (11))){
var inst_33658 = (state_33678[(8)]);
var inst_33667 = (state_33678[(2)]);
var inst_33655 = inst_33658;
var state_33678__$1 = (function (){var statearr_33688 = state_33678;
(statearr_33688[(7)] = inst_33655);

(statearr_33688[(10)] = inst_33667);

return statearr_33688;
})();
var statearr_33689_33707 = state_33678__$1;
(statearr_33689_33707[(2)] = null);

(statearr_33689_33707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (9))){
var inst_33658 = (state_33678[(8)]);
var state_33678__$1 = state_33678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33678__$1,(11),out,inst_33658);
} else {
if((state_val_33679 === (5))){
var inst_33655 = (state_33678[(7)]);
var inst_33658 = (state_33678[(8)]);
var inst_33662 = cljs.core._EQ_.call(null,inst_33658,inst_33655);
var state_33678__$1 = state_33678;
if(inst_33662){
var statearr_33691_33708 = state_33678__$1;
(statearr_33691_33708[(1)] = (8));

} else {
var statearr_33692_33709 = state_33678__$1;
(statearr_33692_33709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (10))){
var inst_33670 = (state_33678[(2)]);
var state_33678__$1 = state_33678;
var statearr_33693_33710 = state_33678__$1;
(statearr_33693_33710[(2)] = inst_33670);

(statearr_33693_33710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33679 === (8))){
var inst_33655 = (state_33678[(7)]);
var tmp33690 = inst_33655;
var inst_33655__$1 = tmp33690;
var state_33678__$1 = (function (){var statearr_33694 = state_33678;
(statearr_33694[(7)] = inst_33655__$1);

return statearr_33694;
})();
var statearr_33695_33711 = state_33678__$1;
(statearr_33695_33711[(2)] = null);

(statearr_33695_33711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31978__auto___33701,out))
;
return ((function (switch__31890__auto__,c__31978__auto___33701,out){
return (function() {
var cljs$core$async$state_machine__31891__auto__ = null;
var cljs$core$async$state_machine__31891__auto____0 = (function (){
var statearr_33696 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33696[(0)] = cljs$core$async$state_machine__31891__auto__);

(statearr_33696[(1)] = (1));

return statearr_33696;
});
var cljs$core$async$state_machine__31891__auto____1 = (function (state_33678){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_33678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e33697){if((e33697 instanceof Object)){
var ex__31894__auto__ = e33697;
var statearr_33698_33712 = state_33678;
(statearr_33698_33712[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33713 = state_33678;
state_33678 = G__33713;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$state_machine__31891__auto__ = function(state_33678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31891__auto____1.call(this,state_33678);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31891__auto____0;
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31891__auto____1;
return cljs$core$async$state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto___33701,out))
})();
var state__31980__auto__ = (function (){var statearr_33699 = f__31979__auto__.call(null);
(statearr_33699[(6)] = c__31978__auto___33701);

return statearr_33699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___33701,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33715 = arguments.length;
switch (G__33715) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31978__auto___33781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___33781,out){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto___33781,out){
return (function (state_33753){
var state_val_33754 = (state_33753[(1)]);
if((state_val_33754 === (7))){
var inst_33749 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33755_33782 = state_33753__$1;
(statearr_33755_33782[(2)] = inst_33749);

(statearr_33755_33782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (1))){
var inst_33716 = (new Array(n));
var inst_33717 = inst_33716;
var inst_33718 = (0);
var state_33753__$1 = (function (){var statearr_33756 = state_33753;
(statearr_33756[(7)] = inst_33717);

(statearr_33756[(8)] = inst_33718);

return statearr_33756;
})();
var statearr_33757_33783 = state_33753__$1;
(statearr_33757_33783[(2)] = null);

(statearr_33757_33783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (4))){
var inst_33721 = (state_33753[(9)]);
var inst_33721__$1 = (state_33753[(2)]);
var inst_33722 = (inst_33721__$1 == null);
var inst_33723 = cljs.core.not.call(null,inst_33722);
var state_33753__$1 = (function (){var statearr_33758 = state_33753;
(statearr_33758[(9)] = inst_33721__$1);

return statearr_33758;
})();
if(inst_33723){
var statearr_33759_33784 = state_33753__$1;
(statearr_33759_33784[(1)] = (5));

} else {
var statearr_33760_33785 = state_33753__$1;
(statearr_33760_33785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (15))){
var inst_33743 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33761_33786 = state_33753__$1;
(statearr_33761_33786[(2)] = inst_33743);

(statearr_33761_33786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (13))){
var state_33753__$1 = state_33753;
var statearr_33762_33787 = state_33753__$1;
(statearr_33762_33787[(2)] = null);

(statearr_33762_33787[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (6))){
var inst_33718 = (state_33753[(8)]);
var inst_33739 = (inst_33718 > (0));
var state_33753__$1 = state_33753;
if(cljs.core.truth_(inst_33739)){
var statearr_33763_33788 = state_33753__$1;
(statearr_33763_33788[(1)] = (12));

} else {
var statearr_33764_33789 = state_33753__$1;
(statearr_33764_33789[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (3))){
var inst_33751 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33753__$1,inst_33751);
} else {
if((state_val_33754 === (12))){
var inst_33717 = (state_33753[(7)]);
var inst_33741 = cljs.core.vec.call(null,inst_33717);
var state_33753__$1 = state_33753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33753__$1,(15),out,inst_33741);
} else {
if((state_val_33754 === (2))){
var state_33753__$1 = state_33753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33753__$1,(4),ch);
} else {
if((state_val_33754 === (11))){
var inst_33733 = (state_33753[(2)]);
var inst_33734 = (new Array(n));
var inst_33717 = inst_33734;
var inst_33718 = (0);
var state_33753__$1 = (function (){var statearr_33765 = state_33753;
(statearr_33765[(10)] = inst_33733);

(statearr_33765[(7)] = inst_33717);

(statearr_33765[(8)] = inst_33718);

return statearr_33765;
})();
var statearr_33766_33790 = state_33753__$1;
(statearr_33766_33790[(2)] = null);

(statearr_33766_33790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (9))){
var inst_33717 = (state_33753[(7)]);
var inst_33731 = cljs.core.vec.call(null,inst_33717);
var state_33753__$1 = state_33753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33753__$1,(11),out,inst_33731);
} else {
if((state_val_33754 === (5))){
var inst_33721 = (state_33753[(9)]);
var inst_33726 = (state_33753[(11)]);
var inst_33717 = (state_33753[(7)]);
var inst_33718 = (state_33753[(8)]);
var inst_33725 = (inst_33717[inst_33718] = inst_33721);
var inst_33726__$1 = (inst_33718 + (1));
var inst_33727 = (inst_33726__$1 < n);
var state_33753__$1 = (function (){var statearr_33767 = state_33753;
(statearr_33767[(12)] = inst_33725);

(statearr_33767[(11)] = inst_33726__$1);

return statearr_33767;
})();
if(cljs.core.truth_(inst_33727)){
var statearr_33768_33791 = state_33753__$1;
(statearr_33768_33791[(1)] = (8));

} else {
var statearr_33769_33792 = state_33753__$1;
(statearr_33769_33792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (14))){
var inst_33746 = (state_33753[(2)]);
var inst_33747 = cljs.core.async.close_BANG_.call(null,out);
var state_33753__$1 = (function (){var statearr_33771 = state_33753;
(statearr_33771[(13)] = inst_33746);

return statearr_33771;
})();
var statearr_33772_33793 = state_33753__$1;
(statearr_33772_33793[(2)] = inst_33747);

(statearr_33772_33793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (10))){
var inst_33737 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33773_33794 = state_33753__$1;
(statearr_33773_33794[(2)] = inst_33737);

(statearr_33773_33794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (8))){
var inst_33726 = (state_33753[(11)]);
var inst_33717 = (state_33753[(7)]);
var tmp33770 = inst_33717;
var inst_33717__$1 = tmp33770;
var inst_33718 = inst_33726;
var state_33753__$1 = (function (){var statearr_33774 = state_33753;
(statearr_33774[(7)] = inst_33717__$1);

(statearr_33774[(8)] = inst_33718);

return statearr_33774;
})();
var statearr_33775_33795 = state_33753__$1;
(statearr_33775_33795[(2)] = null);

(statearr_33775_33795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31978__auto___33781,out))
;
return ((function (switch__31890__auto__,c__31978__auto___33781,out){
return (function() {
var cljs$core$async$state_machine__31891__auto__ = null;
var cljs$core$async$state_machine__31891__auto____0 = (function (){
var statearr_33776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33776[(0)] = cljs$core$async$state_machine__31891__auto__);

(statearr_33776[(1)] = (1));

return statearr_33776;
});
var cljs$core$async$state_machine__31891__auto____1 = (function (state_33753){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_33753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e33777){if((e33777 instanceof Object)){
var ex__31894__auto__ = e33777;
var statearr_33778_33796 = state_33753;
(statearr_33778_33796[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33797 = state_33753;
state_33753 = G__33797;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$state_machine__31891__auto__ = function(state_33753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31891__auto____1.call(this,state_33753);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31891__auto____0;
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31891__auto____1;
return cljs$core$async$state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto___33781,out))
})();
var state__31980__auto__ = (function (){var statearr_33779 = f__31979__auto__.call(null);
(statearr_33779[(6)] = c__31978__auto___33781);

return statearr_33779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___33781,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33799 = arguments.length;
switch (G__33799) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31978__auto___33869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___33869,out){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto___33869,out){
return (function (state_33841){
var state_val_33842 = (state_33841[(1)]);
if((state_val_33842 === (7))){
var inst_33837 = (state_33841[(2)]);
var state_33841__$1 = state_33841;
var statearr_33843_33870 = state_33841__$1;
(statearr_33843_33870[(2)] = inst_33837);

(statearr_33843_33870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (1))){
var inst_33800 = [];
var inst_33801 = inst_33800;
var inst_33802 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33841__$1 = (function (){var statearr_33844 = state_33841;
(statearr_33844[(7)] = inst_33802);

(statearr_33844[(8)] = inst_33801);

return statearr_33844;
})();
var statearr_33845_33871 = state_33841__$1;
(statearr_33845_33871[(2)] = null);

(statearr_33845_33871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (4))){
var inst_33805 = (state_33841[(9)]);
var inst_33805__$1 = (state_33841[(2)]);
var inst_33806 = (inst_33805__$1 == null);
var inst_33807 = cljs.core.not.call(null,inst_33806);
var state_33841__$1 = (function (){var statearr_33846 = state_33841;
(statearr_33846[(9)] = inst_33805__$1);

return statearr_33846;
})();
if(inst_33807){
var statearr_33847_33872 = state_33841__$1;
(statearr_33847_33872[(1)] = (5));

} else {
var statearr_33848_33873 = state_33841__$1;
(statearr_33848_33873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (15))){
var inst_33831 = (state_33841[(2)]);
var state_33841__$1 = state_33841;
var statearr_33849_33874 = state_33841__$1;
(statearr_33849_33874[(2)] = inst_33831);

(statearr_33849_33874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (13))){
var state_33841__$1 = state_33841;
var statearr_33850_33875 = state_33841__$1;
(statearr_33850_33875[(2)] = null);

(statearr_33850_33875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (6))){
var inst_33801 = (state_33841[(8)]);
var inst_33826 = inst_33801.length;
var inst_33827 = (inst_33826 > (0));
var state_33841__$1 = state_33841;
if(cljs.core.truth_(inst_33827)){
var statearr_33851_33876 = state_33841__$1;
(statearr_33851_33876[(1)] = (12));

} else {
var statearr_33852_33877 = state_33841__$1;
(statearr_33852_33877[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (3))){
var inst_33839 = (state_33841[(2)]);
var state_33841__$1 = state_33841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33841__$1,inst_33839);
} else {
if((state_val_33842 === (12))){
var inst_33801 = (state_33841[(8)]);
var inst_33829 = cljs.core.vec.call(null,inst_33801);
var state_33841__$1 = state_33841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33841__$1,(15),out,inst_33829);
} else {
if((state_val_33842 === (2))){
var state_33841__$1 = state_33841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33841__$1,(4),ch);
} else {
if((state_val_33842 === (11))){
var inst_33805 = (state_33841[(9)]);
var inst_33809 = (state_33841[(10)]);
var inst_33819 = (state_33841[(2)]);
var inst_33820 = [];
var inst_33821 = inst_33820.push(inst_33805);
var inst_33801 = inst_33820;
var inst_33802 = inst_33809;
var state_33841__$1 = (function (){var statearr_33853 = state_33841;
(statearr_33853[(11)] = inst_33821);

(statearr_33853[(7)] = inst_33802);

(statearr_33853[(12)] = inst_33819);

(statearr_33853[(8)] = inst_33801);

return statearr_33853;
})();
var statearr_33854_33878 = state_33841__$1;
(statearr_33854_33878[(2)] = null);

(statearr_33854_33878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (9))){
var inst_33801 = (state_33841[(8)]);
var inst_33817 = cljs.core.vec.call(null,inst_33801);
var state_33841__$1 = state_33841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33841__$1,(11),out,inst_33817);
} else {
if((state_val_33842 === (5))){
var inst_33805 = (state_33841[(9)]);
var inst_33802 = (state_33841[(7)]);
var inst_33809 = (state_33841[(10)]);
var inst_33809__$1 = f.call(null,inst_33805);
var inst_33810 = cljs.core._EQ_.call(null,inst_33809__$1,inst_33802);
var inst_33811 = cljs.core.keyword_identical_QMARK_.call(null,inst_33802,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33812 = (inst_33810) || (inst_33811);
var state_33841__$1 = (function (){var statearr_33855 = state_33841;
(statearr_33855[(10)] = inst_33809__$1);

return statearr_33855;
})();
if(cljs.core.truth_(inst_33812)){
var statearr_33856_33879 = state_33841__$1;
(statearr_33856_33879[(1)] = (8));

} else {
var statearr_33857_33880 = state_33841__$1;
(statearr_33857_33880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (14))){
var inst_33834 = (state_33841[(2)]);
var inst_33835 = cljs.core.async.close_BANG_.call(null,out);
var state_33841__$1 = (function (){var statearr_33859 = state_33841;
(statearr_33859[(13)] = inst_33834);

return statearr_33859;
})();
var statearr_33860_33881 = state_33841__$1;
(statearr_33860_33881[(2)] = inst_33835);

(statearr_33860_33881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (10))){
var inst_33824 = (state_33841[(2)]);
var state_33841__$1 = state_33841;
var statearr_33861_33882 = state_33841__$1;
(statearr_33861_33882[(2)] = inst_33824);

(statearr_33861_33882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33842 === (8))){
var inst_33805 = (state_33841[(9)]);
var inst_33809 = (state_33841[(10)]);
var inst_33801 = (state_33841[(8)]);
var inst_33814 = inst_33801.push(inst_33805);
var tmp33858 = inst_33801;
var inst_33801__$1 = tmp33858;
var inst_33802 = inst_33809;
var state_33841__$1 = (function (){var statearr_33862 = state_33841;
(statearr_33862[(7)] = inst_33802);

(statearr_33862[(8)] = inst_33801__$1);

(statearr_33862[(14)] = inst_33814);

return statearr_33862;
})();
var statearr_33863_33883 = state_33841__$1;
(statearr_33863_33883[(2)] = null);

(statearr_33863_33883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31978__auto___33869,out))
;
return ((function (switch__31890__auto__,c__31978__auto___33869,out){
return (function() {
var cljs$core$async$state_machine__31891__auto__ = null;
var cljs$core$async$state_machine__31891__auto____0 = (function (){
var statearr_33864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33864[(0)] = cljs$core$async$state_machine__31891__auto__);

(statearr_33864[(1)] = (1));

return statearr_33864;
});
var cljs$core$async$state_machine__31891__auto____1 = (function (state_33841){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_33841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e33865){if((e33865 instanceof Object)){
var ex__31894__auto__ = e33865;
var statearr_33866_33884 = state_33841;
(statearr_33866_33884[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33885 = state_33841;
state_33841 = G__33885;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
cljs$core$async$state_machine__31891__auto__ = function(state_33841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31891__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31891__auto____1.call(this,state_33841);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31891__auto____0;
cljs$core$async$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31891__auto____1;
return cljs$core$async$state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto___33869,out))
})();
var state__31980__auto__ = (function (){var statearr_33867 = f__31979__auto__.call(null);
(statearr_33867[(6)] = c__31978__auto___33869);

return statearr_33867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___33869,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1512749440826
