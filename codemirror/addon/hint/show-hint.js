(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)})((function(t){"use strict";var i="CodeMirror-hint",e="CodeMirror-hint-active";function n(t,i){this.cm=t,this.options=i,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length;var e=this;t.on("cursorActivity",this.activityFunc=function(){e.cursorActivity()})}t.showHint=function(t,i,e){if(!i)return t.showHint(e);e&&e.async&&(i.async=!0);var n={hint:i};if(e)for(var o in e)n[o]=e[o];return t.showHint(n)},t.defineExtension("showHint",(function(i){i=c(this,this.getCursor("start"),i);var e=this.listSelections();if(!(e.length>1)){if(this.somethingSelected()){if(!i.hint.supportsSelection)return;for(var o=0;o<e.length;o++)if(e[o].head.line!=e[o].anchor.line)return}this.state.completionActive&&this.state.completionActive.close();var s=this.state.completionActive=new n(this,i);s.options.hint&&(t.signal(this,"startCompletion",this),s.update(!0))}})),t.defineExtension("closeHint",(function(){this.state.completionActive&&this.state.completionActive.close()}));var o=window.requestAnimationFrame||function(t){return setTimeout(t,1e3/60)},s=window.cancelAnimationFrame||clearTimeout;function c(t,i,e){var n=t.options.hintOptions,o={};for(var s in d)o[s]=d[s];if(n)for(var s in n)void 0!==n[s]&&(o[s]=n[s]);if(e)for(var s in e)void 0!==e[s]&&(o[s]=e[s]);return o.hint.resolve&&(o.hint=o.hint.resolve(t,i)),o}function r(t){return"string"==typeof t?t:t.text}function l(t,i){var e={Up:function(){i.moveFocus(-1)},Down:function(){i.moveFocus(1)},PageUp:function(){i.moveFocus(1-i.menuSize(),!0)},PageDown:function(){i.moveFocus(i.menuSize()-1,!0)},Home:function(){i.setFocus(0)},End:function(){i.setFocus(i.length-1)},Enter:i.pick,Tab:i.pick,Esc:i.close},n=/Mac/.test(navigator.platform);n&&(e["Ctrl-P"]=function(){i.moveFocus(-1)},e["Ctrl-N"]=function(){i.moveFocus(1)});var o=t.options.customKeys,s=o?{}:e;function c(t,n){var o;o="string"!=typeof n?function(t){return n(t,i)}:e.hasOwnProperty(n)?e[n]:n,s[t]=o}if(o)for(var r in o)o.hasOwnProperty(r)&&c(r,o[r]);var l=t.options.extraKeys;if(l)for(var r in l)l.hasOwnProperty(r)&&c(r,l[r]);return s}function h(t,i){while(i&&i!=t){if("LI"===i.nodeName.toUpperCase()&&i.parentNode==t)return i;i=i.parentNode}}function a(n,o){this.completion=n,this.data=o,this.picked=!1;var s=this,c=n.cm,a=c.getInputField().ownerDocument,f=a.defaultView||a.parentWindow,u=this.hints=a.createElement("ul"),p=n.cm.options.theme;u.className="CodeMirror-hints "+p,this.selectedHint=o.selectedHint||0;for(var d=o.list,m=0;m<d.length;++m){var g=u.appendChild(a.createElement("li")),v=d[m],y=i+(m!=this.selectedHint?"":" "+e);null!=v.className&&(y=v.className+" "+y),g.className=y,v.render?v.render(g,o,v):g.appendChild(a.createTextNode(v.displayText||r(v))),g.hintId=m}var w=n.options.container||a.body,H=c.cursorCoords(n.options.alignWithWord?o.from:null),C=H.left,b=H.bottom,k=!0,A=0,S=0;if(w!==a.body){var x=-1!==["absolute","relative","fixed"].indexOf(f.getComputedStyle(w).position),T=x?w:w.offsetParent,O=T.getBoundingClientRect(),M=a.body.getBoundingClientRect();A=O.left-M.left-T.scrollLeft,S=O.top-M.top-T.scrollTop}u.style.left=C-A+"px",u.style.top=b-S+"px";var F=f.innerWidth||Math.max(a.body.offsetWidth,a.documentElement.offsetWidth),N=f.innerHeight||Math.max(a.body.offsetHeight,a.documentElement.offsetHeight);w.appendChild(u);var P,E=n.options.moveOnOverlap?u.getBoundingClientRect():new DOMRect,R=!!n.options.paddingForScrollbar&&u.scrollHeight>u.clientHeight+1;setTimeout((function(){P=c.getScrollInfo()}));var W=E.bottom-N;if(W>0){var I=E.bottom-E.top,B=H.top-(H.bottom-E.top);if(B-I>0)u.style.top=(b=H.top-I-S)+"px",k=!1;else if(I>N){u.style.height=N-5+"px",u.style.top=(b=H.bottom-E.top-S)+"px";var K=c.getCursor();o.from.ch!=K.ch&&(H=c.cursorCoords(K),u.style.left=(C=H.left-A)+"px",E=u.getBoundingClientRect())}}var L,U=E.right-F;if(U>0&&(E.right-E.left>F&&(u.style.width=F-5+"px",U-=E.right-E.left-F),u.style.left=(C=H.left-U-A)+"px"),R)for(var D=u.firstChild;D;D=D.nextSibling)D.style.paddingRight=c.display.nativeBarWidth+"px";(c.addKeyMap(this.keyMap=l(n,{moveFocus:function(t,i){s.changeActive(s.selectedHint+t,i)},setFocus:function(t){s.changeActive(t)},menuSize:function(){return s.screenAmount()},length:d.length,close:function(){n.close()},pick:function(){s.pick()},data:o})),n.options.closeOnUnfocus)&&(c.on("blur",this.onBlur=function(){L=setTimeout((function(){n.close()}),100)}),c.on("focus",this.onFocus=function(){clearTimeout(L)}));c.on("scroll",this.onScroll=function(){var t=c.getScrollInfo(),i=c.getWrapperElement().getBoundingClientRect(),e=b+P.top-t.top,o=e-(f.pageYOffset||(a.documentElement||a.body).scrollTop);if(k||(o+=u.offsetHeight),o<=i.top||o>=i.bottom)return n.close();u.style.top=e+"px",u.style.left=C+P.left-t.left+"px"}),t.on(u,"dblclick",(function(t){var i=h(u,t.target||t.srcElement);i&&null!=i.hintId&&(s.changeActive(i.hintId),s.pick())})),t.on(u,"click",(function(t){var i=h(u,t.target||t.srcElement);i&&null!=i.hintId&&(s.changeActive(i.hintId),n.options.completeOnSingleClick&&s.pick())})),t.on(u,"mousedown",(function(){setTimeout((function(){c.focus()}),20)}));var z=this.getSelectedHintRange();return 0===z.from&&0===z.to||this.scrollToActive(),t.signal(o,"select",d[this.selectedHint],u.childNodes[this.selectedHint]),!0}function f(t,i){if(!t.somethingSelected())return i;for(var e=[],n=0;n<i.length;n++)i[n].supportsSelection&&e.push(i[n]);return e}function u(t,i,e,n){if(t.async)t(i,n,e);else{var o=t(i,e);o&&o.then?o.then(n):n(o)}}function p(i,e){var n,o=i.getHelpers(e,"hint");if(o.length){var s=function(t,i,e){var n=f(t,o);function s(o){if(o==n.length)return i(null);u(n[o],t,e,(function(t){t&&t.list.length>0?i(t):s(o+1)}))}s(0)};return s.async=!0,s.supportsSelection=!0,s}return(n=i.getHelper(i.getCursor(),"hintWords"))?function(i){return t.hint.fromList(i,{words:n})}:t.hint.anyword?function(i,e){return t.hint.anyword(i,e)}:function(){}}n.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&t.signal(this.data,"close"),this.widget&&this.widget.close(),t.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(i,e){var n=i.list[e],o=this;this.cm.operation((function(){n.hint?n.hint(o.cm,i,n):o.cm.replaceRange(r(n),n.from||i.from,n.to||i.to,"complete"),t.signal(i,"pick",n),o.cm.scrollIntoView()})),this.options.closeOnPick&&this.close()},cursorActivity:function(){this.debounce&&(s(this.debounce),this.debounce=0);var t=this.startPos;this.data&&(t=this.data.from);var i=this.cm.getCursor(),e=this.cm.getLine(i.line);if(i.line!=this.startPos.line||e.length-i.ch!=this.startLen-this.startPos.ch||i.ch<t.ch||this.cm.somethingSelected()||!i.ch||this.options.closeCharacters.test(e.charAt(i.ch-1)))this.options.closeOnCursorActivity&&this.close();else{var n=this;this.debounce=o((function(){n.update()})),this.widget&&this.widget.disable()}},update:function(t){if(null!=this.tick){var i=this,e=++this.tick;u(this.options.hint,this.cm,this.options,(function(n){i.tick==e&&i.finishUpdate(n,t)}))}},finishUpdate:function(i,e){this.data&&t.signal(this.data,"update");var n=this.widget&&this.widget.picked||e&&this.options.completeSingle;this.widget&&this.widget.close(),this.data=i,i&&i.list.length&&(n&&1==i.list.length?this.pick(i,0):(this.widget=new a(this,i),t.signal(i,"shown")))}},a.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var t=this.completion.cm;this.completion.options.closeOnUnfocus&&(t.off("blur",this.onBlur),t.off("focus",this.onFocus)),t.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap);var t=this;this.keyMap={Enter:function(){t.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(i,n){if(i>=this.data.list.length?i=n?this.data.list.length-1:0:i<0&&(i=n?0:this.data.list.length-1),this.selectedHint!=i){var o=this.hints.childNodes[this.selectedHint];o&&(o.className=o.className.replace(" "+e,"")),o=this.hints.childNodes[this.selectedHint=i],o.className+=" "+e,this.scrollToActive(),t.signal(this.data,"select",this.data.list[this.selectedHint],o)}},scrollToActive:function(){var t=this.getSelectedHintRange(),i=this.hints.childNodes[t.from],e=this.hints.childNodes[t.to],n=this.hints.firstChild;i.offsetTop<this.hints.scrollTop?this.hints.scrollTop=i.offsetTop-n.offsetTop:e.offsetTop+e.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=e.offsetTop+e.offsetHeight-this.hints.clientHeight+n.offsetTop)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1},getSelectedHintRange:function(){var t=this.completion.options.scrollMargin||0;return{from:Math.max(0,this.selectedHint-t),to:Math.min(this.data.list.length-1,this.selectedHint+t)}}},t.registerHelper("hint","auto",{resolve:p}),t.registerHelper("hint","fromList",(function(i,e){var n,o=i.getCursor(),s=i.getTokenAt(o),c=t.Pos(o.line,s.start),r=o;s.start<o.ch&&/\w/.test(s.string.charAt(o.ch-s.start-1))?n=s.string.substr(0,o.ch-s.start):(n="",c=o);for(var l=[],h=0;h<e.words.length;h++){var a=e.words[h];a.slice(0,n.length)==n&&l.push(a)}if(l.length)return{list:l,from:c,to:r}})),t.commands.autocomplete=t.showHint;var d={hint:t.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnCursorActivity:!0,closeOnPick:!0,closeOnUnfocus:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null,paddingForScrollbar:!0,moveOnOverlap:!0};t.defineOption("hintOptions",null)}));