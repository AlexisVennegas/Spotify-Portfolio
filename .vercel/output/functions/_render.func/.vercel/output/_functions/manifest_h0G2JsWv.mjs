import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_zPOSNUSS.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_CwJBoAYP.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.N3DtHZ0U.js"}],"styles":[{"type":"external","src":"/_astro/_id_.CPgAYcm6.css"},{"type":"external","src":"/_astro/_id_.B7yfuJ8a.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/[id]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BAFcMr1u.js"}],"styles":[{"type":"external","src":"/_astro/_id_.CPgAYcm6.css"},{"type":"inline","content":"section[data-astro-cid-wvmzzfol]{width:100%;height:15%;display:flex;align-items:center}p[data-astro-cid-wvmzzfol]{margin-left:20px;color:#fff;font-weight:700;font-size:1.8rem;line-height:2.25rem;font-family:Poppins,sans-serif}article[data-astro-cid-25e7qslk]{width:176px;height:236px;border-radius:.375rem;background-color:#71717a4d;padding:10px;margin-left:20px;cursor:pointer;transition-duration:.3s}.pictureArticle[data-astro-cid-25e7qslk]{width:100%;height:70%;position:relative;z-index:1}.pictureArticle[data-astro-cid-25e7qslk]>img[data-astro-cid-25e7qslk]{width:100%;height:100%;border-radius:.375rem}.infoArticle[data-astro-cid-25e7qslk]{width:100%;margin-top:10px}.infoArticle[data-astro-cid-25e7qslk]>h4[data-astro-cid-25e7qslk]{color:#fff;font-size:1rem;line-height:1.25rem}.infoArticle[data-astro-cid-25e7qslk]>p[data-astro-cid-25e7qslk]{color:#9ca3af;font-size:.6rem;line-height:1rem}.play-button[data-astro-cid-25e7qslk]{background-color:#22c55e;border:0px solid transparent;border-radius:50%;padding:8px;cursor:pointer;width:50px;height:50px;position:relative;left:100px;top:-50px;transition:.5s;z-index:2;opacity:0}article[data-astro-cid-25e7qslk]:hover .play-button[data-astro-cid-25e7qslk]{opacity:1!important;transition:.5s;left:100px;top:-64px}@media (width < 768px){article[data-astro-cid-25e7qslk]{width:121px!important;height:177px!important}.infoArticle[data-astro-cid-25e7qslk]>h4[data-astro-cid-25e7qslk]{color:#fff;text-align:center;font-size:1rem;line-height:1.25rem}}section[data-astro-cid-sm6om2n3]{width:100%;height:85%;display:flex;flex-wrap:wrap;gap:1rem;overflow-y:auto}@media (max-width: 768px){section[data-astro-cid-sm6om2n3]{justify-content:center}}.wrapper[data-astro-cid-j7pv25f6]{width:100%;height:100vh;background-color:#010101}.section-up[data-astro-cid-j7pv25f6]{display:flex;width:100%;height:85%}.section-under[data-astro-cid-j7pv25f6]{display:flex;width:100%;height:15%}.panel-left[data-astro-cid-j7pv25f6]{width:350px;height:100%;display:flex;flex-direction:column;justify-content:conter;align-items:center}.panel-center[data-astro-cid-j7pv25f6]{width:80%;height:100%;display:flex;justify-content:center}.player[data-astro-cid-j7pv25f6]{width:99%;height:auto;border-radius:10px;background:linear-gradient(to bottom,#1db954b5,#121212 50%);transition:background .5s;margin-top:10px}.panel-under[data-astro-cid-j7pv25f6]{width:100%;height:100%;display:flex}.information-music[data-astro-cid-j7pv25f6]{width:22%;height:100%}.cover[data-astro-cid-j7pv25f6]{width:64px;height:64px;border-radius:.375rem;background-color:#121212;margin:20px 0 0 10px}.control-music[data-astro-cid-j7pv25f6]{width:58%;height:100%}.control-volumen[data-astro-cid-j7pv25f6]{width:20%;height:100%}.list-songs[data-astro-cid-j7pv25f6]{width:334px;height:100%;border-radius:10px;background-color:#121212;overflow-y:scroll;overflow-x:hidden}@media (width < 768px){.information-music[data-astro-cid-j7pv25f6]{display:flex;justify-content:center;align-items:center}.cover[data-astro-cid-j7pv25f6]{margin:0!important}}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/ArticleModule.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/ContentArticle.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/pages/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[id]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/[id]@_@astro":"pages/_id_.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_h0G2JsWv.mjs","C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/React/Slider.jsx":"_astro/Slider.Hz8PKIaO.js","/astro/hoisted.js?q=0":"_astro/hoisted.N3DtHZ0U.js","C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/React/Mailjs2":"_astro/Mailjs2.Dt6PtKZC.js","@astrojs/react/client.js":"_astro/client.C75EGLGe.js","/astro/hoisted.js?q=1":"_astro/hoisted.BAFcMr1u.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_id_.CPgAYcm6.css","/_astro/_id_.B7yfuJ8a.css","/Conoceme.jpg","/Conoceme.png","/Contacto.jpg","/cv.png","/Educacion.jpg","/email.png","/eye-svgrepo-com.svg","/favicon.svg","/feature.jpg","/github.png","/Habilidades.jpg","/instagram.png","/linkedin.png","/Nasa.jpg","/pausa.png","/play.png","/proyecto1.png","/proyecto2.png","/proyecto3.png","/proyecto4.png","/Proyecto5.png","/Proyectos.jpg","/yo.png","/yt.png","/App/app1.png","/App/app10.png","/App/app11.png","/App/app12.png","/App/app13.png","/App/app2.png","/App/app3.png","/App/app4.png","/App/app5.png","/App/app6.png","/App/app7.png","/App/app8.png","/App/app9.png","/App/presentation1.jpg","/App/presentation2.jpg","/App/presentation3.jpg","/App/presentation4.jpg","/App/presentation5.jpg","/App/presentation6.jpg","/App/presentation7.jpg","/cv/cv-erick-alexis-venegas.pdf","/_astro/client.C75EGLGe.js","/_astro/hoisted.BAFcMr1u.js","/_astro/hoisted.N3DtHZ0U.js","/_astro/index.CzjdDlXV.js","/_astro/jsx-runtime.BjG_zV1W.js","/_astro/Mailjs2.Dt6PtKZC.js","/_astro/Slider.Hz8PKIaO.js","/_astro/_id_.CpzBpfF8.css"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"AmN2nDECADt1PBYySvOshHoTO+edmyU8nk67dUD18zo=","experimentalEnvGetSecretEnabled":false});

export { manifest };
