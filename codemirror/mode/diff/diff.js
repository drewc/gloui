(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})((function(e){"use strict";e.defineMode("diff",(function(){var e={"+":"positive","-":"negative","@":"meta"};return{token:function(r){var i=r.string.search(/[\t ]+?$/);if(!r.sol()||0===i)return r.skipToEnd(),("error "+(e[r.string.charAt(0)]||"")).replace(/ $/,"");var o=e[r.peek()]||r.skipToEnd();return-1===i?r.skipToEnd():r.pos=i,o}}})),e.defineMIME("text/x-diff","diff")}));