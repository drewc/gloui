(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})((function(e){"use strict";e.defineMode("xquery",(function(){var e=function(){function e(e){return{type:e,style:"keyword"}}for(var t=e("operator"),n={type:"atom",style:"atom"},r={type:"punctuation",style:null},i={type:"axis_specifier",style:"qualifier"},a={",":r},o=["after","all","allowing","ancestor","ancestor-or-self","any","array","as","ascending","at","attribute","base-uri","before","boundary-space","by","case","cast","castable","catch","child","collation","comment","construction","contains","content","context","copy","copy-namespaces","count","decimal-format","declare","default","delete","descendant","descendant-or-self","descending","diacritics","different","distance","document","document-node","element","else","empty","empty-sequence","encoding","end","entire","every","exactly","except","external","first","following","following-sibling","for","from","ftand","ftnot","ft-option","ftor","function","fuzzy","greatest","group","if","import","in","inherit","insensitive","insert","instance","intersect","into","invoke","is","item","language","last","lax","least","let","levels","lowercase","map","modify","module","most","namespace","next","no","node","nodes","no-inherit","no-preserve","not","occurs","of","only","option","order","ordered","ordering","paragraph","paragraphs","parent","phrase","preceding","preceding-sibling","preserve","previous","processing-instruction","relationship","rename","replace","return","revalidation","same","satisfies","schema","schema-attribute","schema-element","score","self","sensitive","sentence","sentences","sequence","skip","sliding","some","stable","start","stemming","stop","strict","strip","switch","text","then","thesaurus","times","to","transform","treat","try","tumbling","type","typeswitch","union","unordered","update","updating","uppercase","using","validate","value","variable","version","weight","when","where","wildcards","window","with","without","word","words","xquery"],s=0,c=o.length;s<c;s++)a[o[s]]=e(o[s]);var u=["xs:anyAtomicType","xs:anySimpleType","xs:anyType","xs:anyURI","xs:base64Binary","xs:boolean","xs:byte","xs:date","xs:dateTime","xs:dateTimeStamp","xs:dayTimeDuration","xs:decimal","xs:double","xs:duration","xs:ENTITIES","xs:ENTITY","xs:float","xs:gDay","xs:gMonth","xs:gMonthDay","xs:gYear","xs:gYearMonth","xs:hexBinary","xs:ID","xs:IDREF","xs:IDREFS","xs:int","xs:integer","xs:item","xs:java","xs:language","xs:long","xs:Name","xs:NCName","xs:negativeInteger","xs:NMTOKEN","xs:NMTOKENS","xs:nonNegativeInteger","xs:nonPositiveInteger","xs:normalizedString","xs:NOTATION","xs:numeric","xs:positiveInteger","xs:precisionDecimal","xs:QName","xs:short","xs:string","xs:time","xs:token","xs:unsignedByte","xs:unsignedInt","xs:unsignedLong","xs:unsignedShort","xs:untyped","xs:untypedAtomic","xs:yearMonthDuration"];for(s=0,c=u.length;s<c;s++)a[u[s]]=n;var l=["eq","ne","lt","le","gt","ge",":=","=",">",">=","<","<=",".","|","?","and","or","div","idiv","mod","*","/","+","-"];for(s=0,c=l.length;s<c;s++)a[l[s]]=t;var f=["self::","attribute::","child::","descendant::","descendant-or-self::","parent::","ancestor::","ancestor-or-self::","following::","preceding::","following-sibling::","preceding-sibling::"];for(s=0,c=f.length;s<c;s++)a[f[s]]=i;return a}();function t(e,t,n){return t.tokenize=n,n(e,t)}function n(n,s){var m=n.next(),p=!1,g=x(n);if("<"==m){if(n.match("!--",!0))return t(n,s,c);if(n.match("![CDATA",!1))return s.tokenize=u,"tag";if(n.match("?",!1))return t(n,s,l);var v=n.eat("/");n.eatSpace();var k,b="";while(k=n.eat(/[^\s\u00a0=<>\"\'\/?]/))b+=k;return t(n,s,o(b,v))}if("{"==m)return h(s,{type:"codeblock"}),null;if("}"==m)return y(s),null;if(f(s))return">"==m?"tag":"/"==m&&n.eat(">")?(y(s),"tag"):"variable";if(/\d/.test(m))return n.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/),"atom";if("("===m&&n.eat(":"))return h(s,{type:"comment"}),t(n,s,r);if(g||'"'!==m&&"'"!==m){if("$"===m)return t(n,s,a);if(":"===m&&n.eat("="))return"keyword";if("("===m)return h(s,{type:"paren"}),null;if(")"===m)return y(s),null;if("["===m)return h(s,{type:"bracket"}),null;if("]"===m)return y(s),null;var w=e.propertyIsEnumerable(m)&&e[m];if(g&&'"'===m)while('"'!==n.next());if(g&&"'"===m)while("'"!==n.next());w||n.eatWhile(/[\w\$_-]/);var z=n.eat(":");!n.eat(":")&&z&&n.eatWhile(/[\w\$_-]/),n.match(/^[ \t]*\(/,!1)&&(p=!0);var I=n.current();return w=e.propertyIsEnumerable(I)&&e[I],p&&!w&&(w={type:"function_call",style:"variable def"}),d(s)?(y(s),"variable"):("element"!=I&&"attribute"!=I&&"axis_specifier"!=w.type||h(s,{type:"xmlconstructor"}),w?w.style:"variable")}return t(n,s,i(m))}function r(e,t){var n,r=!1,i=!1,a=0;while(n=e.next()){if(")"==n&&r){if(!(a>0)){y(t);break}a--}else":"==n&&i&&a++;r=":"==n,i="("==n}return"comment"}function i(e,t){return function(r,a){var o;if(p(a)&&r.current()==e)return y(a),t&&(a.tokenize=t),"string";if(h(a,{type:"string",name:e,tokenize:i(e,t)}),r.match("{",!1)&&m(a))return a.tokenize=n,"string";while(o=r.next()){if(o==e){y(a),t&&(a.tokenize=t);break}if(r.match("{",!1)&&m(a))return a.tokenize=n,"string"}return"string"}}function a(e,t){var r=/[\w\$_-]/;if(e.eat('"')){while('"'!==e.next());e.eat(":")}else e.eatWhile(r),e.match(":=",!1)||e.eat(":");return e.eatWhile(r),t.tokenize=n,"variable"}function o(e,t){return function(r,i){return r.eatSpace(),t&&r.eat(">")?(y(i),i.tokenize=n,"tag"):(r.eat("/")||h(i,{type:"tag",name:e,tokenize:n}),r.eat(">")?(i.tokenize=n,"tag"):(i.tokenize=s,"tag"))}}function s(e,r){var a=e.next();return"/"==a&&e.eat(">")?(m(r)&&y(r),f(r)&&y(r),"tag"):">"==a?(m(r)&&y(r),"tag"):"="==a?null:'"'==a||"'"==a?t(e,r,i(a,s)):(m(r)||h(r,{type:"attribute",tokenize:s}),e.eat(/[a-zA-Z_:]/),e.eatWhile(/[-a-zA-Z0-9_:.]/),e.eatSpace(),(e.match(">",!1)||e.match("/",!1))&&(y(r),r.tokenize=n),"attribute")}function c(e,t){var r;while(r=e.next())if("-"==r&&e.match("->",!0))return t.tokenize=n,"comment"}function u(e,t){var r;while(r=e.next())if("]"==r&&e.match("]",!0))return t.tokenize=n,"comment"}function l(e,t){var r;while(r=e.next())if("?"==r&&e.match(">",!0))return t.tokenize=n,"comment meta"}function f(e){return g(e,"tag")}function m(e){return g(e,"attribute")}function d(e){return g(e,"xmlconstructor")}function p(e){return g(e,"string")}function x(e){return'"'===e.current()?e.match(/^[^\"]+\"\:/,!1):"'"===e.current()&&e.match(/^[^\"]+\'\:/,!1)}function g(e,t){return e.stack.length&&e.stack[e.stack.length-1].type==t}function h(e,t){e.stack.push(t)}function y(e){e.stack.pop();var t=e.stack.length&&e.stack[e.stack.length-1].tokenize;e.tokenize=t||n}return{startState:function(){return{tokenize:n,cc:[],stack:[]}},token:function(e,t){if(e.eatSpace())return null;var n=t.tokenize(e,t);return n},blockCommentStart:"(:",blockCommentEnd:":)"}})),e.defineMIME("application/xquery","xquery")}));