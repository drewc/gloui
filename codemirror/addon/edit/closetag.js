(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../fold/xml-fold")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../fold/xml-fold"],e):e(CodeMirror)})((function(e){e.defineOption("autoCloseTags",!1,(function(t,n,r){if(r!=e.Init&&r&&t.removeKeyMap("autoCloseTags"),n){var a={name:"autoCloseTags"};"object"==typeof n&&!1===n.whenClosing||(a["'/'"]=function(e){return i(e)}),"object"==typeof n&&!1===n.whenOpening||(a["'>'"]=function(e){return o(e)}),t.addKeyMap(a)}}));var t=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],n=["applet","blockquote","body","button","div","dl","fieldset","form","frameset","h1","h2","h3","h4","h5","h6","head","html","iframe","layer","legend","object","ol","p","select","table","ul"];function o(o){if(o.getOption("disableInput"))return e.Pass;for(var r=o.listSelections(),i=[],s=o.getOption("autoCloseTags"),d=0;d<r.length;d++){if(!r[d].empty())return e.Pass;var f=r[d].head,c=o.getTokenAt(f),g=e.innerMode(o.getMode(),c.state),u=g.state,m=g.mode.xmlCurrentTag&&g.mode.xmlCurrentTag(u),h=m&&m.name;if(!h)return e.Pass;var p="html"==g.mode.configuration,b="object"==typeof s&&s.dontCloseTags||p&&t,C="object"==typeof s&&s.indentTags||p&&n;c.end>f.ch&&(h=h.slice(0,h.length-c.end+f.ch));var v=h.toLowerCase();if(!h||"string"==c.type&&(c.end!=f.ch||!/[\"\']/.test(c.string.charAt(c.string.length-1))||1==c.string.length)||"tag"==c.type&&m.close||c.string.indexOf("/")==f.ch-c.start-1||b&&a(b,v)>-1||l(o,g.mode.xmlCurrentContext&&g.mode.xmlCurrentContext(u)||[],h,f,!0))return e.Pass;var y="object"==typeof s&&s.emptyTags;if(y&&a(y,h)>-1)i[d]={text:"/>",newPos:e.Pos(f.line,f.ch+2)};else{var x=C&&a(C,v)>-1;i[d]={indent:x,text:">"+(x?"\n\n":"")+"</"+h+">",newPos:x?e.Pos(f.line+1,0):e.Pos(f.line,f.ch+1)}}}var P="object"==typeof s&&s.dontIndentOnAutoClose;for(d=r.length-1;d>=0;d--){var T=i[d];o.replaceRange(T.text,r[d].head,r[d].anchor,"+insert");var j=o.listSelections().slice(0);j[d]={head:T.newPos,anchor:T.newPos},o.setSelections(j),!P&&T.indent&&(o.indentLine(T.newPos.line,null,!0),o.indentLine(T.newPos.line+1,null,!0))}}function r(t,n){for(var o=t.listSelections(),r=[],i=n?"/":"</",a=t.getOption("autoCloseTags"),s="object"==typeof a&&a.dontIndentOnSlash,d=0;d<o.length;d++){if(!o[d].empty())return e.Pass;var f=o[d].head,c=t.getTokenAt(f),g=e.innerMode(t.getMode(),c.state),u=g.state;if(n&&("string"==c.type||"<"!=c.string.charAt(0)||c.start!=f.ch-1))return e.Pass;var m,h="xml"!=g.mode.name&&"htmlmixed"==t.getMode().name;if(h&&"javascript"==g.mode.name)m=i+"script";else if(h&&"css"==g.mode.name)m=i+"style";else{var p=g.mode.xmlCurrentContext&&g.mode.xmlCurrentContext(u),b=p.length?p[p.length-1]:"";if(!p||p.length&&l(t,p,b,f))return e.Pass;m=i+b}">"!=t.getLine(f.line).charAt(c.end)&&(m+=">"),r[d]=m}if(t.replaceSelections(r),o=t.listSelections(),!s)for(d=0;d<o.length;d++)(d==o.length-1||o[d].head.line<o[d+1].head.line)&&t.indentLine(o[d].head.line)}function i(t){return t.getOption("disableInput")?e.Pass:r(t,!0)}function a(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0,o=e.length;n<o;++n)if(e[n]==t)return n;return-1}function l(t,n,o,r,i){if(!e.scanForClosingTag)return!1;var a=Math.min(t.lastLine()+1,r.line+500),l=e.scanForClosingTag(t,r,null,a);if(!l||l.tag!=o)return!1;for(var s=i?1:0,d=n.length-1;d>=0;d--){if(n[d]!=o)break;++s}r=l.to;for(d=1;d<s;d++){var f=e.scanForClosingTag(t,r,null,a);if(!f||f.tag!=o)return!1;r=f.to}return!0}e.commands.closeTag=function(e){return r(e)}}));