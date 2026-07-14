"use strict";var p=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var j=p(function(H,h){
function E(a,r,e,o,n,i,q){var v,u,f,t,m,c,l;if(a<=0)return r;for(u=0,v=a-1,t=o,m=o+v*e,c=q,l=q+v*i;u<v;){for(;u<v&&n[c]!==0;)u+=1,t+=e,c+=i;for(;v>u&&n[l]!==0;)v-=1,m-=e,l-=i;if(u>=v)break;f=r[t],r[t]=r[m],r[m]=f,u+=1,t+=e,c+=i,v-=1,m-=e,l-=i}return r}h.exports=E
});var x=p(function(I,w){
var s=require('@stdlib/strided-base-stride2offset/dist'),O=j();function d(a,r,e,o,n){var i=s(a,e),q=s(a,n);return O(a,r,e,i,o,n,q)}w.exports=d
});var b=p(function(J,_){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=x(),A=j();z(R,"ndarray",A);_.exports=R
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=b(),y,g=C(B(__dirname,"./native.js"));D(g)?y=F:y=g;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
