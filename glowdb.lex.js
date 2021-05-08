(()=>{let c,_,C,W,e,t,H,Q,r,R,L,U,n,V,s,o,E,a,F,D,G,K,i,O,J,X,d,S,g,u,j,w,l,b,m,p,P,I,k,Z,h,M,$,x,N,B,y,T,Y,f,z,v,A,q,cc,Cc,Wc,ec,tc,Hc,Qc,rc,Rc,Lc,Uc,nc,Vc,sc,oc,Ec,ac,Fc,Dc,Gc,Kc,ic,Oc,Jc,Xc,dc,Sc,gc,uc,jc,wc,lc,bc,mc,pc,Pc,Ic,kc,Zc,hc,Mc,$c,xc,Nc,Bc,yc,Tc,Yc,fc,zc,vc,Ac,qc,c_,__,C_,W_,e_,t_,H_,Q_,r_,R_,L_,U_,n_,V_,s_,o_,E_,a_,F_,D_,G_,K_,i_,O_,J_,X_,d_,S_,g_,u_,j_,w_,l_,b_,m_,p_,P_,I_,k_,Z_,h_,M_,$_,x_,N_,B_,y_,T_,Y_,f_,z_,v_,A_,q_,cC,_C,CC,WC,eC,tC,HC,QC,rC,RC,LC,UC,nC,VC,sC,oC,EC;globalThis.$glowServer="/cloud";const{openDB:aC,deleteDB:FC,wrap:DC,unwrap:GC}=require("idb");function KC(c){$glowdbPromise.then((_=>{const C=_.transaction("resourceType","readwrite").objectStore("resourceType");C.put(c)}))}function iC(){return $glowdbPromise.then((c=>{const _=c.transaction("resourceType").objectStore("resourceType");return _.getAll()}))}function OC(c){return $glowdbPromise.then((_=>{const C=_.transaction("contact","readwrite").objectStore("contact");return C.put(c)}))}function JC(){return $glowdbPromise.then((c=>{const _=c.transaction("contact").objectStore("contact");return _.getAll()}))}function XC(c){return"object"===typeof c?c:$glowdbPromise.then((_=>{const C=_.transaction("contact").objectStore("contact");return C.get(c)}))}function dC(c){$glowdbPromise.then((_=>{const C=_.transaction("resource","readwrite").objectStore("resource");C.put(c)}))}function SC(){return $glowdbPromise.then((c=>{const _=c.transaction("resource").objectStore("resource");return _.getAll()}))}function gC(c){return"object"===typeof c?c:$glowdbPromise.then((_=>{const C=_.transaction("resource").objectStore("resource");return C.get(c)}))}function uC(c){$glowdbPromise.then((_=>{const C=_.transaction("identity","readwrite").objectStore("identity");C.put(c)}))}function jC(){return $glowdbPromise.then((c=>{const _=c.transaction("identity").objectStore("identity");return _.getAll()}))}function wC(c){return"object"===typeof c?c:$glowdbPromise.then((_=>{const C=_.transaction("identity").objectStore("identity");return C.get(c)}))}function lC(c){return $glowdbPromise.then((_=>{const C=_.transaction("asset","readwrite").objectStore("asset");C.put(c)}))}function bC(c){$glowdbPromise.then((_=>{const C={owner:"string"===typeof c.owner?c.owner:c.owner.id,address:"string"===typeof c.address?c.address:c.address.id},W=[C.owner,C.address];console.log("trying to delete ,",C,W);const e=_.transaction("asset","readwrite").objectStore("asset");return e.delete(W)}))}function mC(){return $glowdbPromise.then((c=>{const _=c.transaction("asset").objectStore("asset");return _.getAll()}))}function pC(c){return"object"===typeof c?c:$glowdbPromise.then((_=>{const C=_.transaction("asset").objectStore("asset");return C.get(c)}))}async function PC(c){async function _(c,_){const C="string"===typeof _?await c(_):_;return C}const C=await _(pC,c);return C.address=await _(hC,C.address),C.owner=await _(XC,C.owner),C}async function IC(){const c=[],_=await mC();for(const C in _){const W=await PC(_[C]);c.push(W)}return c}function kC(c){return $glowdbPromise.then((_=>{const C=_.transaction("address","readwrite").objectStore("address");C.put(c);return c}))}function ZC(){return $glowdbPromise.then((c=>{const _=c.transaction("address").objectStore("address");return _.getAll()}))}function hC(c){return"object"===typeof c?c:$glowdbPromise.then((_=>{const C=_.transaction("address").objectStore("address");return C.get(c)}))}(()=>{globalThis.$glowdb=!1,globalThis.$glowdbPromise=!1;const c="glow",_=42,C=[];console.log("Loading DB");const W=aC(c,_,{upgrade(c,_,W,e){if(console.log("Upgrading DB"),C.map((_=>{console.log("Entity",_),c.objectStoreNames.contains(_)||c.createObjectStore(_)})),console.log("Upgrading Network"),!c.objectStoreNames.contains("network")){let _=c.createObjectStore("network",{keyPath:"key"});_.createIndex("description","description",{unique:!0}),_.createIndex("uri","uri",{unique:!0})}if(!c.objectStoreNames.contains("crypto")){c.createObjectStore("crypto",{keyPath:"symbol"})}if(c.objectStoreNames.contains("address")&&c.deleteObjectStore("address"),!c.objectStoreNames.contains("address")){console.log("Upgrading Address");c.createObjectStore("address",{keyPath:"id"})}if(c.objectStoreNames.contains("asset")&&c.deleteObjectStore("asset"),!c.objectStoreNames.contains("asset")){console.log("Upgrading Asset");let _=c.createObjectStore("asset",{keyPath:["owner","address"]});_.createIndex("owner","owner",{unique:!1}),_.createIndex("address","address",{unique:!1})}if(console.log("Upgrading Resource Type"),!c.objectStoreNames.contains("resourceType")){console.log("Upgrading Resource Type");c.createObjectStore("resourceType",{keyPath:"name"})}if(c.objectStoreNames.contains("resource")&&c.deleteObjectStore("resource"),!c.objectStoreNames.contains("resource")){console.log("Upgrading Resource");c.createObjectStore("resource",{keyPath:["name","network"]})}if(console.log("Upgrading Identity"),!c.objectStoreNames.contains("identity")){c.createObjectStore("identity",{keyPath:"name"})}if(!c.objectStoreNames.contains("contact")){console.log("Upgrading contact");c.createObjectStore("contact",{keyPath:"id"})}}});$glowdbPromise=W,W.then((c=>{console.log("finally Loaded DB"),globalThis.$glowdb=c,Object.assign(globalThis.$glowdb,module.exports)}))})(),KC({name:"Native",description:"The Native CryptoCurrency of a network",construct:{}}),KC({name:"ERC20",description:"An ERC20 Contract",construct:{address:"The address of this contract in '0x' format"}}),module.exports={listNetworks:()=>$glowdb.transaction("network").objectStore("network").getAll(),addNetworks(){const c=[{key:"ced",description:"Cardano EVM Devnet",uri:"https://rpc-evm.portal.dev.cardano.org/",nativeCurrency:"ADA",test:!1},{key:"etc",description:"Ethereum Classic Mainnet",uri:"https://ethereumclassic.network",nativeCurrency:"ETC",test:!1},{key:"eth",description:"Ethereum Mainnet",uri:"https://mainnet.infura.io/v3/${INFURA_API_KEY}",nativeCurrency:"ETH",test:!1},{key:"kot",description:"Ethereum Classic Testnet Kotti",uri:"https://www.ethercluster.com/kotti",nativeCurrency:"ETC",test:!0},{key:"kov",description:"Ethereum Testnet Kovan",uri:"https://kovan.poa.network",nativeCurrency:"ETH",test:!0},{key:"ogor",description:"Optimistic Ethereum Testnet Goerli",uri:"https://www.ethercluster.com/goerli",nativeCurrency:"ETH",test:!0},{key:"pet",description:"Private Ethereum Testnet",uri:"http://localhost:8545",nativeCurrency:"ETH",test:!0},{key:"rin",description:"Ethereum Testnet Rinkeby",uri:"https://rinkeby.infura.io/v3/${INFURA_API_KEY}",nativeCurrency:"ETH",test:!0},{key:"rop",description:"Ethereum Testnet Ropsten",uri:"https://ropsten.infura.io/v3/${INFURA_API_KEY}",nativeCurrency:"ETH",test:!0}];return c.map((c=>$glowdb.transaction("network","readwrite").objectStore("network").put(c)))},countObjectStore(c,_){return $glowdbPromise.then((C=>C.transaction(c).objectStore(c).count(_).then((c=>c))))},addResourceType:KC,listResourceTypes:iC,saveAddress:kC,findAddress:hC,listAddresses:ZC,saveContact:OC,findContact:XC,listContacts:JC,saveIdentity:uC,findIdentity:wC,listIdentities:jC,saveResource:dC,findResource:gC,listResources:SC,saveAsset:lC,deleteAsset:bC,listAssets:mC,listAssetEntities:IC},globalThis.randomUUID=function(){var c=(new Date).getTime(),_="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(_){var C=(c+16*Math.random())%16|0;return c=Math.floor(c/16),("x"==_?C:3&C|8).toString(16)}));return _};const MC=_i("%glowdb"),$C=_i("##inline-host-declaration"),xC=new _ScmString(_z("CcJcOcRcEcDcOc7cKcLcVQGcJcOcRcZc6cHcUcYcHcUC`CJRcFcOcRcXcGJ^-CcFcRcQcVcWCc^CcRcScHcQc'c%OCcGcHcOcHcWcHc'c%OCcZcUcDcSOCcXcQcZcUcDcSCc`C`CcUcHcTcXcLcUcHKJcLcGcEJL^-CKKLC`aCc^-Ce.cJcOcRcEcDcOc7cKcLcVQGcJcOcRcZcGcEC`CcIcDcOcVcH^-Ce.cJcOcRcEcDcOc7cKcLcVQGcJcOcRcZcGcEc3cUcRcPcLcVcHC`CcIcDcOcVcH^-Ce.cFcRcQcVcWCcGcEc1cDcPcHC`CJcJcOcRcZJ-Ce.cFcRcQcVcWCcYcHcUcVcLcRcQC`CWUCRRcYcHcUcVcLcRcQcVCcVcWcDcUcWCcDcWCT--Ce.cFcRcQcVcWCcHcQcWcL}dWcHcVC`Cc>c@^--Ce.cFcRcQcVcRcOcHQcOcRcJKJc/cRcDcGcLcQcJCc'c%JL--CCcFcRcQcVcWCcGcEC`CcRcScHcQc'c%KcGcEc1cDcPcHOCcYcHcUcVcLcRcQOCc^-Ce-cXcScJcUcDcGcHKcGcEOCcRcOcGc9cHcUcVcLcRcQOCcQcHcZc9cHcUcVcLcRcQOCcWcUcDcQcVcDcFcWcLcRcQLCc^-Ce/cFcRcQcVcRcOcHQcOcRcJKJc8cScJcUcDcGcLcQcJCc'c%JL-Ce/cHcQcWcL}dWcHcVQcPcDcSKcHC`aCc^-Ce1cFcRcQcVcRcOcHQcOcRcJKJc(cQcWcLcWc!JOCcHL-Ce0cLcICKDcGcEQcRcEcMcHcFcWc6cWcRcUcHc1cDcPcHcVQcFcRcQcWcDcLcQcVKcHLLCc^-Ce3cGcEQcFcUcHcDcWcHc2cEcMcHcFcWc6cWcRcUcHKcHL-Ce0c`-Ce/c`L-Ce.RRCcGcEQcGcHcOcHcWcHc2cEcMcHcFcWc6cWcRcUcHKJcQcHcWcZcRcUcNJL-Ce/cFcRcQcVcRcOcHQcOcRcJKJc8cScJcUcDcGcLcQcJCc1cHcWcZcRcUcNJL-Ce.cLcICKDcGcEQcRcEcMcHcFcWc6cWcRcUcHc1cDcPcHcVQcFcRcQcWcDcLcQcVKJcQcHcWcZcRcUcNJLLCc^-Ce0cOcHcWCcRcEcMcHcFcWc6cWcRcUcHC`CcGcEQcFcUcHcDcWcHc2cEcMcHcFcWc6cWcRcUcHKEcQcHcWcZcRcUcNEOCc^CcNcHc!c3cDcWcK]CEcNcHc!ECc`L^-Ce1cRcEcMcHcFcWc6cWcRcUcHQcFcUcHcDcWcHc,cQcGcHc[KEcGcHcVcFcUcLcScWcLcRcQEOCEcGcHcVcFcUcLcScWcLcRcQEOCc^CcXcQcLcTcXcH]CcWcUcXcHCc`L^-Ce1cRcEcMcHcFcWc6cWcRcUcHQcFcUcHcDcWcHc,cQcGcHc[KEcXcUcLEOCEcXcUcLEOCc^CcXcQcLcTcXcH]CcWcUcXcHCc`L^-Ce.c`-Ce.--Ce.RRCcFcRcQcVcWCcFcUc!cScWC`CcGcEQcGcHcOcHcWcHc2cEcMcHcFcWc6cWcRcUcHKJcFcUc!cScWcRJL-Ce.RRCcJcOcRcEcDcOc7cKcLcVQGcFC`CcFcUc!cScW^--Ce/RRCcFcRcQcVcRcOcHQcOcRcJKJc8cScJcUcDcGcLcQcJCc&cUc!cWcScRJL-Ce/cLcICKDcGcEQcRcEcMcHcFcWc6cWcRcUcHc1cDcPcHcVQcFcRcQcWcDcLcQcVKJcFcUc!cScWcRJLLCc^-Ce1cOcHcWCcRcEcMcHcFcWc6cWcRcUcHC`CcGcEQcFcUcHcDcWcHc2cEcMcHcFcWc6cWcRcUcHKEcFcUc!cScWcREOCc^CcNcHc!c3cDcWcK]CEcVc!cPcEcRcOECc`L^-Ce/c`-Ce/--Ce/cLcICKcGcEQcRcEcMcHcFcWc6cWcRcUcHc1cDcPcHcVQcFcRcQcWcDcLcQcVKJcDcGcGcUcHcVcVJLLCc^-Ce0cGcEQcGcHcOcHcWcHc2cEcMcHcFcWc6cWcRcUcHKJcDcGcGcUcHcVcVJL-Ce1c`-Ce/cLcICKDcGcEQcRcEcMcHcFcWc6cWcRcUcHc1cDcPcHcVQcFcRcQcWcDcLcQcVKJcDcGcGcUcHcVcVJLLCc^-Ce1cFcRcQcVcRcOcHQcOcRcJKJc8cScJcUcDcGcLcQcJCc$cGcGcUcHcVcVJL-Ce1cOcHcWCcRcEcMcHcFcWc6cWcRcUcHC`CcGcEQcFcUcHcDcWcHc2cEcMcHcFcWc6cWcRcUcHKEcDcGcGcUcHcVcVEOCc^CcNcHc!c3cDcWcK]CEcLcGECc`L^-Ce/c`-Ce/--Ce/cLcICKcGcEQcRcEcMcHcFcWc6cWcRcUcHc1cDcPcHcVQcFcRcQcWcDcLcQcVKJcDcVcVcHcWJLLCc^-Ce1cGcEQcGcHcOcHcWcHc2cEcMcHcFcWc6cWcRcUcHKJcDcVcVcHcWJL-Ce1c`-Ce/cLcICKDcGcEQcRcEcMcHcFcWc6cWcRcUcHc1cDcPcHcVQcFcRcQcWcDcLcQcVKJcDcVcVcHcWJLLCc^-Ce/-Ce1cFcRcQcVcRcOcHQcOcRcJKJc8cScJcUcDcGcLcQcJCc$cVcVcHcWJL-Ce/-Ce1cOcHcWCcRcEcMcHcFcWc6cWcRcUcHC`CcGcEQcFcUcHcDcWcHc2cEcMcHcFcWc6cWcRcUcHKEcDcVcVcHcWEOCc^CcNcHc!c3cDcWcK]Cc>EcRcZcQcHcUEOCEcDcGcGcUcHcVcVEc@Cc`L^-Ce/-Ce1cRcEcMcHcFcWc6cWcRcUcHQcFcUcHcDcWcHc,cQcGcHc[KEcRcZcQcHcUEOCEcRcZcQcHcUEOCc^CcXcQcLcTcXcH]CcIcDcOcVcHCc`L^-Ce1cRcEcMcHcFcWc6cWcRcUcHQcFcUcHcDcWcHc,cQcGcHc[KEcDcGcGcUcHcVcVEOCEcDcGcGcUcHcVcVEOCc^CcXcQcLcTcXcH]CcIcDcOcVcHCc`L^-Ce/-Ce/c`-Ce/--Ce/cFcRcQcVcRcOcHQcOcRcJKJc8cScJcUcDcGcLcQcJCc5cHcVcRcXcUcFcHCc7c!cScHJL-Ce/cLcICKDcGcEQcRcEcMcHcFcWc6cWcRcUcHc1cDcPcHcVQcFcRcQcWcDcLcQcVKJcUcHcVcRcXcUcFcHc7c!cScHJLLCc^-Ce1cFcRcQcVcRcOcHQcOcRcJKJc8cScJcUcDcGcLcQcJCc5cHcVcRcXcUcFcHCc7c!cScHJL-Ce1cOcHcWCcRcEcMcHcFcWc6cWcRcUcHC`CcGcEQcFcUcHcDcWcHc2cEcMcHcFcWc6cWcRcUcHKEcUcHcVcRcXcUcFcHc7c!cScHEOCc^CcNcHc!c3cDcWcK]CEcQcDcPcHECc`L^-Ce/c`-Ce/--Ce/cLcICKcGcEQcRcEcMcHcFcWc6cWcRcUcHc1cDcPcHcVQcFcRcQcWcDcLcQcVKJcUcHcVcRcXcUcFcHJLLCc^-Ce2cGcEQcGcHcOcHcWcHc2cEcMcHcFcWc6cWcRcUcHKJcUcHcVcRcXcUcFcHJL-Ce1c`-Ce/cLcICKDcGcEQcRcEcMcHcFcWc6cWcRcUcHc1cDcPcHcVQcFcRcQcWcDcLcQcVKJcUcHcVcRcXcUcFcHJLLCc^-Ce5cFcRcQcVcRcOcHQcOcRcJKJc8cScJcUcDcGcLcQcJCc5cHcVcRcXcUcFcHJL-Ce1cOcHcWCcRcEcMcHcFcWc6cWcRcUcHC`CcGcEQcFcUcHcDcWcHc2cEcMcHcFcWc6cWcRcUcHKEcUcHcVcRcXcUcFcHEOCc^CcNcHc!c3cDcWcK]Cc>EcQcDcPcHEOCJcQcHcWcZcRcUcNJc@Cc`L^-Ce/c`-Ce/--Ce/RRCcGcEQcGcHcOcHcWcHc2cEcMcHcFcWc6cWcRcUcHKJcLcGcHcQcWcLcWc!JL-Ce/cFcRcQcVcRcOcHQcOcRcJKJc8cScJcUcDcGcLcQcJCc,cGcHcQcWcLcWc!JL-Ce/cLcICKDcGcEQcRcEcMcHcFcWc6cWcRcUcHc1cDcPcHcVQcFcRcQcWcDcLcQcVKJcLcGcHcQcWcLcWc!JLLCc^-Ce1cOcHcWCcRcEcMcHcFcWc6cWcRcUcHC`CcGcEQcFcUcHcDcWcHc2cEcMcHcFcWc6cWcRcUcHKEcLcGcHcQcWcLcWc!EOCc^CcNcHc!c3cDcWcK]CEcQcDcPcHECc`L^-Ce/c`-Ce/--Ce/RRCcGcEQcGcHcOcHcWcHc2cEcMcHcFcWc6cWcRcUcHKJcFcRcQcWcDcFcWJL-Ce/cLcICKDcGcEQcRcEcMcHcFcWc6cWcRcUcHc1cDcPcHcVQcFcRcQcWcDcLcQcVKJcFcRcQcWcDcFcWJLLCc^-Ce1cFcRcQcVcRcOcHQcOcRcJKJc8cScJcUcDcGcLcQcJCcFcRcQcWcDcFcWJL-Ce1cOcHcWCcRcEcMcHcFcWc6cWcRcUcHC`CcGcEQcFcUcHcDcWcHc2cEcMcHcFcWc6cWcRcUcHKEcFcRcQcWcDcFcWEOCc^CcNcHc!c3cDcWcK]CEcLcGECc`L^-Ce/c`--Ce-c`-CCc`L--CCGcJcOcRcZcGcEc3cUcRcPcLcVcHC`CcGcE^--CCcGcEQcWcKcHcQKKcGLC`aCc^-Ce-cFcRcQcVcRcOcHQcOcRcJKJcIcLcQcDcOcOc!Cc/cRcDcGcHcGCc'c%JL-Ce-cJcOcRcEcDcOc7cKcLcVQGcJcOcRcZcGcEC`CcG-Ce-c2cEcMcHcFcWQcDcVcVcLcJcQKcJcOcRcEcDcOc7cKcLcVQGcJcOcRcZcGcEOCcPcRcGcXcOcHQcHc[cScRcUcWcVL^-Ce-c`L^-c`LKL--")),NC=_i("glowdb"),BC=_i("store.add"),yC=_i("store.put"),TC=_i("store.get"),YC=_i("ensureNetwork"),fC=_i("%network-add/put"),zC=_i("network.add"),vC=_i("network.put"),AC=_i("network.get"),qC=_i("add-networks"),cW=_i("list-networks"),_W=new _ScmString(_z("-cIcXcQcFcWcLcRcQCcDcGcGc5cHcVcRcXcUcFcHc7c!cScHKcUcWLCc^-CCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcUcHcVcRcXcUcFcHc7c!cScHJOCJcUcHcDcGcZcUcLcWcHJLQcRcEcMcHcFcWc6cWcRcUcHKJcUcHcVcRcXcUcFcHc7c!cScHJL-Ce-cFcRcQcVcWCcRcEcMC`CcWcUcDcQcVQcScXcWKcUcWL-CCc`L-c`--cDcGcGc5cHcVcRcXcUcFcHc7c!cScHKc^-CCcQcDcPcH]CEc1cDcWcLcYcHEO-CCcGcHcVcFcUcLcScWcLcRcQ]CEc7cKcHCc1cDcWcLcYcHCc&cUc!cScWcRc&cXcUcUcHcQcFc!CcRcICcDCcQcHcWcZcRcUcNEO-CCcFcRcQcVcWcUcXcFcW]Cc^c`-c`L--cDcGcGc5cHcVcRcXcUcFcHc7c!cScHKc^-CCcQcDcPcH]CEc(c5c&USEO-CCcGcHcVcFcUcLcScWcLcRcQ]CEc$cQCc(c5c&USCc&cRcQcWcUcDcFcWEO-CCcFcRcQcVcWcUcXcFcW]Cc^CcDcGcGcUcHcVcV]CEc7cKcHCcDcGcGcUcHcVcVCcRcICcWcKcLcVCcFcRcQcWcUcDcFcWCcLcQCJSc[JCcIcRcUcPcDcWEc`-c`L---cIcXcQcFcWcLcRcQCcOcLcVcWc5cHcVcRcXcUcFcHc7c!cScHcVKLCc^-CCcUcHcWcXcUcQCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcUcHcVcRcXcUcFcHc7c!cScHJLQcRcEcMcHcFcWc6cWcRcUcHKJcUcHcVcRcXcUcFcHc7c!cScHJL-Ce-cUcHcWcXcUcQCcWcUcDcQcVQcJcHcWc$cOcOKL^-CCc`L-c`---cIcXcQcFcWcLcRcQCcVcDcYcHc&cRcQcWcDcFcWKcFcW}dWLCc^-CCcUcHcWcXcUcQCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcFcRcQcWcDcFcWJOCJcUcHcDcGcZcUcLcWcHJLQcRcEcMcHcFcWc6cWcRcUcHKJcFcRcQcWcDcFcWJL-Ce-cUcHcWcXcUcQCcWcUcDcQcVQcScXcWKcFcW}dWL-CCc`L-c`-cIcXcQcFcWcLcRcQCcGcHcOcHcWcHc&cRcQcWcDcFcWKcFcW}dWLCc^-CCcUcHcWcXcUcQCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcFcRcQcWcDcFcWJOCJcUcHcDcGcZcUcLcWcHJLQcRcEcMcHcFcWc6cWcRcUcHKJcFcRcQcWcDcFcWJL-Ce-cFcRcQcVcWCcRcEcMC`CcWcUcDcQcVQcGcHcOcHcWcHKcFcW}dWQcLcGL-Ce-cUcHcWcXcUcQCcFcW}dW-CCc`L-c`-cIcXcQcFcWcLcRcQCcOcLcVcWc&cRcQcWcDcFcWcVKLCc^-CCcUcHcWcXcUcQCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcFcRcQcWcDcFcWJLQcRcEcMcHcFcWc6cWcRcUcHKJcFcRcQcWcDcFcWJL-Ce-cUcHcWcXcUcQCcWcUcDcQcVQcJcHcWc$cOcOKL^-CCc`L-c`--RRCcDcVc!cQcFCcIcXcQcFcWcLcRcQCcHcQcVcXcUcHc&cRcQcWcDcFcWc(cQcWcLcWc!KcFcWLCc^-RRCCCcFcRcQcVcWCcFcRcQcWcDcFcWCKcWc!cScHcRcICcFcWC```CJcVcWcUcLcQcJJLCbCcDcZcDcLcWCcIcLcQcGc&cRcQcWcDcFcWKcFcWLC]CcFcW^-RRCCCcFcRcQcWcDcFcWQcRcZcQcHcUC`CKcWc!cScHcRcICcFcRcQcWcDcFcWQL--RRCc`-cIcXcQcFcWcLcRcQCcIcLcQcGc&cRcQcWcDcFcWKcLcGLCc^-CCcLcICKcWc!cScHcRcICcLcGC```CJcRcEcMcHcFcWJLCcUcHcWcXcUcQCcLcG^-CCcUcHcWcXcUcQCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcFcRcQcWcDcFcWJLQcRcEcMcHcFcWc6cWcRcUcHKJcFcRcQcWcDcFcWJL-Ce-cUcHcWcXcUcQCcWcUcDcQcVQcJcHcWKcLcGL^-CCc`L-c`-cIcXcQcFcWcLcRcQCcVcDcYcHc5cHcVcRcXcUcFcHKcFcW}dWLCc^-CCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcUcHcVcRcXcUcFcHJOCJcUcHcDcGcZcUcLcWcHJLQcRcEcMcHcFcWc6cWcRcUcHKJcUcHcVcRcXcUcFcHJL-Ce-cFcRcQcVcWCcRcEcMC`CcWcUcDcQcVQcScXcWKcFcW}dWL-CCc`L-c`-cIcXcQcFcWcLcRcQCcOcLcVcWc5cHcVcRcXcUcFcHcVKLCc^-CCcUcHcWcXcUcQCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcUcHcVcRcXcUcFcHJLQcRcEcMcHcFcWc6cWcRcUcHKJcUcHcVcRcXcUcFcHJL-Ce-cUcHcWcXcUcQCcWcUcDcQcVQcJcHcWc$cOcOKL^-CCc`L-c`-cIcXcQcFcWcLcRcQCcIcLcQcGc5cHcVcRcXcUcFcHKcLcGLCc^-CCcLcICKcWc!cScHcRcICcLcGC```CJcRcEcMcHcFcWJLCcUcHcWcXcUcQCcLcG^-CCcUcHcWcXcUcQCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcUcHcVcRcXcUcFcHJLQcRcEcMcHcFcWc6cWcRcUcHKJcUcHcVcRcXcUcFcHJL-Ce-cUcHcWcXcUcQCcWcUcDcQcVQcJcHcWKcLcGL^-CCc`L-c`-cIcXcQcFcWcLcRcQCcVcDcYcHc,cGcHcQcWcLcWc!KcFcW}dWLCc^-CCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcLcGcHcQcWcLcWc!JOCJcUcHcDcGcZcUcLcWcHJLQcRcEcMcHcFcWc6cWcRcUcHKJcLcGcHcQcWcLcWc!JL-Ce-cFcRcQcVcWCcRcEcMC`CcWcUcDcQcVQcScXcWKcFcW}dWL-CCc`L-c`-cIcXcQcFcWcLcRcQCcOcLcVcWc,cGcHcQcWcL}dWcHcVKLCc^-CCcUcHcWcXcUcQCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcLcGcHcQcWcLcWc!JLQcRcEcMcHcFcWc6cWcRcUcHKJcLcGcHcQcWcLcWc!JL-Ce-cUcHcWcXcUcQCcWcUcDcQcVQcJcHcWc$cOcOKL^-CCc`L-c`-cIcXcQcFcWcLcRcQCcIcLcQcGc,cGcHcQcWcLcWc!KcLcGLCc^-CCcLcICKcWc!cScHcRcICcLcGC```CJcRcEcMcHcFcWJLCcUcHcWcXcUcQCcLcG^-CCcUcHcWcXcUcQCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcLcGcHcQcWcLcWc!JLQcRcEcMcHcFcWc6cWcRcUcHKJcLcGcHcQcWcLcWc!JL-Ce-cUcHcWcXcUcQCcWcUcDcQcVQcJcHcWKcLcGL^-CCc`L-c`-cIcXcQcFcWcLcRcQCcVcDcYcHc$cVcVcHcWKcFcW}dWLCc^-CCcUcHcWcXcUcQCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcDcVcVcHcWJOCJcUcHcDcGcZcUcLcWcHJLQcRcEcMcHcFcWc6cWcRcUcHKJcDcVcVcHcWJL-Ce-cFcRcQcVcWCcRcEcMC`CcWcUcDcQcVQcScXcWKcFcW}dWL-CCc`L-c`-cIcXcQcFcWcLcRcQCcGcHcOcHcWcHc$cVcVcHcWKcFcW}dWLCc^-CCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcDcVcVC`Cc^-Ce/cRcZcQcHcU]CKcWc!cScHcRcICcFcW}dWQcRcZcQcHcUC```CJcVcWcUcLcQcJJLCbCcFcW}dWQcRcZcQcHcUC]CcFcW}dWQcRcZcQcHcUQcLcGO-Ce/cDcGcGcUcHcVcV]CKcWc!cScHcRcICcFcW}dWQcDcGcGcUcHcVcVC```CJcVcWcUcLcQcJJLCbCcFcW}dWQcDcGcGcUcHcVcVC]CcFcW}dWQcDcGcGcUcHcVcVQcLcG-Ce-c`-Ce-cFcRcQcVcWCcNcHc!C`Cc>cDcVcVQcRcZcQcHcUOCcDcVcVQcDcGcGcUcHcVcVc@^--Ce-cFcRcQcVcRcOcHQcOcRcJKJcWcUc!cLcQcJCcWcRCcGcHcOcHcWcHCOJOCcDcVcVOCcNcHc!L-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcDcVcVcHcWJOCJcUcHcDcGcZcUcLcWcHJLQcRcEcMcHcFcWc6cWcRcUcHKJcDcVcVcHcWJL-Ce-cUcHcWcXcUcQCcWcUcDcQcVQcGcHcOcHcWcHKcNcHc!L-CCc`L-c`--cIcXcQcFcWcLcRcQCcOcLcVcWc$cVcVcHcWcVKLCc^-CCcUcHcWcXcUcQCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcDcVcVcHcWJLQcRcEcMcHcFcWc6cWcRcUcHKJcDcVcVcHcWJL-Ce-cUcHcWcXcUcQCcWcUcDcQcVQcJcHcWc$cOcOKL^-CCc`L-c`---cIcXcQcFcWcLcRcQCcIcLcQcGc$cVcVcHcWKcLcGLCc^-CCcLcICKcWc!cScHcRcICcLcGC```CJcRcEcMcHcFcWJLCcUcHcWcXcUcQCcLcG^-CCcUcHcWcXcUcQCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcDcVcVcHcWJLQcRcEcMcHcFcWc6cWcRcUcHKJcDcVcVcHcWJL-Ce-cUcHcWcXcUcQCcWcUcDcQcVQcJcHcWKcLcGL^-CCc`L-c`--cDcVc!cQcFCcIcXcQcFcWcLcRcQCcIcLcQcGc$cVcVcHcWc(cQcWcLcWc!KcDcVLCc^--CCcDcVc!cQcFCcIcXcQcFcWcLcRcQCcJcLcYcUCKcJcLcYcHOCcWcKcLcQcJLCc^-Ce-cFcRcQcVcWCcJc7cKcLcQcJC`CKcWc!cScHcRcICcWcKcLcQcJC```CJcVcWcUcLcQcJJLCbCcDcZcDcLcWCcJcLcYcHKcWcKcLcQcJLC]CcWcKcLcQcJ^-Ce-cUcHcWcXcUcQCcJc7cKcLcQcJ^-CCc`--CCcFcRcQcVcWCcDcVcVC`CcDcZcDcLcWCcJcLcYcUKcIcLcQcGc$cVcVcHcWOCcDcVL^-CCcDcVcVQcDcGcGcUcHcVcV`CcDcZcDcLcWCcJcLcYcUKcIcLcQcGc$cGcGcUcHcVcVOCcDcVcVQcDcGcGcUcHcVcVL-CCcDcVcVQcRcZcQcHcUC`CcDcZcDcLcWCcJcLcYcUKcIcLcQcGc&cRcQcWcDcFcWOCcDcVcVQcRcZcQcHcUL--CCcUcHcWcXcUcQCcDcVcV^--c`--cDcVc!cQcFCcIcXcQcFcWcLcRcQCcOcLcVcWc$cVcVcHcWc(cQcWcL}dWcHcVKLCc^-CCcFcRcQcVcWCcQcHcZc(cQcVC`Cc>c@^-CCcFcRcQcVcWCcHcQcVC`CcDcZcDcLcWCcOcLcVcWc$cVcVcHcWcVKL^--CCcIcRcUCKcFcRcQcVcWCcL}dWcQCcHcQcVLCc^-Ce-cFcRcQcVcWCcHcQC`CcDcZcDcLcWCcIcLcQcGc$cVcVcHcWc(cQcWcLcWc!KcHcQcVc>cLc@L-Ce-cQcHcZc(cQcVQcScXcVcKKcHcQL-CCc`--CCcUcHcWcXcUcQCcQcHcZc(cQcV^-c`-cIcXcQcFcWcLcRcQCcVcDcYcHc$cGcGcUcHcVcVKcFcW}dWLCc^-CCcUcHcWcXcUcQCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcDcGcGcUcHcVcVJOCJcUcHcDcGcZcUcLcWcHJLQcRcEcMcHcFcWc6cWcRcUcHKJcDcGcGcUcHcVcVJL-Ce-cFcRcQcVcWCcRcEcMC`CcWcUcDcQcVQcScXcWKcFcW}dWL-Ce-cUcHcWcXcUcQCcFcW}dW-CCc`L-c`-cIcXcQcFcWcLcRcQCcGcHcOcHcWcHc$cGcGcUcHcVcVKcFcW}dWLCc^-CCcUcHcWcXcUcQCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcDcGcGcUcHcVcVJOCJcUcHcDcGcZcUcLcWcHJLQcRcEcMcHcFcWc6cWcRcUcHKJcDcGcGcUcHcVcVJL-Ce-cFcRcQcVcWCcRcEcMC`CcWcUcDcQcVQcGcHcOcHcWcHKcFcW}dWQcLcGL-Ce-cUcHcWcXcUcQCcFcW}dW-CCc`L-c`-cIcXcQcFcWcLcRcQCcOcLcVcWc$cGcGcUcHcVcVcHcVKLCc^-CCcUcHcWcXcUcQCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcDcGcGcUcHcVcVJLQcRcEcMcHcFcWc6cWcRcUcHKJcDcGcGcUcHcVcVJL-Ce-cUcHcWcXcUcQCcWcUcDcQcVQcJcHcWc$cOcOKL^-CCc`L-c`-cIcXcQcFcWcLcRcQCcIcLcQcGc$cGcGcUcHcVcVKcLcGLCc^-CCcLcICKcWc!cScHcRcICcLcGC```CJcRcEcMcHcFcWJLCcUcHcWcXcUcQCcLcG^-CCcUcHcWcXcUcQCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`aCc^-Ce-cFcRcQcVcWCcWcUcDcQcVC`CcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcDcGcGcUcHcVcVJLQcRcEcMcHcFcWc6cWcRcUcHKJcDcGcGcUcHcVcVJL-Ce-cUcHcWcXcUcQCcWcUcDcQcVQcJcHcWKcLcGL^-CCc`L-c`-")),CW=_i("##inline-host-statement"),WW=new _ScmString(_z("cJcOcRcEcDcOc7cKcLcVQGcJcOcRcZcGcEQcDcGcGc1cHcWcZcRcUcNcVC`Cc#cVcFcPUcKcRcVcWc#Kc#Tc#L^")),eW=new _ScmString(_z("CcPcRcGcXcOcHQcHc[cScRcUcWcVC`Cc^-CCcOcLcVcWc1cHcWcZcRcUcNcV]CKLC`aCc^-CCCcUcHcWcXcUcQCGcJcOcRcZcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcQcHcWcZcRcUcNJLQcRcEcMcHcFcWc6cWcRcUcHKJcQcHcWcZcRcUcNJLQcJcHcWc$cOcOKL^-CCc`O--CCcDcGcGc1cHcWcZcRcUcNcVKLCc^-Ce-cFcRcQcVcWCcQcZcVC`Cc>c^EcNcHc!E]EcFcHcGEO-Ce;EcGcHcVcFcUcLcScWcLcRcQE]Ec&cDcUcGcDcQcRCc(c9c0Cc'cHcYcQcHcWEOEcXcUcLE]EcKcWcWcScV]RRcUcScFPcHcYcPQcScRcUcWcDcOQcGcHcYQcFcDcUcGcDcQcRQcRcUcJREO-Ce;EcQcDcWcLcYcHc&cXcUcUcHcQcFc!E]Ec$c'c$EO-Ce;EcWcHcVcWE]cIcDcOcVcHc`O-Ce:c^EcNcHc!E]EcHcWcFEOEcGcHcVcFcUcLcScWcLcRcQE]Ec(cWcKcHcUcHcXcPCc&cOcDcVcVcLcFCc0cDcLcQcQcHcWEOEcXcUcLE]EcKcWcWcScV]RRcHcWcKcHcUcHcXcPcFcOcDcVcVcLcFQcQcHcWcZcRcUcNEO-Ce;EcQcDcWcLcYcHc&cXcUcUcHcQcFc!E]Ec(c7c&EOEcWcHcVcWE]cIcDcOcVcHc`O-Ce:c^EcNcHc!E]EcHcWcKEOEcGcHcVcFcUcLcScWcLcRcQE]Ec(cWcKcHcUcHcXcPCc0cDcLcQcQcHcWEOEcXcUcLE]EcKcWcWcScV]RRcPcDcLcQcQcHcWQcLcQcIcXcUcDQcLcRRcYVRGc^c,c1c)c8c5c$cBc$c3c,cBc.c(c<c`EO-Ce;EcQcDcWcLcYcHc&cXcUcUcHcQcFc!E]Ec(c7c+EOEcWcHcVcWE]cIcDcOcVcHc`O-Ce:c^EcNcHc!E]EcNcRcWEOEcGcHcVcFcUcLcScWcLcRcQE]Ec(cWcKcHcUcHcXcPCc&cOcDcVcVcLcFCc7cHcVcWcQcHcWCc.cRcWcWcLEOEcXcUcLE]EcKcWcWcScV]RRcZe,QcHcWcKcHcUcFcOcXcVcWcHcUQcFcRcPRcNcRcWcWcLEOEcQcDcWcLcYcHc&cXcUcUcHcQcFc!E]Ec(c7c&EOEcWcHcVcWE]cWcUcXcHc`O-Ce:c^EcNcHc!E]EcNcRcYEOEcGcHcVcFcUcLcScWcLcRcQE]Ec(cWcKcHcUcHcXcPCc7cHcVcWcQcHcWCc.cRcYcDcQEOEcXcUcLE]EcKcWcWcScV]RRcNcRcYcDcQQcScRcDQcQcHcWcZcRcUcNEOEcQcDcWcLcYcHc&cXcUcUcHcQcFc!E]Ec(c7c+EOEcWcHcVcWE]cWcUcXcHc`O-Ce:c^EcNcHc!E]EcRcJcRcUEOEcGcHcVcFcUcLcScWcLcRcQE]Ec2cScWcLcPcLcVcWcLcFCc(cWcKcHcUcHcXcPCc7cHcVcWcQcHcWCc*cRcHcUcOcLEOEcXcUcLE]EcKcWcWcScV]RRcZe,QcHcWcKcHcUcFcOcXcVcWcHcUQcFcRcPRcJcRcHcUcOcLEOEcQcDcWcLcYcHc&cXcUcUcHcQcFc!E]Ec(c7c+EOEcWcHcVcWE]cWcUcXcHc`O-Ce:c^EcNcHc!E]EcScHcWEOEcGcHcVcFcUcLcScWcLcRcQE]Ec3cUcLcYcDcWcHCc(cWcKcHcUcHcXcPCc7cHcVcWcQcHcWEOEcXcUcLE]EcKcWcWcS]RRcOcRcFcDcOcKcRcVcW][XWXEOEcQcDcWcLcYcHc&cXcUcUcHcQcFc!E]Ec(c7c+EOEcWcHcVcWE]cWcUcXcHc`O-Ce:c^EcNcHc!E]EcUcLcQEOEcGcHcVcFcUcLcScWcLcRcQE]Ec(cWcKcHcUcHcXcPCc7cHcVcWcQcHcWCc5cLcQcNcHcEc!EOEcXcUcLE]EcKcWcWcScV]RRcUcLcQcNcHcEc!QcLcQcIcXcUcDQcLcRRcYVRGc^c,c1c)c8c5c$cBc$c3c,cBc.c(c<c`EOEcQcDcWcLcYcHc&cXcUcUcHcQcFc!E]Ec(c7c+EOEcWcHcVcWE]cWcUcXcHc`O-Ce:c^EcNcHc!E]EcUcRcSEOEcGcHcVcFcUcLcScWcLcRcQE]Ec(cWcKcHcUcHcXcPCc7cHcVcWcQcHcWCc5cRcScVcWcHcQEOEcXcUcLE]EcKcWcWcScV]RRcUcRcScVcWcHcQQcLcQcIcXcUcDQcLcRRcYVRGc^c,c1c)c8c5c$cBc$c3c,cBc.c(c<c`EOEcQcDcWcLcYcHc&cXcUcUcHcQcFc!E]Ec(c7c+EOEcWcHcVcWE]cWcUcXcHc`Cc@-CCCcUcHcWcXcUcQCcQcZcVQcPcDcSKcQcZC`aCGcJcOcRcZcGcEQcWcUcDcQcVcDcFcWcLcRcQKJcQcHcWcZcRcUcNJOCJcUcHcDcGcZcUcLcWcHJLQcRcEcMcHcFcWc6cWcRcUcHKJcQcHcWcZcRcUcNJLQcScXcWKcQcZLL^-CCCc`O-CCcFcRcXcQcWc2cEcMcHcFcWc6cWcRcUcHKcVcWcRcUcHOCcTcXcHcUc!LCc^-CCCcUcHcWcXcUcQCGcJcOcRcZcGcEc3cUcRcPcLcVcHQcWcKcHcQKcGcEC`a-Ce.cGcEQcWcUcDcQcVcDcFcWcLcRcQKcVcWcRcUcHLQcRcEcMcHcFcWc6cWcRcUcHKcVcWcRcUcHLQcFcRcXcQcWKcTcXcHcUc!LQcWcKcHcQKcQC`aCcQLL-CCc`O-CCcDcGcGc5cHcVcRcXcUcFcHc7c!cScH]CcDcGcGc5cHcVcRcXcUcFcHc7c!cScHO-CCcOcLcVcWc5cHcVcRcXcUcFcHc7c!cScHcV]CcOcLcVcWc5cHcVcRcXcUcFcHc7c!cScHcVO-CCcVcDcYcHc$cGcGcUcHcVcV]CcVcDcYcHc$cGcGcUcHcVcVO-CCcIcLcQcGc$cGcGcUcHcVcV]CcIcLcQcGc$cGcGcUcHcVcVO-CCcOcLcVcWc$cGcGcUcHcVcVcHcV]CcOcLcVcWc$cGcGcUcHcVcVcHcVO-CCcVcDcYcHc&cRcQcWcDcFcW]CcVcDcYcHc&cRcQcWcDcFcWO-CCcIcLcQcGc&cRcQcWcDcFcW]CcIcLcQcGc&cRcQcWcDcFcWO-CCcOcLcVcWc&cRcQcWcDcFcWcV]CcOcLcVcWc&cRcQcWcDcFcWcVO-CCcVcDcYcHc,cGcHcQcWcLcWc!]CcVcDcYcHc,cGcHcQcWcLcWc!O-CCcIcLcQcGc,cGcHcQcWcLcWc!]CcIcLcQcGc,cGcHcQcWcLcWc!O-CCcOcLcVcWc,cGcHcQcWcL}dWcHcV]CcOcLcVcWc,cGcHcQcWcL}dWcHcVO-CCcVcDcYcHc5cHcVcRcXcUcFcH]CcVcDcYcHc5cHcVcRcXcUcFcHO-CCcIcLcQcGc5cHcVcRcXcUcFcH]CcIcLcQcGc5cHcVcRcXcUcFcHO-CCcOcLcVcWc5cHcVcRcXcUcFcHcV]CcOcLcVcWc5cHcVcRcXcUcFcHcVO-CCcVcDcYcHc$cVcVcHcW]CcVcDcYcHc$cVcVcHcWO-CCcGcHcOcHcWcHc$cVcVcHcW]CcGcHcOcHcWcHc$cVcVcHcWO-CCcOcLcVcWc$cVcVcHcWcV]CcOcLcVcWc$cVcVcHcWcVO-CCcOcLcVcWc$cVcVcHcWc(cQcWcL}dWcHcV]CcOcLcVcWc$cVcVcHcWc(cQcWcL}dWcHcVO--c`-")),tW=new _ScmString(_z("-cJcOcRcEcDcOc7cKcLcVQcUcDcQcGcRcPc8c8c,c'C`CcIcXcQcFcWcLcRcQCKLc^-Ce-cYcDcUCcGcWC`CcQcHcZCc'cDcWcHKLQcJcHcWc7cLcPcHKL^-Ce-cYcDcUCcXcXcLcGC`CJc[e1Pc[e-PWc[e,Pc!c[e,Pc[e5JQcUcHcScOcDcFcHKRc>c[c!c@RcJOCcIcXcQcFcWcLcRcQKcFLCc^-Ce1cYcDcUC}dW`CKcGcWCNCc0cDcWcKQcUcDcQcGcRcPKLMTYLHTYCc_CS^-Ce1cGcWC`Cc0cDcWcKQcIcOcRcRcUKcGcWRTYL^-Ce1cUcHcWcXcUcQCKcF``Jc[JCbCcUC]KcUISc[Vc_Sc[[LLQcWcRc6cWcUcLcQcJKTYL^-Ce-c`L^-Ce-cUcHcWcXcUcQCcXcXcLcG^-c`-")),HW=_i("##inline-host-expression"),QW=new _ScmString(_z("c#cKcRcVcWUcVcFcPc#KGcJcOcRcZcGcEL")),rW=_i("thread-sleep!"),RW=new _ScmString(_z("KcDcVc!cQcFCcIcXcQcFcWcLcRcQCKcBe,TOcBe,UOcBe,VLCc^-CcUcHcWcXcUcQCcBe,VQcWcUcDcQcVcDcFcWcLcRcQKcBe,ULQcRcEcMcHcFcWc6cWcRcUcHKcBe,TL^-c`L")),LW=new _Box(RW),UW=_i("##host-function-memoized"),nW=new _ScmString(_z("KcDcVc!cQcFCcIcXcQcFcWcLcRcQCKLCc^-CcUcHcWcXcUcQCcXcQcGcHcIcLcQcHcG^-c`L")),VW=new _Box(nW),sW=new _ScmString(_z("KcDcVc!cQcFCcIcXcQcFcWcLcRcQCKcBe,TOcBe,UOcBe,VOcBe,WOcBe,XLCc^-CcUcHcWcXcUcQCcBe,XQcWcUcDcQcVcDcFcWcLcRcQKcBe,WOEcUcHcDcGcZcUcLcWcHELQcRcEcMcHcFcWc6cWcRcUcHKcBe,VLQcDcGcGKcBe,TOcBe,UL^-c`L")),oW=new _Box(sW),EW=new _ScmString(_z("KcDcVc!cQcFCcIcXcQcFcWcLcRcQCKcBe,TOcBe,UOcBe,VOcBe,WOcBe,XLCc^-CcUcHcWcXcUcQCcBe,XQcWcUcDcQcVcDcFcWcLcRcQKcBe,WOEcUcHcDcGcZcUcLcWcHELQcRcEcMcHcFcWc6cWcRcUcHKcBe,VLQcScXcWKcBe,TOcBe,UL^-c`L")),aW=new _Box(EW),FW=new _ScmString(_z("KcDcVc!cQcFCcIcXcQcFcWcLcRcQCKcBe,TOcBe,UOcBe,VLCc^-CcUcHcWcXcUcQCcBe,VQcWcUcDcQcVcDcFcWcLcRcQKcBe,ULQcRcEcMcHcFcWc6cWcRcUcHKcBe,TL^-c`L")),DW=new _Box(FW),GW=_i("void?"),KW=new _ScmString(_z("KcDcVc!cQcFCcIcXcQcFcWcLcRcQCKcBe,TOcBe,ULCc^-CcUcHcWcXcUcQCcBe,UQcJcHcWKcBe,TL^-c`L")),iW=new _Box(KW),OW=new _ScmString(_z("KcDcVc!cQcFCcIcXcQcFcWcLcRcQCKcBe,TLCc^-CcUcHcWcXcUcQCcFcRcQcVcRcOcHQcOcRcJKcBe,TQcLcQcGcHc[c1cDcPcHcVL^-c`L")),JW=new _Box(OW),XW=new _ScmString(_z("KcDcVc!cQcFCcIcXcQcFcWcLcRcQCKcBe,TOcBe,ULCc^-CcUcHcWcXcUcQCcBe,UQcLcQcGcHc[KcBe,TL^-c`L")),dW=new _Box(XW),SW=_i("keyword->string"),gW=new _ScmString(_z("KcDcVc!cQcFCcIcXcQcFcWcLcRcQCKcBe,TOcBe,ULCc^-CcUcHcWcXcUcQCcBe,UQcJcHcWKcBe,TL^-c`L")),uW=new _Box(gW),jW=_i("##list?"),wW=_i("list?"),lW=_i("car"),bW=_i("cadr"),mW=_i("cadddr"),pW=_i("caddr"),PW=_i("cdr"),IW=new _ScmString(_z("c#cKcRcVcWUcVcFcPc#Kc^CcNcHc!]Cc#cVcFcPUcKcRcVcWc#Kc#Tc#LOCcGcHcVcFcUcLcScWcLcRcQ]Cc#cVcFcPUcKcRcVcWc#Kc#Uc#LOCcXcUcL]Cc#cVcFcPUcKcRcVcWc#Kc#Vc#LO-CCCcQcDcWcLcYcHc&cXcUcUcHcQcFc!]Cc#cVcFcPUcKcRcVcWc#Kc#Wc#LOCcWcHcVcW]Cc#cVcFcPUcKcRcVcWc#Kc#Xc#Lc`L")),kW=new _ScmString(_z("cFcRcQcVcRcOcHQcOcRcJKc#Tc#L")),ZW=new _ScmString(_z("cQcHcWcZcRcUcN")),hW=new _ScmString(_z("cQcHcWcZcRcUcN")),MW=_X(_X(new _ScmString(_z("cFcHcG")),_X(new _ScmString(_z("c&cDcUcGcDcQcRCc(c9c0Cc'cHcYcQcHcW")),_X(new _ScmString(_z("cKcWcWcScV]RRcUcScFPcHcYcPQcScRcUcWcDcOQcGcHcYQcFcDcUcGcDcQcRQcRcUcJR")),_X(new _ScmString(_z("c$c'c$")),_X(!1,null))))),_X(_X(new _ScmString(_z("cHcWcF")),_X(new _ScmString(_z("c(cWcKcHcUcHcXcPCc&cOcDcVcVcLcFCc0cDcLcQcQcHcW")),_X(new _ScmString(_z("cKcWcWcScV]RRcHcWcKcHcUcHcXcPcFcOcDcVcVcLcFQcQcHcWcZcRcUcN")),_X(new _ScmString(_z("c(c7c&")),_X(!1,null))))),_X(_X(new _ScmString(_z("cHcWcK")),_X(new _ScmString(_z("c(cWcKcHcUcHcXcPCc0cDcLcQcQcHcW")),_X(new _ScmString(_z("cKcWcWcScV]RRcPcDcLcQcQcHcWQcLcQcIcXcUcDQcLcRRcYVRGc^c,c1c)c8c5c$cBc$c3c,cBc.c(c<c`")),_X(new _ScmString(_z("c(c7c+")),_X(!1,null))))),_X(_X(new _ScmString(_z("cNcRcW")),_X(new _ScmString(_z("c(cWcKcHcUcHcXcPCc&cOcDcVcVcLcFCc7cHcVcWcQcHcWCc.cRcWcWcL")),_X(new _ScmString(_z("cKcWcWcScV]RRcZe,QcHcWcKcHcUcFcOcXcVcWcHcUQcFcRcPRcNcRcWcWcL")),_X(new _ScmString(_z("c(c7c&")),_X(!0,null))))),_X(_X(new _ScmString(_z("cNcRcY")),_X(new _ScmString(_z("c(cWcKcHcUcHcXcPCc7cHcVcWcQcHcWCc.cRcYcDcQ")),_X(new _ScmString(_z("cKcWcWcScV]RRcNcRcYcDcQQcScRcDQcQcHcWcZcRcUcN")),_X(new _ScmString(_z("c(c7c+")),_X(!0,null))))),_X(_X(new _ScmString(_z("cRcJcRcU")),_X(new _ScmString(_z("c2cScWcLcPcLcVcWcLcFCc(cWcKcHcUcHcXcPCc7cHcVcWcQcHcWCc*cRcHcUcOcL")),_X(new _ScmString(_z("cKcWcWcScV]RRcZe,QcHcWcKcHcUcFcOcXcVcWcHcUQcFcRcPRcJcRcHcUcOcL")),_X(new _ScmString(_z("c(c7c+")),_X(!0,null))))),_X(_X(new _ScmString(_z("cScHcW")),_X(new _ScmString(_z("c3cUcLcYcDcWcHCc(cWcKcHcUcHcXcPCc7cHcVcWcQcHcW")),_X(new _ScmString(_z("cKcWcWcS]RRcOcRcFcDcOcKcRcVcW][XWX")),_X(new _ScmString(_z("c(c7c+")),_X(!0,null))))),_X(_X(new _ScmString(_z("cUcLcQ")),_X(new _ScmString(_z("c(cWcKcHcUcHcXcPCc7cHcVcWcQcHcWCc5cLcQcNcHcEc!")),_X(new _ScmString(_z("cKcWcWcScV]RRcUcLcQcNcHcEc!QcLcQcIcXcUcDQcLcRRcYVRGc^c,c1c)c8c5c$cBc$c3c,cBc.c(c<c`")),_X(new _ScmString(_z("c(c7c+")),_X(!0,null))))),_X(_X(new _ScmString(_z("cUcRcS")),_X(new _ScmString(_z("c(cWcKcHcUcHcXcPCc7cHcVcWcQcHcWCc5cRcScVcWcHcQ")),_X(new _ScmString(_z("cKcWcWcScV]RRcUcRcScVcWcHcQQcLcQcIcXcUcDQcLcRRcYVRGc^c,c1c)c8c5c$cBc$c3c,cBc.c(c<c`")),_X(new _ScmString(_z("c(c7c+")),_X(!0,null))))),null))))))))),$W=_i("map"),xW=new _ScmString(_z("KcDcVc!cQcFCcIcXcQcFcWcLcRcQCKcBe,TLCc^-CcUcHcWcXcUcQCcBe,TQcJcHcWc$cOcOKL^-c`L")),NW=new _Box(xW),BW=new _ScmString(_z("cQcHcWcZcRcUcN")),yW=_i("store");_m(c=()=>0!==_n?_w(c):(_g[MC.r]=!1,_g[$C.r]===_e[$C.r]?_():C()),-1,_i("glowdb#"),!1,!0),_j(_=()=>W()),_j(C=()=>(_s[_t+1]=_r,_a=xC,++_t,_p(e))),_j(W=()=>(_g[NC.r]=t,_g["store"]=H,_g[BC.r]=Q,_g[yC.r]=r,_g[TC.r]=R,_g[YC.r]=L,_g[fC.r]=U,_g[zC.r]=n,_g[vC.r]=V,_g[AC.r]=s,_g[qC.r]=o,_g[cW.r]=E,_g[$C.r]===_e[$C.r]?a():F())),_j(e=()=>(_r=D,_n=1,_u(_g[$C.r],$C)())),_j(a=()=>G()),_j(F=()=>(_s[_t+1]=_r,_a=_W,++_t,_p(K))),_k(D=()=>(_r=_s[_t],--_t,W()),1,1),_j(G=()=>(_s[_t+1]=_g[qC.r],_g[CW.r]===_e[CW.r]?(++_t,i()):(++_t,O()))),_j(K=()=>(_r=J,_n=1,_u(_g[$C.r],$C)())),_j(i=()=>(globalThis.$glowdb.addNetworks=_scm2host(_s[_t]),_g[$C.r]===_e[$C.r]?X():d())),_j(O=()=>(_s[_t+1]=_r,_b=_s[_t],_a=WW,++_t,_p(S))),_k(J=()=>(_r=_s[_t],--_t,G()),1,1),_j(X=()=>_g[$C.r]===_e[$C.r]?g():u()),_j(d=()=>(_s[_t]=_r,_a=eW,_p(j))),_j(S=()=>(_r=w,_n=2,_u(_g[CW.r],CW)())),_j(g=()=>(_a=void 0,--_t,_r)),_j(u=()=>(_a=tW,_p(l))),_j(j=()=>(_r=b,_n=1,_u(_g[$C.r],$C)())),_k(w=()=>(_r=_s[_t],_g[$C.r]===_e[$C.r]?(--_t,X()):(--_t,d())),2,2),_j(l=()=>(_n=1,--_t,_u(_g[$C.r],$C)())),_k(b=()=>(_r=_s[_t],_g[$C.r]===_e[$C.r]?g():u()),1,1),_m(t=()=>0!==_n?_w(t):(_a=_g[MC.r],!1!==_a?m():p()),-1,NC,!1,!1),_j(m=()=>_r),_j(p=()=>_p(P)),_j(P=()=>_g[HW.r]===_e[HW.r]?I():k()),_j(I=()=>(_a=_host2scm($glowdb),!1!==_a?Z():h())),_j(k=()=>(_s[_t+1]=_r,_a=QW,++_t,_p(M))),_j(Z=()=>(_g[MC.r]=_a,_r)),_j(h=()=>(_s[_t+1]=_r,_a=_F(.01),++_t,_p($))),_j(M=()=>(_r=x,_n=1,_u(_g[HW.r],HW)())),_j($=()=>(_r=N,_n=1,_u(_g[rW.r],rW)())),_k(x=()=>(_r=_s[_t],!1!==_a?(--_t,Z()):(--_t,h())),1,1),_k(N=()=>(_r=_s[_t],--_t,_p(P)),1,1),_m(H=()=>1!==_n?_w(H):(_s[_t+1]=_r,_s[_t+2]=_a,_a=LW,_t+=2,_p(B)),-1,yW,!1,!1),_j(B=()=>(_r=y,_n=1,_u(_g[UW.r],UW)())),_k(y=()=>(_s[_t+1]=_a,_r=T,_n=0,++_t,_u(_g[NC.r],NC)()),2,1),_k(T=()=>(_c=_a,_b=_s[_t-1],_a=_s[_t-1],_r=_s[_t-2],_p(Y)),3,1),_j(Y=()=>(_n=3,_t-=3,_check_procedure(_s[_t+3])())),_m(Q=()=>{if(2===_n)_c=_absent_obj;else if(3!==_n)return _w(Q);return _c===_absent_obj?f():z()},-1,BC,!1,!1),_j(f=()=>(_s[_t+1]=_r,_s[_t+2]=_a,_s[_t+3]=_b,_a=VW,_t+=3,_p(v))),_j(z=()=>(_s[_t+1]=_a,_a=_c,++_t,A())),_j(v=()=>(_r=q,_n=1,_u(_g[UW.r],UW)())),_j(A=()=>(_s[_t+1]=_s[_t],_s[_t]=_b,_s[_t+2]=_s[_t+1],_s[_t+1]=_a,_s[_t+3]=_r,_a=oW,_t+=3,_p(cc))),_k(q=()=>(_r=Cc,_n=0,_check_procedure(_a)),3,1),_j(cc=()=>(_r=Wc,_n=1,_u(_g[UW.r],UW)())),_k(Cc=()=>(_b=_s[_t],_r=_s[_t-2],_s[_t-2]=_s[_t-1],_t-=2,A()),3,1),_k(Wc=()=>(_s[_t+1]=_a,_r=ec,_n=0,++_t,_u(_g[NC.r],NC)()),4,4),_k(ec=()=>(_c=_a,_b=_s[_t-2],_a=_s[_t-2],_r=_s[_t-1],_p(tc)),5,4),_j(tc=()=>(_n=5,_t-=3,_check_procedure(_s[_t+3])())),_m(r=()=>{if(2===_n)_c=void 0;else if(3!==_n)return _w(r);return _s[_t+1]=_b,_s[_t+2]=_c,_s[_t+3]=_r,_s[_t+4]=_a,_a=aW,_t+=4,_p(Hc)},-1,yC,!1,!1),_j(Hc=()=>(_r=Qc,_n=1,_u(_g[UW.r],UW)())),_k(Qc=()=>(_s[_t+1]=_a,_r=rc,_n=0,++_t,_u(_g[NC.r],NC)()),4,3),_k(rc=()=>(_c=_a,_b=_s[_t-1],_a=_s[_t-1],_r=_s[_t-2],_p(Rc)),5,3),_j(Rc=()=>(_n=5,_t-=3,_check_procedure(_s[_t+3])())),_m(R=()=>{if(2===_n)_c=void 0;else if(3!==_n)return _w(R);return _s[_t+1]=_r,_s[_t+2]=_b,_s[_t+3]=_c,_s[_t+4]=_a,_a=DW,_t+=4,_p(Lc)},-1,TC,!1,!1),_j(Lc=()=>(_r=Uc,_n=1,_u(_g[UW.r],UW)())),_k(Uc=()=>(_s[_t+1]=_a,_r=nc,_n=0,++_t,_u(_g[NC.r],NC)()),4,1),_k(nc=()=>(_c=_a,_b=_s[_t-1],_a=_s[_t-1],_r=Vc,_n=3,_t-=2,_check_procedure(_s[_t+2])()),5,1),_k(Vc=()=>(_s[_t+1]=_a,_a=_s[_t],_r=sc,_n=1,++_t,_u(_g["void?"],GW)()),3,1),_k(sc=()=>!1!==_a?oc():Ec(),4,1),_j(oc=()=>(_a=iW,_r=ac,_n=1,_u(_g[UW.r],UW)())),_j(Ec=()=>(_a=JW,_r=Fc,_n=1,_u(_g[UW.r],UW)())),_k(ac=()=>(_b=_s[_t],_s[_t-1]=_a,_a=_s[_t-2],_r=_s[_t-3],_p(Dc)),4,1),_k(Fc=()=>(_s[_t+1]=_a,_a=_s[_t],_r=Gc,_n=1,_check_procedure(_s[_t+1])()),4,1),_j(Dc=()=>(_n=2,_t-=4,_check_procedure(_s[_t+3])())),_k(Gc=()=>(_a=dW,_r=Kc,_n=1,_u(_g[UW.r],UW)()),4,1),_k(Kc=()=>(_s[_t+1]=_a,_a=_s[_t-2],_r=ic,_n=1,++_t,_u(_g[SW.r],SW)()),4,1),_k(ic=()=>(_b=_s[_t-1],_r=Oc,_n=2,_t-=2,_check_procedure(_s[_t+2])()),5,1),_k(Oc=()=>(_s[_t-1]=_a,_a=uW,_r=Jc,_n=1,_u(_g[UW.r],UW)()),3,1),_k(Jc=()=>(_b=_s[_t-1],_s[_t-1]=_a,_a=_s[_t],_r=_s[_t-2],_p(Xc)),3,1),_j(Xc=()=>(_n=2,_t-=3,_check_procedure(_s[_t+2])())),_m(L=()=>1!==_n?_w(L):_g["list?"]===_e["list?"]?dc():Sc(),-1,YC,!1,!1),_j(dc=()=>(_s[_t+1]=_r,_s[_t+2]=_a,_r=gc,_n=1,_t+=2,_e[jW.r]())),_j(Sc=()=>(_s[_t+1]=_r,_s[_t+2]=_a,_t+=2,_p(uc))),_k(gc=()=>!1!==_a?jc():wc(),2,1),_j(uc=()=>(_r=gc,_n=1,_u(_g["list?"],wW)())),_j(jc=()=>_g["car"]===_e["car"]?lc():bc()),_j(wc=()=>(_a=_s[_t],_t-=2,_s[_t+1]())),_j(lc=()=>_x(_s[_t])?mc():bc()),_j(bc=()=>(_a=_s[_t],_p(pc))),_j(mc=()=>(_a=_s[_t].a,_g["cadr"]===_e["cadr"]?Pc():Ic())),_j(pc=()=>(_r=kc,_n=1,_u(_g["car"],lW)())),_j(Pc=()=>_x(_s[_t])?Zc():Ic()),_j(Ic=()=>(_b=!1,_x(_b)?hc():Mc())),_k(kc=()=>_g["cadr"]===_e["cadr"]?Pc():Ic(),2,1),_j(Zc=()=>(_b=_s[_t].b,_x(_b)?hc():Mc())),_j(hc=()=>(_b=_b.a,_g["caddr"]===_e["caddr"]?$c():xc())),_j(Mc=()=>(_s[_t+1]=_a,_a=_s[_t],++_t,_p(Nc))),_j($c=()=>_x(_s[_t])?Bc():xc()),_j(xc=()=>(_c=!1,_x(_c)?yc():Tc())),_j(Nc=()=>(_r=Yc,_n=1,_u(_g["cadr"],bW)())),_j(Bc=()=>(_c=_s[_t].b,_x(_c)?yc():Tc())),_j(yc=()=>(_c=_c.b,_x(_c)?fc():zc())),_j(Tc=()=>(_c=!1,_x(_c)?fc():zc())),_k(Yc=()=>(_b=_a,_a=_s[_t],_g["caddr"]===_e["caddr"]?(--_t,$c()):(--_t,xc())),3,1),_j(fc=()=>(_c=_c.a,_g[mW.r]===_e[mW.r]?vc():Ac())),_j(zc=()=>(_s[_t+1]=_a,_s[_t+2]=_b,_a=_s[_t],_t+=2,_p(qc))),_j(vc=()=>_x(_s[_t])?c_():Ac()),_j(Ac=()=>(_d=!1,_x(_d)?__():C_())),_j(qc=()=>(_r=W_,_n=1,_u(_g["caddr"],pW)())),_j(c_=()=>(_d=_s[_t].b,_x(_d)?__():C_())),_j(__=()=>(_d=_d.b,_x(_d)?e_():t_())),_j(C_=()=>(_d=!1,_x(_d)?e_():t_())),_k(W_=()=>(_c=_a,_b=_s[_t],_a=_s[_t-1],_g[mW.r]===_e[mW.r]?(_t-=2,vc()):(_t-=2,Ac())),4,1),_j(e_=()=>(_d=_d.b,_x(_d)?H_():Q_())),_j(t_=()=>(_d=!1,_x(_d)?H_():Q_())),_j(H_=()=>(_d=_d.a,_g["cdr"]===_e["cdr"]?r_():R_())),_j(Q_=()=>(_s[_t+1]=_a,_s[_t+2]=_b,_s[_t+3]=_c,_a=_s[_t],_t+=3,_p(L_))),_j(r_=()=>_x(_s[_t])?U_():R_()),_j(R_=()=>(_s[_t+1]=_a,_s[_t+2]=_b,_s[_t+3]=_c,_s[_t+4]=_d,_a=_s[_t],_t+=4,_p(n_))),_j(L_=()=>(_r=V_,_n=1,_u(_g[mW.r],mW)())),_j(U_=()=>(_r=_s[_t].b,_g[mW.r]===_e[mW.r]?s_():o_())),_j(n_=()=>(_r=E_,_n=1,_u(_g["cdr"],PW)())),_k(V_=()=>(_d=_a,_c=_s[_t],_b=_s[_t-1],_a=_s[_t-2],_g["cdr"]===_e["cdr"]?(_t-=3,r_()):(_t-=3,R_())),5,1),_j(s_=()=>_x(_r)?a_():o_()),_j(o_=()=>(_s[_t]=_a,_a=!1,_x(_a)?F_():D_())),_k(E_=()=>(_r=_a,_d=_s[_t],_c=_s[_t-1],_b=_s[_t-2],_a=_s[_t-3],_g[mW.r]===_e[mW.r]?(_t-=4,s_()):(_t-=4,o_())),6,1),_j(a_=()=>(_s[_t]=_r.b,_s[_t+1]=_a,_a=_s[_t],_s[_t]=_s[_t+1],_x(_a)?F_():D_())),_j(F_=()=>(_a=_a.b,_x(_a)?G_():K_())),_j(D_=()=>(_a=!1,_x(_a)?G_():K_())),_j(G_=()=>(_a=_a.b,_x(_a)?i_():O_())),_j(K_=()=>(_a=!1,_x(_a)?i_():O_())),_j(i_=()=>(_a=_a.a,_g[HW.r]===_e[HW.r]?J_():X_())),_j(O_=()=>(_s[_t+1]=_b,_s[_t+2]=_c,_s[_t+3]=_d,_a=_r,_t+=3,_p(d_))),_j(J_=()=>(_a=_host2scm({key:_scm2host(_s[_t]),description:_scm2host(_b),uri:_scm2host(_c),nativeCurrency:_scm2host(_d),test:_scm2host(_a)}),_t-=2,_s[_t+1]())),_j(X_=()=>(_s[_t+1]=_s[_t-1],_s[_t-1]=IW,_s[_t+2]=_s[_t+1],_s[_t+1]=_b,_s[_t+3]=_c,_c=_a,_b=_d,_a=_s[_t+3],_r=_s[_t+2],_t+=3,_p(S_))),_j(d_=()=>(_r=g_,_n=1,_u(_g[mW.r],mW)())),_j(S_=()=>(_n=6,_t-=2,_u(_g[HW.r],HW)())),_k(g_=()=>(_d=_s[_t],_c=_s[_t-1],_b=_s[_t-2],_g[HW.r]===_e[HW.r]?(_t-=3,J_()):(_t-=3,X_())),5,1),_m(U=()=>2!==_n?_w(U):(_s[_t+1]=_r,_s[_t+2]=_a,_a=_b,_t+=2,_p(u_)),-1,fC,!1,!1),_j(u_=()=>(_r=j_,_n=1,_u(_g[YC.r],YC)())),_k(j_=()=>_g[CW.r]===_e[CW.r]?w_():l_(),2,1),_j(w_=()=>(console.log(_a),b_())),_j(l_=()=>(_s[_t+1]=_a,_b=_a,_a=kW,_r=m_,_n=2,++_t,_u(_g[CW.r],CW)())),_j(b_=()=>(_b=_a,_a=ZW,_r=_s[_t-1],_p(p_))),_k(m_=()=>(_a=_s[_t],--_t,b_()),3,1),_j(p_=()=>(_n=2,_t-=2,_check_procedure(_s[_t+2])())),_m(n=()=>1!==_n?_w(n):(_b=_a,_a=_g[BC.r],_p(P_)),-1,zC,!1,!1),_j(P_=()=>(_n=2,_u(_g[fC.r],fC)())),_m(V=()=>1!==_n?_w(V):(_b=_a,_a=_g[yC.r],_p(I_)),-1,vC,!1,!1),_j(I_=()=>(_n=2,_u(_g[fC.r],fC)())),_m(s=()=>{if(1===_n)_b=void 0;else if(2!==_n)return _w(s);return _c=_b,_b=_a,_a=hW,_p(k_)},-1,AC,!1,!1),_j(k_=()=>(_n=3,_u(_g[TC.r],TC)())),_m(o=()=>0!==_n?_w(o):_g["map"]===_e["map"]?Z_():h_(),-1,qC,!1,!1),_j(Z_=()=>(_a=M_,_b=MW,_p($_))),_j(h_=()=>(_a=M_,_b=MW,_p(x_))),_l(M_=()=>1!==_n?_w(M_):(_s[_t+1]=_r,_s[_t+2]=_a,_g["car"]===_e["car"]?(_t+=2,N_()):(_t+=2,B_())),-1),_j($_=()=>_x(_b)?y_():T_()),_j(x_=()=>(_n=2,_u(_g["map"],$W)())),_j(N_=()=>_x(_a)?Y_():B_()),_j(B_=()=>(_s[_t]=_a,_a=_a,_p(f_))),_j(y_=()=>(_b=_b.b,_p($_))),_j(T_=()=>null===_b?z_():v_()),_j(Y_=()=>(_a=_a.a,_p(A_))),_j(f_=()=>(_r=q_,_n=1,_u(_g["car"],lW)())),_j(z_=()=>(_b=MW,_p(cC))),_j(v_=()=>(_b=MW,_p(x_))),_j(A_=()=>(_r=_C,_n=1,_u(_g[AC.r],AC)())),_k(q_=()=>_p(A_),2,1),_j(cC=()=>_x(_b)?CC():WC()),_k(_C=()=>(_r=eC,_n=1,_u(_g["void?"],GW)()),2,1),_j(CC=()=>(_s[_t+1]=_r,_s[_t+2]=_a,_s[_t+3]=_b,_a=_b.a,_t+=3,_p(tC))),_j(WC=()=>(_a=null,_r)),_k(eC=()=>!1!==_a?HC():QC(),2,1),_j(tC=()=>(_r=rC,_n=1,_check_procedure(_s[_t-1])())),_j(HC=()=>(_a=_s[_t],_r=_s[_t-1],_p(RC))),_j(QC=()=>(_a=_s[_t],_r=_s[_t-1],_p(LC))),_k(rC=()=>(_s[_t+1]=_a,_b=_s[_t].b,_a=_s[_t-1],_r=UC,++_t,nC()),3,1),_j(RC=()=>(_n=1,_t-=2,_u(_g[zC.r],zC)())),_j(LC=()=>(_n=1,_t-=2,_u(_g[vC.r],vC)())),_j(nC=()=>_x(_b)?CC():WC()),_k(UC=()=>(_a=_X(_s[_t],_a),_t-=4,_s[_t+1]()),4,1),_m(E=()=>0!==_n?_w(E):(_s[_t+1]=_r,_a=NW,++_t,_p(VC)),-1,cW,!1,!1),_j(VC=()=>(_r=sC,_n=1,_u(_g[UW.r],UW)())),_k(sC=()=>(_s[_t+1]=_a,_a=BW,_r=oC,_n=1,++_t,_u(_g["store"],yW)()),1,1),_k(oC=()=>(_r=_s[_t-1],_p(EC)),2,1),_j(EC=()=>(_n=1,_t-=2,_check_procedure(_s[_t+2])())),_module_register([[NC],[],null,1,c,!1])})();