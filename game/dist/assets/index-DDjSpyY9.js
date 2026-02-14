(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const go="170",uu=0,Uo=1,hu=2,pl=1,du=2,Ln=3,Mn=0,Kt=1,_n=2,Jn=0,Gi=1,Ta=2,Fo=3,Oo=4,fu=5,_i=100,pu=101,mu=102,gu=103,_u=104,vu=200,xu=201,Mu=202,yu=203,wa=204,Aa=205,Su=206,Eu=207,bu=208,Tu=209,wu=210,Au=211,Ru=212,Cu=213,Pu=214,Ra=0,Ca=1,Pa=2,Yi=3,La=4,Ia=5,Da=6,Na=7,Ar=0,Lu=1,Iu=2,Qn=0,Du=1,Nu=2,Uu=3,Fu=4,Ou=5,Bu=6,ku=7,Bo="attached",zu="detached",ml=300,ji=301,Ki=302,Ua=303,Fa=304,Rr=306,In=1e3,mn=1001,Oa=1002,tn=1003,Vu=1004,Fs=1005,en=1006,zr=1007,Dn=1008,Fn=1009,gl=1010,_l=1011,Es=1012,_o=1013,xi=1014,vn=1015,ws=1016,vo=1017,xo=1018,$i=1020,vl=35902,xl=1021,Ml=1022,on=1023,yl=1024,Sl=1025,Wi=1026,Zi=1027,El=1028,Mo=1029,bl=1030,yo=1031,So=1033,hr=33776,dr=33777,fr=33778,pr=33779,Ba=35840,ka=35841,za=35842,Va=35843,Ha=36196,Ga=37492,Wa=37496,Xa=37808,qa=37809,Ya=37810,ja=37811,Ka=37812,$a=37813,Za=37814,Ja=37815,Qa=37816,eo=37817,to=37818,no=37819,io=37820,so=37821,mr=36492,ro=36494,ao=36495,Tl=36283,oo=36284,co=36285,lo=36286,vr=2300,uo=2301,Vr=2302,ko=2400,zo=2401,Vo=2402,Hu=2500,Gu=3200,Wu=3201,Cr=0,Xu=1,jn="",wt="srgb",ts="srgb-linear",Pr="linear",xt="srgb",bi=7680,Ho=519,qu=512,Yu=513,ju=514,wl=515,Ku=516,$u=517,Zu=518,Ju=519,Go=35044,Wo="300 es",Nn=2e3,xr=2001;class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xo=1234567;const ys=Math.PI/180,Ji=180/Math.PI;function si(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function Eo(i,e){return(i%e+e)%e}function Qu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function eh(i,e,t){return i!==e?(t-i)/(e-i):0}function Ss(i,e,t){return(1-t)*i+t*e}function th(i,e,t,n){return Ss(i,e,1-Math.exp(-t*n))}function nh(i,e=1){return e-Math.abs(Eo(i,e*2)-e)}function ih(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function sh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ah(i,e){return i+Math.random()*(e-i)}function oh(i){return i*(.5-Math.random())}function ch(i){i!==void 0&&(Xo=i);let e=Xo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lh(i){return i*ys}function uh(i){return i*Ji}function hh(i){return(i&i-1)===0&&i!==0}function dh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ph(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*v,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*v,o*c);break;case"ZYZ":i.set(l*v,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Kn={DEG2RAD:ys,RAD2DEG:Ji,generateUUID:si,clamp:Gt,euclideanModulo:Eo,mapLinear:Qu,inverseLerp:eh,lerp:Ss,damp:th,pingpong:nh,smoothstep:ih,smootherstep:sh,randInt:rh,randFloat:ah,randFloatSpread:oh,seededRandom:ch,degToRad:lh,radToDeg:uh,isPowerOfTwo:hh,ceilPowerOfTwo:dh,floorPowerOfTwo:fh,setQuaternionFromProperEuler:ph,normalize:Vt,denormalize:ki};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,n,s,r,a,o,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],p=n[5],v=n[8],x=s[0],m=s[3],h=s[6],C=s[1],R=s[4],w=s[7],U=s[2],N=s[5],I=s[8];return r[0]=a*x+o*C+l*U,r[3]=a*m+o*R+l*N,r[6]=a*h+o*w+l*I,r[1]=c*x+u*C+d*U,r[4]=c*m+u*R+d*N,r[7]=c*h+u*w+d*I,r[2]=f*x+p*C+v*U,r[5]=f*m+p*R+v*N,r[8]=f*h+p*w+v*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*r,p=c*r-a*l,v=t*d+n*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(s*c-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hr.makeScale(e,t)),this}rotate(e){return this.premultiply(Hr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hr=new et;function Al(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mh(){const i=bs("canvas");return i.style.display="block",i}const qo={};function vs(i){i in qo||(qo[i]=!0,console.warn(i))}function gh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function _h(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vh(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const st={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===xt&&(i.r=Un(i.r),i.g=Un(i.g),i.b=Un(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===xt&&(i.r=Xi(i.r),i.g=Xi(i.g),i.b=Xi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===jn?Pr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Yo=[.64,.33,.3,.6,.15,.06],jo=[.2126,.7152,.0722],Ko=[.3127,.329],$o=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zo=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);st.define({[ts]:{primaries:Yo,whitePoint:Ko,transfer:Pr,toXYZ:$o,fromXYZ:Zo,luminanceCoefficients:jo,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:Yo,whitePoint:Ko,transfer:xt,toXYZ:$o,fromXYZ:Zo,luminanceCoefficients:jo,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}});let Ti;class xh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ti===void 0&&(Ti=bs("canvas")),Ti.width=e.width,Ti.height=e.height;const n=Ti.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Un(t[n]/255)*255):t[n]=Un(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mh=0;class Rl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Gr(s[a].image)):r.push(Gr(s[a]))}else r=Gr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yh=0;class Ut extends ns{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=mn,s=mn,r=en,a=Dn,o=on,l=Fn,c=Ut.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=si(),this.name="",this.source=new Rl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case In:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case Oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case In:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case Oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=ml;Ut.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],v=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,w=(p+1)/2,U=(h+1)/2,N=(u+f)/4,I=(d+x)/4,D=(v+m)/4;return R>w&&R>U?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=N/n,r=I/n):w>U?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=N/s,r=D/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=I/r,s=D/r),this.set(n,s,r,t),this}let C=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(C)<.001&&(C=1),this.x=(m-v)/C,this.y=(d-x)/C,this.z=(f-u)/C,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sh extends ns{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ut(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends Sh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cl extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Eh extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const f=r[a+0],p=r[a+1],v=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=x;return}if(d!==x||l!==f||c!==p||u!==v){let m=1-o;const h=l*f+c*p+u*v+d*x,C=h>=0?1:-1,R=1-h*h;if(R>Number.EPSILON){const U=Math.sqrt(R),N=Math.atan2(U,h*C);m=Math.sin(m*N)/U,o=Math.sin(o*N)/U}const w=o*C;if(l=l*m+f*w,c=c*m+p*w,u=u*m+v*w,d=d*m+x*w,m===1-o){const U=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=U,c*=U,u*=U,d*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],f=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+u*d+l*p-c*f,e[t+1]=l*v+u*f+c*d-o*p,e[t+2]=c*v+u*p+o*f-l*d,e[t+3]=u*v-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),f=l(n/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"YXZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"ZXY":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"ZYX":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"YZX":this._x=f*u*d+c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d-f*p*v;break;case"XZY":this._x=f*u*d-c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wr.copy(this).projectOnVector(e),this.sub(Wr)}reflect(e){return this.sub(Wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new O,Jo=new yn;class is{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Os.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Os.copy(n.boundingBox)),Os.applyMatrix4(e.matrixWorld),this.union(Os)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),Bs.subVectors(this.max,ds),wi.subVectors(e.a,ds),Ai.subVectors(e.b,ds),Ri.subVectors(e.c,ds),zn.subVectors(Ai,wi),Vn.subVectors(Ri,Ai),li.subVectors(wi,Ri);let t=[0,-zn.z,zn.y,0,-Vn.z,Vn.y,0,-li.z,li.y,zn.z,0,-zn.x,Vn.z,0,-Vn.x,li.z,0,-li.x,-zn.y,zn.x,0,-Vn.y,Vn.x,0,-li.y,li.x,0];return!Xr(t,wi,Ai,Ri,Bs)||(t=[1,0,0,0,1,0,0,0,1],!Xr(t,wi,Ai,Ri,Bs))?!1:(ks.crossVectors(zn,Vn),t=[ks.x,ks.y,ks.z],Xr(t,wi,Ai,Ri,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new O,new O,new O,new O,new O,new O,new O,new O],hn=new O,Os=new is,wi=new O,Ai=new O,Ri=new O,zn=new O,Vn=new O,li=new O,ds=new O,Bs=new O,ks=new O,ui=new O;function Xr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ui.fromArray(i,r);const o=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const bh=new is,fs=new O,qr=new O;class ss{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fs.subVectors(e,this.center);const t=fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fs.copy(e.center).add(qr)),this.expandByPoint(fs.copy(e.center).sub(qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new O,Yr=new O,zs=new O,Hn=new O,jr=new O,Vs=new O,Kr=new O;class Lr{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Yr.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(Yr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(zs),o=Hn.dot(this.direction),l=-Hn.dot(zs),c=Hn.lengthSq(),u=Math.abs(1-a*a);let d,f,p,v;if(u>0)if(d=a*l-o,f=a*o-l,v=r*u,d>=0)if(f>=-v)if(f<=v){const x=1/u;d*=x,f*=x,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Yr).addScaledVector(zs,f),p}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,s,r){jr.subVectors(t,e),Vs.subVectors(n,e),Kr.crossVectors(jr,Vs);let a=this.direction.dot(Kr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,e);const l=o*this.direction.dot(Vs.crossVectors(Hn,Vs));if(l<0)return null;const c=o*this.direction.dot(jr.cross(Hn));if(c<0||l+c>a)return null;const u=-o*Hn.dot(Kr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,n,s,r,a,o,l,c,u,d,f,p,v,x,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,f,p,v,x,m)}set(e,t,n,s,r,a,o,l,c,u,d,f,p,v,x,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=v,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ci.setFromMatrixColumn(e,0).length(),r=1/Ci.setFromMatrixColumn(e,1).length(),a=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*u,p=a*d,v=o*u,x=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,v=c*u,x=c*d;t[0]=f+x*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,v=c*u,x=c*d;t[0]=f-x*o,t[4]=-a*d,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*d,v=o*u,x=o*d;t[0]=l*u,t[4]=v*c-p,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,v=o*l,x=o*c;t[0]=l*u,t[4]=x-f*d,t[8]=v*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+v,t[10]=f-x*d}else if(e.order==="XZY"){const f=a*l,p=a*c,v=o*l,x=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=a*u,t[9]=p*d-v,t[2]=v*d-p,t[6]=o*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Th,e,wh)}lookAt(e,t,n){const s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Gn.crossVectors(n,Jt),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Gn.crossVectors(n,Jt)),Gn.normalize(),Hs.crossVectors(Jt,Gn),s[0]=Gn.x,s[4]=Hs.x,s[8]=Jt.x,s[1]=Gn.y,s[5]=Hs.y,s[9]=Jt.y,s[2]=Gn.z,s[6]=Hs.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],p=n[13],v=n[2],x=n[6],m=n[10],h=n[14],C=n[3],R=n[7],w=n[11],U=n[15],N=s[0],I=s[4],D=s[8],y=s[12],M=s[1],L=s[5],B=s[9],H=s[13],Z=s[2],Q=s[6],F=s[10],ee=s[14],W=s[3],oe=s[7],de=s[11],fe=s[15];return r[0]=a*N+o*M+l*Z+c*W,r[4]=a*I+o*L+l*Q+c*oe,r[8]=a*D+o*B+l*F+c*de,r[12]=a*y+o*H+l*ee+c*fe,r[1]=u*N+d*M+f*Z+p*W,r[5]=u*I+d*L+f*Q+p*oe,r[9]=u*D+d*B+f*F+p*de,r[13]=u*y+d*H+f*ee+p*fe,r[2]=v*N+x*M+m*Z+h*W,r[6]=v*I+x*L+m*Q+h*oe,r[10]=v*D+x*B+m*F+h*de,r[14]=v*y+x*H+m*ee+h*fe,r[3]=C*N+R*M+w*Z+U*W,r[7]=C*I+R*L+w*Q+U*oe,r[11]=C*D+R*B+w*F+U*de,r[15]=C*y+R*H+w*ee+U*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],v=e[3],x=e[7],m=e[11],h=e[15];return v*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*p-n*l*p)+x*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+m*(+t*c*d-t*o*p-r*a*d+n*a*p+r*o*u-n*c*u)+h*(-s*o*u-t*l*d+t*o*f+s*a*d-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],v=e[12],x=e[13],m=e[14],h=e[15],C=d*m*c-x*f*c+x*l*p-o*m*p-d*l*h+o*f*h,R=v*f*c-u*m*c-v*l*p+a*m*p+u*l*h-a*f*h,w=u*x*c-v*d*c+v*o*p-a*x*p-u*o*h+a*d*h,U=v*d*l-u*x*l-v*o*f+a*x*f+u*o*m-a*d*m,N=t*C+n*R+s*w+r*U;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/N;return e[0]=C*I,e[1]=(x*f*r-d*m*r-x*s*p+n*m*p+d*s*h-n*f*h)*I,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*h+n*l*h)*I,e[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*p-n*l*p)*I,e[4]=R*I,e[5]=(u*m*r-v*f*r+v*s*p-t*m*p-u*s*h+t*f*h)*I,e[6]=(v*l*r-a*m*r-v*s*c+t*m*c+a*s*h-t*l*h)*I,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*p+t*l*p)*I,e[8]=w*I,e[9]=(v*d*r-u*x*r-v*n*p+t*x*p+u*n*h-t*d*h)*I,e[10]=(a*x*r-v*o*r+v*n*c-t*x*c-a*n*h+t*o*h)*I,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*p-t*o*p)*I,e[12]=U*I,e[13]=(u*x*s-v*d*s+v*n*f-t*x*f-u*n*m+t*d*m)*I,e[14]=(v*o*s-a*x*s-v*n*l+t*x*l+a*n*m-t*o*m)*I,e[15]=(a*d*s-u*o*s+u*n*l-t*d*l-a*n*f+t*o*f)*I,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,f=r*c,p=r*u,v=r*d,x=a*u,m=a*d,h=o*d,C=l*c,R=l*u,w=l*d,U=n.x,N=n.y,I=n.z;return s[0]=(1-(x+h))*U,s[1]=(p+w)*U,s[2]=(v-R)*U,s[3]=0,s[4]=(p-w)*N,s[5]=(1-(f+h))*N,s[6]=(m+C)*N,s[7]=0,s[8]=(v+R)*I,s[9]=(m-C)*I,s[10]=(1-(f+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ci.set(s[0],s[1],s[2]).length();const a=Ci.set(s[4],s[5],s[6]).length(),o=Ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],dn.copy(this);const c=1/r,u=1/a,d=1/o;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,t.setFromRotationMatrix(dn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Nn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let p,v;if(o===Nn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===xr)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Nn){const l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(a-r),f=(t+e)*c,p=(n+s)*u;let v,x;if(o===Nn)v=(a+r)*d,x=-2*d;else if(o===xr)v=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ci=new O,dn=new Ye,Th=new O(0,0,0),wh=new O(1,1,1),Gn=new O,Hs=new O,Jt=new O,Qo=new Ye,ec=new yn;class $t{constructor(e=0,t=0,n=0,s=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ec.setFromEuler(this),this.setFromQuaternion(ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ah=0;const tc=new O,Pi=new yn,An=new Ye,Gs=new O,ps=new O,Rh=new O,Ch=new yn,nc=new O(1,0,0),ic=new O(0,1,0),sc=new O(0,0,1),rc={type:"added"},Ph={type:"removed"},Li={type:"childadded",child:null},$r={type:"childremoved",child:null};class Ct extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new O,t=new $t,n=new yn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new et}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(nc,e)}rotateY(e){return this.rotateOnAxis(ic,e)}rotateZ(e){return this.rotateOnAxis(sc,e)}translateOnAxis(e,t){return tc.copy(e).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nc,e)}translateY(e){return this.translateOnAxis(ic,e)}translateZ(e){return this.translateOnAxis(sc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gs.copy(e):Gs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(ps,Gs,this.up):An.lookAt(Gs,ps,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(An),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rc),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ph),$r.child=e,this.dispatchEvent($r),$r.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rc),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,Rh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Ch,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ct.DEFAULT_UP=new O(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new O,Rn=new O,Zr=new O,Cn=new O,Ii=new O,Di=new O,ac=new O,Jr=new O,Qr=new O,ea=new O,ta=new pt,na=new pt,ia=new pt;class pn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fn.subVectors(e,t),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){fn.subVectors(s,t),Rn.subVectors(n,t),Zr.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(Rn),l=fn.dot(Zr),c=Rn.dot(Rn),u=Rn.dot(Zr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-o*u)*f,v=(a*u-o*l)*f;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,n),ia.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ta,r.x),a.addScaledVector(na,r.y),a.addScaledVector(ia,r.z),a}static isFrontFacing(e,t,n,s){return fn.subVectors(n,t),Rn.subVectors(e,t),fn.cross(Rn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),fn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return pn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ii.subVectors(s,n),Di.subVectors(r,n),Jr.subVectors(e,n);const l=Ii.dot(Jr),c=Di.dot(Jr);if(l<=0&&c<=0)return t.copy(n);Qr.subVectors(e,s);const u=Ii.dot(Qr),d=Di.dot(Qr);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ii,a);ea.subVectors(e,r);const p=Ii.dot(ea),v=Di.dot(ea);if(v>=0&&p<=v)return t.copy(r);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Di,o);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return ac.subVectors(r,s),o=(d-u)/(d-u+(p-v)),t.copy(s).addScaledVector(ac,o);const h=1/(m+x+f);return a=x*h,o=f*h,t.copy(n).addScaledVector(Ii,a).addScaledVector(Di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function sa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=Eo(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=sa(a,r,e+1/3),this.g=sa(a,r,e),this.b=sa(a,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const n=Pl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return st.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Gt(Ot.r*255,0,255))*65536+Math.round(Gt(Ot.g*255,0,255))*256+Math.round(Gt(Ot.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=wt){st.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,s=Ot.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(Ws);const n=Ss(Wn.h,Ws.h,t),s=Ss(Wn.s,Ws.s,t),r=Ss(Wn.l,Ws.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Je;Je.NAMES=Pl;let Lh=0;class ri extends ns{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=si(),this.name="",this.blending=Gi,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Aa,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Aa&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ho&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $n extends ri{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=Ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new O,Xs=new at;class nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Go,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Go&&(e.usage=this.usage),e}}class Ll extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Il extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Et extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ih=0;const an=new Ye,ra=new Ct,Ni=new O,Qt=new is,ms=new is,Nt=new O;class sn extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Al(e)?Il:Ll)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Et(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(Qt.min,ms.min),Qt.expandByPoint(Nt),Nt.addVectors(Qt.max,ms.max),Qt.expandByPoint(Nt)):(Qt.expandByPoint(ms.min),Qt.expandByPoint(ms.max))}Qt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Nt.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(e,c),Nt.add(Ni)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new O,l[D]=new O;const c=new O,u=new O,d=new O,f=new at,p=new at,v=new at,x=new O,m=new O;function h(D,y,M){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,y),v.fromBufferAttribute(r,M),u.sub(c),d.sub(c),p.sub(f),v.sub(f);const L=1/(p.x*v.y-v.x*p.y);isFinite(L)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(L),o[D].add(x),o[y].add(x),o[M].add(x),l[D].add(m),l[y].add(m),l[M].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let D=0,y=C.length;D<y;++D){const M=C[D],L=M.start,B=M.count;for(let H=L,Z=L+B;H<Z;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const R=new O,w=new O,U=new O,N=new O;function I(D){U.fromBufferAttribute(s,D),N.copy(U);const y=o[D];R.copy(y),R.sub(U.multiplyScalar(U.dot(y))).normalize(),w.crossVectors(N,y);const L=w.dot(l[D])<0?-1:1;a.setXYZW(D,R.x,R.y,R.z,L)}for(let D=0,y=C.length;D<y;++D){const M=C[D],L=M.start,B=M.count;for(let H=L,Z=L+B;H<Z;H+=3)I(e.getX(H+0)),I(e.getX(H+1)),I(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let h=0;h<u;h++)f[v++]=c[p++]}return new nn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oc=new Ye,hi=new Lr,qs=new ss,cc=new O,Ys=new O,js=new O,Ks=new O,aa=new O,$s=new O,lc=new O,Zs=new O;class At extends Ct{constructor(e=new sn,t=new $n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){$s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(aa.fromBufferAttribute(d,e),a?$s.addScaledVector(aa,u):$s.addScaledVector(aa.sub(t),u))}t.add($s)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(r),hi.copy(e.ray).recast(e.near),!(qs.containsPoint(hi.origin)===!1&&(hi.intersectSphere(qs,cc)===null||hi.origin.distanceToSquared(cc)>(e.far-e.near)**2))&&(oc.copy(r).invert(),hi.copy(e.ray).applyMatrix4(oc),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],h=a[m.materialIndex],C=Math.max(m.start,p.start),R=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let w=C,U=R;w<U;w+=3){const N=o.getX(w),I=o.getX(w+1),D=o.getX(w+2);s=Js(this,h,e,n,c,u,d,N,I,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,h=x;m<h;m+=3){const C=o.getX(m),R=o.getX(m+1),w=o.getX(m+2);s=Js(this,a,e,n,c,u,d,C,R,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const m=f[v],h=a[m.materialIndex],C=Math.max(m.start,p.start),R=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=C,U=R;w<U;w+=3){const N=w,I=w+1,D=w+2;s=Js(this,h,e,n,c,u,d,N,I,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,h=x;m<h;m+=3){const C=m,R=m+1,w=m+2;s=Js(this,a,e,n,c,u,d,C,R,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Dh(i,e,t,n,s,r,a,o){let l;if(e.side===Kt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Mn,o),l===null)return null;Zs.copy(o),Zs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Zs);return c<t.near||c>t.far?null:{distance:c,point:Zs.clone(),object:i}}function Js(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ys),i.getVertexPosition(l,js),i.getVertexPosition(c,Ks);const u=Dh(i,e,t,n,Ys,js,Ks,lc);if(u){const d=new O;pn.getBarycoord(lc,Ys,js,Ks,d),s&&(u.uv=pn.getInterpolatedAttribute(s,o,l,c,d,new at)),r&&(u.uv1=pn.getInterpolatedAttribute(r,o,l,c,d,new at)),a&&(u.normal=pn.getInterpolatedAttribute(a,o,l,c,d,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new O,materialIndex:0};pn.getNormal(Ys,js,Ks,f.normal),u.face=f,u.barycoord=d}return u}class ai extends sn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(d,2));function v(x,m,h,C,R,w,U,N,I,D,y){const M=w/I,L=U/D,B=w/2,H=U/2,Z=N/2,Q=I+1,F=D+1;let ee=0,W=0;const oe=new O;for(let de=0;de<F;de++){const fe=de*L-H;for(let we=0;we<Q;we++){const Ee=we*M-B;oe[x]=Ee*C,oe[m]=fe*R,oe[h]=Z,c.push(oe.x,oe.y,oe.z),oe[x]=0,oe[m]=0,oe[h]=N>0?1:-1,u.push(oe.x,oe.y,oe.z),d.push(we/I),d.push(1-de/D),ee+=1}}for(let de=0;de<D;de++)for(let fe=0;fe<I;fe++){const we=f+fe+Q*de,Ee=f+fe+Q*(de+1),X=f+(fe+1)+Q*(de+1),$=f+(fe+1)+Q*de;l.push(we,Ee,$),l.push(Ee,X,$),W+=6}o.addGroup(p,W,y),p+=W,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ht(i){const e={};for(let t=0;t<i.length;t++){const n=Qi(i[t]);for(const s in n)e[s]=n[s]}return e}function Nh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Uh={clone:Qi,merge:Ht};var Fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends ri{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fh,this.fragmentShader=Oh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=Nh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nl extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new O,uc=new at,hc=new at;class Bt extends Nl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,uc,hc),t.subVectors(hc,uc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ys*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,Fi=1;class Bh extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bt(Ui,Fi,e,t);s.layers=this.layers,this.add(s);const r=new Bt(Ui,Fi,e,t);r.layers=this.layers,this.add(r);const a=new Bt(Ui,Fi,e,t);a.layers=this.layers,this.add(a);const o=new Bt(Ui,Fi,e,t);o.layers=this.layers,this.add(o);const l=new Bt(Ui,Fi,e,t);l.layers=this.layers,this.add(l);const c=new Bt(Ui,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Ul extends Ut{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ji,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kh extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ul(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ai(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Jn});r.uniforms.tEquirect.value=t;const a=new At(s,r),o=t.minFilter;return t.minFilter===Dn&&(t.minFilter=en),new Bh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const oa=new O,zh=new O,Vh=new et;class mi{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=oa.subVectors(n,t).cross(zh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(oa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vh.getNormalMatrix(e),s=this.coplanarPoint(oa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new ss,Qs=new O;class To{constructor(e=new mi,t=new mi,n=new mi,s=new mi,r=new mi,a=new mi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],p=s[8],v=s[9],x=s[10],m=s[11],h=s[12],C=s[13],R=s[14],w=s[15];if(n[0].setComponents(l-r,f-c,m-p,w-h).normalize(),n[1].setComponents(l+r,f+c,m+p,w+h).normalize(),n[2].setComponents(l+a,f+u,m+v,w+C).normalize(),n[3].setComponents(l-a,f-u,m-v,w-C).normalize(),n[4].setComponents(l-o,f-d,m-x,w-R).normalize(),t===Nn)n[5].setComponents(l+o,f+d,m+x,w+R).normalize();else if(t===xr)n[5].setComponents(o,d,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Qs.x=s.normal.x>0?e.max.x:e.min.x,Qs.y=s.normal.y>0?e.max.y:e.min.y,Qs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fl(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hh(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<d.length;p++){const v=d[f],x=d[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,v=d.length;p<v;p++){const x=d[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class As extends sn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,f=t/l,p=[],v=[],x=[],m=[];for(let h=0;h<u;h++){const C=h*f-a;for(let R=0;R<c;R++){const w=R*d-r;v.push(w,-C,0),x.push(0,0,1),m.push(R/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let C=0;C<o;C++){const R=C+c*h,w=C+c*(h+1),U=C+1+c*(h+1),N=C+1+c*h;p.push(R,w,N),p.push(w,U,N)}this.setIndex(p),this.setAttribute("position",new Et(v,3)),this.setAttribute("normal",new Et(x,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$h=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,td=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,id=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Md=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ed=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ad=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Id=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ud=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Od=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,of=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,df=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_f=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ef=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Af=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,If=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Df=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ff=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Of=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$f=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,up=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:Gh,alphahash_pars_fragment:Wh,alphamap_fragment:Xh,alphamap_pars_fragment:qh,alphatest_fragment:Yh,alphatest_pars_fragment:jh,aomap_fragment:Kh,aomap_pars_fragment:$h,batching_pars_vertex:Zh,batching_vertex:Jh,begin_vertex:Qh,beginnormal_vertex:ed,bsdfs:td,iridescence_fragment:nd,bumpmap_pars_fragment:id,clipping_planes_fragment:sd,clipping_planes_pars_fragment:rd,clipping_planes_pars_vertex:ad,clipping_planes_vertex:od,color_fragment:cd,color_pars_fragment:ld,color_pars_vertex:ud,color_vertex:hd,common:dd,cube_uv_reflection_fragment:fd,defaultnormal_vertex:pd,displacementmap_pars_vertex:md,displacementmap_vertex:gd,emissivemap_fragment:_d,emissivemap_pars_fragment:vd,colorspace_fragment:xd,colorspace_pars_fragment:Md,envmap_fragment:yd,envmap_common_pars_fragment:Sd,envmap_pars_fragment:Ed,envmap_pars_vertex:bd,envmap_physical_pars_fragment:Ud,envmap_vertex:Td,fog_vertex:wd,fog_pars_vertex:Ad,fog_fragment:Rd,fog_pars_fragment:Cd,gradientmap_pars_fragment:Pd,lightmap_pars_fragment:Ld,lights_lambert_fragment:Id,lights_lambert_pars_fragment:Dd,lights_pars_begin:Nd,lights_toon_fragment:Fd,lights_toon_pars_fragment:Od,lights_phong_fragment:Bd,lights_phong_pars_fragment:kd,lights_physical_fragment:zd,lights_physical_pars_fragment:Vd,lights_fragment_begin:Hd,lights_fragment_maps:Gd,lights_fragment_end:Wd,logdepthbuf_fragment:Xd,logdepthbuf_pars_fragment:qd,logdepthbuf_pars_vertex:Yd,logdepthbuf_vertex:jd,map_fragment:Kd,map_pars_fragment:$d,map_particle_fragment:Zd,map_particle_pars_fragment:Jd,metalnessmap_fragment:Qd,metalnessmap_pars_fragment:ef,morphinstance_vertex:tf,morphcolor_vertex:nf,morphnormal_vertex:sf,morphtarget_pars_vertex:rf,morphtarget_vertex:af,normal_fragment_begin:of,normal_fragment_maps:cf,normal_pars_fragment:lf,normal_pars_vertex:uf,normal_vertex:hf,normalmap_pars_fragment:df,clearcoat_normal_fragment_begin:ff,clearcoat_normal_fragment_maps:pf,clearcoat_pars_fragment:mf,iridescence_pars_fragment:gf,opaque_fragment:_f,packing:vf,premultiplied_alpha_fragment:xf,project_vertex:Mf,dithering_fragment:yf,dithering_pars_fragment:Sf,roughnessmap_fragment:Ef,roughnessmap_pars_fragment:bf,shadowmap_pars_fragment:Tf,shadowmap_pars_vertex:wf,shadowmap_vertex:Af,shadowmask_pars_fragment:Rf,skinbase_vertex:Cf,skinning_pars_vertex:Pf,skinning_vertex:Lf,skinnormal_vertex:If,specularmap_fragment:Df,specularmap_pars_fragment:Nf,tonemapping_fragment:Uf,tonemapping_pars_fragment:Ff,transmission_fragment:Of,transmission_pars_fragment:Bf,uv_pars_fragment:kf,uv_pars_vertex:zf,uv_vertex:Vf,worldpos_vertex:Hf,background_vert:Gf,background_frag:Wf,backgroundCube_vert:Xf,backgroundCube_frag:qf,cube_vert:Yf,cube_frag:jf,depth_vert:Kf,depth_frag:$f,distanceRGBA_vert:Zf,distanceRGBA_frag:Jf,equirect_vert:Qf,equirect_frag:ep,linedashed_vert:tp,linedashed_frag:np,meshbasic_vert:ip,meshbasic_frag:sp,meshlambert_vert:rp,meshlambert_frag:ap,meshmatcap_vert:op,meshmatcap_frag:cp,meshnormal_vert:lp,meshnormal_frag:up,meshphong_vert:hp,meshphong_frag:dp,meshphysical_vert:fp,meshphysical_frag:pp,meshtoon_vert:mp,meshtoon_frag:gp,points_vert:_p,points_frag:vp,shadow_vert:xp,shadow_frag:Mp,sprite_vert:yp,sprite_frag:Sp},me={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},gn={basic:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Ht([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Ht([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Je(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Ht([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Ht([me.points,me.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Ht([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Ht([me.common,me.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Ht([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Ht([me.sprite,me.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Ht([me.common,me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Ht([me.lights,me.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};gn.physical={uniforms:Ht([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const er={r:0,b:0,g:0},fi=new $t,Ep=new Ye;function bp(i,e,t,n,s,r,a){const o=new Je(0);let l=r===!0?0:1,c,u,d=null,f=0,p=null;function v(C){let R=C.isScene===!0?C.background:null;return R&&R.isTexture&&(R=(C.backgroundBlurriness>0?t:e).get(R)),R}function x(C){let R=!1;const w=v(C);w===null?h(o,l):w&&w.isColor&&(h(w,1),R=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(C,R){const w=v(R);w&&(w.isCubeTexture||w.mapping===Rr)?(u===void 0&&(u=new At(new ai(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Qi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,N,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),fi.copy(R.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ep.makeRotationFromEuler(fi)),u.material.toneMapped=st.getTransfer(w.colorSpace)!==xt,(d!==w||f!==w.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=w,f=w.version,p=i.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new At(new As(2,2),new ni({name:"BackgroundMaterial",uniforms:Qi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=st.getTransfer(w.colorSpace)!==xt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,p=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function h(C,R){C.getRGB(er,Dl(i)),n.buffers.color.setClear(er.r,er.g,er.b,R,a)}return{getClearColor:function(){return o},setClearColor:function(C,R=1){o.set(C),l=R,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,h(o,l)},render:x,addToRenderList:m}}function Tp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(M,L,B,H,Z){let Q=!1;const F=d(H,B,L);r!==F&&(r=F,c(r.object)),Q=p(M,H,B,Z),Q&&v(M,H,B,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,w(M,L,B,H),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,L,B){const H=B.wireframe===!0;let Z=n[M.id];Z===void 0&&(Z={},n[M.id]=Z);let Q=Z[L.id];Q===void 0&&(Q={},Z[L.id]=Q);let F=Q[H];return F===void 0&&(F=f(l()),Q[H]=F),F}function f(M){const L=[],B=[],H=[];for(let Z=0;Z<t;Z++)L[Z]=0,B[Z]=0,H[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,L,B,H){const Z=r.attributes,Q=L.attributes;let F=0;const ee=B.getAttributes();for(const W in ee)if(ee[W].location>=0){const de=Z[W];let fe=Q[W];if(fe===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),de===void 0||de.attribute!==fe||fe&&de.data!==fe.data)return!0;F++}return r.attributesNum!==F||r.index!==H}function v(M,L,B,H){const Z={},Q=L.attributes;let F=0;const ee=B.getAttributes();for(const W in ee)if(ee[W].location>=0){let de=Q[W];de===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(de=M.instanceColor));const fe={};fe.attribute=de,de&&de.data&&(fe.data=de.data),Z[W]=fe,F++}r.attributes=Z,r.attributesNum=F,r.index=H}function x(){const M=r.newAttributes;for(let L=0,B=M.length;L<B;L++)M[L]=0}function m(M){h(M,0)}function h(M,L){const B=r.newAttributes,H=r.enabledAttributes,Z=r.attributeDivisors;B[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),Z[M]!==L&&(i.vertexAttribDivisor(M,L),Z[M]=L)}function C(){const M=r.newAttributes,L=r.enabledAttributes;for(let B=0,H=L.length;B<H;B++)L[B]!==M[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function R(M,L,B,H,Z,Q,F){F===!0?i.vertexAttribIPointer(M,L,B,Z,Q):i.vertexAttribPointer(M,L,B,H,Z,Q)}function w(M,L,B,H){x();const Z=H.attributes,Q=B.getAttributes(),F=L.defaultAttributeValues;for(const ee in Q){const W=Q[ee];if(W.location>=0){let oe=Z[ee];if(oe===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){const de=oe.normalized,fe=oe.itemSize,we=e.get(oe);if(we===void 0)continue;const Ee=we.buffer,X=we.type,$=we.bytesPerElement,te=X===i.INT||X===i.UNSIGNED_INT||oe.gpuType===_o;if(oe.isInterleavedBufferAttribute){const ne=oe.data,ge=ne.stride,Oe=oe.offset;if(ne.isInstancedInterleavedBuffer){for(let je=0;je<W.locationSize;je++)h(W.location+je,ne.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let je=0;je<W.locationSize;je++)m(W.location+je);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let je=0;je<W.locationSize;je++)R(W.location+je,fe/W.locationSize,X,de,ge*$,(Oe+fe/W.locationSize*je)*$,te)}else{if(oe.isInstancedBufferAttribute){for(let ne=0;ne<W.locationSize;ne++)h(W.location+ne,oe.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ne=0;ne<W.locationSize;ne++)m(W.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let ne=0;ne<W.locationSize;ne++)R(W.location+ne,fe/W.locationSize,X,de,fe*$,fe/W.locationSize*ne*$,te)}}else if(F!==void 0){const de=F[ee];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(W.location,de);break;case 3:i.vertexAttrib3fv(W.location,de);break;case 4:i.vertexAttrib4fv(W.location,de);break;default:i.vertexAttrib1fv(W.location,de)}}}}C()}function U(){D();for(const M in n){const L=n[M];for(const B in L){const H=L[B];for(const Z in H)u(H[Z].object),delete H[Z];delete L[B]}delete n[M]}}function N(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const B in L){const H=L[B];for(const Z in H)u(H[Z].object),delete H[Z];delete L[B]}delete n[M.id]}function I(M){for(const L in n){const B=n[L];if(B[M.id]===void 0)continue;const H=B[M.id];for(const Z in H)u(H[Z].object),delete H[Z];delete B[M.id]}}function D(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:y,dispose:U,releaseStatesOfGeometry:N,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:C}}function wp(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];t.update(p,n,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let v=0;for(let x=0;x<d;x++)v+=u[x]*f[x];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ap(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==on&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const D=I===ws&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Fn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==vn&&!D)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=v>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:C,maxVaryings:R,maxFragmentUniforms:w,vertexTextures:U,maxSamples:N}}function Rp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new mi,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=i.get(d);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const C=r?0:n,R=C*4;let w=h.clippingState||null;l.value=w,w=u(v,f,R,p);for(let U=0;U!==R;++U)w[U]=t[U];h.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,p,v){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const h=p+x*4,C=f.matrixWorldInverse;o.getNormalMatrix(C),(m===null||m.length<h)&&(m=new Float32Array(h));for(let R=0,w=p;R!==x;++R,w+=4)a.copy(d[R]).applyMatrix4(C,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Cp(i){let e=new WeakMap;function t(a,o){return o===Ua?a.mapping=ji:o===Fa&&(a.mapping=Ki),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ua||o===Fa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new kh(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class wo extends Nl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vi=4,dc=[.125,.215,.35,.446,.526,.582],vi=20,ca=new wo,fc=new Je;let la=null,ua=0,ha=0,da=!1;const gi=(1+Math.sqrt(5))/2,Oi=1/gi,pc=[new O(-gi,Oi,0),new O(gi,Oi,0),new O(-Oi,0,gi),new O(Oi,0,gi),new O(0,gi,-Oi),new O(0,gi,Oi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){la=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(la,ua,ha),this._renderer.xr.enabled=da,e.scissorTest=!1,tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),la=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:ws,format:on,colorSpace:ts,depthBuffer:!1},s=gc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pp(r)),this._blurMaterial=Lp(r,e,t)}return s}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,ca)}_sceneToCubeUV(e,t,n,s){const o=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(fc),u.toneMapping=Qn,u.autoClear=!1;const p=new $n({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),v=new At(new ai,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(fc),x=!0);for(let h=0;h<6;h++){const C=h%3;C===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):C===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const R=this._cubeSize;tr(s,C*R,h>2?R:0,R,R),u.setRenderTarget(s),x&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ji||e.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_c());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new At(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;tr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ca)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=pc[(s-r-1)%pc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new At(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*vi-1),x=r/v,m=isFinite(r)?1+Math.floor(u*x):vi;m>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const h=[];let C=0;for(let I=0;I<vi;++I){const D=I/x,y=Math.exp(-D*D/2);h.push(y),I===0?C+=y:I<m&&(C+=2*y)}for(let I=0;I<h.length;I++)h[I]=h[I]/C;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:R}=this;f.dTheta.value=v,f.mipInt.value=R-n;const w=this._sizeLods[s],U=3*w*(s>R-Vi?s-R+Vi:0),N=4*(this._cubeSize-w);tr(t,U,N,3*w,2*w),l.setRenderTarget(t),l.render(d,ca)}}function Pp(i){const e=[],t=[],n=[];let s=i;const r=i-Vi+1+dc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Vi?l=dc[a-i+Vi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,x=3,m=2,h=1,C=new Float32Array(x*v*p),R=new Float32Array(m*v*p),w=new Float32Array(h*v*p);for(let N=0;N<p;N++){const I=N%3*2/3-1,D=N>2?0:-1,y=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];C.set(y,x*v*N),R.set(f,m*v*N);const M=[N,N,N,N,N,N];w.set(M,h*v*N)}const U=new sn;U.setAttribute("position",new nn(C,x)),U.setAttribute("uv",new nn(R,m)),U.setAttribute("faceIndex",new nn(w,h)),e.push(U),s>Vi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gc(i,e,t){const n=new Mi(i,e,t);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Lp(i,e,t){const n=new Float32Array(vi),s=new O(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function _c(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function vc(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Ao(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ip(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ua||l===Fa,u=l===ji||l===Ki;if(c||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new mc(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new mc(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Dp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&vs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Np(i,e,t,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let m=0,h=x.length;m<h;m++)e.remove(x[m])}f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const x=p[v];for(let m=0,h=x.length;m<h;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,v=d.attributes.position;let x=0;if(p!==null){const C=p.array;x=p.version;for(let R=0,w=C.length;R<w;R+=3){const U=C[R+0],N=C[R+1],I=C[R+2];f.push(U,N,N,I,I,U)}}else if(v!==void 0){const C=v.array;x=v.version;for(let R=0,w=C.length/3-1;R<w;R+=3){const U=R+0,N=R+1,I=R+2;f.push(U,N,N,I,I,U)}}else return;const m=new(Al(f)?Il:Ll)(f,1);m.version=x;const h=r.get(d);h&&e.remove(h),r.set(d,m)}function u(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Up(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,f*a,v),t.update(p,n,v))}function u(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];t.update(m,n,1)}function d(f,p,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/a,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,v);let h=0;for(let C=0;C<v;C++)h+=p[C]*x[C];t.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Fp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Op(i,e,t){const n=new WeakMap,s=new pt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let M=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],C=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let w=0;v===!0&&(w=1),x===!0&&(w=2),m===!0&&(w=3);let U=o.attributes.position.count*w,N=1;U>e.maxTextureSize&&(N=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const I=new Float32Array(U*N*4*d),D=new Cl(I,U,N,d);D.type=vn,D.needsUpdate=!0;const y=w*4;for(let L=0;L<d;L++){const B=h[L],H=C[L],Z=R[L],Q=U*N*4*L;for(let F=0;F<B.count;F++){const ee=F*y;v===!0&&(s.fromBufferAttribute(B,F),I[Q+ee+0]=s.x,I[Q+ee+1]=s.y,I[Q+ee+2]=s.z,I[Q+ee+3]=0),x===!0&&(s.fromBufferAttribute(H,F),I[Q+ee+4]=s.x,I[Q+ee+5]=s.y,I[Q+ee+6]=s.z,I[Q+ee+7]=0),m===!0&&(s.fromBufferAttribute(Z,F),I[Q+ee+8]=s.x,I[Q+ee+9]=s.y,I[Q+ee+10]=s.z,I[Q+ee+11]=Z.itemSize===4?s.w:1)}}f={count:d,texture:D,size:new at(U,N)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Bp(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Ol extends Ut{constructor(e,t,n,s,r,a,o,l,c,u=Wi){if(u!==Wi&&u!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Wi&&(n=xi),n===void 0&&u===Zi&&(n=$i),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bl=new Ut,xc=new Ol(1,1),kl=new Cl,zl=new Eh,Vl=new Ul,Mc=[],yc=[],Sc=new Float32Array(16),Ec=new Float32Array(9),bc=new Float32Array(4);function rs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Mc[s];if(r===void 0&&(r=new Float32Array(s),Mc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ir(i,e){let t=yc[e];t===void 0&&(t=new Int32Array(e),yc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function Vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function Gp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;bc.set(n),i.uniformMatrix2fv(this.addr,!1,bc),It(t,n)}}function Wp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;Ec.set(n),i.uniformMatrix3fv(this.addr,!1,Ec),It(t,n)}}function Xp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;Sc.set(n),i.uniformMatrix4fv(this.addr,!1,Sc),It(t,n)}}function qp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function $p(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function Jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function Qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function em(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xc.compareFunction=wl,r=xc):r=Bl,t.setTexture2D(e||r,s)}function tm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zl,s)}function nm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Vl,s)}function im(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||kl,s)}function sm(i){switch(i){case 5126:return kp;case 35664:return zp;case 35665:return Vp;case 35666:return Hp;case 35674:return Gp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return qp;case 35667:case 35671:return Yp;case 35668:case 35672:return jp;case 35669:case 35673:return Kp;case 5125:return $p;case 36294:return Zp;case 36295:return Jp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}function rm(i,e){i.uniform1fv(this.addr,e)}function am(i,e){const t=rs(e,this.size,2);i.uniform2fv(this.addr,t)}function om(i,e){const t=rs(e,this.size,3);i.uniform3fv(this.addr,t)}function cm(i,e){const t=rs(e,this.size,4);i.uniform4fv(this.addr,t)}function lm(i,e){const t=rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function um(i,e){const t=rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hm(i,e){const t=rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dm(i,e){i.uniform1iv(this.addr,e)}function fm(i,e){i.uniform2iv(this.addr,e)}function pm(i,e){i.uniform3iv(this.addr,e)}function mm(i,e){i.uniform4iv(this.addr,e)}function gm(i,e){i.uniform1uiv(this.addr,e)}function _m(i,e){i.uniform2uiv(this.addr,e)}function vm(i,e){i.uniform3uiv(this.addr,e)}function xm(i,e){i.uniform4uiv(this.addr,e)}function Mm(i,e,t){const n=this.cache,s=e.length,r=Ir(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Bl,r[a])}function ym(i,e,t){const n=this.cache,s=e.length,r=Ir(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||zl,r[a])}function Sm(i,e,t){const n=this.cache,s=e.length,r=Ir(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Vl,r[a])}function Em(i,e,t){const n=this.cache,s=e.length,r=Ir(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||kl,r[a])}function bm(i){switch(i){case 5126:return rm;case 35664:return am;case 35665:return om;case 35666:return cm;case 35674:return lm;case 35675:return um;case 35676:return hm;case 5124:case 35670:return dm;case 35667:case 35671:return fm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return _m;case 36295:return vm;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return Em}}class Tm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sm(t.type)}}class wm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bm(t.type)}}class Am{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const fa=/(\w+)(\])?(\[|\.)?/g;function Tc(i,e){i.seq.push(e),i.map[e.id]=e}function Rm(i,e,t){const n=i.name,s=n.length;for(fa.lastIndex=0;;){const r=fa.exec(n),a=fa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Tc(t,c===void 0?new Tm(o,i,e):new wm(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Am(o),Tc(t,d)),t=d}}}class gr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Rm(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function wc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Cm=37297;let Pm=0;function Lm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ac=new et;function Im(i){st._getMatrix(Ac,st.workingColorSpace,i);const e=`mat3( ${Ac.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case Pr:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Rc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Lm(i.getShaderSource(e),a)}else return s}function Dm(i,e){const t=Im(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nm(i,e){let t;switch(e){case Du:t="Linear";break;case Nu:t="Reinhard";break;case Uu:t="Cineon";break;case Fu:t="ACESFilmic";break;case Bu:t="AgX";break;case ku:t="Neutral";break;case Ou:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nr=new O;function Um(){st.getLuminanceCoefficients(nr);const i=nr.x.toFixed(4),e=nr.y.toFixed(4),t=nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function Om(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function xs(i){return i!==""}function Cc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const km=/^[ \t]*#include +<([\w\d./]+)>/gm;function ho(i){return i.replace(km,Vm)}const zm=new Map;function Vm(i,e){let t=tt[e];if(t===void 0){const n=zm.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ho(t)}const Hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lc(i){return i.replace(Hm,Gm)}function Gm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ic(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===du?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function Xm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ji:case Ki:e="ENVMAP_TYPE_CUBE";break;case Rr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ki:e="ENVMAP_MODE_REFRACTION";break}return e}function Ym(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ar:e="ENVMAP_BLENDING_MULTIPLY";break;case Lu:e="ENVMAP_BLENDING_MIX";break;case Iu:e="ENVMAP_BLENDING_ADD";break}return e}function jm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Km(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Wm(t),c=Xm(t),u=qm(t),d=Ym(t),f=jm(t),p=Fm(t),v=Om(r),x=s.createProgram();let m,h,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(xs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(xs).join(`
`),h.length>0&&(h+=`
`)):(m=[Ic(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),h=[Ic(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Qn?Nm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Dm("linearToOutputTexel",t.outputColorSpace),Um(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xs).join(`
`)),a=ho(a),a=Cc(a,t),a=Pc(a,t),o=ho(o),o=Cc(o,t),o=Pc(o,t),a=Lc(a),o=Lc(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const R=C+m+a,w=C+h+o,U=wc(s,s.VERTEX_SHADER,R),N=wc(s,s.FRAGMENT_SHADER,w);s.attachShader(x,U),s.attachShader(x,N),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(L){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(x).trim(),H=s.getShaderInfoLog(U).trim(),Z=s.getShaderInfoLog(N).trim();let Q=!0,F=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,U,N);else{const ee=Rc(s,U,"vertex"),W=Rc(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+ee+`
`+W)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||Z==="")&&(F=!1);F&&(L.diagnostics={runnable:Q,programLog:B,vertexShader:{log:H,prefix:m},fragmentShader:{log:Z,prefix:h}})}s.deleteShader(U),s.deleteShader(N),D=new gr(s,x),y=Bm(s,x)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Cm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=N,this}let $m=0;class Zm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Jm(e),t.set(e,n)),n}}class Jm{constructor(e){this.id=$m++,this.code=e,this.usedTimes=0}}function Qm(i,e,t,n,s,r,a){const o=new bo,l=new Zm,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,L,B,H){const Z=B.fog,Q=H.geometry,F=y.isMeshStandardMaterial?B.environment:null,ee=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),W=ee&&ee.mapping===Rr?ee.image.height:null,oe=v[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const de=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,fe=de!==void 0?de.length:0;let we=0;Q.morphAttributes.position!==void 0&&(we=1),Q.morphAttributes.normal!==void 0&&(we=2),Q.morphAttributes.color!==void 0&&(we=3);let Ee,X,$,te;if(oe){const Qe=gn[oe];Ee=Qe.vertexShader,X=Qe.fragmentShader}else Ee=y.vertexShader,X=y.fragmentShader,l.update(y),$=l.getVertexShaderID(y),te=l.getFragmentShaderID(y);const ne=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Oe=H.isInstancedMesh===!0,je=H.isBatchedMesh===!0,yt=!!y.map,ot=!!y.matcap,bt=!!ee,G=!!y.aoMap,Wt=!!y.lightMap,nt=!!y.bumpMap,it=!!y.normalMap,Ve=!!y.displacementMap,Mt=!!y.emissiveMap,ke=!!y.metalnessMap,P=!!y.roughnessMap,S=y.anisotropy>0,q=y.clearcoat>0,re=y.dispersion>0,ce=y.iridescence>0,se=y.sheen>0,De=y.transmission>0,xe=S&&!!y.anisotropyMap,Te=q&&!!y.clearcoatMap,ct=q&&!!y.clearcoatNormalMap,he=q&&!!y.clearcoatRoughnessMap,Ae=ce&&!!y.iridescenceMap,He=ce&&!!y.iridescenceThicknessMap,We=se&&!!y.sheenColorMap,Re=se&&!!y.sheenRoughnessMap,rt=!!y.specularMap,Ze=!!y.specularColorMap,mt=!!y.specularIntensityMap,z=De&&!!y.transmissionMap,_e=De&&!!y.thicknessMap,J=!!y.gradientMap,ae=!!y.alphaMap,Se=y.alphaTest>0,Me=!!y.alphaHash,Ke=!!y.extensions;let St=Qn;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(St=i.toneMapping);const Dt={shaderID:oe,shaderType:y.type,shaderName:y.name,vertexShader:Ee,fragmentShader:X,defines:y.defines,customVertexShaderID:$,customFragmentShaderID:te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:je,batchingColor:je&&H._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&H.instanceColor!==null,instancingMorph:Oe&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ts,alphaToCoverage:!!y.alphaToCoverage,map:yt,matcap:ot,envMap:bt,envMapMode:bt&&ee.mapping,envMapCubeUVHeight:W,aoMap:G,lightMap:Wt,bumpMap:nt,normalMap:it,displacementMap:f&&Ve,emissiveMap:Mt,normalMapObjectSpace:it&&y.normalMapType===Xu,normalMapTangentSpace:it&&y.normalMapType===Cr,metalnessMap:ke,roughnessMap:P,anisotropy:S,anisotropyMap:xe,clearcoat:q,clearcoatMap:Te,clearcoatNormalMap:ct,clearcoatRoughnessMap:he,dispersion:re,iridescence:ce,iridescenceMap:Ae,iridescenceThicknessMap:He,sheen:se,sheenColorMap:We,sheenRoughnessMap:Re,specularMap:rt,specularColorMap:Ze,specularIntensityMap:mt,transmission:De,transmissionMap:z,thicknessMap:_e,gradientMap:J,opaque:y.transparent===!1&&y.blending===Gi&&y.alphaToCoverage===!1,alphaMap:ae,alphaTest:Se,alphaHash:Me,combine:y.combine,mapUv:yt&&x(y.map.channel),aoMapUv:G&&x(y.aoMap.channel),lightMapUv:Wt&&x(y.lightMap.channel),bumpMapUv:nt&&x(y.bumpMap.channel),normalMapUv:it&&x(y.normalMap.channel),displacementMapUv:Ve&&x(y.displacementMap.channel),emissiveMapUv:Mt&&x(y.emissiveMap.channel),metalnessMapUv:ke&&x(y.metalnessMap.channel),roughnessMapUv:P&&x(y.roughnessMap.channel),anisotropyMapUv:xe&&x(y.anisotropyMap.channel),clearcoatMapUv:Te&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ct&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:He&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:We&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(y.sheenRoughnessMap.channel),specularMapUv:rt&&x(y.specularMap.channel),specularColorMapUv:Ze&&x(y.specularColorMap.channel),specularIntensityMapUv:mt&&x(y.specularIntensityMap.channel),transmissionMapUv:z&&x(y.transmissionMap.channel),thicknessMapUv:_e&&x(y.thicknessMap.channel),alphaMapUv:ae&&x(y.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(it||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(yt||ae),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ge,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:we,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:yt&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===xt,decodeVideoTextureEmissive:Mt&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===xt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_n,flipSided:y.side===Kt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ke&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&y.extensions.multiDraw===!0||je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function h(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)M.push(L),M.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(C(M,y),R(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function C(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function R(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function w(y){const M=v[y.type];let L;if(M){const B=gn[M];L=Uh.clone(B.uniforms)}else L=y.uniforms;return L}function U(y,M){let L;for(let B=0,H=u.length;B<H;B++){const Z=u[B];if(Z.cacheKey===M){L=Z,++L.usedTimes;break}}return L===void 0&&(L=new Km(i,M,y,r),u.push(L)),L}function N(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function I(y){l.remove(y)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:w,acquireProgram:U,releaseProgram:N,releaseShaderCache:I,programs:u,dispose:D}}function eg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function tg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Dc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,p,v,x,m){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=x,h.group=m),e++,h}function o(d,f,p,v,x,m){const h=a(d,f,p,v,x,m);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(d,f,p,v,x,m){const h=a(d,f,p,v,x,m);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||tg),n.length>1&&n.sort(f||Dc),s.length>1&&s.sort(f||Dc)}function u(){for(let d=e,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function ng(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Nc,i.set(n,[a])):s>=r.length?(a=new Nc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ig(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Je};break;case"SpotLight":t={position:new O,direction:new O,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function sg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let rg=0;function ag(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function og(i){const e=new ig,t=sg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new Ye,a=new Ye;function o(c){let u=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,v=0,x=0,m=0,h=0,C=0,R=0,w=0,U=0,N=0,I=0;c.sort(ag);for(let y=0,M=c.length;y<M;y++){const L=c[y],B=L.color,H=L.intensity,Z=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=B.r*H,d+=B.g*H,f+=B.b*H;else if(L.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(L.sh.coefficients[F],H);I++}else if(L.isDirectionalLight){const F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,W=t.get(L);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=L.shadow.matrix,C++}n.directional[p]=F,p++}else if(L.isSpotLight){const F=e.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(B).multiplyScalar(H),F.distance=Z,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,n.spot[x]=F;const ee=L.shadow;if(L.map&&(n.spotLightMap[U]=L.map,U++,ee.updateMatrices(L),L.castShadow&&N++),n.spotLightMatrix[x]=ee.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=Q,w++}x++}else if(L.isRectAreaLight){const F=e.get(L);F.color.copy(B).multiplyScalar(H),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=F,m++}else if(L.isPointLight){const F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),F.distance=L.distance,F.decay=L.decay,L.castShadow){const ee=L.shadow,W=t.get(L);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,W.shadowCameraNear=ee.camera.near,W.shadowCameraFar=ee.camera.far,n.pointShadow[v]=W,n.pointShadowMap[v]=Q,n.pointShadowMatrix[v]=L.shadow.matrix,R++}n.point[v]=F,v++}else if(L.isHemisphereLight){const F=e.get(L);F.skyColor.copy(L.color).multiplyScalar(H),F.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[h]=F,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==p||D.pointLength!==v||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==h||D.numDirectionalShadows!==C||D.numPointShadows!==R||D.numSpotShadows!==w||D.numSpotMaps!==U||D.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=w+U-N,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=I,D.directionalLength=p,D.pointLength=v,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=h,D.numDirectionalShadows=C,D.numPointShadows=R,D.numSpotShadows=w,D.numSpotMaps=U,D.numLightProbes=I,n.version=rg++)}function l(c,u){let d=0,f=0,p=0,v=0,x=0;const m=u.matrixWorldInverse;for(let h=0,C=c.length;h<C;h++){const R=c[h];if(R.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(R.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(R.isRectAreaLight){const w=n.rectArea[v];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(R.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(R.width*.5,0,0),w.halfHeight.set(0,R.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(R.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(m),f++}else if(R.isHemisphereLight){const w=n.hemi[x];w.direction.setFromMatrixPosition(R.matrixWorld),w.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Uc(i){const e=new og(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function cg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Uc(i),e.set(s,[o])):r>=a.length?(o=new Uc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class lg extends ri{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ug extends ri{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fg(i,e,t){let n=new To;const s=new at,r=new at,a=new pt,o=new lg({depthPacking:Wu}),l=new ug,c={},u=t.maxTextureSize,d={[Mn]:Kt,[Kt]:Mn,[_n]:_n},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:hg,fragmentShader:dg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new sn;v.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new At(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pl;let h=this.type;this.render=function(N,I,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Jn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=h!==Ln&&this.type===Ln,Z=h===Ln&&this.type!==Ln;for(let Q=0,F=N.length;Q<F;Q++){const ee=N[Q],W=ee.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const oe=W.getFrameExtents();if(s.multiply(oe),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/oe.x),s.x=r.x*oe.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/oe.y),s.y=r.y*oe.y,W.mapSize.y=r.y)),W.map===null||H===!0||Z===!0){const fe=this.type!==Ln?{minFilter:tn,magFilter:tn}:{};W.map!==null&&W.map.dispose(),W.map=new Mi(s.x,s.y,fe),W.map.texture.name=ee.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const de=W.getViewportCount();for(let fe=0;fe<de;fe++){const we=W.getViewport(fe);a.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),B.viewport(a),W.updateMatrices(ee,fe),n=W.getFrustum(),w(I,D,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===Ln&&C(W,D),W.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,L)};function C(N,I){const D=e.update(x);f.defines.VSM_SAMPLES!==N.blurSamples&&(f.defines.VSM_SAMPLES=N.blurSamples,p.defines.VSM_SAMPLES=N.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Mi(s.x,s.y)),f.uniforms.shadow_pass.value=N.map.texture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(I,null,D,f,x,null),p.uniforms.shadow_pass.value=N.mapPass.texture,p.uniforms.resolution.value=N.mapSize,p.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(I,null,D,p,x,null)}function R(N,I,D,y){let M=null;const L=D.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const B=M.uuid,H=I.uuid;let Z=c[B];Z===void 0&&(Z={},c[B]=Z);let Q=Z[H];Q===void 0&&(Q=M.clone(),Z[H]=Q,I.addEventListener("dispose",U)),M=Q}if(M.visible=I.visible,M.wireframe=I.wireframe,y===Ln?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:d[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=i.properties.get(M);B.light=D}return M}function w(N,I,D,y,M){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&M===Ln)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,N.matrixWorld);const H=e.update(N),Z=N.material;if(Array.isArray(Z)){const Q=H.groups;for(let F=0,ee=Q.length;F<ee;F++){const W=Q[F],oe=Z[W.materialIndex];if(oe&&oe.visible){const de=R(N,oe,y,M);N.onBeforeShadow(i,N,I,D,H,de,W),i.renderBufferDirect(D,null,H,de,N,W),N.onAfterShadow(i,N,I,D,H,de,W)}}}else if(Z.visible){const Q=R(N,Z,y,M);N.onBeforeShadow(i,N,I,D,H,Q,null),i.renderBufferDirect(D,null,H,Q,N,null),N.onAfterShadow(i,N,I,D,H,Q,null)}}const B=N.children;for(let H=0,Z=B.length;H<Z;H++)w(B[H],I,D,y,M)}function U(N){N.target.removeEventListener("dispose",U);for(const D in c){const y=c[D],M=N.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const pg={[Ra]:Ca,[Pa]:Da,[La]:Na,[Yi]:Ia,[Ca]:Ra,[Da]:Pa,[Na]:La,[Ia]:Yi};function mg(i,e){function t(){let z=!1;const _e=new pt;let J=null;const ae=new pt(0,0,0,0);return{setMask:function(Se){J!==Se&&!z&&(i.colorMask(Se,Se,Se,Se),J=Se)},setLocked:function(Se){z=Se},setClear:function(Se,Me,Ke,St,Dt){Dt===!0&&(Se*=St,Me*=St,Ke*=St),_e.set(Se,Me,Ke,St),ae.equals(_e)===!1&&(i.clearColor(Se,Me,Ke,St),ae.copy(_e))},reset:function(){z=!1,J=null,ae.set(-1,0,0,0)}}}function n(){let z=!1,_e=!1,J=null,ae=null,Se=null;return{setReversed:function(Me){if(_e!==Me){const Ke=e.get("EXT_clip_control");_e?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);const St=Se;Se=null,this.setClear(St)}_e=Me},getReversed:function(){return _e},setTest:function(Me){Me?ne(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(Me){J!==Me&&!z&&(i.depthMask(Me),J=Me)},setFunc:function(Me){if(_e&&(Me=pg[Me]),ae!==Me){switch(Me){case Ra:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Pa:i.depthFunc(i.LESS);break;case Yi:i.depthFunc(i.LEQUAL);break;case La:i.depthFunc(i.EQUAL);break;case Ia:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case Na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=Me}},setLocked:function(Me){z=Me},setClear:function(Me){Se!==Me&&(_e&&(Me=1-Me),i.clearDepth(Me),Se=Me)},reset:function(){z=!1,J=null,ae=null,Se=null,_e=!1}}}function s(){let z=!1,_e=null,J=null,ae=null,Se=null,Me=null,Ke=null,St=null,Dt=null;return{setTest:function(Qe){z||(Qe?ne(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(Qe){_e!==Qe&&!z&&(i.stencilMask(Qe),_e=Qe)},setFunc:function(Qe,Xt,cn){(J!==Qe||ae!==Xt||Se!==cn)&&(i.stencilFunc(Qe,Xt,cn),J=Qe,ae=Xt,Se=cn)},setOp:function(Qe,Xt,cn){(Me!==Qe||Ke!==Xt||St!==cn)&&(i.stencilOp(Qe,Xt,cn),Me=Qe,Ke=Xt,St=cn)},setLocked:function(Qe){z=Qe},setClear:function(Qe){Dt!==Qe&&(i.clearStencil(Qe),Dt=Qe)},reset:function(){z=!1,_e=null,J=null,ae=null,Se=null,Me=null,Ke=null,St=null,Dt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],v=null,x=!1,m=null,h=null,C=null,R=null,w=null,U=null,N=null,I=new Je(0,0,0),D=0,y=!1,M=null,L=null,B=null,H=null,Z=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,ee=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=ee>=1):W.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=ee>=2);let oe=null,de={};const fe=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),Ee=new pt().fromArray(fe),X=new pt().fromArray(we);function $(z,_e,J,ae){const Se=new Uint8Array(4),Me=i.createTexture();i.bindTexture(z,Me),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<J;Ke++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(_e+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return Me}const te={};te[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(Yi),nt(!1),it(Uo),ne(i.CULL_FACE),G(Jn);function ne(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function ge(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function Oe(z,_e){return d[z]!==_e?(i.bindFramebuffer(z,_e),d[z]=_e,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=_e),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function je(z,_e){let J=p,ae=!1;if(z){J=f.get(_e),J===void 0&&(J=[],f.set(_e,J));const Se=z.textures;if(J.length!==Se.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,Ke=Se.length;Me<Ke;Me++)J[Me]=i.COLOR_ATTACHMENT0+Me;J.length=Se.length,ae=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ae=!0);ae&&i.drawBuffers(J)}function yt(z){return v!==z?(i.useProgram(z),v=z,!0):!1}const ot={[_i]:i.FUNC_ADD,[pu]:i.FUNC_SUBTRACT,[mu]:i.FUNC_REVERSE_SUBTRACT};ot[gu]=i.MIN,ot[_u]=i.MAX;const bt={[vu]:i.ZERO,[xu]:i.ONE,[Mu]:i.SRC_COLOR,[wa]:i.SRC_ALPHA,[wu]:i.SRC_ALPHA_SATURATE,[bu]:i.DST_COLOR,[Su]:i.DST_ALPHA,[yu]:i.ONE_MINUS_SRC_COLOR,[Aa]:i.ONE_MINUS_SRC_ALPHA,[Tu]:i.ONE_MINUS_DST_COLOR,[Eu]:i.ONE_MINUS_DST_ALPHA,[Au]:i.CONSTANT_COLOR,[Ru]:i.ONE_MINUS_CONSTANT_COLOR,[Cu]:i.CONSTANT_ALPHA,[Pu]:i.ONE_MINUS_CONSTANT_ALPHA};function G(z,_e,J,ae,Se,Me,Ke,St,Dt,Qe){if(z===Jn){x===!0&&(ge(i.BLEND),x=!1);return}if(x===!1&&(ne(i.BLEND),x=!0),z!==fu){if(z!==m||Qe!==y){if((h!==_i||w!==_i)&&(i.blendEquation(i.FUNC_ADD),h=_i,w=_i),Qe)switch(z){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ta:i.blendFunc(i.ONE,i.ONE);break;case Fo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ta:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}C=null,R=null,U=null,N=null,I.set(0,0,0),D=0,m=z,y=Qe}return}Se=Se||_e,Me=Me||J,Ke=Ke||ae,(_e!==h||Se!==w)&&(i.blendEquationSeparate(ot[_e],ot[Se]),h=_e,w=Se),(J!==C||ae!==R||Me!==U||Ke!==N)&&(i.blendFuncSeparate(bt[J],bt[ae],bt[Me],bt[Ke]),C=J,R=ae,U=Me,N=Ke),(St.equals(I)===!1||Dt!==D)&&(i.blendColor(St.r,St.g,St.b,Dt),I.copy(St),D=Dt),m=z,y=!1}function Wt(z,_e){z.side===_n?ge(i.CULL_FACE):ne(i.CULL_FACE);let J=z.side===Kt;_e&&(J=!J),nt(J),z.blending===Gi&&z.transparent===!1?G(Jn):G(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const ae=z.stencilWrite;o.setTest(ae),ae&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Mt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(z){M!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),M=z)}function it(z){z!==uu?(ne(i.CULL_FACE),z!==L&&(z===Uo?i.cullFace(i.BACK):z===hu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),L=z}function Ve(z){z!==B&&(F&&i.lineWidth(z),B=z)}function Mt(z,_e,J){z?(ne(i.POLYGON_OFFSET_FILL),(H!==_e||Z!==J)&&(i.polygonOffset(_e,J),H=_e,Z=J)):ge(i.POLYGON_OFFSET_FILL)}function ke(z){z?ne(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function P(z){z===void 0&&(z=i.TEXTURE0+Q-1),oe!==z&&(i.activeTexture(z),oe=z)}function S(z,_e,J){J===void 0&&(oe===null?J=i.TEXTURE0+Q-1:J=oe);let ae=de[J];ae===void 0&&(ae={type:void 0,texture:void 0},de[J]=ae),(ae.type!==z||ae.texture!==_e)&&(oe!==J&&(i.activeTexture(J),oe=J),i.bindTexture(z,_e||te[z]),ae.type=z,ae.texture=_e)}function q(){const z=de[oe];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function He(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function We(z){Ee.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Ee.copy(z))}function Re(z){X.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),X.copy(z))}function rt(z,_e){let J=c.get(_e);J===void 0&&(J=new WeakMap,c.set(_e,J));let ae=J.get(z);ae===void 0&&(ae=i.getUniformBlockIndex(_e,z.name),J.set(z,ae))}function Ze(z,_e){const ae=c.get(_e).get(z);l.get(_e)!==ae&&(i.uniformBlockBinding(_e,ae,z.__bindingPointIndex),l.set(_e,ae))}function mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},oe=null,de={},d={},f=new WeakMap,p=[],v=null,x=!1,m=null,h=null,C=null,R=null,w=null,U=null,N=null,I=new Je(0,0,0),D=0,y=!1,M=null,L=null,B=null,H=null,Z=null,Ee.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:ge,bindFramebuffer:Oe,drawBuffers:je,useProgram:yt,setBlending:G,setMaterial:Wt,setFlipSided:nt,setCullFace:it,setLineWidth:Ve,setPolygonOffset:Mt,setScissorTest:ke,activeTexture:P,bindTexture:S,unbindTexture:q,compressedTexImage2D:re,compressedTexImage3D:ce,texImage2D:Ae,texImage3D:He,updateUBOMapping:rt,uniformBlockBinding:Ze,texStorage2D:ct,texStorage3D:he,texSubImage2D:se,texSubImage3D:De,compressedTexSubImage2D:xe,compressedTexSubImage3D:Te,scissor:We,viewport:Re,reset:mt}}function Fc(i,e,t,n){const s=gg(n);switch(t){case xl:return i*e;case yl:return i*e;case Sl:return i*e*2;case El:return i*e/s.components*s.byteLength;case Mo:return i*e/s.components*s.byteLength;case bl:return i*e*2/s.components*s.byteLength;case yo:return i*e*2/s.components*s.byteLength;case Ml:return i*e*3/s.components*s.byteLength;case on:return i*e*4/s.components*s.byteLength;case So:return i*e*4/s.components*s.byteLength;case hr:case dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:case Va:return Math.max(i,16)*Math.max(e,8)/4;case Ba:case za:return Math.max(i,8)*Math.max(e,8)/2;case Ha:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case to:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case so:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case mr:case ro:case ao:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Tl:case oo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case co:case lo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gg(i){switch(i){case Fn:case gl:return{byteLength:1,components:1};case Es:case _l:case ws:return{byteLength:2,components:1};case vo:case xo:return{byteLength:2,components:4};case xi:case _o:case vn:return{byteLength:4,components:1};case vl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _g(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,S){return p?new OffscreenCanvas(P,S):bs("canvas")}function x(P,S,q){let re=1;const ce=ke(P);if((ce.width>q||ce.height>q)&&(re=q/Math.max(ce.width,ce.height)),re<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const se=Math.floor(re*ce.width),De=Math.floor(re*ce.height);d===void 0&&(d=v(se,De));const xe=S?v(se,De):d;return xe.width=se,xe.height=De,xe.getContext("2d").drawImage(P,0,0,se,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+se+"x"+De+")."),xe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),P;return P}function m(P){return P.generateMipmaps}function h(P){i.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(P,S,q,re,ce=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se=S;if(S===i.RED&&(q===i.FLOAT&&(se=i.R32F),q===i.HALF_FLOAT&&(se=i.R16F),q===i.UNSIGNED_BYTE&&(se=i.R8)),S===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.R8UI),q===i.UNSIGNED_SHORT&&(se=i.R16UI),q===i.UNSIGNED_INT&&(se=i.R32UI),q===i.BYTE&&(se=i.R8I),q===i.SHORT&&(se=i.R16I),q===i.INT&&(se=i.R32I)),S===i.RG&&(q===i.FLOAT&&(se=i.RG32F),q===i.HALF_FLOAT&&(se=i.RG16F),q===i.UNSIGNED_BYTE&&(se=i.RG8)),S===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.RG8UI),q===i.UNSIGNED_SHORT&&(se=i.RG16UI),q===i.UNSIGNED_INT&&(se=i.RG32UI),q===i.BYTE&&(se=i.RG8I),q===i.SHORT&&(se=i.RG16I),q===i.INT&&(se=i.RG32I)),S===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.RGB8UI),q===i.UNSIGNED_SHORT&&(se=i.RGB16UI),q===i.UNSIGNED_INT&&(se=i.RGB32UI),q===i.BYTE&&(se=i.RGB8I),q===i.SHORT&&(se=i.RGB16I),q===i.INT&&(se=i.RGB32I)),S===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),q===i.UNSIGNED_INT&&(se=i.RGBA32UI),q===i.BYTE&&(se=i.RGBA8I),q===i.SHORT&&(se=i.RGBA16I),q===i.INT&&(se=i.RGBA32I)),S===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),S===i.RGBA){const De=ce?Pr:st.getTransfer(re);q===i.FLOAT&&(se=i.RGBA32F),q===i.HALF_FLOAT&&(se=i.RGBA16F),q===i.UNSIGNED_BYTE&&(se=De===xt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function w(P,S){let q;return P?S===null||S===xi||S===$i?q=i.DEPTH24_STENCIL8:S===vn?q=i.DEPTH32F_STENCIL8:S===Es&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===xi||S===$i?q=i.DEPTH_COMPONENT24:S===vn?q=i.DEPTH_COMPONENT32F:S===Es&&(q=i.DEPTH_COMPONENT16),q}function U(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==tn&&P.minFilter!==en?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function N(P){const S=P.target;S.removeEventListener("dispose",N),D(S),S.isVideoTexture&&u.delete(S)}function I(P){const S=P.target;S.removeEventListener("dispose",I),M(S)}function D(P){const S=n.get(P);if(S.__webglInit===void 0)return;const q=P.source,re=f.get(q);if(re){const ce=re[S.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&y(P),Object.keys(re).length===0&&f.delete(q)}n.remove(P)}function y(P){const S=n.get(P);i.deleteTexture(S.__webglTexture);const q=P.source,re=f.get(q);delete re[S.__cacheKey],a.memory.textures--}function M(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(S.__webglFramebuffer[re]))for(let ce=0;ce<S.__webglFramebuffer[re].length;ce++)i.deleteFramebuffer(S.__webglFramebuffer[re][ce]);else i.deleteFramebuffer(S.__webglFramebuffer[re]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[re])}else{if(Array.isArray(S.__webglFramebuffer))for(let re=0;re<S.__webglFramebuffer.length;re++)i.deleteFramebuffer(S.__webglFramebuffer[re]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let re=0;re<S.__webglColorRenderbuffer.length;re++)S.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[re]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const q=P.textures;for(let re=0,ce=q.length;re<ce;re++){const se=n.get(q[re]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(q[re])}n.remove(P)}let L=0;function B(){L=0}function H(){const P=L;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),L+=1,P}function Z(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function Q(P,S){const q=n.get(P);if(P.isVideoTexture&&Ve(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const re=P.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(q,P,S);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+S)}function F(P,S){const q=n.get(P);if(P.version>0&&q.__version!==P.version){X(q,P,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+S)}function ee(P,S){const q=n.get(P);if(P.version>0&&q.__version!==P.version){X(q,P,S);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+S)}function W(P,S){const q=n.get(P);if(P.version>0&&q.__version!==P.version){$(q,P,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+S)}const oe={[In]:i.REPEAT,[mn]:i.CLAMP_TO_EDGE,[Oa]:i.MIRRORED_REPEAT},de={[tn]:i.NEAREST,[Vu]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[Dn]:i.LINEAR_MIPMAP_LINEAR},fe={[qu]:i.NEVER,[Ju]:i.ALWAYS,[Yu]:i.LESS,[wl]:i.LEQUAL,[ju]:i.EQUAL,[Zu]:i.GEQUAL,[Ku]:i.GREATER,[$u]:i.NOTEQUAL};function we(P,S){if(S.type===vn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===en||S.magFilter===zr||S.magFilter===Fs||S.magFilter===Dn||S.minFilter===en||S.minFilter===zr||S.minFilter===Fs||S.minFilter===Dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,oe[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,oe[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,oe[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,de[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,fe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===tn||S.minFilter!==Fs&&S.minFilter!==Dn||S.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ee(P,S){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",N));const re=S.source;let ce=f.get(re);ce===void 0&&(ce={},f.set(re,ce));const se=Z(S);if(se!==P.__cacheKey){ce[se]===void 0&&(ce[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ce[se].usedTimes++;const De=ce[P.__cacheKey];De!==void 0&&(ce[P.__cacheKey].usedTimes--,De.usedTimes===0&&y(S)),P.__cacheKey=se,P.__webglTexture=ce[se].texture}return q}function X(P,S,q){let re=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=i.TEXTURE_3D);const ce=Ee(P,S),se=S.source;t.bindTexture(re,P.__webglTexture,i.TEXTURE0+q);const De=n.get(se);if(se.version!==De.__version||ce===!0){t.activeTexture(i.TEXTURE0+q);const xe=st.getPrimaries(st.workingColorSpace),Te=S.colorSpace===jn?null:st.getPrimaries(S.colorSpace),ct=S.colorSpace===jn||xe===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let he=x(S.image,!1,s.maxTextureSize);he=Mt(S,he);const Ae=r.convert(S.format,S.colorSpace),He=r.convert(S.type);let We=R(S.internalFormat,Ae,He,S.colorSpace,S.isVideoTexture);we(re,S);let Re;const rt=S.mipmaps,Ze=S.isVideoTexture!==!0,mt=De.__version===void 0||ce===!0,z=se.dataReady,_e=U(S,he);if(S.isDepthTexture)We=w(S.format===Zi,S.type),mt&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,We,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,We,he.width,he.height,0,Ae,He,null));else if(S.isDataTexture)if(rt.length>0){Ze&&mt&&t.texStorage2D(i.TEXTURE_2D,_e,We,rt[0].width,rt[0].height);for(let J=0,ae=rt.length;J<ae;J++)Re=rt[J],Ze?z&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Re.width,Re.height,Ae,He,Re.data):t.texImage2D(i.TEXTURE_2D,J,We,Re.width,Re.height,0,Ae,He,Re.data);S.generateMipmaps=!1}else Ze?(mt&&t.texStorage2D(i.TEXTURE_2D,_e,We,he.width,he.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,Ae,He,he.data)):t.texImage2D(i.TEXTURE_2D,0,We,he.width,he.height,0,Ae,He,he.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ze&&mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,We,rt[0].width,rt[0].height,he.depth);for(let J=0,ae=rt.length;J<ae;J++)if(Re=rt[J],S.format!==on)if(Ae!==null)if(Ze){if(z)if(S.layerUpdates.size>0){const Se=Fc(Re.width,Re.height,S.format,S.type);for(const Me of S.layerUpdates){const Ke=Re.data.subarray(Me*Se/Re.data.BYTES_PER_ELEMENT,(Me+1)*Se/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Me,Re.width,Re.height,1,Ae,Ke)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Re.width,Re.height,he.depth,Ae,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,We,Re.width,Re.height,he.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Re.width,Re.height,he.depth,Ae,He,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,We,Re.width,Re.height,he.depth,0,Ae,He,Re.data)}else{Ze&&mt&&t.texStorage2D(i.TEXTURE_2D,_e,We,rt[0].width,rt[0].height);for(let J=0,ae=rt.length;J<ae;J++)Re=rt[J],S.format!==on?Ae!==null?Ze?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Re.width,Re.height,Ae,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,J,We,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?z&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Re.width,Re.height,Ae,He,Re.data):t.texImage2D(i.TEXTURE_2D,J,We,Re.width,Re.height,0,Ae,He,Re.data)}else if(S.isDataArrayTexture)if(Ze){if(mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,We,he.width,he.height,he.depth),z)if(S.layerUpdates.size>0){const J=Fc(he.width,he.height,S.format,S.type);for(const ae of S.layerUpdates){const Se=he.data.subarray(ae*J/he.data.BYTES_PER_ELEMENT,(ae+1)*J/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,he.width,he.height,1,Ae,He,Se)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ae,He,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,he.width,he.height,he.depth,0,Ae,He,he.data);else if(S.isData3DTexture)Ze?(mt&&t.texStorage3D(i.TEXTURE_3D,_e,We,he.width,he.height,he.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ae,He,he.data)):t.texImage3D(i.TEXTURE_3D,0,We,he.width,he.height,he.depth,0,Ae,He,he.data);else if(S.isFramebufferTexture){if(mt)if(Ze)t.texStorage2D(i.TEXTURE_2D,_e,We,he.width,he.height);else{let J=he.width,ae=he.height;for(let Se=0;Se<_e;Se++)t.texImage2D(i.TEXTURE_2D,Se,We,J,ae,0,Ae,He,null),J>>=1,ae>>=1}}else if(rt.length>0){if(Ze&&mt){const J=ke(rt[0]);t.texStorage2D(i.TEXTURE_2D,_e,We,J.width,J.height)}for(let J=0,ae=rt.length;J<ae;J++)Re=rt[J],Ze?z&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Ae,He,Re):t.texImage2D(i.TEXTURE_2D,J,We,Ae,He,Re);S.generateMipmaps=!1}else if(Ze){if(mt){const J=ke(he);t.texStorage2D(i.TEXTURE_2D,_e,We,J.width,J.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,He,he)}else t.texImage2D(i.TEXTURE_2D,0,We,Ae,He,he);m(S)&&h(re),De.__version=se.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function $(P,S,q){if(S.image.length!==6)return;const re=Ee(P,S),ce=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);const se=n.get(ce);if(ce.version!==se.__version||re===!0){t.activeTexture(i.TEXTURE0+q);const De=st.getPrimaries(st.workingColorSpace),xe=S.colorSpace===jn?null:st.getPrimaries(S.colorSpace),Te=S.colorSpace===jn||De===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const ct=S.isCompressedTexture||S.image[0].isCompressedTexture,he=S.image[0]&&S.image[0].isDataTexture,Ae=[];for(let ae=0;ae<6;ae++)!ct&&!he?Ae[ae]=x(S.image[ae],!0,s.maxCubemapSize):Ae[ae]=he?S.image[ae].image:S.image[ae],Ae[ae]=Mt(S,Ae[ae]);const He=Ae[0],We=r.convert(S.format,S.colorSpace),Re=r.convert(S.type),rt=R(S.internalFormat,We,Re,S.colorSpace),Ze=S.isVideoTexture!==!0,mt=se.__version===void 0||re===!0,z=ce.dataReady;let _e=U(S,He);we(i.TEXTURE_CUBE_MAP,S);let J;if(ct){Ze&&mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,rt,He.width,He.height);for(let ae=0;ae<6;ae++){J=Ae[ae].mipmaps;for(let Se=0;Se<J.length;Se++){const Me=J[Se];S.format!==on?We!==null?Ze?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,0,0,Me.width,Me.height,We,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,rt,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,0,0,Me.width,Me.height,We,Re,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se,rt,Me.width,Me.height,0,We,Re,Me.data)}}}else{if(J=S.mipmaps,Ze&&mt){J.length>0&&_e++;const ae=ke(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,rt,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(he){Ze?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ae[ae].width,Ae[ae].height,We,Re,Ae[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,rt,Ae[ae].width,Ae[ae].height,0,We,Re,Ae[ae].data);for(let Se=0;Se<J.length;Se++){const Ke=J[Se].image[ae].image;Ze?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,0,0,Ke.width,Ke.height,We,Re,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,rt,Ke.width,Ke.height,0,We,Re,Ke.data)}}else{Ze?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,We,Re,Ae[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,rt,We,Re,Ae[ae]);for(let Se=0;Se<J.length;Se++){const Me=J[Se];Ze?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,0,0,We,Re,Me.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se+1,rt,We,Re,Me.image[ae])}}}m(S)&&h(i.TEXTURE_CUBE_MAP),se.__version=ce.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function te(P,S,q,re,ce,se){const De=r.convert(q.format,q.colorSpace),xe=r.convert(q.type),Te=R(q.internalFormat,De,xe,q.colorSpace),ct=n.get(S),he=n.get(q);if(he.__renderTarget=S,!ct.__hasExternalTextures){const Ae=Math.max(1,S.width>>se),He=Math.max(1,S.height>>se);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,se,Te,Ae,He,S.depth,0,De,xe,null):t.texImage2D(ce,se,Te,Ae,He,0,De,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),it(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ce,he.__webglTexture,0,nt(S)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,ce,he.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(P,S,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer){const re=S.depthTexture,ce=re&&re.isDepthTexture?re.type:null,se=w(S.stencilBuffer,ce),De=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=nt(S);it(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,se,S.width,S.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,se,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,se,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,P)}else{const re=S.textures;for(let ce=0;ce<re.length;ce++){const se=re[ce],De=r.convert(se.format,se.colorSpace),xe=r.convert(se.type),Te=R(se.internalFormat,De,xe,se.colorSpace),ct=nt(S);q&&it(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Te,S.width,S.height):it(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Te,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Te,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=n.get(S.depthTexture);re.__renderTarget=S,(!re.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);const ce=re.__webglTexture,se=nt(S);if(S.depthTexture.format===Wi)it(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(S.depthTexture.format===Zi)it(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Oe(P){const S=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const re=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),re){const ce=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,re.removeEventListener("dispose",ce)};re.addEventListener("dispose",ce),S.__depthDisposeCallback=ce}S.__boundDepthTexture=re}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ge(S.__webglFramebuffer,P)}else if(q){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]===void 0)S.__webglDepthbuffer[re]=i.createRenderbuffer(),ne(S.__webglDepthbuffer[re],P,!1);else{const ce=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,se)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ne(S.__webglDepthbuffer,P,!1);else{const re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(P,S,q){const re=n.get(P);S!==void 0&&te(re.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Oe(P)}function yt(P){const S=P.texture,q=n.get(P),re=n.get(S);P.addEventListener("dispose",I);const ce=P.textures,se=P.isWebGLCubeRenderTarget===!0,De=ce.length>1;if(De||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=S.version,a.memory.textures++),se){q.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer[xe]=[];for(let Te=0;Te<S.mipmaps.length;Te++)q.__webglFramebuffer[xe][Te]=i.createFramebuffer()}else q.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer=[];for(let xe=0;xe<S.mipmaps.length;xe++)q.__webglFramebuffer[xe]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(De)for(let xe=0,Te=ce.length;xe<Te;xe++){const ct=n.get(ce[xe]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&it(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let xe=0;xe<ce.length;xe++){const Te=ce[xe];q.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[xe]);const ct=r.convert(Te.format,Te.colorSpace),he=r.convert(Te.type),Ae=R(Te.internalFormat,ct,he,Te.colorSpace,P.isXRRenderTarget===!0),He=nt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Ae,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,q.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),we(i.TEXTURE_CUBE_MAP,S);for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)te(q.__webglFramebuffer[xe][Te],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Te);else te(q.__webglFramebuffer[xe],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(S)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let xe=0,Te=ce.length;xe<Te;xe++){const ct=ce[xe],he=n.get(ct);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),we(i.TEXTURE_2D,ct),te(q.__webglFramebuffer,P,ct,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),m(ct)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,re.__webglTexture),we(xe,S),S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)te(q.__webglFramebuffer[Te],P,S,i.COLOR_ATTACHMENT0,xe,Te);else te(q.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,xe,0);m(S)&&h(xe),t.unbindTexture()}P.depthBuffer&&Oe(P)}function ot(P){const S=P.textures;for(let q=0,re=S.length;q<re;q++){const ce=S[q];if(m(ce)){const se=C(P),De=n.get(ce).__webglTexture;t.bindTexture(se,De),h(se),t.unbindTexture()}}}const bt=[],G=[];function Wt(P){if(P.samples>0){if(it(P)===!1){const S=P.textures,q=P.width,re=P.height;let ce=i.COLOR_BUFFER_BIT;const se=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(P),xe=S.length>1;if(xe)for(let Te=0;Te<S.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Te]);const ct=n.get(S[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,q,re,0,0,q,re,ce,i.NEAREST),l===!0&&(bt.length=0,G.length=0,bt.push(i.COLOR_ATTACHMENT0+Te),P.depthBuffer&&P.resolveDepthBuffer===!1&&(bt.push(se),G.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,G)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Te=0;Te<S.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,De.__webglColorRenderbuffer[Te]);const ct=n.get(S[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,ct,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function nt(P){return Math.min(s.maxSamples,P.samples)}function it(P){const S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ve(P){const S=a.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function Mt(P,S){const q=P.colorSpace,re=P.format,ce=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==ts&&q!==jn&&(st.getTransfer(q)===xt?(re!==on||ce!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),S}function ke(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=Q,this.setTexture2DArray=F,this.setTexture3D=ee,this.setTextureCube=W,this.rebindTextures=je,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=it}function vg(i,e){function t(n,s=jn){let r;const a=st.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gl)return i.BYTE;if(n===_l)return i.SHORT;if(n===Es)return i.UNSIGNED_SHORT;if(n===_o)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===ws)return i.HALF_FLOAT;if(n===xl)return i.ALPHA;if(n===Ml)return i.RGB;if(n===on)return i.RGBA;if(n===yl)return i.LUMINANCE;if(n===Sl)return i.LUMINANCE_ALPHA;if(n===Wi)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===El)return i.RED;if(n===Mo)return i.RED_INTEGER;if(n===bl)return i.RG;if(n===yo)return i.RG_INTEGER;if(n===So)return i.RGBA_INTEGER;if(n===hr||n===dr||n===fr||n===pr)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ba||n===ka||n===za||n===Va)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Ga||n===Wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ha||n===Ga)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wa)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===ja||n===Ka||n===$a||n===Za||n===Ja||n===Qa||n===eo||n===to||n===no||n===io||n===so)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ja)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ka)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eo)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===to)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===no)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===io)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===so)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mr||n===ro||n===ao)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mr)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tl||n===oo||n===co||n===lo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===mr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class xg extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zn extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mg={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const yg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Eg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Ut,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ni({vertexShader:yg,fragmentShader:Sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new As(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bg extends ns{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,v=null;const x=new Eg,m=t.getContextAttributes();let h=null,C=null;const R=[],w=[],U=new at;let N=null;const I=new Bt;I.viewport=new pt;const D=new Bt;D.viewport=new pt;const y=[I,D],M=new xg;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=R[X];return $===void 0&&($=new pa,R[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=R[X];return $===void 0&&($=new pa,R[X]=$),$.getGripSpace()},this.getHand=function(X){let $=R[X];return $===void 0&&($=new pa,R[X]=$),$.getHandSpace()};function H(X){const $=w.indexOf(X.inputSource);if($===-1)return;const te=R[$];te!==void 0&&(te.update(X.inputSource,X.frame,c||a),te.dispatchEvent({type:X.type,data:X.inputSource}))}function Z(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",Q);for(let X=0;X<R.length;X++){const $=w[X];$!==null&&(w[X]=null,R[X].disconnect($))}L=null,B=null,x.reset(),e.setRenderTarget(h),p=null,f=null,d=null,s=null,C=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){const $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new Mi(p.framebufferWidth,p.framebufferHeight,{format:on,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,te=null,ne=null;m.depth&&(ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=m.stencil?Zi:Wi,te=m.stencil?$i:xi);const ge={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(ge),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),C=new Mi(f.textureWidth,f.textureHeight,{format:on,type:Fn,depthTexture:new Ol(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ee.setContext(s),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(X){for(let $=0;$<X.removed.length;$++){const te=X.removed[$],ne=w.indexOf(te);ne>=0&&(w[ne]=null,R[ne].disconnect(te))}for(let $=0;$<X.added.length;$++){const te=X.added[$];let ne=w.indexOf(te);if(ne===-1){for(let Oe=0;Oe<R.length;Oe++)if(Oe>=w.length){w.push(te),ne=Oe;break}else if(w[Oe]===null){w[Oe]=te,ne=Oe;break}if(ne===-1)break}const ge=R[ne];ge&&ge.connect(te)}}const F=new O,ee=new O;function W(X,$,te){F.setFromMatrixPosition($.matrixWorld),ee.setFromMatrixPosition(te.matrixWorld);const ne=F.distanceTo(ee),ge=$.projectionMatrix.elements,Oe=te.projectionMatrix.elements,je=ge[14]/(ge[10]-1),yt=ge[14]/(ge[10]+1),ot=(ge[9]+1)/ge[5],bt=(ge[9]-1)/ge[5],G=(ge[8]-1)/ge[0],Wt=(Oe[8]+1)/Oe[0],nt=je*G,it=je*Wt,Ve=ne/(-G+Wt),Mt=Ve*-G;if($.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Mt),X.translateZ(Ve),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ge[10]===-1)X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const ke=je+Ve,P=yt+Ve,S=nt-Mt,q=it+(ne-Mt),re=ot*yt/P*ke,ce=bt*yt/P*ke;X.projectionMatrix.makePerspective(S,q,re,ce,ke,P),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function oe(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let $=X.near,te=X.far;x.texture!==null&&(x.depthNear>0&&($=x.depthNear),x.depthFar>0&&(te=x.depthFar)),M.near=D.near=I.near=$,M.far=D.far=I.far=te,(L!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,B=M.far),I.layers.mask=X.layers.mask|2,D.layers.mask=X.layers.mask|4,M.layers.mask=I.layers.mask|D.layers.mask;const ne=X.parent,ge=M.cameras;oe(M,ne);for(let Oe=0;Oe<ge.length;Oe++)oe(ge[Oe],ne);ge.length===2?W(M,I,D):M.projectionMatrix.copy(I.projectionMatrix),de(X,M,ne)};function de(X,$,te){te===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(te.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ji*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let fe=null;function we(X,$){if(u=$.getViewerPose(c||a),v=$,u!==null){const te=u.views;p!==null&&(e.setRenderTargetFramebuffer(C,p.framebuffer),e.setRenderTarget(C));let ne=!1;te.length!==M.cameras.length&&(M.cameras.length=0,ne=!0);for(let Oe=0;Oe<te.length;Oe++){const je=te[Oe];let yt=null;if(p!==null)yt=p.getViewport(je);else{const bt=d.getViewSubImage(f,je);yt=bt.viewport,Oe===0&&(e.setRenderTargetTextures(C,bt.colorTexture,f.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(C))}let ot=y[Oe];ot===void 0&&(ot=new Bt,ot.layers.enable(Oe),ot.viewport=new pt,y[Oe]=ot),ot.matrix.fromArray(je.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(je.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(yt.x,yt.y,yt.width,yt.height),Oe===0&&(M.matrix.copy(ot.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ne===!0&&M.cameras.push(ot)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const Oe=d.getDepthInformation(te[0]);Oe&&Oe.isValid&&Oe.texture&&x.init(e,Oe,s.renderState)}}for(let te=0;te<R.length;te++){const ne=w[te],ge=R[te];ne!==null&&ge!==void 0&&ge.update(ne,$,c||a)}fe&&fe(X,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),v=null}const Ee=new Fl;Ee.setAnimationLoop(we),this.setAnimationLoop=function(X){fe=X},this.dispose=function(){}}}const pi=new $t,Tg=new Ye;function wg(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Dl(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,C,R,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),d(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,w)):h.isMeshMatcapMaterial?(r(m,h),v(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),x(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,C,R):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Kt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Kt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const C=e.get(h),R=C.envMap,w=C.envMapRotation;R&&(m.envMap.value=R,pi.copy(w),pi.x*=-1,pi.y*=-1,pi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),m.envMapRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(pi)),m.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,C,R){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*C,m.scale.value=R*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,C){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Kt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const C=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ag(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,R){const w=R.program;n.uniformBlockBinding(C,w)}function c(C,R){let w=s[C.id];w===void 0&&(v(C),w=u(C),s[C.id]=w,C.addEventListener("dispose",m));const U=R.program;n.updateUBOMapping(C,U);const N=e.render.frame;r[C.id]!==N&&(f(C),r[C.id]=N)}function u(C){const R=d();C.__bindingPointIndex=R;const w=i.createBuffer(),U=C.__size,N=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,U,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,w),w}function d(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const R=s[C.id],w=C.uniforms,U=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let N=0,I=w.length;N<I;N++){const D=Array.isArray(w[N])?w[N]:[w[N]];for(let y=0,M=D.length;y<M;y++){const L=D[y];if(p(L,N,y,U)===!0){const B=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let Z=0;for(let Q=0;Q<H.length;Q++){const F=H[Q],ee=x(F);typeof F=="number"||typeof F=="boolean"?(L.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,B+Z,L.__data)):F.isMatrix3?(L.__data[0]=F.elements[0],L.__data[1]=F.elements[1],L.__data[2]=F.elements[2],L.__data[3]=0,L.__data[4]=F.elements[3],L.__data[5]=F.elements[4],L.__data[6]=F.elements[5],L.__data[7]=0,L.__data[8]=F.elements[6],L.__data[9]=F.elements[7],L.__data[10]=F.elements[8],L.__data[11]=0):(F.toArray(L.__data,Z),Z+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(C,R,w,U){const N=C.value,I=R+"_"+w;if(U[I]===void 0)return typeof N=="number"||typeof N=="boolean"?U[I]=N:U[I]=N.clone(),!0;{const D=U[I];if(typeof N=="number"||typeof N=="boolean"){if(D!==N)return U[I]=N,!0}else if(D.equals(N)===!1)return D.copy(N),!0}return!1}function v(C){const R=C.uniforms;let w=0;const U=16;for(let I=0,D=R.length;I<D;I++){const y=Array.isArray(R[I])?R[I]:[R[I]];for(let M=0,L=y.length;M<L;M++){const B=y[M],H=Array.isArray(B.value)?B.value:[B.value];for(let Z=0,Q=H.length;Z<Q;Z++){const F=H[Z],ee=x(F),W=w%U,oe=W%ee.boundary,de=W+oe;w+=oe,de!==0&&U-de<ee.storage&&(w+=U-de),B.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=w,w+=ee.storage}}}const N=w%U;return N>0&&(w+=U-N),C.__size=w,C.__cache={},this}function x(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),R}function m(C){const R=C.target;R.removeEventListener("dispose",m);const w=a.indexOf(R.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function h(){for(const C in s)i.deleteBuffer(s[C]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Rg{constructor(e={}){const{canvas:t=mh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,h=null;const C=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this.toneMapping=Qn,this.toneMappingExposure=1;const w=this;let U=!1,N=0,I=0,D=null,y=-1,M=null;const L=new pt,B=new pt;let H=null;const Z=new Je(0);let Q=0,F=t.width,ee=t.height,W=1,oe=null,de=null;const fe=new pt(0,0,F,ee),we=new pt(0,0,F,ee);let Ee=!1;const X=new To;let $=!1,te=!1;const ne=new Ye,ge=new Ye,Oe=new O,je=new pt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function bt(){return D===null?W:1}let G=n;function Wt(T,V){return t.getContext(T,V)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${go}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Me,!1),G===null){const V="webgl2";if(G=Wt(V,T),G===null)throw Wt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let nt,it,Ve,Mt,ke,P,S,q,re,ce,se,De,xe,Te,ct,he,Ae,He,We,Re,rt,Ze,mt,z;function _e(){nt=new Dp(G),nt.init(),Ze=new vg(G,nt),it=new Ap(G,nt,e,Ze),Ve=new mg(G,nt),it.reverseDepthBuffer&&f&&Ve.buffers.depth.setReversed(!0),Mt=new Fp(G),ke=new eg,P=new _g(G,nt,Ve,ke,it,Ze,Mt),S=new Cp(w),q=new Ip(w),re=new Hh(G),mt=new Tp(G,re),ce=new Np(G,re,Mt,mt),se=new Bp(G,ce,re,Mt),We=new Op(G,it,P),he=new Rp(ke),De=new Qm(w,S,q,nt,it,mt,he),xe=new wg(w,ke),Te=new ng,ct=new cg(nt),He=new bp(w,S,q,Ve,se,p,l),Ae=new fg(w,se,it),z=new Ag(G,Mt,it,Ve),Re=new wp(G,nt,Mt),rt=new Up(G,nt,Mt),Mt.programs=De.programs,w.capabilities=it,w.extensions=nt,w.properties=ke,w.renderLists=Te,w.shadowMap=Ae,w.state=Ve,w.info=Mt}_e();const J=new bg(w,G);this.xr=J,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=nt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=nt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(F,ee,!1))},this.getSize=function(T){return T.set(F,ee)},this.setSize=function(T,V,Y=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,ee=V,t.width=Math.floor(T*W),t.height=Math.floor(V*W),Y===!0&&(t.style.width=T+"px",t.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(F*W,ee*W).floor()},this.setDrawingBufferSize=function(T,V,Y){F=T,ee=V,W=Y,t.width=Math.floor(T*Y),t.height=Math.floor(V*Y),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(fe)},this.setViewport=function(T,V,Y,j){T.isVector4?fe.set(T.x,T.y,T.z,T.w):fe.set(T,V,Y,j),Ve.viewport(L.copy(fe).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(we)},this.setScissor=function(T,V,Y,j){T.isVector4?we.set(T.x,T.y,T.z,T.w):we.set(T,V,Y,j),Ve.scissor(B.copy(we).multiplyScalar(W).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(T){Ve.setScissorTest(Ee=T)},this.setOpaqueSort=function(T){oe=T},this.setTransparentSort=function(T){de=T},this.getClearColor=function(T){return T.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(T=!0,V=!0,Y=!0){let j=0;if(T){let k=!1;if(D!==null){const ue=D.texture.format;k=ue===So||ue===yo||ue===Mo}if(k){const ue=D.texture.type,ve=ue===Fn||ue===xi||ue===Es||ue===$i||ue===vo||ue===xo,Pe=He.getClearColor(),Le=He.getClearAlpha(),Xe=Pe.r,$e=Pe.g,Ie=Pe.b;ve?(v[0]=Xe,v[1]=$e,v[2]=Ie,v[3]=Le,G.clearBufferuiv(G.COLOR,0,v)):(x[0]=Xe,x[1]=$e,x[2]=Ie,x[3]=Le,G.clearBufferiv(G.COLOR,0,x))}else j|=G.COLOR_BUFFER_BIT}V&&(j|=G.DEPTH_BUFFER_BIT),Y&&(j|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Te.dispose(),ct.dispose(),ke.dispose(),S.dispose(),q.dispose(),se.dispose(),mt.dispose(),z.dispose(),De.dispose(),J.dispose(),J.removeEventListener("sessionstart",Cs),J.removeEventListener("sessionend",Ps),En.stop()};function ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const T=Mt.autoReset,V=Ae.enabled,Y=Ae.autoUpdate,j=Ae.needsUpdate,k=Ae.type;_e(),Mt.autoReset=T,Ae.enabled=V,Ae.autoUpdate=Y,Ae.needsUpdate=j,Ae.type=k}function Me(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ke(T){const V=T.target;V.removeEventListener("dispose",Ke),St(V)}function St(T){Dt(T),ke.remove(T)}function Dt(T){const V=ke.get(T).programs;V!==void 0&&(V.forEach(function(Y){De.releaseProgram(Y)}),T.isShaderMaterial&&De.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,Y,j,k,ue){V===null&&(V=yt);const ve=k.isMesh&&k.matrixWorld.determinant()<0,Pe=Or(T,V,Y,j,k);Ve.setMaterial(j,ve);let Le=Y.index,Xe=1;if(j.wireframe===!0){if(Le=ce.getWireframeAttribute(Y),Le===void 0)return;Xe=2}const $e=Y.drawRange,Ie=Y.attributes.position;let lt=$e.start*Xe,gt=($e.start+$e.count)*Xe;ue!==null&&(lt=Math.max(lt,ue.start*Xe),gt=Math.min(gt,(ue.start+ue.count)*Xe)),Le!==null?(lt=Math.max(lt,0),gt=Math.min(gt,Le.count)):Ie!=null&&(lt=Math.max(lt,0),gt=Math.min(gt,Ie.count));const vt=gt-lt;if(vt<0||vt===1/0)return;mt.setup(k,j,Pe,Y,Le);let Rt,ht=Re;if(Le!==null&&(Rt=re.get(Le),ht=rt,ht.setIndex(Rt)),k.isMesh)j.wireframe===!0?(Ve.setLineWidth(j.wireframeLinewidth*bt()),ht.setMode(G.LINES)):ht.setMode(G.TRIANGLES);else if(k.isLine){let Ne=j.linewidth;Ne===void 0&&(Ne=1),Ve.setLineWidth(Ne*bt()),k.isLineSegments?ht.setMode(G.LINES):k.isLineLoop?ht.setMode(G.LINE_LOOP):ht.setMode(G.LINE_STRIP)}else k.isPoints?ht.setMode(G.POINTS):k.isSprite&&ht.setMode(G.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ht.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ht.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ne=k._multiDrawStarts,ln=k._multiDrawCounts,ut=k._multiDrawCount,Zt=Le?re.get(Le).bytesPerElement:1,Bn=ke.get(j).currentProgram.getUniforms();for(let kt=0;kt<ut;kt++)Bn.setValue(G,"_gl_DrawID",kt),ht.render(Ne[kt]/Zt,ln[kt])}else if(k.isInstancedMesh)ht.renderInstances(lt,vt,k.count);else if(Y.isInstancedBufferGeometry){const Ne=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ln=Math.min(Y.instanceCount,Ne);ht.renderInstances(lt,vt,ln)}else ht.render(lt,vt)};function Qe(T,V,Y){T.transparent===!0&&T.side===_n&&T.forceSinglePass===!1?(T.side=Kt,T.needsUpdate=!0,Si(T,V,Y),T.side=Mn,T.needsUpdate=!0,Si(T,V,Y),T.side=_n):Si(T,V,Y)}this.compile=function(T,V,Y=null){Y===null&&(Y=T),h=ct.get(Y),h.init(V),R.push(h),Y.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),T!==Y&&T.traverseVisible(function(k){k.isLight&&k.layers.test(V.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),h.setupLights();const j=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ue=k.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const Pe=ue[ve];Qe(Pe,Y,k),j.add(Pe)}else Qe(ue,Y,k),j.add(ue)}),R.pop(),h=null,j},this.compileAsync=function(T,V,Y=null){const j=this.compile(T,V,Y);return new Promise(k=>{function ue(){if(j.forEach(function(ve){ke.get(ve).currentProgram.isReady()&&j.delete(ve)}),j.size===0){k(T);return}setTimeout(ue,10)}nt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Xt=null;function cn(T){Xt&&Xt(T)}function Cs(){En.stop()}function Ps(){En.start()}const En=new Fl;En.setAnimationLoop(cn),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(T){Xt=T,J.setAnimationLoop(T),T===null?En.stop():En.start()},J.addEventListener("sessionstart",Cs),J.addEventListener("sessionend",Ps),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(V),V=J.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,V,D),h=ct.get(T,R.length),h.init(V),R.push(h),ge.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),X.setFromProjectionMatrix(ge),te=this.localClippingEnabled,$=he.init(this.clippingPlanes,te),m=Te.get(T,C.length),m.init(),C.push(m),J.enabled===!0&&J.isPresenting===!0){const ue=w.xr.getDepthSensingMesh();ue!==null&&ls(ue,V,-1/0,w.sortObjects)}ls(T,V,0,w.sortObjects),m.finish(),w.sortObjects===!0&&m.sort(oe,de),ot=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,ot&&He.addToRenderList(m,T),this.info.render.frame++,$===!0&&he.beginShadows();const Y=h.state.shadowsArray;Ae.render(Y,T,V),$===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,k=m.transmissive;if(h.setupLights(),V.isArrayCamera){const ue=V.cameras;if(k.length>0)for(let ve=0,Pe=ue.length;ve<Pe;ve++){const Le=ue[ve];us(j,k,T,Le)}ot&&He.render(T);for(let ve=0,Pe=ue.length;ve<Pe;ve++){const Le=ue[ve];Ls(m,T,Le,Le.viewport)}}else k.length>0&&us(j,k,T,V),ot&&He.render(T),Ls(m,T,V);D!==null&&(P.updateMultisampleRenderTarget(D),P.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(w,T,V),mt.resetDefaultState(),y=-1,M=null,R.pop(),R.length>0?(h=R[R.length-1],$===!0&&he.setGlobalState(w.clippingPlanes,h.state.camera)):h=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function ls(T,V,Y,j){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){j&&je.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ge);const ve=se.update(T),Pe=T.material;Pe.visible&&m.push(T,ve,Pe,Y,je.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){const ve=se.update(T),Pe=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),je.copy(T.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),je.copy(ve.boundingSphere.center)),je.applyMatrix4(T.matrixWorld).applyMatrix4(ge)),Array.isArray(Pe)){const Le=ve.groups;for(let Xe=0,$e=Le.length;Xe<$e;Xe++){const Ie=Le[Xe],lt=Pe[Ie.materialIndex];lt&&lt.visible&&m.push(T,ve,lt,Y,je.z,Ie)}}else Pe.visible&&m.push(T,ve,Pe,Y,je.z,null)}}const ue=T.children;for(let ve=0,Pe=ue.length;ve<Pe;ve++)ls(ue[ve],V,Y,j)}function Ls(T,V,Y,j){const k=T.opaque,ue=T.transmissive,ve=T.transparent;h.setupLightsView(Y),$===!0&&he.setGlobalState(w.clippingPlanes,Y),j&&Ve.viewport(L.copy(j)),k.length>0&&yi(k,V,Y),ue.length>0&&yi(ue,V,Y),ve.length>0&&yi(ve,V,Y),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function us(T,V,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[j.id]===void 0&&(h.state.transmissionRenderTarget[j.id]=new Mi(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?ws:Fn,minFilter:Dn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const ue=h.state.transmissionRenderTarget[j.id],ve=j.viewport||L;ue.setSize(ve.z,ve.w);const Pe=w.getRenderTarget();w.setRenderTarget(ue),w.getClearColor(Z),Q=w.getClearAlpha(),Q<1&&w.setClearColor(16777215,.5),w.clear(),ot&&He.render(Y);const Le=w.toneMapping;w.toneMapping=Qn;const Xe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),h.setupLightsView(j),$===!0&&he.setGlobalState(w.clippingPlanes,j),yi(T,Y,j),P.updateMultisampleRenderTarget(ue),P.updateRenderTargetMipmap(ue),nt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ie=0,lt=V.length;Ie<lt;Ie++){const gt=V[Ie],vt=gt.object,Rt=gt.geometry,ht=gt.material,Ne=gt.group;if(ht.side===_n&&vt.layers.test(j.layers)){const ln=ht.side;ht.side=Kt,ht.needsUpdate=!0,hs(vt,Y,j,Rt,ht,Ne),ht.side=ln,ht.needsUpdate=!0,$e=!0}}$e===!0&&(P.updateMultisampleRenderTarget(ue),P.updateRenderTargetMipmap(ue))}w.setRenderTarget(Pe),w.setClearColor(Z,Q),Xe!==void 0&&(j.viewport=Xe),w.toneMapping=Le}function yi(T,V,Y){const j=V.isScene===!0?V.overrideMaterial:null;for(let k=0,ue=T.length;k<ue;k++){const ve=T[k],Pe=ve.object,Le=ve.geometry,Xe=j===null?ve.material:j,$e=ve.group;Pe.layers.test(Y.layers)&&hs(Pe,V,Y,Le,Xe,$e)}}function hs(T,V,Y,j,k,ue){T.onBeforeRender(w,V,Y,j,k,ue),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(w,V,Y,j,T,ue),k.transparent===!0&&k.side===_n&&k.forceSinglePass===!1?(k.side=Kt,k.needsUpdate=!0,w.renderBufferDirect(Y,V,j,k,T,ue),k.side=Mn,k.needsUpdate=!0,w.renderBufferDirect(Y,V,j,k,T,ue),k.side=_n):w.renderBufferDirect(Y,V,j,k,T,ue),T.onAfterRender(w,V,Y,j,k,ue)}function Si(T,V,Y){V.isScene!==!0&&(V=yt);const j=ke.get(T),k=h.state.lights,ue=h.state.shadowsArray,ve=k.state.version,Pe=De.getParameters(T,k.state,ue,V,Y),Le=De.getProgramCacheKey(Pe);let Xe=j.programs;j.environment=T.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(T.isMeshStandardMaterial?q:S).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",Ke),Xe=new Map,j.programs=Xe);let $e=Xe.get(Le);if($e!==void 0){if(j.currentProgram===$e&&j.lightsStateVersion===ve)return Ds(T,Pe),$e}else Pe.uniforms=De.getUniforms(T),T.onBeforeCompile(Pe,w),$e=De.acquireProgram(Pe,Le),Xe.set(Le,$e),j.uniforms=Pe.uniforms;const Ie=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=he.uniform),Ds(T,Pe),j.needsLights=kr(T),j.lightsStateVersion=ve,j.needsLights&&(Ie.ambientLightColor.value=k.state.ambient,Ie.lightProbe.value=k.state.probe,Ie.directionalLights.value=k.state.directional,Ie.directionalLightShadows.value=k.state.directionalShadow,Ie.spotLights.value=k.state.spot,Ie.spotLightShadows.value=k.state.spotShadow,Ie.rectAreaLights.value=k.state.rectArea,Ie.ltc_1.value=k.state.rectAreaLTC1,Ie.ltc_2.value=k.state.rectAreaLTC2,Ie.pointLights.value=k.state.point,Ie.pointLightShadows.value=k.state.pointShadow,Ie.hemisphereLights.value=k.state.hemi,Ie.directionalShadowMap.value=k.state.directionalShadowMap,Ie.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ie.spotShadowMap.value=k.state.spotShadowMap,Ie.spotLightMatrix.value=k.state.spotLightMatrix,Ie.spotLightMap.value=k.state.spotLightMap,Ie.pointShadowMap.value=k.state.pointShadowMap,Ie.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=$e,j.uniformsList=null,$e}function Is(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=gr.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function Ds(T,V){const Y=ke.get(T);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function Or(T,V,Y,j,k){V.isScene!==!0&&(V=yt),P.resetTextureUnits();const ue=V.fog,ve=j.isMeshStandardMaterial?V.environment:null,Pe=D===null?w.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ts,Le=(j.isMeshStandardMaterial?q:S).get(j.envMap||ve),Xe=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,$e=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ie=!!Y.morphAttributes.position,lt=!!Y.morphAttributes.normal,gt=!!Y.morphAttributes.color;let vt=Qn;j.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(vt=w.toneMapping);const Rt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ht=Rt!==void 0?Rt.length:0,Ne=ke.get(j),ln=h.state.lights;if($===!0&&(te===!0||T!==M)){const zt=T===M&&j.id===y;he.setState(j,T,zt)}let ut=!1;j.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==ln.state.version||Ne.outputColorSpace!==Pe||k.isBatchedMesh&&Ne.batching===!1||!k.isBatchedMesh&&Ne.batching===!0||k.isBatchedMesh&&Ne.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ne.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ne.instancing===!1||!k.isInstancedMesh&&Ne.instancing===!0||k.isSkinnedMesh&&Ne.skinning===!1||!k.isSkinnedMesh&&Ne.skinning===!0||k.isInstancedMesh&&Ne.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ne.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ne.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ne.instancingMorph===!1&&k.morphTexture!==null||Ne.envMap!==Le||j.fog===!0&&Ne.fog!==ue||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==he.numPlanes||Ne.numIntersection!==he.numIntersection)||Ne.vertexAlphas!==Xe||Ne.vertexTangents!==$e||Ne.morphTargets!==Ie||Ne.morphNormals!==lt||Ne.morphColors!==gt||Ne.toneMapping!==vt||Ne.morphTargetsCount!==ht)&&(ut=!0):(ut=!0,Ne.__version=j.version);let Zt=Ne.currentProgram;ut===!0&&(Zt=Si(j,V,k));let Bn=!1,kt=!1,kn=!1;const qe=Zt.getUniforms(),qt=Ne.uniforms;if(Ve.useProgram(Zt.program)&&(Bn=!0,kt=!0,kn=!0),j.id!==y&&(y=j.id,kt=!0),Bn||M!==T){Ve.buffers.depth.getReversed()?(ne.copy(T.projectionMatrix),_h(ne),vh(ne),qe.setValue(G,"projectionMatrix",ne)):qe.setValue(G,"projectionMatrix",T.projectionMatrix),qe.setValue(G,"viewMatrix",T.matrixWorldInverse);const un=qe.map.cameraPosition;un!==void 0&&un.setValue(G,Oe.setFromMatrixPosition(T.matrixWorld)),it.logarithmicDepthBuffer&&qe.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&qe.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,kt=!0,kn=!0)}if(k.isSkinnedMesh){qe.setOptional(G,k,"bindMatrix"),qe.setOptional(G,k,"bindMatrixInverse");const zt=k.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),qe.setValue(G,"boneTexture",zt.boneTexture,P))}k.isBatchedMesh&&(qe.setOptional(G,k,"batchingTexture"),qe.setValue(G,"batchingTexture",k._matricesTexture,P),qe.setOptional(G,k,"batchingIdTexture"),qe.setValue(G,"batchingIdTexture",k._indirectTexture,P),qe.setOptional(G,k,"batchingColorTexture"),k._colorsTexture!==null&&qe.setValue(G,"batchingColorTexture",k._colorsTexture,P));const oi=Y.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&We.update(k,Y,Zt),(kt||Ne.receiveShadow!==k.receiveShadow)&&(Ne.receiveShadow=k.receiveShadow,qe.setValue(G,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(qt.envMap.value=Le,qt.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&(qt.envMapIntensity.value=V.environmentIntensity),kt&&(qe.setValue(G,"toneMappingExposure",w.toneMappingExposure),Ne.needsLights&&Br(qt,kn),ue&&j.fog===!0&&xe.refreshFogUniforms(qt,ue),xe.refreshMaterialUniforms(qt,j,W,ee,h.state.transmissionRenderTarget[T.id]),gr.upload(G,Is(Ne),qt,P)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(gr.upload(G,Is(Ne),qt,P),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&qe.setValue(G,"center",k.center),qe.setValue(G,"modelViewMatrix",k.modelViewMatrix),qe.setValue(G,"normalMatrix",k.normalMatrix),qe.setValue(G,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const zt=j.uniformsGroups;for(let un=0,rn=zt.length;un<rn;un++){const ci=zt[un];z.update(ci,Zt),z.bind(ci,Zt)}}return Zt}function Br(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function kr(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,V,Y){ke.get(T.texture).__webglTexture=V,ke.get(T.depthTexture).__webglTexture=Y;const j=ke.get(T);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Y===void 0,j.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,V){const Y=ke.get(T);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,Y=0){D=T,N=V,I=Y;let j=!0,k=null,ue=!1,ve=!1;if(T){const Le=ke.get(T);if(Le.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(G.FRAMEBUFFER,null),j=!1;else if(Le.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(Le.__hasExternalTextures)P.rebindTextures(T,ke.get(T.texture).__webglTexture,ke.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ie=T.depthTexture;if(Le.__boundDepthTexture!==Ie){if(Ie!==null&&ke.has(Ie)&&(T.width!==Ie.image.width||T.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ve=!0);const $e=ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray($e[V])?k=$e[V][Y]:k=$e[V],ue=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?k=ke.get(T).__webglMultisampledFramebuffer:Array.isArray($e)?k=$e[Y]:k=$e,L.copy(T.viewport),B.copy(T.scissor),H=T.scissorTest}else L.copy(fe).multiplyScalar(W).floor(),B.copy(we).multiplyScalar(W).floor(),H=Ee;if(Ve.bindFramebuffer(G.FRAMEBUFFER,k)&&j&&Ve.drawBuffers(T,k),Ve.viewport(L),Ve.scissor(B),Ve.setScissorTest(H),ue){const Le=ke.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+V,Le.__webglTexture,Y)}else if(ve){const Le=ke.get(T.texture),Xe=V||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Le.__webglTexture,Y||0,Xe)}y=-1},this.readRenderTargetPixels=function(T,V,Y,j,k,ue,ve){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Pe=Pe[ve]),Pe){Ve.bindFramebuffer(G.FRAMEBUFFER,Pe);try{const Le=T.texture,Xe=Le.format,$e=Le.type;if(!it.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-j&&Y>=0&&Y<=T.height-k&&G.readPixels(V,Y,j,k,Ze.convert(Xe),Ze.convert($e),ue)}finally{const Le=D!==null?ke.get(D).__webglFramebuffer:null;Ve.bindFramebuffer(G.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(T,V,Y,j,k,ue,ve){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Pe=Pe[ve]),Pe){const Le=T.texture,Xe=Le.format,$e=Le.type;if(!it.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=T.width-j&&Y>=0&&Y<=T.height-k){Ve.bindFramebuffer(G.FRAMEBUFFER,Pe);const Ie=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ie),G.bufferData(G.PIXEL_PACK_BUFFER,ue.byteLength,G.STREAM_READ),G.readPixels(V,Y,j,k,Ze.convert(Xe),Ze.convert($e),0);const lt=D!==null?ke.get(D).__webglFramebuffer:null;Ve.bindFramebuffer(G.FRAMEBUFFER,lt);const gt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await gh(G,gt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ie),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,ue),G.deleteBuffer(Ie),G.deleteSync(gt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,V=null,Y=0){T.isTexture!==!0&&(vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1]);const j=Math.pow(2,-Y),k=Math.floor(T.image.width*j),ue=Math.floor(T.image.height*j),ve=V!==null?V.x:0,Pe=V!==null?V.y:0;P.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,Y,0,0,ve,Pe,k,ue),Ve.unbindTexture()},this.copyTextureToTexture=function(T,V,Y=null,j=null,k=0){T.isTexture!==!0&&(vs("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,T=arguments[1],V=arguments[2],k=arguments[3]||0,Y=null);let ue,ve,Pe,Le,Xe,$e,Ie,lt,gt;const vt=T.isCompressedTexture?T.mipmaps[k]:T.image;Y!==null?(ue=Y.max.x-Y.min.x,ve=Y.max.y-Y.min.y,Pe=Y.isBox3?Y.max.z-Y.min.z:1,Le=Y.min.x,Xe=Y.min.y,$e=Y.isBox3?Y.min.z:0):(ue=vt.width,ve=vt.height,Pe=vt.depth||1,Le=0,Xe=0,$e=0),j!==null?(Ie=j.x,lt=j.y,gt=j.z):(Ie=0,lt=0,gt=0);const Rt=Ze.convert(V.format),ht=Ze.convert(V.type);let Ne;V.isData3DTexture?(P.setTexture3D(V,0),Ne=G.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(P.setTexture2DArray(V,0),Ne=G.TEXTURE_2D_ARRAY):(P.setTexture2D(V,0),Ne=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,V.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,V.unpackAlignment);const ln=G.getParameter(G.UNPACK_ROW_LENGTH),ut=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Zt=G.getParameter(G.UNPACK_SKIP_PIXELS),Bn=G.getParameter(G.UNPACK_SKIP_ROWS),kt=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,vt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,vt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Le),G.pixelStorei(G.UNPACK_SKIP_ROWS,Xe),G.pixelStorei(G.UNPACK_SKIP_IMAGES,$e);const kn=T.isDataArrayTexture||T.isData3DTexture,qe=V.isDataArrayTexture||V.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const qt=ke.get(T),oi=ke.get(V),zt=ke.get(qt.__renderTarget),un=ke.get(oi.__renderTarget);Ve.bindFramebuffer(G.READ_FRAMEBUFFER,zt.__webglFramebuffer),Ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let rn=0;rn<Pe;rn++)kn&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ke.get(T).__webglTexture,k,$e+rn),T.isDepthTexture?(qe&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ke.get(V).__webglTexture,k,gt+rn),G.blitFramebuffer(Le,Xe,ue,ve,Ie,lt,ue,ve,G.DEPTH_BUFFER_BIT,G.NEAREST)):qe?G.copyTexSubImage3D(Ne,k,Ie,lt,gt+rn,Le,Xe,ue,ve):G.copyTexSubImage2D(Ne,k,Ie,lt,gt+rn,Le,Xe,ue,ve);Ve.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else qe?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(Ne,k,Ie,lt,gt,ue,ve,Pe,Rt,ht,vt.data):V.isCompressedArrayTexture?G.compressedTexSubImage3D(Ne,k,Ie,lt,gt,ue,ve,Pe,Rt,vt.data):G.texSubImage3D(Ne,k,Ie,lt,gt,ue,ve,Pe,Rt,ht,vt):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,k,Ie,lt,ue,ve,Rt,ht,vt.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,k,Ie,lt,vt.width,vt.height,Rt,vt.data):G.texSubImage2D(G.TEXTURE_2D,k,Ie,lt,ue,ve,Rt,ht,vt);G.pixelStorei(G.UNPACK_ROW_LENGTH,ln),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ut),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Zt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Bn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,kt),k===0&&V.generateMipmaps&&G.generateMipmap(Ne),Ve.unbindTexture()},this.copyTextureToTexture3D=function(T,V,Y=null,j=null,k=0){return T.isTexture!==!0&&(vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,j=arguments[1]||null,T=arguments[2],V=arguments[3],k=arguments[4]||0),vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,V,Y,j,k)},this.initRenderTarget=function(T){ke.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),Ve.unbindTexture()},this.resetState=function(){N=0,I=0,D=null,Ve.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}class Ro{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=n}clone(){return new Ro(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Hl extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Oc=new O,Bc=new pt,kc=new pt,Cg=new O,zc=new Ye,ir=new O,ma=new ss,Vc=new Ye,ga=new Lr;class Pg extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bo,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new is),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ir),this.boundingBox.expandByPoint(ir)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ss),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ir),this.boundingSphere.expandByPoint(ir)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(s),e.ray.intersectsSphere(ma)!==!1&&(Vc.copy(s).invert(),ga.copy(e.ray).applyMatrix4(Vc),!(this.boundingBox!==null&&ga.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ga)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Bo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Bc.fromBufferAttribute(s.attributes.skinIndex,e),kc.fromBufferAttribute(s.attributes.skinWeight,e),Oc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=kc.getComponent(r);if(a!==0){const o=Bc.getComponent(r);zc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Cg.copy(Oc).applyMatrix4(zc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Gl extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wl extends Ut{constructor(e=null,t=1,n=1,s,r,a,o,l,c=tn,u=tn,d,f){super(null,a,o,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hc=new Ye,Lg=new Ye;class Co{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Lg;Hc.multiplyMatrices(o,t[r]),Hc.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Co(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Wl(t,e,e,on,vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Gl),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class fo extends ri{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mr=new O,yr=new O,Gc=new Ye,gs=new Lr,sr=new ss,_a=new O,Wc=new O;class Xl extends Ct{constructor(e=new sn,t=new fo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Mr.fromBufferAttribute(t,s-1),yr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Mr.distanceTo(yr);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(s),sr.radius+=r,e.ray.intersectsSphere(sr)===!1)return;Gc.copy(s).invert(),gs.copy(e.ray).applyMatrix4(Gc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let x=p,m=v-1;x<m;x+=c){const h=u.getX(x),C=u.getX(x+1),R=rr(this,e,gs,l,h,C);R&&t.push(R)}if(this.isLineLoop){const x=u.getX(v-1),m=u.getX(p),h=rr(this,e,gs,l,x,m);h&&t.push(h)}}else{const p=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let x=p,m=v-1;x<m;x+=c){const h=rr(this,e,gs,l,x,x+1);h&&t.push(h)}if(this.isLineLoop){const x=rr(this,e,gs,l,v-1,p);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function rr(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(Mr.fromBufferAttribute(a,s),yr.fromBufferAttribute(a,r),t.distanceSqToSegment(Mr,yr,_a,Wc)>n)return;_a.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(_a);if(!(l<e.near||l>e.far))return{distance:l,point:Wc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Xc=new O,qc=new O;class Ig extends Xl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Xc.fromBufferAttribute(t,s),qc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xc.distanceTo(qc);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dg extends Ut{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ts extends sn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],p=[];let v=0;const x=[],m=n/2;let h=0;C(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new Et(d,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(p,2));function C(){const w=new O,U=new O;let N=0;const I=(t-e)/n;for(let D=0;D<=r;D++){const y=[],M=D/r,L=M*(t-e)+e;for(let B=0;B<=s;B++){const H=B/s,Z=H*l+o,Q=Math.sin(Z),F=Math.cos(Z);U.x=L*Q,U.y=-M*n+m,U.z=L*F,d.push(U.x,U.y,U.z),w.set(Q,I,F).normalize(),f.push(w.x,w.y,w.z),p.push(H,1-M),y.push(v++)}x.push(y)}for(let D=0;D<s;D++)for(let y=0;y<r;y++){const M=x[y][D],L=x[y+1][D],B=x[y+1][D+1],H=x[y][D+1];(e>0||y!==0)&&(u.push(M,L,H),N+=3),(t>0||y!==r-1)&&(u.push(L,B,H),N+=3)}c.addGroup(h,N,0),h+=N}function R(w){const U=v,N=new at,I=new O;let D=0;const y=w===!0?e:t,M=w===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),v++;const L=v;for(let B=0;B<=s;B++){const Z=B/s*l+o,Q=Math.cos(Z),F=Math.sin(Z);I.x=y*F,I.y=m*M,I.z=y*Q,d.push(I.x,I.y,I.z),f.push(0,M,0),N.x=Q*.5+.5,N.y=F*.5*M+.5,p.push(N.x,N.y),v++}for(let B=0;B<s;B++){const H=U+B,Z=L+B;w===!0?u.push(Z,Z+1,H):u.push(Z+1,Z,H),D+=3}c.addGroup(h,D,w===!0?1:2),h+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dr extends sn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new O,f=new O,p=[],v=[],x=[],m=[];for(let h=0;h<=n;h++){const C=[],R=h/n;let w=0;h===0&&a===0?w=.5/t:h===n&&l===Math.PI&&(w=-.5/t);for(let U=0;U<=t;U++){const N=U/t;d.x=-e*Math.cos(s+N*r)*Math.sin(a+R*o),d.y=e*Math.cos(a+R*o),d.z=e*Math.sin(s+N*r)*Math.sin(a+R*o),v.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(N+w,1-R),C.push(c++)}u.push(C)}for(let h=0;h<n;h++)for(let C=0;C<t;C++){const R=u[h][C+1],w=u[h][C],U=u[h+1][C],N=u[h+1][C+1];(h!==0||a>0)&&p.push(R,w,N),(h!==n-1||l<Math.PI)&&p.push(w,U,N)}this.setIndex(p),this.setAttribute("position",new Et(v,3)),this.setAttribute("normal",new Et(x,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ng extends ri{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cr,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ei extends ri{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Je(16777215),this.specular=new Je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cr,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=Ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ug extends ri{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cr,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=Ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ar(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Fg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Og(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Yc(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function ql(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Nr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Bg extends Nr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ko,endingEnd:ko}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zo:r=e,o=2*t-n;break;case Vo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zo:a=e,l=2*n-t;break;case Vo:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,v=(n-t)/(s-t),x=v*v,m=x*v,h=-f*m+2*f*x-f*v,C=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*v+1,R=(-1-p)*m+(1.5+p)*x+.5*v,w=p*m-p*x;for(let U=0;U!==o;++U)r[U]=h*a[u+U]+C*a[c+U]+R*a[l+U]+w*a[d+U];return r}}class kg extends Nr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),d=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*u;return r}}class zg extends Nr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Sn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ar(t,this.TimeBufferType),this.values=ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ar(e.times,Array),values:ar(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case uo:t=this.InterpolantFactoryMethodLinear;break;case Vr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return uo;case this.InterpolantFactoryMethodSmooth:return Vr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Fg(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vr,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const d=o*n,f=d-n,p=d+n;for(let v=0;v!==n;++v){const x=t[d+v];if(x!==t[f+v]||x!==t[p+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=uo;class as extends Sn{constructor(e,t,n){super(e,t,n)}}as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=vr;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;class Yl extends Sn{}Yl.prototype.ValueTypeName="color";class Sr extends Sn{}Sr.prototype.ValueTypeName="number";class Vg extends Nr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)yn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Rs extends Sn{InterpolantFactoryMethodLinear(e){return new Vg(this.times,this.values,this.getValueSize(),e)}}Rs.prototype.ValueTypeName="quaternion";Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class os extends Sn{constructor(e,t,n){super(e,t,n)}}os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=vr;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;class es extends Sn{}es.prototype.ValueTypeName="vector";class jc{constructor(e="",t=-1,n=[],s=Hu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=si(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Gg(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Sn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=Og(l);l=Yc(l,1,u),c=Yc(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Sr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let f=s[d];f||(s[d]=f=[]),f.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,f,p,v,x){if(p.length!==0){const m=[],h=[];ql(p,m,h,v),m.length!==0&&x.push(new d(f,m,h))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let v;for(v=0;v<f.length;v++)if(f[v].morphTargets)for(let x=0;x<f[v].morphTargets.length;x++)p[f[v].morphTargets[x]]=-1;for(const x in p){const m=[],h=[];for(let C=0;C!==f[v].morphTargets.length;++C){const R=f[v];m.push(R.time),h.push(R.morphTarget===x?1:0)}s.push(new Sr(".morphTargetInfluence["+x+"]",m,h))}l=p.length*a}else{const p=".bones["+t[d].name+"]";n(es,p+".position",f,"pos",s),n(Rs,p+".quaternion",f,"rot",s),n(es,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Hg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Sr;case"vector":case"vector2":case"vector3":case"vector4":return es;case"color":return Yl;case"quaternion":return Rs;case"bool":case"boolean":return as;case"string":return os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Gg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Hg(i.type);if(i.times===void 0){const t=[],n=[];ql(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Er={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Wg{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const jl=new Wg;class ii{constructor(e){this.manager=e!==void 0?e:jl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ii.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pn={};class Xg extends Error{constructor(e,t){super(e),this.response=t}}class Po extends ii{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Er.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Pn[e]!==void 0){Pn[e].push({onLoad:t,onProgress:n,onError:s});return}Pn[e]=[],Pn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Pn[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,v=p!==0;let x=0;const m=new ReadableStream({start(h){C();function C(){d.read().then(({done:R,value:w})=>{if(R)h.close();else{x+=w.byteLength;const U=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:p});for(let N=0,I=u.length;N<I;N++){const D=u[N];D.onProgress&&D.onProgress(U)}h.enqueue(w),C()}},R=>{h.error(R)})}}});return new Response(m)}else throw new Xg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(v=>p.decode(v))}}}).then(c=>{Er.add(e,c);const u=Pn[e];delete Pn[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Pn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Pn[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class qg extends ii{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Er.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=bs("img");function l(){u(),Er.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Yg extends ii{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Wl,o=new Po(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:mn,a.wrapT=c.wrapT!==void 0?c.wrapT:mn,a.magFilter=c.magFilter!==void 0?c.magFilter:en,a.minFilter=c.minFilter!==void 0?c.minFilter:en,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Dn),c.mipmapCount===1&&(a.minFilter=en),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,s),a}}class Kl extends ii{constructor(e){super(e)}load(e,t,n,s){const r=new Ut,a=new qg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ur extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const va=new Ye,Kc=new O,$c=new O;class Lo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kc),$c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($c),t.updateMatrixWorld(),va.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(va)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jg extends Lo{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ji*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Kg extends Ur{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new jg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Zc=new Ye,_s=new O,xa=new O;class $g extends Lo{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_s.setFromMatrixPosition(e.matrixWorld),n.position.copy(_s),xa.copy(n.position),xa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xa),n.updateMatrixWorld(),s.makeTranslation(-_s.x,-_s.y,-_s.z),Zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc)}}class Zg extends Ur{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $g}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Jg extends Lo{constructor(){super(new wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $l extends Ur{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Jg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zl extends Ur{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jl{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Qg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Jc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Jc(){return performance.now()}const Qc=new Ye;class e_{constructor(e,t,n=0,s=1/0){this.ray=new Lr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qc),this}intersectObject(e,t=!0,n=[]){return po(e,this,n,t),n.sort(el),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)po(e[s],this,n,t);return n.sort(el),n}}function el(i,e){return i.distance-e.distance}function po(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)po(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=go);class t_ extends EventTarget{constructor(){super(),this.ws=null,this.connected=!1,this.debugMode=!1,this._reconnectTimer=null,this._url=null}connect(e){this._url=e,this._tryConnect()}_tryConnect(){this.ws&&this.ws.close(),this.ws=new WebSocket(this._url),this.ws.onopen=()=>{this.connected=!0,this.dispatchEvent(new Event("connected")),console.log("[WS] Connected")},this.ws.onclose=()=>{this.connected=!1,this.dispatchEvent(new Event("disconnected")),console.log("[WS] Disconnected, reconnecting in 2s..."),this._reconnectTimer=setTimeout(()=>this._tryConnect(),2e3)},this.ws.onerror=e=>{console.warn("[WS] Error:",e)},this.ws.onmessage=e=>{try{const t=JSON.parse(e.data);t.type==="game_config"?(this.debugMode=t.debug,this.dispatchEvent(new CustomEvent("config",{detail:t}))):t.type==="position"&&this.dispatchEvent(new CustomEvent("position",{detail:t}))}catch{console.warn("[WS] Bad message:",e.data)}}}send(e){this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(e))}disconnect(){clearTimeout(this._reconnectTimer),this.ws&&this.ws.close()}}const br=Math.PI/180,Ma=3,n_=1.5,i_=.8,ya=new O(0,1.25,0),tl=-85*br,nl=80*br,il=.003,sl=new O;new O(0,1,0);const rl=new O;class s_{constructor(e,t,n=!1){this.camera=e,this.debugMode=n,this.targetYaw=0,this.targetPitch=.3,this.currentYaw=0,this.currentPitch=.3,this.smoothing=n?.5:.15,n&&(this._locked=!1,t.domElement.addEventListener("click",()=>{this._locked||t.domElement.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this._locked=document.pointerLockElement===t.domElement}),document.addEventListener("mousemove",s=>{this._locked&&(this.targetYaw-=s.movementX*il,this.targetPitch+=s.movementY*il,this.targetPitch=Kn.clamp(this.targetPitch,tl,nl))}))}update(e,t){this.debugMode||(this.targetYaw=e*br,this.targetPitch=Kn.clamp(t*br,tl,nl))}get currentYawValue(){return this.currentYaw}tick(){this.currentYaw+=(this.targetYaw-this.currentYaw)*this.smoothing,this.currentPitch+=(this.targetPitch-this.currentPitch)*this.smoothing;const e=Math.cos(this.currentPitch),t=-Math.sin(this.currentYaw)*e,n=-Math.sin(this.currentPitch),s=-Math.cos(this.currentYaw)*e;this.camera.position.set(ya.x-t*Ma,ya.y-n*Ma,ya.z-s*Ma),sl.set(Math.cos(this.currentYaw),0,-Math.sin(this.currentYaw)),this.camera.position.addScaledVector(sl,n_),this.camera.position.y+=i_,this.camera.position.y=Math.max(this.camera.position.y,.5),rl.set(this.camera.position.x+t*100,this.camera.position.y+n*100,this.camera.position.z+s*100),this.camera.lookAt(rl)}}class r_ extends ii{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Po(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){function t(c){const u=new DataView(c),d=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*d===u.byteLength)return!0;const v=[115,111,108,105,100];for(let x=0;x<5;x++)if(n(v,u,x))return!1;return!0}function n(c,u,d){for(let f=0,p=c.length;f<p;f++)if(c[f]!==u.getUint8(d+f))return!1;return!0}function s(c){const u=new DataView(c),d=u.getUint32(80,!0);let f,p,v,x=!1,m,h,C,R,w;for(let L=0;L<70;L++)u.getUint32(L,!1)==1129270351&&u.getUint8(L+4)==82&&u.getUint8(L+5)==61&&(x=!0,m=new Float32Array(d*3*3),h=u.getUint8(L+6)/255,C=u.getUint8(L+7)/255,R=u.getUint8(L+8)/255,w=u.getUint8(L+9)/255);const U=84,N=50,I=new sn,D=new Float32Array(d*3*3),y=new Float32Array(d*3*3),M=new Je;for(let L=0;L<d;L++){const B=U+L*N,H=u.getFloat32(B,!0),Z=u.getFloat32(B+4,!0),Q=u.getFloat32(B+8,!0);if(x){const F=u.getUint16(B+48,!0);(F&32768)===0?(f=(F&31)/31,p=(F>>5&31)/31,v=(F>>10&31)/31):(f=h,p=C,v=R)}for(let F=1;F<=3;F++){const ee=B+F*12,W=L*3*3+(F-1)*3;D[W]=u.getFloat32(ee,!0),D[W+1]=u.getFloat32(ee+4,!0),D[W+2]=u.getFloat32(ee+8,!0),y[W]=H,y[W+1]=Z,y[W+2]=Q,x&&(M.setRGB(f,p,v,wt),m[W]=M.r,m[W+1]=M.g,m[W+2]=M.b)}}return I.setAttribute("position",new nn(D,3)),I.setAttribute("normal",new nn(y,3)),x&&(I.setAttribute("color",new nn(m,3)),I.hasColors=!0,I.alpha=w),I}function r(c){const u=new sn,d=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let v=0;const x=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+x+x+x,"g"),h=new RegExp("normal"+x+x+x,"g"),C=[],R=[],w=[],U=new O;let N,I=0,D=0,y=0;for(;(N=d.exec(c))!==null;){D=y;const M=N[0],L=(N=p.exec(M))!==null?N[1]:"";for(w.push(L);(N=f.exec(M))!==null;){let Z=0,Q=0;const F=N[0];for(;(N=h.exec(F))!==null;)U.x=parseFloat(N[1]),U.y=parseFloat(N[2]),U.z=parseFloat(N[3]),Q++;for(;(N=m.exec(F))!==null;)C.push(parseFloat(N[1]),parseFloat(N[2]),parseFloat(N[3])),R.push(U.x,U.y,U.z),Z++,y++;Q!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+v),Z!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+v),v++}const B=D,H=y-D;u.userData.groupNames=w,u.addGroup(B,H,I),I++}return u.setAttribute("position",new Et(C,3)),u.setAttribute("normal",new Et(R,3)),u}function a(c){return typeof c!="string"?new TextDecoder().decode(c):c}function o(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let d=0;d<c.length;d++)u[d]=c.charCodeAt(d)&255;return u.buffer||u}else return c}const l=o(e);return t(l)?s(l):r(a(e))}}class al extends Yg{constructor(e){super(e)}parse(e){function t(F){switch(F.image_type){case f:case x:if(F.colormap_length>256||F.colormap_size!==24||F.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case v:case m:case h:if(F.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case d:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+F.image_type)}if(F.width<=0||F.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(F.pixel_size!==8&&F.pixel_size!==16&&F.pixel_size!==24&&F.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+F.pixel_size)}function n(F,ee,W,oe,de){let fe,we;const Ee=W.pixel_size>>3,X=W.width*W.height*Ee;if(ee&&(we=de.subarray(oe,oe+=W.colormap_length*(W.colormap_size>>3))),F){fe=new Uint8Array(X);let $,te,ne,ge=0;const Oe=new Uint8Array(Ee);for(;ge<X;)if($=de[oe++],te=($&127)+1,$&128){for(ne=0;ne<Ee;++ne)Oe[ne]=de[oe++];for(ne=0;ne<te;++ne)fe.set(Oe,ge+ne*Ee);ge+=Ee*te}else{for(te*=Ee,ne=0;ne<te;++ne)fe[ge+ne]=de[oe++];ge+=te}}else fe=de.subarray(oe,oe+=ee?W.width*W.height:X);return{pixel_data:fe,palettes:we}}function s(F,ee,W,oe,de,fe,we,Ee,X){const $=X;let te,ne=0,ge,Oe;const je=M.width;for(Oe=ee;Oe!==oe;Oe+=W)for(ge=de;ge!==we;ge+=fe,ne++)te=Ee[ne],F[(ge+je*Oe)*4+3]=255,F[(ge+je*Oe)*4+2]=$[te*3+0],F[(ge+je*Oe)*4+1]=$[te*3+1],F[(ge+je*Oe)*4+0]=$[te*3+2];return F}function r(F,ee,W,oe,de,fe,we,Ee){let X,$=0,te,ne;const ge=M.width;for(ne=ee;ne!==oe;ne+=W)for(te=de;te!==we;te+=fe,$+=2)X=Ee[$+0]+(Ee[$+1]<<8),F[(te+ge*ne)*4+0]=(X&31744)>>7,F[(te+ge*ne)*4+1]=(X&992)>>2,F[(te+ge*ne)*4+2]=(X&31)<<3,F[(te+ge*ne)*4+3]=X&32768?0:255;return F}function a(F,ee,W,oe,de,fe,we,Ee){let X=0,$,te;const ne=M.width;for(te=ee;te!==oe;te+=W)for($=de;$!==we;$+=fe,X+=3)F[($+ne*te)*4+3]=255,F[($+ne*te)*4+2]=Ee[X+0],F[($+ne*te)*4+1]=Ee[X+1],F[($+ne*te)*4+0]=Ee[X+2];return F}function o(F,ee,W,oe,de,fe,we,Ee){let X=0,$,te;const ne=M.width;for(te=ee;te!==oe;te+=W)for($=de;$!==we;$+=fe,X+=4)F[($+ne*te)*4+2]=Ee[X+0],F[($+ne*te)*4+1]=Ee[X+1],F[($+ne*te)*4+0]=Ee[X+2],F[($+ne*te)*4+3]=Ee[X+3];return F}function l(F,ee,W,oe,de,fe,we,Ee){let X,$=0,te,ne;const ge=M.width;for(ne=ee;ne!==oe;ne+=W)for(te=de;te!==we;te+=fe,$++)X=Ee[$],F[(te+ge*ne)*4+0]=X,F[(te+ge*ne)*4+1]=X,F[(te+ge*ne)*4+2]=X,F[(te+ge*ne)*4+3]=255;return F}function c(F,ee,W,oe,de,fe,we,Ee){let X=0,$,te;const ne=M.width;for(te=ee;te!==oe;te+=W)for($=de;$!==we;$+=fe,X+=2)F[($+ne*te)*4+0]=Ee[X+0],F[($+ne*te)*4+1]=Ee[X+0],F[($+ne*te)*4+2]=Ee[X+0],F[($+ne*te)*4+3]=Ee[X+1];return F}function u(F,ee,W,oe,de){let fe,we,Ee,X,$,te;switch((M.flags&C)>>R){default:case N:fe=0,Ee=1,$=ee,we=0,X=1,te=W;break;case w:fe=0,Ee=1,$=ee,we=W-1,X=-1,te=-1;break;case I:fe=ee-1,Ee=-1,$=-1,we=0,X=1,te=W;break;case U:fe=ee-1,Ee=-1,$=-1,we=W-1,X=-1,te=-1;break}if(H)switch(M.pixel_size){case 8:l(F,we,X,te,fe,Ee,$,oe);break;case 16:c(F,we,X,te,fe,Ee,$,oe);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(M.pixel_size){case 8:s(F,we,X,te,fe,Ee,$,oe,de);break;case 16:r(F,we,X,te,fe,Ee,$,oe);break;case 24:a(F,we,X,te,fe,Ee,$,oe);break;case 32:o(F,we,X,te,fe,Ee,$,oe);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return F}const d=0,f=1,p=2,v=3,x=9,m=10,h=11,C=48,R=4,w=0,U=1,N=2,I=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let D=0;const y=new Uint8Array(e),M={id_length:y[D++],colormap_type:y[D++],image_type:y[D++],colormap_index:y[D++]|y[D++]<<8,colormap_length:y[D++]|y[D++]<<8,colormap_size:y[D++],origin:[y[D++]|y[D++]<<8,y[D++]|y[D++]<<8],width:y[D++]|y[D++]<<8,height:y[D++]|y[D++]<<8,pixel_size:y[D++],flags:y[D++]};if(t(M),M.id_length+D>e.length)throw new Error("THREE.TGALoader: No data.");D+=M.id_length;let L=!1,B=!1,H=!1;switch(M.image_type){case x:L=!0,B=!0;break;case f:B=!0;break;case m:L=!0;break;case p:break;case h:L=!0,H=!0;break;case v:H=!0;break}const Z=new Uint8Array(M.width*M.height*4),Q=n(L,B,M,D,y);return u(Z,M.width,M.height,Q.pixel_data,Q.palettes),{data:Z,width:M.width,height:M.height,flipY:!0,generateMipmaps:!0,minFilter:Dn}}}class a_ extends ii{load(e,t,n,s){const r=this,a=r.path===""?Jl.extractUrlBase(e):r.path,o=new Po(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(l){try{t(r.parse(l,a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}parse(e,t){function n(_,g){const b=[],E=_.childNodes;for(let A=0,K=E.length;A<K;A++){const ie=E[A];ie.nodeName===g&&b.push(ie)}return b}function s(_){if(_.length===0)return[];const g=_.trim().split(/\s+/),b=new Array(g.length);for(let E=0,A=g.length;E<A;E++)b[E]=g[E];return b}function r(_){if(_.length===0)return[];const g=_.trim().split(/\s+/),b=new Array(g.length);for(let E=0,A=g.length;E<A;E++)b[E]=parseFloat(g[E]);return b}function a(_){if(_.length===0)return[];const g=_.trim().split(/\s+/),b=new Array(g.length);for(let E=0,A=g.length;E<A;E++)b[E]=parseInt(g[E]);return b}function o(_){return _.substring(1)}function l(){return"three_default_"+cu++}function c(_){return Object.keys(_).length===0}function u(_){return{unit:d(n(_,"unit")[0]),upAxis:f(n(_,"up_axis")[0])}}function d(_){return _!==void 0&&_.hasAttribute("meter")===!0?parseFloat(_.getAttribute("meter")):1}function f(_){return _!==void 0?_.textContent:"Y_UP"}function p(_,g,b,E){const A=n(_,g)[0];if(A!==void 0){const K=n(A,b);for(let ie=0;ie<K.length;ie++)E(K[ie])}}function v(_,g){for(const b in _){const E=_[b];E.build=g(_[b])}}function x(_,g){return _.build!==void 0||(_.build=g(_)),_.build}function m(_){const g={sources:{},samplers:{},channels:{}};let b=!1;for(let E=0,A=_.childNodes.length;E<A;E++){const K=_.childNodes[E];if(K.nodeType!==1)continue;let ie;switch(K.nodeName){case"source":ie=K.getAttribute("id"),g.sources[ie]=J(K);break;case"sampler":ie=K.getAttribute("id"),g.samplers[ie]=h(K);break;case"channel":ie=K.getAttribute("target"),g.channels[ie]=C(K);break;case"animation":m(K),b=!0;break;default:console.log(K)}}b===!1&&(Ge.animations[_.getAttribute("id")||Kn.generateUUID()]=g)}function h(_){const g={inputs:{}};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"input":const K=o(A.getAttribute("source")),ie=A.getAttribute("semantic");g.inputs[ie]=K;break}}return g}function C(_){const g={};let E=_.getAttribute("target").split("/");const A=E.shift();let K=E.shift();const ie=K.indexOf("(")!==-1,be=K.indexOf(".")!==-1;if(be)E=K.split("."),K=E.shift(),g.member=E.shift();else if(ie){const pe=K.split("(");K=pe.shift();for(let ye=0;ye<pe.length;ye++)pe[ye]=parseInt(pe[ye].replace(/\)/,""));g.indices=pe}return g.id=A,g.sid=K,g.arraySyntax=ie,g.memberSyntax=be,g.sampler=o(_.getAttribute("source")),g}function R(_){const g=[],b=_.channels,E=_.samplers,A=_.sources;for(const K in b)if(b.hasOwnProperty(K)){const ie=b[K],be=E[ie.sampler],pe=be.inputs.INPUT,ye=be.inputs.OUTPUT,Fe=A[pe],le=A[ye],Ue=U(ie,Fe,le);M(Ue,g)}return g}function w(_){return x(Ge.animations[_],R)}function U(_,g,b){const E=Ge.nodes[_.id],A=Rt(E.id),K=E.transforms[_.sid],ie=E.matrix.clone().transpose();let be,pe,ye,Fe,le,Ue;const Ce={};switch(K){case"matrix":for(ye=0,Fe=g.array.length;ye<Fe;ye++)if(be=g.array[ye],pe=ye*b.stride,Ce[be]===void 0&&(Ce[be]={}),_.arraySyntax===!0){const Tt=b.array[pe],_t=_.indices[0]+4*_.indices[1];Ce[be][_t]=Tt}else for(le=0,Ue=b.stride;le<Ue;le++)Ce[be][le]=b.array[pe+le];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',K);break}const ze=N(Ce,ie);return{name:A.uuid,keyframes:ze}}function N(_,g){const b=[];for(const A in _)b.push({time:parseFloat(A),value:_[A]});b.sort(E);for(let A=0;A<16;A++)L(b,A,g.elements[A]);return b;function E(A,K){return A.time-K.time}}const I=new O,D=new O,y=new yn;function M(_,g){const b=_.keyframes,E=_.name,A=[],K=[],ie=[],be=[];for(let pe=0,ye=b.length;pe<ye;pe++){const Fe=b[pe],le=Fe.time,Ue=Fe.value;k.fromArray(Ue).transpose(),k.decompose(I,y,D),A.push(le),K.push(I.x,I.y,I.z),ie.push(y.x,y.y,y.z,y.w),be.push(D.x,D.y,D.z)}return K.length>0&&g.push(new es(E+".position",A,K)),ie.length>0&&g.push(new Rs(E+".quaternion",A,ie)),be.length>0&&g.push(new es(E+".scale",A,be)),g}function L(_,g,b){let E,A=!0,K,ie;for(K=0,ie=_.length;K<ie;K++)E=_[K],E.value[g]===void 0?E.value[g]=null:A=!1;if(A===!0)for(K=0,ie=_.length;K<ie;K++)E=_[K],E.value[g]=b;else B(_,g)}function B(_,g){let b,E;for(let A=0,K=_.length;A<K;A++){const ie=_[A];if(ie.value[g]===null){if(b=H(_,A,g),E=Z(_,A,g),b===null){ie.value[g]=E.value[g];continue}if(E===null){ie.value[g]=b.value[g];continue}Q(ie,b,E,g)}}}function H(_,g,b){for(;g>=0;){const E=_[g];if(E.value[b]!==null)return E;g--}return null}function Z(_,g,b){for(;g<_.length;){const E=_[g];if(E.value[b]!==null)return E;g++}return null}function Q(_,g,b,E){if(b.time-g.time===0){_.value[E]=g.value[E];return}_.value[E]=(_.time-g.time)*(b.value[E]-g.value[E])/(b.time-g.time)+g.value[E]}function F(_){const g={name:_.getAttribute("id")||"default",start:parseFloat(_.getAttribute("start")||0),end:parseFloat(_.getAttribute("end")||0),animations:[]};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"instance_animation":g.animations.push(o(A.getAttribute("url")));break}}Ge.clips[_.getAttribute("id")]=g}function ee(_){const g=[],b=_.name,E=_.end-_.start||-1,A=_.animations;for(let K=0,ie=A.length;K<ie;K++){const be=w(A[K]);for(let pe=0,ye=be.length;pe<ye;pe++)g.push(be[pe])}return new jc(b,E,g)}function W(_){return x(Ge.clips[_],ee)}function oe(_){const g={};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"skin":g.id=o(A.getAttribute("source")),g.skin=de(A);break;case"morph":g.id=o(A.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Ge.controllers[_.getAttribute("id")]=g}function de(_){const g={sources:{}};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"bind_shape_matrix":g.bindShapeMatrix=r(A.textContent);break;case"source":const K=A.getAttribute("id");g.sources[K]=J(A);break;case"joints":g.joints=fe(A);break;case"vertex_weights":g.vertexWeights=we(A);break}}return g}function fe(_){const g={inputs:{}};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"input":const K=A.getAttribute("semantic"),ie=o(A.getAttribute("source"));g.inputs[K]=ie;break}}return g}function we(_){const g={inputs:{}};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"input":const K=A.getAttribute("semantic"),ie=o(A.getAttribute("source")),be=parseInt(A.getAttribute("offset"));g.inputs[K]={id:ie,offset:be};break;case"vcount":g.vcount=a(A.textContent);break;case"v":g.v=a(A.textContent);break}}return g}function Ee(_){const g={id:_.id},b=Ge.geometries[g.id];return _.skin!==void 0&&(g.skin=X(_.skin),b.sources.skinIndices=g.skin.indices,b.sources.skinWeights=g.skin.weights),g}function X(_){const b={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},E=_.sources,A=_.vertexWeights,K=A.vcount,ie=A.v,be=A.inputs.JOINT.offset,pe=A.inputs.WEIGHT.offset,ye=_.sources[_.joints.inputs.JOINT],Fe=_.sources[_.joints.inputs.INV_BIND_MATRIX],le=E[A.inputs.WEIGHT.id].array;let Ue=0,Ce,ze,Be;for(Ce=0,Be=K.length;Ce<Be;Ce++){const _t=K[Ce],dt=[];for(ze=0;ze<_t;ze++){const ft=ie[Ue+be],bn=ie[Ue+pe],Yt=le[bn];dt.push({index:ft,weight:Yt}),Ue+=2}for(dt.sort(Tt),ze=0;ze<4;ze++){const ft=dt[ze];ft!==void 0?(b.indices.array.push(ft.index),b.weights.array.push(ft.weight)):(b.indices.array.push(0),b.weights.array.push(0))}}for(_.bindShapeMatrix?b.bindMatrix=new Ye().fromArray(_.bindShapeMatrix).transpose():b.bindMatrix=new Ye().identity(),Ce=0,Be=ye.array.length;Ce<Be;Ce++){const _t=ye.array[Ce],dt=new Ye().fromArray(Fe.array,Ce*Fe.stride).transpose();b.joints.push({name:_t,boneInverse:dt})}return b;function Tt(_t,dt){return dt.weight-_t.weight}}function $(_){return x(Ge.controllers[_],Ee)}function te(_){const g={init_from:n(_,"init_from")[0].textContent};Ge.images[_.getAttribute("id")]=g}function ne(_){return _.build!==void 0?_.build:_.init_from}function ge(_){const g=Ge.images[_];return g!==void 0?x(g,ne):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",_),null)}function Oe(_){const g={};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"profile_COMMON":g.profile=je(A);break}}Ge.effects[_.getAttribute("id")]=g}function je(_){const g={surfaces:{},samplers:{}};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"newparam":yt(A,g);break;case"technique":g.technique=G(A);break;case"extra":g.extra=ke(A);break}}return g}function yt(_,g){const b=_.getAttribute("sid");for(let E=0,A=_.childNodes.length;E<A;E++){const K=_.childNodes[E];if(K.nodeType===1)switch(K.nodeName){case"surface":g.surfaces[b]=ot(K);break;case"sampler2D":g.samplers[b]=bt(K);break}}}function ot(_){const g={};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"init_from":g.init_from=A.textContent;break}}return g}function bt(_){const g={};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"source":g.source=A.textContent;break}}return g}function G(_){const g={};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"constant":case"lambert":case"blinn":case"phong":g.type=A.nodeName,g.parameters=Wt(A);break;case"extra":g.extra=ke(A);break}}return g}function Wt(_){const g={};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":g[A.nodeName]=nt(A);break;case"transparent":g[A.nodeName]={opaque:A.hasAttribute("opaque")?A.getAttribute("opaque"):"A_ONE",data:nt(A)};break}}return g}function nt(_){const g={};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"color":g[A.nodeName]=r(A.textContent);break;case"float":g[A.nodeName]=parseFloat(A.textContent);break;case"texture":g[A.nodeName]={id:A.getAttribute("texture"),extra:it(A)};break}}return g}function it(_){const g={technique:{}};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"extra":Ve(A,g);break}}return g}function Ve(_,g){for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"technique":Mt(A,g);break}}}function Mt(_,g){for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":g.technique[A.nodeName]=parseFloat(A.textContent);break;case"wrapU":case"wrapV":A.textContent.toUpperCase()==="TRUE"?g.technique[A.nodeName]=1:A.textContent.toUpperCase()==="FALSE"?g.technique[A.nodeName]=0:g.technique[A.nodeName]=parseInt(A.textContent);break;case"bump":g[A.nodeName]=S(A);break}}}function ke(_){const g={};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"technique":g.technique=P(A);break}}return g}function P(_){const g={};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"double_sided":g[A.nodeName]=parseInt(A.textContent);break;case"bump":g[A.nodeName]=S(A);break}}return g}function S(_){const g={};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"texture":g[A.nodeName]={id:A.getAttribute("texture"),texcoord:A.getAttribute("texcoord"),extra:it(A)};break}}return g}function q(_){return _}function re(_){return x(Ge.effects[_],q)}function ce(_){const g={name:_.getAttribute("name")};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"instance_effect":g.url=o(A.getAttribute("url"));break}}Ge.materials[_.getAttribute("id")]=g}function se(_){let g,b=_.slice((_.lastIndexOf(".")-1>>>0)+2);switch(b=b.toLowerCase(),b){case"tga":g=rn;break;default:g=un}return g}function De(_){const g=re(_.url),b=g.profile.technique;let E;switch(b.type){case"phong":case"blinn":E=new ei;break;case"lambert":E=new Ug;break;default:E=new $n;break}E.name=_.name||"";function A(pe,ye=null){const Fe=g.profile.samplers[pe.id];let le=null;if(Fe!==void 0){const Ue=g.profile.surfaces[Fe.source];le=ge(Ue.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),le=ge(pe.id);if(le!==null){const Ue=se(le);if(Ue!==void 0){const Ce=Ue.load(le),ze=pe.extra;if(ze!==void 0&&ze.technique!==void 0&&c(ze.technique)===!1){const Be=ze.technique;Ce.wrapS=Be.wrapU?In:mn,Ce.wrapT=Be.wrapV?In:mn,Ce.offset.set(Be.offsetU||0,Be.offsetV||0),Ce.repeat.set(Be.repeatU||1,Be.repeatV||1)}else Ce.wrapS=In,Ce.wrapT=In;return ye!==null&&(Ce.colorSpace=ye),Ce}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",le),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",pe.id),null}const K=b.parameters;for(const pe in K){const ye=K[pe];switch(pe){case"diffuse":ye.color&&E.color.fromArray(ye.color),ye.texture&&(E.map=A(ye.texture,wt));break;case"specular":ye.color&&E.specular&&E.specular.fromArray(ye.color),ye.texture&&(E.specularMap=A(ye.texture));break;case"bump":ye.texture&&(E.normalMap=A(ye.texture));break;case"ambient":ye.texture&&(E.lightMap=A(ye.texture,wt));break;case"shininess":ye.float&&E.shininess&&(E.shininess=ye.float);break;case"emission":ye.color&&E.emissive&&E.emissive.fromArray(ye.color),ye.texture&&(E.emissiveMap=A(ye.texture,wt));break}}st.toWorkingColorSpace(E.color,wt),E.specular&&st.toWorkingColorSpace(E.specular,wt),E.emissive&&st.toWorkingColorSpace(E.emissive,wt);let ie=K.transparent,be=K.transparency;if(be===void 0&&ie&&(be={float:1}),ie===void 0&&be&&(ie={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ie&&be)if(ie.data.texture)E.transparent=!0;else{const pe=ie.data.color;switch(ie.opaque){case"A_ONE":E.opacity=pe[3]*be.float;break;case"RGB_ZERO":E.opacity=1-pe[0]*be.float;break;case"A_ZERO":E.opacity=1-pe[3]*be.float;break;case"RGB_ONE":E.opacity=pe[0]*be.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ie.opaque)}E.opacity<1&&(E.transparent=!0)}if(b.extra!==void 0&&b.extra.technique!==void 0){const pe=b.extra.technique;for(const ye in pe){const Fe=pe[ye];switch(ye){case"double_sided":E.side=Fe===1?_n:Mn;break;case"bump":E.normalMap=A(Fe.texture),E.normalScale=new at(1,1);break}}}return E}function xe(_){return x(Ge.materials[_],De)}function Te(_){const g={name:_.getAttribute("name")};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"optics":g.optics=ct(A);break}}Ge.cameras[_.getAttribute("id")]=g}function ct(_){for(let g=0;g<_.childNodes.length;g++){const b=_.childNodes[g];switch(b.nodeName){case"technique_common":return he(b)}}return{}}function he(_){const g={};for(let b=0;b<_.childNodes.length;b++){const E=_.childNodes[b];switch(E.nodeName){case"perspective":case"orthographic":g.technique=E.nodeName,g.parameters=Ae(E);break}}return g}function Ae(_){const g={};for(let b=0;b<_.childNodes.length;b++){const E=_.childNodes[b];switch(E.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":g[E.nodeName]=parseFloat(E.textContent);break}}return g}function He(_){let g;switch(_.optics.technique){case"perspective":g=new Bt(_.optics.parameters.yfov,_.optics.parameters.aspect_ratio,_.optics.parameters.znear,_.optics.parameters.zfar);break;case"orthographic":let b=_.optics.parameters.ymag,E=_.optics.parameters.xmag;const A=_.optics.parameters.aspect_ratio;E=E===void 0?b*A:E,b=b===void 0?E/A:b,E*=.5,b*=.5,g=new wo(-E,E,b,-b,_.optics.parameters.znear,_.optics.parameters.zfar);break;default:g=new Bt;break}return g.name=_.name||"",g}function We(_){const g=Ge.cameras[_];return g!==void 0?x(g,He):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",_),null)}function Re(_){let g={};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"technique_common":g=rt(A);break}}Ge.lights[_.getAttribute("id")]=g}function rt(_){const g={};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"directional":case"point":case"spot":case"ambient":g.technique=A.nodeName,g.parameters=Ze(A)}}return g}function Ze(_){const g={};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"color":const K=r(A.textContent);g.color=new Je().fromArray(K),st.toWorkingColorSpace(g.color,wt);break;case"falloff_angle":g.falloffAngle=parseFloat(A.textContent);break;case"quadratic_attenuation":const ie=parseFloat(A.textContent);g.distance=ie?Math.sqrt(1/ie):0;break}}return g}function mt(_){let g;switch(_.technique){case"directional":g=new $l;break;case"point":g=new Zg;break;case"spot":g=new Kg;break;case"ambient":g=new Zl;break}return _.parameters.color&&g.color.copy(_.parameters.color),_.parameters.distance&&(g.distance=_.parameters.distance),g}function z(_){const g=Ge.lights[_];return g!==void 0?x(g,mt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",_),null)}function _e(_){const g={name:_.getAttribute("name"),sources:{},vertices:{},primitives:[]},b=n(_,"mesh")[0];if(b!==void 0){for(let E=0;E<b.childNodes.length;E++){const A=b.childNodes[E];if(A.nodeType!==1)continue;const K=A.getAttribute("id");switch(A.nodeName){case"source":g.sources[K]=J(A);break;case"vertices":g.vertices=ae(A);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",A.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":g.primitives.push(Se(A));break;default:console.log(A)}}Ge.geometries[_.getAttribute("id")]=g}}function J(_){const g={array:[],stride:3};for(let b=0;b<_.childNodes.length;b++){const E=_.childNodes[b];if(E.nodeType===1)switch(E.nodeName){case"float_array":g.array=r(E.textContent);break;case"Name_array":g.array=s(E.textContent);break;case"technique_common":const A=n(E,"accessor")[0];A!==void 0&&(g.stride=parseInt(A.getAttribute("stride")));break}}return g}function ae(_){const g={};for(let b=0;b<_.childNodes.length;b++){const E=_.childNodes[b];E.nodeType===1&&(g[E.getAttribute("semantic")]=o(E.getAttribute("source")))}return g}function Se(_){const g={type:_.nodeName,material:_.getAttribute("material"),count:parseInt(_.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let b=0,E=_.childNodes.length;b<E;b++){const A=_.childNodes[b];if(A.nodeType===1)switch(A.nodeName){case"input":const K=o(A.getAttribute("source")),ie=A.getAttribute("semantic"),be=parseInt(A.getAttribute("offset")),pe=parseInt(A.getAttribute("set")),ye=pe>0?ie+pe:ie;g.inputs[ye]={id:K,offset:be},g.stride=Math.max(g.stride,be+1),ie==="TEXCOORD"&&(g.hasUV=!0);break;case"vcount":g.vcount=a(A.textContent);break;case"p":g.p=a(A.textContent);break}}return g}function Me(_){const g={};for(let b=0;b<_.length;b++){const E=_[b];g[E.type]===void 0&&(g[E.type]=[]),g[E.type].push(E)}return g}function Ke(_){let g=0;for(let b=0,E=_.length;b<E;b++)_[b].hasUV===!0&&g++;g>0&&g<_.length&&(_.uvsNeedsFix=!0)}function St(_){const g={},b=_.sources,E=_.vertices,A=_.primitives;if(A.length===0)return{};const K=Me(A);for(const ie in K){const be=K[ie];Ke(be),g[ie]=Dt(be,b,E)}return g}function Dt(_,g,b){const E={},A={array:[],stride:0},K={array:[],stride:0},ie={array:[],stride:0},be={array:[],stride:0},pe={array:[],stride:0},ye={array:[],stride:4},Fe={array:[],stride:4},le=new sn,Ue=[];let Ce=0;for(let ze=0;ze<_.length;ze++){const Be=_[ze],Tt=Be.inputs;let _t=0;switch(Be.type){case"lines":case"linestrips":_t=Be.count*2;break;case"triangles":_t=Be.count*3;break;case"polylist":for(let dt=0;dt<Be.count;dt++){const ft=Be.vcount[dt];switch(ft){case 3:_t+=3;break;case 4:_t+=6;break;default:_t+=(ft-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",Be.type)}le.addGroup(Ce,_t,ze),Ce+=_t,Be.material&&Ue.push(Be.material);for(const dt in Tt){const ft=Tt[dt];switch(dt){case"VERTEX":for(const bn in b){const Yt=b[bn];switch(bn){case"POSITION":const Ei=A.array.length;if(Qe(Be,g[Yt],ft.offset,A.array),A.stride=g[Yt].stride,g.skinWeights&&g.skinIndices&&(Qe(Be,g.skinIndices,ft.offset,ye.array),Qe(Be,g.skinWeights,ft.offset,Fe.array)),Be.hasUV===!1&&_.uvsNeedsFix===!0){const lu=(A.array.length-Ei)/A.stride;for(let No=0;No<lu;No++)ie.array.push(0,0)}break;case"NORMAL":Qe(Be,g[Yt],ft.offset,K.array),K.stride=g[Yt].stride;break;case"COLOR":Qe(Be,g[Yt],ft.offset,pe.array),pe.stride=g[Yt].stride;break;case"TEXCOORD":Qe(Be,g[Yt],ft.offset,ie.array),ie.stride=g[Yt].stride;break;case"TEXCOORD1":Qe(Be,g[Yt],ft.offset,be.array),ie.stride=g[Yt].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',bn)}}break;case"NORMAL":Qe(Be,g[ft.id],ft.offset,K.array),K.stride=g[ft.id].stride;break;case"COLOR":Qe(Be,g[ft.id],ft.offset,pe.array,!0),pe.stride=g[ft.id].stride;break;case"TEXCOORD":Qe(Be,g[ft.id],ft.offset,ie.array),ie.stride=g[ft.id].stride;break;case"TEXCOORD1":Qe(Be,g[ft.id],ft.offset,be.array),be.stride=g[ft.id].stride;break}}}return A.array.length>0&&le.setAttribute("position",new Et(A.array,A.stride)),K.array.length>0&&le.setAttribute("normal",new Et(K.array,K.stride)),pe.array.length>0&&le.setAttribute("color",new Et(pe.array,pe.stride)),ie.array.length>0&&le.setAttribute("uv",new Et(ie.array,ie.stride)),be.array.length>0&&le.setAttribute("uv1",new Et(be.array,be.stride)),ye.array.length>0&&le.setAttribute("skinIndex",new Et(ye.array,ye.stride)),Fe.array.length>0&&le.setAttribute("skinWeight",new Et(Fe.array,Fe.stride)),E.data=le,E.type=_[0].type,E.materialKeys=Ue,E}function Qe(_,g,b,E,A=!1){const K=_.p,ie=_.stride,be=_.vcount;function pe(le){let Ue=K[le+b]*Fe;const Ce=Ue+Fe;for(;Ue<Ce;Ue++)E.push(ye[Ue]);if(A){const ze=E.length-Fe-1;ci.setRGB(E[ze+0],E[ze+1],E[ze+2],wt),E[ze+0]=ci.r,E[ze+1]=ci.g,E[ze+2]=ci.b}}const ye=g.array,Fe=g.stride;if(_.vcount!==void 0){let le=0;for(let Ue=0,Ce=be.length;Ue<Ce;Ue++){const ze=be[Ue];if(ze===4){const Be=le+ie*0,Tt=le+ie*1,_t=le+ie*2,dt=le+ie*3;pe(Be),pe(Tt),pe(dt),pe(Tt),pe(_t),pe(dt)}else if(ze===3){const Be=le+ie*0,Tt=le+ie*1,_t=le+ie*2;pe(Be),pe(Tt),pe(_t)}else if(ze>4)for(let Be=1,Tt=ze-2;Be<=Tt;Be++){const _t=le+ie*0,dt=le+ie*Be,ft=le+ie*(Be+1);pe(_t),pe(dt),pe(ft)}le+=ie*ze}}else for(let le=0,Ue=K.length;le<Ue;le+=ie)pe(le)}function Xt(_){return x(Ge.geometries[_],St)}function cn(_){const g={name:_.getAttribute("name")||"",joints:{},links:[]};for(let b=0;b<_.childNodes.length;b++){const E=_.childNodes[b];if(E.nodeType===1)switch(E.nodeName){case"technique_common":En(E,g);break}}Ge.kinematicsModels[_.getAttribute("id")]=g}function Cs(_){return _.build!==void 0?_.build:_}function Ps(_){return x(Ge.kinematicsModels[_],Cs)}function En(_,g){for(let b=0;b<_.childNodes.length;b++){const E=_.childNodes[b];if(E.nodeType===1)switch(E.nodeName){case"joint":g.joints[E.getAttribute("sid")]=ls(E);break;case"link":g.links.push(us(E));break}}}function ls(_){let g;for(let b=0;b<_.childNodes.length;b++){const E=_.childNodes[b];if(E.nodeType===1)switch(E.nodeName){case"prismatic":case"revolute":g=Ls(E);break}}return g}function Ls(_){const g={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",axis:new O,limits:{min:0,max:0},type:_.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let b=0;b<_.childNodes.length;b++){const E=_.childNodes[b];if(E.nodeType===1)switch(E.nodeName){case"axis":const A=r(E.textContent);g.axis.fromArray(A);break;case"limits":const K=E.getElementsByTagName("max")[0],ie=E.getElementsByTagName("min")[0];g.limits.max=parseFloat(K.textContent),g.limits.min=parseFloat(ie.textContent);break}}return g.limits.min>=g.limits.max&&(g.static=!0),g.middlePosition=(g.limits.min+g.limits.max)/2,g}function us(_){const g={sid:_.getAttribute("sid"),name:_.getAttribute("name")||"",attachments:[],transforms:[]};for(let b=0;b<_.childNodes.length;b++){const E=_.childNodes[b];if(E.nodeType===1)switch(E.nodeName){case"attachment_full":g.attachments.push(yi(E));break;case"matrix":case"translate":case"rotate":g.transforms.push(hs(E));break}}return g}function yi(_){const g={joint:_.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let b=0;b<_.childNodes.length;b++){const E=_.childNodes[b];if(E.nodeType===1)switch(E.nodeName){case"link":g.links.push(us(E));break;case"matrix":case"translate":case"rotate":g.transforms.push(hs(E));break}}return g}function hs(_){const g={type:_.nodeName},b=r(_.textContent);switch(g.type){case"matrix":g.obj=new Ye,g.obj.fromArray(b).transpose();break;case"translate":g.obj=new O,g.obj.fromArray(b);break;case"rotate":g.obj=new O,g.obj.fromArray(b),g.angle=Kn.degToRad(b[3]);break}return g}function Si(_){const g={name:_.getAttribute("name")||"",rigidBodies:{}};for(let b=0;b<_.childNodes.length;b++){const E=_.childNodes[b];if(E.nodeType===1)switch(E.nodeName){case"rigid_body":g.rigidBodies[E.getAttribute("name")]={},Is(E,g.rigidBodies[E.getAttribute("name")]);break}}Ge.physicsModels[_.getAttribute("id")]=g}function Is(_,g){for(let b=0;b<_.childNodes.length;b++){const E=_.childNodes[b];if(E.nodeType===1)switch(E.nodeName){case"technique_common":Ds(E,g);break}}}function Ds(_,g){for(let b=0;b<_.childNodes.length;b++){const E=_.childNodes[b];if(E.nodeType===1)switch(E.nodeName){case"inertia":g.inertia=r(E.textContent);break;case"mass":g.mass=r(E.textContent)[0];break}}}function Or(_){const g={bindJointAxis:[]};for(let b=0;b<_.childNodes.length;b++){const E=_.childNodes[b];if(E.nodeType===1)switch(E.nodeName){case"bind_joint_axis":g.bindJointAxis.push(Br(E));break}}Ge.kinematicsScenes[o(_.getAttribute("url"))]=g}function Br(_){const g={target:_.getAttribute("target").split("/").pop()};for(let b=0;b<_.childNodes.length;b++){const E=_.childNodes[b];if(E.nodeType===1)switch(E.nodeName){case"axis":const A=E.getElementsByTagName("param")[0];g.axis=A.textContent;const K=g.axis.split("inst_").pop().split("axis")[0];g.jointIndex=K.substring(0,K.length-1);break}}return g}function kr(_){return _.build!==void 0?_.build:_}function T(_){return x(Ge.kinematicsScenes[_],kr)}function V(){const _=Object.keys(Ge.kinematicsModels)[0],g=Object.keys(Ge.kinematicsScenes)[0],b=Object.keys(Ge.visualScenes)[0];if(_===void 0||g===void 0)return;const E=Ps(_),A=T(g),K=ut(b),ie=A.bindJointAxis,be={};for(let Fe=0,le=ie.length;Fe<le;Fe++){const Ue=ie[Fe],Ce=qe.querySelector('[sid="'+Ue.target+'"]');if(Ce){const ze=Ce.parentElement;pe(Ue.jointIndex,ze)}}function pe(Fe,le){const Ue=le.getAttribute("name"),Ce=E.joints[Fe];K.traverse(function(ze){ze.name===Ue&&(be[Fe]={object:ze,transforms:Y(le),joint:Ce,position:Ce.zeroPosition})})}const ye=new Ye;Do={joints:E&&E.joints,getJointValue:function(Fe){const le=be[Fe];if(le)return le.position;console.warn("THREE.ColladaLoader: Joint "+Fe+" doesn't exist.")},setJointValue:function(Fe,le){const Ue=be[Fe];if(Ue){const Ce=Ue.joint;if(le>Ce.limits.max||le<Ce.limits.min)console.warn("THREE.ColladaLoader: Joint "+Fe+" value "+le+" outside of limits (min: "+Ce.limits.min+", max: "+Ce.limits.max+").");else if(Ce.static)console.warn("THREE.ColladaLoader: Joint "+Fe+" is static.");else{const ze=Ue.object,Be=Ce.axis,Tt=Ue.transforms;k.identity();for(let _t=0;_t<Tt.length;_t++){const dt=Tt[_t];if(dt.sid&&dt.sid.indexOf(Fe)!==-1)switch(Ce.type){case"revolute":k.multiply(ye.makeRotationAxis(Be,Kn.degToRad(le)));break;case"prismatic":k.multiply(ye.makeTranslation(Be.x*le,Be.y*le,Be.z*le));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ce.type);break}else switch(dt.type){case"matrix":k.multiply(dt.obj);break;case"translate":k.multiply(ye.makeTranslation(dt.obj.x,dt.obj.y,dt.obj.z));break;case"scale":k.scale(dt.obj);break;case"rotate":k.multiply(ye.makeRotationAxis(dt.obj,dt.angle));break}}ze.matrix.copy(k),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),be[Fe].position=le}}else console.log("THREE.ColladaLoader: "+Fe+" does not exist.")}}}function Y(_){const g=[],b=qe.querySelector('[id="'+_.id+'"]');for(let E=0;E<b.childNodes.length;E++){const A=b.childNodes[E];if(A.nodeType!==1)continue;let K,ie;switch(A.nodeName){case"matrix":K=r(A.textContent);const be=new Ye().fromArray(K).transpose();g.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:be});break;case"translate":case"scale":K=r(A.textContent),ie=new O().fromArray(K),g.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:ie});break;case"rotate":K=r(A.textContent),ie=new O().fromArray(K);const pe=Kn.degToRad(K[3]);g.push({sid:A.getAttribute("sid"),type:A.nodeName,obj:ie,angle:pe});break}}return g}function j(_){const g=_.getElementsByTagName("node");for(let b=0;b<g.length;b++){const E=g[b];E.hasAttribute("id")===!1&&E.setAttribute("id",l())}}const k=new Ye,ue=new O;function ve(_){const g={name:_.getAttribute("name")||"",type:_.getAttribute("type"),id:_.getAttribute("id"),sid:_.getAttribute("sid"),matrix:new Ye,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let b=0;b<_.childNodes.length;b++){const E=_.childNodes[b];if(E.nodeType!==1)continue;let A;switch(E.nodeName){case"node":g.nodes.push(E.getAttribute("id")),ve(E);break;case"instance_camera":g.instanceCameras.push(o(E.getAttribute("url")));break;case"instance_controller":g.instanceControllers.push(Pe(E));break;case"instance_light":g.instanceLights.push(o(E.getAttribute("url")));break;case"instance_geometry":g.instanceGeometries.push(Pe(E));break;case"instance_node":g.instanceNodes.push(o(E.getAttribute("url")));break;case"matrix":A=r(E.textContent),g.matrix.multiply(k.fromArray(A).transpose()),g.transforms[E.getAttribute("sid")]=E.nodeName;break;case"translate":A=r(E.textContent),ue.fromArray(A),g.matrix.multiply(k.makeTranslation(ue.x,ue.y,ue.z)),g.transforms[E.getAttribute("sid")]=E.nodeName;break;case"rotate":A=r(E.textContent);const K=Kn.degToRad(A[3]);g.matrix.multiply(k.makeRotationAxis(ue.fromArray(A),K)),g.transforms[E.getAttribute("sid")]=E.nodeName;break;case"scale":A=r(E.textContent),g.matrix.scale(ue.fromArray(A)),g.transforms[E.getAttribute("sid")]=E.nodeName;break;case"extra":break;default:console.log(E)}}return vt(g.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",g.id):Ge.nodes[g.id]=g,g}function Pe(_){const g={id:o(_.getAttribute("url")),materials:{},skeletons:[]};for(let b=0;b<_.childNodes.length;b++){const E=_.childNodes[b];switch(E.nodeName){case"bind_material":const A=E.getElementsByTagName("instance_material");for(let K=0;K<A.length;K++){const ie=A[K],be=ie.getAttribute("symbol"),pe=ie.getAttribute("target");g.materials[be]=o(pe)}break;case"skeleton":g.skeletons.push(o(E.textContent));break}}return g}function Le(_,g){const b=[],E=[];let A,K,ie;for(A=0;A<_.length;A++){const ye=_[A];let Fe;if(vt(ye))Fe=Rt(ye),Xe(Fe,g,b);else if(ln(ye)){const Ue=Ge.visualScenes[ye].children;for(let Ce=0;Ce<Ue.length;Ce++){const ze=Ue[Ce];if(ze.type==="JOINT"){const Be=Rt(ze.id);Xe(Be,g,b)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",ye)}for(A=0;A<g.length;A++)for(K=0;K<b.length;K++)if(ie=b[K],ie.bone.name===g[A].name){E[A]=ie,ie.processed=!0;break}for(A=0;A<b.length;A++)ie=b[A],ie.processed===!1&&(E.push(ie),ie.processed=!0);const be=[],pe=[];for(A=0;A<E.length;A++)ie=E[A],be.push(ie.bone),pe.push(ie.boneInverse);return new Co(be,pe)}function Xe(_,g,b){_.traverse(function(E){if(E.isBone===!0){let A;for(let K=0;K<g.length;K++){const ie=g[K];if(ie.name===E.name){A=ie.boneInverse;break}}A===void 0&&(A=new Ye),b.push({bone:E,boneInverse:A,processed:!1})}})}function $e(_){const g=[],b=_.matrix,E=_.nodes,A=_.type,K=_.instanceCameras,ie=_.instanceControllers,be=_.instanceLights,pe=_.instanceGeometries,ye=_.instanceNodes;for(let le=0,Ue=E.length;le<Ue;le++)g.push(Rt(E[le]));for(let le=0,Ue=K.length;le<Ue;le++){const Ce=We(K[le]);Ce!==null&&g.push(Ce.clone())}for(let le=0,Ue=ie.length;le<Ue;le++){const Ce=ie[le],ze=$(Ce.id),Be=Xt(ze.id),Tt=gt(Be,Ce.materials),_t=Ce.skeletons,dt=ze.skin.joints,ft=Le(_t,dt);for(let bn=0,Yt=Tt.length;bn<Yt;bn++){const Ei=Tt[bn];Ei.isSkinnedMesh&&(Ei.bind(ft,ze.skin.bindMatrix),Ei.normalizeSkinWeights()),g.push(Ei)}}for(let le=0,Ue=be.length;le<Ue;le++){const Ce=z(be[le]);Ce!==null&&g.push(Ce.clone())}for(let le=0,Ue=pe.length;le<Ue;le++){const Ce=pe[le],ze=Xt(Ce.id),Be=gt(ze,Ce.materials);for(let Tt=0,_t=Be.length;Tt<_t;Tt++)g.push(Be[Tt])}for(let le=0,Ue=ye.length;le<Ue;le++)g.push(Rt(ye[le]).clone());let Fe;if(E.length===0&&g.length===1)Fe=g[0];else{Fe=A==="JOINT"?new Gl:new Zn;for(let le=0;le<g.length;le++)Fe.add(g[le])}return Fe.name=A==="JOINT"?_.sid:_.name,Fe.matrix.copy(b),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe}const Ie=new $n({name:ii.DEFAULT_MATERIAL_NAME,color:16711935});function lt(_,g){const b=[];for(let E=0,A=_.length;E<A;E++){const K=g[_[E]];K===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",_[E]),b.push(Ie)):b.push(xe(K))}return b}function gt(_,g){const b=[];for(const E in _){const A=_[E],K=lt(A.materialKeys,g);if(K.length===0&&(E==="lines"||E==="linestrips"?K.push(new fo):K.push(new ei)),E==="lines"||E==="linestrips")for(let ye=0,Fe=K.length;ye<Fe;ye++){const le=K[ye];if(le.isMeshPhongMaterial===!0||le.isMeshLambertMaterial===!0){const Ue=new fo;Ue.color.copy(le.color),Ue.opacity=le.opacity,Ue.transparent=le.transparent,K[ye]=Ue}}const ie=A.data.attributes.skinIndex!==void 0,be=K.length===1?K[0]:K;let pe;switch(E){case"lines":pe=new Ig(A.data,be);break;case"linestrips":pe=new Xl(A.data,be);break;case"triangles":case"polylist":ie?pe=new Pg(A.data,be):pe=new At(A.data,be);break}b.push(pe)}return b}function vt(_){return Ge.nodes[_]!==void 0}function Rt(_){return x(Ge.nodes[_],$e)}function ht(_){const g={name:_.getAttribute("name"),children:[]};j(_);const b=n(_,"node");for(let E=0;E<b.length;E++)g.children.push(ve(b[E]));Ge.visualScenes[_.getAttribute("id")]=g}function Ne(_){const g=new Zn;g.name=_.name;const b=_.children;for(let E=0;E<b.length;E++){const A=b[E];g.add(Rt(A.id))}return g}function ln(_){return Ge.visualScenes[_]!==void 0}function ut(_){return x(Ge.visualScenes[_],Ne)}function Zt(_){const g=n(_,"instance_visual_scene")[0];return ut(o(g.getAttribute("url")))}function Bn(){const _=Ge.clips;if(c(_)===!0){if(c(Ge.animations)===!1){const g=[];for(const b in Ge.animations){const E=w(b);for(let A=0,K=E.length;A<K;A++)g.push(E[A])}Ns.push(new jc("default",-1,g))}}else for(const g in _)Ns.push(W(g))}function kt(_){let g="";const b=[_];for(;b.length;){const E=b.shift();E.nodeType===Node.TEXT_NODE?g+=E.textContent:(g+=`
`,b.push.apply(b,E.childNodes))}return g.trim()}if(e.length===0)return{scene:new Hl};const kn=new DOMParser().parseFromString(e,"application/xml"),qe=n(kn,"COLLADA")[0],qt=kn.getElementsByTagName("parsererror")[0];if(qt!==void 0){const _=n(qt,"div")[0];let g;return _?g=_.textContent:g=kt(qt),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,g),null}const oi=qe.getAttribute("version");console.debug("THREE.ColladaLoader: File version",oi);const zt=u(n(qe,"asset")[0]),un=new Kl(this.manager);un.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let rn;al&&(rn=new al(this.manager),rn.setPath(this.resourcePath||t));const ci=new Je,Ns=[];let Do={},cu=0;const Ge={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};p(qe,"library_animations","animation",m),p(qe,"library_animation_clips","animation_clip",F),p(qe,"library_controllers","controller",oe),p(qe,"library_images","image",te),p(qe,"library_effects","effect",Oe),p(qe,"library_materials","material",ce),p(qe,"library_cameras","camera",Te),p(qe,"library_lights","light",Re),p(qe,"library_geometries","geometry",_e),p(qe,"library_nodes","node",ve),p(qe,"library_visual_scenes","visual_scene",ht),p(qe,"library_kinematics_models","kinematics_model",cn),p(qe,"library_physics_models","physics_model",Si),p(qe,"scene","instance_kinematics_scene",Or),v(Ge.animations,R),v(Ge.clips,ee),v(Ge.controllers,Ee),v(Ge.images,ne),v(Ge.effects,q),v(Ge.materials,De),v(Ge.cameras,He),v(Ge.lights,mt),v(Ge.geometries,St),v(Ge.visualScenes,Ne),Bn(),V();const Us=Zt(n(qe,"scene")[0]);return Us.animations=Ns,zt.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Us.rotation.set(-Math.PI/2,0,0)),Us.scale.multiplyScalar(zt.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Ns},kinematics:Do,library:Ge,scene:Us}}}const ol=new O,o_=new $t,or=new Ye,qn=new Ye,cr=new yn,lr=new O(1,1,1),ur=new O;class Fr extends Ct{constructor(...e){super(...e),this.urdfNode=null,this.urdfName=""}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this.urdfName=e.urdfName,this}}class c_ extends Fr{constructor(...e){super(...e),this.isURDFCollider=!0,this.type="URDFCollider"}}class l_ extends Fr{constructor(...e){super(...e),this.isURDFVisual=!0,this.type="URDFVisual"}}class Ql extends Fr{constructor(...e){super(...e),this.isURDFLink=!0,this.type="URDFLink"}}class eu extends Fr{get jointType(){return this._jointType}set jointType(e){if(this.jointType!==e)switch(this._jointType=e,this.matrixWorldNeedsUpdate=!0,e){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new O(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...e){super(...e),this.isURDFJoint=!0,this.type="URDFJoint",this.jointValue=null,this.jointType="fixed",this.axis=new O(1,0,0),this.limit={lower:0,upper:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(e,t){return super.copy(e,t),this.jointType=e.jointType,this.axis=e.axis.clone(),this.limit.lower=e.limit.lower,this.limit.upper=e.limit.upper,this.ignoreLimits=!1,this.jointValue=[...e.jointValue],this.origPosition=e.origPosition?e.origPosition.clone():null,this.origQuaternion=e.origQuaternion?e.origQuaternion.clone():null,this.mimicJoints=[...e.mimicJoints],this}setJointValue(...e){e=e.map(n=>n===null?null:parseFloat(n)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let t=!1;switch(this.mimicJoints.forEach(n=>{t=n.updateFromMimickedJoint(...e)||t}),this.jointType){case"fixed":return t;case"continuous":case"revolute":{let n=e[0];return n==null||n===this.jointValue[0]?t:(!this.ignoreLimits&&this.jointType==="revolute"&&(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.quaternion.setFromAxisAngle(this.axis,n).premultiply(this.origQuaternion),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"prismatic":{let n=e[0];return n==null||n===this.jointValue[0]?t:(this.ignoreLimits||(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.position.copy(this.origPosition),ol.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(ol,n),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"floating":return this.jointValue.every((n,s)=>e[s]===n||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],this.jointValue[3]=e[3]!==null?e[3]:this.jointValue[3],this.jointValue[4]=e[4]!==null?e[4]:this.jointValue[4],this.jointValue[5]=e[5]!==null?e[5]:this.jointValue[5],qn.compose(this.origPosition,this.origQuaternion,lr),cr.setFromEuler(o_.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),ur.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),or.compose(ur,cr,lr),qn.premultiply(or),this.position.setFromMatrixPosition(qn),this.rotation.setFromRotationMatrix(qn),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((n,s)=>e[s]===n||e[s]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],qn.compose(this.origPosition,this.origQuaternion,lr),cr.setFromAxisAngle(this.axis,this.jointValue[2]),ur.set(this.jointValue[0],this.jointValue[1],0),or.compose(ur,cr,lr),qn.premultiply(or),this.position.setFromMatrixPosition(qn),this.rotation.setFromRotationMatrix(qn),this.matrixWorldNeedsUpdate=!0,!0)}return t}}class cl extends eu{constructor(...e){super(...e),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...e){const t=e.map(n=>n*this.multiplier+this.offset);return super.setJointValue(...t)}copy(e,t){return super.copy(e,t),this.mimicJoint=e.mimicJoint,this.offset=e.offset,this.multiplier=e.multiplier,this}}class u_ extends Ql{constructor(...e){super(...e),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(e,t){super.copy(e,t),this.urdfRobotNode=e.urdfRobotNode,this.robotName=e.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(n=>{n.isURDFJoint&&n.urdfName in e.joints&&(this.joints[n.urdfName]=n),n.isURDFLink&&n.urdfName in e.links&&(this.links[n.urdfName]=n),n.isURDFCollider&&n.urdfName in e.colliders&&(this.colliders[n.urdfName]=n),n.isURDFVisual&&n.urdfName in e.visual&&(this.visual[n.urdfName]=n)});for(const n in this.joints)this.joints[n].mimicJoints=this.joints[n].mimicJoints.map(s=>this.joints[s.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(e){return this.frames[e]}setJointValue(e,...t){const n=this.joints[e];return n?n.setJointValue(...t):!1}setJointValues(e){let t=!1;for(const n in e){const s=e[n];Array.isArray(s)?t=this.setJointValue(n,...s)||t:t=this.setJointValue(n,s)||t}return t}}const Sa=new yn,ll=new $t;function Bi(i){return i?i.trim().split(/\s+/g).map(e=>parseFloat(e)):[0,0,0]}function ul(i,e,t=!1){t||i.rotation.set(0,0,0),ll.set(e[0],e[1],e[2],"ZYX"),Sa.setFromEuler(ll),Sa.multiply(i.quaternion),i.quaternion.copy(Sa)}class h_{constructor(e){this.manager=e||jl,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(e){return new Promise((t,n)=>{this.load(e,t,null,n)})}load(e,t,n,s){const r=this.manager,a=Jl.extractUrlBase(e),o=this.manager.resolveURL(e);r.itemStart(o),fetch(o,this.fetchOptions).then(l=>{if(l.ok)return n&&n(null),l.text();throw new Error(`URDFLoader: Failed to load url '${o}' with error code ${l.status} : ${l.statusText}.`)}).then(l=>{const c=this.parse(l,this.workingPath||a);t(c),r.itemEnd(o)}).catch(l=>{s?s(l):console.error("URDFLoader: Error loading file.",l),r.itemError(o),r.itemEnd(o)})}parse(e,t=this.workingPath){const n=this.packages,s=this.loadMeshCb,r=this.parseVisual,a=this.parseCollision,o=this.manager,l={},c={},u={};function d(C){if(!/^package:\/\//.test(C))return t?t+C:C;const[R,w]=C.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof n=="string")return n.endsWith(R)?n+"/"+w:n+"/"+R+"/"+w;if(n instanceof Function)return n(R)+"/"+w;if(typeof n=="object")return R in n?n[R]+"/"+w:(console.error(`URDFLoader : ${R} not found in provided package list.`),null)}function f(C){let R;C instanceof Document?R=[...C.children]:C instanceof Element?R=[C]:R=[...new DOMParser().parseFromString(C,"text/xml").children];const w=R.filter(U=>U.nodeName==="robot").pop();return p(w)}function p(C){const R=[...C.children],w=R.filter(L=>L.nodeName.toLowerCase()==="link"),U=R.filter(L=>L.nodeName.toLowerCase()==="joint"),N=R.filter(L=>L.nodeName.toLowerCase()==="material"),I=new u_;I.robotName=C.getAttribute("name"),I.urdfRobotNode=C,N.forEach(L=>{const B=L.getAttribute("name");u[B]=m(L)});const D={},y={};w.forEach(L=>{const B=L.getAttribute("name"),H=C.querySelector(`child[link="${B}"]`)===null;l[B]=x(L,D,y,H?I:null)}),U.forEach(L=>{const B=L.getAttribute("name");c[B]=v(L)}),I.joints=c,I.links=l,I.colliders=y,I.visual=D;const M=Object.values(c);return M.forEach(L=>{L instanceof cl&&c[L.mimicJoint].mimicJoints.push(L)}),M.forEach(L=>{const B=new Set,H=Z=>{if(B.has(Z))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");B.add(Z),Z.mimicJoints.forEach(Q=>{H(Q)})};H(L)}),I.frames={...y,...D,...l,...c},I}function v(C){const R=[...C.children],w=C.getAttribute("type");let U;const N=R.find(B=>B.nodeName.toLowerCase()==="mimic");N?(U=new cl,U.mimicJoint=N.getAttribute("joint"),U.multiplier=parseFloat(N.getAttribute("multiplier")||1),U.offset=parseFloat(N.getAttribute("offset")||0)):U=new eu,U.urdfNode=C,U.name=C.getAttribute("name"),U.urdfName=U.name,U.jointType=w;let I=null,D=null,y=[0,0,0],M=[0,0,0];R.forEach(B=>{const H=B.nodeName.toLowerCase();H==="origin"?(y=Bi(B.getAttribute("xyz")),M=Bi(B.getAttribute("rpy"))):H==="child"?D=l[B.getAttribute("link")]:H==="parent"?I=l[B.getAttribute("link")]:H==="limit"&&(U.limit.lower=parseFloat(B.getAttribute("lower")||U.limit.lower),U.limit.upper=parseFloat(B.getAttribute("upper")||U.limit.upper))}),I.add(U),U.add(D),ul(U,M),U.position.set(y[0],y[1],y[2]);const L=R.filter(B=>B.nodeName.toLowerCase()==="axis")[0];if(L){const B=L.getAttribute("xyz").split(/\s+/g).map(H=>parseFloat(H));U.axis=new O(B[0],B[1],B[2]),U.axis.normalize()}return U}function x(C,R,w,U=null){U===null&&(U=new Ql);const N=[...C.children];return U.name=C.getAttribute("name"),U.urdfName=U.name,U.urdfNode=C,r&&N.filter(D=>D.nodeName.toLowerCase()==="visual").forEach(D=>{const y=h(D,u);if(U.add(y),D.hasAttribute("name")){const M=D.getAttribute("name");y.name=M,y.urdfName=M,R[M]=y}}),a&&N.filter(D=>D.nodeName.toLowerCase()==="collision").forEach(D=>{const y=h(D);if(U.add(y),D.hasAttribute("name")){const M=D.getAttribute("name");y.name=M,y.urdfName=M,w[M]=y}}),U}function m(C){const R=[...C.children],w=new ei;return w.name=C.getAttribute("name")||"",R.forEach(U=>{const N=U.nodeName.toLowerCase();if(N==="color"){const I=U.getAttribute("rgba").split(/\s/g).map(D=>parseFloat(D));w.color.setRGB(I[0],I[1],I[2]),w.opacity=I[3],w.transparent=I[3]<1,w.depthWrite=!w.transparent}else if(N==="texture"){const I=U.getAttribute("filename");if(I){const D=new Kl(o),y=d(I);w.map=D.load(y),w.map.colorSpace=wt}}}),w}function h(C,R={}){const w=C.nodeName.toLowerCase()==="collision",U=[...C.children];let N=null;const I=U.filter(y=>y.nodeName.toLowerCase()==="material")[0];if(I){const y=I.getAttribute("name");y&&y in R?N=R[y]:N=m(I)}else N=new ei;const D=w?new c_:new l_;return D.urdfNode=C,U.forEach(y=>{const M=y.nodeName.toLowerCase();if(M==="geometry"){const L=y.children[0].nodeName.toLowerCase();if(L==="mesh"){const B=y.children[0].getAttribute("filename"),H=d(B);if(H!==null){const Z=y.children[0].getAttribute("scale");if(Z){const Q=Bi(Z);D.scale.set(Q[0],Q[1],Q[2])}s(H,o,(Q,F)=>{F?console.error("URDFLoader: Error loading mesh.",F):Q&&(Q instanceof At&&(Q.material=N),Q.position.set(0,0,0),Q.quaternion.identity(),D.add(Q))})}}else if(L==="box"){const B=new At;B.geometry=new ai(1,1,1),B.material=N;const H=Bi(y.children[0].getAttribute("size"));B.scale.set(H[0],H[1],H[2]),D.add(B)}else if(L==="sphere"){const B=new At;B.geometry=new Dr(1,30,30),B.material=N;const H=parseFloat(y.children[0].getAttribute("radius"))||0;B.scale.set(H,H,H),D.add(B)}else if(L==="cylinder"){const B=new At;B.geometry=new Ts(1,1,1,30),B.material=N;const H=parseFloat(y.children[0].getAttribute("radius"))||0,Z=parseFloat(y.children[0].getAttribute("length"))||0;B.scale.set(H,Z,H),B.rotation.set(Math.PI/2,0,0),D.add(B)}}else if(M==="origin"){const L=Bi(y.getAttribute("xyz")),B=Bi(y.getAttribute("rpy"));D.position.set(L[0],L[1],L[2]),D.rotation.set(0,0,0),ul(D,B)}}),D}return f(e)}defaultMeshLoader(e,t,n){/\.stl$/i.test(e)?new r_(t).load(e,r=>{const a=new At(r,new ei);n(a)}):/\.dae$/i.test(e)?new a_(t).load(e,r=>n(r.scene)):console.warn(`URDFLoader: Could not load model at ${e}.
No loader available`)}}class d_{constructor(e){this.scene=e,this.mesh=new Zn,this.mesh.position.set(0,0,0),e.add(this.mesh),this.robot=null}async load(){return new Promise((e,t)=>{new h_().load("/models/robot.urdf",s=>{this.robot=s,s.scale.set(8,8,8),s.rotation.x=-Math.PI/2,this.mesh.add(s),e()},void 0,s=>{t(s)})})}setYaw(e){this.mesh.rotation.y=e}setJoint(e,t){if(this.robot){const n=this.robot.joints[e];n&&n.setJointValue(t)}}}const Ea=50,f_=3;class p_{constructor(e){this.scene=e,this.enemies=[],this.wave=0,this.enemiesRemaining=0,this.spawnQueue=0,this.spawnTimer=0,this.baseSpeed=4,this.geometry=new ai(1.5,1.5,1.5),this.materials=[new ei({color:16720418,emissive:3342336}),new ei({color:16729156,emissive:4456448}),new ei({color:13373713,emissive:2228224})]}startWave(e){this.wave=e;const t=5+3*e;this.spawnQueue=t,this.enemiesRemaining=t,this.spawnTimer=0}get waveComplete(){return this.enemiesRemaining<=0&&this.spawnQueue<=0}get meshes(){return this.enemies.map(e=>e.mesh)}removeEnemy(e){const t=this.enemies.findIndex(s=>s.mesh===e);if(t===-1)return;const n=this.enemies.splice(t,1)[0];this.scene.remove(n.mesh),n.mesh.geometry=void 0,this.enemiesRemaining--}tick(e){this.spawnTimer-=e,this.spawnQueue>0&&this.spawnTimer<=0&&(this._spawnOne(),this.spawnQueue--,this.spawnTimer=Math.max(.3,1.5-this.wave*.1));const t=this.baseSpeed+this.wave*.5,n=[];for(const r of this.enemies){const a=r.mesh.position.clone().negate().normalize();r.mesh.position.addScaledVector(a,t*e),r.mesh.rotation.x+=e*1.5,r.mesh.rotation.y+=e*2,r.mesh.position.length()<f_&&n.push(r)}let s=0;for(const r of n){const a=this.enemies.indexOf(r);a!==-1&&(this.enemies.splice(a,1),this.scene.remove(r.mesh),this.enemiesRemaining--,s++)}return s}_spawnOne(){const e=Math.random()*Math.PI*2,t=Math.acos(2*Math.random()-1),n=Ea*Math.sin(t)*Math.cos(e),s=Ea*Math.sin(t)*Math.sin(e),r=Ea*Math.abs(Math.cos(t))+2,a=new O(n,r,s),o=this.materials[Math.floor(Math.random()*this.materials.length)],l=new At(this.geometry,o);l.position.copy(a),this.scene.add(l),this.enemies.push({mesh:l})}clear(){for(const e of this.enemies)this.scene.remove(e.mesh);this.enemies=[],this.spawnQueue=0,this.enemiesRemaining=0}}const hl=1;class m_{constructor(e){this.camera=e,this.timer=0,this.raycaster=new e_,this.screenCenter=new at(0,0),this.active=!1}start(){this.timer=0,this.active=!0}stop(){this.active=!1}get cooldownProgress(){return Math.min(this.timer/hl,1)}tick(e,t){if(!this.active||(this.timer+=e,this.timer<hl))return null;this.timer=0,this.raycaster.setFromCamera(this.screenCenter,this.camera);const n=this.raycaster.intersectObjects(t);return n.length>0?{fired:!0,hit:n[0].object,point:n[0].point}:{fired:!0,hit:null,point:null}}}const g_=157;class __{constructor(){this.scoreEl=document.getElementById("score"),this.waveEl=document.getElementById("wave-display"),this.healthEl=document.getElementById("health"),this.cooldownRing=document.getElementById("cooldown-ring"),this.announceEl=document.getElementById("wave-announce"),this.connectionEl=document.getElementById("connection-status"),this.debugEl=document.getElementById("debug-indicator"),this.enemyIndicator=document.getElementById("enemy-indicator"),this.score=0,this.wave=1,this.health=3,this._announceTimeout=null}setDebugMode(e){this.debugEl.style.display=e?"block":"none"}setConnected(e){this.connectionEl.textContent=e?"CONNECTED":"DISCONNECTED",this.connectionEl.style.color=e?"#0f0":"#888"}updateScore(e){this.score=e,this.scoreEl.textContent=e}addScore(e){this.score+=e,this.scoreEl.textContent=this.score}updateWave(e){this.wave=e,this.waveEl.textContent=`WAVE: ${e}`}updateHealth(e){this.health=e,this.healthEl.textContent="❤ ".repeat(e)}updateCooldown(e){const t=g_*(1-e);this.cooldownRing.setAttribute("stroke-dashoffset",t),e>=1?this.cooldownRing.setAttribute("stroke","#ff0"):this.cooldownRing.setAttribute("stroke","#0f0")}announceWave(e){clearTimeout(this._announceTimeout),this.announceEl.textContent=`WAVE ${e}`,this.announceEl.style.opacity="1",this._announceTimeout=setTimeout(()=>{this.announceEl.style.opacity="0"},2e3)}updateEnemyIndicator(e,t,n){if(!n){this.enemyIndicator.setAttribute("opacity","0");return}this.enemyIndicator.setAttribute("opacity",t.toFixed(2)),this.enemyIndicator.setAttribute("transform",`rotate(${e} 30 30)`)}reset(){this.score=0,this.wave=1,this.health=3,this.updateScore(0),this.updateWave(1),this.updateHealth(3),this.updateCooldown(0)}}const v_=12,x_=15,dl=.6;class M_{constructor(e){this.scene=e,this.explosions=[],this.projectiles=[],this.particleGeo=new ai(.2,.2,.2)}explode(e,t=16746496){const n=[],s=new $n({color:t});for(let r=0;r<v_;r++){const a=new At(this.particleGeo,s);a.position.copy(e);const o=new O((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2).normalize().multiplyScalar(x_*(.5+Math.random()*.5));this.scene.add(a),n.push({mesh:a,vel:o})}this.explosions.push({particles:n,life:dl})}spawnProjectile(e,t,n){const s=t?t.clone().sub(e).normalize():n||new O(0,0,-1),r=t||e.clone().addScaledVector(s,100),a=e.distanceTo(r),o=e.clone().add(r).multiplyScalar(.5),l=new Zn,c=new yn().setFromUnitVectors(new O(0,1,0),s),u=new Ts(.75,.75,a,6,1),d=new $n({color:16776960,transparent:!0,opacity:.9}),f=new At(u,d);f.position.copy(o),f.quaternion.copy(c),l.add(f);const p=new Ts(2.5,2.5,a,6,1),v=new $n({color:16776960,transparent:!0,opacity:.3,blending:Ta,depthWrite:!1}),x=new At(p,v);x.position.copy(o),x.quaternion.copy(c),l.add(x),this.scene.add(l),this.projectiles.push({mesh:l,life:.62,beam:f,glow:x,startLife:.62})}spawnHitMarker(e){const t=new Dr(.5,8,8),n=new $n({color:16777215}),s=new At(t,n);s.position.copy(e),this.scene.add(s),this.projectiles.push({mesh:s,life:.1})}tick(e){for(let t=this.explosions.length-1;t>=0;t--){const n=this.explosions[t];if(n.life-=e,n.life<=0){for(const r of n.particles)this.scene.remove(r.mesh);this.explosions.splice(t,1);continue}const s=n.life/dl;for(const r of n.particles)r.mesh.position.addScaledVector(r.vel,e),r.mesh.scale.setScalar(s)}for(let t=this.projectiles.length-1;t>=0;t--){const n=this.projectiles[t];if(n.life-=e,n.life<=0)this.scene.remove(n.mesh),n.mesh.geometry&&n.mesh.geometry.dispose(),this.projectiles.splice(t,1);else if(n.beam){const s=n.life/n.startLife;n.beam.material.opacity=.9*s,n.glow.material.opacity=.3*s}}}clear(){for(const e of this.explosions)for(const t of e.particles)this.scene.remove(t.mesh);this.explosions=[];for(const e of this.projectiles)this.scene.remove(e.mesh);this.projectiles=[]}}const y_=8765,Io=3,fl=100,S_=3,tu=new URLSearchParams(window.location.search);let Tr=tu.has("debug");const E_=tu.has("godmode"),On=new Hl;On.background=new Je(8947848);On.fog=new Ro(8947848,40,80);const ti=new Bt(75,window.innerWidth/window.innerHeight,.1,200);ti.position.set(0,0,0);const cs=new Rg({antialias:!0});cs.setSize(window.innerWidth,window.innerHeight);cs.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.appendChild(cs.domElement);const b_=new Zl(8421504,.8);On.add(b_);const nu=new $l(16777215,.8);nu.position.set(10,20,10);On.add(nu);function T_(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");t.fillStyle="#999999",t.fillRect(0,0,512,512),t.strokeStyle="#222222",t.lineWidth=2;const n=512/8;for(let r=0;r<=8;r++){const a=r*n;t.beginPath(),t.moveTo(a,0),t.lineTo(a,512),t.stroke(),t.beginPath(),t.moveTo(0,a),t.lineTo(512,a),t.stroke()}const s=new Dg(e);return s.wrapS=In,s.wrapT=In,s.repeat.set(4,4),s}{const t=new As(120,120),n=[{pos:[0,0,-60],rot:[0,0,0]},{pos:[0,0,60],rot:[0,Math.PI,0]},{pos:[-60,0,0],rot:[0,Math.PI/2,0]},{pos:[60,0,0],rot:[0,-Math.PI/2,0]},{pos:[0,-.5,0],rot:[-Math.PI/2,0,0],floor:!0},{pos:[0,60,0],rot:[Math.PI/2,0,0]}];for(const s of n){const r=T_();s.floor&&r.repeat.set(16,16);const a=new Ng({map:r,side:Mn}),o=new At(t,a);o.position.set(...s.pos),o.rotation.set(...s.rot),On.add(o)}}const jt=new __,mo=new d_(On),Yn=new p_(On),wr=new m_(ti),Ms=new M_(On);let qi=null;const xn=new t_;xn.addEventListener("connected",()=>jt.setConnected(!0));xn.addEventListener("disconnected",()=>jt.setConnected(!1));xn.addEventListener("config",i=>{i.detail.debug&&!Tr&&(Tr=!0,su())});xn.addEventListener("position",i=>{qi&&qi.update(i.detail.yaw,i.detail.pitch)});let Hi="start",_r=Io,zi=0,ba=0;const iu=new Qg;function su(){qi=new s_(ti,cs,Tr),jt.setDebugMode(Tr)}function ru(){document.getElementById("start-screen").style.display="none",document.getElementById("game-over-screen").style.display="none",Hi="playing",_r=Io,zi=0,jt.reset(),Yn.clear(),Ms.clear(),wr.start(),au()}function au(){zi++,jt.updateWave(zi),jt.announceWave(zi),Yn.startWave(zi),xn.send({type:"wave_start",wave:zi})}function w_(){Hi="game_over",wr.stop();const i=document.getElementById("game-over-screen");i.style.display="flex",i.querySelector(".final-score").textContent=`SCORE: ${jt.score}`,xn.send({type:"game_over",score:jt.score})}document.getElementById("start-screen").addEventListener("click",()=>{ru()});document.getElementById("game-over-screen").addEventListener("click",()=>{ru()});window.addEventListener("resize",()=>{ti.aspect=window.innerWidth/window.innerHeight,ti.updateProjectionMatrix(),cs.setSize(window.innerWidth,window.innerHeight)});function ou(){requestAnimationFrame(ou);const i=Math.min(iu.getDelta(),.1);if(qi&&(qi.tick(),mo.setYaw(qi.currentYawValue)),Hi==="playing"){const e=Yn.tick(i);if(e>0&&!E_&&(_r-=e,jt.updateHealth(_r),_r<=0)){w_();return}const t=wr.tick(i,Yn.meshes);if(t!=null&&t.fired){xn.send({type:"shoot"});const n=new O;if(ti.getWorldDirection(n),Ms.spawnProjectile(mo.mesh.position.clone(),t.point,n),t.hit){const s=t.hit.position.clone();Yn.removeEnemy(t.hit),Ms.explode(s,16729088),t.point&&Ms.spawnHitMarker(t.point),jt.addScore(fl),xn.send({type:"hit",points:fl})}else xn.send({type:"miss"})}if(Yn.enemies.length>0){let n=1/0,s=null;for(const c of Yn.enemies){const u=c.mesh.position.length();u<n&&(n=u,s=c.mesh.position.clone().project(ti))}const r=Math.atan2(s.x,s.y)*(180/Math.PI),a=Kn.clamp(1-n/50,.3,1),l=Math.sqrt(s.x**2+s.y**2)>.1;jt.updateEnemyIndicator(r,a,l)}else jt.updateEnemyIndicator(0,0,!1);jt.updateCooldown(wr.cooldownProgress),Yn.waveComplete&&(Hi="wave_transition",ba=S_)}else Hi==="wave_transition"&&(ba-=i,ba<=0&&(Hi="playing",au()));Ms.tick(i),cs.render(On,ti)}async function A_(){const i=window.location.hostname||"localhost";xn.connect(`ws://${i}:${y_}`),await mo.load(),su(),jt.updateHealth(Io),iu.start(),ou()}A_();
