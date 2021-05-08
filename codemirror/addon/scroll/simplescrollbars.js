(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)})((function(t){"use strict";function e(e,o,i){this.orientation=o,this.scroll=i,this.screen=this.total=this.size=1,this.pos=0,this.node=document.createElement("div"),this.node.className=e+"-"+o,this.inner=this.node.appendChild(document.createElement("div"));var n=this;function s(e){var o=t.wheelEventPixels(e)["horizontal"==n.orientation?"x":"y"],i=n.pos;n.moveTo(n.pos+o),n.pos!=i&&t.e_preventDefault(e)}t.on(this.inner,"mousedown",(function(e){if(1==e.which){t.e_preventDefault(e);var o="horizontal"==n.orientation?"pageX":"pageY",i=e[o],s=n.pos;t.on(document,"mousemove",h),t.on(document,"mouseup",r)}function r(){t.off(document,"mousemove",h),t.off(document,"mouseup",r)}function h(t){if(1!=t.which)return r();n.moveTo(s+(t[o]-i)*(n.total/n.size))}})),t.on(this.node,"click",(function(e){t.e_preventDefault(e);var o,i=n.inner.getBoundingClientRect();o="horizontal"==n.orientation?e.clientX<i.left?-1:e.clientX>i.right?1:0:e.clientY<i.top?-1:e.clientY>i.bottom?1:0,n.moveTo(n.pos+o*n.screen)})),t.on(this.node,"mousewheel",s),t.on(this.node,"DOMMouseScroll",s)}e.prototype.setPos=function(t,e){return t<0&&(t=0),t>this.total-this.screen&&(t=this.total-this.screen),!(!e&&t==this.pos)&&(this.pos=t,this.inner.style["horizontal"==this.orientation?"left":"top"]=t*(this.size/this.total)+"px",!0)},e.prototype.moveTo=function(t){this.setPos(t)&&this.scroll(t,this.orientation)};var o=10;function i(t,o,i){this.addClass=t,this.horiz=new e(t,"horizontal",i),o(this.horiz.node),this.vert=new e(t,"vertical",i),o(this.vert.node),this.width=null}e.prototype.update=function(t,e,i){var n=this.screen!=e||this.total!=t||this.size!=i;n&&(this.screen=e,this.total=t,this.size=i);var s=this.screen*(this.size/this.total);s<o&&(this.size-=o-s,s=o),this.inner.style["horizontal"==this.orientation?"width":"height"]=s+"px",this.setPos(this.pos,n)},i.prototype.update=function(t){if(null==this.width){var e=window.getComputedStyle?window.getComputedStyle(this.horiz.node):this.horiz.node.currentStyle;e&&(this.width=parseInt(e.height))}var o=this.width||0,i=t.scrollWidth>t.clientWidth+1,n=t.scrollHeight>t.clientHeight+1;return this.vert.node.style.display=n?"block":"none",this.horiz.node.style.display=i?"block":"none",n&&(this.vert.update(t.scrollHeight,t.clientHeight,t.viewHeight-(i?o:0)),this.vert.node.style.bottom=i?o+"px":"0"),i&&(this.horiz.update(t.scrollWidth,t.clientWidth,t.viewWidth-(n?o:0)-t.barLeft),this.horiz.node.style.right=n?o+"px":"0",this.horiz.node.style.left=t.barLeft+"px"),{right:n?o:0,bottom:i?o:0}},i.prototype.setScrollTop=function(t){this.vert.setPos(t)},i.prototype.setScrollLeft=function(t){this.horiz.setPos(t)},i.prototype.clear=function(){var t=this.horiz.node.parentNode;t.removeChild(this.horiz.node),t.removeChild(this.vert.node)},t.scrollbarModel.simple=function(t,e){return new i("CodeMirror-simplescroll",t,e)},t.scrollbarModel.overlay=function(t,e){return new i("CodeMirror-overlayscroll",t,e)}}));