// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28289__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28289__auto__){
return or__28289__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28289__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28289__auto__)){
return or__28289__auto__;
} else {
var or__28289__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28289__auto____$1)){
return or__28289__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35150_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35150_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__35151 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35152 = null;
var count__35153 = (0);
var i__35154 = (0);
while(true){
if((i__35154 < count__35153)){
var n = cljs.core._nth.call(null,chunk__35152,i__35154);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35155 = seq__35151;
var G__35156 = chunk__35152;
var G__35157 = count__35153;
var G__35158 = (i__35154 + (1));
seq__35151 = G__35155;
chunk__35152 = G__35156;
count__35153 = G__35157;
i__35154 = G__35158;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35151);
if(temp__4657__auto__){
var seq__35151__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35151__$1)){
var c__29129__auto__ = cljs.core.chunk_first.call(null,seq__35151__$1);
var G__35159 = cljs.core.chunk_rest.call(null,seq__35151__$1);
var G__35160 = c__29129__auto__;
var G__35161 = cljs.core.count.call(null,c__29129__auto__);
var G__35162 = (0);
seq__35151 = G__35159;
chunk__35152 = G__35160;
count__35153 = G__35161;
i__35154 = G__35162;
continue;
} else {
var n = cljs.core.first.call(null,seq__35151__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35163 = cljs.core.next.call(null,seq__35151__$1);
var G__35164 = null;
var G__35165 = (0);
var G__35166 = (0);
seq__35151 = G__35163;
chunk__35152 = G__35164;
count__35153 = G__35165;
i__35154 = G__35166;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35176_35184 = cljs.core.seq.call(null,deps);
var chunk__35177_35185 = null;
var count__35178_35186 = (0);
var i__35179_35187 = (0);
while(true){
if((i__35179_35187 < count__35178_35186)){
var dep_35188 = cljs.core._nth.call(null,chunk__35177_35185,i__35179_35187);
topo_sort_helper_STAR_.call(null,dep_35188,(depth + (1)),state);

var G__35189 = seq__35176_35184;
var G__35190 = chunk__35177_35185;
var G__35191 = count__35178_35186;
var G__35192 = (i__35179_35187 + (1));
seq__35176_35184 = G__35189;
chunk__35177_35185 = G__35190;
count__35178_35186 = G__35191;
i__35179_35187 = G__35192;
continue;
} else {
var temp__4657__auto___35193 = cljs.core.seq.call(null,seq__35176_35184);
if(temp__4657__auto___35193){
var seq__35176_35194__$1 = temp__4657__auto___35193;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35176_35194__$1)){
var c__29129__auto___35195 = cljs.core.chunk_first.call(null,seq__35176_35194__$1);
var G__35196 = cljs.core.chunk_rest.call(null,seq__35176_35194__$1);
var G__35197 = c__29129__auto___35195;
var G__35198 = cljs.core.count.call(null,c__29129__auto___35195);
var G__35199 = (0);
seq__35176_35184 = G__35196;
chunk__35177_35185 = G__35197;
count__35178_35186 = G__35198;
i__35179_35187 = G__35199;
continue;
} else {
var dep_35200 = cljs.core.first.call(null,seq__35176_35194__$1);
topo_sort_helper_STAR_.call(null,dep_35200,(depth + (1)),state);

var G__35201 = cljs.core.next.call(null,seq__35176_35194__$1);
var G__35202 = null;
var G__35203 = (0);
var G__35204 = (0);
seq__35176_35184 = G__35201;
chunk__35177_35185 = G__35202;
count__35178_35186 = G__35203;
i__35179_35187 = G__35204;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35180){
var vec__35181 = p__35180;
var seq__35182 = cljs.core.seq.call(null,vec__35181);
var first__35183 = cljs.core.first.call(null,seq__35182);
var seq__35182__$1 = cljs.core.next.call(null,seq__35182);
var x = first__35183;
var xs = seq__35182__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35181,seq__35182,first__35183,seq__35182__$1,x,xs,get_deps__$1){
return (function (p1__35167_SHARP_){
return clojure.set.difference.call(null,p1__35167_SHARP_,x);
});})(vec__35181,seq__35182,first__35183,seq__35182__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35205 = cljs.core.seq.call(null,provides);
var chunk__35206 = null;
var count__35207 = (0);
var i__35208 = (0);
while(true){
if((i__35208 < count__35207)){
var prov = cljs.core._nth.call(null,chunk__35206,i__35208);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35209_35217 = cljs.core.seq.call(null,requires);
var chunk__35210_35218 = null;
var count__35211_35219 = (0);
var i__35212_35220 = (0);
while(true){
if((i__35212_35220 < count__35211_35219)){
var req_35221 = cljs.core._nth.call(null,chunk__35210_35218,i__35212_35220);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35221,prov);

var G__35222 = seq__35209_35217;
var G__35223 = chunk__35210_35218;
var G__35224 = count__35211_35219;
var G__35225 = (i__35212_35220 + (1));
seq__35209_35217 = G__35222;
chunk__35210_35218 = G__35223;
count__35211_35219 = G__35224;
i__35212_35220 = G__35225;
continue;
} else {
var temp__4657__auto___35226 = cljs.core.seq.call(null,seq__35209_35217);
if(temp__4657__auto___35226){
var seq__35209_35227__$1 = temp__4657__auto___35226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35209_35227__$1)){
var c__29129__auto___35228 = cljs.core.chunk_first.call(null,seq__35209_35227__$1);
var G__35229 = cljs.core.chunk_rest.call(null,seq__35209_35227__$1);
var G__35230 = c__29129__auto___35228;
var G__35231 = cljs.core.count.call(null,c__29129__auto___35228);
var G__35232 = (0);
seq__35209_35217 = G__35229;
chunk__35210_35218 = G__35230;
count__35211_35219 = G__35231;
i__35212_35220 = G__35232;
continue;
} else {
var req_35233 = cljs.core.first.call(null,seq__35209_35227__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35233,prov);

var G__35234 = cljs.core.next.call(null,seq__35209_35227__$1);
var G__35235 = null;
var G__35236 = (0);
var G__35237 = (0);
seq__35209_35217 = G__35234;
chunk__35210_35218 = G__35235;
count__35211_35219 = G__35236;
i__35212_35220 = G__35237;
continue;
}
} else {
}
}
break;
}

var G__35238 = seq__35205;
var G__35239 = chunk__35206;
var G__35240 = count__35207;
var G__35241 = (i__35208 + (1));
seq__35205 = G__35238;
chunk__35206 = G__35239;
count__35207 = G__35240;
i__35208 = G__35241;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35205);
if(temp__4657__auto__){
var seq__35205__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35205__$1)){
var c__29129__auto__ = cljs.core.chunk_first.call(null,seq__35205__$1);
var G__35242 = cljs.core.chunk_rest.call(null,seq__35205__$1);
var G__35243 = c__29129__auto__;
var G__35244 = cljs.core.count.call(null,c__29129__auto__);
var G__35245 = (0);
seq__35205 = G__35242;
chunk__35206 = G__35243;
count__35207 = G__35244;
i__35208 = G__35245;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35205__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35213_35246 = cljs.core.seq.call(null,requires);
var chunk__35214_35247 = null;
var count__35215_35248 = (0);
var i__35216_35249 = (0);
while(true){
if((i__35216_35249 < count__35215_35248)){
var req_35250 = cljs.core._nth.call(null,chunk__35214_35247,i__35216_35249);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35250,prov);

var G__35251 = seq__35213_35246;
var G__35252 = chunk__35214_35247;
var G__35253 = count__35215_35248;
var G__35254 = (i__35216_35249 + (1));
seq__35213_35246 = G__35251;
chunk__35214_35247 = G__35252;
count__35215_35248 = G__35253;
i__35216_35249 = G__35254;
continue;
} else {
var temp__4657__auto___35255__$1 = cljs.core.seq.call(null,seq__35213_35246);
if(temp__4657__auto___35255__$1){
var seq__35213_35256__$1 = temp__4657__auto___35255__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35213_35256__$1)){
var c__29129__auto___35257 = cljs.core.chunk_first.call(null,seq__35213_35256__$1);
var G__35258 = cljs.core.chunk_rest.call(null,seq__35213_35256__$1);
var G__35259 = c__29129__auto___35257;
var G__35260 = cljs.core.count.call(null,c__29129__auto___35257);
var G__35261 = (0);
seq__35213_35246 = G__35258;
chunk__35214_35247 = G__35259;
count__35215_35248 = G__35260;
i__35216_35249 = G__35261;
continue;
} else {
var req_35262 = cljs.core.first.call(null,seq__35213_35256__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35262,prov);

var G__35263 = cljs.core.next.call(null,seq__35213_35256__$1);
var G__35264 = null;
var G__35265 = (0);
var G__35266 = (0);
seq__35213_35246 = G__35263;
chunk__35214_35247 = G__35264;
count__35215_35248 = G__35265;
i__35216_35249 = G__35266;
continue;
}
} else {
}
}
break;
}

var G__35267 = cljs.core.next.call(null,seq__35205__$1);
var G__35268 = null;
var G__35269 = (0);
var G__35270 = (0);
seq__35205 = G__35267;
chunk__35206 = G__35268;
count__35207 = G__35269;
i__35208 = G__35270;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35271_35275 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35272_35276 = null;
var count__35273_35277 = (0);
var i__35274_35278 = (0);
while(true){
if((i__35274_35278 < count__35273_35277)){
var ns_35279 = cljs.core._nth.call(null,chunk__35272_35276,i__35274_35278);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35279);

var G__35280 = seq__35271_35275;
var G__35281 = chunk__35272_35276;
var G__35282 = count__35273_35277;
var G__35283 = (i__35274_35278 + (1));
seq__35271_35275 = G__35280;
chunk__35272_35276 = G__35281;
count__35273_35277 = G__35282;
i__35274_35278 = G__35283;
continue;
} else {
var temp__4657__auto___35284 = cljs.core.seq.call(null,seq__35271_35275);
if(temp__4657__auto___35284){
var seq__35271_35285__$1 = temp__4657__auto___35284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35271_35285__$1)){
var c__29129__auto___35286 = cljs.core.chunk_first.call(null,seq__35271_35285__$1);
var G__35287 = cljs.core.chunk_rest.call(null,seq__35271_35285__$1);
var G__35288 = c__29129__auto___35286;
var G__35289 = cljs.core.count.call(null,c__29129__auto___35286);
var G__35290 = (0);
seq__35271_35275 = G__35287;
chunk__35272_35276 = G__35288;
count__35273_35277 = G__35289;
i__35274_35278 = G__35290;
continue;
} else {
var ns_35291 = cljs.core.first.call(null,seq__35271_35285__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35291);

var G__35292 = cljs.core.next.call(null,seq__35271_35285__$1);
var G__35293 = null;
var G__35294 = (0);
var G__35295 = (0);
seq__35271_35275 = G__35292;
chunk__35272_35276 = G__35293;
count__35273_35277 = G__35294;
i__35274_35278 = G__35295;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28289__auto__ = goog.require__;
if(cljs.core.truth_(or__28289__auto__)){
return or__28289__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35296__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35296 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35297__i = 0, G__35297__a = new Array(arguments.length -  0);
while (G__35297__i < G__35297__a.length) {G__35297__a[G__35297__i] = arguments[G__35297__i + 0]; ++G__35297__i;}
  args = new cljs.core.IndexedSeq(G__35297__a,0,null);
} 
return G__35296__delegate.call(this,args);};
G__35296.cljs$lang$maxFixedArity = 0;
G__35296.cljs$lang$applyTo = (function (arglist__35298){
var args = cljs.core.seq(arglist__35298);
return G__35296__delegate(args);
});
G__35296.cljs$core$IFn$_invoke$arity$variadic = G__35296__delegate;
return G__35296;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__35299_SHARP_,p2__35300_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35299_SHARP_)].join('')),p2__35300_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__35301_SHARP_,p2__35302_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35301_SHARP_)].join(''),p2__35302_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35303 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35303.addCallback(((function (G__35303){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35303))
);

G__35303.addErrback(((function (G__35303){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35303))
);

return G__35303;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35304 = cljs.core._EQ_;
var expr__35305 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35304.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35305))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35304,expr__35305){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35304,expr__35305))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35304,expr__35305){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35307){if((e35307 instanceof Error)){
var e = e35307;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35307;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35304,expr__35305))
} else {
if(cljs.core.truth_(pred__35304.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35305))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35304.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__35305))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35304.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35305))){
return ((function (pred__35304,expr__35305){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35308){if((e35308 instanceof Error)){
var e = e35308;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35308;

}
}})());
});
;})(pred__35304,expr__35305))
} else {
return ((function (pred__35304,expr__35305){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35304,expr__35305))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35309,callback){
var map__35310 = p__35309;
var map__35310__$1 = ((((!((map__35310 == null)))?((((map__35310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35310):map__35310);
var file_msg = map__35310__$1;
var request_url = cljs.core.get.call(null,map__35310__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35310,map__35310__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35310,map__35310__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto__){
return (function (state_35334){
var state_val_35335 = (state_35334[(1)]);
if((state_val_35335 === (7))){
var inst_35330 = (state_35334[(2)]);
var state_35334__$1 = state_35334;
var statearr_35336_35353 = state_35334__$1;
(statearr_35336_35353[(2)] = inst_35330);

(statearr_35336_35353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (1))){
var state_35334__$1 = state_35334;
var statearr_35337_35354 = state_35334__$1;
(statearr_35337_35354[(2)] = null);

(statearr_35337_35354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (4))){
var inst_35314 = (state_35334[(7)]);
var inst_35314__$1 = (state_35334[(2)]);
var state_35334__$1 = (function (){var statearr_35338 = state_35334;
(statearr_35338[(7)] = inst_35314__$1);

return statearr_35338;
})();
if(cljs.core.truth_(inst_35314__$1)){
var statearr_35339_35355 = state_35334__$1;
(statearr_35339_35355[(1)] = (5));

} else {
var statearr_35340_35356 = state_35334__$1;
(statearr_35340_35356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (6))){
var state_35334__$1 = state_35334;
var statearr_35341_35357 = state_35334__$1;
(statearr_35341_35357[(2)] = null);

(statearr_35341_35357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (3))){
var inst_35332 = (state_35334[(2)]);
var state_35334__$1 = state_35334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35334__$1,inst_35332);
} else {
if((state_val_35335 === (2))){
var state_35334__$1 = state_35334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35334__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35335 === (11))){
var inst_35326 = (state_35334[(2)]);
var state_35334__$1 = (function (){var statearr_35342 = state_35334;
(statearr_35342[(8)] = inst_35326);

return statearr_35342;
})();
var statearr_35343_35358 = state_35334__$1;
(statearr_35343_35358[(2)] = null);

(statearr_35343_35358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (9))){
var inst_35320 = (state_35334[(9)]);
var inst_35318 = (state_35334[(10)]);
var inst_35322 = inst_35320.call(null,inst_35318);
var state_35334__$1 = state_35334;
var statearr_35344_35359 = state_35334__$1;
(statearr_35344_35359[(2)] = inst_35322);

(statearr_35344_35359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (5))){
var inst_35314 = (state_35334[(7)]);
var inst_35316 = figwheel.client.file_reloading.blocking_load.call(null,inst_35314);
var state_35334__$1 = state_35334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35334__$1,(8),inst_35316);
} else {
if((state_val_35335 === (10))){
var inst_35318 = (state_35334[(10)]);
var inst_35324 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35318);
var state_35334__$1 = state_35334;
var statearr_35345_35360 = state_35334__$1;
(statearr_35345_35360[(2)] = inst_35324);

(statearr_35345_35360[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35335 === (8))){
var inst_35320 = (state_35334[(9)]);
var inst_35314 = (state_35334[(7)]);
var inst_35318 = (state_35334[(2)]);
var inst_35319 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35320__$1 = cljs.core.get.call(null,inst_35319,inst_35314);
var state_35334__$1 = (function (){var statearr_35346 = state_35334;
(statearr_35346[(9)] = inst_35320__$1);

(statearr_35346[(10)] = inst_35318);

return statearr_35346;
})();
if(cljs.core.truth_(inst_35320__$1)){
var statearr_35347_35361 = state_35334__$1;
(statearr_35347_35361[(1)] = (9));

} else {
var statearr_35348_35362 = state_35334__$1;
(statearr_35348_35362[(1)] = (10));

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
});})(c__31978__auto__))
;
return ((function (switch__31890__auto__,c__31978__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31891__auto__ = null;
var figwheel$client$file_reloading$state_machine__31891__auto____0 = (function (){
var statearr_35349 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35349[(0)] = figwheel$client$file_reloading$state_machine__31891__auto__);

(statearr_35349[(1)] = (1));

return statearr_35349;
});
var figwheel$client$file_reloading$state_machine__31891__auto____1 = (function (state_35334){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_35334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e35350){if((e35350 instanceof Object)){
var ex__31894__auto__ = e35350;
var statearr_35351_35363 = state_35334;
(statearr_35351_35363[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35364 = state_35334;
state_35334 = G__35364;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31891__auto__ = function(state_35334){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31891__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31891__auto____1.call(this,state_35334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31891__auto____0;
figwheel$client$file_reloading$state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31891__auto____1;
return figwheel$client$file_reloading$state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto__))
})();
var state__31980__auto__ = (function (){var statearr_35352 = f__31979__auto__.call(null);
(statearr_35352[(6)] = c__31978__auto__);

return statearr_35352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__))
);

return c__31978__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35365,callback){
var map__35366 = p__35365;
var map__35366__$1 = ((((!((map__35366 == null)))?((((map__35366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35366):map__35366);
var file_msg = map__35366__$1;
var namespace = cljs.core.get.call(null,map__35366__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35366,map__35366__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35366,map__35366__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35368){
var map__35369 = p__35368;
var map__35369__$1 = ((((!((map__35369 == null)))?((((map__35369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35369):map__35369);
var file_msg = map__35369__$1;
var namespace = cljs.core.get.call(null,map__35369__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35371){
var map__35372 = p__35371;
var map__35372__$1 = ((((!((map__35372 == null)))?((((map__35372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35372):map__35372);
var file_msg = map__35372__$1;
var namespace = cljs.core.get.call(null,map__35372__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28277__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28277__auto__){
var or__28289__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28289__auto__)){
return or__28289__auto__;
} else {
var or__28289__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28289__auto____$1)){
return or__28289__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28277__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35374,callback){
var map__35375 = p__35374;
var map__35375__$1 = ((((!((map__35375 == null)))?((((map__35375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35375):map__35375);
var file_msg = map__35375__$1;
var request_url = cljs.core.get.call(null,map__35375__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35375__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31978__auto___35425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto___35425,out){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto___35425,out){
return (function (state_35410){
var state_val_35411 = (state_35410[(1)]);
if((state_val_35411 === (1))){
var inst_35384 = cljs.core.seq.call(null,files);
var inst_35385 = cljs.core.first.call(null,inst_35384);
var inst_35386 = cljs.core.next.call(null,inst_35384);
var inst_35387 = files;
var state_35410__$1 = (function (){var statearr_35412 = state_35410;
(statearr_35412[(7)] = inst_35385);

(statearr_35412[(8)] = inst_35387);

(statearr_35412[(9)] = inst_35386);

return statearr_35412;
})();
var statearr_35413_35426 = state_35410__$1;
(statearr_35413_35426[(2)] = null);

(statearr_35413_35426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (2))){
var inst_35387 = (state_35410[(8)]);
var inst_35393 = (state_35410[(10)]);
var inst_35392 = cljs.core.seq.call(null,inst_35387);
var inst_35393__$1 = cljs.core.first.call(null,inst_35392);
var inst_35394 = cljs.core.next.call(null,inst_35392);
var inst_35395 = (inst_35393__$1 == null);
var inst_35396 = cljs.core.not.call(null,inst_35395);
var state_35410__$1 = (function (){var statearr_35414 = state_35410;
(statearr_35414[(11)] = inst_35394);

(statearr_35414[(10)] = inst_35393__$1);

return statearr_35414;
})();
if(inst_35396){
var statearr_35415_35427 = state_35410__$1;
(statearr_35415_35427[(1)] = (4));

} else {
var statearr_35416_35428 = state_35410__$1;
(statearr_35416_35428[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (3))){
var inst_35408 = (state_35410[(2)]);
var state_35410__$1 = state_35410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35410__$1,inst_35408);
} else {
if((state_val_35411 === (4))){
var inst_35393 = (state_35410[(10)]);
var inst_35398 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35393);
var state_35410__$1 = state_35410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35410__$1,(7),inst_35398);
} else {
if((state_val_35411 === (5))){
var inst_35404 = cljs.core.async.close_BANG_.call(null,out);
var state_35410__$1 = state_35410;
var statearr_35417_35429 = state_35410__$1;
(statearr_35417_35429[(2)] = inst_35404);

(statearr_35417_35429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (6))){
var inst_35406 = (state_35410[(2)]);
var state_35410__$1 = state_35410;
var statearr_35418_35430 = state_35410__$1;
(statearr_35418_35430[(2)] = inst_35406);

(statearr_35418_35430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35411 === (7))){
var inst_35394 = (state_35410[(11)]);
var inst_35400 = (state_35410[(2)]);
var inst_35401 = cljs.core.async.put_BANG_.call(null,out,inst_35400);
var inst_35387 = inst_35394;
var state_35410__$1 = (function (){var statearr_35419 = state_35410;
(statearr_35419[(12)] = inst_35401);

(statearr_35419[(8)] = inst_35387);

return statearr_35419;
})();
var statearr_35420_35431 = state_35410__$1;
(statearr_35420_35431[(2)] = null);

(statearr_35420_35431[(1)] = (2));


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
});})(c__31978__auto___35425,out))
;
return ((function (switch__31890__auto__,c__31978__auto___35425,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31891__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31891__auto____0 = (function (){
var statearr_35421 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35421[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31891__auto__);

(statearr_35421[(1)] = (1));

return statearr_35421;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31891__auto____1 = (function (state_35410){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_35410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e35422){if((e35422 instanceof Object)){
var ex__31894__auto__ = e35422;
var statearr_35423_35432 = state_35410;
(statearr_35423_35432[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35433 = state_35410;
state_35410 = G__35433;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31891__auto__ = function(state_35410){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31891__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31891__auto____1.call(this,state_35410);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31891__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31891__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto___35425,out))
})();
var state__31980__auto__ = (function (){var statearr_35424 = f__31979__auto__.call(null);
(statearr_35424[(6)] = c__31978__auto___35425);

return statearr_35424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto___35425,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35434,opts){
var map__35435 = p__35434;
var map__35435__$1 = ((((!((map__35435 == null)))?((((map__35435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35435):map__35435);
var eval_body = cljs.core.get.call(null,map__35435__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35435__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28277__auto__ = eval_body;
if(cljs.core.truth_(and__28277__auto__)){
return typeof eval_body === 'string';
} else {
return and__28277__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35437){var e = e35437;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35438_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35438_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35439){
var vec__35440 = p__35439;
var k = cljs.core.nth.call(null,vec__35440,(0),null);
var v = cljs.core.nth.call(null,vec__35440,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35443){
var vec__35444 = p__35443;
var k = cljs.core.nth.call(null,vec__35444,(0),null);
var v = cljs.core.nth.call(null,vec__35444,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35450,p__35451){
var map__35452 = p__35450;
var map__35452__$1 = ((((!((map__35452 == null)))?((((map__35452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35452):map__35452);
var opts = map__35452__$1;
var before_jsload = cljs.core.get.call(null,map__35452__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35452__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35452__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35453 = p__35451;
var map__35453__$1 = ((((!((map__35453 == null)))?((((map__35453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35453):map__35453);
var msg = map__35453__$1;
var files = cljs.core.get.call(null,map__35453__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35453__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35453__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31978__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31979__auto__ = (function (){var switch__31890__auto__ = ((function (c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35607){
var state_val_35608 = (state_35607[(1)]);
if((state_val_35608 === (7))){
var inst_35468 = (state_35607[(7)]);
var inst_35467 = (state_35607[(8)]);
var inst_35470 = (state_35607[(9)]);
var inst_35469 = (state_35607[(10)]);
var inst_35475 = cljs.core._nth.call(null,inst_35468,inst_35470);
var inst_35476 = figwheel.client.file_reloading.eval_body.call(null,inst_35475,opts);
var inst_35477 = (inst_35470 + (1));
var tmp35609 = inst_35468;
var tmp35610 = inst_35467;
var tmp35611 = inst_35469;
var inst_35467__$1 = tmp35610;
var inst_35468__$1 = tmp35609;
var inst_35469__$1 = tmp35611;
var inst_35470__$1 = inst_35477;
var state_35607__$1 = (function (){var statearr_35612 = state_35607;
(statearr_35612[(11)] = inst_35476);

(statearr_35612[(7)] = inst_35468__$1);

(statearr_35612[(8)] = inst_35467__$1);

(statearr_35612[(9)] = inst_35470__$1);

(statearr_35612[(10)] = inst_35469__$1);

return statearr_35612;
})();
var statearr_35613_35696 = state_35607__$1;
(statearr_35613_35696[(2)] = null);

(statearr_35613_35696[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (20))){
var inst_35510 = (state_35607[(12)]);
var inst_35518 = figwheel.client.file_reloading.sort_files.call(null,inst_35510);
var state_35607__$1 = state_35607;
var statearr_35614_35697 = state_35607__$1;
(statearr_35614_35697[(2)] = inst_35518);

(statearr_35614_35697[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (27))){
var state_35607__$1 = state_35607;
var statearr_35615_35698 = state_35607__$1;
(statearr_35615_35698[(2)] = null);

(statearr_35615_35698[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (1))){
var inst_35459 = (state_35607[(13)]);
var inst_35456 = before_jsload.call(null,files);
var inst_35457 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35458 = (function (){return ((function (inst_35459,inst_35456,inst_35457,state_val_35608,c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35447_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35447_SHARP_);
});
;})(inst_35459,inst_35456,inst_35457,state_val_35608,c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35459__$1 = cljs.core.filter.call(null,inst_35458,files);
var inst_35460 = cljs.core.not_empty.call(null,inst_35459__$1);
var state_35607__$1 = (function (){var statearr_35616 = state_35607;
(statearr_35616[(14)] = inst_35456);

(statearr_35616[(13)] = inst_35459__$1);

(statearr_35616[(15)] = inst_35457);

return statearr_35616;
})();
if(cljs.core.truth_(inst_35460)){
var statearr_35617_35699 = state_35607__$1;
(statearr_35617_35699[(1)] = (2));

} else {
var statearr_35618_35700 = state_35607__$1;
(statearr_35618_35700[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (24))){
var state_35607__$1 = state_35607;
var statearr_35619_35701 = state_35607__$1;
(statearr_35619_35701[(2)] = null);

(statearr_35619_35701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (39))){
var inst_35560 = (state_35607[(16)]);
var state_35607__$1 = state_35607;
var statearr_35620_35702 = state_35607__$1;
(statearr_35620_35702[(2)] = inst_35560);

(statearr_35620_35702[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (46))){
var inst_35602 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
var statearr_35621_35703 = state_35607__$1;
(statearr_35621_35703[(2)] = inst_35602);

(statearr_35621_35703[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (4))){
var inst_35504 = (state_35607[(2)]);
var inst_35505 = cljs.core.List.EMPTY;
var inst_35506 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35505);
var inst_35507 = (function (){return ((function (inst_35504,inst_35505,inst_35506,state_val_35608,c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35448_SHARP_){
var and__28277__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35448_SHARP_);
if(cljs.core.truth_(and__28277__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35448_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35448_SHARP_)));
} else {
return and__28277__auto__;
}
});
;})(inst_35504,inst_35505,inst_35506,state_val_35608,c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35508 = cljs.core.filter.call(null,inst_35507,files);
var inst_35509 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35510 = cljs.core.concat.call(null,inst_35508,inst_35509);
var state_35607__$1 = (function (){var statearr_35622 = state_35607;
(statearr_35622[(17)] = inst_35506);

(statearr_35622[(12)] = inst_35510);

(statearr_35622[(18)] = inst_35504);

return statearr_35622;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35623_35704 = state_35607__$1;
(statearr_35623_35704[(1)] = (16));

} else {
var statearr_35624_35705 = state_35607__$1;
(statearr_35624_35705[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (15))){
var inst_35494 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
var statearr_35625_35706 = state_35607__$1;
(statearr_35625_35706[(2)] = inst_35494);

(statearr_35625_35706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (21))){
var inst_35520 = (state_35607[(19)]);
var inst_35520__$1 = (state_35607[(2)]);
var inst_35521 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35520__$1);
var state_35607__$1 = (function (){var statearr_35626 = state_35607;
(statearr_35626[(19)] = inst_35520__$1);

return statearr_35626;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35607__$1,(22),inst_35521);
} else {
if((state_val_35608 === (31))){
var inst_35605 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35607__$1,inst_35605);
} else {
if((state_val_35608 === (32))){
var inst_35560 = (state_35607[(16)]);
var inst_35565 = inst_35560.cljs$lang$protocol_mask$partition0$;
var inst_35566 = (inst_35565 & (64));
var inst_35567 = inst_35560.cljs$core$ISeq$;
var inst_35568 = (cljs.core.PROTOCOL_SENTINEL === inst_35567);
var inst_35569 = (inst_35566) || (inst_35568);
var state_35607__$1 = state_35607;
if(cljs.core.truth_(inst_35569)){
var statearr_35627_35707 = state_35607__$1;
(statearr_35627_35707[(1)] = (35));

} else {
var statearr_35628_35708 = state_35607__$1;
(statearr_35628_35708[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (40))){
var inst_35582 = (state_35607[(20)]);
var inst_35581 = (state_35607[(2)]);
var inst_35582__$1 = cljs.core.get.call(null,inst_35581,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35583 = cljs.core.get.call(null,inst_35581,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35584 = cljs.core.not_empty.call(null,inst_35582__$1);
var state_35607__$1 = (function (){var statearr_35629 = state_35607;
(statearr_35629[(20)] = inst_35582__$1);

(statearr_35629[(21)] = inst_35583);

return statearr_35629;
})();
if(cljs.core.truth_(inst_35584)){
var statearr_35630_35709 = state_35607__$1;
(statearr_35630_35709[(1)] = (41));

} else {
var statearr_35631_35710 = state_35607__$1;
(statearr_35631_35710[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (33))){
var state_35607__$1 = state_35607;
var statearr_35632_35711 = state_35607__$1;
(statearr_35632_35711[(2)] = false);

(statearr_35632_35711[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (13))){
var inst_35480 = (state_35607[(22)]);
var inst_35484 = cljs.core.chunk_first.call(null,inst_35480);
var inst_35485 = cljs.core.chunk_rest.call(null,inst_35480);
var inst_35486 = cljs.core.count.call(null,inst_35484);
var inst_35467 = inst_35485;
var inst_35468 = inst_35484;
var inst_35469 = inst_35486;
var inst_35470 = (0);
var state_35607__$1 = (function (){var statearr_35633 = state_35607;
(statearr_35633[(7)] = inst_35468);

(statearr_35633[(8)] = inst_35467);

(statearr_35633[(9)] = inst_35470);

(statearr_35633[(10)] = inst_35469);

return statearr_35633;
})();
var statearr_35634_35712 = state_35607__$1;
(statearr_35634_35712[(2)] = null);

(statearr_35634_35712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (22))){
var inst_35524 = (state_35607[(23)]);
var inst_35520 = (state_35607[(19)]);
var inst_35523 = (state_35607[(24)]);
var inst_35528 = (state_35607[(25)]);
var inst_35523__$1 = (state_35607[(2)]);
var inst_35524__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35523__$1);
var inst_35525 = (function (){var all_files = inst_35520;
var res_SINGLEQUOTE_ = inst_35523__$1;
var res = inst_35524__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35524,inst_35520,inst_35523,inst_35528,inst_35523__$1,inst_35524__$1,state_val_35608,c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35449_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35449_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35524,inst_35520,inst_35523,inst_35528,inst_35523__$1,inst_35524__$1,state_val_35608,c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35526 = cljs.core.filter.call(null,inst_35525,inst_35523__$1);
var inst_35527 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35528__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35527);
var inst_35529 = cljs.core.not_empty.call(null,inst_35528__$1);
var state_35607__$1 = (function (){var statearr_35635 = state_35607;
(statearr_35635[(23)] = inst_35524__$1);

(statearr_35635[(26)] = inst_35526);

(statearr_35635[(24)] = inst_35523__$1);

(statearr_35635[(25)] = inst_35528__$1);

return statearr_35635;
})();
if(cljs.core.truth_(inst_35529)){
var statearr_35636_35713 = state_35607__$1;
(statearr_35636_35713[(1)] = (23));

} else {
var statearr_35637_35714 = state_35607__$1;
(statearr_35637_35714[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (36))){
var state_35607__$1 = state_35607;
var statearr_35638_35715 = state_35607__$1;
(statearr_35638_35715[(2)] = false);

(statearr_35638_35715[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (41))){
var inst_35582 = (state_35607[(20)]);
var inst_35586 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35587 = cljs.core.map.call(null,inst_35586,inst_35582);
var inst_35588 = cljs.core.pr_str.call(null,inst_35587);
var inst_35589 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35588)].join('');
var inst_35590 = figwheel.client.utils.log.call(null,inst_35589);
var state_35607__$1 = state_35607;
var statearr_35639_35716 = state_35607__$1;
(statearr_35639_35716[(2)] = inst_35590);

(statearr_35639_35716[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (43))){
var inst_35583 = (state_35607[(21)]);
var inst_35593 = (state_35607[(2)]);
var inst_35594 = cljs.core.not_empty.call(null,inst_35583);
var state_35607__$1 = (function (){var statearr_35640 = state_35607;
(statearr_35640[(27)] = inst_35593);

return statearr_35640;
})();
if(cljs.core.truth_(inst_35594)){
var statearr_35641_35717 = state_35607__$1;
(statearr_35641_35717[(1)] = (44));

} else {
var statearr_35642_35718 = state_35607__$1;
(statearr_35642_35718[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (29))){
var inst_35524 = (state_35607[(23)]);
var inst_35526 = (state_35607[(26)]);
var inst_35520 = (state_35607[(19)]);
var inst_35560 = (state_35607[(16)]);
var inst_35523 = (state_35607[(24)]);
var inst_35528 = (state_35607[(25)]);
var inst_35556 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35559 = (function (){var all_files = inst_35520;
var res_SINGLEQUOTE_ = inst_35523;
var res = inst_35524;
var files_not_loaded = inst_35526;
var dependencies_that_loaded = inst_35528;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35524,inst_35526,inst_35520,inst_35560,inst_35523,inst_35528,inst_35556,state_val_35608,c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35558){
var map__35643 = p__35558;
var map__35643__$1 = ((((!((map__35643 == null)))?((((map__35643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35643.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35643):map__35643);
var namespace = cljs.core.get.call(null,map__35643__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35524,inst_35526,inst_35520,inst_35560,inst_35523,inst_35528,inst_35556,state_val_35608,c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35560__$1 = cljs.core.group_by.call(null,inst_35559,inst_35526);
var inst_35562 = (inst_35560__$1 == null);
var inst_35563 = cljs.core.not.call(null,inst_35562);
var state_35607__$1 = (function (){var statearr_35645 = state_35607;
(statearr_35645[(16)] = inst_35560__$1);

(statearr_35645[(28)] = inst_35556);

return statearr_35645;
})();
if(inst_35563){
var statearr_35646_35719 = state_35607__$1;
(statearr_35646_35719[(1)] = (32));

} else {
var statearr_35647_35720 = state_35607__$1;
(statearr_35647_35720[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (44))){
var inst_35583 = (state_35607[(21)]);
var inst_35596 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35583);
var inst_35597 = cljs.core.pr_str.call(null,inst_35596);
var inst_35598 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35597)].join('');
var inst_35599 = figwheel.client.utils.log.call(null,inst_35598);
var state_35607__$1 = state_35607;
var statearr_35648_35721 = state_35607__$1;
(statearr_35648_35721[(2)] = inst_35599);

(statearr_35648_35721[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (6))){
var inst_35501 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
var statearr_35649_35722 = state_35607__$1;
(statearr_35649_35722[(2)] = inst_35501);

(statearr_35649_35722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (28))){
var inst_35526 = (state_35607[(26)]);
var inst_35553 = (state_35607[(2)]);
var inst_35554 = cljs.core.not_empty.call(null,inst_35526);
var state_35607__$1 = (function (){var statearr_35650 = state_35607;
(statearr_35650[(29)] = inst_35553);

return statearr_35650;
})();
if(cljs.core.truth_(inst_35554)){
var statearr_35651_35723 = state_35607__$1;
(statearr_35651_35723[(1)] = (29));

} else {
var statearr_35652_35724 = state_35607__$1;
(statearr_35652_35724[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (25))){
var inst_35524 = (state_35607[(23)]);
var inst_35540 = (state_35607[(2)]);
var inst_35541 = cljs.core.not_empty.call(null,inst_35524);
var state_35607__$1 = (function (){var statearr_35653 = state_35607;
(statearr_35653[(30)] = inst_35540);

return statearr_35653;
})();
if(cljs.core.truth_(inst_35541)){
var statearr_35654_35725 = state_35607__$1;
(statearr_35654_35725[(1)] = (26));

} else {
var statearr_35655_35726 = state_35607__$1;
(statearr_35655_35726[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (34))){
var inst_35576 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
if(cljs.core.truth_(inst_35576)){
var statearr_35656_35727 = state_35607__$1;
(statearr_35656_35727[(1)] = (38));

} else {
var statearr_35657_35728 = state_35607__$1;
(statearr_35657_35728[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (17))){
var state_35607__$1 = state_35607;
var statearr_35658_35729 = state_35607__$1;
(statearr_35658_35729[(2)] = recompile_dependents);

(statearr_35658_35729[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (3))){
var state_35607__$1 = state_35607;
var statearr_35659_35730 = state_35607__$1;
(statearr_35659_35730[(2)] = null);

(statearr_35659_35730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (12))){
var inst_35497 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
var statearr_35660_35731 = state_35607__$1;
(statearr_35660_35731[(2)] = inst_35497);

(statearr_35660_35731[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (2))){
var inst_35459 = (state_35607[(13)]);
var inst_35466 = cljs.core.seq.call(null,inst_35459);
var inst_35467 = inst_35466;
var inst_35468 = null;
var inst_35469 = (0);
var inst_35470 = (0);
var state_35607__$1 = (function (){var statearr_35661 = state_35607;
(statearr_35661[(7)] = inst_35468);

(statearr_35661[(8)] = inst_35467);

(statearr_35661[(9)] = inst_35470);

(statearr_35661[(10)] = inst_35469);

return statearr_35661;
})();
var statearr_35662_35732 = state_35607__$1;
(statearr_35662_35732[(2)] = null);

(statearr_35662_35732[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (23))){
var inst_35524 = (state_35607[(23)]);
var inst_35526 = (state_35607[(26)]);
var inst_35520 = (state_35607[(19)]);
var inst_35523 = (state_35607[(24)]);
var inst_35528 = (state_35607[(25)]);
var inst_35531 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35533 = (function (){var all_files = inst_35520;
var res_SINGLEQUOTE_ = inst_35523;
var res = inst_35524;
var files_not_loaded = inst_35526;
var dependencies_that_loaded = inst_35528;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35524,inst_35526,inst_35520,inst_35523,inst_35528,inst_35531,state_val_35608,c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35532){
var map__35663 = p__35532;
var map__35663__$1 = ((((!((map__35663 == null)))?((((map__35663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35663.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35663):map__35663);
var request_url = cljs.core.get.call(null,map__35663__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35524,inst_35526,inst_35520,inst_35523,inst_35528,inst_35531,state_val_35608,c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35534 = cljs.core.reverse.call(null,inst_35528);
var inst_35535 = cljs.core.map.call(null,inst_35533,inst_35534);
var inst_35536 = cljs.core.pr_str.call(null,inst_35535);
var inst_35537 = figwheel.client.utils.log.call(null,inst_35536);
var state_35607__$1 = (function (){var statearr_35665 = state_35607;
(statearr_35665[(31)] = inst_35531);

return statearr_35665;
})();
var statearr_35666_35733 = state_35607__$1;
(statearr_35666_35733[(2)] = inst_35537);

(statearr_35666_35733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (35))){
var state_35607__$1 = state_35607;
var statearr_35667_35734 = state_35607__$1;
(statearr_35667_35734[(2)] = true);

(statearr_35667_35734[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (19))){
var inst_35510 = (state_35607[(12)]);
var inst_35516 = figwheel.client.file_reloading.expand_files.call(null,inst_35510);
var state_35607__$1 = state_35607;
var statearr_35668_35735 = state_35607__$1;
(statearr_35668_35735[(2)] = inst_35516);

(statearr_35668_35735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (11))){
var state_35607__$1 = state_35607;
var statearr_35669_35736 = state_35607__$1;
(statearr_35669_35736[(2)] = null);

(statearr_35669_35736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (9))){
var inst_35499 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
var statearr_35670_35737 = state_35607__$1;
(statearr_35670_35737[(2)] = inst_35499);

(statearr_35670_35737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (5))){
var inst_35470 = (state_35607[(9)]);
var inst_35469 = (state_35607[(10)]);
var inst_35472 = (inst_35470 < inst_35469);
var inst_35473 = inst_35472;
var state_35607__$1 = state_35607;
if(cljs.core.truth_(inst_35473)){
var statearr_35671_35738 = state_35607__$1;
(statearr_35671_35738[(1)] = (7));

} else {
var statearr_35672_35739 = state_35607__$1;
(statearr_35672_35739[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (14))){
var inst_35480 = (state_35607[(22)]);
var inst_35489 = cljs.core.first.call(null,inst_35480);
var inst_35490 = figwheel.client.file_reloading.eval_body.call(null,inst_35489,opts);
var inst_35491 = cljs.core.next.call(null,inst_35480);
var inst_35467 = inst_35491;
var inst_35468 = null;
var inst_35469 = (0);
var inst_35470 = (0);
var state_35607__$1 = (function (){var statearr_35673 = state_35607;
(statearr_35673[(7)] = inst_35468);

(statearr_35673[(8)] = inst_35467);

(statearr_35673[(9)] = inst_35470);

(statearr_35673[(32)] = inst_35490);

(statearr_35673[(10)] = inst_35469);

return statearr_35673;
})();
var statearr_35674_35740 = state_35607__$1;
(statearr_35674_35740[(2)] = null);

(statearr_35674_35740[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (45))){
var state_35607__$1 = state_35607;
var statearr_35675_35741 = state_35607__$1;
(statearr_35675_35741[(2)] = null);

(statearr_35675_35741[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (26))){
var inst_35524 = (state_35607[(23)]);
var inst_35526 = (state_35607[(26)]);
var inst_35520 = (state_35607[(19)]);
var inst_35523 = (state_35607[(24)]);
var inst_35528 = (state_35607[(25)]);
var inst_35543 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35545 = (function (){var all_files = inst_35520;
var res_SINGLEQUOTE_ = inst_35523;
var res = inst_35524;
var files_not_loaded = inst_35526;
var dependencies_that_loaded = inst_35528;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35524,inst_35526,inst_35520,inst_35523,inst_35528,inst_35543,state_val_35608,c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35544){
var map__35676 = p__35544;
var map__35676__$1 = ((((!((map__35676 == null)))?((((map__35676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35676.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35676):map__35676);
var namespace = cljs.core.get.call(null,map__35676__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35676__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35524,inst_35526,inst_35520,inst_35523,inst_35528,inst_35543,state_val_35608,c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35546 = cljs.core.map.call(null,inst_35545,inst_35524);
var inst_35547 = cljs.core.pr_str.call(null,inst_35546);
var inst_35548 = figwheel.client.utils.log.call(null,inst_35547);
var inst_35549 = (function (){var all_files = inst_35520;
var res_SINGLEQUOTE_ = inst_35523;
var res = inst_35524;
var files_not_loaded = inst_35526;
var dependencies_that_loaded = inst_35528;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35524,inst_35526,inst_35520,inst_35523,inst_35528,inst_35543,inst_35545,inst_35546,inst_35547,inst_35548,state_val_35608,c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35524,inst_35526,inst_35520,inst_35523,inst_35528,inst_35543,inst_35545,inst_35546,inst_35547,inst_35548,state_val_35608,c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35550 = setTimeout(inst_35549,(10));
var state_35607__$1 = (function (){var statearr_35678 = state_35607;
(statearr_35678[(33)] = inst_35548);

(statearr_35678[(34)] = inst_35543);

return statearr_35678;
})();
var statearr_35679_35742 = state_35607__$1;
(statearr_35679_35742[(2)] = inst_35550);

(statearr_35679_35742[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (16))){
var state_35607__$1 = state_35607;
var statearr_35680_35743 = state_35607__$1;
(statearr_35680_35743[(2)] = reload_dependents);

(statearr_35680_35743[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (38))){
var inst_35560 = (state_35607[(16)]);
var inst_35578 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35560);
var state_35607__$1 = state_35607;
var statearr_35681_35744 = state_35607__$1;
(statearr_35681_35744[(2)] = inst_35578);

(statearr_35681_35744[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (30))){
var state_35607__$1 = state_35607;
var statearr_35682_35745 = state_35607__$1;
(statearr_35682_35745[(2)] = null);

(statearr_35682_35745[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (10))){
var inst_35480 = (state_35607[(22)]);
var inst_35482 = cljs.core.chunked_seq_QMARK_.call(null,inst_35480);
var state_35607__$1 = state_35607;
if(inst_35482){
var statearr_35683_35746 = state_35607__$1;
(statearr_35683_35746[(1)] = (13));

} else {
var statearr_35684_35747 = state_35607__$1;
(statearr_35684_35747[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (18))){
var inst_35514 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
if(cljs.core.truth_(inst_35514)){
var statearr_35685_35748 = state_35607__$1;
(statearr_35685_35748[(1)] = (19));

} else {
var statearr_35686_35749 = state_35607__$1;
(statearr_35686_35749[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (42))){
var state_35607__$1 = state_35607;
var statearr_35687_35750 = state_35607__$1;
(statearr_35687_35750[(2)] = null);

(statearr_35687_35750[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (37))){
var inst_35573 = (state_35607[(2)]);
var state_35607__$1 = state_35607;
var statearr_35688_35751 = state_35607__$1;
(statearr_35688_35751[(2)] = inst_35573);

(statearr_35688_35751[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35608 === (8))){
var inst_35467 = (state_35607[(8)]);
var inst_35480 = (state_35607[(22)]);
var inst_35480__$1 = cljs.core.seq.call(null,inst_35467);
var state_35607__$1 = (function (){var statearr_35689 = state_35607;
(statearr_35689[(22)] = inst_35480__$1);

return statearr_35689;
})();
if(inst_35480__$1){
var statearr_35690_35752 = state_35607__$1;
(statearr_35690_35752[(1)] = (10));

} else {
var statearr_35691_35753 = state_35607__$1;
(statearr_35691_35753[(1)] = (11));

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
}
});})(c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31890__auto__,c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31891__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31891__auto____0 = (function (){
var statearr_35692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35692[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31891__auto__);

(statearr_35692[(1)] = (1));

return statearr_35692;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31891__auto____1 = (function (state_35607){
while(true){
var ret_value__31892__auto__ = (function (){try{while(true){
var result__31893__auto__ = switch__31890__auto__.call(null,state_35607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31893__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31893__auto__;
}
break;
}
}catch (e35693){if((e35693 instanceof Object)){
var ex__31894__auto__ = e35693;
var statearr_35694_35754 = state_35607;
(statearr_35694_35754[(5)] = ex__31894__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31892__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35755 = state_35607;
state_35607 = G__35755;
continue;
} else {
return ret_value__31892__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31891__auto__ = function(state_35607){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31891__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31891__auto____1.call(this,state_35607);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31891__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31891__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31891__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31891__auto__;
})()
;})(switch__31890__auto__,c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31980__auto__ = (function (){var statearr_35695 = f__31979__auto__.call(null);
(statearr_35695[(6)] = c__31978__auto__);

return statearr_35695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31980__auto__);
});})(c__31978__auto__,map__35452,map__35452__$1,opts,before_jsload,on_jsload,reload_dependents,map__35453,map__35453__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31978__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35758,link){
var map__35759 = p__35758;
var map__35759__$1 = ((((!((map__35759 == null)))?((((map__35759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35759):map__35759);
var file = cljs.core.get.call(null,map__35759__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35759,map__35759__$1,file){
return (function (p1__35756_SHARP_,p2__35757_SHARP_){
if(cljs.core._EQ_.call(null,p1__35756_SHARP_,p2__35757_SHARP_)){
return p1__35756_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35759,map__35759__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35762){
var map__35763 = p__35762;
var map__35763__$1 = ((((!((map__35763 == null)))?((((map__35763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35763):map__35763);
var match_length = cljs.core.get.call(null,map__35763__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35763__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35761_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35761_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35765_SHARP_,p2__35766_SHARP_){
return cljs.core.assoc.call(null,p1__35765_SHARP_,cljs.core.get.call(null,p2__35766_SHARP_,key),p2__35766_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35767 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35767);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35767);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35768,p__35769){
var map__35770 = p__35768;
var map__35770__$1 = ((((!((map__35770 == null)))?((((map__35770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35770):map__35770);
var on_cssload = cljs.core.get.call(null,map__35770__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35771 = p__35769;
var map__35771__$1 = ((((!((map__35771 == null)))?((((map__35771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35771):map__35771);
var files_msg = map__35771__$1;
var files = cljs.core.get.call(null,map__35771__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1512749443331
