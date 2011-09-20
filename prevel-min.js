/* Prevel Framework v1.0.1
 * http://github.com/chernikovalexey/Prevel
 * 
 * Copyright 2011, Alexey Chernikov
 * Dual licensed under the:
 *  - GNU LGPL (http://opensource.org/licenses/lgpl-license.php)
 *  - MIT License (http://opensource.org/licenses/mit-license.php)
 * 
 * =====
 * 
 * Contains YASS v0.3.9
 * http://yass.webo.in
 * 
 * Copyright 2008-2009, Nikolay Matsievsky (sunnybear)
 * Dual licensed under the:
 *  - MIT License (http://opensource.org/licenses/mit-license.php)
 *  - GNU GPL (http://opensource.org/licenses/gpl-license.php)
**/
(function(t,f,q,B,s,o,E,y,I,C,z,H,D,A,J){(function(){var k={"function":"fn",object:"obj",number:"int",string:"str","boolean":"bool","undefined":b},f=!!Object[q].__lookupGetter__&&!!Object[q].__lookupSetter__&&!!Object[q].__defineGetter__&&!!Object[q].__defineSetter,g=function(){return function(a,b,c){return g.fn?new g.fn._(a,b,c):J}}(),b=t.navigator.userAgent.toLowerCase();g.extend=function(a,b){b||(b=a,a=g);if(f){var c,d,e;for(e in b)c=b.__lookupGetter__(e),d=b.__lookupSetter__(e),c||d?(c&&a.__defineGetter__(e,c),d&&a.__defineSetter__(e,d)):a[e]||(a[e]=b[e])}else for(e in b)a[e]||(a[e]=b[e]);return a},g.extend({implement:function(a,b){return g.extend(a[q],b)},isArray:Array.isArray||function(a){return Object[q].toString.call(a)==="[object Array]"},type:function(a,b){var c;return g.isArray(a)?c="arr":a instanceof RegExp?c="regexp":a instanceof Date?c="date":a===C?c=E:c=k[typeof a],b?c===b:c},empty:function(a){if(g.type(a,"obj")){for(var c in a)return!1;return!0}return g.type(a,E)||g.type(a,b)||!a.length},trim:function(a){return String[q].trim?a.trim():a.replace(/^\s\s*/,"").replace(/\s\s*$/,"")},each:function(a,b){for(var c=a.length;--c>-1;)b.call(a[c],c,a[c])},inArray:function(a,b){return Array[q].indexOf?b.indexOf(a):(g.each(b,function(b){if(a===this)return b}),-1)},toParams:function(a){if(!g.type(a,"obj"))return a;var b=[],c;for(c in a)b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")},JSON:function(b){return!/[^,:{}[]0-9.-+Eaeflnr-u nrt]/.test(b.replace(/"(.|[^"])*"/g,""))&&eval("("+b+")")},browser:function(a){var c=/opera/i.test(b),d=/chrome/i.test(b),c={opera:c,ie:!c&&/msie/i.test(b),ie6:!c&&/msie 6/i.test(b),ie7:!c&&/msie 7/i.test(b),ie8:!c&&/msie 8/i.test(b),firefox:/firefox/i.test(b),chrome:d,safari_khtml:!d&&/khtml/i.test(b),safari:!d&&/webkit|safari/i.test(b)},e;for(e in c)if(c[e])return a===e||e}}),t.pl=g})(),function(){pl.extend({ajax:function(a){var b,c=a.load||z,d=a.error||z,e=a.success||z,f=function(c){b.setRequestHeader("X-Requested-With","XMLHttpRequest"),c&&b.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset="+(a.charset||"utf-8"))};a.type=a.type||"POST",a.data=pl.toParams(a.data||{}),a.async=a.async||!0,function(){if(t.XMLHttpRequest)b=new XMLHttpRequest,b.overrideMimeType&&b.overrideMimeType("text/html");else if(t.ActiveXObject)try{b=new ActiveXObject("Msxml2.XMLHTTP")}catch(f){try{b=new ActiveXObject("Microsoft.XMLHTTP")}catch(h){}}if(!b)return alert("Could not create an XMLHttpRequest instance.");b.onreadystatechange=function(){switch(b.readyState){case 1:c();break;case 4:b.status===200?e(a.dataType==="json"?pl.JSON(b.responseText):b.responseText):d(b.status)}}}();switch(a.type){case"POST":b.open("POST",a.url,a.async),f(1),b.send(a.data);break;case"GET":b.open("GET",a.url+"?"+a.data,a.async),f(),b.send(C)}}})}(),function(){var a,b={className:"class",cssFloat:"float",htmlFor:"for"};pl.extend({fn:{},find:function(a,b){return f.querySelectorAll(b?b+" "+a:a)}}),pl.extend(pl.fn,{_:function(){return function(b,c,e){var g;switch(pl.type(b)){case"str":var h=b.match(I);if(h)g=c,h=f.createElement(h[1]),g=[g?pl.extend(h,g):h];else switch(pl.type(c)){case"str":switch(pl.type(e)){case"int":g=[pl.find(b,c)[e]];break;default:case y:g=pl.find(b)}break;case"int":g=[pl.find(b)[c]];break;default:case y:g=pl.find(b)}break;case"fn":d.r(b);break;case"obj":g=[b]}return this.e=g,this.s=arguments,a=this,this}}(),len:function(){return this.e.length},last:function(){var a=this.e.length;return this.e=[a?this.e[a-1]:C],this},html:function(a,b){return e(this,"innerHTML",a,b)},text:function(a,b){return e(this,c,a,b)},get:function(a){var b=this.e;return b.length===1?b[0]:pl.type(a,y)?b:b[a]},parent:function(a){return a||(a=1),this.e=[h(this.e[0],a)],this},remove:function(){return pl.each(this.e,function(){this.parentNode.removeChild(this)}),this},addClass:function(a){return pl.each(this.e,function(){pl.inArray(a,this[o].split(" "))===-1&&(this[o]+=(this[o]?" ":"")+a)}),this},hasClass:function(a){return pl.inArray(a,this.e[0][o].split(" "))!==-1},removeClass:function(a){return pl.each(this.e,function(){var b=this[o].split(" "),c=pl.inArray(a,b);c!==-1&&(b.splice(c,1),pl.empty(b)?this[A]("class"):this[o]=b.join(" "))}),this},attr:function(a,c){a=b[a]||a;if(c)pl.each(this.e,function(){this[H](a,c)});else switch(pl.type(a)){case"obj":for(var d in a)arguments.callee.call(this,d,a[d]);break;case"str":return this.e[0][D](a)}return this},removeAttr:function(a){return a=b[a]||a,pl.each(this.e,function(){this[A](a)}),this},css:function(a,b){if(b){a=g.s(a);if(pl.type(b,"int")&&!g.r[a])b+="px";else if(a==="opacity")var c=g.o(b),a=c[0],b=c[1];pl.each(this.e,function(){this.style[a]=b})}else switch(pl.type(a)){case"obj":for(c in a)arguments.callee.call(this,c,a[c]);break;case"str":return g.g(this.e[0],a)}return this},each:function(b){return pl.each(a.e,function(){b.call(this)}),this},bind:function(a,b){return d._r(a,b,1)},unbind:function(a,b){return d._r(a,b,0)},show:function(){return pl.each(this.e,function(){pl(this).css("display")==="none"&&pl(this).css("display",this[D]("plrd")||"")}),this},hide:function(){return pl.each(this.e,function(){var a=pl(this).css("display");a!=="none"&&(this[H]("plrd",a),this.style.display="none")}),this},after:function(a){if(pl.type(a,"obj")){var b=f.createElement("div");b.appendChild(a),a=b.innerHTML}return pl.each(this.e,function(){var b=this,c=f.createElement("div");c.innerHTML=a;try{pl.each(c.childNodes,function(){b.parentNode.insertBefore(this,b.nextSibling)})}catch(d){}}),this},before:function(a){if(pl.type(a,"obj")){var b=f.createElement("div");b.appendChild(a),a=b.innerHTML}return pl.each(this.e,function(){var b=this,c=f.createElement("div");c.innerHTML=a;try{pl.each(c.childNodes,function(){b.parentNode.insertBefore(this,b)})}catch(d){}}),this},append:function(a){if(pl.type(a,"obj")){var b=f.createElement("div");b.appendChild(a),a=b.innerHTML}return pl.each(this.e,function(){var b=this,c=f.createElement("div");c.innerHTML=a;try{pl.each(c.childNodes,function(){b.appendChild(this)})}catch(d){}}),this},prepend:function(a){if(pl.type(a,"obj")){var b=f.createElement("div");b.appendChild(a),a=b.innerHTML}return pl.each(this.e,function(){var b=this,c=f.createElement("div");c.innerHTML=a;try{pl.each(c.childNodes,function(){b.insertBefore(this,b.firstChild)})}catch(d){}}),this}}),pl.implement(pl.fn._,pl.fn);var c=pl.browser("ie")?"innerText":"textContent",d={r:function(){this.l=[],this._r=function(a){function b(){c||(c=!0,a())}var c=!1;if(f[B])d.a.b(f,"DOMContentLoaded",b);else if(f.attachEvent){if(f.documentElement.doScroll&&t===t.top){var e=function(){if(!c&&f.body)try{f.documentElement.doScroll("left"),b()}catch(a){setTimeout(e,0)}};e()}d.a.b(f,"readystatechange",function(){f.readyState==="complete"&&b()})}d.a.b(t,"load",b)};var a=this;return function(b){a.l.length||a._r(function(){pl.each(a.l,function(){this()})}),a.l.push(b)}}(),a:function(){function a(a){return a=a||t.event,a.fixed?a:(a.fixed=!0,a.preventDefault=a.preventDefault||function(){this.returnValue=!1},a.stopPropagation=a.stopPropagation||function(){this.cancelBubble=!0},a.target||(a.target=a.srcElement),!a.which&&a.button&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0),a)}function b(b){var b=a(b),c=this.evt[b.type],d;for(d in c)c[d].call(this,b)||(b.preventDefault(),b.stopPropagation())}var c=0;return{b:function(a,e,f){pl.browser("ie")&&a.setInterval&&a!==t&&(a=t),f.turnID||(f.turnID=++c),a.evt||(a.evt={},a.handleEvt=function(c){if(!pl.type(d.a,y))return b.call(a,c)}),a.evt[e]||(a.evt[e]={},a[B]?a[B](e,a.handleEvt,!1):a.attachEvent("on"+e,a.handleEvt)),a.evt[e][f.turnID]=f},u:function(a,b,c){var d=a.evt&&a.evt[b];if(d){delete d[c.turnID];for(var e in d)return;a.removeEventListener?a.removeEventListener(b,a.handleEvt,!1):a.detachEvent("on"+b,a.handleEvt),delete a.evt[b];for(e in a.evt)return;try{delete a.handleEvt,delete a.evt}catch(f){a[A]("handleEvt"),a[A]("evt")}}}}}(),_r:function(b,c,e){if(c)e?pl.each(a.e,function(){d.a.b(this,b,c)}):pl.each(a.e,function(){d.a.u(this,b,c)});else for(var f in b)arguments.callee(f,b[f],e);return a}},e=function(a,b,c,d){var e=a,a=e.e[0];if(!c)return a[b];if(d)switch(d){case 1:pl.each(e.e,function(){this[b]+=c});break;case-1:pl.each(e.e,function(){this[b]=c+this[b]})}else a[b]=c;return e},g={s:function(a){return a.match("-")?(a=a.split("-"),a[0]+a[1].charAt(0).toUpperCase()+a[1].substr(1)):a},o:function(a){var b=["opacity",a];switch(pl.browser()){case"ie7":b[0]="filter",b[1]="alpha(opacity="+a*100+");";break;case"ie8":b[0]="-ms-filter",b[1]="alpha(opacity="+a*100+")";break;case"safari_khtml":b[0]="-khtml-opacity";break;case"firefox":b[0]="-moz-opacity"}return b},r:function(a){return a?a.match("opacity=")?a.match("=([0-9]+)")[1]/100:a:C},p:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},g:function(a,b){return b==="opacity"&&(b=g.o(0)[0]),g.r(a.currentStyle?a.currentStyle[b]:t.getComputedStyle(a,C).getPropertyValue(b))}},h=function(a,b){return b>0?h(a.parentNode,--b):a}}(),function(){var a=!!f[s+"sByClassName"],b=!!f.querySelectorAll;pl.find=function(c){return pl.extend(c,{attr:{"":function(a,b){return!!a[D](b)},"=":function(a,b,c){return(b=a[D](b))&&b===c},"&=":function(){},"^=":function(){},"$=":function(){},"*=":function(){},"|=":function(){},"!=":function(){}},mods:{"first-child":function(){},"last-child":function(a){for(;(a=a.nextSibling)&&a.nodeType!=1;);return!!a},root:function(a){return a.nodeName.toLowerCase()!=="html"},"nth-child":function(a,b){var c=a.nodeIndex||0,d=b[3]=b[3]?(b[2]==="%"?-1:1)*b[3]:0,e=b[1];if(c)return!((c+d)%e);var f=a.parentNode.firstChild;c++;do if(f.nodeType==1&&(f.nodeIndex=++c)&&a===f&&(c+d)%e)return 0;while(f=f.nextSibling);return 1},"nth-last-child":function(a,b){var c=a.nodeIndexLast||0,d=b[3]?(b[2]==="%"?-1:1)*b[3]:0,e=b[1];if(c)return!((c+d)%e);var f=a.parentNode.lastChild;c++;do if(f.nodeType==1&&(f.nodeLastIndex=c++)&&a===f&&(c+d)%e)return 0;while(f=f.previousSibling);return 1},empty:function(a){return!!a.firstChild},parent:function(a){return!a.firstChild},"only-child":function(a){return a.parentNode[s+"sByTagName"]("*").length!=1},checked:function(a){return!a.checked},lang:function(a,b){return a.lang!==b&&f.documentElement.lang!==b},enabled:function(a){return a.disabled||a.type==="hidden"},disabled:function(a){return!a.disabled},selected:function(){return!child.selected}}}),function(d,e){e&&(d=e+" "+d),e=f;var h=[];if(d==="body *")return f.body[s+"sByTagName"]("*");if(/^[\w[:#.][\w\]*^|=!]*$/.test(d)){var i=0;switch(d.charAt(0)){case"#":i=d.slice(1),h=f[s+"ById"](i),pl.browser("ie")&&h.id!==i&&(h=f.all[i]),h=h?[h]:[];break;case".":var j=d.slice(1);if(a)h=(h=e[s+"sByClassName"](j)).length?h:[];else{for(var j=" "+j+" ",l=e[s+"sByTagName"]("*"),m=0,n;n=l[m++];)(" "+n[o]+" ").indexOf(j)!=-1&&(h[i++]=n);h=i?h:[]}break;case":":for(var l=e[s+"sByTagName"]("*"),m=0,p=d.replace(/[^(]*\(([^)]*)\)/,"$1"),q=d.replace(/\(.*/,"");n=l[m++];)c.mods[q]&&!c.mods[q](n,p)&&(h[i++]=n);h=i?h:[];break;case"[":for(var l=e[s+"sByTagName"]("*"),m=0,q=/\[([^!~^*|$ [:=]+)([$^*|]?=)?([^ :\]]+)?\]/.exec(d),r=q[1],u=q[2]||"",q=q[3];n=l[m++];)c.attr[u]&&(c.attr[u](n,r,q)||r==="class"&&c.attr[u](n,o,q))&&(h[i++]=n);h=i?h:[];break;default:h=(h=e[s+"sByTagName"](d)).length?h:[]}}else if(b&&d.indexOf("!=")==-1)h=e.querySelectorAll(d.replace(/=([^\]]+)/,'="$1"'));else{n=d.split(/ *, */);for(var v=n.length-1,w=!!v,x,y,z,A,B,D,E,F,G,H,I,J;i=n[v--];){for(y=(x=i.replace(/(\([^)]*)\+/,"$1%").replace(/(\[[^\]]+)~/,"$1&").replace(/(~|>|\+)/," $1 ").split(/ +/)).length,m=0,A=" ",l=[e];z=x[m++];)if(z!==" "&&z!==">"&&z!=="~"&&z!=="+"&&l){for(z=z.match(/([^[:.#]+)?(?:#([^[:.#]+))?(?:\.([^[:.]+))?(?:\[([^!&^*|$[:=]+)([!$^*|&]?=)?([^:\]]+)?\])?(?:\:([^(]+)(?:\(([^)]+)\))?)?/),B=z[1]||"*",D=z[2],j=z[3]?" "+z[3]+" ":"",r=z[4],u=z[5]||"",q=z[7],p=q==="nth-child"||q==="nth-last-child"?/(?:(-?\d*)n)?(?:(%|-)(\d*))?/.exec(z[8]==="even"&&"2n"||z[8]==="odd"&&"2n%1"||!/\D/.test(z[8])&&"0n%"+z[8]||z[8]):z[8],E=[],i=F=0,H=m==y;G=l[F++];)switch(A){case" ":for(I=G[s+"sByTagName"](B),G=0;J=I[G++];)(!D||J.id===D)&&(!j||(" "+J[o]+" ").indexOf(j)!=-1)&&(!r||c.attr[u]&&(c.attr[u](J,r,z[6])||r==="class"&&c.attr[u](J,o,z[6])))&&!J.yeasss&&(c.mods[q]?!c.mods[q](J,p):!q)&&(H&&(J.yeasss=1),E[i++]=J);break;case"~":for(B=B.toLowerCase();(G=G.nextSibling)&&!G.yeasss;)G.nodeType==1&&(B==="*"||G.nodeName.toLowerCase()===B)&&(!D||G.id===D)&&(!j||(" "+G[o]+" ").indexOf(j)!=-1)&&(!r||c.attr[u]&&(c.attr[u](J,r,z[6])||r==="class"&&c.attr[u](J,o,z[6])))&&!G.yeasss&&(c.mods[q]?!c.mods[q](G,p):!q)&&(H&&(G.yeasss=1),E[i++]=G);break;case"+":for(;(G=G.nextSibling)&&G.nodeType!=1;);G&&(G.nodeName.toLowerCase()===B.toLowerCase()||B==="*")&&(!D||G.id===D)&&(!j||(" "+J[o]+" ").indexOf(j)!=-1)&&(!r||c.attr[u]&&(c.attr[u](J,r,z[6])||r==="class"&&c.attr[u](J,o,z[6])))&&!G.yeasss&&(c.mods[q]?!c.mods[q](G,p):!q)&&(H&&(G.yeasss=1),E[i++]=G);break;case">":for(I=G[s+"sByTagName"](B),m=0;J=I[m++];)J.parentNode===G&&(!D||J.id===D)&&(!j||(" "+J[o]+" ").indexOf(j)!=-1)&&(!r||c.attr[u]&&(c.attr[u](J,r,z[6])||r==="class"&&c.attr[u](J,o,z[6])))&&!J.yeasss&&(c.mods[q]?!c.mods[q](J,p):!q)&&(H&&(J.yeasss=1),E[i++]=J)}l=E}else A=z;if(w){if(!l.concat){for(E=[],G=0;J=l[G];)E[G++]=J;l=E}h=l.concat(h.length==1?h[0]:h)}else h=l}for(i=h.length;i--;)h[i].yeasss=h[i].nodeIndex=h[i].nodeIndexLast=C}return h}}({})}()})(this,document,"prototype","addEventListener","getElement","className","null","undef","<([A-z]+)>",null,function(){},"setAttribute","getAttribute","removeAttribute")