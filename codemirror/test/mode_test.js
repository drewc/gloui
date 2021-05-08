(function(){function t(t,e,n){for(;;){var r=t.indexOf(n,e);if(-1==r)return null;if(t.charAt(r+1)!=n)return r;e=r+2}}var e=/[\w&-_]+/g;function n(n){for(var r=[],a="",l=0;l<n.length;++l){l&&(a+="\n");var i=n[l],s=0;while(s<i.length){var o,u=null;if("["==i.charAt(s)&&"["!=i.charAt(s+1)){e.lastIndex=s+1;var c=e.exec(i);u=c[0].replace(/&/g," ");var f=s+u.length+2,d=t(i,f,"]");if(null==d)throw new Error("Unterminated token at "+s+" in '"+i+"'"+u);o=i.slice(f,d),s=d+1}else{d=t(i,s,"[");null==d&&(d=i.length),o=i.slice(s,d),s=d}o=o.replace(/\[\[|\]\]/g,(function(t){return t.charAt(0)})),r.push({style:u,text:o}),a+=o}}return{tokens:r,plain:a}}function r(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function a(t,e,n){for(var a=[],l=0;l<e.length;++l){var u=e[l].style;u&&u.indexOf(" ")&&(u=u.split(" ").sort().join(" ")),a.push({style:u,text:e[l].text})}var c=i(t,n),f="",d=s(a,c);if(null!=d&&(f+='<div class="mt-test mt-fail">',f+="<pre>"+r(t)+"</pre>",f+='<div class="cm-s-default">',f+="expected:",f+=o(a,d),f+="observed: [<a onclick=\"this.parentElement.className+=' mt-state-unhide'\">display states</a>]",f+=o(c,d),f+="</div>",f+="</div>"),c.indentFailures)for(l=0;l<c.indentFailures.length;l++)f+="<div class='mt-test mt-fail'>"+r(c.indentFailures[l])+"</div>";if(f)throw new Failure(f)}function l(t){function e(t,e){if("function"==typeof e){var n=e.toString().match(/function\s*[^\s(]*/);return n?n[0]:"function"}return e}return window.JSON&&JSON.stringify?JSON.stringify(t,e,2):"[unsupported]"}function i(t,e){for(var n=e.startState(),r=t.replace(/\r\n/g,"\n").split("\n"),a=[],i=0,s=0;s<r.length;++s){var o=r[s],u=!0;if(e.indent){var c=o.match(/^\s*/)[0],f=e.indent(n,o.slice(c.length),o);f!=CodeMirror.Pass&&f!=c.length&&(a.indentFailures||(a.indentFailures=[])).push("Indentation of line "+(s+1)+" is "+f+" (expected "+c.length+")")}var d=new CodeMirror.StringStream(o,4,{lookAhead:function(t){return r[s+t]}});""==o&&e.blankLine&&e.blankLine(n);while(!d.eol()){for(var p=0;p<10&&d.start>=d.pos;p++)var h=e.token(d,n);if(10==p)throw new Failure("Failed to advance the stream."+d.string+" "+d.pos);var g=d.current();if(h&&h.indexOf(" ")>-1&&(h=h.split(" ").sort().join(" ")),d.start=d.pos,i&&a[i-1].style==h&&!u?a[i-1].text+=g:g&&(a[i++]={style:h,text:g,state:l(n)}),d.pos>5e3){a[i++]={style:null,text:this.text.slice(d.pos)};break}u=!1}}return a}function s(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n;++r)if(t[r].style!=e[r].style||t[r].text!=e[r].text)return r;if(t.length>n||e.length>n)return n}function o(t,e){var n='<table class="mt-output">';n+="<tr>";for(var a=0;a<t.length;++a){var l=t[a].style,i=t[a].text;n+='<td class="mt-token"'+(a==e?" style='background: pink'":"")+'><span class="cm-'+r(String(l))+'">'+r(i.replace(/ /g,"·"))+"</span></td>"}n+="</tr><tr>";for(a=0;a<t.length;++a)n+='<td class="mt-style"><span>'+(t[a].style||null)+"</span></td>";if(t[0].state){n+='</tr><tr class="mt-state-row" title="State AFTER each token">';for(a=0;a<t.length;++a)n+='<td class="mt-state"><pre>'+r(t[a].state)+"</pre></td>"}return n+="</tr></table>",n}test.mode=function(t,e,r,l){var i=n(r);return test((l||e.name)+"_"+t,(function(){return a(i.plain,i.tokens,e)}))}})();