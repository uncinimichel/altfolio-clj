// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e36860){if((e36860 instanceof Error)){
var e = e36860;
return "Error: Unable to stringify";
} else {
throw e36860;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__36863 = arguments.length;
switch (G__36863) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__36861_SHARP_){
if(typeof p1__36861_SHARP_ === 'string'){
return p1__36861_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__36861_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29466__auto__ = [];
var len__29459__auto___36866 = arguments.length;
var i__29460__auto___36867 = (0);
while(true){
if((i__29460__auto___36867 < len__29459__auto___36866)){
args__29466__auto__.push((arguments[i__29460__auto___36867]));

var G__36868 = (i__29460__auto___36867 + (1));
i__29460__auto___36867 = G__36868;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36865){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36865));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29466__auto__ = [];
var len__29459__auto___36870 = arguments.length;
var i__29460__auto___36871 = (0);
while(true){
if((i__29460__auto___36871 < len__29459__auto___36870)){
args__29466__auto__.push((arguments[i__29460__auto___36871]));

var G__36872 = (i__29460__auto___36871 + (1));
i__29460__auto___36871 = G__36872;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36869){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36869));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36873){
var map__36874 = p__36873;
var map__36874__$1 = ((((!((map__36874 == null)))?((((map__36874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36874):map__36874);
var message = cljs.core.get.call(null,map__36874__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36874__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28289__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28289__auto__)){
return or__28289__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28277__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28277__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28277__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31978__auto___36953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___36953,ch){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto___36953,ch){
return (function (state_36925){
var state_val_36926 = (state_36925[(1)]);
if((state_val_36926 === (7))){
var inst_36921 = (state_36925[(2)]);
var state_36925__$1 = state_36925;
var statearr_36927_36954 = state_36925__$1;
(statearr_36927_36954[(2)] = inst_36921);

(statearr_36927_36954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (1))){
var state_36925__$1 = state_36925;
var statearr_36928_36955 = state_36925__$1;
(statearr_36928_36955[(2)] = null);

(statearr_36928_36955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (4))){
var inst_36878 = (state_36925[(7)]);
var inst_36878__$1 = (state_36925[(2)]);
var state_36925__$1 = (function (){var statearr_36929 = state_36925;
(statearr_36929[(7)] = inst_36878__$1);

return statearr_36929;
})();
if(cljs.core.truth_(inst_36878__$1)){
var statearr_36930_36956 = state_36925__$1;
(statearr_36930_36956[(1)] = (5));

} else {
var statearr_36931_36957 = state_36925__$1;
(statearr_36931_36957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (15))){
var inst_36885 = (state_36925[(8)]);
var inst_36900 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36885);
var inst_36901 = cljs.core.first.call(null,inst_36900);
var inst_36902 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36901);
var inst_36903 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36902)].join('');
var inst_36904 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36903);
var state_36925__$1 = state_36925;
var statearr_36932_36958 = state_36925__$1;
(statearr_36932_36958[(2)] = inst_36904);

(statearr_36932_36958[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (13))){
var inst_36909 = (state_36925[(2)]);
var state_36925__$1 = state_36925;
var statearr_36933_36959 = state_36925__$1;
(statearr_36933_36959[(2)] = inst_36909);

(statearr_36933_36959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (6))){
var state_36925__$1 = state_36925;
var statearr_36934_36960 = state_36925__$1;
(statearr_36934_36960[(2)] = null);

(statearr_36934_36960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (17))){
var inst_36907 = (state_36925[(2)]);
var state_36925__$1 = state_36925;
var statearr_36935_36961 = state_36925__$1;
(statearr_36935_36961[(2)] = inst_36907);

(statearr_36935_36961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (3))){
var inst_36923 = (state_36925[(2)]);
var state_36925__$1 = state_36925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36925__$1,inst_36923);
} else {
if((state_val_36926 === (12))){
var inst_36884 = (state_36925[(9)]);
var inst_36898 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36884,opts);
var state_36925__$1 = state_36925;
if(cljs.core.truth_(inst_36898)){
var statearr_36936_36962 = state_36925__$1;
(statearr_36936_36962[(1)] = (15));

} else {
var statearr_36937_36963 = state_36925__$1;
(statearr_36937_36963[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (2))){
var state_36925__$1 = state_36925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36925__$1,(4),ch);
} else {
if((state_val_36926 === (11))){
var inst_36885 = (state_36925[(8)]);
var inst_36890 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36891 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36885);
var inst_36892 = cljs.core.async.timeout.call(null,(1000));
var inst_36893 = [inst_36891,inst_36892];
var inst_36894 = (new cljs.core.PersistentVector(null,2,(5),inst_36890,inst_36893,null));
var state_36925__$1 = state_36925;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36925__$1,(14),inst_36894);
} else {
if((state_val_36926 === (9))){
var inst_36885 = (state_36925[(8)]);
var inst_36911 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36912 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36885);
var inst_36913 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36912);
var inst_36914 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36913)].join('');
var inst_36915 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36914);
var state_36925__$1 = (function (){var statearr_36938 = state_36925;
(statearr_36938[(10)] = inst_36911);

return statearr_36938;
})();
var statearr_36939_36964 = state_36925__$1;
(statearr_36939_36964[(2)] = inst_36915);

(statearr_36939_36964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (5))){
var inst_36878 = (state_36925[(7)]);
var inst_36880 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36881 = (new cljs.core.PersistentArrayMap(null,2,inst_36880,null));
var inst_36882 = (new cljs.core.PersistentHashSet(null,inst_36881,null));
var inst_36883 = figwheel.client.focus_msgs.call(null,inst_36882,inst_36878);
var inst_36884 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36883);
var inst_36885 = cljs.core.first.call(null,inst_36883);
var inst_36886 = figwheel.client.autoload_QMARK_.call(null);
var state_36925__$1 = (function (){var statearr_36940 = state_36925;
(statearr_36940[(9)] = inst_36884);

(statearr_36940[(8)] = inst_36885);

return statearr_36940;
})();
if(cljs.core.truth_(inst_36886)){
var statearr_36941_36965 = state_36925__$1;
(statearr_36941_36965[(1)] = (8));

} else {
var statearr_36942_36966 = state_36925__$1;
(statearr_36942_36966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (14))){
var inst_36896 = (state_36925[(2)]);
var state_36925__$1 = state_36925;
var statearr_36943_36967 = state_36925__$1;
(statearr_36943_36967[(2)] = inst_36896);

(statearr_36943_36967[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (16))){
var state_36925__$1 = state_36925;
var statearr_36944_36968 = state_36925__$1;
(statearr_36944_36968[(2)] = null);

(statearr_36944_36968[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (10))){
var inst_36917 = (state_36925[(2)]);
var state_36925__$1 = (function (){var statearr_36945 = state_36925;
(statearr_36945[(11)] = inst_36917);

return statearr_36945;
})();
var statearr_36946_36969 = state_36925__$1;
(statearr_36946_36969[(2)] = null);

(statearr_36946_36969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36926 === (8))){
var inst_36884 = (state_36925[(9)]);
var inst_36888 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36884,opts);
var state_36925__$1 = state_36925;
if(cljs.core.truth_(inst_36888)){
var statearr_36947_36970 = state_36925__$1;
(statearr_36947_36970[(1)] = (11));

} else {
var statearr_36948_36971 = state_36925__$1;
(statearr_36948_36971[(1)] = (12));

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
});})(c__31978__auto___36953,ch))
;
return ((function (switch__31890__auto__,c__31978__auto___36953,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31891__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31891__auto____0 = (function (){
var statearr_36949 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36949[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31891__auto__);

(statearr_36949[(1)] = (1));

return statearr_36949;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31891__auto____1 = (function (state_36925){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_36925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e36950){if((e36950 instanceof Object)){
var ex__31894__auto__ = e36950;
var statearr_36951_36972 = state_36925;
(statearr_36951_36972[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36973 = state_36925;
state_36925 = G__36973;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31891__auto__ = function(state_36925){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31891__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31891__auto____1.call(this,state_36925);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31891__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31891__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto___36953,ch))
})();
var state__31980__auto__ = (function (){var statearr_36952 = f__31979__auto__.call(null);
(statearr_36952[(6)] = c__31978__auto___36953);

return statearr_36952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___36953,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36974_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36974_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36976 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36976){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36975){if((e36975 instanceof Error)){
var e = e36975;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36976], null));
} else {
var e = e36975;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36976))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36977){
var map__36978 = p__36977;
var map__36978__$1 = ((((!((map__36978 == null)))?((((map__36978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36978):map__36978);
var opts = map__36978__$1;
var build_id = cljs.core.get.call(null,map__36978__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36978,map__36978__$1,opts,build_id){
return (function (p__36980){
var vec__36981 = p__36980;
var seq__36982 = cljs.core.seq.call(null,vec__36981);
var first__36983 = cljs.core.first.call(null,seq__36982);
var seq__36982__$1 = cljs.core.next.call(null,seq__36982);
var map__36984 = first__36983;
var map__36984__$1 = ((((!((map__36984 == null)))?((((map__36984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36984):map__36984);
var msg = map__36984__$1;
var msg_name = cljs.core.get.call(null,map__36984__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36982__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36981,seq__36982,first__36983,seq__36982__$1,map__36984,map__36984__$1,msg,msg_name,_,map__36978,map__36978__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36981,seq__36982,first__36983,seq__36982__$1,map__36984,map__36984__$1,msg,msg_name,_,map__36978,map__36978__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36978,map__36978__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36986){
var vec__36987 = p__36986;
var seq__36988 = cljs.core.seq.call(null,vec__36987);
var first__36989 = cljs.core.first.call(null,seq__36988);
var seq__36988__$1 = cljs.core.next.call(null,seq__36988);
var map__36990 = first__36989;
var map__36990__$1 = ((((!((map__36990 == null)))?((((map__36990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36990):map__36990);
var msg = map__36990__$1;
var msg_name = cljs.core.get.call(null,map__36990__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36988__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36992){
var map__36993 = p__36992;
var map__36993__$1 = ((((!((map__36993 == null)))?((((map__36993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36993):map__36993);
var on_compile_warning = cljs.core.get.call(null,map__36993__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36993__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36993,map__36993__$1,on_compile_warning,on_compile_fail){
return (function (p__36995){
var vec__36996 = p__36995;
var seq__36997 = cljs.core.seq.call(null,vec__36996);
var first__36998 = cljs.core.first.call(null,seq__36997);
var seq__36997__$1 = cljs.core.next.call(null,seq__36997);
var map__36999 = first__36998;
var map__36999__$1 = ((((!((map__36999 == null)))?((((map__36999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36999):map__36999);
var msg = map__36999__$1;
var msg_name = cljs.core.get.call(null,map__36999__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36997__$1;
var pred__37001 = cljs.core._EQ_;
var expr__37002 = msg_name;
if(cljs.core.truth_(pred__37001.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37002))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37001.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37002))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36993,map__36993__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto__,msg_hist,msg_names,msg){
return (function (state_37091){
var state_val_37092 = (state_37091[(1)]);
if((state_val_37092 === (7))){
var inst_37011 = (state_37091[(2)]);
var state_37091__$1 = state_37091;
if(cljs.core.truth_(inst_37011)){
var statearr_37093_37140 = state_37091__$1;
(statearr_37093_37140[(1)] = (8));

} else {
var statearr_37094_37141 = state_37091__$1;
(statearr_37094_37141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (20))){
var inst_37085 = (state_37091[(2)]);
var state_37091__$1 = state_37091;
var statearr_37095_37142 = state_37091__$1;
(statearr_37095_37142[(2)] = inst_37085);

(statearr_37095_37142[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (27))){
var inst_37081 = (state_37091[(2)]);
var state_37091__$1 = state_37091;
var statearr_37096_37143 = state_37091__$1;
(statearr_37096_37143[(2)] = inst_37081);

(statearr_37096_37143[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (1))){
var inst_37004 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37091__$1 = state_37091;
if(cljs.core.truth_(inst_37004)){
var statearr_37097_37144 = state_37091__$1;
(statearr_37097_37144[(1)] = (2));

} else {
var statearr_37098_37145 = state_37091__$1;
(statearr_37098_37145[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (24))){
var inst_37083 = (state_37091[(2)]);
var state_37091__$1 = state_37091;
var statearr_37099_37146 = state_37091__$1;
(statearr_37099_37146[(2)] = inst_37083);

(statearr_37099_37146[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (4))){
var inst_37089 = (state_37091[(2)]);
var state_37091__$1 = state_37091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37091__$1,inst_37089);
} else {
if((state_val_37092 === (15))){
var inst_37087 = (state_37091[(2)]);
var state_37091__$1 = state_37091;
var statearr_37100_37147 = state_37091__$1;
(statearr_37100_37147[(2)] = inst_37087);

(statearr_37100_37147[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (21))){
var inst_37040 = (state_37091[(2)]);
var inst_37041 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37042 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37041);
var state_37091__$1 = (function (){var statearr_37101 = state_37091;
(statearr_37101[(7)] = inst_37040);

return statearr_37101;
})();
var statearr_37102_37148 = state_37091__$1;
(statearr_37102_37148[(2)] = inst_37042);

(statearr_37102_37148[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (31))){
var inst_37070 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37091__$1 = state_37091;
if(cljs.core.truth_(inst_37070)){
var statearr_37103_37149 = state_37091__$1;
(statearr_37103_37149[(1)] = (34));

} else {
var statearr_37104_37150 = state_37091__$1;
(statearr_37104_37150[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (32))){
var inst_37079 = (state_37091[(2)]);
var state_37091__$1 = state_37091;
var statearr_37105_37151 = state_37091__$1;
(statearr_37105_37151[(2)] = inst_37079);

(statearr_37105_37151[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (33))){
var inst_37066 = (state_37091[(2)]);
var inst_37067 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37068 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37067);
var state_37091__$1 = (function (){var statearr_37106 = state_37091;
(statearr_37106[(8)] = inst_37066);

return statearr_37106;
})();
var statearr_37107_37152 = state_37091__$1;
(statearr_37107_37152[(2)] = inst_37068);

(statearr_37107_37152[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (13))){
var inst_37025 = figwheel.client.heads_up.clear.call(null);
var state_37091__$1 = state_37091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37091__$1,(16),inst_37025);
} else {
if((state_val_37092 === (22))){
var inst_37046 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37047 = figwheel.client.heads_up.append_warning_message.call(null,inst_37046);
var state_37091__$1 = state_37091;
var statearr_37108_37153 = state_37091__$1;
(statearr_37108_37153[(2)] = inst_37047);

(statearr_37108_37153[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (36))){
var inst_37077 = (state_37091[(2)]);
var state_37091__$1 = state_37091;
var statearr_37109_37154 = state_37091__$1;
(statearr_37109_37154[(2)] = inst_37077);

(statearr_37109_37154[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (29))){
var inst_37057 = (state_37091[(2)]);
var inst_37058 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37059 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37058);
var state_37091__$1 = (function (){var statearr_37110 = state_37091;
(statearr_37110[(9)] = inst_37057);

return statearr_37110;
})();
var statearr_37111_37155 = state_37091__$1;
(statearr_37111_37155[(2)] = inst_37059);

(statearr_37111_37155[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (6))){
var inst_37006 = (state_37091[(10)]);
var state_37091__$1 = state_37091;
var statearr_37112_37156 = state_37091__$1;
(statearr_37112_37156[(2)] = inst_37006);

(statearr_37112_37156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (28))){
var inst_37053 = (state_37091[(2)]);
var inst_37054 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37055 = figwheel.client.heads_up.display_warning.call(null,inst_37054);
var state_37091__$1 = (function (){var statearr_37113 = state_37091;
(statearr_37113[(11)] = inst_37053);

return statearr_37113;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37091__$1,(29),inst_37055);
} else {
if((state_val_37092 === (25))){
var inst_37051 = figwheel.client.heads_up.clear.call(null);
var state_37091__$1 = state_37091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37091__$1,(28),inst_37051);
} else {
if((state_val_37092 === (34))){
var inst_37072 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37091__$1 = state_37091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37091__$1,(37),inst_37072);
} else {
if((state_val_37092 === (17))){
var inst_37031 = (state_37091[(2)]);
var inst_37032 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37033 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37032);
var state_37091__$1 = (function (){var statearr_37114 = state_37091;
(statearr_37114[(12)] = inst_37031);

return statearr_37114;
})();
var statearr_37115_37157 = state_37091__$1;
(statearr_37115_37157[(2)] = inst_37033);

(statearr_37115_37157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (3))){
var inst_37023 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37091__$1 = state_37091;
if(cljs.core.truth_(inst_37023)){
var statearr_37116_37158 = state_37091__$1;
(statearr_37116_37158[(1)] = (13));

} else {
var statearr_37117_37159 = state_37091__$1;
(statearr_37117_37159[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (12))){
var inst_37019 = (state_37091[(2)]);
var state_37091__$1 = state_37091;
var statearr_37118_37160 = state_37091__$1;
(statearr_37118_37160[(2)] = inst_37019);

(statearr_37118_37160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (2))){
var inst_37006 = (state_37091[(10)]);
var inst_37006__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37091__$1 = (function (){var statearr_37119 = state_37091;
(statearr_37119[(10)] = inst_37006__$1);

return statearr_37119;
})();
if(cljs.core.truth_(inst_37006__$1)){
var statearr_37120_37161 = state_37091__$1;
(statearr_37120_37161[(1)] = (5));

} else {
var statearr_37121_37162 = state_37091__$1;
(statearr_37121_37162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (23))){
var inst_37049 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37091__$1 = state_37091;
if(cljs.core.truth_(inst_37049)){
var statearr_37122_37163 = state_37091__$1;
(statearr_37122_37163[(1)] = (25));

} else {
var statearr_37123_37164 = state_37091__$1;
(statearr_37123_37164[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (35))){
var state_37091__$1 = state_37091;
var statearr_37124_37165 = state_37091__$1;
(statearr_37124_37165[(2)] = null);

(statearr_37124_37165[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (19))){
var inst_37044 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37091__$1 = state_37091;
if(cljs.core.truth_(inst_37044)){
var statearr_37125_37166 = state_37091__$1;
(statearr_37125_37166[(1)] = (22));

} else {
var statearr_37126_37167 = state_37091__$1;
(statearr_37126_37167[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (11))){
var inst_37015 = (state_37091[(2)]);
var state_37091__$1 = state_37091;
var statearr_37127_37168 = state_37091__$1;
(statearr_37127_37168[(2)] = inst_37015);

(statearr_37127_37168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (9))){
var inst_37017 = figwheel.client.heads_up.clear.call(null);
var state_37091__$1 = state_37091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37091__$1,(12),inst_37017);
} else {
if((state_val_37092 === (5))){
var inst_37008 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37091__$1 = state_37091;
var statearr_37128_37169 = state_37091__$1;
(statearr_37128_37169[(2)] = inst_37008);

(statearr_37128_37169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (14))){
var inst_37035 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37091__$1 = state_37091;
if(cljs.core.truth_(inst_37035)){
var statearr_37129_37170 = state_37091__$1;
(statearr_37129_37170[(1)] = (18));

} else {
var statearr_37130_37171 = state_37091__$1;
(statearr_37130_37171[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (26))){
var inst_37061 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37091__$1 = state_37091;
if(cljs.core.truth_(inst_37061)){
var statearr_37131_37172 = state_37091__$1;
(statearr_37131_37172[(1)] = (30));

} else {
var statearr_37132_37173 = state_37091__$1;
(statearr_37132_37173[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (16))){
var inst_37027 = (state_37091[(2)]);
var inst_37028 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37029 = figwheel.client.heads_up.display_exception.call(null,inst_37028);
var state_37091__$1 = (function (){var statearr_37133 = state_37091;
(statearr_37133[(13)] = inst_37027);

return statearr_37133;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37091__$1,(17),inst_37029);
} else {
if((state_val_37092 === (30))){
var inst_37063 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37064 = figwheel.client.heads_up.display_warning.call(null,inst_37063);
var state_37091__$1 = state_37091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37091__$1,(33),inst_37064);
} else {
if((state_val_37092 === (10))){
var inst_37021 = (state_37091[(2)]);
var state_37091__$1 = state_37091;
var statearr_37134_37174 = state_37091__$1;
(statearr_37134_37174[(2)] = inst_37021);

(statearr_37134_37174[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (18))){
var inst_37037 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37038 = figwheel.client.heads_up.display_exception.call(null,inst_37037);
var state_37091__$1 = state_37091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37091__$1,(21),inst_37038);
} else {
if((state_val_37092 === (37))){
var inst_37074 = (state_37091[(2)]);
var state_37091__$1 = state_37091;
var statearr_37135_37175 = state_37091__$1;
(statearr_37135_37175[(2)] = inst_37074);

(statearr_37135_37175[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37092 === (8))){
var inst_37013 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37091__$1 = state_37091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37091__$1,(11),inst_37013);
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
});})(c__31978__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31890__auto__,c__31978__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31891__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31891__auto____0 = (function (){
var statearr_37136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37136[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31891__auto__);

(statearr_37136[(1)] = (1));

return statearr_37136;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31891__auto____1 = (function (state_37091){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_37091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e37137){if((e37137 instanceof Object)){
var ex__31894__auto__ = e37137;
var statearr_37138_37176 = state_37091;
(statearr_37138_37176[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37177 = state_37091;
state_37091 = G__37177;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31891__auto__ = function(state_37091){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31891__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31891__auto____1.call(this,state_37091);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31891__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31891__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto__,msg_hist,msg_names,msg))
})();
var state__31980__auto__ = (function (){var statearr_37139 = f__31979__auto__.call(null);
(statearr_37139[(6)] = c__31978__auto__);

return statearr_37139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__,msg_hist,msg_names,msg))
);

return c__31978__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31978__auto___37206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___37206,ch){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto___37206,ch){
return (function (state_37192){
var state_val_37193 = (state_37192[(1)]);
if((state_val_37193 === (1))){
var state_37192__$1 = state_37192;
var statearr_37194_37207 = state_37192__$1;
(statearr_37194_37207[(2)] = null);

(statearr_37194_37207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37193 === (2))){
var state_37192__$1 = state_37192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37192__$1,(4),ch);
} else {
if((state_val_37193 === (3))){
var inst_37190 = (state_37192[(2)]);
var state_37192__$1 = state_37192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37192__$1,inst_37190);
} else {
if((state_val_37193 === (4))){
var inst_37180 = (state_37192[(7)]);
var inst_37180__$1 = (state_37192[(2)]);
var state_37192__$1 = (function (){var statearr_37195 = state_37192;
(statearr_37195[(7)] = inst_37180__$1);

return statearr_37195;
})();
if(cljs.core.truth_(inst_37180__$1)){
var statearr_37196_37208 = state_37192__$1;
(statearr_37196_37208[(1)] = (5));

} else {
var statearr_37197_37209 = state_37192__$1;
(statearr_37197_37209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37193 === (5))){
var inst_37180 = (state_37192[(7)]);
var inst_37182 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37180);
var state_37192__$1 = state_37192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37192__$1,(8),inst_37182);
} else {
if((state_val_37193 === (6))){
var state_37192__$1 = state_37192;
var statearr_37198_37210 = state_37192__$1;
(statearr_37198_37210[(2)] = null);

(statearr_37198_37210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37193 === (7))){
var inst_37188 = (state_37192[(2)]);
var state_37192__$1 = state_37192;
var statearr_37199_37211 = state_37192__$1;
(statearr_37199_37211[(2)] = inst_37188);

(statearr_37199_37211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37193 === (8))){
var inst_37184 = (state_37192[(2)]);
var state_37192__$1 = (function (){var statearr_37200 = state_37192;
(statearr_37200[(8)] = inst_37184);

return statearr_37200;
})();
var statearr_37201_37212 = state_37192__$1;
(statearr_37201_37212[(2)] = null);

(statearr_37201_37212[(1)] = (2));


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
});})(c__31978__auto___37206,ch))
;
return ((function (switch__31890__auto__,c__31978__auto___37206,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31891__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31891__auto____0 = (function (){
var statearr_37202 = [null,null,null,null,null,null,null,null,null];
(statearr_37202[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31891__auto__);

(statearr_37202[(1)] = (1));

return statearr_37202;
});
var figwheel$client$heads_up_plugin_$_state_machine__31891__auto____1 = (function (state_37192){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_37192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e37203){if((e37203 instanceof Object)){
var ex__31894__auto__ = e37203;
var statearr_37204_37213 = state_37192;
(statearr_37204_37213[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37214 = state_37192;
state_37192 = G__37214;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31891__auto__ = function(state_37192){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31891__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31891__auto____1.call(this,state_37192);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31891__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31891__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto___37206,ch))
})();
var state__31980__auto__ = (function (){var statearr_37205 = f__31979__auto__.call(null);
(statearr_37205[(6)] = c__31978__auto___37206);

return statearr_37205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___37206,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto__){
return (function (state_37220){
var state_val_37221 = (state_37220[(1)]);
if((state_val_37221 === (1))){
var inst_37215 = cljs.core.async.timeout.call(null,(3000));
var state_37220__$1 = state_37220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37220__$1,(2),inst_37215);
} else {
if((state_val_37221 === (2))){
var inst_37217 = (state_37220[(2)]);
var inst_37218 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37220__$1 = (function (){var statearr_37222 = state_37220;
(statearr_37222[(7)] = inst_37217);

return statearr_37222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37220__$1,inst_37218);
} else {
return null;
}
}
});})(c__31978__auto__))
;
return ((function (switch__31890__auto__,c__31978__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31891__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31891__auto____0 = (function (){
var statearr_37223 = [null,null,null,null,null,null,null,null];
(statearr_37223[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31891__auto__);

(statearr_37223[(1)] = (1));

return statearr_37223;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31891__auto____1 = (function (state_37220){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_37220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e37224){if((e37224 instanceof Object)){
var ex__31894__auto__ = e37224;
var statearr_37225_37227 = state_37220;
(statearr_37225_37227[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37228 = state_37220;
state_37220 = G__37228;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31891__auto__ = function(state_37220){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31891__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31891__auto____1.call(this,state_37220);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31891__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31891__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto__))
})();
var state__31980__auto__ = (function (){var statearr_37226 = f__31979__auto__.call(null);
(statearr_37226[(6)] = c__31978__auto__);

return statearr_37226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__))
);

return c__31978__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37235){
var state_val_37236 = (state_37235[(1)]);
if((state_val_37236 === (1))){
var inst_37229 = cljs.core.async.timeout.call(null,(2000));
var state_37235__$1 = state_37235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37235__$1,(2),inst_37229);
} else {
if((state_val_37236 === (2))){
var inst_37231 = (state_37235[(2)]);
var inst_37232 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37233 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37232);
var state_37235__$1 = (function (){var statearr_37237 = state_37235;
(statearr_37237[(7)] = inst_37231);

return statearr_37237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37235__$1,inst_37233);
} else {
return null;
}
}
});})(c__31978__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31890__auto__,c__31978__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31891__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31891__auto____0 = (function (){
var statearr_37238 = [null,null,null,null,null,null,null,null];
(statearr_37238[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31891__auto__);

(statearr_37238[(1)] = (1));

return statearr_37238;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31891__auto____1 = (function (state_37235){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_37235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e37239){if((e37239 instanceof Object)){
var ex__31894__auto__ = e37239;
var statearr_37240_37242 = state_37235;
(statearr_37240_37242[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37243 = state_37235;
state_37235 = G__37243;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31891__auto__ = function(state_37235){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31891__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31891__auto____1.call(this,state_37235);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31891__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31891__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31980__auto__ = (function (){var statearr_37241 = f__31979__auto__.call(null);
(statearr_37241[(6)] = c__31978__auto__);

return statearr_37241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__,figwheel_version,temp__4657__auto__))
);

return c__31978__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37244){
var map__37245 = p__37244;
var map__37245__$1 = ((((!((map__37245 == null)))?((((map__37245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37245):map__37245);
var file = cljs.core.get.call(null,map__37245__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37245__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37245__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37247 = "";
var G__37247__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37247),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37247);
var G__37247__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37247__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37247__$1);
if(cljs.core.truth_((function (){var and__28277__auto__ = line;
if(cljs.core.truth_(and__28277__auto__)){
return column;
} else {
return and__28277__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37247__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37247__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37248){
var map__37249 = p__37248;
var map__37249__$1 = ((((!((map__37249 == null)))?((((map__37249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37249.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37249):map__37249);
var ed = map__37249__$1;
var formatted_exception = cljs.core.get.call(null,map__37249__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37249__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37249__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37251_37255 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37252_37256 = null;
var count__37253_37257 = (0);
var i__37254_37258 = (0);
while(true){
if((i__37254_37258 < count__37253_37257)){
var msg_37259 = cljs.core._nth.call(null,chunk__37252_37256,i__37254_37258);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37259);

var G__37260 = seq__37251_37255;
var G__37261 = chunk__37252_37256;
var G__37262 = count__37253_37257;
var G__37263 = (i__37254_37258 + (1));
seq__37251_37255 = G__37260;
chunk__37252_37256 = G__37261;
count__37253_37257 = G__37262;
i__37254_37258 = G__37263;
continue;
} else {
var temp__4657__auto___37264 = cljs.core.seq.call(null,seq__37251_37255);
if(temp__4657__auto___37264){
var seq__37251_37265__$1 = temp__4657__auto___37264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37251_37265__$1)){
var c__29129__auto___37266 = cljs.core.chunk_first.call(null,seq__37251_37265__$1);
var G__37267 = cljs.core.chunk_rest.call(null,seq__37251_37265__$1);
var G__37268 = c__29129__auto___37266;
var G__37269 = cljs.core.count.call(null,c__29129__auto___37266);
var G__37270 = (0);
seq__37251_37255 = G__37267;
chunk__37252_37256 = G__37268;
count__37253_37257 = G__37269;
i__37254_37258 = G__37270;
continue;
} else {
var msg_37271 = cljs.core.first.call(null,seq__37251_37265__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37271);

var G__37272 = cljs.core.next.call(null,seq__37251_37265__$1);
var G__37273 = null;
var G__37274 = (0);
var G__37275 = (0);
seq__37251_37255 = G__37272;
chunk__37252_37256 = G__37273;
count__37253_37257 = G__37274;
i__37254_37258 = G__37275;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37276){
var map__37277 = p__37276;
var map__37277__$1 = ((((!((map__37277 == null)))?((((map__37277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37277):map__37277);
var w = map__37277__$1;
var message = cljs.core.get.call(null,map__37277__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28277__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28277__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28277__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37279 = cljs.core.seq.call(null,plugins);
var chunk__37280 = null;
var count__37281 = (0);
var i__37282 = (0);
while(true){
if((i__37282 < count__37281)){
var vec__37283 = cljs.core._nth.call(null,chunk__37280,i__37282);
var k = cljs.core.nth.call(null,vec__37283,(0),null);
var plugin = cljs.core.nth.call(null,vec__37283,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37289 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37279,chunk__37280,count__37281,i__37282,pl_37289,vec__37283,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37289.call(null,msg_hist);
});})(seq__37279,chunk__37280,count__37281,i__37282,pl_37289,vec__37283,k,plugin))
);
} else {
}

var G__37290 = seq__37279;
var G__37291 = chunk__37280;
var G__37292 = count__37281;
var G__37293 = (i__37282 + (1));
seq__37279 = G__37290;
chunk__37280 = G__37291;
count__37281 = G__37292;
i__37282 = G__37293;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37279);
if(temp__4657__auto__){
var seq__37279__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37279__$1)){
var c__29129__auto__ = cljs.core.chunk_first.call(null,seq__37279__$1);
var G__37294 = cljs.core.chunk_rest.call(null,seq__37279__$1);
var G__37295 = c__29129__auto__;
var G__37296 = cljs.core.count.call(null,c__29129__auto__);
var G__37297 = (0);
seq__37279 = G__37294;
chunk__37280 = G__37295;
count__37281 = G__37296;
i__37282 = G__37297;
continue;
} else {
var vec__37286 = cljs.core.first.call(null,seq__37279__$1);
var k = cljs.core.nth.call(null,vec__37286,(0),null);
var plugin = cljs.core.nth.call(null,vec__37286,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37298 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37279,chunk__37280,count__37281,i__37282,pl_37298,vec__37286,k,plugin,seq__37279__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37298.call(null,msg_hist);
});})(seq__37279,chunk__37280,count__37281,i__37282,pl_37298,vec__37286,k,plugin,seq__37279__$1,temp__4657__auto__))
);
} else {
}

var G__37299 = cljs.core.next.call(null,seq__37279__$1);
var G__37300 = null;
var G__37301 = (0);
var G__37302 = (0);
seq__37279 = G__37299;
chunk__37280 = G__37300;
count__37281 = G__37301;
i__37282 = G__37302;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37304 = arguments.length;
switch (G__37304) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37305_37310 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37306_37311 = null;
var count__37307_37312 = (0);
var i__37308_37313 = (0);
while(true){
if((i__37308_37313 < count__37307_37312)){
var msg_37314 = cljs.core._nth.call(null,chunk__37306_37311,i__37308_37313);
figwheel.client.socket.handle_incoming_message.call(null,msg_37314);

var G__37315 = seq__37305_37310;
var G__37316 = chunk__37306_37311;
var G__37317 = count__37307_37312;
var G__37318 = (i__37308_37313 + (1));
seq__37305_37310 = G__37315;
chunk__37306_37311 = G__37316;
count__37307_37312 = G__37317;
i__37308_37313 = G__37318;
continue;
} else {
var temp__4657__auto___37319 = cljs.core.seq.call(null,seq__37305_37310);
if(temp__4657__auto___37319){
var seq__37305_37320__$1 = temp__4657__auto___37319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37305_37320__$1)){
var c__29129__auto___37321 = cljs.core.chunk_first.call(null,seq__37305_37320__$1);
var G__37322 = cljs.core.chunk_rest.call(null,seq__37305_37320__$1);
var G__37323 = c__29129__auto___37321;
var G__37324 = cljs.core.count.call(null,c__29129__auto___37321);
var G__37325 = (0);
seq__37305_37310 = G__37322;
chunk__37306_37311 = G__37323;
count__37307_37312 = G__37324;
i__37308_37313 = G__37325;
continue;
} else {
var msg_37326 = cljs.core.first.call(null,seq__37305_37320__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37326);

var G__37327 = cljs.core.next.call(null,seq__37305_37320__$1);
var G__37328 = null;
var G__37329 = (0);
var G__37330 = (0);
seq__37305_37310 = G__37327;
chunk__37306_37311 = G__37328;
count__37307_37312 = G__37329;
i__37308_37313 = G__37330;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29466__auto__ = [];
var len__29459__auto___37335 = arguments.length;
var i__29460__auto___37336 = (0);
while(true){
if((i__29460__auto___37336 < len__29459__auto___37335)){
args__29466__auto__.push((arguments[i__29460__auto___37336]));

var G__37337 = (i__29460__auto___37336 + (1));
i__29460__auto___37336 = G__37337;
continue;
} else {
}
break;
}

var argseq__29467__auto__ = ((((0) < args__29466__auto__.length))?(new cljs.core.IndexedSeq(args__29466__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29467__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37332){
var map__37333 = p__37332;
var map__37333__$1 = ((((!((map__37333 == null)))?((((map__37333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37333):map__37333);
var opts = map__37333__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37331){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37331));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37338){if((e37338 instanceof Error)){
var e = e37338;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37338;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37339){
var map__37340 = p__37339;
var map__37340__$1 = ((((!((map__37340 == null)))?((((map__37340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37340):map__37340);
var msg_name = cljs.core.get.call(null,map__37340__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1512749445546
