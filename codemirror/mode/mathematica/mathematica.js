(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})((function(e){"use strict";e.defineMode("mathematica",(function(e,t){var a="[a-zA-Z\\$][a-zA-Z0-9\\$]*",n="(?:\\d+)",o="(?:\\.\\d+|\\d+\\.\\d*|\\d+)",m="(?:\\.\\w+|\\w+\\.\\w*|\\w+)",r="(?:`(?:`?"+o+")?)",c=new RegExp("(?:"+n+"(?:\\^\\^"+m+r+"?(?:\\*\\^[+-]?\\d+)?))"),i=new RegExp("(?:"+o+r+"?(?:\\*\\^[+-]?\\d+)?)"),z=new RegExp("(?:`?)(?:"+a+")(?:`(?:"+a+"))*(?:`?)");function A(e,t){var a;return a=e.next(),'"'===a?(t.tokenize=Z,t.tokenize(e,t)):"("===a&&e.eat("*")?(t.commentLevel++,t.tokenize=$,t.tokenize(e,t)):(e.backUp(1),e.match(c,!0,!1)||e.match(i,!0,!1)?"number":e.match(/(?:In|Out)\[[0-9]*\]/,!0,!1)?"atom":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/,!0,!1)?"meta":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/,!0,!1)?"string-2":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/,!0,!1)||e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)||e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/,!0,!1)||e.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)?"variable-2":e.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/,!0,!1)?"variable-3":e.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":e.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/,!0,!1)?"variable-2":e.match(z,!0,!1)?"keyword":e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/,!0,!1)?"operator":(e.next(),"error"))}function Z(e,t){var a,n=!1,o=!1;while(null!=(a=e.next())){if('"'===a&&!o){n=!0;break}o=!o&&"\\"===a}return n&&!o&&(t.tokenize=A),"string"}function $(e,t){var a,n;while(t.commentLevel>0&&null!=(n=e.next()))"("===a&&"*"===n&&t.commentLevel++,"*"===a&&")"===n&&t.commentLevel--,a=n;return t.commentLevel<=0&&(t.tokenize=A),"comment"}return{startState:function(){return{tokenize:A,commentLevel:0}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},blockCommentStart:"(*",blockCommentEnd:"*)"}})),e.defineMIME("text/x-mathematica",{name:"mathematica"})}));