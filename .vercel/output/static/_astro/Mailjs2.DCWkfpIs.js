import{j as g}from"./jsx-runtime.7faW4zRM.js";import{r as d}from"./index.DhYZZe0J.js";/* empty css                      */let T={data:""},H=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||T,L=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,R=/\/\*[^]*?\*\/|  +/g,P=/\n+/g,x=(e,t)=>{let a="",i="",s="";for(let r in e){let o=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+o+";":i+=r[1]=="f"?x(o,r):r+"{"+x(o,r[1]=="k"?"":t)+"}":typeof o=="object"?i+=x(o,t?t.replace(/([^,])+/g,n=>r.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):r):o!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=x.p?x.p(r,o):r+":"+o+";")}return a+(t&&s?t+"{"+s+"}":s)+i},y={},I=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+I(e[a]);return t}return e},U=(e,t,a,i,s)=>{let r=I(e),o=y[r]||(y[r]=(l=>{let c=0,u=11;for(;c<l.length;)u=101*u+l.charCodeAt(c++)>>>0;return"go"+u})(r));if(!y[o]){let l=r!==e?e:(c=>{let u,p,m=[{}];for(;u=L.exec(c.replace(R,""));)u[4]?m.shift():u[3]?(p=u[3].replace(P," ").trim(),m.unshift(m[0][p]=m[0][p]||{})):m[0][u[1]]=u[2].replace(P," ").trim();return m[0]})(e);y[o]=x(s?{["@keyframes "+o]:l}:l,a?"":"."+o)}let n=a&&y.g?y.g:null;return a&&(y.g=y[o]),((l,c,u,p)=>{p?c.data=c.data.replace(p,l):c.data.indexOf(l)===-1&&(c.data=u?l+c.data:c.data+l)})(y[o],t,i,n),o},V=(e,t,a)=>e.reduce((i,s,r)=>{let o=t[r];if(o&&o.call){let n=o(a),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;o=l?"."+l:n&&typeof n=="object"?n.props?"":x(n,""):n===!1?"":n}return i+s+(o??"")},"");function S(e){let t=this||{},a=e.call?e(t.p):e;return U(a.unshift?a.raw?V(a,[].slice.call(arguments,1),t.p):a.reduce((i,s)=>Object.assign(i,s&&s.call?s(t.p):s),{}):a,H(t.target),t.g,t.o,t.k)}let M,O,A;S.bind({g:1});let b=S.bind({k:1});function J(e,t,a,i){x.p=t,M=e,O=a,A=i}function v(e,t){let a=this||{};return function(){let i=arguments;function s(r,o){let n=Object.assign({},r),l=n.className||s.className;a.p=Object.assign({theme:O&&O()},n),a.o=/ *go\d+/.test(l),n.className=S.apply(a,i)+(l?" "+l:"");let c=e;return e[0]&&(c=n.as||e,delete n.as),A&&c[0]&&A(n),M(c,n)}return s}}var Y=e=>typeof e=="function",C=(e,t)=>Y(e)?e(t):e,Z=(()=>{let e=0;return()=>(++e).toString()})(),F=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),q=20,_=new Map,B=1e3,z=e=>{if(_.has(e))return;let t=setTimeout(()=>{_.delete(e),w({type:4,toastId:e})},B);_.set(e,t)},G=e=>{let t=_.get(e);t&&clearTimeout(t)},D=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,q)};case 1:return t.toast.id&&G(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:a}=t;return e.toasts.find(r=>r.id===a.id)?D(e,{type:1,toast:a}):D(e,{type:0,toast:a});case 3:let{toastId:i}=t;return i?z(i):e.toasts.forEach(r=>{z(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===i||i===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+s}))}}},$=[],N={toasts:[],pausedAt:void 0},w=e=>{N=D(N,e),$.forEach(t=>{t(N)})},Q={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},W=(e={})=>{let[t,a]=d.useState(N);d.useEffect(()=>($.push(a),()=>{let s=$.indexOf(a);s>-1&&$.splice(s,1)}),[t]);let i=t.toasts.map(s=>{var r,o;return{...e,...e[s.type],...s,duration:s.duration||((r=e[s.type])==null?void 0:r.duration)||e?.duration||Q[s.type],style:{...e.style,...(o=e[s.type])==null?void 0:o.style,...s.style}}});return{...t,toasts:i}},X=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:a?.id||Z()}),E=e=>(t,a)=>{let i=X(t,e,a);return w({type:2,toast:i}),i.id},h=(e,t)=>E("blank")(e,t);h.error=E("error");h.success=E("success");h.loading=E("loading");h.custom=E("custom");h.dismiss=e=>{w({type:3,toastId:e})};h.remove=e=>w({type:4,toastId:e});h.promise=(e,t,a)=>{let i=h.loading(t.loading,{...a,...a?.loading});return e.then(s=>(h.success(C(t.success,s),{id:i,...a,...a?.success}),s)).catch(s=>{h.error(C(t.error,s),{id:i,...a,...a?.error})}),e};var K=(e,t)=>{w({type:1,toast:{id:e,height:t}})},ee=()=>{w({type:5,time:Date.now()})},te=e=>{let{toasts:t,pausedAt:a}=W(e);d.useEffect(()=>{if(a)return;let r=Date.now(),o=t.map(n=>{if(n.duration===1/0)return;let l=(n.duration||0)+n.pauseDuration-(r-n.createdAt);if(l<0){n.visible&&h.dismiss(n.id);return}return setTimeout(()=>h.dismiss(n.id),l)});return()=>{o.forEach(n=>n&&clearTimeout(n))}},[t,a]);let i=d.useCallback(()=>{a&&w({type:6,time:Date.now()})},[a]),s=d.useCallback((r,o)=>{let{reverseOrder:n=!1,gutter:l=8,defaultPosition:c}=o||{},u=t.filter(f=>(f.position||c)===(r.position||c)&&f.height),p=u.findIndex(f=>f.id===r.id),m=u.filter((f,k)=>k<p&&f.visible).length;return u.filter(f=>f.visible).slice(...n?[m+1]:[0,m]).reduce((f,k)=>f+(k.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:K,startPause:ee,endPause:i,calculateOffset:s}}},ae=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,re=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,se=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,oe=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ae} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${re} 0.15s ease-out forwards;
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
    animation: ${se} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ie=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ne=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ie} 1s linear infinite;
`,le=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ce=b`
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
}`,de=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${le} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ce} 0.2s ease-out forwards;
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
`,ue=v("div")`
  position: absolute;
`,me=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,pe=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,fe=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${pe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ge=({toast:e})=>{let{icon:t,type:a,iconTheme:i}=e;return t!==void 0?typeof t=="string"?d.createElement(fe,null,t):t:a==="blank"?null:d.createElement(me,null,d.createElement(ne,{...i}),a!=="loading"&&d.createElement(ue,null,a==="error"?d.createElement(oe,{...i}):d.createElement(de,{...i})))},he=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ye=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,be="0%{opacity:0;} 100%{opacity:1;}",xe="0%{opacity:1;} 100%{opacity:0;}",ve=v("div")`
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
`,we=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ee=(e,t)=>{let a=e.includes("top")?1:-1,[i,s]=F()?[be,xe]:[he(a),ye(a)];return{animation:t?`${b(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},je=d.memo(({toast:e,position:t,style:a,children:i})=>{let s=e.height?Ee(e.position||t||"top-center",e.visible):{opacity:0},r=d.createElement(ge,{toast:e}),o=d.createElement(we,{...e.ariaProps},C(e.message,e));return d.createElement(ve,{className:e.className,style:{...s,...a,...e.style}},typeof i=="function"?i({icon:r,message:o}):d.createElement(d.Fragment,null,r,o))});J(d.createElement);var _e=({id:e,className:t,style:a,onHeightUpdate:i,children:s})=>{let r=d.useCallback(o=>{if(o){let n=()=>{let l=o.getBoundingClientRect().height;i(e,l)};n(),new MutationObserver(n).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return d.createElement("div",{ref:r,className:t,style:a},s)},$e=(e,t)=>{let a=e.includes("top"),i=a?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:F()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...i,...s}},Ne=S`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,j=16,Ce=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:i,children:s,containerStyle:r,containerClassName:o})=>{let{toasts:n,handlers:l}=te(a);return d.createElement("div",{style:{position:"fixed",zIndex:9999,top:j,left:j,right:j,bottom:j,pointerEvents:"none",...r},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},n.map(c=>{let u=c.position||t,p=l.calculateOffset(c,{reverseOrder:e,gutter:i,defaultPosition:t}),m=$e(u,p);return d.createElement(_e,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?Ne:"",style:m},c.type==="custom"?C(c.message,c):s?s(c):d.createElement(je,{toast:c,position:u}))}))};const Ae=({index:e,item:t})=>{const[a,i]=d.useState(""),[s,r]=d.useState({user_name:"",user_email:"",user_message:""}),[o,n]=d.useState({user_name:!1,user_email:!1,user_message:!1}),l=p=>{const{name:m,value:f}=p.target;r({...s,[m]:f}),c(m,f),m==="user_name"&&i(f[0])},c=(p,m)=>{let f=!0;p==="user_email"&&!m.includes("@")&&(f=!1),p==="user_message"&&m.trim()===""&&(f=!1),n({...o,[p]:!f})},u=p=>{p.preventDefault(),console.log(p.target.user_name),h.promise(emailPromise,{loading:"Enviando correo...",success:"correo enviado!",error:"Error al enviar correo"},{position:"bottom-center"}),emailPromise.catch(m=>console.log(m))};return g.jsxs("div",{className:"form-container",children:[g.jsx(Ce,{}),g.jsxs("form",{className:"form-data",onSubmit:u,children:[g.jsx("div",{children:e}),g.jsxs("div",{children:[g.jsx("picture",{className:"pictureStyle",children:a?g.jsx("p",{children:a}):g.jsx("img",{src:t.img,alt:""})}),t.type==="text"?g.jsx("input",{id:"user_name",name:"user_name",placeholder:"Nombre...","aria-invalid":o.user_name?"true":"false","aria-errormessage":"username-error-message",autoComplete:"username",className:o.user_name?"error":"inputStyle",onChange:l,type:"text",value:s.user_name}):t.type==="email"?g.jsx("input",{id:"user_email",name:"user_email",placeholder:"Correo...","aria-invalid":o.user_email?"true":"false","aria-errormessage":"email-error-message",autoComplete:"email",className:o.user_email?"error":"inputStyle",value:s.user_email,onChange:l,type:"email"}):t.type==="textarea"?g.jsx("textarea",{id:"user_message",name:"user_message",placeholder:"Mensaje...","aria-invalid":o.user_message?"true":"false","aria-errormessage":"message-error-message",autoComplete:"message",className:o.user_message?"error":"textareaStyle",value:s.user_message,onChange:l}):t.type==="submit"?g.jsx("button",{className:"buttonStyle",children:"Enviar"}):null]}),g.jsx("div",{}),g.jsx("div",{}),g.jsx("div",{children:t.duration})]})]})};export{Ae as default};
