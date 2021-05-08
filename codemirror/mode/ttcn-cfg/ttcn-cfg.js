(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})((function(e){"use strict";function t(e){for(var t={},T=e.split(" "),n=0;n<T.length;++n)t[T[n]]=!0;return t}e.defineMode("ttcn-cfg",(function(e,t){var T,n=e.indentUnit,E=t.keywords||{},i=t.fileNCtrlMaskOptions||{},C=t.externalCommands||{},r=t.multiLineStrings,N=!1!==t.indentStatements,o=/[\|]/;function I(e,t){var n=e.next();if('"'==n||"'"==n)return t.tokenize=_(n),t.tokenize(e,t);if(/[:=]/.test(n))return T=n,"punctuation";if("#"==n)return e.skipToEnd(),"comment";if(/\d/.test(n))return e.eatWhile(/[\w\.]/),"number";if(o.test(n))return e.eatWhile(o),"operator";if("["==n)return e.eatWhile(/[\w_\]]/),"number sectionTitle";e.eatWhile(/[\w\$_]/);var r=e.current();return E.propertyIsEnumerable(r)?"keyword":i.propertyIsEnumerable(r)?"negative fileNCtrlMaskOptions":C.propertyIsEnumerable(r)?"negative externalCommands":"variable"}function _(e){return function(t,T){var n,E=!1,i=!1;while(null!=(n=t.next())){if(n==e&&!E){var C=t.peek();C&&(C=C.toLowerCase(),"b"!=C&&"h"!=C&&"o"!=C||t.next()),i=!0;break}E=!E&&"\\"==n}return(i||!E&&!r)&&(T.tokenize=null),"string"}}function A(e,t,T,n,E){this.indented=e,this.column=t,this.type=T,this.align=n,this.prev=E}function U(e,t,T){var n=e.indented;return e.context&&"statement"==e.context.type&&(n=e.context.indented),e.context=new A(n,t,T,null,e.context)}function O(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}return{startState:function(e){return{tokenize:null,context:new A((e||0)-n,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;T=null;var E=(t.tokenize||I)(e,t);if("comment"==E)return E;if(null==n.align&&(n.align=!0),";"!=T&&":"!=T&&","!=T||"statement"!=n.type)if("{"==T)U(t,e.column(),"}");else if("["==T)U(t,e.column(),"]");else if("("==T)U(t,e.column(),")");else if("}"==T){while("statement"==n.type)n=O(t);"}"==n.type&&(n=O(t));while("statement"==n.type)n=O(t)}else T==n.type?O(t):N&&(("}"==n.type||"top"==n.type)&&";"!=T||"statement"==n.type&&"newstatement"==T)&&U(t,e.column(),"statement");else O(t);return t.startOfLine=!1,E},electricChars:"{}",lineComment:"#",fold:"brace"}})),e.defineMIME("text/x-ttcn-cfg",{name:"ttcn-cfg",keywords:t("Yes No LogFile FileMask ConsoleMask AppendFile TimeStampFormat LogEventTypes SourceInfoFormat LogEntityName LogSourceInfo DiskFullAction LogFileNumber LogFileSize MatchingHints Detailed Compact SubCategories Stack Single None Seconds DateTime Time Stop Error Retry Delete TCPPort KillTimer NumHCs UnixSocketsEnabled LocalAddress"),fileNCtrlMaskOptions:t("TTCN_EXECUTOR TTCN_ERROR TTCN_WARNING TTCN_PORTEVENT TTCN_TIMEROP TTCN_VERDICTOP TTCN_DEFAULTOP TTCN_TESTCASE TTCN_ACTION TTCN_USER TTCN_FUNCTION TTCN_STATISTICS TTCN_PARALLEL TTCN_MATCHING TTCN_DEBUG EXECUTOR ERROR WARNING PORTEVENT TIMEROP VERDICTOP DEFAULTOP TESTCASE ACTION USER FUNCTION STATISTICS PARALLEL MATCHING DEBUG LOG_ALL LOG_NOTHING ACTION_UNQUALIFIED DEBUG_ENCDEC DEBUG_TESTPORT DEBUG_UNQUALIFIED DEFAULTOP_ACTIVATE DEFAULTOP_DEACTIVATE DEFAULTOP_EXIT DEFAULTOP_UNQUALIFIED ERROR_UNQUALIFIED EXECUTOR_COMPONENT EXECUTOR_CONFIGDATA EXECUTOR_EXTCOMMAND EXECUTOR_LOGOPTIONS EXECUTOR_RUNTIME EXECUTOR_UNQUALIFIED FUNCTION_RND FUNCTION_UNQUALIFIED MATCHING_DONE MATCHING_MCSUCCESS MATCHING_MCUNSUCC MATCHING_MMSUCCESS MATCHING_MMUNSUCC MATCHING_PCSUCCESS MATCHING_PCUNSUCC MATCHING_PMSUCCESS MATCHING_PMUNSUCC MATCHING_PROBLEM MATCHING_TIMEOUT MATCHING_UNQUALIFIED PARALLEL_PORTCONN PARALLEL_PORTMAP PARALLEL_PTC PARALLEL_UNQUALIFIED PORTEVENT_DUALRECV PORTEVENT_DUALSEND PORTEVENT_MCRECV PORTEVENT_MCSEND PORTEVENT_MMRECV PORTEVENT_MMSEND PORTEVENT_MQUEUE PORTEVENT_PCIN PORTEVENT_PCOUT PORTEVENT_PMIN PORTEVENT_PMOUT PORTEVENT_PQUEUE PORTEVENT_STATE PORTEVENT_UNQUALIFIED STATISTICS_UNQUALIFIED STATISTICS_VERDICT TESTCASE_FINISH TESTCASE_START TESTCASE_UNQUALIFIED TIMEROP_GUARD TIMEROP_READ TIMEROP_START TIMEROP_STOP TIMEROP_TIMEOUT TIMEROP_UNQUALIFIED USER_UNQUALIFIED VERDICTOP_FINAL VERDICTOP_GETVERDICT VERDICTOP_SETVERDICT VERDICTOP_UNQUALIFIED WARNING_UNQUALIFIED"),externalCommands:t("BeginControlPart EndControlPart BeginTestCase EndTestCase"),multiLineStrings:!0})}));