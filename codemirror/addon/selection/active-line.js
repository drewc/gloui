(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})((function(e){"use strict";var t="CodeMirror-activeline",n="CodeMirror-activeline-background",i="CodeMirror-activeline-gutter";function r(e){for(var r=0;r<e.state.activeLines.length;r++)e.removeLineClass(e.state.activeLines[r],"wrap",t),e.removeLineClass(e.state.activeLines[r],"background",n),e.removeLineClass(e.state.activeLines[r],"gutter",i)}function o(e,t){if(e.length!=t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!=t[n])return!1;return!0}function a(e,a){for(var s=[],c=0;c<a.length;c++){var l=a[c],f=e.getOption("styleActiveLine");if("object"==typeof f&&f.nonEmpty?l.anchor.line==l.head.line:l.empty()){var d=e.getLineHandleVisualStart(l.head.line);s[s.length-1]!=d&&s.push(d)}}o(e.state.activeLines,s)||e.operation((function(){r(e);for(var o=0;o<s.length;o++)e.addLineClass(s[o],"wrap",t),e.addLineClass(s[o],"background",n),e.addLineClass(s[o],"gutter",i);e.state.activeLines=s}))}function s(e,t){a(e,t.ranges)}e.defineOption("styleActiveLine",!1,(function(t,n,i){var o=i!=e.Init&&i;n!=o&&(o&&(t.off("beforeSelectionChange",s),r(t),delete t.state.activeLines),n&&(t.state.activeLines=[],a(t,t.listSelections()),t.on("beforeSelectionChange",s)))}))}));