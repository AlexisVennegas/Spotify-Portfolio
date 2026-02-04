import{j as b}from"./jsx-runtime.BjG_zV1W.js";import{r as d}from"./index.CzjdDlXV.js";/* empty css                      */let Z={data:""},q=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||Z},J=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,K=/\/\*[^]*?\*\/|  +/g,F=/\n+/g,w=(e,t)=>{let a="",s="",i="";for(let o in e){let r=e[o];o[0]=="@"?o[1]=="i"?a=o+" "+r+";":s+=o[1]=="f"?w(r,o):o+"{"+w(r,o[1]=="k"?"":t)+"}":typeof r=="object"?s+=w(r,t?t.replace(/([^,])+/g,n=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):o):r!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=w.p?w.p(o,r):o+":"+r+";")}return a+(t&&i?t+"{"+i+"}":i)+s},v={},M=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+M(e[a]);return t}return e},Q=(e,t,a,s,i)=>{let o=M(e),r=v[o]||(v[o]=(l=>{let c=0,u=11;for(;c<l.length;)u=101*u+l.charCodeAt(c++)>>>0;return"go"+u})(o));if(!v[r]){let l=o!==e?e:(c=>{let u,p,m=[{}];for(;u=J.exec(c.replace(K,""));)u[4]?m.shift():u[3]?(p=u[3].replace(F," ").trim(),m.unshift(m[0][p]=m[0][p]||{})):m[0][u[1]]=u[2].replace(F," ").trim();return m[0]})(e);v[r]=w(i?{["@keyframes "+r]:l}:l,a?"":"."+r)}let n=a&&v.g?v.g:null;return a&&(v.g=v[r]),((l,c,u,p)=>{p?c.data=c.data.replace(p,l):c.data.indexOf(l)===-1&&(c.data=u?l+c.data:c.data+l)})(v[r],t,s,n),r},W=(e,t,a)=>e.reduce((s,i,o)=>{let r=t[o];if(r&&r.call){let n=r(a),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;r=l?"."+l:n&&typeof n=="object"?n.props?"":w(n,""):n===!1?"":n}return s+i+(r??"")},"");function N(e){let t=this||{},a=e.call?e(t.p):e;return Q(a.unshift?a.raw?W(a,[].slice.call(arguments,1),t.p):a.reduce((s,i)=>Object.assign(s,i&&i.call?i(t.p):i),{}):a,q(t.target),t.g,t.o,t.k)}let L,A,I;N.bind({g:1});let x=N.bind({k:1});function G(e,t,a,s){w.p=t,L=e,A=a,I=s}function E(e,t){let a=this||{};return function(){let s=arguments;function i(o,r){let n=Object.assign({},o),l=n.className||i.className;a.p=Object.assign({theme:A&&A()},n),a.o=/ *go\d+/.test(l),n.className=N.apply(a,s)+(l?" "+l:"");let c=e;return e[0]&&(c=n.as||e,delete n.as),I&&c[0]&&I(n),L(c,n)}return i}}var X=e=>typeof e=="function",D=(e,t)=>X(e)?e(t):e,ee=(()=>{let e=0;return()=>(++e).toString()})(),R=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),te=20,P="default",H=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:s}=t;return H(e,{type:e.toasts.find(r=>r.id===s.id)?1:0,toast:s});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(r=>r.id===i||i===void 0?{...r,dismissed:!0,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+o}))}}},C=[],B={toasts:[],pausedAt:void 0,settings:{toastLimit:te}},h={},U=(e,t=P)=>{h[t]=H(h[t]||B,e),C.forEach(([a,s])=>{a===t&&s(h[t])})},V=e=>Object.keys(h).forEach(t=>U(e,t)),ae=e=>Object.keys(h).find(t=>h[t].toasts.some(a=>a.id===e)),O=(e=P)=>t=>{U(t,e)},re={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},se=(e={},t=P)=>{let[a,s]=d.useState(h[t]||B),i=d.useRef(h[t]);d.useEffect(()=>(i.current!==h[t]&&s(h[t]),C.push([t,s]),()=>{let r=C.findIndex(([n])=>n===t);r>-1&&C.splice(r,1)}),[t]);let o=a.toasts.map(r=>{var n,l,c;return{...e,...e[r.type],...r,removeDelay:r.removeDelay||((n=e[r.type])==null?void 0:n.removeDelay)||e?.removeDelay,duration:r.duration||((l=e[r.type])==null?void 0:l.duration)||e?.duration||re[r.type],style:{...e.style,...(c=e[r.type])==null?void 0:c.style,...r.style}}});return{...a,toasts:o}},oe=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:a?.id||ee()}),j=e=>(t,a)=>{let s=oe(t,e,a);return O(s.toasterId||ae(s.id))({type:2,toast:s}),s.id},f=(e,t)=>j("blank")(e,t);f.error=j("error");f.success=j("success");f.loading=j("loading");f.custom=j("custom");f.dismiss=(e,t)=>{let a={type:3,toastId:e};t?O(t)(a):V(a)};f.dismissAll=e=>f.dismiss(void 0,e);f.remove=(e,t)=>{let a={type:4,toastId:e};t?O(t)(a):V(a)};f.removeAll=e=>f.remove(void 0,e);f.promise=(e,t,a)=>{let s=f.loading(t.loading,{...a,...a?.loading});return typeof e=="function"&&(e=e()),e.then(i=>{let o=t.success?D(t.success,i):void 0;return o?f.success(o,{id:s,...a,...a?.success}):f.dismiss(s),i}).catch(i=>{let o=t.error?D(t.error,i):void 0;o?f.error(o,{id:s,...a,...a?.error}):f.dismiss(s)}),e};var ie=1e3,ne=(e,t="default")=>{let{toasts:a,pausedAt:s}=se(e,t),i=d.useRef(new Map).current,o=d.useCallback((p,m=ie)=>{if(i.has(p))return;let g=setTimeout(()=>{i.delete(p),r({type:4,toastId:p})},m);i.set(p,g)},[]);d.useEffect(()=>{if(s)return;let p=Date.now(),m=a.map(g=>{if(g.duration===1/0)return;let k=(g.duration||0)+g.pauseDuration-(p-g.createdAt);if(k<0){g.visible&&f.dismiss(g.id);return}return setTimeout(()=>f.dismiss(g.id,t),k)});return()=>{m.forEach(g=>g&&clearTimeout(g))}},[a,s,t]);let r=d.useCallback(O(t),[t]),n=d.useCallback(()=>{r({type:5,time:Date.now()})},[r]),l=d.useCallback((p,m)=>{r({type:1,toast:{id:p,height:m}})},[r]),c=d.useCallback(()=>{s&&r({type:6,time:Date.now()})},[s,r]),u=d.useCallback((p,m)=>{let{reverseOrder:g=!1,gutter:k=8,defaultPosition:z}=m||{},_=a.filter(y=>(y.position||z)===(p.position||z)&&y.height),Y=_.findIndex(y=>y.id===p.id),T=_.filter((y,S)=>S<Y&&y.visible).length;return _.filter(y=>y.visible).slice(...g?[T+1]:[0,T]).reduce((y,S)=>y+(S.height||0)+k,0)},[a]);return d.useEffect(()=>{a.forEach(p=>{if(p.dismissed)o(p.id,p.removeDelay);else{let m=i.get(p.id);m&&(clearTimeout(m),i.delete(p.id))}})},[a,o]),{toasts:a,handlers:{updateHeight:l,startPause:n,endPause:c,calculateOffset:u}}},le=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,de=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ce=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ue=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${le} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${de} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ce} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,pe=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,me=E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${pe} 1s linear infinite;
`,fe=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ge=x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ye=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${fe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ge} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,he=E("div")`
  position: absolute;
`,be=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ve=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,xe=E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ve} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,we=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return t!==void 0?typeof t=="string"?d.createElement(xe,null,t):t:a==="blank"?null:d.createElement(be,null,d.createElement(me,{...s}),a!=="loading"&&d.createElement(he,null,a==="error"?d.createElement(ue,{...s}):d.createElement(ye,{...s})))},Ee=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,je=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ke="0%{opacity:0;} 100%{opacity:1;}",$e="0%{opacity:1;} 100%{opacity:0;}",Ce=E("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,De=E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ne=(e,t)=>{let a=e.includes("top")?1:-1,[s,i]=R()?[ke,$e]:[Ee(a),je(a)];return{animation:t?`${x(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Oe=d.memo(({toast:e,position:t,style:a,children:s})=>{let i=e.height?Ne(e.position||t||"top-center",e.visible):{opacity:0},o=d.createElement(we,{toast:e}),r=d.createElement(De,{...e.ariaProps},D(e.message,e));return d.createElement(Ce,{className:e.className,style:{...i,...a,...e.style}},typeof s=="function"?s({icon:o,message:r}):d.createElement(d.Fragment,null,o,r))});G(d.createElement);var _e=({id:e,className:t,style:a,onHeightUpdate:s,children:i})=>{let o=d.useCallback(r=>{if(r){let n=()=>{let l=r.getBoundingClientRect().height;s(e,l)};n(),new MutationObserver(n).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return d.createElement("div",{ref:o,className:t,style:a},i)},Se=(e,t)=>{let a=e.includes("top"),s=a?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:R()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...s,...i}},Ae=N`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,Ie=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:i,toasterId:o,containerStyle:r,containerClassName:n})=>{let{toasts:l,handlers:c}=ne(a,o);return d.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none",...r},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(u=>{let p=u.position||t,m=c.calculateOffset(u,{reverseOrder:e,gutter:s,defaultPosition:t}),g=Se(p,m);return d.createElement(_e,{id:u.id,key:u.id,onHeightUpdate:c.updateHeight,className:u.visible?Ae:"",style:g},u.type==="custom"?D(u.message,u):i?i(u):d.createElement(Oe,{toast:u,position:p}))}))};const Fe=({index:e,item:t})=>{const[a,s]=d.useState(""),[i,o]=d.useState({user_name:"",user_email:"",user_message:""}),[r,n]=d.useState({user_name:!1,user_email:!1,user_message:!1}),l=c=>{c.preventDefault(),console.log(c.target.user_name),f.promise(emailPromise,{loading:"Enviando correo...",success:"correo enviado!",error:"Error al enviar correo"},{position:"bottom-center"}),emailPromise.catch(u=>console.log(u))};return b.jsxs("div",{className:"form-container",children:[b.jsx(Ie,{}),b.jsxs("form",{className:"form-data",onSubmit:l,children:[b.jsx("div",{children:e}),b.jsx("div",{children:b.jsx("picture",{className:"pictureStyle",children:a?b.jsx("p",{children:a}):b.jsx("img",{src:t.img,alt:""})})}),b.jsx("div",{children:t.duration})]})]})};export{Fe as default};
