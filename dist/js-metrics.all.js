/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
//     Underscore.js 1.4.2
//     http://underscorejs.org
//     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.
(function(){var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,s=Function.prototype,o=r.push,u=r.slice,a=r.concat,f=r.unshift,l=i.toString,c=i.hasOwnProperty,h=r.forEach,p=r.map,d=r.reduce,v=r.reduceRight,m=r.filter,g=r.every,y=r.some,b=r.indexOf,w=r.lastIndexOf,E=Array.isArray,S=Object.keys,x=s.bind,T=function(e){if(e instanceof T)return e;if(!(this instanceof T))return new T(e);this._wrapped=e};typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(exports=module.exports=T),exports._=T):e._=T,T.VERSION="1.4.2";var N=T.each=T.forEach=function(e,t,r){if(e==null)return;if(h&&e.forEach===h)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,s=e.length;i<s;i++)if(t.call(r,e[i],i,e)===n)return}else for(var o in e)if(T.has(e,o)&&t.call(r,e[o],o,e)===n)return};T.map=T.collect=function(e,t,n){var r=[];return e==null?r:p&&e.map===p?e.map(t,n):(N(e,function(e,i,s){r[r.length]=t.call(n,e,i,s)}),r)},T.reduce=T.foldl=T.inject=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(d&&e.reduce===d)return r&&(t=T.bind(t,r)),i?e.reduce(t,n):e.reduce(t);N(e,function(e,s,o){i?n=t.call(r,n,e,s,o):(n=e,i=!0)});if(!i)throw new TypeError("Reduce of empty array with no initial value");return n},T.reduceRight=T.foldr=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(v&&e.reduceRight===v)return r&&(t=T.bind(t,r)),arguments.length>2?e.reduceRight(t,n):e.reduceRight(t);var s=e.length;if(s!==+s){var o=T.keys(e);s=o.length}N(e,function(u,a,f){a=o?o[--s]:--s,i?n=t.call(r,n,e[a],a,f):(n=e[a],i=!0)});if(!i)throw new TypeError("Reduce of empty array with no initial value");return n},T.find=T.detect=function(e,t,n){var r;return C(e,function(e,i,s){if(t.call(n,e,i,s))return r=e,!0}),r},T.filter=T.select=function(e,t,n){var r=[];return e==null?r:m&&e.filter===m?e.filter(t,n):(N(e,function(e,i,s){t.call(n,e,i,s)&&(r[r.length]=e)}),r)},T.reject=function(e,t,n){var r=[];return e==null?r:(N(e,function(e,i,s){t.call(n,e,i,s)||(r[r.length]=e)}),r)},T.every=T.all=function(e,t,r){t||(t=T.identity);var i=!0;return e==null?i:g&&e.every===g?e.every(t,r):(N(e,function(e,s,o){if(!(i=i&&t.call(r,e,s,o)))return n}),!!i)};var C=T.some=T.any=function(e,t,r){t||(t=T.identity);var i=!1;return e==null?i:y&&e.some===y?e.some(t,r):(N(e,function(e,s,o){if(i||(i=t.call(r,e,s,o)))return n}),!!i)};T.contains=T.include=function(e,t){var n=!1;return e==null?n:b&&e.indexOf===b?e.indexOf(t)!=-1:(n=C(e,function(e){return e===t}),n)},T.invoke=function(e,t){var n=u.call(arguments,2);return T.map(e,function(e){return(T.isFunction(t)?t:e[t]).apply(e,n)})},T.pluck=function(e,t){return T.map(e,function(e){return e[t]})},T.where=function(e,t){return T.isEmpty(t)?[]:T.filter(e,function(e){for(var n in t)if(t[n]!==e[n])return!1;return!0})},T.max=function(e,t,n){if(!t&&T.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);if(!t&&T.isEmpty(e))return-Infinity;var r={computed:-Infinity};return N(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o>=r.computed&&(r={value:e,computed:o})}),r.value},T.min=function(e,t,n){if(!t&&T.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);if(!t&&T.isEmpty(e))return Infinity;var r={computed:Infinity};return N(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o<r.computed&&(r={value:e,computed:o})}),r.value},T.shuffle=function(e){var t,n=0,r=[];return N(e,function(e){t=T.random(n++),r[n-1]=r[t],r[t]=e}),r};var k=function(e){return T.isFunction(e)?e:function(t){return t[e]}};T.sortBy=function(e,t,n){var r=k(t);return T.pluck(T.map(e,function(e,t,i){return{value:e,index:t,criteria:r.call(n,e,t,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||n===void 0)return 1;if(n<r||r===void 0)return-1}return e.index<t.index?-1:1}),"value")};var L=function(e,t,n,r){var i={},s=k(t);return N(e,function(t,o){var u=s.call(n,t,o,e);r(i,u,t)}),i};T.groupBy=function(e,t,n){return L(e,t,n,function(e,t,n){(T.has(e,t)?e[t]:e[t]=[]).push(n)})},T.countBy=function(e,t,n){return L(e,t,n,function(e,t,n){T.has(e,t)||(e[t]=0),e[t]++})},T.sortedIndex=function(e,t,n,r){n=n==null?T.identity:k(n);var i=n.call(r,t),s=0,o=e.length;while(s<o){var u=s+o>>>1;n.call(r,e[u])<i?s=u+1:o=u}return s},T.toArray=function(e){return e?e.length===+e.length?u.call(e):T.values(e):[]},T.size=function(e){return e.length===+e.length?e.length:T.keys(e).length},T.first=T.head=T.take=function(e,t,n){return t!=null&&!n?u.call(e,0,t):e[0]},T.initial=function(e,t,n){return u.call(e,0,e.length-(t==null||n?1:t))},T.last=function(e,t,n){return t!=null&&!n?u.call(e,Math.max(e.length-t,0)):e[e.length-1]},T.rest=T.tail=T.drop=function(e,t,n){return u.call(e,t==null||n?1:t)},T.compact=function(e){return T.filter(e,function(e){return!!e})};var A=function(e,t,n){return N(e,function(e){T.isArray(e)?t?o.apply(n,e):A(e,t,n):n.push(e)}),n};T.flatten=function(e,t){return A(e,t,[])},T.without=function(e){return T.difference(e,u.call(arguments,1))},T.uniq=T.unique=function(e,t,n,r){var i=n?T.map(e,n,r):e,s=[],o=[];return N(i,function(n,r){if(t?!r||o[o.length-1]!==n:!T.contains(o,n))o.push(n),s.push(e[r])}),s},T.union=function(){return T.uniq(a.apply(r,arguments))},T.intersection=function(e){var t=u.call(arguments,1);return T.filter(T.uniq(e),function(e){return T.every(t,function(t){return T.indexOf(t,e)>=0})})},T.difference=function(e){var t=a.apply(r,u.call(arguments,1));return T.filter(e,function(e){return!T.contains(t,e)})},T.zip=function(){var e=u.call(arguments),t=T.max(T.pluck(e,"length")),n=new Array(t);for(var r=0;r<t;r++)n[r]=T.pluck(e,""+r);return n},T.object=function(e,t){var n={};for(var r=0,i=e.length;r<i;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},T.indexOf=function(e,t,n){if(e==null)return-1;var r=0,i=e.length;if(n){if(typeof n!="number")return r=T.sortedIndex(e,t),e[r]===t?r:-1;r=n<0?Math.max(0,i+n):n}if(b&&e.indexOf===b)return e.indexOf(t,n);for(;r<i;r++)if(e[r]===t)return r;return-1},T.lastIndexOf=function(e,t,n){if(e==null)return-1;var r=n!=null;if(w&&e.lastIndexOf===w)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);var i=r?n:e.length;while(i--)if(e[i]===t)return i;return-1},T.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;var r=Math.max(Math.ceil((t-e)/n),0),i=0,s=new Array(r);while(i<r)s[i++]=e,e+=n;return s};var O=function(){};T.bind=function(t,n){var r,i;if(t.bind===x&&x)return x.apply(t,u.call(arguments,1));if(!T.isFunction(t))throw new TypeError;return i=u.call(arguments,2),r=function(){if(this instanceof r){O.prototype=t.prototype;var e=new O,s=t.apply(e,i.concat(u.call(arguments)));return Object(s)===s?s:e}return t.apply(n,i.concat(u.call(arguments)))}},T.bindAll=function(e){var t=u.call(arguments,1);return t.length==0&&(t=T.functions(e)),N(t,function(t){e[t]=T.bind(e[t],e)}),e},T.memoize=function(e,t){var n={};return t||(t=T.identity),function(){var r=t.apply(this,arguments);return T.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},T.delay=function(e,t){var n=u.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},T.defer=function(e){return T.delay.apply(T,[e,1].concat(u.call(arguments,1)))},T.throttle=function(e,t){var n,r,i,s,o,u,a=T.debounce(function(){o=s=!1},t);return function(){n=this,r=arguments;var f=function(){i=null,o&&(u=e.apply(n,r)),a()};return i||(i=setTimeout(f,t)),s?o=!0:(s=!0,u=e.apply(n,r)),a(),u}},T.debounce=function(e,t,n){var r,i;return function(){var s=this,o=arguments,u=function(){r=null,n||(i=e.apply(s,o))},a=n&&!r;return clearTimeout(r),r=setTimeout(u,t),a&&(i=e.apply(s,o)),i}},T.once=function(e){var t=!1,n;return function(){return t?n:(t=!0,n=e.apply(this,arguments),e=null,n)}},T.wrap=function(e,t){return function(){var n=[e];return o.apply(n,arguments),t.apply(this,n)}},T.compose=function(){var e=arguments;return function(){var t=arguments;for(var n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},T.after=function(e,t){return e<=0?t():function(){if(--e<1)return t.apply(this,arguments)}},T.keys=S||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)T.has(e,n)&&(t[t.length]=n);return t},T.values=function(e){var t=[];for(var n in e)T.has(e,n)&&t.push(e[n]);return t},T.pairs=function(e){var t=[];for(var n in e)T.has(e,n)&&t.push([n,e[n]]);return t},T.invert=function(e){var t={};for(var n in e)T.has(e,n)&&(t[e[n]]=n);return t},T.functions=T.methods=function(e){var t=[];for(var n in e)T.isFunction(e[n])&&t.push(n);return t.sort()},T.extend=function(e){return N(u.call(arguments,1),function(t){for(var n in t)e[n]=t[n]}),e},T.pick=function(e){var t={},n=a.apply(r,u.call(arguments,1));return N(n,function(n){n in e&&(t[n]=e[n])}),t},T.omit=function(e){var t={},n=a.apply(r,u.call(arguments,1));for(var i in e)T.contains(n,i)||(t[i]=e[i]);return t},T.defaults=function(e){return N(u.call(arguments,1),function(t){for(var n in t)e[n]==null&&(e[n]=t[n])}),e},T.clone=function(e){return T.isObject(e)?T.isArray(e)?e.slice():T.extend({},e):e},T.tap=function(e,t){return t(e),e};var M=function(e,t,n,r){if(e===t)return e!==0||1/e==1/t;if(e==null||t==null)return e===t;e instanceof T&&(e=e._wrapped),t instanceof T&&(t=t._wrapped);var i=l.call(e);if(i!=l.call(t))return!1;switch(i){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:e==0?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if(typeof e!="object"||typeof t!="object")return!1;var s=n.length;while(s--)if(n[s]==e)return r[s]==t;n.push(e),r.push(t);var o=0,u=!0;if(i=="[object Array]"){o=e.length,u=o==t.length;if(u)while(o--)if(!(u=M(e[o],t[o],n,r)))break}else{var a=e.constructor,f=t.constructor;if(a!==f&&!(T.isFunction(a)&&a instanceof a&&T.isFunction(f)&&f instanceof f))return!1;for(var c in e)if(T.has(e,c)){o++;if(!(u=T.has(t,c)&&M(e[c],t[c],n,r)))break}if(u){for(c in t)if(T.has(t,c)&&!(o--))break;u=!o}}return n.pop(),r.pop(),u};T.isEqual=function(e,t){return M(e,t,[],[])},T.isEmpty=function(e){if(e==null)return!0;if(T.isArray(e)||T.isString(e))return e.length===0;for(var t in e)if(T.has(e,t))return!1;return!0},T.isElement=function(e){return!!e&&e.nodeType===1},T.isArray=E||function(e){return l.call(e)=="[object Array]"},T.isObject=function(e){return e===Object(e)},N(["Arguments","Function","String","Number","Date","RegExp"],function(e){T["is"+e]=function(t){return l.call(t)=="[object "+e+"]"}}),T.isArguments(arguments)||(T.isArguments=function(e){return!!e&&!!T.has(e,"callee")}),typeof /./!="function"&&(T.isFunction=function(e){return typeof e=="function"}),T.isFinite=function(e){return T.isNumber(e)&&isFinite(e)},T.isNaN=function(e){return T.isNumber(e)&&e!=+e},T.isBoolean=function(e){return e===!0||e===!1||l.call(e)=="[object Boolean]"},T.isNull=function(e){return e===null},T.isUndefined=function(e){return e===void 0},T.has=function(e,t){return c.call(e,t)},T.noConflict=function(){return e._=t,this},T.identity=function(e){return e},T.times=function(e,t,n){for(var r=0;r<e;r++)t.call(n,r)},T.random=function(e,t){return t==null&&(t=e,e=0),e+(0|Math.random()*(t-e+1))};var _={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};_.unescape=T.invert(_.escape);var D={escape:new RegExp("["+T.keys(_.escape).join("")+"]","g"),unescape:new RegExp("("+T.keys(_.unescape).join("|")+")","g")};T.each(["escape","unescape"],function(e){T[e]=function(t){return t==null?"":(""+t).replace(D[e],function(t){return _[e][t]})}}),T.result=function(e,t){if(e==null)return null;var n=e[t];return T.isFunction(n)?n.call(e):n},T.mixin=function(e){N(T.functions(e),function(t){var n=T[t]=e[t];T.prototype[t]=function(){var e=[this._wrapped];return o.apply(e,arguments),F.call(this,n.apply(T,e))}})};var P=0;T.uniqueId=function(e){var t=P++;return e?e+t:t},T.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var H=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},j=/\\|'|\r|\n|\t|\u2028|\u2029/g;T.template=function(e,t,n){n=T.defaults({},n,T.templateSettings);var r=new RegExp([(n.escape||H).source,(n.interpolate||H).source,(n.evaluate||H).source].join("|")+"|$","g"),i=0,s="__p+='";e.replace(r,function(t,n,r,o,u){s+=e.slice(i,u).replace(j,function(e){return"\\"+B[e]}),s+=n?"'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?"'+\n((__t=("+r+"))==null?'':__t)+\n'":o?"';\n"+o+"\n__p+='":"",i=u+t.length}),s+="';\n",n.variable||(s="with(obj||{}){\n"+s+"}\n"),s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{var o=new Function(n.variable||"obj","_",s)}catch(u){throw u.source=s,u}if(t)return o(t,T);var a=function(e){return o.call(this,e,T)};return a.source="function("+(n.variable||"obj")+"){\n"+s+"}",a},T.chain=function(e){return T(e).chain()};var F=function(e){return this._chain?T(e).chain():e};T.mixin(T),N(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];T.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),(e=="shift"||e=="splice")&&n.length===0&&delete n[0],F.call(this,n)}}),N(["concat","join","slice"],function(e){var t=r[e];T.prototype[e]=function(){return F.call(this,t.apply(this._wrapped,arguments))}}),T.extend(T.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
// https://github.com/ahabra/tstring
// Author: Abdul Habra
// JavaScript String processing library

/** define namespace */
var tek271Libs = tek271Libs || {};
tek271Libs.text = tek271Libs.text || {};

/** make it easy */
function tstring(s, caseSensitive) {
	return new tek271Libs.text.String(s, caseSensitive);
}

/** constructor */
tek271Libs.text.String = function(s, caseSensitive) {
	this.__value= this.isUndefined(s) ? '' : s;
	if (this.isDefined(caseSensitive)) {
		this.__caseSensitive= caseSensitive;
	}
	return this;
};

tek271Libs.text.String.prototype.SPACES_ARRAY = [' ', '\u0009', '\u000a', '\u000b', '\u000c', '\u000d', '\u001c', '\u001d', '\u001e', '\u001f'];
tek271Libs.text.String.prototype.SPACES = tek271Libs.text.String.prototype.SPACES_ARRAY.join();
tek271Libs.text.String.prototype.VERSION= '0.0.1';

tek271Libs.text.String.prototype._extractValue = function(s) {
	return this.isOfThisType(s)? s.value() : s;
};

tek271Libs.text.String.prototype._isSpaceChar = function(char) {
	return this.SPACES.indexOf(char) >=0;
};

tek271Libs.text.String.prototype._empty = function() {
	return new tek271Libs.text.String('');
};

tek271Libs.text.String.prototype._null = function() {
	return new tek271Libs.text.String(null, true);
};

tek271Libs.text.String.prototype.value= function() {
	return this.__value;
};

tek271Libs.text.String.prototype.copy = function() {
	return new tek271Libs.text.String(this.__value, this.isCaseSensitive());
};

tek271Libs.text.String.prototype.toString= function() {
	return this.__value;
};

tek271Libs.text.String.prototype.equals = function(other) {
	if (this.isUndefinedOrNull(other)) return false;
	if (other === this) return true;
	
	var ov= this._extractValue(other);
	if (typeof ov !== 'string') return false;
	
	var v= this.__value;
	if (this.isCaseSensitive()) {
		return v === ov;
	} else {
		return v.toLowerCase() === ov.toLowerCase();
	}
};

tek271Libs.text.String.prototype.equalsAny = function(others) {
	for (var i=0, n=arguments.length; i<n; i++) {
		if (this.equals(arguments[i])) return true;
	}
	return false;
};

tek271Libs.text.String.prototype.size = function() {
	var v= this.__value;
	
	if (v===null || v==='') return 0;
	return v.length;
};
	
tek271Libs.text.String.prototype.isOfThisType = function(val) {
	if (val===null) return false;
	if (typeof val !== 'object') return false;

	for (var k in this) {
		if (k!=='__value' && k!=='__caseSensitive') {
			if (this.isUndefined(val[k])) return false;
		}
	}
	return this.VERSION === val.VERSION;
};

tek271Libs.text.String.prototype.caseSensitive = function(isCaseSensitive) {
	isCaseSensitive= this.isUndefined(isCaseSensitive) ? true : isCaseSensitive;
	this.__caseSensitive= isCaseSensitive? true : false;
	return this;
};

tek271Libs.text.String.prototype.isCaseSensitive = function() {
	if (this.isUndefined(this.__caseSensitive)) return true;
	return this.__caseSensitive;
};

tek271Libs.text.String.prototype.indexOf = function(sub, startPos) {
	var s= this._extractValue(sub);
	var v= this.__value;
	if (v===null || s===null) return -1;
	if (v.length===0 && s.length===0) return 0;
	
	if (this.isCaseSensitive()){
		return v.indexOf(s, startPos);
	}
	return v.toLowerCase().indexOf(s.toLowerCase(), startPos);
};

tek271Libs.text.String.prototype.lastIndexOf = function(sub, startPos) {
	var s= this._extractValue(sub);
	var v= this.__value;
	if (v===null || s===null) return -1;
	if (v.length===0 && s.length===0) return 0;
	
	startPos = startPos || 0;
	if (this.isCaseSensitive()) {
		return v.lastIndexOf(s, startPos);
	}
	
	return v.toLowerCase().lastIndexOf(s.toLowerCase(), startPos);
};

tek271Libs.text.String.prototype.contains = function(sub) {
	if (this.__value===sub) return true;
	return this.indexOf(sub, 0) >=0;
};

tek271Libs.text.String.prototype.containsAny = function(valuesArray) {
	for (var i=0, n=arguments.length; i<n; i++) {
		if (this.contains(arguments[i])) return true;
	}
	return false;
};

tek271Libs.text.String.prototype.containsAnyChar = function(chars) {
	if (this.isUndefinedOrNull(chars)) return false;
	
	for (var i=0, n=chars.length; i<n; i++) {
		if (this.contains(chars.charAt(i))) return true;
	}
	
	return false;
};

tek271Libs.text.String.prototype.containsNone = function(searchArray) {
	for (var i=0, n=arguments.length; i<n; i++) {
		if (this.contains(arguments[i])) return false;
	}
	return true;
};

tek271Libs.text.String.prototype.containsNoneChars = function(chars) {
	if (this.isUndefinedOrNull(chars)) return true;
	
	for (var i=0, n=chars.length; i<n; i++) {
		if (this.contains(chars.charAt(i))) return false;
	}
	return true;
};

tek271Libs.text.String.prototype.containsOnly = function(chars) {
	if (this.isUndefinedOrNull(chars)) return false;
	
	var v= this.__value;
	if (!this.isCaseSensitive()) {
		chars= chars.toLowerCase();
		v= v.toLowerCase();
	}
	for (var i=0, n=v.length; i<n; i++) {
		if (chars.indexOf(v.charAt(i))<0) return false;
	}
	
	return true;
};

tek271Libs.text.String.prototype.containsWhitespace = function() {
	var v= this.__value;
	for (var i=0, n= v.length; i<n; i++) {
		if (this._isSpaceChar(v.charAt(i))) return true;
	}
	return false;
};

tek271Libs.text.String.prototype.isEmpty = function() {
	return this.size()===0;
};

tek271Libs.text.String.prototype.isNotEmpty = function() {
	return !this.isEmpty();
};

tek271Libs.text.String.prototype.isBlank = function() {
	if (this.isEmpty()) return true;
	
	var v= this.__value;
	for (var i=0, n= v.length; i<n; i++) {
		if (!this._isSpaceChar(v.charAt(i))) return false;
	}
	return true;
};

tek271Libs.text.String.prototype.isNotBlank = function() {
	return !this.isBlank();
};

tek271Libs.text.String.prototype.substring = function(start, end) {
	this.__value= this.__value.substring(start, end);
	return this;
};

tek271Libs.text.String.prototype.substringAfter = function(sep) {
	if (this.isEmpty()) return this;
	if (sep===null) return this._empty();
	sep = this._extractValue(sep);
	
	var pos= this.indexOf(sep, 0);
	if (pos<0) return this._empty();
	
	var v= this.__value.substring(pos+sep.length);
	return new tek271Libs.text.String(v, this.isCaseSensitive());
};

tek271Libs.text.String.prototype.substringAfterLast = function(sep) {
	var size= this.size();
	if (size===0) return this;
	if (sep===null || sep==='') return this._empty();
	sep = this._extractValue(sep);
	
	var pos= this.lastIndexOf(sep, size);
	if (pos<0 || pos===size-sep.length) return this._empty();
	
	var v= this.__value.substring(pos+sep.length);
	return new tek271Libs.text.String(v, this.isCaseSensitive());
};

tek271Libs.text.String.prototype.substringBefore = function(sep) {
	if (this.isEmpty()) return this;
	sep= this._extractValue(sep);
	if (sep===null) return this;
	if (sep==='') return this._empty();
	
	var pos= this.indexOf(sep, 0);
	if (pos<0) return this;
	
	var v= this.__value.substring(0, pos);
	return new tek271Libs.text.String(v, this.isCaseSensitive());
};

tek271Libs.text.String.prototype.substringBeforeLast = function(sep) {
	var valueLen= this.size();
	if (valueLen===0) return this;
	sep= this._extractValue(sep);
	if (sep===null || sep==='') return this;

	var pos= this.lastIndexOf(sep, valueLen);
	if (pos < 0) return this;
	
	var v= this.__value.substring(0, pos);
	return new tek271Libs.text.String(v, this.isCaseSensitive());
};

tek271Libs.text.String.prototype.substringBetween = function(open, close) {
	close= close || open;
	var v= this.__value;
	if (v===null || open===null || close===null) return this._null();
	open= this._extractValue(open);
	close= this._extractValue(close);
	
	var start = this.indexOf(open, 0);
	if (start<0) return this._null();
	
	var end= this.indexOf(close, start+open.length);
	if (end<0) return this._null();
	
	v= v.substring(start+open.length, end);
	return new tek271Libs.text.String(v, this.isCaseSensitive());
};

tek271Libs.text.String.prototype.substringsBetween = function(open, close) {
	var v= this.__value;
	if (v===null || open===null || close===null) return null;
	close= close || open;
	
	var valueLen= this.size();
	if (valueLen===0) return [];
	
	open= this._extractValue(open);
	close= this._extractValue(close);
	var openLen=open.length, closeLen=close.length, pos=0, list= [];
	var start, end, diff=valueLen-closeLen;
	while (pos < diff) {
		start= this.indexOf(open, pos);
		if (start < 0) break;
		
		start+= openLen;
		end= this.indexOf(close, start);
		if (end<0) break;
		
		list.push(v.substring(start, end));
		pos= end + closeLen;
	}
	return list;
};

tek271Libs.text.String.prototype.charAt = function(index) {
	return this.__value.charAt(index);
};

tek271Libs.text.String.prototype.toCharArray = function() {
	return this.__value.split('');
};

tek271Libs.text.String.prototype.forEachChar = function(callback) {
	var v= this.__value;
	for (var i=0, n=this.size(); i<n; i++) {
		if (callback.call({}, v.charAt(i), i) === false) return;
	}
};

tek271Libs.text.String.prototype.split = function(sep, limit) {
	return this.__value.split(sep, limit);
};

tek271Libs.text.String.prototype.join = function(sep, items) {
	var len= arguments.length;
	var ar= new Array(len);
	ar[0]= this.__value;
	for (var i=1; i<len; i++) {
		ar[i]= arguments[i];
	}
	var v= ar.join(sep);
	return new tek271Libs.text.String(v, this.isCaseSensitive());
};

tek271Libs.text.String.prototype.repeat = function(count, sep) {
	sep= sep || '';
	var buf= '';
	var v= this.__value;
	for (var i=0; i<count; i++) {
		buf += v;
		if (i<count-1) buf += sep;
	}
	return new tek271Libs.text.String(buf, this.isCaseSensitive());
};

tek271Libs.text.String.prototype.defaultString = function(defaultValue) {
	if (this.__value!==null)	return this;

	if (this.isUndefined(defaultValue)) defaultValue= '';
	return new tek271Libs.text.String(defaultValue, this.isCaseSensitive());
};

tek271Libs.text.String.prototype.startsWith = function(prefixes) {
	if (this.isUndefined(prefixes)) return true;
	
	for (var i=0, n=arguments.length; i<n; i++) {
		if (this.indexOf(arguments[i]) >=0) return true;
	}
	return false;
};

tek271Libs.text.String.prototype.endsWith = function(suffixes) {
	if (this.isUndefined(suffixes)) return true;
	
	var sz= this.size();
	for (var i=0, n=arguments.length; i<n; i++) {
		var suffix= arguments[i];
		var pos= this.indexOf(suffix);
		if (pos === sz-suffix.length) return true;
	}
	return false;
};

tek271Libs.text.String.prototype.caseLower = function() {
	return new tek271Libs.text.String(this.__value.toLowerCase(), this.isCaseSensitive());
};

tek271Libs.text.String.prototype.caseUpper = function() {
	return new tek271Libs.text.String(this.__value.toUpperCase(), this.isCaseSensitive());
};

tek271Libs.text.String.prototype.caseSwap = function() {
	var ar= this.toCharArray();
	for (var i=0, n=ar.length; i<n; i++) {
		var ch= ar[i];
		ch= ch<'a' ? ch.toLowerCase() : ch.toUpperCase();
		ar[i]= ch;
	}
	return new tek271Libs.text.String(ar.join(''), this.isCaseSensitive());
};

tek271Libs.text.String.prototype.caseCapitalize = function() {
	var ar= this.__value.split(' ');
	for (var i=0, n=ar.length; i<n; i++) {
		var word= ar[i];
		word= word.charAt(0).toUpperCase() + word.substring(1);
		ar[i]= word;
	}
	return new tek271Libs.text.String(ar.join(' '), this.isCaseSensitive());
};

tek271Libs.text.String.prototype.isWhitespace = function() {
	var n= this.size();
	if (n===0) return true;
	
	for (var i=0; i<n; i++) {
		var ch= this.charAt(i);
		if (!this._isSpaceChar(ch)) return false;
	}
	return true;
};

tek271Libs.text.String.prototype.isDigits = function() {
	var n= this.size();
	if (n===0) return false;
	
	for (var i=0; i<n; i++) {
		var ch= this.charAt(i);
		if (ch < '0' || ch > '9') return false;
	}
	return true;
};

tek271Libs.text.String.prototype.isNumber = function() {
	var v= this.__value;
	return !isNaN(parseFloat(v)) && isFinite(v);
};

tek271Libs.text.String.prototype.left = function(len) {
	if (this.isUndefined(len)) len= 1;
	if (len < 1) {
		return this._empty();
	}
	if (this.size() <= len) return this;
	
	var v= this.__value.substring(0, len);
	return new tek271Libs.text.String(v, this.isCaseSensitive());
};

tek271Libs.text.String.prototype.head = tek271Libs.text.String.prototype.left;

tek271Libs.text.String.prototype.right = function(len) {
	if (this.isUndefined(len)) len= 1;
	if (len < 1) {
		return this._empty();
	}
	var n= this.size();
	if (n <= len) return this;
	
	var v= this.__value.substring(n- len);
	return new tek271Libs.text.String(v, this.isCaseSensitive());
};

tek271Libs.text.String.prototype.tail = function(start) {
	if (this.isUndefined(start)) start= 1;
	var n= this.size();
	if (start>=n) {
		return this._empty();
	}
	
	var v= this.__value.substring(start);
	return new tek271Libs.text.String(v, this.isCaseSensitive());
};

tek271Libs.text.String.prototype.ltrim = function(charsToTrim) {
	if (charsToTrim===null) return this;
	charsToTrim= this.isUndefined(charsToTrim) ? this.SPACES : charsToTrim+'';

	var i, n= this.size();
	for (i=0; i<n; i++) {
		var ch= this.charAt(i);
		if (charsToTrim.indexOf(ch) < 0) break;
	}
	if (i===0) return this;
	var v= this.__value.substring(i);
	return new tek271Libs.text.String(v, this.isCaseSensitive());
};

tek271Libs.text.String.prototype.rtrim = function(charsToTrim) {
	if (charsToTrim===null) return this;
	charsToTrim= this.isUndefined(charsToTrim) ? this.SPACES : charsToTrim+'';

	var i, n= this.size()-1;
	for (i=n; i>=0; i--) {
		var ch= this.charAt(i);
		if (charsToTrim.indexOf(ch) < 0) break;
	}
	if (i===n) return this;
	var v= this.__value.substring(0,i+1);
	return new tek271Libs.text.String(v, this.isCaseSensitive());
};

tek271Libs.text.String.prototype.trim = function(charsToTrim) {
	return this.ltrim(charsToTrim).rtrim(charsToTrim);
};

tek271Libs.text.String.prototype.replaceRegEx = function(regex, newString) {
	var v = this.__value.replace(regex, newString);
	return new tek271Libs.text.String(v, this.isCaseSensitive());
};

tek271Libs.text.String.prototype.replace = function(oldString, newString, count) {
	oldString= '' + oldString;
	if (this.isEmpty() || oldString.length===0 || newString===null || count < 1) return this;
	if (this.isUndefined(count)) count= this.size();
	newString= '' + newString;
	
	var end= this.indexOf(oldString);
	if (end < 0) return this;
	
	var replLen= oldString.length, buf= '', start=0;
	var value= this.__value;
	while (end >= 0) {
		buf += value.substring(start, end) + newString;
		start= end + replLen;
		if (--count <= 0) break;
		end= this.indexOf(oldString, start);
	}
	buf += value.substring(start);
	return new tek271Libs.text.String(buf, this.isCaseSensitive());
};

tek271Libs.text.String.prototype.replacePairs = function(pairs, count) {
	var s= this;
	for (var k in pairs) {
		if (pairs.hasOwnProperty(k)) {
			s= s.replace(k, pairs[k], count);
		}
	}
	return s;
};

tek271Libs.text.String.prototype.remove = function(value, count) {
	var isArray= Object.prototype.toString.call(value) === '[object Array]';
	if (! isArray) {
		return this.replace(value, '', count);
	}
	
	var s= this;
	for (var i=0, n=value.length; i<n; i++) {
		s= s.replace(value[i], '', count);
	}
	return s;
};

tek271Libs.text.String.prototype.removeSpaces = function() {
	return this.remove(this.SPACES_ARRAY);
};

tek271Libs.text.String.prototype.normalizeSpace = function() {
	var v= this.trim();
	v= v.value().replace(/\s+/g, ' ');
	return new tek271Libs.text.String(v, this.isCaseSensitive());
};

tek271Libs.text.String.prototype.reverse = function() {
	var v= this.__value.split('').reverse().join('');
	return new tek271Libs.text.String(v, this.isCaseSensitive());
};

tek271Libs.text.String.prototype.isUndefined = function(v) {
	return v===void 0;
};

tek271Libs.text.String.prototype.isDefined = function(v) {
	return ! this.isUndefined(v);
};

tek271Libs.text.String.prototype.isUndefinedOrNull = function(v) {
	return v===void 0 || v===null;
};


// Splitter, Joiner
	
/*global _, window, tstring */

var tek271Libs= tek271Libs || {};

tek271Libs.namespace = function(path) {
	if (_.isUndefined(path) || path===null || tstring(path).isBlank()) { return;}
  
	var parent= window;
	_.each(path.split('.'), function(part) {
		part= tstring(part).trim();
		parent[part]= parent[part] || {};
		parent= parent[part];
	});
  
};

var namespace = tek271Libs.namespace;

/*
 Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
 Copyright (C) 2012 Mathias Bynens <mathias@qiwi.be>
 Copyright (C) 2012 Joost-Wim Boekesteijn <joost-wim@boekesteijn.nl>
 Copyright (C) 2012 Kris Kowal <kris.kowal@cixar.com>
 Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
 Copyright (C) 2012 Arpad Borsos <arpad.borsos@googlemail.com>
 Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/*jslint bitwise:true plusplus:true */
/*global esprima:true, define:true, exports:true, window: true,
 throwError: true, generateStatement: true, peek: true,
 parseAssignmentExpression: true, parseBlock: true, parseExpression: true,
 parseFunctionDeclaration: true, parseFunctionExpression: true,
 parseFunctionSourceElements: true, parseVariableIdentifier: true,
 parseLeftHandSideExpression: true,
 parseStatement: true, parseSourceElement: true */

(function (root, factory) {
	'use strict';

	// Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
	// Rhino, and plain browser loading.
	if (typeof define === 'function' && define.amd) {
		define(['exports'], factory);
	} else if (typeof exports !== 'undefined') {
		factory(exports);
	} else {
		factory((root.esprima = {}));
	}
}(this, function (exports) {
	'use strict';

	var Token,
		TokenName,
		Syntax,
		PropertyKind,
		Messages,
		Regex,
		SyntaxTreeDelegate,
		source,
		strict,
		index,
		lineNumber,
		lineStart,
		length,
		delegate,
		lookahead,
		state,
		extra;

	Token = {
		BooleanLiteral: 1,
		EOF: 2,
		Identifier: 3,
		Keyword: 4,
		NullLiteral: 5,
		NumericLiteral: 6,
		Punctuator: 7,
		StringLiteral: 8
	};

	TokenName = {};
	TokenName[Token.BooleanLiteral] = 'Boolean';
	TokenName[Token.EOF] = '<end>';
	TokenName[Token.Identifier] = 'Identifier';
	TokenName[Token.Keyword] = 'Keyword';
	TokenName[Token.NullLiteral] = 'Null';
	TokenName[Token.NumericLiteral] = 'Numeric';
	TokenName[Token.Punctuator] = 'Punctuator';
	TokenName[Token.StringLiteral] = 'String';

	Syntax = {
		AssignmentExpression: 'AssignmentExpression',
		ArrayExpression: 'ArrayExpression',
		BlockStatement: 'BlockStatement',
		BinaryExpression: 'BinaryExpression',
		BreakStatement: 'BreakStatement',
		CallExpression: 'CallExpression',
		CatchClause: 'CatchClause',
		ConditionalExpression: 'ConditionalExpression',
		ContinueStatement: 'ContinueStatement',
		DoWhileStatement: 'DoWhileStatement',
		DebuggerStatement: 'DebuggerStatement',
		EmptyStatement: 'EmptyStatement',
		ExpressionStatement: 'ExpressionStatement',
		ForStatement: 'ForStatement',
		ForInStatement: 'ForInStatement',
		FunctionDeclaration: 'FunctionDeclaration',
		FunctionExpression: 'FunctionExpression',
		Identifier: 'Identifier',
		IfStatement: 'IfStatement',
		Literal: 'Literal',
		LabeledStatement: 'LabeledStatement',
		LogicalExpression: 'LogicalExpression',
		MemberExpression: 'MemberExpression',
		NewExpression: 'NewExpression',
		ObjectExpression: 'ObjectExpression',
		Program: 'Program',
		Property: 'Property',
		ReturnStatement: 'ReturnStatement',
		SequenceExpression: 'SequenceExpression',
		SwitchStatement: 'SwitchStatement',
		SwitchCase: 'SwitchCase',
		ThisExpression: 'ThisExpression',
		ThrowStatement: 'ThrowStatement',
		TryStatement: 'TryStatement',
		UnaryExpression: 'UnaryExpression',
		UpdateExpression: 'UpdateExpression',
		VariableDeclaration: 'VariableDeclaration',
		VariableDeclarator: 'VariableDeclarator',
		WhileStatement: 'WhileStatement',
		WithStatement: 'WithStatement'
	};

	PropertyKind = {
		Data: 1,
		Get: 2,
		Set: 4
	};

	// Error messages should be identical to V8.
	Messages = {
		UnexpectedToken:  'Unexpected token %0',
		UnexpectedNumber:  'Unexpected number',
		UnexpectedString:  'Unexpected string',
		UnexpectedIdentifier:  'Unexpected identifier',
		UnexpectedReserved:  'Unexpected reserved word',
		UnexpectedEOS:  'Unexpected end of input',
		NewlineAfterThrow:  'Illegal newline after throw',
		InvalidRegExp: 'Invalid regular expression',
		UnterminatedRegExp:  'Invalid regular expression: missing /',
		InvalidLHSInAssignment:  'Invalid left-hand side in assignment',
		InvalidLHSInForIn:  'Invalid left-hand side in for-in',
		MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
		NoCatchOrFinally:  'Missing catch or finally after try',
		UnknownLabel: 'Undefined label \'%0\'',
		Redeclaration: '%0 \'%1\' has already been declared',
		IllegalContinue: 'Illegal continue statement',
		IllegalBreak: 'Illegal break statement',
		IllegalReturn: 'Illegal return statement',
		StrictModeWith:  'Strict mode code may not include a with statement',
		StrictCatchVariable:  'Catch variable may not be eval or arguments in strict mode',
		StrictVarName:  'Variable name may not be eval or arguments in strict mode',
		StrictParamName:  'Parameter name eval or arguments is not allowed in strict mode',
		StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
		StrictFunctionName:  'Function name may not be eval or arguments in strict mode',
		StrictOctalLiteral:  'Octal literals are not allowed in strict mode.',
		StrictDelete:  'Delete of an unqualified identifier in strict mode.',
		StrictDuplicateProperty:  'Duplicate data property in object literal not allowed in strict mode',
		AccessorDataProperty:  'Object literal may not have data and accessor property with the same name',
		AccessorGetSet:  'Object literal may not have multiple get/set accessors with the same name',
		StrictLHSAssignment:  'Assignment to eval or arguments is not allowed in strict mode',
		StrictLHSPostfix:  'Postfix increment/decrement may not have eval or arguments operand in strict mode',
		StrictLHSPrefix:  'Prefix increment/decrement may not have eval or arguments operand in strict mode',
		StrictReservedWord:  'Use of future reserved word in strict mode'
	};

	// See also tools/generate-unicode-regex.py.
	Regex = {
		NonAsciiIdentifierStart: new RegExp('[\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]'),
		NonAsciiIdentifierPart: new RegExp('[\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u0487\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u0669\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07c0-\u07f5\u07fa\u0800-\u082d\u0840-\u085b\u08a0\u08a2-\u08ac\u08e4-\u08fe\u0900-\u0963\u0966-\u096f\u0971-\u0977\u0979-\u097f\u0981-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7\u09c8\u09cb-\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09e6-\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b66-\u0b6f\u0b71\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c58\u0c59\u0c60-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1\u0cf2\u0d02\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d66-\u0d6f\u0d7a-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e50-\u0e59\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1049\u1050-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772\u1773\u1780-\u17d3\u17d7\u17dc\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191c\u1920-\u192b\u1930-\u193b\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19d9\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa7\u1b00-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1bf3\u1c00-\u1c37\u1c40-\u1c49\u1c4d-\u1c7d\u1cd0-\u1cd2\u1cd4-\u1cf6\u1d00-\u1de6\u1dfc-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200c\u200d\u203f\u2040\u2054\u2071\u207f\u2090-\u209c\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005-\u3007\u3021-\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u3099\u309a\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua62b\ua640-\ua66f\ua674-\ua67d\ua67f-\ua697\ua69f-\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua827\ua840-\ua873\ua880-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f7\ua8fb\ua900-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf-\ua9d9\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa60-\uaa76\uaa7a\uaa7b\uaa80-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabea\uabec\uabed\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]')
	};

	// Ensure the condition is true, otherwise throw an error.
	// This is only to have a better contract semantic, i.e. another safety net
	// to catch a logic error. The condition shall be fulfilled in normal case.
	// Do NOT use this to enforce a certain condition on any user input.

	function assert(condition, message) {
		if (!condition) {
			throw new Error('ASSERT: ' + message);
		}
	}

	function isDecimalDigit(ch) {
		return (ch >= 48 && ch <= 57);   // 0..9
	}

	function isHexDigit(ch) {
		return '0123456789abcdefABCDEF'.indexOf(ch) >= 0;
	}

	function isOctalDigit(ch) {
		return '01234567'.indexOf(ch) >= 0;
	}


	// 7.2 White Space

	function isWhiteSpace(ch) {
		return (ch === 32) ||  // space
			(ch === 9) ||      // tab
			(ch === 0xB) ||
			(ch === 0xC) ||
			(ch === 0xA0) ||
			(ch >= 0x1680 && '\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\uFEFF'.indexOf(String.fromCharCode(ch)) > 0);
	}

	// 7.3 Line Terminators

	function isLineTerminator(ch) {
		return (ch === 10) || (ch === 13) || (ch === 0x2028) || (ch === 0x2029);
	}

	// 7.6 Identifier Names and Identifiers

	function isIdentifierStart(ch) {
		return (ch === 36) || (ch === 95) ||  // $ (dollar) and _ (underscore)
			(ch >= 65 && ch <= 90) ||         // A..Z
			(ch >= 97 && ch <= 122) ||        // a..z
			(ch === 92) ||                    // \ (backslash)
			((ch >= 0x80) && Regex.NonAsciiIdentifierStart.test(String.fromCharCode(ch)));
	}

	function isIdentifierPart(ch) {
		return (ch === 36) || (ch === 95) ||  // $ (dollar) and _ (underscore)
			(ch >= 65 && ch <= 90) ||         // A..Z
			(ch >= 97 && ch <= 122) ||        // a..z
			(ch >= 48 && ch <= 57) ||         // 0..9
			(ch === 92) ||                    // \ (backslash)
			((ch >= 0x80) && Regex.NonAsciiIdentifierPart.test(String.fromCharCode(ch)));
	}

	// 7.6.1.2 Future Reserved Words

	function isFutureReservedWord(id) {
		switch (id) {
			case 'class':
			case 'enum':
			case 'export':
			case 'extends':
			case 'import':
			case 'super':
				return true;
			default:
				return false;
		}
	}

	function isStrictModeReservedWord(id) {
		switch (id) {
			case 'implements':
			case 'interface':
			case 'package':
			case 'private':
			case 'protected':
			case 'public':
			case 'static':
			case 'yield':
			case 'let':
				return true;
			default:
				return false;
		}
	}

	function isRestrictedWord(id) {
		return id === 'eval' || id === 'arguments';
	}

	// 7.6.1.1 Keywords

	function isKeyword(id) {
		if (strict && isStrictModeReservedWord(id)) {
			return true;
		}

		// 'const' is specialized as Keyword in V8.
		// 'yield' and 'let' are for compatiblity with SpiderMonkey and ES.next.
		// Some others are from future reserved words.

		switch (id.length) {
			case 2:
				return (id === 'if') || (id === 'in') || (id === 'do');
			case 3:
				return (id === 'var') || (id === 'for') || (id === 'new') ||
					(id === 'try') || (id === 'let');
			case 4:
				return (id === 'this') || (id === 'else') || (id === 'case') ||
					(id === 'void') || (id === 'with') || (id === 'enum');
			case 5:
				return (id === 'while') || (id === 'break') || (id === 'catch') ||
					(id === 'throw') || (id === 'const') || (id === 'yield') ||
					(id === 'class') || (id === 'super');
			case 6:
				return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
					(id === 'switch') || (id === 'export') || (id === 'import');
			case 7:
				return (id === 'default') || (id === 'finally') || (id === 'extends');
			case 8:
				return (id === 'function') || (id === 'continue') || (id === 'debugger');
			case 10:
				return (id === 'instanceof');
			default:
				return false;
		}
	}

	// 7.4 Comments

	function skipComment() {
		var ch, blockComment, lineComment;

		blockComment = false;
		lineComment = false;

		while (index < length) {
			ch = source.charCodeAt(index);

			if (lineComment) {
				++index;
				if (isLineTerminator(ch)) {
					lineComment = false;
					if (ch === 13 && source.charCodeAt(index) === 10) {
						++index;
					}
					++lineNumber;
					lineStart = index;
				}
			} else if (blockComment) {
				if (isLineTerminator(ch)) {
					if (ch === 13 && source.charCodeAt(index + 1) === 10) {
						++index;
					}
					++lineNumber;
					++index;
					lineStart = index;
					if (index >= length) {
						throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
					}
				} else {
					ch = source.charCodeAt(index++);
					if (index >= length) {
						throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
					}
					// Block comment ends with '*/' (char #42, char #47).
					if (ch === 42) {
						ch = source.charCodeAt(index);
						if (ch === 47) {
							++index;
							blockComment = false;
						}
					}
				}
			} else if (ch === 47) {
				ch = source.charCodeAt(index + 1);
				// Line comment starts with '//' (char #47, char #47).
				if (ch === 47) {
					index += 2;
					lineComment = true;
				} else if (ch === 42) {
					// Block comment starts with '/*' (char #47, char #42).
					index += 2;
					blockComment = true;
					if (index >= length) {
						throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
					}
				} else {
					break;
				}
			} else if (isWhiteSpace(ch)) {
				++index;
			} else if (isLineTerminator(ch)) {
				++index;
				if (ch === 13 && source.charCodeAt(index) === 10) {
					++index;
				}
				++lineNumber;
				lineStart = index;
			} else {
				break;
			}
		}
	}

	function scanHexEscape(prefix) {
		var i, len, ch, code = 0;

		len = (prefix === 'u') ? 4 : 2;
		for (i = 0; i < len; ++i) {
			if (index < length && isHexDigit(source[index])) {
				ch = source[index++];
				code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
			} else {
				return '';
			}
		}
		return String.fromCharCode(code);
	}

	function getEscapedIdentifier() {
		var ch, id;

		ch = source.charCodeAt(index++);
		id = String.fromCharCode(ch);

		// '\u' (char #92, char #117) denotes an escaped character.
		if (ch === 92) {
			if (source.charCodeAt(index) !== 117) {
				throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
			}
			++index;
			ch = scanHexEscape('u');
			if (!ch || ch === '\\' || !isIdentifierStart(ch.charCodeAt(0))) {
				throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
			}
			id = ch;
		}

		while (index < length) {
			ch = source.charCodeAt(index);
			if (!isIdentifierPart(ch)) {
				break;
			}
			++index;
			id += String.fromCharCode(ch);

			// '\u' (char #92, char #117) denotes an escaped character.
			if (ch === 92) {
				id = id.substr(0, id.length - 1);
				if (source.charCodeAt(index) !== 117) {
					throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
				}
				++index;
				ch = scanHexEscape('u');
				if (!ch || ch === '\\' || !isIdentifierPart(ch.charCodeAt(0))) {
					throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
				}
				id += ch;
			}
		}

		return id;
	}

	function getIdentifier() {
		var start, ch;

		start = index++;
		while (index < length) {
			ch = source.charCodeAt(index);
			if (ch === 92) {
				// Blackslash (char #92) marks Unicode escape sequence.
				index = start;
				return getEscapedIdentifier();
			}
			if (isIdentifierPart(ch)) {
				++index;
			} else {
				break;
			}
		}

		return source.slice(start, index);
	}

	function scanIdentifier() {
		var start, id, type;

		start = index;

		// Backslash (char #92) starts an escaped character.
		id = (source.charCodeAt(index) === 92) ? getEscapedIdentifier() : getIdentifier();

		// There is no keyword or literal with only one character.
		// Thus, it must be an identifier.
		if (id.length === 1) {
			type = Token.Identifier;
		} else if (isKeyword(id)) {
			type = Token.Keyword;
		} else if (id === 'null') {
			type = Token.NullLiteral;
		} else if (id === 'true' || id === 'false') {
			type = Token.BooleanLiteral;
		} else {
			type = Token.Identifier;
		}

		return {
			type: type,
			value: id,
			lineNumber: lineNumber,
			lineStart: lineStart,
			range: [start, index]
		};
	}


	// 7.7 Punctuators

	function scanPunctuator() {
		var start = index,
			code = source.charCodeAt(index),
			code2,
			ch1 = source[index],
			ch2,
			ch3,
			ch4;

		switch (code) {

			// Check for most common single-character punctuators.
			case 46:   // . dot
			case 40:   // ( open bracket
			case 41:   // ) close bracket
			case 59:   // ; semicolon
			case 44:   // , comma
			case 123:  // { open curly brace
			case 125:  // } close curly brace
			case 91:   // [
			case 93:   // ]
			case 58:   // :
			case 63:   // ?
			case 126:  // ~
				++index;
				return {
					type: Token.Punctuator,
					value: String.fromCharCode(code),
					lineNumber: lineNumber,
					lineStart: lineStart,
					range: [start, index]
				};

			default:
				code2 = source.charCodeAt(index + 1);

				// '=' (char #61) marks an assignment or comparison operator.
				if (code2 === 61) {
					switch (code) {
						case 37:  // %
						case 38:  // &
						case 42:  // *:
						case 43:  // +
						case 45:  // -
						case 47:  // /
						case 60:  // <
						case 62:  // >
						case 94:  // ^
						case 124: // |
							index += 2;
							return {
								type: Token.Punctuator,
								value: String.fromCharCode(code) + String.fromCharCode(code2),
								lineNumber: lineNumber,
								lineStart: lineStart,
								range: [start, index]
							};

						case 33: // !
						case 61: // =
							index += 2;

							// !== and ===
							if (source.charCodeAt(index) === 61) {
								++index;
							}
							return {
								type: Token.Punctuator,
								value: source.slice(start, index),
								lineNumber: lineNumber,
								lineStart: lineStart,
								range: [start, index]
							};
						default:
							break;
					}
				}
				break;
		}

		// Peek more characters.

		ch2 = source[index + 1];
		ch3 = source[index + 2];
		ch4 = source[index + 3];

		// 4-character punctuator: >>>=

		if (ch1 === '>' && ch2 === '>' && ch3 === '>') {
			if (ch4 === '=') {
				index += 4;
				return {
					type: Token.Punctuator,
					value: '>>>=',
					lineNumber: lineNumber,
					lineStart: lineStart,
					range: [start, index]
				};
			}
		}

		// 3-character punctuators: === !== >>> <<= >>=

		if (ch1 === '>' && ch2 === '>' && ch3 === '>') {
			index += 3;
			return {
				type: Token.Punctuator,
				value: '>>>',
				lineNumber: lineNumber,
				lineStart: lineStart,
				range: [start, index]
			};
		}

		if (ch1 === '<' && ch2 === '<' && ch3 === '=') {
			index += 3;
			return {
				type: Token.Punctuator,
				value: '<<=',
				lineNumber: lineNumber,
				lineStart: lineStart,
				range: [start, index]
			};
		}

		if (ch1 === '>' && ch2 === '>' && ch3 === '=') {
			index += 3;
			return {
				type: Token.Punctuator,
				value: '>>=',
				lineNumber: lineNumber,
				lineStart: lineStart,
				range: [start, index]
			};
		}

		// Other 2-character punctuators: ++ -- << >> && ||

		if (ch1 === ch2 && ('+-<>&|'.indexOf(ch1) >= 0)) {
			index += 2;
			return {
				type: Token.Punctuator,
				value: ch1 + ch2,
				lineNumber: lineNumber,
				lineStart: lineStart,
				range: [start, index]
			};
		}

		if ('<>=!+-*%&|^/'.indexOf(ch1) >= 0) {
			++index;
			return {
				type: Token.Punctuator,
				value: ch1,
				lineNumber: lineNumber,
				lineStart: lineStart,
				range: [start, index]
			};
		}

		throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
	}

	// 7.8.3 Numeric Literals

	function scanHexLiteral(start) {
		var number = '';

		while (index < length) {
			if (!isHexDigit(source[index])) {
				break;
			}
			number += source[index++];
		}

		if (number.length === 0) {
			throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		}

		if (isIdentifierStart(source.charCodeAt(index))) {
			throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		}

		return {
			type: Token.NumericLiteral,
			value: parseInt('0x' + number, 16),
			lineNumber: lineNumber,
			lineStart: lineStart,
			range: [start, index]
		};
	}

	function scanOctalLiteral(start) {
		var number = '0' + source[index++];
		while (index < length) {
			if (!isOctalDigit(source[index])) {
				break;
			}
			number += source[index++];
		}

		if (isIdentifierStart(source.charCodeAt(index)) || isDecimalDigit(source.charCodeAt(index))) {
			throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		}

		return {
			type: Token.NumericLiteral,
			value: parseInt(number, 8),
			octal: true,
			lineNumber: lineNumber,
			lineStart: lineStart,
			range: [start, index]
		};
	}

	function scanNumericLiteral() {
		var number, start, ch;

		ch = source[index];
		assert(isDecimalDigit(ch.charCodeAt(0)) || (ch === '.'),
			'Numeric literal must start with a decimal digit or a decimal point');

		start = index;
		number = '';
		if (ch !== '.') {
			number = source[index++];
			ch = source[index];

			// Hex number starts with '0x'.
			// Octal number starts with '0'.
			if (number === '0') {
				if (ch === 'x' || ch === 'X') {
					++index;
					return scanHexLiteral(start);
				}
				if (isOctalDigit(ch)) {
					return scanOctalLiteral(start);
				}

				// decimal number starts with '0' such as '09' is illegal.
				if (ch && isDecimalDigit(ch.charCodeAt(0))) {
					throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
				}
			}

			while (index < length) {
				if (!isDecimalDigit(source.charCodeAt(index))) {
					ch = source[index];
					break;
				}
				number += source[index++];
			}
		}

		if (ch === '.') {
			number += source[index++];
			while (index < length) {
				if (!isDecimalDigit(source.charCodeAt(index))) {
					ch = source[index];
					break;
				}
				number += source[index++];
			}
		}

		if (ch === 'e' || ch === 'E') {
			number += source[index++];

			ch = source[index];
			if (ch === '+' || ch === '-') {
				number += source[index++];
			}

			ch = source[index];
			if (ch && isDecimalDigit(ch.charCodeAt(0))) {
				number += source[index++];
				while (index < length) {
					if (!isDecimalDigit(source.charCodeAt(index))) {
						ch = source[index];
						break;
					}
					number += source[index++];
				}
			} else {
				ch = 'character ' + ch;
				if (index >= length) {
					ch = '<end>';
				}
				throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
			}
		}

		if (index < length) {
			if (isIdentifierStart(source.charCodeAt(index))) {
				throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
			}
		}

		return {
			type: Token.NumericLiteral,
			value: parseFloat(number),
			lineNumber: lineNumber,
			lineStart: lineStart,
			range: [start, index]
		};
	}

	// 7.8.4 String Literals

	function scanStringLiteral() {
		var str = '', quote, start, ch, code, unescaped, restore, octal = false;

		quote = source[index];
		assert((quote === '\'' || quote === '"'),
			'String literal must starts with a quote');

		start = index;
		++index;

		while (index < length) {
			ch = source[index++];

			if (ch === quote) {
				quote = '';
				break;
			} else if (ch === '\\') {
				ch = source[index++];
				if (!ch || !isLineTerminator(ch.charCodeAt(0))) {
					switch (ch) {
						case 'n':
							str += '\n';
							break;
						case 'r':
							str += '\r';
							break;
						case 't':
							str += '\t';
							break;
						case 'u':
						case 'x':
							restore = index;
							unescaped = scanHexEscape(ch);
							if (unescaped) {
								str += unescaped;
							} else {
								index = restore;
								str += ch;
							}
							break;
						case 'b':
							str += '\b';
							break;
						case 'f':
							str += '\f';
							break;
						case 'v':
							str += '\v';
							break;

						default:
							if (isOctalDigit(ch)) {
								code = '01234567'.indexOf(ch);

								// \0 is not octal escape sequence
								if (code !== 0) {
									octal = true;
								}

								if (index < length && isOctalDigit(source[index])) {
									octal = true;
									code = code * 8 + '01234567'.indexOf(source[index++]);

									// 3 digits are only allowed when string starts
									// with 0, 1, 2, 3
									if ('0123'.indexOf(ch) >= 0 &&
										index < length &&
										isOctalDigit(source[index])) {
										code = code * 8 + '01234567'.indexOf(source[index++]);
									}
								}
								str += String.fromCharCode(code);
							} else {
								str += ch;
							}
							break;
					}
				} else {
					++lineNumber;
					if (ch ===  '\r' && source[index] === '\n') {
						++index;
					}
				}
			} else if (isLineTerminator(ch.charCodeAt(0))) {
				break;
			} else {
				str += ch;
			}
		}

		if (quote !== '') {
			throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
		}

		return {
			type: Token.StringLiteral,
			value: str,
			octal: octal,
			lineNumber: lineNumber,
			lineStart: lineStart,
			range: [start, index]
		};
	}

	function scanRegExp() {
		var str, ch, start, pattern, flags, value, classMarker = false, restore, terminated = false;

		lookahead = null;
		skipComment();

		start = index;
		ch = source[index];
		assert(ch === '/', 'Regular expression literal must start with a slash');
		str = source[index++];

		while (index < length) {
			ch = source[index++];
			str += ch;
			if (classMarker) {
				if (ch === ']') {
					classMarker = false;
				}
			} else {
				if (ch === '\\') {
					ch = source[index++];
					// ECMA-262 7.8.5
					if (isLineTerminator(ch.charCodeAt(0))) {
						throwError({}, Messages.UnterminatedRegExp);
					}
					str += ch;
				} else if (ch === '/') {
					terminated = true;
					break;
				} else if (ch === '[') {
					classMarker = true;
				} else if (isLineTerminator(ch.charCodeAt(0))) {
					throwError({}, Messages.UnterminatedRegExp);
				}
			}
		}

		if (!terminated) {
			throwError({}, Messages.UnterminatedRegExp);
		}

		// Exclude leading and trailing slash.
		pattern = str.substr(1, str.length - 2);

		flags = '';
		while (index < length) {
			ch = source[index];
			if (!isIdentifierPart(ch.charCodeAt(0))) {
				break;
			}

			++index;
			if (ch === '\\' && index < length) {
				ch = source[index];
				if (ch === 'u') {
					++index;
					restore = index;
					ch = scanHexEscape('u');
					if (ch) {
						flags += ch;
						for (str += '\\u'; restore < index; ++restore) {
							str += source[restore];
						}
					} else {
						index = restore;
						flags += 'u';
						str += '\\u';
					}
				} else {
					str += '\\';
				}
			} else {
				flags += ch;
				str += ch;
			}
		}

		try {
			value = new RegExp(pattern, flags);
		} catch (e) {
			throwError({}, Messages.InvalidRegExp);
		}

		peek();

		return {
			literal: str,
			value: value,
			range: [start, index]
		};
	}

	function isIdentifierName(token) {
		return token.type === Token.Identifier ||
			token.type === Token.Keyword ||
			token.type === Token.BooleanLiteral ||
			token.type === Token.NullLiteral;
	}

	function advance() {
		var ch;

		skipComment();

		if (index >= length) {
			return {
				type: Token.EOF,
				lineNumber: lineNumber,
				lineStart: lineStart,
				range: [index, index]
			};
		}

		ch = source.charCodeAt(index);

		// Very common: ( and ) and ;
		if (ch === 40 || ch === 41 || ch === 58) {
			return scanPunctuator();
		}

		// String literal starts with single quote (#39) or double quote (#34).
		if (ch === 39 || ch === 34) {
			return scanStringLiteral();
		}

		if (isIdentifierStart(ch)) {
			return scanIdentifier();
		}

		// Dot (.) char #46 can also start a floating-point number, hence the need
		// to check the next character.
		if (ch === 46) {
			if (isDecimalDigit(source.charCodeAt(index + 1))) {
				return scanNumericLiteral();
			}
			return scanPunctuator();
		}

		if (isDecimalDigit(ch)) {
			return scanNumericLiteral();
		}

		return scanPunctuator();
	}

	function lex() {
		var token;

		token = lookahead;
		index = token.range[1];
		lineNumber = token.lineNumber;
		lineStart = token.lineStart;

		lookahead = advance();

		index = token.range[1];
		lineNumber = token.lineNumber;
		lineStart = token.lineStart;

		return token;
	}

	function peek() {
		var pos, line, start;

		pos = index;
		line = lineNumber;
		start = lineStart;
		lookahead = advance();
		index = pos;
		lineNumber = line;
		lineStart = start;
	}

	SyntaxTreeDelegate = {

		name: 'SyntaxTree',

		createArrayExpression: function (elements) {
			return {
				type: Syntax.ArrayExpression,
				elements: elements
			};
		},

		createAssignmentExpression: function (operator, left, right) {
			return {
				type: Syntax.AssignmentExpression,
				operator: operator,
				left: left,
				right: right
			};
		},

		createBinaryExpression: function (operator, left, right) {
			var type = (operator === '||' || operator === '&&') ? Syntax.LogicalExpression :
				Syntax.BinaryExpression;
			return {
				type: type,
				operator: operator,
				left: left,
				right: right
			};
		},

		createBlockStatement: function (body) {
			return {
				type: Syntax.BlockStatement,
				body: body
			};
		},

		createBreakStatement: function (label) {
			return {
				type: Syntax.BreakStatement,
				label: label
			};
		},

		createCallExpression: function (callee, args) {
			return {
				type: Syntax.CallExpression,
				callee: callee,
				'arguments': args
			};
		},

		createCatchClause: function (param, body) {
			return {
				type: Syntax.CatchClause,
				param: param,
				body: body
			};
		},

		createConditionalExpression: function (test, consequent, alternate) {
			return {
				type: Syntax.ConditionalExpression,
				test: test,
				consequent: consequent,
				alternate: alternate
			};
		},

		createContinueStatement: function (label) {
			return {
				type: Syntax.ContinueStatement,
				label: label
			};
		},

		createDebuggerStatement: function () {
			return {
				type: Syntax.DebuggerStatement
			};
		},

		createDoWhileStatement: function (body, test) {
			return {
				type: Syntax.DoWhileStatement,
				body: body,
				test: test
			};
		},

		createEmptyStatement: function () {
			return {
				type: Syntax.EmptyStatement
			};
		},

		createExpressionStatement: function (expression) {
			return {
				type: Syntax.ExpressionStatement,
				expression: expression
			};
		},

		createForStatement: function (init, test, update, body) {
			return {
				type: Syntax.ForStatement,
				init: init,
				test: test,
				update: update,
				body: body
			};
		},

		createForInStatement: function (left, right, body) {
			return {
				type: Syntax.ForInStatement,
				left: left,
				right: right,
				body: body,
				each: false
			};
		},

		createFunctionDeclaration: function (id, params, defaults, body) {
			return {
				type: Syntax.FunctionDeclaration,
				id: id,
				params: params,
				defaults: defaults,
				body: body,
				rest: null,
				generator: false,
				expression: false
			};
		},

		createFunctionExpression: function (id, params, defaults, body) {
			return {
				type: Syntax.FunctionExpression,
				id: id,
				params: params,
				defaults: defaults,
				body: body,
				rest: null,
				generator: false,
				expression: false
			};
		},

		createIdentifier: function (name) {
			return {
				type: Syntax.Identifier,
				name: name
			};
		},

		createIfStatement: function (test, consequent, alternate) {
			return {
				type: Syntax.IfStatement,
				test: test,
				consequent: consequent,
				alternate: alternate
			};
		},

		createLabeledStatement: function (label, body) {
			return {
				type: Syntax.LabeledStatement,
				label: label,
				body: body
			};
		},

		createLiteral: function (token) {
			return {
				type: Syntax.Literal,
				value: token.value,
				raw: source.slice(token.range[0], token.range[1])
			};
		},

		createMemberExpression: function (accessor, object, property) {
			return {
				type: Syntax.MemberExpression,
				computed: accessor === '[',
				object: object,
				property: property
			};
		},

		createNewExpression: function (callee, args) {
			return {
				type: Syntax.NewExpression,
				callee: callee,
				'arguments': args
			};
		},

		createObjectExpression: function (properties) {
			return {
				type: Syntax.ObjectExpression,
				properties: properties
			};
		},

		createPostfixExpression: function (operator, argument) {
			return {
				type: Syntax.UpdateExpression,
				operator: operator,
				argument: argument,
				prefix: false
			};
		},

		createProgram: function (body) {
			return {
				type: Syntax.Program,
				body: body
			};
		},

		createProperty: function (kind, key, value) {
			return {
				type: Syntax.Property,
				key: key,
				value: value,
				kind: kind
			};
		},

		createReturnStatement: function (argument) {
			return {
				type: Syntax.ReturnStatement,
				argument: argument
			};
		},

		createSequenceExpression: function (expressions) {
			return {
				type: Syntax.SequenceExpression,
				expressions: expressions
			};
		},

		createSwitchCase: function (test, consequent) {
			return {
				type: Syntax.SwitchCase,
				test: test,
				consequent: consequent
			};
		},

		createSwitchStatement: function (discriminant, cases) {
			return {
				type: Syntax.SwitchStatement,
				discriminant: discriminant,
				cases: cases
			};
		},

		createThisExpression: function () {
			return {
				type: Syntax.ThisExpression
			};
		},

		createThrowStatement: function (argument) {
			return {
				type: Syntax.ThrowStatement,
				argument: argument
			};
		},

		createTryStatement: function (block, guardedHandlers, handlers, finalizer) {
			return {
				type: Syntax.TryStatement,
				block: block,
				guardedHandlers: guardedHandlers,
				handlers: handlers,
				finalizer: finalizer
			};
		},

		createUnaryExpression: function (operator, argument) {
			if (operator === '++' || operator === '--') {
				return {
					type: Syntax.UpdateExpression,
					operator: operator,
					argument: argument,
					prefix: true
				};
			}
			return {
				type: Syntax.UnaryExpression,
				operator: operator,
				argument: argument
			};
		},

		createVariableDeclaration: function (declarations, kind) {
			return {
				type: Syntax.VariableDeclaration,
				declarations: declarations,
				kind: kind
			};
		},

		createVariableDeclarator: function (id, init) {
			return {
				type: Syntax.VariableDeclarator,
				id: id,
				init: init
			};
		},

		createWhileStatement: function (test, body) {
			return {
				type: Syntax.WhileStatement,
				test: test,
				body: body
			};
		},

		createWithStatement: function (object, body) {
			return {
				type: Syntax.WithStatement,
				object: object,
				body: body
			};
		}
	};

	// Return true if there is a line terminator before the next token.

	function peekLineTerminator() {
		var pos, line, start, found;

		pos = index;
		line = lineNumber;
		start = lineStart;
		skipComment();
		found = lineNumber !== line;
		index = pos;
		lineNumber = line;
		lineStart = start;

		return found;
	}

	// Throw an exception

	function throwError(token, messageFormat) {
		var error,
			args = Array.prototype.slice.call(arguments, 2),
			msg = messageFormat.replace(
				/%(\d)/g,
				function (whole, index) {
					assert(index < args.length, 'Message reference must be in range');
					return args[index];
				}
			);

		if (typeof token.lineNumber === 'number') {
			error = new Error('Line ' + token.lineNumber + ': ' + msg);
			error.index = token.range[0];
			error.lineNumber = token.lineNumber;
			error.column = token.range[0] - lineStart + 1;
		} else {
			error = new Error('Line ' + lineNumber + ': ' + msg);
			error.index = index;
			error.lineNumber = lineNumber;
			error.column = index - lineStart + 1;
		}

		error.description = msg;
		throw error;
	}

	function throwErrorTolerant() {
		try {
			throwError.apply(null, arguments);
		} catch (e) {
			if (extra.errors) {
				extra.errors.push(e);
			} else {
				throw e;
			}
		}
	}


	// Throw an exception because of the token.

	function throwUnexpected(token) {
		if (token.type === Token.EOF) {
			throwError(token, Messages.UnexpectedEOS);
		}

		if (token.type === Token.NumericLiteral) {
			throwError(token, Messages.UnexpectedNumber);
		}

		if (token.type === Token.StringLiteral) {
			throwError(token, Messages.UnexpectedString);
		}

		if (token.type === Token.Identifier) {
			throwError(token, Messages.UnexpectedIdentifier);
		}

		if (token.type === Token.Keyword) {
			if (isFutureReservedWord(token.value)) {
				throwError(token, Messages.UnexpectedReserved);
			} else if (strict && isStrictModeReservedWord(token.value)) {
				throwErrorTolerant(token, Messages.StrictReservedWord);
				return;
			}
			throwError(token, Messages.UnexpectedToken, token.value);
		}

		// BooleanLiteral, NullLiteral, or Punctuator.
		throwError(token, Messages.UnexpectedToken, token.value);
	}

	// Expect the next token to match the specified punctuator.
	// If not, an exception will be thrown.

	function expect(value) {
		var token = lex();
		if (token.type !== Token.Punctuator || token.value !== value) {
			throwUnexpected(token);
		}
	}

	// Expect the next token to match the specified keyword.
	// If not, an exception will be thrown.

	function expectKeyword(keyword) {
		var token = lex();
		if (token.type !== Token.Keyword || token.value !== keyword) {
			throwUnexpected(token);
		}
	}

	// Return true if the next token matches the specified punctuator.

	function match(value) {
		return lookahead.type === Token.Punctuator && lookahead.value === value;
	}

	// Return true if the next token matches the specified keyword

	function matchKeyword(keyword) {
		return lookahead.type === Token.Keyword && lookahead.value === keyword;
	}

	// Return true if the next token is an assignment operator

	function matchAssign() {
		var op;

		if (lookahead.type !== Token.Punctuator) {
			return false;
		}
		op = lookahead.value;
		return op === '=' ||
			op === '*=' ||
			op === '/=' ||
			op === '%=' ||
			op === '+=' ||
			op === '-=' ||
			op === '<<=' ||
			op === '>>=' ||
			op === '>>>=' ||
			op === '&=' ||
			op === '^=' ||
			op === '|=';
	}

	function consumeSemicolon() {
		var line;

		// Catch the very common case first: immediately a semicolon (char #59).
		if (source.charCodeAt(index) === 59) {
			lex();
			return;
		}

		line = lineNumber;
		skipComment();
		if (lineNumber !== line) {
			return;
		}

		if (match(';')) {
			lex();
			return;
		}

		if (lookahead.type !== Token.EOF && !match('}')) {
			throwUnexpected(lookahead);
		}
	}

	// Return true if provided expression is LeftHandSideExpression

	function isLeftHandSide(expr) {
		return expr.type === Syntax.Identifier || expr.type === Syntax.MemberExpression;
	}

	// 11.1.4 Array Initialiser

	function parseArrayInitialiser() {
		var elements = [];

		expect('[');

		while (!match(']')) {
			if (match(',')) {
				lex();
				elements.push(null);
			} else {
				elements.push(parseAssignmentExpression());

				if (!match(']')) {
					expect(',');
				}
			}
		}

		expect(']');

		return delegate.createArrayExpression(elements);
	}

	// 11.1.5 Object Initialiser

	function parsePropertyFunction(param, first) {
		var previousStrict, body;

		previousStrict = strict;
		body = parseFunctionSourceElements();
		if (first && strict && isRestrictedWord(param[0].name)) {
			throwErrorTolerant(first, Messages.StrictParamName);
		}
		strict = previousStrict;
		return delegate.createFunctionExpression(null, param, [], body);
	}

	function parseObjectPropertyKey() {
		var token = lex();

		// Note: This function is called only from parseObjectProperty(), where
		// EOF and Punctuator tokens are already filtered out.

		if (token.type === Token.StringLiteral || token.type === Token.NumericLiteral) {
			if (strict && token.octal) {
				throwErrorTolerant(token, Messages.StrictOctalLiteral);
			}
			return delegate.createLiteral(token);
		}

		return delegate.createIdentifier(token.value);
	}

	function parseObjectProperty() {
		var token, key, id, value, param;

		token = lookahead;

		if (token.type === Token.Identifier) {

			id = parseObjectPropertyKey();

			// Property Assignment: Getter and Setter.

			if (token.value === 'get' && !match(':')) {
				key = parseObjectPropertyKey();
				expect('(');
				expect(')');
				value = parsePropertyFunction([]);
				return delegate.createProperty('get', key, value);
			}
			if (token.value === 'set' && !match(':')) {
				key = parseObjectPropertyKey();
				expect('(');
				token = lookahead;
				if (token.type !== Token.Identifier) {
					throwUnexpected(lex());
				}
				param = [ parseVariableIdentifier() ];
				expect(')');
				value = parsePropertyFunction(param, token);
				return delegate.createProperty('set', key, value);
			}
			expect(':');
			value = parseAssignmentExpression();
			return delegate.createProperty('init', id, value);
		}
		if (token.type === Token.EOF || token.type === Token.Punctuator) {
			throwUnexpected(token);
		} else {
			key = parseObjectPropertyKey();
			expect(':');
			value = parseAssignmentExpression();
			return delegate.createProperty('init', key, value);
		}
	}

	function parseObjectInitialiser() {
		var properties = [], property, name, key, kind, map = {}, toString = String;

		expect('{');

		while (!match('}')) {
			property = parseObjectProperty();

			if (property.key.type === Syntax.Identifier) {
				name = property.key.name;
			} else {
				name = toString(property.key.value);
			}
			kind = (property.kind === 'init') ? PropertyKind.Data : (property.kind === 'get') ? PropertyKind.Get : PropertyKind.Set;

			key = '$' + name;
			if (Object.prototype.hasOwnProperty.call(map, key)) {
				if (map[key] === PropertyKind.Data) {
					if (strict && kind === PropertyKind.Data) {
						throwErrorTolerant({}, Messages.StrictDuplicateProperty);
					} else if (kind !== PropertyKind.Data) {
						throwErrorTolerant({}, Messages.AccessorDataProperty);
					}
				} else {
					if (kind === PropertyKind.Data) {
						throwErrorTolerant({}, Messages.AccessorDataProperty);
					} else if (map[key] & kind) {
						throwErrorTolerant({}, Messages.AccessorGetSet);
					}
				}
				map[key] |= kind;
			} else {
				map[key] = kind;
			}

			properties.push(property);

			if (!match('}')) {
				expect(',');
			}
		}

		expect('}');

		return delegate.createObjectExpression(properties);
	}

	// 11.1.6 The Grouping Operator

	function parseGroupExpression() {
		var expr;

		expect('(');

		expr = parseExpression();

		expect(')');

		return expr;
	}


	// 11.1 Primary Expressions

	function parsePrimaryExpression() {
		var type, token;

		type = lookahead.type;

		if (type === Token.Identifier) {
			return delegate.createIdentifier(lex().value);
		}

		if (type === Token.StringLiteral || type === Token.NumericLiteral) {
			if (strict && lookahead.octal) {
				throwErrorTolerant(lookahead, Messages.StrictOctalLiteral);
			}
			return delegate.createLiteral(lex());
		}

		if (type === Token.Keyword) {
			if (matchKeyword('this')) {
				lex();
				return delegate.createThisExpression();
			}

			if (matchKeyword('function')) {
				return parseFunctionExpression();
			}
		}

		if (type === Token.BooleanLiteral) {
			token = lex();
			token.value = (token.value === 'true');
			return delegate.createLiteral(token);
		}

		if (type === Token.NullLiteral) {
			token = lex();
			token.value = null;
			return delegate.createLiteral(token);
		}

		if (match('[')) {
			return parseArrayInitialiser();
		}

		if (match('{')) {
			return parseObjectInitialiser();
		}

		if (match('(')) {
			return parseGroupExpression();
		}

		if (match('/') || match('/=')) {
			return delegate.createLiteral(scanRegExp());
		}

		return throwUnexpected(lex());
	}

	// 11.2 Left-Hand-Side Expressions

	function parseArguments() {
		var args = [];

		expect('(');

		if (!match(')')) {
			while (index < length) {
				args.push(parseAssignmentExpression());
				if (match(')')) {
					break;
				}
				expect(',');
			}
		}

		expect(')');

		return args;
	}

	function parseNonComputedProperty() {
		var token = lex();

		if (!isIdentifierName(token)) {
			throwUnexpected(token);
		}

		return delegate.createIdentifier(token.value);
	}

	function parseNonComputedMember() {
		expect('.');

		return parseNonComputedProperty();
	}

	function parseComputedMember() {
		var expr;

		expect('[');

		expr = parseExpression();

		expect(']');

		return expr;
	}

	function parseNewExpression() {
		var callee, args;

		expectKeyword('new');
		callee = parseLeftHandSideExpression();
		args = match('(') ? parseArguments() : [];

		return delegate.createNewExpression(callee, args);
	}

	function parseLeftHandSideExpressionAllowCall() {
		var expr, args, property;

		expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();

		while (match('.') || match('[') || match('(')) {
			if (match('(')) {
				args = parseArguments();
				expr = delegate.createCallExpression(expr, args);
			} else if (match('[')) {
				property = parseComputedMember();
				expr = delegate.createMemberExpression('[', expr, property);
			} else {
				property = parseNonComputedMember();
				expr = delegate.createMemberExpression('.', expr, property);
			}
		}

		return expr;
	}


	function parseLeftHandSideExpression() {
		var expr, property;

		expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();

		while (match('.') || match('[')) {
			if (match('[')) {
				property = parseComputedMember();
				expr = delegate.createMemberExpression('[', expr, property);
			} else {
				property = parseNonComputedMember();
				expr = delegate.createMemberExpression('.', expr, property);
			}
		}

		return expr;
	}

	// 11.3 Postfix Expressions

	function parsePostfixExpression() {
		var expr = parseLeftHandSideExpressionAllowCall(), token;

		if (lookahead.type !== Token.Punctuator) {
			return expr;
		}

		if ((match('++') || match('--')) && !peekLineTerminator()) {
			// 11.3.1, 11.3.2
			if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
				throwErrorTolerant({}, Messages.StrictLHSPostfix);
			}

			if (!isLeftHandSide(expr)) {
				throwError({}, Messages.InvalidLHSInAssignment);
			}

			token = lex();
			expr = delegate.createPostfixExpression(token.value, expr);
		}

		return expr;
	}

	// 11.4 Unary Operators

	function parseUnaryExpression() {
		var token, expr;

		if (lookahead.type !== Token.Punctuator && lookahead.type !== Token.Keyword) {
			return parsePostfixExpression();
		}

		if (match('++') || match('--')) {
			token = lex();
			expr = parseUnaryExpression();
			// 11.4.4, 11.4.5
			if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
				throwErrorTolerant({}, Messages.StrictLHSPrefix);
			}

			if (!isLeftHandSide(expr)) {
				throwError({}, Messages.InvalidLHSInAssignment);
			}

			return delegate.createUnaryExpression(token.value, expr);
		}

		if (match('+') || match('-') || match('~') || match('!')) {
			token = lex();
			expr = parseUnaryExpression();
			return delegate.createUnaryExpression(token.value, expr);
		}

		if (matchKeyword('delete') || matchKeyword('void') || matchKeyword('typeof')) {
			token = lex();
			expr = parseUnaryExpression();
			expr = delegate.createUnaryExpression(token.value, expr);
			if (strict && expr.operator === 'delete' && expr.argument.type === Syntax.Identifier) {
				throwErrorTolerant({}, Messages.StrictDelete);
			}
			return expr;
		}

		return parsePostfixExpression();
	}

	function binaryPrecedence(token, allowIn) {
		var prec = 0;

		if (token.type !== Token.Punctuator && token.type !== Token.Keyword) {
			return 0;
		}

		switch (token.value) {
			case '||':
				prec = 1;
				break;

			case '&&':
				prec = 2;
				break;

			case '|':
				prec = 3;
				break;

			case '^':
				prec = 4;
				break;

			case '&':
				prec = 5;
				break;

			case '==':
			case '!=':
			case '===':
			case '!==':
				prec = 6;
				break;

			case '<':
			case '>':
			case '<=':
			case '>=':
			case 'instanceof':
				prec = 7;
				break;

			case 'in':
				prec = allowIn ? 7 : 0;
				break;

			case '<<':
			case '>>':
			case '>>>':
				prec = 8;
				break;

			case '+':
			case '-':
				prec = 9;
				break;

			case '*':
			case '/':
			case '%':
				prec = 11;
				break;

			default:
				break;
		}

		return prec;
	}

	// 11.5 Multiplicative Operators
	// 11.6 Additive Operators
	// 11.7 Bitwise Shift Operators
	// 11.8 Relational Operators
	// 11.9 Equality Operators
	// 11.10 Binary Bitwise Operators
	// 11.11 Binary Logical Operators

	function parseBinaryExpression() {
		var expr, token, prec, previousAllowIn, stack, right, operator, left, i;

		previousAllowIn = state.allowIn;
		state.allowIn = true;

		expr = parseUnaryExpression();

		token = lookahead;
		prec = binaryPrecedence(token, previousAllowIn);
		if (prec === 0) {
			return expr;
		}
		token.prec = prec;
		lex();

		stack = [expr, token, parseUnaryExpression()];

		while ((prec = binaryPrecedence(lookahead, previousAllowIn)) > 0) {

			// Reduce: make a binary expression from the three topmost entries.
			while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
				right = stack.pop();
				operator = stack.pop().value;
				left = stack.pop();
				stack.push(delegate.createBinaryExpression(operator, left, right));
			}

			// Shift.
			token = lex();
			token.prec = prec;
			stack.push(token);
			stack.push(parseUnaryExpression());
		}

		state.allowIn = previousAllowIn;

		// Final reduce to clean-up the stack.
		i = stack.length - 1;
		expr = stack[i];
		while (i > 1) {
			expr = delegate.createBinaryExpression(stack[i - 1].value, stack[i - 2], expr);
			i -= 2;
		}
		return expr;
	}


	// 11.12 Conditional Operator

	function parseConditionalExpression() {
		var expr, previousAllowIn, consequent, alternate;

		expr = parseBinaryExpression();

		if (match('?')) {
			lex();
			previousAllowIn = state.allowIn;
			state.allowIn = true;
			consequent = parseAssignmentExpression();
			state.allowIn = previousAllowIn;
			expect(':');
			alternate = parseAssignmentExpression();

			expr = delegate.createConditionalExpression(expr, consequent, alternate);
		}

		return expr;
	}

	// 11.13 Assignment Operators

	function parseAssignmentExpression() {
		var token, left, right;

		token = lookahead;
		left = parseConditionalExpression();

		if (matchAssign()) {
			// LeftHandSideExpression
			if (!isLeftHandSide(left)) {
				throwError({}, Messages.InvalidLHSInAssignment);
			}

			// 11.13.1
			if (strict && left.type === Syntax.Identifier && isRestrictedWord(left.name)) {
				throwErrorTolerant(token, Messages.StrictLHSAssignment);
			}

			token = lex();
			right = parseAssignmentExpression();
			return delegate.createAssignmentExpression(token.value, left, right);
		}

		return left;
	}

	// 11.14 Comma Operator

	function parseExpression() {
		var expr = parseAssignmentExpression();

		if (match(',')) {
			expr = delegate.createSequenceExpression([ expr ]);

			while (index < length) {
				if (!match(',')) {
					break;
				}
				lex();
				expr.expressions.push(parseAssignmentExpression());
			}

		}
		return expr;
	}

	// 12.1 Block

	function parseStatementList() {
		var list = [],
			statement;

		while (index < length) {
			if (match('}')) {
				break;
			}
			statement = parseSourceElement();
			if (typeof statement === 'undefined') {
				break;
			}
			list.push(statement);
		}

		return list;
	}

	function parseBlock() {
		var block;

		expect('{');

		block = parseStatementList();

		expect('}');

		return delegate.createBlockStatement(block);
	}

	// 12.2 Variable Statement

	function parseVariableIdentifier() {
		var token = lex();

		if (token.type !== Token.Identifier) {
			throwUnexpected(token);
		}

		return delegate.createIdentifier(token.value);
	}

	function parseVariableDeclaration(kind) {
		var id = parseVariableIdentifier(),
			init = null;

		// 12.2.1
		if (strict && isRestrictedWord(id.name)) {
			throwErrorTolerant({}, Messages.StrictVarName);
		}

		if (kind === 'const') {
			expect('=');
			init = parseAssignmentExpression();
		} else if (match('=')) {
			lex();
			init = parseAssignmentExpression();
		}

		return delegate.createVariableDeclarator(id, init);
	}

	function parseVariableDeclarationList(kind) {
		var list = [];

		do {
			list.push(parseVariableDeclaration(kind));
			if (!match(',')) {
				break;
			}
			lex();
		} while (index < length);

		return list;
	}

	function parseVariableStatement() {
		var declarations;

		expectKeyword('var');

		declarations = parseVariableDeclarationList();

		consumeSemicolon();

		return delegate.createVariableDeclaration(declarations, 'var');
	}

	// kind may be `const` or `let`
	// Both are experimental and not in the specification yet.
	// see http://wiki.ecmascript.org/doku.php?id=harmony:const
	// and http://wiki.ecmascript.org/doku.php?id=harmony:let
	function parseConstLetDeclaration(kind) {
		var declarations;

		expectKeyword(kind);

		declarations = parseVariableDeclarationList(kind);

		consumeSemicolon();

		return delegate.createVariableDeclaration(declarations, kind);
	}

	// 12.3 Empty Statement

	function parseEmptyStatement() {
		expect(';');
		return delegate.createEmptyStatement();
	}

	// 12.4 Expression Statement

	function parseExpressionStatement() {
		var expr = parseExpression();
		consumeSemicolon();
		return delegate.createExpressionStatement(expr);
	}

	// 12.5 If statement

	function parseIfStatement() {
		var test, consequent, alternate;

		expectKeyword('if');

		expect('(');

		test = parseExpression();

		expect(')');

		consequent = parseStatement();

		if (matchKeyword('else')) {
			lex();
			alternate = parseStatement();
		} else {
			alternate = null;
		}

		return delegate.createIfStatement(test, consequent, alternate);
	}

	// 12.6 Iteration Statements

	function parseDoWhileStatement() {
		var body, test, oldInIteration;

		expectKeyword('do');

		oldInIteration = state.inIteration;
		state.inIteration = true;

		body = parseStatement();

		state.inIteration = oldInIteration;

		expectKeyword('while');

		expect('(');

		test = parseExpression();

		expect(')');

		if (match(';')) {
			lex();
		}

		return delegate.createDoWhileStatement(body, test);
	}

	function parseWhileStatement() {
		var test, body, oldInIteration;

		expectKeyword('while');

		expect('(');

		test = parseExpression();

		expect(')');

		oldInIteration = state.inIteration;
		state.inIteration = true;

		body = parseStatement();

		state.inIteration = oldInIteration;

		return delegate.createWhileStatement(test, body);
	}

	function parseForVariableDeclaration() {
		var token = lex(),
			declarations = parseVariableDeclarationList();

		return delegate.createVariableDeclaration(declarations, token.value);
	}

	function parseForStatement() {
		var init, test, update, left, right, body, oldInIteration;

		init = test = update = null;

		expectKeyword('for');

		expect('(');

		if (match(';')) {
			lex();
		} else {
			if (matchKeyword('var') || matchKeyword('let')) {
				state.allowIn = false;
				init = parseForVariableDeclaration();
				state.allowIn = true;

				if (init.declarations.length === 1 && matchKeyword('in')) {
					lex();
					left = init;
					right = parseExpression();
					init = null;
				}
			} else {
				state.allowIn = false;
				init = parseExpression();
				state.allowIn = true;

				if (matchKeyword('in')) {
					// LeftHandSideExpression
					if (!isLeftHandSide(init)) {
						throwError({}, Messages.InvalidLHSInForIn);
					}

					lex();
					left = init;
					right = parseExpression();
					init = null;
				}
			}

			if (typeof left === 'undefined') {
				expect(';');
			}
		}

		if (typeof left === 'undefined') {

			if (!match(';')) {
				test = parseExpression();
			}
			expect(';');

			if (!match(')')) {
				update = parseExpression();
			}
		}

		expect(')');

		oldInIteration = state.inIteration;
		state.inIteration = true;

		body = parseStatement();

		state.inIteration = oldInIteration;

		return (typeof left === 'undefined') ?
			delegate.createForStatement(init, test, update, body) :
			delegate.createForInStatement(left, right, body);
	}

	// 12.7 The continue statement

	function parseContinueStatement() {
		var label = null, key;

		expectKeyword('continue');

		// Optimize the most common form: 'continue;'.
		if (source.charCodeAt(index) === 59) {
			lex();

			if (!state.inIteration) {
				throwError({}, Messages.IllegalContinue);
			}

			return delegate.createContinueStatement(null);
		}

		if (peekLineTerminator()) {
			if (!state.inIteration) {
				throwError({}, Messages.IllegalContinue);
			}

			return delegate.createContinueStatement(null);
		}

		if (lookahead.type === Token.Identifier) {
			label = parseVariableIdentifier();

			key = '$' + label.name;
			if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
				throwError({}, Messages.UnknownLabel, label.name);
			}
		}

		consumeSemicolon();

		if (label === null && !state.inIteration) {
			throwError({}, Messages.IllegalContinue);
		}

		return delegate.createContinueStatement(label);
	}

	// 12.8 The break statement

	function parseBreakStatement() {
		var label = null, key;

		expectKeyword('break');

		// Catch the very common case first: immediately a semicolon (char #59).
		if (source.charCodeAt(index) === 59) {
			lex();

			if (!(state.inIteration || state.inSwitch)) {
				throwError({}, Messages.IllegalBreak);
			}

			return delegate.createBreakStatement(null);
		}

		if (peekLineTerminator()) {
			if (!(state.inIteration || state.inSwitch)) {
				throwError({}, Messages.IllegalBreak);
			}

			return delegate.createBreakStatement(null);
		}

		if (lookahead.type === Token.Identifier) {
			label = parseVariableIdentifier();

			key = '$' + label.name;
			if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
				throwError({}, Messages.UnknownLabel, label.name);
			}
		}

		consumeSemicolon();

		if (label === null && !(state.inIteration || state.inSwitch)) {
			throwError({}, Messages.IllegalBreak);
		}

		return delegate.createBreakStatement(label);
	}

	// 12.9 The return statement

	function parseReturnStatement() {
		var argument = null;

		expectKeyword('return');

		if (!state.inFunctionBody) {
			throwErrorTolerant({}, Messages.IllegalReturn);
		}

		// 'return' followed by a space and an identifier is very common.
		if (source.charCodeAt(index) === 32) {
			if (isIdentifierStart(source.charCodeAt(index + 1))) {
				argument = parseExpression();
				consumeSemicolon();
				return delegate.createReturnStatement(argument);
			}
		}

		if (peekLineTerminator()) {
			return delegate.createReturnStatement(null);
		}

		if (!match(';')) {
			if (!match('}') && lookahead.type !== Token.EOF) {
				argument = parseExpression();
			}
		}

		consumeSemicolon();

		return delegate.createReturnStatement(argument);
	}

	// 12.10 The with statement

	function parseWithStatement() {
		var object, body;

		if (strict) {
			throwErrorTolerant({}, Messages.StrictModeWith);
		}

		expectKeyword('with');

		expect('(');

		object = parseExpression();

		expect(')');

		body = parseStatement();

		return delegate.createWithStatement(object, body);
	}

	// 12.10 The swith statement

	function parseSwitchCase() {
		var test,
			consequent = [],
			statement;

		if (matchKeyword('default')) {
			lex();
			test = null;
		} else {
			expectKeyword('case');
			test = parseExpression();
		}
		expect(':');

		while (index < length) {
			if (match('}') || matchKeyword('default') || matchKeyword('case')) {
				break;
			}
			statement = parseStatement();
			consequent.push(statement);
		}

		return delegate.createSwitchCase(test, consequent);
	}

	function parseSwitchStatement() {
		var discriminant, cases, clause, oldInSwitch, defaultFound;

		expectKeyword('switch');

		expect('(');

		discriminant = parseExpression();

		expect(')');

		expect('{');

		if (match('}')) {
			lex();
			return delegate.createSwitchStatement(discriminant);
		}

		cases = [];

		oldInSwitch = state.inSwitch;
		state.inSwitch = true;
		defaultFound = false;

		while (index < length) {
			if (match('}')) {
				break;
			}
			clause = parseSwitchCase();
			if (clause.test === null) {
				if (defaultFound) {
					throwError({}, Messages.MultipleDefaultsInSwitch);
				}
				defaultFound = true;
			}
			cases.push(clause);
		}

		state.inSwitch = oldInSwitch;

		expect('}');

		return delegate.createSwitchStatement(discriminant, cases);
	}

	// 12.13 The throw statement

	function parseThrowStatement() {
		var argument;

		expectKeyword('throw');

		if (peekLineTerminator()) {
			throwError({}, Messages.NewlineAfterThrow);
		}

		argument = parseExpression();

		consumeSemicolon();

		return delegate.createThrowStatement(argument);
	}

	// 12.14 The try statement

	function parseCatchClause() {
		var param, body;

		expectKeyword('catch');

		expect('(');
		if (match(')')) {
			throwUnexpected(lookahead);
		}

		param = parseExpression();
		// 12.14.1
		if (strict && param.type === Syntax.Identifier && isRestrictedWord(param.name)) {
			throwErrorTolerant({}, Messages.StrictCatchVariable);
		}

		expect(')');
		body = parseBlock();
		return delegate.createCatchClause(param, body);
	}

	function parseTryStatement() {
		var block, handlers = [], finalizer = null;

		expectKeyword('try');

		block = parseBlock();

		if (matchKeyword('catch')) {
			handlers.push(parseCatchClause());
		}

		if (matchKeyword('finally')) {
			lex();
			finalizer = parseBlock();
		}

		if (handlers.length === 0 && !finalizer) {
			throwError({}, Messages.NoCatchOrFinally);
		}

		return delegate.createTryStatement(block, [], handlers, finalizer);
	}

	// 12.15 The debugger statement

	function parseDebuggerStatement() {
		expectKeyword('debugger');

		consumeSemicolon();

		return delegate.createDebuggerStatement();
	}

	// 12 Statements

	function parseStatement() {
		var type = lookahead.type,
			expr,
			labeledBody,
			key;

		if (type === Token.EOF) {
			throwUnexpected(lookahead);
		}

		if (type === Token.Punctuator) {
			switch (lookahead.value) {
				case ';':
					return parseEmptyStatement();
				case '{':
					return parseBlock();
				case '(':
					return parseExpressionStatement();
				default:
					break;
			}
		}

		if (type === Token.Keyword) {
			switch (lookahead.value) {
				case 'break':
					return parseBreakStatement();
				case 'continue':
					return parseContinueStatement();
				case 'debugger':
					return parseDebuggerStatement();
				case 'do':
					return parseDoWhileStatement();
				case 'for':
					return parseForStatement();
				case 'function':
					return parseFunctionDeclaration();
				case 'if':
					return parseIfStatement();
				case 'return':
					return parseReturnStatement();
				case 'switch':
					return parseSwitchStatement();
				case 'throw':
					return parseThrowStatement();
				case 'try':
					return parseTryStatement();
				case 'var':
					return parseVariableStatement();
				case 'while':
					return parseWhileStatement();
				case 'with':
					return parseWithStatement();
				default:
					break;
			}
		}

		expr = parseExpression();

		// 12.12 Labelled Statements
		if ((expr.type === Syntax.Identifier) && match(':')) {
			lex();

			key = '$' + expr.name;
			if (Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
				throwError({}, Messages.Redeclaration, 'Label', expr.name);
			}

			state.labelSet[key] = true;
			labeledBody = parseStatement();
			delete state.labelSet[key];
			return delegate.createLabeledStatement(expr, labeledBody);
		}

		consumeSemicolon();

		return delegate.createExpressionStatement(expr);
	}

	// 13 Function Definition

	function parseFunctionSourceElements() {
		var sourceElement, sourceElements = [], token, directive, firstRestricted,
			oldLabelSet, oldInIteration, oldInSwitch, oldInFunctionBody;

		expect('{');

		while (index < length) {
			if (lookahead.type !== Token.StringLiteral) {
				break;
			}
			token = lookahead;

			sourceElement = parseSourceElement();
			sourceElements.push(sourceElement);
			if (sourceElement.expression.type !== Syntax.Literal) {
				// this is not directive
				break;
			}
			directive = source.slice(token.range[0] + 1, token.range[1] - 1);
			if (directive === 'use strict') {
				strict = true;
				if (firstRestricted) {
					throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
				}
			} else {
				if (!firstRestricted && token.octal) {
					firstRestricted = token;
				}
			}
		}

		oldLabelSet = state.labelSet;
		oldInIteration = state.inIteration;
		oldInSwitch = state.inSwitch;
		oldInFunctionBody = state.inFunctionBody;

		state.labelSet = {};
		state.inIteration = false;
		state.inSwitch = false;
		state.inFunctionBody = true;

		while (index < length) {
			if (match('}')) {
				break;
			}
			sourceElement = parseSourceElement();
			if (typeof sourceElement === 'undefined') {
				break;
			}
			sourceElements.push(sourceElement);
		}

		expect('}');

		state.labelSet = oldLabelSet;
		state.inIteration = oldInIteration;
		state.inSwitch = oldInSwitch;
		state.inFunctionBody = oldInFunctionBody;

		return delegate.createBlockStatement(sourceElements);
	}

	function parseParams(firstRestricted) {
		var param, params = [], token, stricted, paramSet, key, message;
		expect('(');

		if (!match(')')) {
			paramSet = {};
			while (index < length) {
				token = lookahead;
				param = parseVariableIdentifier();
				key = '$' + token.value;
				if (strict) {
					if (isRestrictedWord(token.value)) {
						stricted = token;
						message = Messages.StrictParamName;
					}
					if (Object.prototype.hasOwnProperty.call(paramSet, key)) {
						stricted = token;
						message = Messages.StrictParamDupe;
					}
				} else if (!firstRestricted) {
					if (isRestrictedWord(token.value)) {
						firstRestricted = token;
						message = Messages.StrictParamName;
					} else if (isStrictModeReservedWord(token.value)) {
						firstRestricted = token;
						message = Messages.StrictReservedWord;
					} else if (Object.prototype.hasOwnProperty.call(paramSet, key)) {
						firstRestricted = token;
						message = Messages.StrictParamDupe;
					}
				}
				params.push(param);
				paramSet[key] = true;
				if (match(')')) {
					break;
				}
				expect(',');
			}
		}

		expect(')');

		return {
			params: params,
			stricted: stricted,
			firstRestricted: firstRestricted,
			message: message
		};
	}

	function parseFunctionDeclaration() {
		var id, params = [], body, token, stricted, tmp, firstRestricted, message, previousStrict;

		expectKeyword('function');
		token = lookahead;
		id = parseVariableIdentifier();
		if (strict) {
			if (isRestrictedWord(token.value)) {
				throwErrorTolerant(token, Messages.StrictFunctionName);
			}
		} else {
			if (isRestrictedWord(token.value)) {
				firstRestricted = token;
				message = Messages.StrictFunctionName;
			} else if (isStrictModeReservedWord(token.value)) {
				firstRestricted = token;
				message = Messages.StrictReservedWord;
			}
		}

		tmp = parseParams(firstRestricted);
		params = tmp.params;
		stricted = tmp.stricted;
		firstRestricted = tmp.firstRestricted;
		if (tmp.message) {
			message = tmp.message;
		}

		previousStrict = strict;
		body = parseFunctionSourceElements();
		if (strict && firstRestricted) {
			throwError(firstRestricted, message);
		}
		if (strict && stricted) {
			throwErrorTolerant(stricted, message);
		}
		strict = previousStrict;

		return delegate.createFunctionDeclaration(id, params, [], body);
	}

	function parseFunctionExpression() {
		var token, id = null, stricted, firstRestricted, message, tmp, params = [], body, previousStrict;

		expectKeyword('function');

		if (!match('(')) {
			token = lookahead;
			id = parseVariableIdentifier();
			if (strict) {
				if (isRestrictedWord(token.value)) {
					throwErrorTolerant(token, Messages.StrictFunctionName);
				}
			} else {
				if (isRestrictedWord(token.value)) {
					firstRestricted = token;
					message = Messages.StrictFunctionName;
				} else if (isStrictModeReservedWord(token.value)) {
					firstRestricted = token;
					message = Messages.StrictReservedWord;
				}
			}
		}

		tmp = parseParams(firstRestricted);
		params = tmp.params;
		stricted = tmp.stricted;
		firstRestricted = tmp.firstRestricted;
		if (tmp.message) {
			message = tmp.message;
		}

		previousStrict = strict;
		body = parseFunctionSourceElements();
		if (strict && firstRestricted) {
			throwError(firstRestricted, message);
		}
		if (strict && stricted) {
			throwErrorTolerant(stricted, message);
		}
		strict = previousStrict;

		return delegate.createFunctionExpression(id, params, [], body);
	}

	// 14 Program

	function parseSourceElement() {
		if (lookahead.type === Token.Keyword) {
			switch (lookahead.value) {
				case 'const':
				case 'let':
					return parseConstLetDeclaration(lookahead.value);
				case 'function':
					return parseFunctionDeclaration();
				default:
					return parseStatement();
			}
		}

		if (lookahead.type !== Token.EOF) {
			return parseStatement();
		}
	}

	function parseSourceElements() {
		var sourceElement, sourceElements = [], token, directive, firstRestricted;

		while (index < length) {
			token = lookahead;
			if (token.type !== Token.StringLiteral) {
				break;
			}

			sourceElement = parseSourceElement();
			sourceElements.push(sourceElement);
			if (sourceElement.expression.type !== Syntax.Literal) {
				// this is not directive
				break;
			}
			directive = source.slice(token.range[0] + 1, token.range[1] - 1);
			if (directive === 'use strict') {
				strict = true;
				if (firstRestricted) {
					throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
				}
			} else {
				if (!firstRestricted && token.octal) {
					firstRestricted = token;
				}
			}
		}

		while (index < length) {
			sourceElement = parseSourceElement();
			if (typeof sourceElement === 'undefined') {
				break;
			}
			sourceElements.push(sourceElement);
		}
		return sourceElements;
	}

	function parseProgram() {
		var body;
		strict = false;
		peek();
		body = parseSourceElements();
		return delegate.createProgram(body);
	}

	// The following functions are needed only when the option to preserve
	// the comments is active.

	function addComment(type, value, start, end, loc) {
		assert(typeof start === 'number', 'Comment must have valid position');

		// Because the way the actual token is scanned, often the comments
		// (if any) are skipped twice during the lexical analysis.
		// Thus, we need to skip adding a comment if the comment array already
		// handled it.
		if (extra.comments.length > 0) {
			if (extra.comments[extra.comments.length - 1].range[1] > start) {
				return;
			}
		}

		extra.comments.push({
			type: type,
			value: value,
			range: [start, end],
			loc: loc
		});
	}

	function scanComment() {
		var comment, ch, loc, start, blockComment, lineComment;

		comment = '';
		blockComment = false;
		lineComment = false;

		while (index < length) {
			ch = source[index];

			if (lineComment) {
				ch = source[index++];
				if (isLineTerminator(ch.charCodeAt(0))) {
					loc.end = {
						line: lineNumber,
						column: index - lineStart - 1
					};
					lineComment = false;
					addComment('Line', comment, start, index - 1, loc);
					if (ch === '\r' && source[index] === '\n') {
						++index;
					}
					++lineNumber;
					lineStart = index;
					comment = '';
				} else if (index >= length) {
					lineComment = false;
					comment += ch;
					loc.end = {
						line: lineNumber,
						column: length - lineStart
					};
					addComment('Line', comment, start, length, loc);
				} else {
					comment += ch;
				}
			} else if (blockComment) {
				if (isLineTerminator(ch.charCodeAt(0))) {
					if (ch === '\r' && source[index + 1] === '\n') {
						++index;
						comment += '\r\n';
					} else {
						comment += ch;
					}
					++lineNumber;
					++index;
					lineStart = index;
					if (index >= length) {
						throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
					}
				} else {
					ch = source[index++];
					if (index >= length) {
						throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
					}
					comment += ch;
					if (ch === '*') {
						ch = source[index];
						if (ch === '/') {
							comment = comment.substr(0, comment.length - 1);
							blockComment = false;
							++index;
							loc.end = {
								line: lineNumber,
								column: index - lineStart
							};
							addComment('Block', comment, start, index, loc);
							comment = '';
						}
					}
				}
			} else if (ch === '/') {
				ch = source[index + 1];
				if (ch === '/') {
					loc = {
						start: {
							line: lineNumber,
							column: index - lineStart
						}
					};
					start = index;
					index += 2;
					lineComment = true;
					if (index >= length) {
						loc.end = {
							line: lineNumber,
							column: index - lineStart
						};
						lineComment = false;
						addComment('Line', comment, start, index, loc);
					}
				} else if (ch === '*') {
					start = index;
					index += 2;
					blockComment = true;
					loc = {
						start: {
							line: lineNumber,
							column: index - lineStart - 2
						}
					};
					if (index >= length) {
						throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
					}
				} else {
					break;
				}
			} else if (isWhiteSpace(ch.charCodeAt(0))) {
				++index;
			} else if (isLineTerminator(ch.charCodeAt(0))) {
				++index;
				if (ch ===  '\r' && source[index] === '\n') {
					++index;
				}
				++lineNumber;
				lineStart = index;
			} else {
				break;
			}
		}
	}

	function filterCommentLocation() {
		var i, entry, comment, comments = [];

		for (i = 0; i < extra.comments.length; ++i) {
			entry = extra.comments[i];
			comment = {
				type: entry.type,
				value: entry.value
			};
			if (extra.range) {
				comment.range = entry.range;
			}
			if (extra.loc) {
				comment.loc = entry.loc;
			}
			comments.push(comment);
		}

		extra.comments = comments;
	}

	function collectToken() {
		var start, loc, token, range, value;

		skipComment();
		start = index;
		loc = {
			start: {
				line: lineNumber,
				column: index - lineStart
			}
		};

		token = extra.advance();
		loc.end = {
			line: lineNumber,
			column: index - lineStart
		};

		if (token.type !== Token.EOF) {
			range = [token.range[0], token.range[1]];
			value = source.slice(token.range[0], token.range[1]);
			extra.tokens.push({
				type: TokenName[token.type],
				value: value,
				range: range,
				loc: loc
			});
		}

		return token;
	}

	function collectRegex() {
		var pos, loc, regex, token;

		skipComment();

		pos = index;
		loc = {
			start: {
				line: lineNumber,
				column: index - lineStart
			}
		};

		regex = extra.scanRegExp();
		loc.end = {
			line: lineNumber,
			column: index - lineStart
		};

		// Pop the previous token, which is likely '/' or '/='
		if (extra.tokens.length > 0) {
			token = extra.tokens[extra.tokens.length - 1];
			if (token.range[0] === pos && token.type === 'Punctuator') {
				if (token.value === '/' || token.value === '/=') {
					extra.tokens.pop();
				}
			}
		}

		extra.tokens.push({
			type: 'RegularExpression',
			value: regex.literal,
			range: [pos, index],
			loc: loc
		});

		return regex;
	}

	function filterTokenLocation() {
		var i, entry, token, tokens = [];

		for (i = 0; i < extra.tokens.length; ++i) {
			entry = extra.tokens[i];
			token = {
				type: entry.type,
				value: entry.value
			};
			if (extra.range) {
				token.range = entry.range;
			}
			if (extra.loc) {
				token.loc = entry.loc;
			}
			tokens.push(token);
		}

		extra.tokens = tokens;
	}

	function createLocationMarker() {
		var marker = {};

		marker.range = [index, index];
		marker.loc = {
			start: {
				line: lineNumber,
				column: index - lineStart
			},
			end: {
				line: lineNumber,
				column: index - lineStart
			}
		};

		marker.end = function () {
			this.range[1] = index;
			this.loc.end.line = lineNumber;
			this.loc.end.column = index - lineStart;
		};

		marker.applyGroup = function (node) {
			if (extra.range) {
				node.groupRange = [this.range[0], this.range[1]];
			}
			if (extra.loc) {
				node.groupLoc = {
					start: {
						line: this.loc.start.line,
						column: this.loc.start.column
					},
					end: {
						line: this.loc.end.line,
						column: this.loc.end.column
					}
				};
			}
		};

		marker.apply = function (node) {
			if (extra.range) {
				node.range = [this.range[0], this.range[1]];
			}
			if (extra.loc) {
				node.loc = {
					start: {
						line: this.loc.start.line,
						column: this.loc.start.column
					},
					end: {
						line: this.loc.end.line,
						column: this.loc.end.column
					}
				};
			}
		};

		return marker;
	}

	function trackGroupExpression() {
		var marker, expr;

		skipComment();
		marker = createLocationMarker();
		expect('(');

		expr = parseExpression();

		expect(')');

		marker.end();
		marker.applyGroup(expr);

		return expr;
	}

	function trackLeftHandSideExpression() {
		var marker, expr, property;

		skipComment();
		marker = createLocationMarker();

		expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();

		while (match('.') || match('[')) {
			if (match('[')) {
				property = parseComputedMember();
				expr = delegate.createMemberExpression('[', expr, property);
				marker.end();
				marker.apply(expr);
			} else {
				property = parseNonComputedMember();
				expr = delegate.createMemberExpression('.', expr, property);
				marker.end();
				marker.apply(expr);
			}
		}

		return expr;
	}

	function trackLeftHandSideExpressionAllowCall() {
		var marker, expr, args, property;

		skipComment();
		marker = createLocationMarker();

		expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();

		while (match('.') || match('[') || match('(')) {
			if (match('(')) {
				args = parseArguments();
				expr = delegate.createCallExpression(expr, args);
				marker.end();
				marker.apply(expr);
			} else if (match('[')) {
				property = parseComputedMember();
				expr = delegate.createMemberExpression('[', expr, property);
				marker.end();
				marker.apply(expr);
			} else {
				property = parseNonComputedMember();
				expr = delegate.createMemberExpression('.', expr, property);
				marker.end();
				marker.apply(expr);
			}
		}

		return expr;
	}

	function filterGroup(node) {
		var n, i, entry;

		n = (Object.prototype.toString.apply(node) === '[object Array]') ? [] : {};
		for (i in node) {
			if (node.hasOwnProperty(i) && i !== 'groupRange' && i !== 'groupLoc') {
				entry = node[i];
				if (entry === null || typeof entry !== 'object' || entry instanceof RegExp) {
					n[i] = entry;
				} else {
					n[i] = filterGroup(entry);
				}
			}
		}
		return n;
	}

	function wrapTrackingFunction(range, loc) {

		return function (parseFunction) {

			function isBinary(node) {
				return node.type === Syntax.LogicalExpression ||
					node.type === Syntax.BinaryExpression;
			}

			function visit(node) {
				var start, end;

				if (isBinary(node.left)) {
					visit(node.left);
				}
				if (isBinary(node.right)) {
					visit(node.right);
				}

				if (range) {
					if (node.left.groupRange || node.right.groupRange) {
						start = node.left.groupRange ? node.left.groupRange[0] : node.left.range[0];
						end = node.right.groupRange ? node.right.groupRange[1] : node.right.range[1];
						node.range = [start, end];
					} else if (typeof node.range === 'undefined') {
						start = node.left.range[0];
						end = node.right.range[1];
						node.range = [start, end];
					}
				}
				if (loc) {
					if (node.left.groupLoc || node.right.groupLoc) {
						start = node.left.groupLoc ? node.left.groupLoc.start : node.left.loc.start;
						end = node.right.groupLoc ? node.right.groupLoc.end : node.right.loc.end;
						node.loc = {
							start: start,
							end: end
						};
					} else if (typeof node.loc === 'undefined') {
						node.loc = {
							start: node.left.loc.start,
							end: node.right.loc.end
						};
					}
				}
			}

			return function () {
				var marker, node;

				skipComment();

				marker = createLocationMarker();
				node = parseFunction.apply(null, arguments);
				marker.end();

				if (range && typeof node.range === 'undefined') {
					marker.apply(node);
				}

				if (loc && typeof node.loc === 'undefined') {
					marker.apply(node);
				}

				if (isBinary(node)) {
					visit(node);
				}

				return node;
			};
		};
	}

	function patch() {

		var wrapTracking;

		if (extra.comments) {
			extra.skipComment = skipComment;
			skipComment = scanComment;
		}

		if (extra.range || extra.loc) {

			extra.parseGroupExpression = parseGroupExpression;
			extra.parseLeftHandSideExpression = parseLeftHandSideExpression;
			extra.parseLeftHandSideExpressionAllowCall = parseLeftHandSideExpressionAllowCall;
			parseGroupExpression = trackGroupExpression;
			parseLeftHandSideExpression = trackLeftHandSideExpression;
			parseLeftHandSideExpressionAllowCall = trackLeftHandSideExpressionAllowCall;

			wrapTracking = wrapTrackingFunction(extra.range, extra.loc);

			extra.parseAssignmentExpression = parseAssignmentExpression;
			extra.parseBinaryExpression = parseBinaryExpression;
			extra.parseBlock = parseBlock;
			extra.parseFunctionSourceElements = parseFunctionSourceElements;
			extra.parseCatchClause = parseCatchClause;
			extra.parseComputedMember = parseComputedMember;
			extra.parseConditionalExpression = parseConditionalExpression;
			extra.parseConstLetDeclaration = parseConstLetDeclaration;
			extra.parseExpression = parseExpression;
			extra.parseForVariableDeclaration = parseForVariableDeclaration;
			extra.parseFunctionDeclaration = parseFunctionDeclaration;
			extra.parseFunctionExpression = parseFunctionExpression;
			extra.parseNewExpression = parseNewExpression;
			extra.parseNonComputedProperty = parseNonComputedProperty;
			extra.parseObjectProperty = parseObjectProperty;
			extra.parseObjectPropertyKey = parseObjectPropertyKey;
			extra.parsePostfixExpression = parsePostfixExpression;
			extra.parsePrimaryExpression = parsePrimaryExpression;
			extra.parseProgram = parseProgram;
			extra.parsePropertyFunction = parsePropertyFunction;
			extra.parseStatement = parseStatement;
			extra.parseSwitchCase = parseSwitchCase;
			extra.parseUnaryExpression = parseUnaryExpression;
			extra.parseVariableDeclaration = parseVariableDeclaration;
			extra.parseVariableIdentifier = parseVariableIdentifier;

			parseAssignmentExpression = wrapTracking(extra.parseAssignmentExpression);
			parseBinaryExpression = wrapTracking(extra.parseBinaryExpression);
			parseBlock = wrapTracking(extra.parseBlock);
			parseFunctionSourceElements = wrapTracking(extra.parseFunctionSourceElements);
			parseCatchClause = wrapTracking(extra.parseCatchClause);
			parseComputedMember = wrapTracking(extra.parseComputedMember);
			parseConditionalExpression = wrapTracking(extra.parseConditionalExpression);
			parseConstLetDeclaration = wrapTracking(extra.parseConstLetDeclaration);
			parseExpression = wrapTracking(extra.parseExpression);
			parseForVariableDeclaration = wrapTracking(extra.parseForVariableDeclaration);
			parseFunctionDeclaration = wrapTracking(extra.parseFunctionDeclaration);
			parseFunctionExpression = wrapTracking(extra.parseFunctionExpression);
			parseLeftHandSideExpression = wrapTracking(parseLeftHandSideExpression);
			parseNewExpression = wrapTracking(extra.parseNewExpression);
			parseNonComputedProperty = wrapTracking(extra.parseNonComputedProperty);
			parseObjectProperty = wrapTracking(extra.parseObjectProperty);
			parseObjectPropertyKey = wrapTracking(extra.parseObjectPropertyKey);
			parsePostfixExpression = wrapTracking(extra.parsePostfixExpression);
			parsePrimaryExpression = wrapTracking(extra.parsePrimaryExpression);
			parseProgram = wrapTracking(extra.parseProgram);
			parsePropertyFunction = wrapTracking(extra.parsePropertyFunction);
			parseStatement = wrapTracking(extra.parseStatement);
			parseSwitchCase = wrapTracking(extra.parseSwitchCase);
			parseUnaryExpression = wrapTracking(extra.parseUnaryExpression);
			parseVariableDeclaration = wrapTracking(extra.parseVariableDeclaration);
			parseVariableIdentifier = wrapTracking(extra.parseVariableIdentifier);
		}

		if (typeof extra.tokens !== 'undefined') {
			extra.advance = advance;
			extra.scanRegExp = scanRegExp;

			advance = collectToken;
			scanRegExp = collectRegex;
		}
	}

	function unpatch() {
		if (typeof extra.skipComment === 'function') {
			skipComment = extra.skipComment;
		}

		if (extra.range || extra.loc) {
			parseAssignmentExpression = extra.parseAssignmentExpression;
			parseBinaryExpression = extra.parseBinaryExpression;
			parseBlock = extra.parseBlock;
			parseFunctionSourceElements = extra.parseFunctionSourceElements;
			parseCatchClause = extra.parseCatchClause;
			parseComputedMember = extra.parseComputedMember;
			parseConditionalExpression = extra.parseConditionalExpression;
			parseConstLetDeclaration = extra.parseConstLetDeclaration;
			parseExpression = extra.parseExpression;
			parseForVariableDeclaration = extra.parseForVariableDeclaration;
			parseFunctionDeclaration = extra.parseFunctionDeclaration;
			parseFunctionExpression = extra.parseFunctionExpression;
			parseGroupExpression = extra.parseGroupExpression;
			parseLeftHandSideExpression = extra.parseLeftHandSideExpression;
			parseLeftHandSideExpressionAllowCall = extra.parseLeftHandSideExpressionAllowCall;
			parseNewExpression = extra.parseNewExpression;
			parseNonComputedProperty = extra.parseNonComputedProperty;
			parseObjectProperty = extra.parseObjectProperty;
			parseObjectPropertyKey = extra.parseObjectPropertyKey;
			parsePrimaryExpression = extra.parsePrimaryExpression;
			parsePostfixExpression = extra.parsePostfixExpression;
			parseProgram = extra.parseProgram;
			parsePropertyFunction = extra.parsePropertyFunction;
			parseStatement = extra.parseStatement;
			parseSwitchCase = extra.parseSwitchCase;
			parseUnaryExpression = extra.parseUnaryExpression;
			parseVariableDeclaration = extra.parseVariableDeclaration;
			parseVariableIdentifier = extra.parseVariableIdentifier;
		}

		if (typeof extra.scanRegExp === 'function') {
			advance = extra.advance;
			scanRegExp = extra.scanRegExp;
		}
	}

	function parse(code, options) {
		var program, toString;

		toString = String;
		if (typeof code !== 'string' && !(code instanceof String)) {
			code = toString(code);
		}

		delegate = SyntaxTreeDelegate;
		source = code;
		index = 0;
		lineNumber = (source.length > 0) ? 1 : 0;
		lineStart = 0;
		length = source.length;
		lookahead = null;
		state = {
			allowIn: true,
			labelSet: {},
			inFunctionBody: false,
			inIteration: false,
			inSwitch: false
		};

		extra = {};
		if (typeof options !== 'undefined') {
			extra.range = (typeof options.range === 'boolean') && options.range;
			extra.loc = (typeof options.loc === 'boolean') && options.loc;

			if (typeof options.tokens === 'boolean' && options.tokens) {
				extra.tokens = [];
			}
			if (typeof options.comment === 'boolean' && options.comment) {
				extra.comments = [];
			}
			if (typeof options.tolerant === 'boolean' && options.tolerant) {
				extra.errors = [];
			}
		}

		if (length > 0) {
			if (typeof source[0] === 'undefined') {
				// Try first to convert to a string. This is good as fast path
				// for old IE which understands string indexing for string
				// literals only and not for string object.
				if (code instanceof String) {
					source = code.valueOf();
				}
			}
		}

		patch();
		try {
			program = parseProgram();
			if (typeof extra.comments !== 'undefined') {
				filterCommentLocation();
				program.comments = extra.comments;
			}
			if (typeof extra.tokens !== 'undefined') {
				filterTokenLocation();
				program.tokens = extra.tokens;
			}
			if (typeof extra.errors !== 'undefined') {
				program.errors = extra.errors;
			}
			if (extra.range || extra.loc) {
				program.body = filterGroup(program.body);
			}
		} catch (e) {
			throw e;
		} finally {
			unpatch();
			extra = {};
		}

		return program;
	}

	// Sync with package.json and component.json.
	exports.version = '1.1.0-dev';

	exports.parse = parse;

	// Deep copy.
	exports.Syntax = (function () {
		var name, types = {};

		if (typeof Object.create === 'function') {
			types = Object.create(null);
		}

		for (name in Syntax) {
			if (Syntax.hasOwnProperty(name)) {
				types[name] = Syntax[name];
			}
		}

		if (typeof Object.freeze === 'function') {
			Object.freeze(types);
		}

		return types;
	}());

}));
/* vim: set sw=4 ts=4 et tw=80 : */
/*global console, namespace, tek271, esprima */

namespace('tek271.jsmetrics.range');

(function () {
	tek271.jsmetrics.range.createRange = createRange;
	tek271.jsmetrics.range.createRangeFromObject = createRangeFromObject;
	tek271.jsmetrics.range.joinRanges = joinRanges;
	tek271.jsmetrics.range.sumRangesSize = sumRangesSize;

	function createRangeFromObject(obj) {
		return createRange(obj.start, obj.end);
	}

	function createRange(start, end) {
		if (start>end) {
			var t= start;
			start= end;
			end=t;
		}
		return {
			start: start,
			end: end,
			size: size,
			isIntersectsWith: isIntersectsWith,
			append: append
		};
	}

	function size() {
		return this.end- this.start+1;
	}

	function isIntersectsWith(range) {
		if (this.end < range.start) return false;
		if (this.start > range.end) return false;
		return true;
	}

	function append(range) {
		var start = Math.min(this.start, range.start);
		var end = Math.max(this.end, range.end);
		this.start = start;
		this.end= end;
	}

	function joinRanges(ranges) {
		var joined = [];
		for (var i=0, n=ranges.length; i<n; i++) {
			joined = appendToJoined(joined, ranges[i]);
		}
		return joined;
	}

	function appendToJoined(joined, range) {
		for (var i= 0, n=joined.length; i<n; i++) {
			if (joined[i].isIntersectsWith(range)) {
				joined[i].append(range);
				return joined;
			}
		}
		joined.push(range);
		return joined;
	}

	function sumRangesSize(ranges) {
		var sum=0;
		for (var i=0, n=ranges.length; i<n; i++) {
			sum += ranges[i].size();
		}
		return sum;
	}

})();
/*global console, namespace, tek271, esprima */

namespace('tek271.jsmetrics.tree');

(function() {
	tek271.jsmetrics.tree.traverse = traverse;


	var hasFilter;

	function traverse(tree, filter) {
		hasFilter = _.isFunction(filter);
		return traverseDetails(tree, filter, '');
	}

	function traverseDetails(tree, filter, path) {
		var result = {nodeCount:0, matched:[]};

		_.each(tree, function(v, k) {
			var currentPath= path + '/' + k;
			result.nodeCount++;
			if (hasFilter && filter(k, v)) {
				result.matched.push(createObject(k, v, tree, currentPath));
			}

			if (_.isArray(v)) {
				_.each(v, function(el, index){
					traverseObject(el, filter, result, currentPath + '/' + index);
				});
			} else if (_.isObject(v)) {
				traverseObject(v, filter, result, currentPath);
			}
		});
		return result;
	}

	function traverseObject(object, filter, result, path) {
		var sub = traverseDetails(object, filter, path);
		result.nodeCount += sub.nodeCount;
		if (sub.matched.length > 0) {
			result.matched = result.matched.concat(sub.matched);
		}
	}

	function createObject(k, v, parent, path) {
		return {
			name: k,
			value: v,
			parent: parent,
			path: path
		};
	}

})();
/*global console, namespace, tek271, esprima, tstring */

namespace('tek271.jsmetrics.file');

(function () {
	tek271.jsmetrics.file.parseText = parseText;
	tek271.jsmetrics.file.parseFile = parseFile;

	var traverse = tek271.jsmetrics.tree.traverse;
	var debug = true;
	var includeTokenLocation = true;  // this must be true

	var blockDepthThreshold = 6;
	var createRangeFromObject = tek271.jsmetrics.range.createRangeFromObject;
	var joinRanges = tek271.jsmetrics.range.joinRanges;
	var sumRangesSize = tek271.jsmetrics.range.sumRangesSize;

	function parseFile(fileName, depthThreshold) {
		console.log('Parsing ' + fileName);
		var text = readFile(fileName);
		var r = parseText(text, depthThreshold);
		r.fileName = fileName;
		return r;
	}

	/**
	 * Parse the given javaScript text and return an object with these attributes:
	 * lineCount: # of lines in the text
	 * commentLines: # of comment lines
	 * emptyLines: # of empty lines
	 * functionCount: # of functions
	 * totalFunctionsLines: sum of lengths of all functions, usually > lineCount, not counting empty lines
	 * totalFunctionsDepth: sum of depths of all functions
	 * averageFunctionLength: average # of lines per function, not counting empty lines
	 * averageFunctionDepth: average depth per function. Depth here means how deeply nested is the function.
	 * functions: Array of objects, each describe a function in the text. The object has the following members:
	 *     name: name of the function. Empty string for anonymous functions.
	 *     type: FunctionDeclaration or FunctionExpression
	 *     start: line at which the function starts, not counting empty lines
	 *     end: line at which the function ends.
	 *     depth: How deeply nested is the function.
	 * blocks: an object containing:
	 *     count: # of blocks
	 *     totalDepth: sum of all blocks depths
	 *     averageDepth: average depth of blocks
	 *     maxDepth: max depth of any block
	 *     depthExceedingThreshold: # of blocks with depth exceeding blockDepthThreshold
	 *     linesDepthExceedingThreshold: # of lines with depth exceeding blockDepthThreshold.
	 *         This will avoid line duplicate, not counting empty lines
	 */
	function parseText(text, depthThreshold) {
		blockDepthThreshold = depthThreshold;
		var lines = countAndFilterLines(text);
		var ast = getSyntax(lines.textWithNoEmptyLines);
		var commentInfo = extractCommentInfo(ast.comments);
		var interestingNodes = extractInterestingNodes(ast);
		var r = calculateFunctionAverages(interestingNodes.functions);
		if (debug) r.ast = ast;
		r.lineCount = lines.lineCount;
		r.commentLines = commentInfo.totalLines;
		r.emptyLines = lines.emptyLines;
		r.functionCount = interestingNodes.functions.length;
		r.functions = interestingNodes.functions;
		r.blocks = createBlockInfo(interestingNodes.blocks);
		return r;
	}

	function createBlockInfo(blocks) {
		var count = blocks.length;
		var summary = calcBlockDepthSummary(blocks);
		var totalDepth = summary.sum;
		return {
			count:count,
			totalDepth:totalDepth,
			averageDepth:count === 0 ? 0 : totalDepth / count,
			maxDepth:summary.maxDepth,
			depthExceedingThreshold:summary.depthExceedingThreshold,
			linesDepthExceedingThreshold:summary.linesDepthExceedingThreshold
		};
	}

	function calcBlockDepthSummary(blocks) {
		var linesDepthExceedingThreshold = calcLinesDepthExceedingThreshold(blocks);
		var sum = 0, maxDepth = 0, depth, depthExceedingThreshold = 0;
		for (var i = 0, n = blocks.length; i < n; i++) {
			depth = blocks[i].depth;
			sum += depth;
			if (depth > maxDepth) maxDepth = depth;
			if (depth > blockDepthThreshold) {
				depthExceedingThreshold++;
			}
		}
		return {
			sum:sum,
			maxDepth:maxDepth,
			depthExceedingThreshold:depthExceedingThreshold,
			linesDepthExceedingThreshold:linesDepthExceedingThreshold
		};
	}

	function calcLinesDepthExceedingThreshold(blocks) {
		var ranges = [];
		for (var i = 0, n = blocks.length; i < n; i++) {
			var block = blocks[i];
			if (block.depth > blockDepthThreshold) {
				ranges.push(createRangeFromObject(block));
			}
		}
		ranges = joinRanges(ranges);
		return sumRangesSize(ranges);
	}

	function countAndFilterLines(text) {
		var lines = text.split('\n');
		var emptyLines = 0, lineCount = lines.length;
		var noneEmptyLines = [];
		for (var i = 0; i < lineCount; i++) {
			var line = lines[i];
			if (tstring(line, true).isBlank()) {
				emptyLines++;
			} else {
				noneEmptyLines.push(line);
			}
		}
		return {
			emptyLines:emptyLines,
			lineCount:lineCount,
			textWithNoEmptyLines:noneEmptyLines.join('\n')
		};
	}

	function extractInterestingNodes(ast) {
		var result = traverse(ast, filter);
		var matchedList = result.matched;
		var functions = [];
		var blocks = [];
		for (var i = 0, n = matchedList.length; i < n; i++) {
			var item = matchedList[i];
			if (isFunction(item.name, item.value)) {
				functions.push(extractFunctionInfo(item));
			} else if (isBlock(item.name)) {
				blocks.push(extractBlockInfo(item));
			}
		}
		return {functions:functions, blocks:blocks};
	}

	function filter(name, value) {
		return isFunction(name, value) || isBlock(name);
	}

	function isFunction(name, value) {
		return name === 'type' && value.indexOf('Function') >= 0;
	}

	function isBlock(name) {
		return name === 'body';
	}

	function extractFunctionInfo(item) {
		var itemParent = item.parent;
		return {name:extractName(itemParent), type:item.value,
			start:itemParent.loc.start.line, end:itemParent.loc.end.line,
			depth:calculateFunctionDepth(item.path)};
	}

	function extractBlockInfo(item) {
		var itemParent = item.parent;
		var start = itemParent.loc.start.line;
		var end = itemParent.loc.end.line;
		return {
			depth:calculateBlockDepth(item.path),
			start:start,
			end:end,
			size:Math.max(1, end - start)
		};
	}

	function calculateFunctionAverages(functions) {
		var lines = 0, depth = 0;
		_.each(functions, function (f) {
			lines += (f.end - f.start + 1);
			depth += f.depth;
		});
		var fs = functions.length;
		return {
			totalFunctionsLines:lines, // sum of lengths of all functions, usually > lineCount
			totalFunctionsDepth:depth, // sum of depths of all functions
			averageFunctionLength:fs === 0 ? 0 : lines / fs,
			averageFunctionDepth:fs === 0 ? 0 : depth / fs
		};
	}


	function calculateFunctionDepth(path) {
		var ar = path.split('/body/');
		return Math.max(ar.length - 2, 0);
	}

	function calculateBlockDepth(path) {
		var ar = path.split('body');
		return Math.max(ar.length - 2, 0);
	}


	// extract node.id.name
	function extractName(node) {
		if (_.isUndefined(node) || node === null) return '';
		node = node.id;
		if (_.isUndefined(node) || node === null) return '';
		node = node.name;
		if (_.isUndefined(node) || node === null) return '';
		return node;
	}

	function extractSize(loc) {
		return Math.max(loc.end.line - loc.start.line, 1);
	}

	function extractLineCount(ast) {
		return ast.loc.end.line;
	}

	function extractCommentInfo(comments) {
		var totalLines = 0, maxEnd = 0;
		for (var i = 0, n = comments.length; i < n; i++) {
			var comment = comments[i];
			maxEnd = Math.max(maxEnd, comment.loc.end.line);
			totalLines += extractSize(comment.loc);
		}
		return {
			totalLines:totalLines,
			maxEnd:maxEnd
		};
	}

	function getSyntax(text) {
		var options = {
			loc:includeTokenLocation,
			tolerant:true,
			comment:true
		};
		return esprima.parse(text, options);
	}

	function readFile(fileName) {
		var text;
		jQuery.ajax({
			async:false,
			url:fileName,
			dataType:'text',
			success:function (data, status) {
				text = data;
			},
			error:function (jqXHR, textStatus, errorThrown) {
				console.log('Error:', textStatus, errorThrown);
				text= '';
			}
		});
		return text;
	}


})();
/*global console, namespace, tek271, esprima, tstring */

namespace('tek271.jsmetrics');

(function () {
	tek271.jsmetrics.calculateMetrics = calculateMetrics;

	var parseFile= tek271.jsmetrics.file.parseFile;

	function calculateMetrics(fileNames, blockDepthThreshold) {
		var fileInfo, files= [];
		var lineCount= 0, commentLines=0, emptyLines= 0,
				functionCount=0, totalFunctionsLines=0, totalFunctionsDepth= 0;
		var blocks= {count:0, totalDepth:0,	averageDepth:0,	maxDepth: 0,
					depthExceedingThreshold:0, linesDepthExceedingThreshold:0};

		for (var i=0, n=fileNames.length; i<n; i++) {
			var fn= fileNames[i];
			if (tstring(fn,true).trim().isEmpty()) continue;
			fileInfo = parseFile(fn, blockDepthThreshold);
			files.push(fileInfo);
			lineCount += fileInfo.lineCount;
			commentLines += fileInfo.commentLines;
			emptyLines += fileInfo.emptyLines;
			functionCount += fileInfo.functionCount;
			totalFunctionsLines += fileInfo.totalFunctionsLines;
			totalFunctionsDepth += fileInfo.totalFunctionsDepth;
			blocks.count += fileInfo.blocks.count;
			blocks.totalDepth += fileInfo.blocks.totalDepth;
			blocks.maxDepth= Math.max(blocks.maxDepth, fileInfo.blocks.maxDepth);
			blocks.depthExceedingThreshold += fileInfo.blocks.depthExceedingThreshold;
			blocks.linesDepthExceedingThreshold += fileInfo.blocks.linesDepthExceedingThreshold;
		}
		blocks.averageDepth= blocks.count===0? 0 : blocks.totalDepth / blocks.count;

		return {
			files: files,
			summary: {
				lineCount: lineCount,
				commentLines: commentLines,
				emptyLines: emptyLines,
				functionCount: functionCount,
				averageFunctionLength: functionCount===0? 0 : totalFunctionsLines/functionCount,
				averageFunctionDepth: functionCount===0? 0 : totalFunctionsDepth/functionCount,
				blocks: blocks
			}
		};
	}


})();
/*global console, namespace, tek271 */

namespace('tek271.jsmetrics.report');

(function () {
	tek271.jsmetrics.report.htmlReport = htmlReport;

	var ignoreEmpty = '<span class="comment">(ignore empty lines)</span>';
	var headers = ['#', 'File Name', 'Code Lines', 'Comment Lines', 'Empty Lines',
					'Functions', 'Av. Function Length'+ignoreEmpty, 'Av. Function Depth',
					'Blocks', 'Av. Block Depth', 'Max Block Depth',
					'Blocks With Depth >', 'Lines With Depth >'];
	var cssClasses = ['lineCounter', 'fileName', 'codeLines', 'commentLines', 'emptyLines',
					'functions', 'averageFunctionLength', 'averageFunctionDepth',
					'blocks', 'averageBlockDepth', 'maxBlockDepth',
					'blockDepthExceedingThreshold', 'linesDepthExceedingThreshold'];

	function htmlReport(metrics, showDetails, blockDepthThreshold) {
		headers[11] = 'Blocks With Depth >' + blockDepthThreshold;
		headers[12] = 'Lines With Depth >' + blockDepthThreshold + ignoreEmpty;

		var ar= [];
		ar.push(tagStart('table', 'jsmetrics'));
		ar= ar.concat( createRow(headers, 'header', cssClasses) );

		if (showDetails) {
			for(var i= 0,n=metrics.files.length; i<n; i++) {
				ar= ar.concat(buildFileDetailsRow(i, metrics.files[i]));
			}
		}
		ar = ar.concat(buildSummaryRow(metrics.summary));
		ar.push(tagEnd('table'));
		return ar;
	}

	function buildFileDetailsRow(rowCounter, file) {
		var fc= file.functionCount;
		var values= [rowCounter+1, file.fileName,
			file.lineCount-file.commentLines-file.emptyLines,
			file.commentLines, file.emptyLines,
			file.functionCount,
			fc===0? 0 : (file.totalFunctionsLines/fc).toFixed(2),
			fc===0? 0 : (file.totalFunctionsDepth/fc).toFixed(2),
			file.blocks.count,
			file.blocks.averageDepth.toFixed(2),
			file.blocks.maxDepth,
			file.blocks.depthExceedingThreshold,
			file.blocks.linesDepthExceedingThreshold
		];
		return createRow(values, 'fileDetails', cssClasses);
	}

	function buildSummaryRow(summary) {
		var values= ['', 'Summary',
			summary.lineCount-summary.commentLines-summary.emptyLines,
			summary.commentLines,
			summary.emptyLines,
			summary.functionCount,
			summary.averageFunctionLength.toFixed(2),
			summary.averageFunctionDepth.toFixed(2),
			summary.blocks.count,
			summary.blocks.averageDepth.toFixed(2),
			summary.blocks.maxDepth,
			summary.blocks.depthExceedingThreshold,
			summary.blocks.linesDepthExceedingThreshold
		];
		return createRow(values, 'summary', cssClasses);
	}

	function createRow(values, rowClass, cssForTds) {
		var ar=[];
		ar.push(' ' + tagStart('tr', rowClass));
		for (var i=0, n=values.length; i<n; i++) {
			ar.push('  ' + td(values[i], cssForTds[i]));
		}

		ar.push(' ' + tagEnd('tr'));
		return ar;
	}

	function tagStart(tag, cssClass) {
		var css= '';
		if (!_.isUndefined(cssClass) && cssClass.length>0) {
			css= ' class="' + cssClass + '"';
		}
		return '<' + tag + css + '>';
	}

	function tagEnd(tag) {
		return '</' + tag + '>';
	}

	function td(value, cssClass) {
		return tagStart('td', cssClass) + value + tagEnd('td');
	}

})();