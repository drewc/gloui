(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"11e5":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-center"},[a("div",{staticClass:"q-pa-md q-gutter-sm",staticStyle:{width:"100%"}},[a("q-breadcrumbs",[a("q-breadcrumbs-el",{attrs:{icon:"home",to:"/"}}),a("q-breadcrumbs-el",{staticClass:"text-h5",attrs:{label:"Add Asset",icon:"build"}})],1)],1),a("asset",{staticStyle:{"min-width":"80vw"},attrs:{value:t.asset},on:{input:function(e){t.asset=e}}})],1)},n=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",[a("div",{staticClass:"q-pa-md row justify-evenly"},[a("div",{staticClass:"q-gutter-y-md col-5",staticStyle:{"max-width":"45vw"}},[a("q-option-group",{attrs:{inline:"",options:[{label:"New Resource",value:"new"},{label:"Existing Resource",value:"existing"}]},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}}),a("q-tab-panels",{staticClass:"shadow-2 rounded-borders",attrs:{animated:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[a("q-tab-panel",{attrs:{name:"new"}},[a("resource",{attrs:{value:t.resource},on:{input:function(e){t.resource=e}}})],1),a("q-tab-panel",{attrs:{name:"existing"}},[a("resource-select",{attrs:{value:t.resource},on:{input:function(e){t.resource=e}}})],1)],1)],1),a("div",{staticClass:"q-gutter-y-md col-6"},[a("q-option-group",{attrs:{inline:"",options:[{label:"New Contact",value:"cnew"},{label:"Existing Contact",value:"cexisting"}]},model:{value:t.cpanel,callback:function(e){t.cpanel=e},expression:"cpanel"}}),a("q-tab-panels",{staticClass:"shadow-2 rounded-borders",attrs:{animated:""},model:{value:t.cpanel,callback:function(e){t.cpanel=e},expression:"cpanel"}},[a("q-tab-panel",{attrs:{name:"cnew"}},[a("span",{staticClass:"text-h5"},[t._v("Rolodex ")]),a("small",[t._v(' This is the "owner" of this asset. ')]),a("contact",{attrs:{value:t.contact},on:{input:t.inputContact}})],1),a("q-tab-panel",{attrs:{name:"cexisting"}},[a("contact-select",{attrs:{value:t.contact},on:{input:t.inputContact}})],1)],1)],1)]),a("div",[t.is_modded()?a("div",[t.modded&&null===t.id?a("q-btn",{attrs:{color:"primary",label:"Save New Asset"},on:{click:t.saveThisAsset}}):t._e(),t.modded&&null!==t.id?a("q-btn",{attrs:{color:"amber",label:"Update Asset"},on:{click:t.saveThisAsset}}):t._e()],1):t._e(),a("q-btn",{attrs:{label:"Go back home",to:"/"}})],1)])},c=[],i=(a("3f4f"),a("54b3")),o=a("ffbd"),r=a("371a"),u=a("14fa"),d=a("a4c0"),p={name:"Asset",components:{Resource:i["a"],ContactSelect:u["a"],ResourceSelect:o["a"],Contact:r["a"]},methods:{inputContact(t){this.contact=t,this.inputAssetEvent()},makeAsset(){return{id:this.id,owner:this.contact,resource:this.resource}},inputAssetEvent(){this.modded=!0,this.$emit("input",this.makeAsset())},saveThisAsset(){const t=this.makeAsset();return null===t.id&&(t.id=randomUUID(),this.id=t.id),this.inputAssetEvent(),this.modded=!1,this.value=t,Object(d["saveAsset"])(t)},is_modded(){return this.modded&&this.contact&&this.resource}},data(){return{id:null,contact:null,resource:null,panel:"new",cpanel:"cnew",modded:!1,value:null}}},m=p,b=a("2877"),v=a("f09f"),h=a("9f0a"),f=a("adad"),w=a("823b"),q=a("9c40"),x=a("eebe"),A=a.n(x),C=Object(b["a"])(m,l,c,!1,null,null,null),k=C.exports;A()(C,"components",{QCard:v["a"],QOptionGroup:h["a"],QTabPanels:f["a"],QTabPanel:w["a"],QBtn:q["a"]});var g={name:"AddAsset",components:{Asset:k},data(){return{asset:null}}},_=g,y=a("ead5"),E=a("079e"),Q=Object(b["a"])(_,s,n,!1,null,null,null);e["default"]=Q.exports;A()(Q,"components",{QBreadcrumbs:y["a"],QBreadcrumbsEl:E["a"]})}}]);