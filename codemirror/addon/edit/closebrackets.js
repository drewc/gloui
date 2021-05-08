(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})((function(e){var t={pairs:"()[]{}''\"\"",closeBefore:")]}'\":;>",triples:"",explode:"[]{}"},n=e.Pos;function r(e,n){return"pairs"==n&&"string"==typeof e?e:"object"==typeof e&&null!=e[n]?e[n]:t[n]}e.defineOption("autoCloseBrackets",!1,(function(t,n,o){o&&o!=e.Init&&(t.removeKeyMap(i),t.state.closeBrackets=null),n&&(a(r(n,"pairs")),t.state.closeBrackets=n,t.addKeyMap(i))}));var i={Backspace:l,Enter:c};function a(e){for(var t=0;t<e.length;t++){var n=e.charAt(t),r="'"+n+"'";i[r]||(i[r]=o(n))}}function o(e){return function(t){return u(t,e)}}function s(e){var t=e.state.closeBrackets;if(!t||t.override)return t;var n=e.getModeAt(e.getCursor());return n.closeBrackets||t}function l(t){var i=s(t);if(!i||t.getOption("disableInput"))return e.Pass;for(var a=r(i,"pairs"),o=t.listSelections(),l=0;l<o.length;l++){if(!o[l].empty())return e.Pass;var c=d(t,o[l].head);if(!c||a.indexOf(c)%2!=0)return e.Pass}for(l=o.length-1;l>=0;l--){var f=o[l].head;t.replaceRange("",n(f.line,f.ch-1),n(f.line,f.ch+1),"+delete")}}function c(t){var n=s(t),i=n&&r(n,"explode");if(!i||t.getOption("disableInput"))return e.Pass;for(var a=t.listSelections(),o=0;o<a.length;o++){if(!a[o].empty())return e.Pass;var l=d(t,a[o].head);if(!l||i.indexOf(l)%2!=0)return e.Pass}t.operation((function(){var e=t.lineSeparator()||"\n";t.replaceSelection(e+e,null),f(t,-1),a=t.listSelections();for(var n=0;n<a.length;n++){var r=a[n].head.line;t.indentLine(r,null,!0),t.indentLine(r+1,null,!0)}}))}function f(e,t){for(var n=[],r=e.listSelections(),i=0,a=0;a<r.length;a++){var o=r[a];o.head==e.getCursor()&&(i=a);var s={line:o.head.line,ch:o.head.ch+t};n.push({anchor:s,head:s})}e.setSelections(n,i)}function h(t){var r=e.cmpPos(t.anchor,t.head)>0;return{anchor:new n(t.anchor.line,t.anchor.ch+(r?-1:1)),head:new n(t.head.line,t.head.ch+(r?1:-1))}}function u(t,i){var a=s(t);if(!a||t.getOption("disableInput"))return e.Pass;var o=r(a,"pairs"),l=o.indexOf(i);if(-1==l)return e.Pass;for(var c,u=r(a,"closeBefore"),d=r(a,"triples"),g=o.charAt(l+1)==i,v=t.listSelections(),b=l%2==0,P=0;P<v.length;P++){var S,k=v[P],y=k.head,O=t.getRange(y,n(y.line,y.ch+1));if(b&&!k.empty())S="surround";else if(!g&&b||O!=i)if(g&&y.ch>1&&d.indexOf(i)>=0&&t.getRange(n(y.line,y.ch-2),y)==i+i){if(y.ch>2&&/\bstring/.test(t.getTokenTypeAt(n(y.line,y.ch-2))))return e.Pass;S="addFour"}else if(g){var m=0==y.ch?" ":t.getRange(n(y.line,y.ch-1),y);if(e.isWordChar(O)||m==i||e.isWordChar(m))return e.Pass;S="both"}else{if(!b||!(0===O.length||/\s/.test(O)||u.indexOf(O)>-1))return e.Pass;S="both"}else S=g&&p(t,y)?"both":d.indexOf(i)>=0&&t.getRange(y,n(y.line,y.ch+3))==i+i+i?"skipThree":"skip";if(c){if(c!=S)return e.Pass}else c=S}var x=l%2?o.charAt(l-1):i,A=l%2?i:o.charAt(l+1);t.operation((function(){if("skip"==c)f(t,1);else if("skipThree"==c)f(t,3);else if("surround"==c){for(var e=t.getSelections(),n=0;n<e.length;n++)e[n]=x+e[n]+A;t.replaceSelections(e,"around"),e=t.listSelections().slice();for(n=0;n<e.length;n++)e[n]=h(e[n]);t.setSelections(e)}else"both"==c?(t.replaceSelection(x+A,null),t.triggerElectric(x+A),f(t,-1)):"addFour"==c&&(t.replaceSelection(x+x+x+x,"before"),f(t,1))}))}function d(e,t){var r=e.getRange(n(t.line,t.ch-1),n(t.line,t.ch+1));return 2==r.length?r:null}function p(e,t){var r=e.getTokenAt(n(t.line,t.ch+1));return/\bstring/.test(r.type)&&r.start==t.ch&&(0==t.ch||!/\bstring/.test(e.getTokenTypeAt(t)))}a(t.pairs+"`")}));