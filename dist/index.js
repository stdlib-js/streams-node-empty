"use strict";var a=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=a(function(I,w){w.exports={objectMode:!1}});var l=a(function(K,c){
var M=require('@stdlib/assert-is-plain-object/dist'),E=require('@stdlib/assert-has-own-property/dist'),O=require('@stdlib/assert-is-boolean/dist').isPrimitive,d=require('@stdlib/error-tools-fmtprodmsg/dist');function S(r,e){return M(e)?E(e,"objectMode")&&(r.objectMode=e.objectMode,!O(r.objectMode))?new TypeError(d('1M72o',"objectMode",r.objectMode)):null:new TypeError(d('1M72V',e));}c.exports=S
});var f=a(function(Q,v){
var x=require("debug"),N=x("empty-stream");v.exports=N
});var o=a(function(W,b){
var m=require("readable-stream").Readable,R=require('@stdlib/assert-is-error/dist'),T=require('@stdlib/object-assign/dist'),_=require('@stdlib/utils-inherit/dist'),A=require('@stdlib/utils-define-nonenumerable-property/dist'),y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=require('@stdlib/utils-next-tick/dist'),J=u(),P=l(),s=f();function k(){this.push(null)}function B(r){var e;if(this._destroyed)return s("Attempted to destroy an already destroyed stream."),this;return e=this,this._destroyed=!0,C(t),this;function t(){r&&(s("Stream was destroyed due to an error. Error: %s.",R(r)?r.message:JSON.stringify(r)),e.emit("error",r)),s("Closing the stream..."),e.emit("close")}}function i(r){var e,t;if(!(this instanceof i))return arguments.length>0?new i(r):new i;if(e=T({},J),arguments.length>0&&(t=P(e,r),t))throw t;return s("Creating a readable stream configured with the following options: %s.",JSON.stringify(e)),m.call(this,e),A(this,"_destroyed",!1),this}_(i,m);y(i.prototype,"_read",k);y(i.prototype,"destroy",B);b.exports=i
});var g=a(function(X,q){
var D=o();function F(){var r={objectMode:!0};return new D(r)}q.exports=F
});var h=a(function(Y,p){
var L=require('@stdlib/object-assign/dist'),U=o();function V(r){var e;return arguments.length>0?e=L({},r):e={},t;function t(){return new U(e)}}p.exports=V
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=o(),z=g(),G=h();j(n,"objectMode",z);j(n,"factory",G);module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
