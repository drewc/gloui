(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})((function(e){function t(e,t,i,n){this.cm=e,this.node=t,this.options=i,this.height=n,this.cleared=!1}function i(e){var t=e.getWrapperElement(),i=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,n=parseInt(i.height),r=e.state.panels={setHeight:t.style.height,panels:[],wrapper:document.createElement("div")},o=e.hasFocus(),s=e.getScrollInfo();t.parentNode.insertBefore(r.wrapper,t),r.wrapper.appendChild(t),e.scrollTo(s.left,s.top),o&&e.focus(),e._setSize=e.setSize,null!=n&&(e.setSize=function(t,i){if(i||(i=r.wrapper.offsetHeight),r.setHeight=i,"number"!=typeof i){var o=/^(\d+\.?\d*)px$/.exec(i);o?i=Number(o[1]):(r.wrapper.style.height=i,i=r.wrapper.offsetHeight)}var s=i-r.panels.map((function(e){return e.node.getBoundingClientRect().height})).reduce((function(e,t){return e+t}),0);e._setSize(t,s),n=i})}function n(e){var t=e.state.panels;e.state.panels=null;var i=e.getWrapperElement(),n=e.hasFocus(),r=e.getScrollInfo();t.wrapper.parentNode.replaceChild(i,t.wrapper),e.scrollTo(r.left,r.top),n&&e.focus(),i.style.height=t.setHeight,e.setSize=e._setSize,e.setSize()}function r(e,t){for(var i=t.nextSibling;i;i=i.nextSibling)if(i==e.getWrapperElement())return!0;return!1}e.defineExtension("addPanel",(function(e,n){n=n||{},this.state.panels||i(this);var o=this.state.panels,s=o.wrapper,l=this.getWrapperElement(),p=n.replace instanceof t&&!n.replace.cleared;n.after instanceof t&&!n.after.cleared?s.insertBefore(e,n.before.node.nextSibling):n.before instanceof t&&!n.before.cleared?s.insertBefore(e,n.before.node):p?(s.insertBefore(e,n.replace.node),n.replace.clear(!0)):"bottom"==n.position?s.appendChild(e):"before-bottom"==n.position?s.insertBefore(e,l.nextSibling):"after-top"==n.position?s.insertBefore(e,l):s.insertBefore(e,s.firstChild);var a=n&&n.height||e.offsetHeight,h=new t(this,e,n,a);return o.panels.push(h),this.setSize(),n.stable&&r(this,e)&&this.scrollTo(null,this.getScrollInfo().top+a),h})),t.prototype.clear=function(e){if(!this.cleared){this.cleared=!0;var t=this.cm.state.panels;t.panels.splice(t.panels.indexOf(this),1),this.cm.setSize(),this.options.stable&&r(this.cm,this.node)&&this.cm.scrollTo(null,this.cm.getScrollInfo().top-this.height),t.wrapper.removeChild(this.node),0!=t.panels.length||e||n(this.cm)}},t.prototype.changed=function(){this.height=this.node.getBoundingClientRect().height,this.cm.setSize()}}));