import{c as j,B as T,u as A,r as _,a as k,p as c,b as g,d as t,n as l,e as a,h as S,v as I,f as m,C as q,D as H,k as L,F as h,x as w,t as d,z as U,A as M}from"./index-BnjuZaZi.js";import{F as E}from"./file-DkiPlzMi.js";/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=j("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),Y={class:"mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"},G={class:"flex flex-1 gap-4"},J={class:"relative flex-1"},K={class:"flex gap-4"},N={class:"overflow-x-auto"},O={class:"px-6 py-4 whitespace-nowrap"},Q={class:"flex items-center"},R={class:"px-6 py-4 whitespace-nowrap"},W={class:"flex items-center"},X={class:"px-6 py-4 whitespace-nowrap"},Z={class:"px-6 py-4 whitespace-nowrap"},tt={class:"px-6 py-4 whitespace-nowrap"},et={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"},at=["onClick"],st={class:"flex items-center space-x-2"},rt=["disabled"],ot={class:"flex items-center space-x-1"},lt=["onClick"],nt=["disabled"],gt=T({__name:"FileManageView",setup(it){const D=A();function F(n){const r=new Date(n),e=r.getFullYear(),i=(r.getMonth()+1).toString().padStart(2,"0"),x=r.getDate().toString().padStart(2,"0"),v=r.getHours().toString().padStart(2,"0"),u=r.getMinutes().toString().padStart(2,"0"),P=r.getSeconds().toString().padStart(2,"0");return`${e}-${i}-${x} ${v}:${u}:${P}`}const o=U("isDarkMode"),f=_([]),$=["取件码","名称","大小","描述","过期时间","操作"],s=_({page:1,size:10,total:0,keyword:"",type:""}),V=async n=>{try{await M({url:"/admin/file/delete",method:"delete",data:{id:n}}),await y()}catch(r){console.error("删除失败:",r)}},y=async()=>{try{const n=await M({url:"/admin/file/list",method:"get",params:s.value});f.value=n.detail.data,s.value.total=n.detail.total,D.showAlert("加载成功","success")}catch(n){console.error("加载文件列表失败:",n)}},b=async n=>{n<1||n>p.value||(s.value.page=n,await y())};y();const p=k(()=>Math.ceil(s.value.total/s.value.size)),z=k(()=>{const n=s.value.page,r=p.value,e=2;let i=[];i.push(1);let x=Math.max(2,n-e),v=Math.min(r-1,n+e);x>2&&i.push("...");for(let u=x;u<=v;u++)i.push(u);return v<r-1&&i.push("..."),r>1&&i.push(r),i}),B=async()=>{s.value.page=1,await y()};return(n,r)=>(c(),g("div",null,[t("h2",{class:l(["text-2xl font-bold mb-6",[a(o)?"text-white":"text-gray-800"]])}," 文件管理 ",2),t("div",Y,[t("div",G,[t("div",J,[S(t("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>s.value.keyword=e),class:l([[a(o)?"bg-gray-700 border-gray-600 text-white placeholder-gray-400":"bg-white border-gray-300 text-gray-900 placeholder-gray-400"],"w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-transparent"]),placeholder:"搜索文件..."},null,2),[[I,s.value.keyword]]),m(a(C),{class:l(["absolute left-3 top-2.5 w-5 h-5",[a(o)?"text-gray-400":"text-gray-500"]])},null,8,["class"])]),S(t("select",{"onUpdate:modelValue":r[1]||(r[1]=e=>s.value.type=e),disabled:"",class:l([[a(o)?"bg-gray-700 border-gray-600 text-white":"bg-white border-gray-300 text-gray-900"],"border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"])},r[4]||(r[4]=[H('<option value="">所有类型</option><option value="PDF">PDF</option><option value="Image">图片</option><option value="Video">视频</option><option value="Document">文档</option>',5)]),2),[[q,s.value.type]])]),t("div",K,[t("button",{onClick:B,class:"flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200"},[m(a(C),{class:"w-5 h-5 mr-2"}),r[5]||(r[5]=L(" 搜索 "))])])]),t("div",{class:l(["rounded-lg shadow-md overflow-hidden transition-colors duration-300",[a(o)?"bg-gray-800 bg-opacity-70":"bg-white"]])},[t("div",{class:l(["px-6 py-4 border-b",[a(o)?"border-gray-700":"border-gray-200"]])},[t("h3",{class:l(["text-lg font-medium",[a(o)?"text-white":"text-gray-800"]])}," 所有文件 ",2)],2),t("div",N,[t("table",{class:l(["min-w-full divide-y",[a(o)?"divide-gray-700":"divide-gray-200"]])},[t("thead",{class:l([a(o)?"bg-gray-900":"bg-gray-100"])},[t("tr",null,[(c(),g(h,null,w($,e=>t("th",{key:e,class:l(["px-6 py-3 text-left text-xs font-medium uppercase tracking-wider",[a(o)?"text-gray-400":"text-gray-500"]])},d(e),3)),64))])],2),t("tbody",{class:l([a(o)?"bg-gray-800 divide-y divide-gray-700":"bg-white divide-y divide-gray-200"])},[(c(!0),g(h,null,w(f.value,e=>(c(),g("tr",{key:e.id},[t("td",O,[t("div",Q,[t("span",{class:l(["font-medium",[a(o)?"text-white":"text-gray-900"]])},d(e.code),3)])]),t("td",R,[t("div",W,[m(a(E),{class:l(["w-5 h-5 mr-2",[a(o)?"text-indigo-400":"text-indigo-500"]])},null,8,["class"]),t("span",{class:l(["font-medium",[a(o)?"text-white":"text-gray-900"]])},d(e.prefix),3)])]),t("td",X,[t("span",{class:l([a(o)?"text-gray-400":"text-gray-500"])},d(Math.round(e.size/1024/1024*100)/100)+"MB ",3)]),t("td",Z,[t("span",{class:l([a(o)?"text-gray-400":"text-gray-500"])},d(e.text),3)]),t("td",tt,[t("span",{class:l([a(o)?"text-gray-400":"text-gray-500"])},d(e.expired_at?F(e.expired_at):"永久"),3)]),t("td",et,[t("button",{onClick:i=>V(e.id),class:l(["transition-colors duration-200",[a(o)?"text-red-400 hover:text-red-300":"text-red-600 hover:text-red-900"]])}," 删除 ",10,at)])]))),128))],2)],2)])],2),t("div",{class:l(["mt-4 flex items-center justify-between px-6 py-3 border-t",[a(o)?"border-gray-700":"border-gray-200"]])},[t("div",{class:l(["flex items-center text-sm",[a(o)?"text-gray-400":"text-gray-500"]])}," 显示第 "+d((s.value.page-1)*s.value.size+1)+" 到 "+d(Math.min(s.value.page*s.value.size,s.value.total))+" 条，共 "+d(s.value.total)+" 条 ",3),t("div",st,[t("button",{onClick:r[2]||(r[2]=e=>b(s.value.page-1)),disabled:s.value.page===1,class:l(["px-3 py-1 rounded-md transition-colors duration-200",[a(o)?s.value.page===1?"bg-gray-700 text-gray-500 cursor-not-allowed":"bg-gray-700 text-gray-300 hover:bg-gray-600":s.value.page===1?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-gray-100 text-gray-700 hover:bg-gray-200"]])}," 上一页 ",10,rt),t("div",ot,[(c(!0),g(h,null,w(z.value,e=>(c(),g(h,{key:e},[e!=="..."?(c(),g("button",{key:0,onClick:i=>b(e),class:l(["px-3 py-1 rounded-md transition-colors duration-200",[s.value.page===e?"bg-indigo-600 text-white":a(o)?"bg-gray-700 text-gray-300 hover:bg-gray-600":"bg-gray-100 text-gray-700 hover:bg-gray-200"]])},d(e),11,lt)):(c(),g("span",{key:1,class:l(["px-2",[a(o)?"text-gray-400":"text-gray-500"]])}," ... ",2))],64))),128))]),t("button",{onClick:r[3]||(r[3]=e=>b(s.value.page+1)),disabled:s.value.page>=p.value,class:l(["px-3 py-1 rounded-md transition-colors duration-200",[a(o)?s.value.page>=p.value?"bg-gray-700 text-gray-500 cursor-not-allowed":"bg-gray-700 text-gray-300 hover:bg-gray-600":s.value.page>=p.value?"bg-gray-100 text-gray-400 cursor-not-allowed":"bg-gray-100 text-gray-700 hover:bg-gray-200"]])}," 下一页 ",10,nt)])],2)]))}});export{gt as default};
