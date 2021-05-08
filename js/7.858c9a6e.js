(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{2147:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-center"},[s("div",{staticClass:"q-pa-md q-gutter-sm",staticStyle:{width:"100%","text-align":"center"}},[s("q-breadcrumbs",[s("q-breadcrumbs-el",{attrs:{icon:"home",to:"/"}}),s("q-breadcrumbs-el",{staticClass:"text-h5",attrs:{label:"Transfer Assets",icon:"payments"}})],1)],1),s("transfer-asset")],1)},n=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"full-width"},[t.err?s("div",{staticClass:"q-pa-lg text-red"},[t._v("\n    "+t._s(t.err)+"\n  ")]):t._e(),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("h5",[t._v(" From: ")]),s("contact-select",{ref:"fromSelect",on:{input:function(e){return t.popupAddContact(e,"from")}},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}})],1),s("div",{staticClass:"col-6"},[s("h5",[t._v(" To: ")]),s("contact-select",{ref:"toSelect",on:{input:function(e){return t.popupAddContact(e,"to")}},model:{value:t.to,callback:function(e){t.to=e},expression:"to"}})],1)]),t.from?s("div",{staticStyle:{height:"100%"}},[t._l(t.assets,(function(e,a){return s("div",{key:e.id},[s("div",{staticClass:"row rounded-borders q-ma-sm"},[s("div",{staticClass:"col-6",staticStyle:{height:"100%"}},[s("asset-select",{ref:t.assetRef("from",a),refInFor:!0,staticStyle:{height:"100%",overflow:"hidden","text-overflow":"elipsis"},attrs:{ownerID:t.from.id,label:"From this Address",mustHaveSecret:""},on:{input:function(e){return t.popupAddAsset(e,a,"from")}},model:{value:e.from,callback:function(s){t.$set(e,"from",s)},expression:"ass.from"}})],1),s("div",{staticClass:"col-6"},[t.to?s("asset-select",{ref:t.assetRef("to",a),refInFor:!0,staticStyle:{height:"100%"},attrs:{ownerID:t.to.id,label:"To this Address"},on:{input:function(e){return t.popupAddAsset(e,a,"to")}},model:{value:e.to,callback:function(s){t.$set(e,"to",s)},expression:"ass.to"}}):t._e()],1)]),s("div",{staticClass:"row rounded-borders"},[s("div",{staticClass:"col q-mx-sm"},[s("network",{attrs:{value:e.network},on:{input:function(e){return t.assetNetworkInput(a,e)}}})],1),s("div",{staticClass:"col q-mx-sm"},[s("q-input",{attrs:{outlined:"",filled:"",label:"Send this Amount"},model:{value:e.amount,callback:function(s){t.$set(e,"amount",s)},expression:"ass.amount"}})],1),e.network?s("div",{staticClass:"col"},[s("resource-select",{ref:t.assetRef("resource",a),refInFor:!0,attrs:{label:"Of this Resource",network:e.network},on:{input:function(e){t.assets[a].resource=e,t.$forceUpdate()},cancel:function(e){return t.cancelResource(a)}},model:{value:e.resource,callback:function(s){t.$set(e,"resource",s)},expression:"ass.resource"}}),t._v("\n        "+t._s(e.resource)+"\n      ")],1):t._e()]),s("div",{staticClass:"q-mt-sm text-center full-width"},[a>0?s("q-btn",{staticClass:"text-orange",attrs:{icon:"remove_circle",label:"Remove Asset Transfer"},on:{click:function(s){return t.removeAsset(e)}}}):t._e()],1)])})),t.validTransfer()?s("div",{staticClass:"row items-center",staticStyle:{height:"100%"}},[s("div",{staticClass:"col-6 text-center",staticStyle:{height:"100%"}},[s("q-btn",{staticClass:"text-teal",attrs:{icon:"add_circle",label:"Add Another Asset Transfer"},on:{click:function(e){return t.addAsset()}}})],1),s("div",{staticClass:"col-6 text-center"},[s("q-btn",{staticClass:"text-green",attrs:{icon:"check",label:"Perform Transaction"},on:{click:function(e){return t.performTransaction()}}})],1)]):t._e(),s("div",{staticClass:"q-pa-md q-gutter-sm"},[s("q-dialog",{model:{value:t.showProc,callback:function(e){t.showProc=e},expression:"showProc"}},[s("q-layout",{staticClass:"bg-white",attrs:{view:"Lhh lpR fff",container:""}},[s("q-header",{staticClass:"bg-primary"},[s("q-toolbar",[s("q-toolbar-title",[t._v("\n              Transaction State: "+t._s(t.transaction.state)+"\n            ")]),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",disable:!t.allowClose,round:"",dense:"",icon:"close"}})],1)],1),s("q-footer",{staticClass:"bg-black text-white"}),s("q-page-container",[s("q-page",{attrs:{padding:""}},["finished"!==t.transaction.state?s("h5",[t._v("\n              Transfering from "+t._s(t.transaction.remaining)+" assets.")]):t._e(),t._l(t.transaction.transfers,(function(e){return s("q-list",{key:e.id},[e.state?s("q-item",[s("q-card",{class:"error"===e.state?"bg-red-2":"",staticStyle:{padding:"1em"}},["error"===e.state?s("big",[t._v(" ERROR: "+t._s(e.errorMessage))]):t._e(),t._v("\n                  "+t._s(e.currency)+" "+t._s(e.amount)+"\n                  "),s("br"),t._v("from "+t._s(e.from)+"\n                  "),s("br"),t._v(" to "+t._s(e.to)+"\n                  "),s("div",[s("big",[t._v("Opening Balance:")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v(" From: ")]),s("div",{staticClass:"col"},[t._v(" "+t._s(e.openBalance.from)+" ")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v(" To: ")]),s("div",{staticClass:"col"},[t._v(" "+t._s(e.openBalance.to)+" ")])])],1),"finished"==e.state?s("div",[s("big",[t._v("Closing Balance:")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v(" From: ")]),s("div",{staticClass:"col"},[t._v(" "+t._s(e.closeBalance.from)+" ")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[t._v(" To: ")]),s("div",{staticClass:"col"},[t._v(" "+t._s(e.closeBalance.to)+" ")])])],1):t._e(),s("div",[t._v("State: "+t._s(e.state)+" ")]),"finished"===e.state?s("q-icon",{staticClass:"text-green",staticStyle:{float:"right","font-size":"3em"},attrs:{name:"check"}}):t._e()],1)],1):t._e()],1)}))],2)],1)],1)],1),t.editContact?s("q-dialog",{staticClass:"full-width",model:{value:t.canEditContact,callback:function(e){t.canEditContact=e},expression:"canEditContact"}},[s("q-layout",{staticClass:"bg-white",attrs:{view:"Lhh lpR fff",container:""}},[s("q-header",{staticClass:"bg-primary"},[s("q-toolbar",[s("q-toolbar-title",[t._v('\n             Add Addresses to "'+t._s(t.editContact.name)+'"\n            ')]),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1)],1),s("q-footer",{staticClass:"bg-black text-white"}),s("q-page-container",[s("q-page",{attrs:{padding:""}},[s("contact",{attrs:{value:t.editContact,contact:t.editContact,showDesc:!1},on:{input:t.assetAdded,cancel:t.cancelAddAsset}})],1)],1)],1)],1):t._e(),t.canAddContact?s("q-dialog",{staticClass:"full-width",model:{value:t.canAddContact,callback:function(e){t.canAddContact=e},expression:"canAddContact"}},[s("q-layout",{staticClass:"bg-white",attrs:{view:"Lhh lpR fff",container:""}},[s("q-header",{staticClass:"bg-primary"},[s("q-toolbar",[s("q-toolbar-title",[t._v("\n             Add New Contact\n            ")]),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1)],1),s("q-footer",{staticClass:"bg-black text-white"}),s("q-page-container",[s("q-page",{attrs:{padding:""}},[s("contact",{attrs:{value:t.addContact,contact:t.addContact,showAddresses:!1},on:{input:t.contactAdded,cancel:t.cancelAddContact}})],1)],1)],1)],1):t._e()],1)],2):t._e()])},r=[],l=s("14fa"),c=s("ffbd"),i=s("371a"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-select",{staticStyle:{height:"100%"},attrs:{filled:"",options:t.assets,"use-input":"","emit-value":"","map-options":"",label:t.label,color:"teal",clearable:"","options-selected-class":"text-deep-orange"},on:{input:function(e){return t.$emit("input",e)},filter:t.filterFN},scopedSlots:t._u([{key:"option",fn:function(e){return[s("q-item",t._g(t._b({staticStyle:{height:"100%"}},"q-item",e.itemProps,!1),e.itemEvents),[e.opt.address.secret?s("q-item-section",{attrs:{side:""}},[s("q-icon",{attrs:{name:"enhanced_encryption"}})],1):t._e(),t.ownerID?t._e():s("span",[t._v(" Owner: "+t._s(e.opt.owner.name)+" ")]),s("q-item-section",[t._v("\n          "+t._s(e.opt.address.label)+"\n        "),s("q-item-label",[s("small",{staticClass:"text-grey text-bold"},[t._v(t._s(e.opt.address.number))])])],1)],1)]}},{key:"selected",fn:function(){return[t.value?s("q-item",{staticStyle:{height:"100%"}},[t.value.address.secret?s("q-item-section",{attrs:{top:"",side:""}},[s("q-icon",{attrs:{name:"enhanced_encryption"}})],1):t._e(),t.ownerID?t._e():s("span",[t._v(" Owner: "+t._s(t.value.owner.name)+" ")]),s("q-item-section",{attrs:{top:""}},[t._v("\n          "+t._s(t.value.address.label)+"\n          "),s("br"),s("q-item-label",[s("small",{staticClass:"text-grey text-bold"},[t._v(t._s(t.value.address.number))])])],1)],1):t._e(),t._v("\n       \n       ")]},proxy:!0}]),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},u=[],p=(s("4e82"),s("ddb0"),s("a4c0")),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.value?s("q-list",[s("q-item",[s("q-item-section",{attrs:{side:"",top:""}},[s("q-item-label",{attrs:{caption:""}},[t._v("type")]),t.value.type?s("q-badge",{attrs:{color:"teal",label:t.value.type.name}}):t._e(),s("q-item-label",{attrs:{caption:""}},[t._v(" net")]),s("q-badge",{attrs:{color:"teal",label:t.value.network}})],1),s("q-item-section",[t.value.name?s("span",[t._v(" "+t._s(t.value.name)+" ")]):t._e(),t.value.description?s("span",[t._v(" "+t._s(t.value.description)+" ")]):t._e(),t.value.type?s("q-list",{attrs:{dense:""}},[s("q-item",{attrs:{dense:""}},[t._v("\n          path: "+t._s(t.value.path)+"\n        ")]),t._l(t.value.type.description,(function(e,a){return s("q-item",{key:a,attrs:{dense:""}},[t._v("\n         "+t._s(a)+": "+t._s(e)+"\n        ")])}))],2):t._e()],1)],1)],1):t._e()},h=[],m={name:"ResourceItem",props:["value"]},v=m,C=s("2877"),_=s("1c1c"),b=s("66e5"),g=s("4074"),w=s("0170"),q=s("58a81"),A=s("eebe"),y=s.n(A),x=Object(C["a"])(v,f,h,!1,null,null,null);x.exports;y()(x,"components",{QList:_["a"],QItem:b["a"],QItemSection:g["a"],QItemLabel:w["a"],QBadge:q["a"]});var k={props:{filterFn:{default:t=>t,type:Function},ownerID:{default:null},mustHaveSecret:{default:!1,type:Boolean},label:{default:"Asset",type:String}},created:function(){this.updateAssets()},methods:{updateAssets(){Object(p["listAssetEntities"])().then((t=>{this.AllAssets=t}))},cancel(){this.value=null,this.updateAssets()},filterFN(t,e){e((()=>{t.toLowerCase(),"function"===typeof this.filterFn&&this.filterFn;return this.assets=this.AllAssets,console.log("Assets:",this.assets,"ownerID",this.ownerID),this.mustHaveSecret&&(this.assets=this.assets.filter((t=>"string"===typeof t.address.secret))),this.ownerID&&(this.assets=this.assets.filter((t=>t.owner.id===this.ownerID))),this.assets=this.assets.sort(((t,e)=>t.address.label<e.address.label)),this.assets=[{owner:{id:this.ownerID},address:{label:"Edit Contact",number:"Add an Address as an Asset"},edit:!0},...this.assets],!0}))}},data(){return{value:null,AllAssets:[],assets:null}}},S=k,T=s("ddd8"),I=s("0016"),Q=Object(C["a"])(S,d,u,!1,null,null,null),R=Q.exports;y()(Q,"components",{QSelect:T["a"],QItem:b["a"],QItemSection:g["a"],QIcon:I["a"],QItemLabel:w["a"]});var $=s("3d99"),E=s("bc3a"),F=s.n(E),L={name:"TransferAsset",components:{ContactSelect:l["a"],Contact:i["a"],AssetSelect:R,Network:$["a"],ResourceSelect:c["a"]},methods:{cancelResource(t){this.assets[t].resource=null},assetNetworkInput(t,e){this.assets[t].network=e,this.assets[t].resource=null;const s=this.assetRef("resource",t),a=this.$refs[s];console.log(a,s,this.$refs),a&&a[0]&&(console.log("have resources",a[0]),a[0].updateResources().then((()=>{console.log("res value",a[0].resources),a[0].value=a[0].resources[1],this.assets[t].resource=a[0].value,this.$forceUpdate()})),this.$forceUpdate())},popupAddAsset(t,e,s){if(console.log("here, popup?"),t&&t.edit){console.log("Editing:",t,"On Key",e);const a=t.owner.id;Object(p["findContact"])(a).then((t=>{this.canEditContact=!0,this.editContact=t,this.editContactKey=e,this.editContactLocation=s,this.editContactRef=this.assetRef(s,e)}))}},cancelAddAsset(){this.canEditContact=!1,console.log("ref",this.editContactRef,this.$refs[this.editContactRef][0].cancel())},assetAdded(){this.canEditContact=!1,console.log("added asset, reset:",this.assetRef(this.editContactKey)),console.log("ref",this.editContactRef,this.$refs[this.editContactRef][0].cancel())},popupAddContact(t,e){t&&t.add&&(this.canAddContact=!0,this.addContactLocation=e,this.addContact={avatar:t.avatar},this.from=this.addContact)},addContactSelect(){return"from"===this.addContactLocation?this.$refs.fromSelect:this.$refs.toSelect},contactAdded(t){console.log("contact added?"),this.canAddContact=!1,this.addContactSelect().updateAndSelect(t)},cancelAddContact(){this.addContactSelect().updateAndSelect(null),this.canAddContact=!1},assetRef(t,e){return"asset"+t+e},validTransfer(){function t(t){return t.from&&t.to&&t.amount}return this.assets.every(t)},addAsset(){this.assets.push({from:null,to:null,amount:null,network:null}),console.log("Assets:",this.assets)},removeAsset(t){this.assets=this.assets.filter((e=>e!==t)),console.log("Assets:",this.assets,this.validTransfer()),this.$forceUpdate()},performTransaction(){this.err=!1,this.showProc=!0;const t={id:randomUUID(),assets:this.assets.slice()};console.warn("Here is the transaction:",t),F.a.post($glowServer+"/eth/transfer",t).then((t=>{console.log("poty",t),this.transaction=t.data,this.update=setTimeout((()=>{this.updateTransaction()}),500)})).catch((t=>{console.error("Caught an error",t.response),this.err=t.response.data}))},updateTransaction(){F.a.get($glowServer+"/eth/transfer?id="+this.transaction.id).then((t=>{const e=t.data;this.transaction=e;const s=e.state;console.log("up",e),"finished"!==s&&"error"!==s?(console.log("state",s),clearTimeout(this.update),this.update=setTimeout((()=>{this.updateTransaction()}),500)):(console.log("sloce!"),this.allowClose=!0,clearTimeout(this.update))})).catch((t=>{console.error(t.result),this.err=t.result.data}))}},data:()=>({from:null,to:null,transfers:[],assets:[{from:null,to:null,amount:null,network:null}],transaction:!1,showProc:!1,allowClose:!1,update:!1,err:!1,canEditContact:!1,editContact:null,editContactKey:null,editContactLocation:null,canAddContact:!1,addContact:null,addContactLocation:null})},D=L,O=s("27f9"),B=s("9c40"),P=s("24e8"),N=s("4d5a"),j=s("e359"),U=s("65c6"),H=s("6ac5"),K=s("7ff0"),J=s("09e3"),z=s("9989"),M=s("f09f"),G=s("7f67"),V=Object(C["a"])(D,o,r,!1,null,null,null),W=V.exports;y()(V,"components",{QInput:O["a"],QBtn:B["a"],QDialog:P["a"],QLayout:N["a"],QHeader:j["a"],QToolbar:U["a"],QToolbarTitle:H["a"],QFooter:K["a"],QPageContainer:J["a"],QPage:z["a"],QList:_["a"],QItem:b["a"],QCard:M["a"],QIcon:I["a"]}),y()(V,"directives",{ClosePopup:G["a"]});var X={name:"AssetTransfer",components:{TransferAsset:W}},Y=X,Z=s("ead5"),tt=s("079e"),et=Object(C["a"])(Y,a,n,!1,null,null,null);e["default"]=et.exports;y()(et,"components",{QBreadcrumbs:Z["a"],QBreadcrumbsEl:tt["a"]})}}]);