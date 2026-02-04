import { c as createComponent, m as maybeRenderHead, r as renderTemplate, e as addAttribute, f as renderTransition, g as renderComponent, h as createAstro } from '../chunks/astro/server_CwJBoAYP.mjs';
import 'kleur/colors';
import { I as Information, $ as $$Layout, a as $$Navigator, b as $$AsideList, c as $$AsideLibrary, d as $$Thumb, e as $$VolumenControl } from '../chunks/VolumenControl_CylTHsNB.mjs';
import 'clsx';
/* empty css                                 */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$TextTime = createComponent(($$result, $$props, $$slots) => {
  const date = /* @__PURE__ */ new Date();
  const hour = date.getHours();
  let greeting = "";
  if (hour >= 0 && hour < 12) {
    greeting = "Buenos d\xEDas";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Buenas tardes";
  } else {
    greeting = "Buenas noches";
  }
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-wvmzzfol> <p data-astro-cid-wvmzzfol>${greeting}, bienvenido</p> </section> `;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/TextTime.astro", void 0);

const $$ArticleModule = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${Information.map((item) => renderTemplate`${maybeRenderHead()}<a${addAttribute(item.title, "href")} data-astro-cid-25e7qslk><article data-astro-cid-25e7qslk${addAttribute(renderTransition($$result, "sj4ff3aw", "", `Article-${item.title}`), "data-astro-transition-scope")}><div class="pictureArticle" data-astro-cid-25e7qslk><img${addAttribute(`./${item.title}.jpg`, "src")} alt="imagen de articulo" data-astro-cid-25e7qslk${addAttribute(renderTransition($$result, "wy6gwpqt", "", `Album-${item.title}`), "data-astro-transition-scope")}><button class="play-button" data-astro-cid-25e7qslk${addAttribute(renderTransition($$result, "pmrqsj4j", "", `Button-${item.title}`), "data-astro-transition-scope")}><svg class="svg-special" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-astro-cid-25e7qslk><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" data-astro-cid-25e7qslk></path></svg></button></div><div class="infoArticle" data-astro-cid-25e7qslk><h4${addAttribute(`titleCard${item.title}-1`, "class")} data-astro-cid-25e7qslk${addAttribute(renderTransition($$result, "d4yi3vty", "", `titleCard${item.title}`), "data-astro-transition-scope")}>${item.title}</h4><p data-astro-cid-25e7qslk${addAttribute(renderTransition($$result, "37wz7sm7", "", `paragraph${item.title}`), "data-astro-transition-scope")}>Alexis Venegas</p></div></article></a>`)}`;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/ArticleModule.astro", "self");

const $$Astro = createAstro();
const $$ContentArticle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContentArticle;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-sm6om2n3${addAttribute(renderTransition($$result, "ne6wxooq", "", `Article${title}`), "data-astro-transition-scope")}> ${renderComponent($$result, "ArticleModule", $$ArticleModule, { "data-astro-cid-sm6om2n3": true })} </section> `;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/ContentArticle.astro", "self");

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bienvenido a mi Portafolio", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="wrapper" data-astro-cid-j7pv25f6> <div class="section-up" data-astro-cid-j7pv25f6> <div class="panel-left" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Navigator", $$Navigator, { "data-astro-cid-j7pv25f6": true })} <div class="list-songs" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "AsideList", $$AsideList, { "data-astro-cid-j7pv25f6": true })} <ul data-astro-cid-j7pv25f6> ${renderComponent($$result2, "AsideLibrary", $$AsideLibrary, { "data-astro-cid-j7pv25f6": true })} </ul> </div> </div> <div class="panel-center" data-astro-cid-j7pv25f6> <div class="player" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "TextTime", $$TextTime, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ContentArticle", $$ContentArticle, { "data-astro-cid-j7pv25f6": true })} </div> </div> </div> <div class="section-under" data-astro-cid-j7pv25f6> <div class="panel-under" data-astro-cid-j7pv25f6> <div class="information-music" data-astro-cid-j7pv25f6> <div class="cover" data-astro-cid-j7pv25f6></div> </div> <div class="control-music" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Thumb", $$Thumb, { "data-astro-cid-j7pv25f6": true })} </div> <div class="control-volumen" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "VolumenControl", $$VolumenControl, { "data-astro-cid-j7pv25f6": true })} </div> </div> </div> </div> ` })} `;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
