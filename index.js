// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("stream"),require("process")):"function"==typeof define&&define.amd?define(["stream","process"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).emptyStream=r(e.require$$0$2,e.require$$0$1)}(this,(function(e,r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function o(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var u=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function f(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):u.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!o(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,y,"e+0$1"),t=g.call(t,d,"e-0$1"),e.alternate&&(t=g.call(t,b,"$1."),t=g.call(t,h,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===p.call(e.specifier)?p.call(t):s.call(t)}function O(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,S=Array.isArray;function E(e){return e!=e}function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,o,i,u,c,l,s,p,g,y,d;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",c=1,l=0;l<e.length;l++)if(n=e[l],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,E(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(i)?String(n.arg):_(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,y=n.padRight,d=void 0,(d=g-p.length)<0?p:p=y?p+O(d):O(d)+p)),u+=n.arg||"",c+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,o;for(t=[],o=0,n=x.exec(e);n;)(r=e.slice(o,x.lastIndex-n[0].length)).length&&t.push(r),t.push(P(n)),o=x.lastIndex,n=x.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function V(e){var r,t;if("string"!=typeof e)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return k.apply(null,r)}var A,M=Object.prototype,F=M.toString,$=M.__defineGetter__,C=M.__defineSetter__,N=M.__lookupGetter__,R=M.__lookupSetter__;A=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(N.call(e,r)||R.call(e,r)?(n=e.__proto__,e.__proto__=M,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(e,r,t.get),a&&C&&C.call(e,r,t.set),e};var B=A;function L(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var W=Object,X=/./;function Z(e){return"boolean"==typeof e}var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return q&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&z.call(e,r)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"";var K=U()?function(e){var r,t,n;if(null==e)return Y.call(e);t=e[J],r=D(e,J);try{e[J]=void 0}catch(r){return Y.call(e)}return n=Y.call(e),r?e[J]=t:delete e[J],n}:function(e){return Y.call(e)},Q=Boolean,ee=Boolean.prototype.toString;var re=U();function te(e){return"object"==typeof e&&(e instanceof Q||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function ne(e){return Z(e)||te(e)}L(ne,"isPrimitive",Z),L(ne,"isObject",te);var oe="object"==typeof self?self:null,ie="object"==typeof window?window:null,ae="object"==typeof global?global:null,ue="object"==typeof globalThis?globalThis:null;var ce=function(e){if(arguments.length){if(!Z(e))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ue)return ue;if(oe)return oe;if(ie)return ie;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),fe=ce.document&&ce.document.childNodes,le=Int8Array;function se(){return/^\s*function\s*([^(]*)/i}var pe=/^\s*function\s*([^(]*)/i;L(se,"REGEXP",pe);var ge=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};function ye(e){return null!==e&&"object"==typeof e}function de(e){var r,t,n,o;if(("Object"===(t=K(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=pe.exec(n.toString()))return r[1]}return ye(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}L(ye,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ge(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ye));var be="function"==typeof X||"object"==typeof le||"function"==typeof fe?function(e){return de(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?de(e).toLowerCase():r};function he(e){return"function"===be(e)}var ve,we=Object.getPrototypeOf;ve=he(Object.getPrototypeOf)?we:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===K(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var me=ve;function je(e){return null==e?null:(e=W(e),me(e))}var Oe=he(Object.assign),_e=Object.assign;function Se(e){return Object.keys(Object(e))}var Ee,Te=void 0!==Object.keys;function ke(e){return"[object Arguments]"===K(e)}Ee=function(){return ke(arguments)}();var xe=Ee;function Pe(e){return"string"==typeof e}var Ie=String.prototype.valueOf;var Ve=U();function Ae(e){return"object"==typeof e&&(e instanceof String||(Ve?function(e){try{return Ie.call(e),!0}catch(e){return!1}}(e):"[object String]"===K(e)))}function Me(e){return Pe(e)||Ae(e)}function Fe(e){return"number"==typeof e}L(Me,"isPrimitive",Pe),L(Me,"isObject",Ae);var $e=Number,Ce=$e.prototype.toString;var Ne=U();function Re(e){return"object"==typeof e&&(e instanceof $e||(Ne?function(e){try{return Ce.call(e),!0}catch(e){return!1}}(e):"[object Number]"===K(e)))}function Be(e){return Fe(e)||Re(e)}function Le(e){return e!=e}function Ge(e){return Fe(e)&&Le(e)}function We(e){return Re(e)&&Le(e.valueOf())}function Xe(e){return Ge(e)||We(e)}L(Be,"isPrimitive",Fe),L(Be,"isObject",Re),L(Xe,"isPrimitive",Ge),L(Xe,"isObject",We);var Ze=Number.POSITIVE_INFINITY,qe=$e.NEGATIVE_INFINITY,Ue=Math.floor;function Ye(e){return Ue(e)===e}function ze(e){return e<Ze&&e>qe&&Ye(e)}function De(e){return Fe(e)&&ze(e)}function He(e){return Re(e)&&ze(e.valueOf())}function Je(e){return De(e)||He(e)}L(Je,"isPrimitive",De),L(Je,"isObject",He);var Ke=Object.prototype.propertyIsEnumerable;var Qe=!Ke.call("beep","0");function er(e,r){var t;return null!=e&&(!(t=Ke.call(e,r))&&Qe&&Me(e)?!Ge(r=+r)&&De(r)&&r>=0&&r<e.length:t)}var rr=xe?ke:function(e){return null!==e&&"object"==typeof e&&!ge(e)&&"number"==typeof e.length&&Ye(e.length)&&e.length>=0&&e.length<=4294967295&&D(e,"callee")&&!er(e,"callee")},tr=Array.prototype.slice;var nr=er((function(){}),"prototype"),or=!er({toString:null},"toString"),ir=9007199254740991;function ar(e,r,t){var n,o,i;if(!(i=e,"object"==typeof i&&null!==i&&"number"==typeof i.length&&Ye(i.length)&&i.length>=0&&i.length<=ir||Pe(e)))throw new TypeError(V("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!De(t))throw new TypeError(V("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Xe(r)){for(;o<n;o++)if(Xe(e[o]))return o}else for(;o<n;o++)if(e[o]===r)return o;return-1}function ur(e){return e.constructor&&e.constructor.prototype===e}var cr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],fr="undefined"==typeof window?void 0:window;var lr=function(){var e;if("undefined"===be(fr))return!1;for(e in fr)try{-1===ar(cr,e)&&D(fr,e)&&null!==fr[e]&&"object"===be(fr[e])&&ur(fr[e])}catch(e){return!0}return!1}(),sr="undefined"!=typeof window;var pr,gr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];pr=Te?function(){return 2!==(Se(arguments)||"").length}(1,2)?function(e){return rr(e)?Se(tr.call(e)):Se(e)}:Se:function(e){var r,t,n,o,i,a,u;if(o=[],rr(e)){for(u=0;u<e.length;u++)o.push(u.toString());return o}if("string"==typeof e){if(e.length>0&&!D(e,"0"))for(u=0;u<e.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!ye(e))return o;t=nr&&n}for(i in e)t&&"prototype"===i||!D(e,i)||o.push(String(i));if(or)for(r=function(e){if(!1===sr&&!lr)return ur(e);try{return ur(e)}catch(e){return!1}}(e),u=0;u<gr.length;u++)a=gr[u],r&&"constructor"===a||!D(e,a)||o.push(String(a));return o};var yr=pr,dr=void 0!==Object.getOwnPropertySymbols,br=W.getOwnPropertySymbols;var hr,vr=dr?function(e){return br(W(e))}:function(){return[]};function wr(e){var r,t,n;for(r=yr(e),t=vr(e),n=0;n<t.length;n++)er(e,t[n])&&r.push(t[n]);return r}hr=Oe?_e:function(e){var r,t,n,o,i,a,u;if(null==e)throw new TypeError(V("invalid argument. First argument must be a non-null object. Value: `%s`.",e));for(i=W(e),a=1;a<arguments.length;a++)if(null!=(r=arguments[a]))for(o=(t=wr(W(r))).length,u=0;u<o;u++)i[n=t[u]]=r[n];return i};var mr=hr;function jr(e){var r=typeof e;return null===e||"object"!==r&&"function"!==r?new TypeError(V("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `%s`.",e)):null}var Or=Object.create;function _r(){}var Sr="function"==typeof Or?Or:function(e){return _r.prototype=e,new _r};var Er=r;var Tr={objectMode:!1};var kr=Object.prototype;function xr(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!ge(e)}(e)&&(!(r=je(e))||!D(e,"constructor")&&D(r,"constructor")&&he(r.constructor)&&"[object Function]"===K(r.constructor)&&D(r,"isPrototypeOf")&&he(r.isPrototypeOf)&&(r===kr||function(e){var r;for(r in e)if(!D(e,r))return!1;return!0}(e)))}function Pr(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}var Ir=G(Object.freeze({__proto__:null,default:()=>()=>{}}))("empty-stream"),Vr=e.Readable;function Ar(e){var r,t;if(!(this instanceof Ar))return arguments.length>0?new Ar(e):new Ar;if(r=mr({},Tr),arguments.length>0&&(t=function(e,r){return xr(r)?D(r,"objectMode")&&(e.objectMode=r.objectMode,!Z(e.objectMode))?new TypeError(Pr("1M72o","objectMode",e.objectMode)):null:new TypeError(Pr("1M72V",r))}(r,e),t))throw t;return Ir("Creating a readable stream configured with the following options: %s.",JSON.stringify(r)),Vr.call(this,r),function(e,r,t){B(e,r,{configurable:!0,enumerable:!1,writable:!0,value:t})}(this,"_destroyed",!1),this}return function(e,r){var t=jr(e);if(t)throw t;if(t=jr(r))throw t;if(void 0===r.prototype)throw new TypeError(V("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `%s`.",r.prototype));e.prototype=Sr(r.prototype),B(e.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:e})}(Ar,Vr),L(Ar.prototype,"_read",(function(){this.push(null)})),L(Ar.prototype,"destroy",(function(e){var r;return this._destroyed?(Ir("Attempted to destroy an already destroyed stream."),this):(r=this,this._destroyed=!0,function(e){var r,t;for(r=[],t=1;t<arguments.length;t++)r.push(arguments[t]);Er.nextTick((function(){e.apply(null,r)}))}((function(){e&&(Ir("Stream was destroyed due to an error. Error: %s.",function(e){if("object"!=typeof e||null===e)return!1;if(e instanceof Error)return!0;for(;e;){if("[object Error]"===K(e))return!0;e=je(e)}return!1}(e)?e.message:JSON.stringify(e)),r.emit("error",e));Ir("Closing the stream..."),r.emit("close")})),this)})),L(Ar,"objectMode",(function(){return new Ar({objectMode:!0})})),L(Ar,"factory",(function(e){var r;if(arguments.length>0){if(!xr(e))throw new TypeError(Pr("1M72V",e));r=mr({},e)}else r={};return function(){return new Ar(r)}})),Ar}));
//# sourceMappingURL=index.js.map
