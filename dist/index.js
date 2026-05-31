"use strict";var p=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var j=p(function(H,h){
function E(v,r,a,o,n,i,q){var e,u,f,t,m,c,l;if(v<=0)return r;for(u=0,e=v-1,t=o,m=o+e*a,c=q,l=q+e*i;u<e;){for(;u<e&&n[c]!==0;)u+=1,t+=a,c+=i;for(;e>u&&n[l]!==0;)e-=1,m-=a,l-=i;if(u>=e)break;f=r[t],r[t]=r[m],r[m]=f,u+=1,t+=a,c+=i,e-=1,m-=a,l-=i}return r}h.exports=E
});var x=p(function(I,w){
var s=require('@stdlib/strided-base-stride2offset/dist'),O=j();function d(v,r,a,o,n){var i=s(v,a),q=s(v,n);return O(v,r,a,i,o,n,q)}w.exports=d
});var b=p(function(J,_){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=x(),A=j();z(R,"ndarray",A);_.exports=R
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=b(),y,g=C(B(__dirname,"./native.js"));D(g)?y=F:y=g;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
