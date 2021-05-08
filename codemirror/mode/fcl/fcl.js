(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})((function(e){"use strict";e.defineMode("fcl",(function(e){var n=e.indentUnit,t={term:!0,method:!0,accu:!0,rule:!0,then:!0,is:!0,and:!0,or:!0,if:!0,default:!0},r={var_input:!0,var_output:!0,fuzzify:!0,defuzzify:!0,function_block:!0,ruleblock:!0},o={end_ruleblock:!0,end_defuzzify:!0,end_function_block:!0,end_fuzzify:!0,end_var:!0},i={true:!0,false:!0,nan:!0,real:!0,min:!0,max:!0,cog:!0,cogs:!0},u=/[+\-*&^%:=<>!|\/]/;function a(e,n){var a=e.next();if(/[\d\.]/.test(a))return"."==a?e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):"0"==a?e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^0[0-7]+/):e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if("/"==a||"("==a){if(e.eat("*"))return n.tokenize=c,c(e,n);if(e.eat("/"))return e.skipToEnd(),"comment"}if(u.test(a))return e.eatWhile(u),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var l=e.current().toLowerCase();return t.propertyIsEnumerable(l)||r.propertyIsEnumerable(l)||o.propertyIsEnumerable(l)?"keyword":i.propertyIsEnumerable(l)?"atom":"variable"}function c(e,n){var t,r=!1;while(t=e.next()){if(("/"==t||")"==t)&&r){n.tokenize=a;break}r="*"==t}return"comment"}function l(e,n,t,r,o){this.indented=e,this.column=n,this.type=t,this.align=r,this.prev=o}function f(e,n,t){return e.context=new l(e.indented,n,t,null,e.context)}function d(e){if(e.context.prev){var n=e.context.type;return"end_block"==n&&(e.indented=e.context.indented),e.context=e.context.prev}}return{startState:function(e){return{tokenize:null,context:new l((e||0)-n,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,n){var t=n.context;if(e.sol()&&(null==t.align&&(t.align=!1),n.indented=e.indentation(),n.startOfLine=!0),e.eatSpace())return null;var i=(n.tokenize||a)(e,n);if("comment"==i)return i;null==t.align&&(t.align=!0);var u=e.current().toLowerCase();return r.propertyIsEnumerable(u)?f(n,e.column(),"end_block"):o.propertyIsEnumerable(u)&&d(n),n.startOfLine=!1,i},indent:function(e,t){if(e.tokenize!=a&&null!=e.tokenize)return 0;var r=e.context,i=o.propertyIsEnumerable(t);return r.align?r.column+(i?0:1):r.indented+(i?0:n)},electricChars:"ryk",fold:"brace",blockCommentStart:"(*",blockCommentEnd:"*)",lineComment:"//"}})),e.defineMIME("text/x-fcl","fcl")}));