// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36572){
var map__36573 = p__36572;
var map__36573__$1 = ((((!((map__36573 == null)))?((((map__36573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36573):map__36573);
var m = map__36573__$1;
var n = cljs.core.get.call(null,map__36573__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36573__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36575_36597 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36576_36598 = null;
var count__36577_36599 = (0);
var i__36578_36600 = (0);
while(true){
if((i__36578_36600 < count__36577_36599)){
var f_36601 = cljs.core._nth.call(null,chunk__36576_36598,i__36578_36600);
cljs.core.println.call(null,"  ",f_36601);

var G__36602 = seq__36575_36597;
var G__36603 = chunk__36576_36598;
var G__36604 = count__36577_36599;
var G__36605 = (i__36578_36600 + (1));
seq__36575_36597 = G__36602;
chunk__36576_36598 = G__36603;
count__36577_36599 = G__36604;
i__36578_36600 = G__36605;
continue;
} else {
var temp__4657__auto___36606 = cljs.core.seq.call(null,seq__36575_36597);
if(temp__4657__auto___36606){
var seq__36575_36607__$1 = temp__4657__auto___36606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36575_36607__$1)){
var c__29129__auto___36608 = cljs.core.chunk_first.call(null,seq__36575_36607__$1);
var G__36609 = cljs.core.chunk_rest.call(null,seq__36575_36607__$1);
var G__36610 = c__29129__auto___36608;
var G__36611 = cljs.core.count.call(null,c__29129__auto___36608);
var G__36612 = (0);
seq__36575_36597 = G__36609;
chunk__36576_36598 = G__36610;
count__36577_36599 = G__36611;
i__36578_36600 = G__36612;
continue;
} else {
var f_36613 = cljs.core.first.call(null,seq__36575_36607__$1);
cljs.core.println.call(null,"  ",f_36613);

var G__36614 = cljs.core.next.call(null,seq__36575_36607__$1);
var G__36615 = null;
var G__36616 = (0);
var G__36617 = (0);
seq__36575_36597 = G__36614;
chunk__36576_36598 = G__36615;
count__36577_36599 = G__36616;
i__36578_36600 = G__36617;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36618 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28289__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28289__auto__)){
return or__28289__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36618);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36618)))?cljs.core.second.call(null,arglists_36618):arglists_36618));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36579_36619 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36580_36620 = null;
var count__36581_36621 = (0);
var i__36582_36622 = (0);
while(true){
if((i__36582_36622 < count__36581_36621)){
var vec__36583_36623 = cljs.core._nth.call(null,chunk__36580_36620,i__36582_36622);
var name_36624 = cljs.core.nth.call(null,vec__36583_36623,(0),null);
var map__36586_36625 = cljs.core.nth.call(null,vec__36583_36623,(1),null);
var map__36586_36626__$1 = ((((!((map__36586_36625 == null)))?((((map__36586_36625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36586_36625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36586_36625):map__36586_36625);
var doc_36627 = cljs.core.get.call(null,map__36586_36626__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36628 = cljs.core.get.call(null,map__36586_36626__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36624);

cljs.core.println.call(null," ",arglists_36628);

if(cljs.core.truth_(doc_36627)){
cljs.core.println.call(null," ",doc_36627);
} else {
}

var G__36629 = seq__36579_36619;
var G__36630 = chunk__36580_36620;
var G__36631 = count__36581_36621;
var G__36632 = (i__36582_36622 + (1));
seq__36579_36619 = G__36629;
chunk__36580_36620 = G__36630;
count__36581_36621 = G__36631;
i__36582_36622 = G__36632;
continue;
} else {
var temp__4657__auto___36633 = cljs.core.seq.call(null,seq__36579_36619);
if(temp__4657__auto___36633){
var seq__36579_36634__$1 = temp__4657__auto___36633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36579_36634__$1)){
var c__29129__auto___36635 = cljs.core.chunk_first.call(null,seq__36579_36634__$1);
var G__36636 = cljs.core.chunk_rest.call(null,seq__36579_36634__$1);
var G__36637 = c__29129__auto___36635;
var G__36638 = cljs.core.count.call(null,c__29129__auto___36635);
var G__36639 = (0);
seq__36579_36619 = G__36636;
chunk__36580_36620 = G__36637;
count__36581_36621 = G__36638;
i__36582_36622 = G__36639;
continue;
} else {
var vec__36588_36640 = cljs.core.first.call(null,seq__36579_36634__$1);
var name_36641 = cljs.core.nth.call(null,vec__36588_36640,(0),null);
var map__36591_36642 = cljs.core.nth.call(null,vec__36588_36640,(1),null);
var map__36591_36643__$1 = ((((!((map__36591_36642 == null)))?((((map__36591_36642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36591_36642.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36591_36642):map__36591_36642);
var doc_36644 = cljs.core.get.call(null,map__36591_36643__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36645 = cljs.core.get.call(null,map__36591_36643__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36641);

cljs.core.println.call(null," ",arglists_36645);

if(cljs.core.truth_(doc_36644)){
cljs.core.println.call(null," ",doc_36644);
} else {
}

var G__36646 = cljs.core.next.call(null,seq__36579_36634__$1);
var G__36647 = null;
var G__36648 = (0);
var G__36649 = (0);
seq__36579_36619 = G__36646;
chunk__36580_36620 = G__36647;
count__36581_36621 = G__36648;
i__36582_36622 = G__36649;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36593 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36594 = null;
var count__36595 = (0);
var i__36596 = (0);
while(true){
if((i__36596 < count__36595)){
var role = cljs.core._nth.call(null,chunk__36594,i__36596);
var temp__4657__auto___36650__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36650__$1)){
var spec_36651 = temp__4657__auto___36650__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36651));
} else {
}

var G__36652 = seq__36593;
var G__36653 = chunk__36594;
var G__36654 = count__36595;
var G__36655 = (i__36596 + (1));
seq__36593 = G__36652;
chunk__36594 = G__36653;
count__36595 = G__36654;
i__36596 = G__36655;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36593);
if(temp__4657__auto____$1){
var seq__36593__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36593__$1)){
var c__29129__auto__ = cljs.core.chunk_first.call(null,seq__36593__$1);
var G__36656 = cljs.core.chunk_rest.call(null,seq__36593__$1);
var G__36657 = c__29129__auto__;
var G__36658 = cljs.core.count.call(null,c__29129__auto__);
var G__36659 = (0);
seq__36593 = G__36656;
chunk__36594 = G__36657;
count__36595 = G__36658;
i__36596 = G__36659;
continue;
} else {
var role = cljs.core.first.call(null,seq__36593__$1);
var temp__4657__auto___36660__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36660__$2)){
var spec_36661 = temp__4657__auto___36660__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36661));
} else {
}

var G__36662 = cljs.core.next.call(null,seq__36593__$1);
var G__36663 = null;
var G__36664 = (0);
var G__36665 = (0);
seq__36593 = G__36662;
chunk__36594 = G__36663;
count__36595 = G__36664;
i__36596 = G__36665;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1512749444948
