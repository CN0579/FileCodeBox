import{c as W,B as re,r as T,o as oe,w as he,p as F,b as $,d as i,_ as ne,u as pe,a as ge,n as h,e as l,g as G,f as C,j as N,i as E,t as P,h as J,v as ee,T as K,C as ye,D as ve,k as j,X as be,q as xe,F as me,x as we,y as _e,z as Ce,A as Ae,m as Se}from"./index-BnjuZaZi.js";import{g as Me,u as Be,S as Te,C as Ie,a as ke,Q as Ue,E as De}from"./_commonjsHelpers-BPOu1wV1.js";import{F as te}from"./file-DkiPlzMi.js";import{H as Fe,T as $e}from"./trash-CRe2Zc2u.js";/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=W("ClipboardCopyIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=W("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=W("CloudUploadIcon",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=W("SendIcon",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]),Re=re({__name:"BorderProgressBar",props:{progress:{}},setup(q){const R=q,c=T(null),B=T(null);let d=null;const _=()=>{if(!d||!B.value||!c.value)return;const w=c.value.clientWidth,y=c.value.clientHeight;B.value.width=w,B.value.height=y;const v=4,u=8;d.lineWidth=v;const A=d.createLinearGradient(0,0,w,y);A.addColorStop(0,"#4f46e5"),A.addColorStop(.5,"#7c3aed"),A.addColorStop(1,"#db2777"),d.strokeStyle="rgba(229, 231, 235, 0.2)",U(d,v/2,v/2,w-v,y-v,u),d.stroke();const M=((w+y)*2-8*u+2*Math.PI*u)*R.progress/100;d.strokeStyle=A,d.lineCap="round",d.lineJoin="round",d.beginPath();let m=M;const b=v/2,g=w-v,a=y-v;if(m>0){const n=Math.min(g-2*u,m);d.moveTo(u+b,b),d.lineTo(n+u+b,b),m-=n}if(m>0){const n=Math.min(Math.PI/2,m/u);d.arc(g-u+b,u+b,u,-Math.PI/2,n-Math.PI/2,!1),m-=n*u}if(m>0){const n=Math.min(a-2*u,m);d.lineTo(g+b,n+u+b),m-=n}if(m>0){const n=Math.min(Math.PI/2,m/u);d.arc(g-u+b,a-u+b,u,0,n,!1),m-=n*u}if(m>0){const n=Math.min(g-2*u,m);d.lineTo(g-n-u+b,a+b),m-=n}if(m>0){const n=Math.min(Math.PI/2,m/u);d.arc(u+b,a-u+b,u,Math.PI/2,Math.PI/2+n,!1),m-=n*u}if(m>0){const n=Math.min(a-2*u,m);d.lineTo(b,a-n-u+b),m-=n}if(m>0){const n=Math.min(Math.PI/2,m/u);d.arc(u+b,u+b,u,Math.PI,Math.PI+n,!1)}d.stroke()};function U(w,y,v,u,A,x){w.beginPath(),w.moveTo(y+x,v),w.lineTo(y+u-x,v),w.arcTo(y+u,v,y+u,v+x,x),w.lineTo(y+u,v+A-x),w.arcTo(y+u,v+A,y+u-x,v+A,x),w.lineTo(y+x,v+A),w.arcTo(y,v+A,y,v+A-x,x),w.lineTo(y,v+x),w.arcTo(y,v,y+x,v,x),w.closePath()}return oe(()=>{B.value&&(d=B.value.getContext("2d"),_())}),he(()=>R.progress,_),(w,y)=>(F(),$("div",{class:"border-progress-container",ref_key:"container",ref:c},[i("canvas",{ref_key:"canvas",ref:B,class:"border-progress-canvas"},null,512)],512))}}),Ve=ne(Re,[["__scopeId","data-v-2fbf5085"]]);var ae={exports:{}};(function(q,R){(function(c){q.exports=c()})(function(c){var B=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function d(a,n){var t=a[0],e=a[1],o=a[2],r=a[3];t+=(e&o|~e&r)+n[0]-680876936|0,t=(t<<7|t>>>25)+e|0,r+=(t&e|~t&o)+n[1]-389564586|0,r=(r<<12|r>>>20)+t|0,o+=(r&t|~r&e)+n[2]+606105819|0,o=(o<<17|o>>>15)+r|0,e+=(o&r|~o&t)+n[3]-1044525330|0,e=(e<<22|e>>>10)+o|0,t+=(e&o|~e&r)+n[4]-176418897|0,t=(t<<7|t>>>25)+e|0,r+=(t&e|~t&o)+n[5]+1200080426|0,r=(r<<12|r>>>20)+t|0,o+=(r&t|~r&e)+n[6]-1473231341|0,o=(o<<17|o>>>15)+r|0,e+=(o&r|~o&t)+n[7]-45705983|0,e=(e<<22|e>>>10)+o|0,t+=(e&o|~e&r)+n[8]+1770035416|0,t=(t<<7|t>>>25)+e|0,r+=(t&e|~t&o)+n[9]-1958414417|0,r=(r<<12|r>>>20)+t|0,o+=(r&t|~r&e)+n[10]-42063|0,o=(o<<17|o>>>15)+r|0,e+=(o&r|~o&t)+n[11]-1990404162|0,e=(e<<22|e>>>10)+o|0,t+=(e&o|~e&r)+n[12]+1804603682|0,t=(t<<7|t>>>25)+e|0,r+=(t&e|~t&o)+n[13]-40341101|0,r=(r<<12|r>>>20)+t|0,o+=(r&t|~r&e)+n[14]-1502002290|0,o=(o<<17|o>>>15)+r|0,e+=(o&r|~o&t)+n[15]+1236535329|0,e=(e<<22|e>>>10)+o|0,t+=(e&r|o&~r)+n[1]-165796510|0,t=(t<<5|t>>>27)+e|0,r+=(t&o|e&~o)+n[6]-1069501632|0,r=(r<<9|r>>>23)+t|0,o+=(r&e|t&~e)+n[11]+643717713|0,o=(o<<14|o>>>18)+r|0,e+=(o&t|r&~t)+n[0]-373897302|0,e=(e<<20|e>>>12)+o|0,t+=(e&r|o&~r)+n[5]-701558691|0,t=(t<<5|t>>>27)+e|0,r+=(t&o|e&~o)+n[10]+38016083|0,r=(r<<9|r>>>23)+t|0,o+=(r&e|t&~e)+n[15]-660478335|0,o=(o<<14|o>>>18)+r|0,e+=(o&t|r&~t)+n[4]-405537848|0,e=(e<<20|e>>>12)+o|0,t+=(e&r|o&~r)+n[9]+568446438|0,t=(t<<5|t>>>27)+e|0,r+=(t&o|e&~o)+n[14]-1019803690|0,r=(r<<9|r>>>23)+t|0,o+=(r&e|t&~e)+n[3]-187363961|0,o=(o<<14|o>>>18)+r|0,e+=(o&t|r&~t)+n[8]+1163531501|0,e=(e<<20|e>>>12)+o|0,t+=(e&r|o&~r)+n[13]-1444681467|0,t=(t<<5|t>>>27)+e|0,r+=(t&o|e&~o)+n[2]-51403784|0,r=(r<<9|r>>>23)+t|0,o+=(r&e|t&~e)+n[7]+1735328473|0,o=(o<<14|o>>>18)+r|0,e+=(o&t|r&~t)+n[12]-1926607734|0,e=(e<<20|e>>>12)+o|0,t+=(e^o^r)+n[5]-378558|0,t=(t<<4|t>>>28)+e|0,r+=(t^e^o)+n[8]-2022574463|0,r=(r<<11|r>>>21)+t|0,o+=(r^t^e)+n[11]+1839030562|0,o=(o<<16|o>>>16)+r|0,e+=(o^r^t)+n[14]-35309556|0,e=(e<<23|e>>>9)+o|0,t+=(e^o^r)+n[1]-1530992060|0,t=(t<<4|t>>>28)+e|0,r+=(t^e^o)+n[4]+1272893353|0,r=(r<<11|r>>>21)+t|0,o+=(r^t^e)+n[7]-155497632|0,o=(o<<16|o>>>16)+r|0,e+=(o^r^t)+n[10]-1094730640|0,e=(e<<23|e>>>9)+o|0,t+=(e^o^r)+n[13]+681279174|0,t=(t<<4|t>>>28)+e|0,r+=(t^e^o)+n[0]-358537222|0,r=(r<<11|r>>>21)+t|0,o+=(r^t^e)+n[3]-722521979|0,o=(o<<16|o>>>16)+r|0,e+=(o^r^t)+n[6]+76029189|0,e=(e<<23|e>>>9)+o|0,t+=(e^o^r)+n[9]-640364487|0,t=(t<<4|t>>>28)+e|0,r+=(t^e^o)+n[12]-421815835|0,r=(r<<11|r>>>21)+t|0,o+=(r^t^e)+n[15]+530742520|0,o=(o<<16|o>>>16)+r|0,e+=(o^r^t)+n[2]-995338651|0,e=(e<<23|e>>>9)+o|0,t+=(o^(e|~r))+n[0]-198630844|0,t=(t<<6|t>>>26)+e|0,r+=(e^(t|~o))+n[7]+1126891415|0,r=(r<<10|r>>>22)+t|0,o+=(t^(r|~e))+n[14]-1416354905|0,o=(o<<15|o>>>17)+r|0,e+=(r^(o|~t))+n[5]-57434055|0,e=(e<<21|e>>>11)+o|0,t+=(o^(e|~r))+n[12]+1700485571|0,t=(t<<6|t>>>26)+e|0,r+=(e^(t|~o))+n[3]-1894986606|0,r=(r<<10|r>>>22)+t|0,o+=(t^(r|~e))+n[10]-1051523|0,o=(o<<15|o>>>17)+r|0,e+=(r^(o|~t))+n[1]-2054922799|0,e=(e<<21|e>>>11)+o|0,t+=(o^(e|~r))+n[8]+1873313359|0,t=(t<<6|t>>>26)+e|0,r+=(e^(t|~o))+n[15]-30611744|0,r=(r<<10|r>>>22)+t|0,o+=(t^(r|~e))+n[6]-1560198380|0,o=(o<<15|o>>>17)+r|0,e+=(r^(o|~t))+n[13]+1309151649|0,e=(e<<21|e>>>11)+o|0,t+=(o^(e|~r))+n[4]-145523070|0,t=(t<<6|t>>>26)+e|0,r+=(e^(t|~o))+n[11]-1120210379|0,r=(r<<10|r>>>22)+t|0,o+=(t^(r|~e))+n[2]+718787259|0,o=(o<<15|o>>>17)+r|0,e+=(r^(o|~t))+n[9]-343485551|0,e=(e<<21|e>>>11)+o|0,a[0]=t+a[0]|0,a[1]=e+a[1]|0,a[2]=o+a[2]|0,a[3]=r+a[3]|0}function _(a){var n=[],t;for(t=0;t<64;t+=4)n[t>>2]=a.charCodeAt(t)+(a.charCodeAt(t+1)<<8)+(a.charCodeAt(t+2)<<16)+(a.charCodeAt(t+3)<<24);return n}function U(a){var n=[],t;for(t=0;t<64;t+=4)n[t>>2]=a[t]+(a[t+1]<<8)+(a[t+2]<<16)+(a[t+3]<<24);return n}function w(a){var n=a.length,t=[1732584193,-271733879,-1732584194,271733878],e,o,r,S,D,z;for(e=64;e<=n;e+=64)d(t,_(a.substring(e-64,e)));for(a=a.substring(e-64),o=a.length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<o;e+=1)r[e>>2]|=a.charCodeAt(e)<<(e%4<<3);if(r[e>>2]|=128<<(e%4<<3),e>55)for(d(t,r),e=0;e<16;e+=1)r[e]=0;return S=n*8,S=S.toString(16).match(/(.*?)(.{0,8})$/),D=parseInt(S[2],16),z=parseInt(S[1],16)||0,r[14]=D,r[15]=z,d(t,r),t}function y(a){var n=a.length,t=[1732584193,-271733879,-1732584194,271733878],e,o,r,S,D,z;for(e=64;e<=n;e+=64)d(t,U(a.subarray(e-64,e)));for(a=e-64<n?a.subarray(e-64):new Uint8Array(0),o=a.length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<o;e+=1)r[e>>2]|=a[e]<<(e%4<<3);if(r[e>>2]|=128<<(e%4<<3),e>55)for(d(t,r),e=0;e<16;e+=1)r[e]=0;return S=n*8,S=S.toString(16).match(/(.*?)(.{0,8})$/),D=parseInt(S[2],16),z=parseInt(S[1],16)||0,r[14]=D,r[15]=z,d(t,r),t}function v(a){var n="",t;for(t=0;t<4;t+=1)n+=B[a>>t*8+4&15]+B[a>>t*8&15];return n}function u(a){var n;for(n=0;n<a.length;n+=1)a[n]=v(a[n]);return a.join("")}u(w("hello")),typeof ArrayBuffer<"u"&&!ArrayBuffer.prototype.slice&&function(){function a(n,t){return n=n|0||0,n<0?Math.max(n+t,0):Math.min(n,t)}ArrayBuffer.prototype.slice=function(n,t){var e=this.byteLength,o=a(n,e),r=e,S,D,z,V;return t!==c&&(r=a(t,e)),o>r?new ArrayBuffer(0):(S=r-o,D=new ArrayBuffer(S),z=new Uint8Array(D),V=new Uint8Array(this,o,S),z.set(V),D)}}();function A(a){return/[\u0080-\uFFFF]/.test(a)&&(a=unescape(encodeURIComponent(a))),a}function x(a,n){var t=a.length,e=new ArrayBuffer(t),o=new Uint8Array(e),r;for(r=0;r<t;r+=1)o[r]=a.charCodeAt(r);return n?o:e}function M(a){return String.fromCharCode.apply(null,new Uint8Array(a))}function m(a,n,t){var e=new Uint8Array(a.byteLength+n.byteLength);return e.set(new Uint8Array(a)),e.set(new Uint8Array(n),a.byteLength),e}function b(a){var n=[],t=a.length,e;for(e=0;e<t-1;e+=2)n.push(parseInt(a.substr(e,2),16));return String.fromCharCode.apply(String,n)}function g(){this.reset()}return g.prototype.append=function(a){return this.appendBinary(A(a)),this},g.prototype.appendBinary=function(a){this._buff+=a,this._length+=a.length;var n=this._buff.length,t;for(t=64;t<=n;t+=64)d(this._hash,_(this._buff.substring(t-64,t)));return this._buff=this._buff.substring(t-64),this},g.prototype.end=function(a){var n=this._buff,t=n.length,e,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r;for(e=0;e<t;e+=1)o[e>>2]|=n.charCodeAt(e)<<(e%4<<3);return this._finish(o,t),r=u(this._hash),a&&(r=b(r)),this.reset(),r},g.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},g.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},g.prototype.setState=function(a){return this._buff=a.buff,this._length=a.length,this._hash=a.hash,this},g.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},g.prototype._finish=function(a,n){var t=n,e,o,r;if(a[t>>2]|=128<<(t%4<<3),t>55)for(d(this._hash,a),t=0;t<16;t+=1)a[t]=0;e=this._length*8,e=e.toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(e[2],16),r=parseInt(e[1],16)||0,a[14]=o,a[15]=r,d(this._hash,a)},g.hash=function(a,n){return g.hashBinary(A(a),n)},g.hashBinary=function(a,n){var t=w(a),e=u(t);return n?b(e):e},g.ArrayBuffer=function(){this.reset()},g.ArrayBuffer.prototype.append=function(a){var n=m(this._buff.buffer,a),t=n.length,e;for(this._length+=a.byteLength,e=64;e<=t;e+=64)d(this._hash,U(n.subarray(e-64,e)));return this._buff=e-64<t?new Uint8Array(n.buffer.slice(e-64)):new Uint8Array(0),this},g.ArrayBuffer.prototype.end=function(a){var n=this._buff,t=n.length,e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],o,r;for(o=0;o<t;o+=1)e[o>>2]|=n[o]<<(o%4<<3);return this._finish(e,t),r=u(this._hash),a&&(r=b(r)),this.reset(),r},g.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},g.ArrayBuffer.prototype.getState=function(){var a=g.prototype.getState.call(this);return a.buff=M(a.buff),a},g.ArrayBuffer.prototype.setState=function(a){return a.buff=x(a.buff,!0),g.prototype.setState.call(this,a)},g.ArrayBuffer.prototype.destroy=g.prototype.destroy,g.ArrayBuffer.prototype._finish=g.prototype._finish,g.ArrayBuffer.hash=function(a,n){var t=y(new Uint8Array(a)),e=u(t);return n?b(e):e},g})})(ae);var He=ae.exports;const Ne=Me(He),Ee={class:"min-h-screen flex items-center justify-center p-4 overflow-hidden transition-colors duration-300"},qe={class:"p-8"},We={class:"flex justify-center space-x-4 mb-6"},Qe={key:"file",class:"grid grid-cols-1 gap-8"},Ge={key:0,class:"absolute inset-0 w-full h-full"},Je={class:"block truncate"},Ke={key:"text",class:"grid grid-cols-1 gap-8"},Oe={key:0,class:"flex flex-col"},Xe={class:"flex flex-col space-y-4"},Ye={key:0,class:"flex items-center space-x-2"},Ze={class:"relative flex-grow"},et=["placeholder"],tt={type:"submit",class:"w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-4 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group"},rt={class:"relative z-10 flex items-center justify-center text-lg"},ot={class:"mt-6 text-center"},nt={class:"flex-grow overflow-y-auto p-6"},at={class:"flex-shrink-0 mr-4"},st={class:"flex-grow min-w-0 mr-4"},it={class:"flex-shrink-0 flex space-x-2"},lt=["onClick"],ut=["onClick"],ct=["onClick"],dt={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},ft={class:"space-y-4"},ht={class:"flex items-center"},pt={class:"flex items-center"},gt={class:"flex items-center"},yt={class:"flex items-center"},vt={class:"mt-6 flex justify-between items-center"},bt={class:"flex flex-col items-center w-1/2 pr-2"},xt={class:"text-2xl font-bold text-indigo-600"},mt={class:"flex flex-col items-center w-1/2 pl-2"},wt={class:"bg-white p-2 rounded-lg shadow-md"},_t=re({__name:"SendFileView",setup(q){const R=_e(),c=Ce("isDarkMode"),B=Be(),d=T("file"),_=T(null),U=T(""),w=T(null),y=T("day"),v=T(""),u=T(0),A=T(!1),x=T(null),M=pe(),m=ge(()=>B.shareData),b=T(""),g=T(new Set),a=()=>{var f;(f=w.value)==null||f.click()},n=async f=>{const s=f.target;s.files&&s.files.length>0&&(_.value=s.files[0],b.value=await e(_.value))},t=async f=>{var s;(s=f.dataTransfer)!=null&&s.files&&f.dataTransfer.files.length>0&&(_.value=f.dataTransfer.files[0],b.value=await e(_.value),o())},e=async f=>new Promise(s=>{const p=new Ne.ArrayBuffer,k=new FileReader;let L=0;const Q=Math.ceil(f.size/2097152);k.onload=H=>{p.append(H.target.result),L++,L<Q?Z():s(p.end())};const Z=()=>{const H=L*2097152,fe=H+2097152>=f.size?f.size:H+2097152;k.readAsArrayBuffer(f.slice(H,fe))};Z()}),o=async()=>{if(!_.value)return;const f=1024*1024,s=Math.ceil(_.value.size/f),{uploadedList:I}=await r(b.value);g.value=new Set(I);for(let p=0;p<s;p++){if(g.value.has(p)){console.log(`切片 ${p} 已上传,跳过`);continue}const k=p*f,L=Math.min(k+f,_.value.size),Q=_.value.slice(k,L);await S(Q,p,s),u.value=(g.value.size+1)/s*100}await D(b.value,s),M.showAlert("文件上传完成","success")},r=async f=>(console.log(f),new Promise(s=>{setTimeout(()=>{s({uploadedList:[]})},500)})),S=async(f,s,I)=>new Promise(p=>{setTimeout(()=>{console.log(`上传切片 ${s+1}/${I}`),g.value.add(s),p()},500)}),D=async(f,s)=>{console.log(`请求合并文件切片, fileHash: ${f}, totalChunks: ${s}`)},z=()=>{switch(y.value){case"day":return"输入天数";case"hour":return"输入小时数";case"minute":return"输入分钟数";case"count":return"输入查看次数";case"forever":return"永久";default:return"输入值"}},V=()=>{switch(y.value){case"day":return"天";case"hour":return"小时";case"minute":return"分钟";case"count":return"次";case"forever":return"永久";default:return""}},se=async()=>{if(d.value==="file"&&!_.value){M.showAlert("请选择要上传的文件","error");return}if(d.value==="text"&&!U.value.trim()){M.showAlert("请输入要发送的文本","error");return}if(y.value!=="forever"&&!v.value){M.showAlert("请输入过期值","error");return}try{let f;const s=new FormData;if(d.value==="file")s.append("file",_.value);else{const p=new Blob([U.value],{type:"text/plain"});s.append("file",p,"text_content.txt")}y.value!=="forever"&&s.append("expire_value",v.value),s.append("expire_style",y.value);const I={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:p=>{const k=Math.round(p.loaded*100/p.total);u.value=k}};if(f=await Ae.post("/share/file/",s,I),f&&f.code===200){const p=f.detail.code,k=f.detail.name,L={id:Date.now(),filename:k,date:new Date().toISOString().split("T")[0],size:d.value==="text"?`${(U.value.length/1024).toFixed(2)} KB`:`${(_.value.size/(1024*1024)).toFixed(1)} MB`,expiration:y.value==="forever"?"永久":`${v.value}${V()}后过期`,retrieveCode:p};B.addShareData(L),M.showAlert(`文件发送成功！取件码：${p}`,"success"),_.value=null,U.value="",v.value="",u.value=0,A.value=!0,await Y(p)}else throw new Error("服务器响应异常")}catch(f){console.error("发送失败:",f),f.response.data.detail?M.showAlert(f.response.data.detail,"error"):M.showAlert("发送失败,请稍后重试","error")}finally{u.value=0}},ie=()=>{R.push("/")},O=()=>{A.value=!A.value},le=f=>{x.value=f},ue=f=>{const s=B.shareData.findIndex(I=>I.id===f);s!==-1&&B.deleteShareData(s)},X="",ce=f=>`${X}/?code=${f.retrieveCode}`,de=async f=>{try{await navigator.clipboard.writeText(f),M.showAlert("取件码已复制到剪贴板","success")}catch(s){console.error("无法复制取件码: ",s),M.showAlert("复制失败,请手动复制取件码","error")}},Y=async f=>{const s=`${X}/?code=${f}`;try{await navigator.clipboard.writeText(s),M.showAlert("取件链接已复制到剪贴板","success")}catch(I){console.error("无法复制取件链接: ",I),M.showAlert("复制失败,请动复制取件链接","error")}};return oe(()=>{console.log("SendFileView mounted")}),(f,s)=>{const I=Se("router-link");return F(),$("div",Ee,[i("div",{class:h(["rounded-3xl shadow-2xl overflow-hidden border w-full max-w-md transition-colors duration-300",[l(c)?"bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl border-gray-700":"bg-white border-gray-200"]])},[i("div",qe,[i("h2",{class:h(["text-3xl font-extrabold text-center mb-8 cursor-pointer transition-colors duration-300",[l(c)?"text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300":"text-indigo-600"]]),onClick:ie}," FileCodeBox ",2),i("form",{onSubmit:G(se,["prevent"]),class:"space-y-8"},[i("div",We,[i("button",{type:"button",onClick:s[0]||(s[0]=p=>d.value="file"),class:h(["px-4 py-2 rounded-lg",d.value==="file"?"bg-indigo-600 text-white":"bg-gray-700 text-gray-300"])}," 发送文件 ",2),i("button",{type:"button",onClick:s[1]||(s[1]=p=>d.value="text"),class:h(["px-4 py-2 rounded-lg",d.value==="text"?"bg-indigo-600 text-white":"bg-gray-700 text-gray-300"])}," 发送文本 ",2)]),C(K,{name:"fade",mode:"out-in"},{default:N(()=>[d.value==="file"?(F(),$("div",Qe,[i("div",{class:h(["rounded-xl p-8 flex flex-col items-center justify-center border-2 border-dashed transition-all duration-300 group cursor-pointer relative",[l(c)?"bg-gray-800 bg-opacity-50 border-gray-600 hover:border-indigo-500":"bg-gray-100 border-gray-300 hover:border-indigo-500"]]),onClick:a,onDragover:s[2]||(s[2]=G(()=>{},["prevent"])),onDrop:G(t,["prevent"])},[i("input",{id:"file-upload",type:"file",class:"hidden",onChange:n,ref_key:"fileInput",ref:w},null,544),u.value>0?(F(),$("div",Ge,[C(Ve,{progress:u.value},null,8,["progress"])])):E("",!0),C(l(Le),{class:h(["w-16 h-16 transition-colors duration-300",l(c)?"text-gray-400 group-hover:text-indigo-400":"text-gray-600 group-hover:text-indigo-600"])},null,8,["class"]),i("p",{class:h(["mt-4 text-sm transition-colors duration-300 w-full text-center",l(c)?"text-gray-400 group-hover:text-indigo-400":"text-gray-600 group-hover:text-indigo-600"])},[i("span",Je,P(_.value?_.value.name:"点击或拖放文件到此处上传"),1)],2),i("p",{class:h(["mt-2 text-xs",l(c)?"text-gray-500":"text-gray-400"])}," 支持各种常见格式，最大20MB ",2)],34)])):(F(),$("div",Ke,[d.value==="text"?(F(),$("div",Oe,[J(i("textarea",{id:"text-content","onUpdate:modelValue":s[3]||(s[3]=p=>U.value=p),rows:"7",class:h(["flex-grow px-4 py-3 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 resize-none",l(c)?"bg-gray-800 bg-opacity-50 text-white":"bg-white text-gray-900 border border-gray-300"]),placeholder:"在此输入要发送的文本..."},null,2),[[ee,U.value]])])):E("",!0)]))]),_:1}),i("div",Xe,[i("label",{class:h(["text-sm font-medium",l(c)?"text-gray-300":"text-gray-700"])}," 过期方式 ",2),J(i("select",{"onUpdate:modelValue":s[4]||(s[4]=p=>y.value=p),class:h(["px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500",l(c)?"bg-gray-800 bg-opacity-50 text-white":"bg-white text-gray-900 border border-gray-300"])},s[8]||(s[8]=[ve('<option value="day" data-v-ca34ea61>按天数</option><option value="hour" data-v-ca34ea61>按小时</option><option value="minute" data-v-ca34ea61>按分钟</option><option value="count" data-v-ca34ea61>按查看次数</option><option value="forever" data-v-ca34ea61>永久</option>',5)]),2),[[ye,y.value]]),y.value!=="forever"?(F(),$("div",Ye,[i("div",Ze,[J(i("input",{"onUpdate:modelValue":s[5]||(s[5]=p=>v.value=p),type:"number",placeholder:z(),class:h(["w-full px-4 py-2 pr-16 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500",l(c)?"bg-gray-800 bg-opacity-50 text-white":"bg-white text-gray-900 border border-gray-300"])},null,10,et),[[ee,v.value]]),i("span",{class:h(["absolute right-3 top-1/2 transform -translate-y-1/2",l(c)?"text-gray-300":"text-gray-700"])},P(V()),3)])])):E("",!0)]),i("button",tt,[s[10]||(s[10]=i("span",{class:"absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"},null,-1)),i("span",rt,[C(l(je),{class:"w-6 h-6 mr-2"}),s[9]||(s[9]=i("span",null,"安全寄送",-1))])])],32),i("div",ot,[C(I,{to:"/",class:"text-indigo-400 hover:text-indigo-300 transition duration-300"},{default:N(()=>s[11]||(s[11]=[j(" 需要取件？点击这里 ")])),_:1})])]),i("div",{class:h(["px-8 py-4 bg-opacity-50 flex justify-between items-center",[l(c)?"bg-gray-800":"bg-gray-100"]])},[i("span",{class:h(["text-sm flex items-center",[l(c)?"text-gray-300":"text-gray-800"]])},[C(l(Te),{class:"w-4 h-4 mr-1 text-green-400"}),s[12]||(s[12]=j(" 安全加密 "))],2),i("button",{onClick:O,class:h(["text-sm hover:text-indigo-300 transition duration-300 flex items-center",[l(c)?"text-indigo-400":"text-indigo-600"]])},[s[13]||(s[13]=j(" 发件记录 ")),C(l(Ie),{class:"w-4 h-4 ml-1"})],2)],2)],2),C(K,{name:"drawer"},{default:N(()=>[A.value?(F(),$("div",{key:0,class:h(["fixed inset-y-0 right-0 w-full sm:w-120 bg-opacity-70 backdrop-filter backdrop-blur-xl shadow-2xl z-50 overflow-hidden flex flex-col",[l(c)?"bg-gray-900":"bg-white"]])},[i("div",{class:h(["flex justify-between items-center p-6 border-b",[l(c)?"border-gray-700":"border-gray-200"]])},[i("h3",{class:h(["text-2xl font-bold",[l(c)?"text-white":"text-gray-800"]])}," 发件记录 ",2),i("button",{onClick:O,class:h(["hover:text-white transition duration-300",[l(c)?"text-gray-400":"text-gray-800"]])},[C(l(be),{class:"w-6 h-6"})],2)],2),i("div",nt,[C(xe,{name:"list",tag:"div",class:"space-y-4"},{default:N(()=>[(F(!0),$(me,null,we(m.value,p=>(F(),$("div",{key:p.id,class:h(["bg-opacity-50 rounded-lg p-4 flex items-center shadow-md hover:shadow-lg transition duration-300 transform hover:scale-102",[l(c)?"bg-gray-800 hover:bg-gray-700":"bg-gray-100 hover:bg-white"]])},[i("div",at,[C(l(te),{class:h(["w-10 h-10",[l(c)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"])]),i("div",st,[i("p",{class:h(["font-medium text-lg truncate",[l(c)?"text-white":"text-gray-800"]])},P(p.filename),3),i("p",{class:h(["text-sm truncate",[l(c)?"text-gray-400":"text-gray-600"]])},P(p.date)+" · "+P(p.size),3)]),i("div",it,[i("button",{onClick:k=>Y(p.retrieveCode),class:h(["p-2 rounded-full hover:bg-opacity-20 transition duration-300",[l(c)?"hover:bg-blue-400 text-blue-400":"hover:bg-blue-100 text-blue-600"]])},[C(l(ze),{class:"w-5 h-5"})],10,lt),i("button",{onClick:k=>le(p),class:h(["p-2 rounded-full hover:bg-opacity-20 transition duration-300",[l(c)?"hover:bg-green-400 text-green-400":"hover:bg-green-100 text-green-600"]])},[C(l(De),{class:"w-5 h-5"})],10,ut),i("button",{onClick:k=>ue(p.id),class:h(["p-2 rounded-full hover:bg-opacity-20 transition duration-300",[l(c)?"hover:bg-red-400 text-red-400":"hover:bg-red-100 text-red-600"]])},[C(l($e),{class:"w-5 h-5"})],10,ct)])],2))),128))]),_:1})])],2)):E("",!0)]),_:1}),C(K,{name:"fade"},{default:N(()=>[x.value?(F(),$("div",dt,[i("div",{class:h(["p-8 rounded-2xl max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300 ease-out backdrop-filter backdrop-blur-lg bg-opacity-70",[l(c)?"bg-gray-800":"bg-white"]])},[i("h3",{class:h(["text-2xl font-bold mb-6",[l(c)?"text-white":"text-gray-800"]])}," 文件详情 ",2),i("div",ft,[i("div",ht,[C(l(te),{class:h(["w-6 h-6 mr-3",[l(c)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"]),i("p",{class:h([l(c)?"text-gray-300":"text-gray-800"])},[s[14]||(s[14]=i("span",{class:"font-medium"},"文件名：",-1)),j(P(x.value.filename),1)],2)]),i("div",pt,[C(l(ke),{class:h(["w-6 h-6 mr-3",[l(c)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"]),i("p",{class:h([l(c)?"text-gray-300":"text-gray-800"])},[s[15]||(s[15]=i("span",{class:"font-medium"},"发送日期：",-1)),j(P(x.value.date),1)],2)]),i("div",gt,[C(l(Fe),{class:h(["w-6 h-6 mr-3",[l(c)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"]),i("p",{class:h([l(c)?"text-gray-300":"text-gray-800"])},[s[16]||(s[16]=i("span",{class:"font-medium"},"文件大小：",-1)),j(P(x.value.size),1)],2)]),i("div",yt,[C(l(Pe),{class:h(["w-6 h-6 mr-3",[l(c)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"]),i("p",{class:h([l(c)?"text-gray-300":"text-gray-800"])},[s[17]||(s[17]=i("span",{class:"font-medium"},"过期时间：",-1)),j(P(x.value.expiration),1)],2)])]),i("div",vt,[i("div",bt,[i("h4",{class:h(["text-lg font-semibold mb-3",[l(c)?"text-white":"text-gray-800"]])}," 取件码 ",2),i("div",{class:"bg-gray-100 p-3 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition-colors duration-300 w-full text-center",onClick:s[6]||(s[6]=p=>de(x.value.retrieveCode))},[i("p",xt,P(x.value.retrieveCode),1)]),i("p",{class:h(["mt-2 text-sm",[l(c)?"text-gray-400":"text-gray-600"]])}," 点击复制取件码 ",2)]),i("div",mt,[i("h4",{class:h(["text-lg font-semibold mb-3",[l(c)?"text-white":"text-gray-800"]])}," 二维码 ",2),i("div",wt,[C(Ue,{value:ce(x.value),size:128,level:"M"},null,8,["value"])]),i("p",{class:h(["mt-2 text-sm",[l(c)?"text-gray-400":"text-gray-600"]])}," 扫描二维码快速取件 ",2)])]),i("button",{onClick:s[7]||(s[7]=p=>x.value=null),class:"mt-8 w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105"}," 关闭 ")],2)])):E("",!0)]),_:1})])}}}),Bt=ne(_t,[["__scopeId","data-v-ca34ea61"]]);export{Bt as default};
