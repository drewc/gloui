(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{8131:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex"},[a("div",{staticClass:"q-pa-md q-gutter-sm",staticStyle:{width:"100%"}},[a("q-breadcrumbs",[a("q-breadcrumbs-el",{attrs:{icon:"home",to:"/"}}),a("q-breadcrumbs-el",{staticClass:"text-h5",attrs:{label:"Edit Contact",icon:"build"}})],1)],1),t.err?a("div",{staticClass:"q-pa-lg text-red"},[t._v("\n    "+t._s(t.err)+"\n\n  ")]):t._e(),a("contact-select",{on:{input:function(e){return t.$forceUpdate()}},model:{value:t.contact,callback:function(e){t.contact=e},expression:"contact"}}),t.contact?a("div",[t._v("\n    asd\n    "),a("contact",{attrs:{value:t.contact,contact:t.contact}})],1):t._e(),t._v("\n        "+t._s(t.contact)+"\n")],1)},s=[],c=a("a4c0"),o=a("371a"),r=a("14fa"),d=(a("bc3a"),{name:"EditContactPage",components:{Contact:o["a"],ContactSelect:r["a"]},mounted(){},data(){return{contact:null,err:!1}},methods:{isValid(){return!!this.address.number},saveNewContact(){const t=this.contact,e=this.addresses;return t.id=randomUUID(),console.log("Have Con!",t),Object(c["saveContact"])(t).then((()=>(e.length>0&&e.map((e=>{Object(c["saveAsset"])({owner:t.id,address:e.id})})),this.newContact=t,this.newContactAddresses=e,this.contact={},this.addresses=[],this.err=!1,t)))},addAnother(){this.newContact=null,this.newContactAddresses=null}}}),i=d,l=a("2877"),u=a("ead5"),b=a("079e"),h=a("eebe"),m=a.n(h),v=Object(l["a"])(i,n,s,!1,null,null,null);e["default"]=v.exports;m()(v,"components",{QBreadcrumbs:u["a"],QBreadcrumbsEl:b["a"]})}}]);