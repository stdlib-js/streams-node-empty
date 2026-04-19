"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=i(function(Q,w){w.exports={objectMode:!1}});var l=i(function(W,c){
var E=require('@stdlib/assert-is-plain-object/dist'),M=require('@stdlib/assert-has-own-property/dist'),O=require('@stdlib/assert-is-boolean/dist').isPrimitive,d=require('@stdlib/error-tools-fmtprodmsg/dist');function S(r,e){return E(e)?M(e,"objectMode")&&(r.objectMode=e.objectMode,!O(r.objectMode))?new TypeError(d('1M72o',"objectMode",r.objectMode)):null:new TypeError(d('1M72V',e));}c.exports=S
});var m=i(function(X,v){
var x=require("debug"),T=x("empty-stream");v.exports=T
});var n=i(function(Y,y){
var f=require("readable-stream").Readable,N=require('@stdlib/assert-is-error/dist'),R=require('@stdlib/object-assign/dist'),_=require('@stdlib/utils-inherit/dist'),A=require('@stdlib/utils-define-nonenumerable-property/dist'),b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=require('@stdlib/utils-next-tick/dist'),J=u(),P=l(),s=m();function V(){this.push(null)}function k(r){var e;if(this._destroyed)return s("Attempted to destroy an already destroyed stream."),this;return e=this,this._destroyed=!0,C(t),this;function t(){r&&(s("Stream was destroyed due to an error. Error: %s.",N(r)?r.message:JSON.stringify(r)),e.emit("error",r)),s("Closing the stream..."),e.emit("close")}}function a(r){var e,t;if(!(this instanceof a))return arguments.length>0?new a(r):new a;if(e=R({},J),arguments.length>0&&(t=P(e,r),t))throw t;return s("Creating a readable stream configured with the following options: %s.",JSON.stringify(e)),f.call(this,e),A(this,"_destroyed",!1),this}_(a,f);b(a.prototype,"_read",V);b(a.prototype,"destroy",k);y.exports=a
});var g=i(function(Z,q){
var B=n();function D(){var r={objectMode:!0};return new B(r)}q.exports=D
});var p=i(function($,h){
var F=require('@stdlib/assert-is-plain-object/dist'),L=require('@stdlib/error-tools-fmtprodmsg/dist'),U=require('@stdlib/object-assign/dist'),z=n();function G(r){var e;if(arguments.length>0){if(!F(r))throw new TypeError(L('1M72V',r));e=U({},r)}else e={};return t;function t(){return new z(e)}}h.exports=G
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=n(),H=g(),I=p();j(o,"objectMode",H);j(o,"factory",I);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
