namespace="comment_",function(){function n(n,o,e,t,c){return testCM(n,(function(n){e(n),eq(n.getValue(),c)}),{value:t,mode:o})}var o="function foo() {\n  return bar;\n}",e="foo(/* bar */ true);",t="foo(/* bar */ true, /* baz */ false);",c=["above();","foo(/* bar */ true);","below();"];n("block","javascript",(function(n){n.blockComment(Pos(0,3),Pos(3,0),{blockCommentLead:" *"})}),o+"\n","/* function foo() {\n *   return bar;\n * }\n */"),n("blockToggle","javascript",(function(n){n.blockComment(Pos(0,3),Pos(2,0),{blockCommentLead:" *"}),n.uncomment(Pos(0,3),Pos(2,0),{blockCommentLead:" *"})}),o,o),n("blockToggle2","javascript",(function(n){n.setCursor({line:0,ch:7}),n.execCommand("toggleComment")}),e,"foo(bar true);"),n("line","javascript",(function(n){n.lineComment(Pos(1,1),Pos(1,1))}),o,"function foo() {\n//   return bar;\n}"),n("lineToggle","javascript",(function(n){n.lineComment(Pos(0,0),Pos(2,1)),n.uncomment(Pos(0,0),Pos(2,1))}),o,o),n("fallbackToBlock","css",(function(n){n.lineComment(Pos(0,0),Pos(2,1))}),"html {\n  border: none;\n}","/* html {\n  border: none;\n} */"),n("fallbackToLine","ruby",(function(n){n.blockComment(Pos(0,0),Pos(1))}),"def blah()\n  return hah\n","# def blah()\n#   return hah\n"),n("ignoreExternalBlockComments","javascript",(function(n){n.execCommand("toggleComment")}),t,"// "+t),n("ignoreExternalBlockComments2","javascript",(function(n){n.setCursor({line:0,ch:null}),n.execCommand("toggleComment")}),t,"// "+t),n("ignoreExternalBlockCommentsMultiLineAbove","javascript",(function(n){n.setSelection({line:0,ch:0},{line:1,ch:1}),n.execCommand("toggleComment")}),c.join("\n"),["// "+c[0],"// "+c[1],c[2]].join("\n")),n("ignoreExternalBlockCommentsMultiLineBelow","javascript",(function(n){n.setSelection({line:1,ch:13},{line:2,ch:1}),n.execCommand("toggleComment")}),c.join("\n"),[c[0],"// "+c[1],"// "+c[2]].join("\n")),n("commentRange","javascript",(function(n){n.blockComment(Pos(1,2),Pos(1,13),{fullLines:!1})}),o,"function foo() {\n  /*return bar;*/\n}"),n("indented","javascript",(function(n){n.lineComment(Pos(1,0),Pos(2),{indent:!0})}),o,"function foo() {\n//   return bar;\n// }"),n("singleEmptyLine","javascript",(function(n){n.setCursor(1),n.execCommand("toggleComment")}),"a;\n\nb;","a;\n// \nb;"),n("dontMessWithStrings","javascript",(function(n){n.execCommand("toggleComment")}),'console.log("/*string*/");','// console.log("/*string*/");'),n("dontMessWithStrings2","javascript",(function(n){n.execCommand("toggleComment")}),'console.log("// string");','// console.log("// string");'),n("dontMessWithStrings3","javascript",(function(n){n.execCommand("toggleComment")}),'// console.log("// string");','console.log("// string");'),n("includeLastLine","javascript",(function(n){n.execCommand("selectAll"),n.execCommand("toggleComment")}),"// foo\n// bar\nbaz","// // foo\n// // bar\n// baz"),n("uncommentWithTrailingBlockEnd","xml",(function(n){n.execCommand("toggleComment")}),"\x3c!-- foo --\x3e --\x3e","foo --\x3e"),n("dontCommentInComment","xml",(function(n){n.setCursor(1,0),n.execCommand("toggleComment")}),"\x3c!-- foo\nbar --\x3e","\x3c!-- foo\nbar --\x3e")}();