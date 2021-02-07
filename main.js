(()=>{"use strict";var e={841:(e,t,r)=>{var n=r(709),s=r(169),a=r(764),o=r.n(a);const l=Symbol("empty"),i=Symbol("pending"),p=Symbol("err"),c=e=>{let{instance:t}=c;if(t)return t;let{defaults:r}=e;return r&&(delete e.defaults,r=o()(r)),c.instance=[(t,r)=>{let n,{type:s,args:a}=r,o=e[s];return o&&(n=o(t,...a)),void 0===n?t:n},r]},u=(...e)=>Object.assign(new Error(...e),{[p]:!0});u[p]=!0;const f=n.createContext(),{Fragment:d,useEffect:m}=n,y={Fragment:d,Store:e=>{let{reducer:t,actions:r,...s}=e,[a,o]=n.useReducer(...c(t)),l=(e,...t)=>{let n=r[e];n?n(...t,l):o({type:e,args:t})};return n.createElement(f.Provider,Object.assign({},s,{value:{store:a,dispatch:l}}))},createElement:(e,t,...r)=>{if(t){let{classList:e,className:r}=t;if(e){if(Array.isArray(e)){let[t,n]=e;n&&(n=Object.entries(n).map((([e,r])=>{if(r||0===r)return t+"--"+e+(!0===r?"":"-"+r)}))),r=[t,...n,r]}else r=[e,r];r=r.filter((e=>e)).join(" "),r&&(t.className=r),delete t.classList}}return n.createElement(e,t,...r)},empty:l,error:u,isEmpty:e=>e===l,isError:e=>("object"==typeof e||"function"==typeof e)&&!0===e[p],isPending:e=>e===i,pending:i,render:(e,t=".root")=>("string"==typeof t&&(t=document.querySelector(t)),s.render(e,t)),useEffect:m,useStore:()=>n.useContext(f)};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const h=e=>{let{name:t,size:r,...n}=e;return y.createElement("div",g({},n,{classList:["icon",{name:t,size:r}]}))};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const b=e=>y.createElement("div",v({},e,{classList:"loading-overlay"}),y.createElement(h,{classList:"loading-overlay__icon",name:"loading",size:"large"}));function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const O=e=>{let{color:t,name:r,url:n,...s}=e;return y.createElement("a",E({},s,{classList:"app-card",href:n}),r)};function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const x=e=>{let t,{store:r,dispatch:n}=y.useStore(),{apps:s}=r;return y.useEffect((()=>{y.isEmpty(s)&&n("readApps")})),y.isEmpty(s)?null:(t=y.isPending(s)?y.createElement(b,{classList:"app-list__loading-overlay"}):y.isError(s)?"Не удалось загрузить список приложений!":s.map((e=>y.createElement(O,j({},e,{key:e.name,classList:"app-list__app-card"})))),y.createElement("div",j({},e,{classList:"app-list"}),t))},w={defaults:{apps:y.empty},setApps:(e,t)=>e.set("apps",t)},_={readApps:async e=>{e("setApps",y.pending);let t=await fetch("apps.json");t.ok?e("setApps",await t.json()):e("setApps",y.error)}};y.render(y.createElement(y.Store,{reducer:w,actions:_},y.createElement(x,null)))}},t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.m=e,r.x=e=>{},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0},t=[[841,736]],n=e=>{},s=(s,a)=>{for(var o,l,[i,p,c,u]=a,f=0,d=[];f<i.length;f++)l=i[f],r.o(e,l)&&e[l]&&d.push(e[l][0]),e[l]=0;for(o in p)r.o(p,o)&&(r.m[o]=p[o]);for(c&&c(r),s&&s(a);d.length;)d.shift()();return u&&t.push.apply(t,u),n()},a=self.webpackChunkhome_page=self.webpackChunkhome_page||[];function o(){for(var n,s=0;s<t.length;s++){for(var a=t[s],o=!0,l=1;l<a.length;l++){var i=a[l];0!==e[i]&&(o=!1)}o&&(t.splice(s--,1),n=r(r.s=a[0]))}return 0===t.length&&(r.x(),r.x=e=>{}),n}a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a));var l=r.x;r.x=()=>(r.x=l||(e=>{}),(n=o)())})(),r.x()})();