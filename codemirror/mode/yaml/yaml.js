(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})((function(e){"use strict";e.defineMode("yaml",(function(){var e=["true","false","on","off","yes","no"],i=new RegExp("\\b(("+e.join(")|(")+"))$","i");return{token:function(e,t){var r=e.peek(),n=t.escaped;if(t.escaped=!1,"#"==r&&(0==e.pos||/\s/.test(e.string.charAt(e.pos-1))))return e.skipToEnd(),"comment";if(e.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(t.literal&&e.indentation()>t.keyCol)return e.skipToEnd(),"string";if(t.literal&&(t.literal=!1),e.sol()){if(t.keyCol=0,t.pair=!1,t.pairStart=!1,e.match(/---/))return"def";if(e.match(/\.\.\./))return"def";if(e.match(/\s*-\s+/))return"meta"}if(e.match(/^(\{|\}|\[|\])/))return"{"==r?t.inlinePairs++:"}"==r?t.inlinePairs--:"["==r?t.inlineList++:t.inlineList--,"meta";if(t.inlineList>0&&!n&&","==r)return e.next(),"meta";if(t.inlinePairs>0&&!n&&","==r)return t.keyCol=0,t.pair=!1,t.pairStart=!1,e.next(),"meta";if(t.pairStart){if(e.match(/^\s*(\||\>)\s*/))return t.literal=!0,"meta";if(e.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable-2";if(0==t.inlinePairs&&e.match(/^\s*-?[0-9\.\,]+\s?$/))return"number";if(t.inlinePairs>0&&e.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(e.match(i))return"keyword"}return!t.pair&&e.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(t.pair=!0,t.keyCol=e.indentation(),"atom"):t.pair&&e.match(/^:\s*/)?(t.pairStart=!0,"meta"):(t.pairStart=!1,t.escaped="\\"==r,e.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},lineComment:"#",fold:"indent"}})),e.defineMIME("text/x-yaml","yaml"),e.defineMIME("text/yaml","yaml")}));