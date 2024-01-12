// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("stream"),require("process")):"function"==typeof define&&define.amd?define(["stream","process"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).emptyStream=r(e.require$$0$2,e.require$$0$1)}(this,(function(e,r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function o(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var u=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function f(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):u.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(e){return"string"==typeof e}var s=Math.abs,p=String.prototype.toLowerCase,g=String.prototype.toUpperCase,y=String.prototype.replace,d=/e\+(\d)$/,b=/e-(\d)$/,h=/^(\d+)$/,v=/^(\d+)e/,m=/\.0$/,w=/\.0*e/,j=/(\..*[^0])0*e/;function O(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!o(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":s(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=y.call(t,j,"$1e"),t=y.call(t,w,"e"),t=y.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=y.call(t,d,"e+0$1"),t=y.call(t,b,"e-0$1"),e.alternate&&(t=y.call(t,h,"$1."),t=y.call(t,v,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===g.call(e.specifier)?g.call(t):p.call(t)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var E=String.fromCharCode,T=isNaN,k=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function P(e){var r,t,n,o,i,u,c,s,p;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",c=1,s=0;s<e.length;s++)if(l(n=e[s]))u+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,T(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!T(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(i)?String(n.arg):E(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=O(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),u+=n.arg||"",c+=1}return u}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,n,o;for(t=[],o=0,n=I.exec(e);n;)(r=e.slice(o,I.lastIndex-n[0].length)).length&&t.push(r),t.push(V(n)),o=I.lastIndex,n=I.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function F(e){return"string"==typeof e}function $(e){var r,t,n;if(!F(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=A(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return P.apply(null,t)}var M,N=Object.prototype,C=N.toString,B=N.__defineGetter__,L=N.__defineSetter__,R=N.__lookupGetter__,G=N.__lookupSetter__;M=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(R.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&B&&B.call(e,r,t.get),a&&L&&L.call(e,r,t.set),e};var W=M;function X(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var q=Object,Y=/./;function U(e){return"boolean"==typeof e}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function D(){return z&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;function K(e,r){return null!=e&&J.call(e,r)}var Q="function"==typeof Symbol?Symbol:void 0,ee="function"==typeof Q?Q.toStringTag:"";var re=D()?function(e){var r,t,n;if(null==e)return H.call(e);t=e[ee],r=K(e,ee);try{e[ee]=void 0}catch(r){return H.call(e)}return n=H.call(e),r?e[ee]=t:delete e[ee],n}:function(e){return H.call(e)},te=Boolean,ne=Boolean.prototype.toString;var oe=D();function ie(e){return"object"==typeof e&&(e instanceof te||(oe?function(e){try{return ne.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===re(e)))}function ae(e){return U(e)||ie(e)}function ue(){return new Function("return this;")()}X(ae,"isPrimitive",U),X(ae,"isObject",ie);var ce="object"==typeof self?self:null,fe="object"==typeof window?window:null,le="object"==typeof global?global:null,se="object"==typeof globalThis?globalThis:null;var pe=function(e){if(arguments.length){if(!U(e))throw new TypeError($("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ue()}if(se)return se;if(ce)return ce;if(fe)return fe;if(le)return le;throw new Error("unexpected error. Unable to resolve global object.")}(),ge=pe.document&&pe.document.childNodes,ye=Int8Array;function de(){return/^\s*function\s*([^(]*)/i}var be=/^\s*function\s*([^(]*)/i;X(de,"REGEXP",be);var he=Array.isArray?Array.isArray:function(e){return"[object Array]"===re(e)};function ve(e){return null!==e&&"object"==typeof e}function me(e){var r,t,n,o;if(("Object"===(t=re(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=be.exec(n.toString()))return r[1]}return ve(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}X(ve,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError($("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!he(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ve));var we="function"==typeof Y||"object"==typeof ye||"function"==typeof ge?function(e){return me(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?me(e).toLowerCase():r};function je(e){return"function"===we(e)}var Oe,_e=Object.getPrototypeOf;Oe=je(Object.getPrototypeOf)?_e:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===re(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Se=Oe;function Ee(e){return null==e?null:(e=q(e),Se(e))}var Te=je(Object.assign),ke=Object.assign;function xe(e){return Object.keys(Object(e))}var Pe,Ie=void 0!==Object.keys;function Ve(e){return"[object Arguments]"===re(e)}Pe=function(){return Ve(arguments)}();var Ae=Pe;function Fe(e){return"string"==typeof e}var $e=String.prototype.valueOf;var Me=D();function Ne(e){return"object"==typeof e&&(e instanceof String||(Me?function(e){try{return $e.call(e),!0}catch(e){return!1}}(e):"[object String]"===re(e)))}function Ce(e){return Fe(e)||Ne(e)}function Be(e){return"number"==typeof e}X(Ce,"isPrimitive",Fe),X(Ce,"isObject",Ne);var Le=Number,Re=Le.prototype.toString;var Ge=D();function We(e){return"object"==typeof e&&(e instanceof Le||(Ge?function(e){try{return Re.call(e),!0}catch(e){return!1}}(e):"[object Number]"===re(e)))}function Xe(e){return Be(e)||We(e)}function Ze(e){return e!=e}function qe(e){return Be(e)&&Ze(e)}function Ye(e){return We(e)&&Ze(e.valueOf())}function Ue(e){return qe(e)||Ye(e)}X(Xe,"isPrimitive",Be),X(Xe,"isObject",We),X(Ue,"isPrimitive",qe),X(Ue,"isObject",Ye);var ze=Number.POSITIVE_INFINITY,De=Le.NEGATIVE_INFINITY,He=Math.floor;function Je(e){return He(e)===e}function Ke(e){return e<ze&&e>De&&Je(e)}function Qe(e){return Be(e)&&Ke(e)}function er(e){return We(e)&&Ke(e.valueOf())}function rr(e){return Qe(e)||er(e)}X(rr,"isPrimitive",Qe),X(rr,"isObject",er);var tr=Object.prototype.propertyIsEnumerable;var nr=!tr.call("beep","0");function or(e,r){var t;return null!=e&&(!(t=tr.call(e,r))&&nr&&Ce(e)?!qe(r=+r)&&Qe(r)&&r>=0&&r<e.length:t)}var ir=Ae?Ve:function(e){return null!==e&&"object"==typeof e&&!he(e)&&"number"==typeof e.length&&Je(e.length)&&e.length>=0&&e.length<=4294967295&&K(e,"callee")&&!or(e,"callee")},ar=Array.prototype.slice;var ur=or((function(){}),"prototype"),cr=!or({toString:null},"toString");function fr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Je(e.length)&&e.length>=0&&e.length<=9007199254740991}function lr(e,r,t){var n,o;if(!fr(e)&&!Fe(e))throw new TypeError($("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Qe(t))throw new TypeError($("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Ue(r)){for(;o<n;o++)if(Ue(e[o]))return o}else for(;o<n;o++)if(e[o]===r)return o;return-1}function sr(e){return e.constructor&&e.constructor.prototype===e}var pr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],gr="undefined"==typeof window?void 0:window;var yr=function(){var e;if("undefined"===we(gr))return!1;for(e in gr)try{-1===lr(pr,e)&&K(gr,e)&&null!==gr[e]&&"object"===we(gr[e])&&sr(gr[e])}catch(e){return!0}return!1}(),dr="undefined"!=typeof window;var br,hr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];br=Ie?function(){return 2!==(xe(arguments)||"").length}(1,2)?function(e){return ir(e)?xe(ar.call(e)):xe(e)}:xe:function(e){var r,t,n,o,i,a,u;if(o=[],ir(e)){for(u=0;u<e.length;u++)o.push(u.toString());return o}if("string"==typeof e){if(e.length>0&&!K(e,"0"))for(u=0;u<e.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!ve(e))return o;t=ur&&n}for(i in e)t&&"prototype"===i||!K(e,i)||o.push(String(i));if(cr)for(r=function(e){if(!1===dr&&!yr)return sr(e);try{return sr(e)}catch(e){return!1}}(e),u=0;u<hr.length;u++)a=hr[u],r&&"constructor"===a||!K(e,a)||o.push(String(a));return o};var vr=br,mr=void 0!==Object.getOwnPropertySymbols,wr=q.getOwnPropertySymbols;var jr,Or=mr?function(e){return wr(q(e))}:function(){return[]};function _r(e){var r,t,n;for(r=vr(e),t=Or(e),n=0;n<t.length;n++)or(e,t[n])&&r.push(t[n]);return r}jr=Te?ke:function(e){var r,t,n,o,i,a,u;if(null==e)throw new TypeError($("invalid argument. First argument must be a non-null object. Value: `%s`.",e));for(i=q(e),a=1;a<arguments.length;a++)if(null!=(r=arguments[a]))for(o=(t=_r(q(r))).length,u=0;u<o;u++)i[n=t[u]]=r[n];return i};var Sr=jr;function Er(e){var r=typeof e;return null===e||"object"!==r&&"function"!==r?new TypeError($("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `%s`.",e)):null}var Tr=Object.create;function kr(){}var xr="function"==typeof Tr?Tr:function(e){return kr.prototype=e,new kr};function Pr(e,r,t){W(e,r,{configurable:!0,enumerable:!1,writable:!0,value:t})}var Ir=r;var Vr={objectMode:!1};var Ar=Object.prototype;function Fr(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!he(e)}(e)&&(!(r=Ee(e))||!K(e,"constructor")&&K(r,"constructor")&&je(r.constructor)&&"[object Function]"===re(r.constructor)&&K(r,"isPrototypeOf")&&je(r.isPrototypeOf)&&(r===Ar||function(e){var r;for(r in e)if(!K(e,r))return!1;return!0}(e)))}function $r(e,r){return Fr(r)?K(r,"objectMode")&&(e.objectMode=r.objectMode,!U(e.objectMode))?new TypeError($("invalid option. `%s` option must be a boolean. Option: `%s`.","objectMode",e.objectMode)):null:new TypeError($("invalid argument. Options argument must be an object. Value: `%s`.",r))}var Mr=Z(Object.freeze({__proto__:null,default:()=>()=>{}}))("empty-stream"),Nr=e.Readable;function Cr(e){var r,t;if(!(this instanceof Cr))return arguments.length>0?new Cr(e):new Cr;if(r=Sr({},Vr),arguments.length>0&&(t=$r(r,e)))throw t;return Mr("Creating a readable stream configured with the following options: %s.",JSON.stringify(r)),Nr.call(this,r),Pr(this,"_destroyed",!1),this}return function(e,r){var t=Er(e);if(t)throw t;if(t=Er(r))throw t;if(void 0===r.prototype)throw new TypeError($("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `%s`.",r.prototype));e.prototype=xr(r.prototype),W(e.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:e})}(Cr,Nr),X(Cr.prototype,"_read",(function(){this.push(null)})),X(Cr.prototype,"destroy",(function(e){var r;return this._destroyed?(Mr("Attempted to destroy an already destroyed stream."),this):(r=this,this._destroyed=!0,function(e){var r,t;for(r=[],t=1;t<arguments.length;t++)r.push(arguments[t]);function n(){e.apply(null,r)}Ir.nextTick(n)}((function(){e&&(Mr("Stream was destroyed due to an error. Error: %s.",function(e){if("object"!=typeof e||null===e)return!1;if(e instanceof Error)return!0;for(;e;){if("[object Error]"===re(e))return!0;e=Ee(e)}return!1}(e)?e.message:JSON.stringify(e)),r.emit("error",e));Mr("Closing the stream..."),r.emit("close")})),this)})),X(Cr,"objectMode",(function(){return new Cr({objectMode:!0})})),X(Cr,"factory",(function(e){var r;if(arguments.length>0){if(!Fr(e))throw new TypeError($("invalid argument. Options argument must be an object. Value: `%s`.",e));r=Sr({},e)}else r={};return t;function t(){return new Cr(r)}})),Cr}));
//# sourceMappingURL=index.js.map
