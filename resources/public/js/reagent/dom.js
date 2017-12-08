// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__28289__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__28289__auto__)){
return or__28289__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_30610 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_30610){
return (function (){
var _STAR_always_update_STAR_30611 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_30611;
}});})(_STAR_always_update_STAR_30610))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_30610;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__30613 = arguments.length;
switch (G__30613) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__30615_30619 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__30616_30620 = null;
var count__30617_30621 = (0);
var i__30618_30622 = (0);
while(true){
if((i__30618_30622 < count__30617_30621)){
var v_30623 = cljs.core._nth.call(null,chunk__30616_30620,i__30618_30622);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_30623);

var G__30624 = seq__30615_30619;
var G__30625 = chunk__30616_30620;
var G__30626 = count__30617_30621;
var G__30627 = (i__30618_30622 + (1));
seq__30615_30619 = G__30624;
chunk__30616_30620 = G__30625;
count__30617_30621 = G__30626;
i__30618_30622 = G__30627;
continue;
} else {
var temp__4657__auto___30628 = cljs.core.seq.call(null,seq__30615_30619);
if(temp__4657__auto___30628){
var seq__30615_30629__$1 = temp__4657__auto___30628;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30615_30629__$1)){
var c__29129__auto___30630 = cljs.core.chunk_first.call(null,seq__30615_30629__$1);
var G__30631 = cljs.core.chunk_rest.call(null,seq__30615_30629__$1);
var G__30632 = c__29129__auto___30630;
var G__30633 = cljs.core.count.call(null,c__29129__auto___30630);
var G__30634 = (0);
seq__30615_30619 = G__30631;
chunk__30616_30620 = G__30632;
count__30617_30621 = G__30633;
i__30618_30622 = G__30634;
continue;
} else {
var v_30635 = cljs.core.first.call(null,seq__30615_30629__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_30635);

var G__30636 = cljs.core.next.call(null,seq__30615_30629__$1);
var G__30637 = null;
var G__30638 = (0);
var G__30639 = (0);
seq__30615_30619 = G__30636;
chunk__30616_30620 = G__30637;
count__30617_30621 = G__30638;
i__30618_30622 = G__30639;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1512749438199
