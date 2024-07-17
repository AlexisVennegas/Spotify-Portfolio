import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent, e as renderTransition } from '../chunks/astro/server_CC0dz80I.mjs';
import 'kleur/colors';
import 'html-escaper';
import { P as Projects, E as Education, C as Cantantes, S as Skills, a as ContactoData, I as Information, $ as $$Navigator, b as $$AsideList, c as $$AsideLibrary, d as $$Thumb, e as $$VolumenControl, f as $$Layout } from '../chunks/VolumenControl_B7fSjJYo.mjs';
import 'clsx';
/* empty css                                */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro();
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$List;
  const { title, index, item } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="containerData" data-astro-cid-kkksmmij> <div class="" data-astro-cid-kkksmmij> ${index + 1} </div> <div class="" data-astro-cid-kkksmmij> <picture data-astro-cid-kkksmmij> <img${addAttribute(item.imageUrl, "src")}${addAttribute(item.title, "alt")} data-astro-cid-kkksmmij> </picture> <div class="information" data-astro-cid-kkksmmij> <h3 class="song-title" data-astro-cid-kkksmmij>${item.title}</h3> <p class="description" data-astro-cid-kkksmmij>${item.description}</p> </div> </div> <div class="" data-astro-cid-kkksmmij> ${item.album} </div> <div class="" data-astro-cid-kkksmmij> <div data-astro-cid-kkksmmij> ${item.yt ? renderTemplate`<a${addAttribute(`${item.yt}`, "href")} target="_blank" data-astro-cid-kkksmmij> <img src="./yt.png" alt="logo de youtube" data-astro-cid-kkksmmij> </a>` : null} </div> <div data-astro-cid-kkksmmij> ${item.github ? renderTemplate`<a${addAttribute(`${item.github}`, "href")} target="_blank" data-astro-cid-kkksmmij> <img src="./github.png" alt="logo de github" data-astro-cid-kkksmmij> </a>` : null} </div> </div> <div class="" data-astro-cid-kkksmmij> ${item.time} </div> </div> `;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/List/List.astro", void 0);

const imageSets = {
  1: [
    "../App/presentation1.jpg",
    "../App/presentation2.jpg",
    "../App/presentation3.jpg",
    "../App/presentation4.jpg",
    "../App/presentation5.jpg",
    "../App/presentation6.jpg",
    "../App/presentation7.jpg"
  ],
  2: [
    "../App/app1.png",
    "../App/app2.png",
    "../App/app3.png",
    "../App/app4.png",
    "../App/app5.png",
    "../App/app6.png",
    "../App/app7.png",
    "../App/app8.png",
    "../App/app9.png",
    "../App/app10.png",
    "../App/app13.png"
  ],
  3: [
    "https://media.licdn.com/dms/image/D4D22AQEpiXxWcHUzJA/feedshare-shrink_2048_1536/0/1709313128877?e=1723680000&v=beta&t=8T30V0gvMY1mLnY_AeDwAJmYRmDMWe1HVbkGg1V-kzw",
    "https://media.licdn.com/dms/image/D4D22AQEJiVEjQOaLvg/feedshare-shrink_2048_1536/0/1709124883701?e=1723680000&v=beta&t=w6Ej-i3sykXOlzl5dvVaJU-ULPS4U_ta5KwQijW64rM",
    "https://media.licdn.com/dms/image/D4E22AQHLbnx5ShIqPw/feedshare-shrink_800/0/1696967362502?e=1723680000&v=beta&t=jSmVqhOaI7GGo9ykro9QQqp4GAELP3qBrD7VhGY7uZ4",
    "https://lh3.googleusercontent.com/fife/ALs6j_Gkcd8_HcNbtbynGkzY8zUo-JgXitwwEH6dUVEZyWu-gJl-fxumwmSh7mJmwKgTtSW9nVifx3VRlK2cMjEanExP72HRrnf1qXqCrfMUJMvlZk3KMR0w_Syq_Z2tj5M8belyrQ2RYa4oS_H10h3nxJeLifcGnLxYq2XYFx3KTPvCwKGaFZGwxaeylkW5KmeOAov5fwE0Ixgzo0jBSoEcXeS2A5zhyHyFbc-7yICRUL-lrzeLrDtBvyZrKmD1NOz4yZSNghwiBKSR9TqmrZeJvmjkWg67Kq208thUMmRE6j771WxeBV11Xnv8C09fhdeyFsCTY21_YeQgEuM2jGsRS7gQC120R7gyMRjDrzqk3RrD3GdV3T80wg4ZuDTXpW6XcvgrP1bIrITmylHKLiHxfO7I5T6hIYbt2D_O0LS9-9lXVCeHquiiQ6R166MAPBO879xBrDAH7pzPIxBqs5Q_xgKAFsvjS4uNBIGWXvspKsmnViG6SgqgI8kUh5TOdQwPWQAaQOF4wgWDtjH_xBdODCMgziXXu9CHAfo5LIYdwthJW6OB4IfZxNGg9QrXmEpBkZywmWhgPVp0q3EG9XIzCUUsl_JJU2IY-Dc2obyBZ29FJRpDC3mN3SuHuoOG9fkK9HocYxcfj1oq-aQF_7cHFC0Ldy8tofhzNxem_F9fmjbI0tTTwPRPCjQDpiX2exbfLjBofZrCaIyYREiq4qisoAxd0bnlGzJhvfwmb2Ds9DTdec0scmf6Zan79ygF5SrkjXXT_XyuMuXEM8Sf9hucc-TxVETr4iCLQSSK2yR9Twm7D_FK6_Zx4jmuM68BPjSP2JXNNTgCQ57EIZnSc8Q4TVungMwKkaUONBwlmrqxfZUS8jmAubhKk6ARH-6hXcB66_sPeRSzN1qNXuuleLMk0KmiCSiV0ljFTpNto6VAmSL3O7V7ufSXxYmaEycv2GVDSph_9MYWfzxbNAPsRXt5Ulz9D1vnLYQcX_SB9xmucD9QJ5LvSqiH5Xsx8bvPQymoYGdw8e7v1hvnqfqPM0WhpGrsTKBw5QQXZPVoqKacbRMvVk1ImVBbHjIO-HB4reg1wskXrcBpY6Z7ez_gdHHx1O8N-2MeUqRbKrGfpIPWfw-N8CRVR-I7-1N0mscjzqogtwDCwIL-MEEDZ2nh5pcc93qxLro5bDZYOXbGZ2nlIXSEVxGKOcKcTKE6BOLNGdsn7Rrs2dKnLmybl3KJsGgzTO4Ezk9qbkH3LALmn2mKakB3aWSNZ4K4IDPKOqVfLbVbYwurM__g8j62dW24GTQh7Q5V2UHGL3v7u2oTDUmngcIMKmYBllDMeBE0oQ8hc9nUr5Qk9T2kkvH2lgpRfhxw60frUdWiUcMFEtLIC0OV53Wzk7_7kNmFGINfGvQ8e4bpKg7YTQp1JKT3A5tZnKn1bSjO_0dTPwGpRUwWdNDf1I7wIil6lbZVtsTwrBVOpiWE6qpxVQ7Zt5mIVJ3ElQ1kfampYSmk7nLX3b0f1DpayqIpM3SbA0YwSJ329d5TYyCsW-qizZfWnXm9Fjc_yJ5INIBAGB9_e7GZ8SwBh7j5AfOklJs0OolFbEhnirE2LgbRQk6PKqwuEY7Rqaf8uve3ZL_Me6j_3L_vPHIwHUXoyE8MRUf84tkbXmsBt7BP_PobDH1OvhDyQWPZ4QxAAXrmlh6lZuU=w1920-h1080",
    "https://lh3.googleusercontent.com/fife/ALs6j_FhCBJ3z_0KHBCuMGRGU065yRu5sOcjoVhS7LSCc77uSQbxKS2lnI2ubfUa__rkMzAEFUNPmfOBIWy82GBvd-d15DVDBkObxsoLSDcSCmnPt0kebinGLUfs1VmgqJQZw90jIgT_pMEaEQZhKggCMQKvhGRPfHkWmmOb_35kMRPh2PtzcV7rdk51f7J-l3q3IXxtF3qXDs6t1PItrnm-GzRdjjVuH3hkd4EA0-daYs0rnFfnTqVIcyaG0GKVl3tHef-Tr6R-Al77cfzJMQ0EGDNmokBMgpyp_0o3Kg41FczL15LluYLV4zCjxsvi_SFcpDD3I1NOTUDWIs3WGcsHYRoHMLmR4e1tDunhn7pOeSgtQlvEezsE4CCtmf90kaWG9Now8kVtD3wFEvSZ_AGLUW1gZaHXoUajP10l1qSd1XopnLPnHbKmZUEgCMtAOIjjHPWbx-_OAvEESf596TgjekLNkBHjPI70aat6vk6GdqQTV3I8wSco-AaQ5el0eOvur9WlevYN4UtKIG3akwyb5012FhNqMqrVl3ZEq78uFUof2T7fm7O31O3lJXp1H1heVteIZajp3TIXiw0nyAx8DwNTaipdPDt6zJlgB7rY0PD1MNr_Ryn9434uKSgOoVf_bD5I-hF2uGGLEPxyPPBhHV2SlvJ1zPiMT6SyMw7cpsp7mpg7QPVhBs9wMad1KEPcl4L8e_Lp3Cn0laNqehHdaeWaii4R-8cLDmwFEjYe95lt1Q1fdYcC2jMYaXJ8PnNkWv6WWK1h_ECEpIkf6OM_Zkm6zKGOITgB1H9tda7D9DT4oZRAnM_ZpjF8_EdGRSB4JFqUnrsRAHLibP3DIWIkv4BG7n_D6r9Y4t-LBUX_q5ErOEMaOUvMrileINaCtH76LSXC6GIFkrs9W6XMGwLmBraHy133hisZ7siTt14SulXeBgxD7Vpo3deKQ07WwyCuEQIMMtym2g23qAOP4gQW75-xtZzODMJGUn7oOustalyfqtRcWBv7NCTMlkfXPVsDsAtwx5mD4HW0xgxjQVWgoDedYE1e0WFIaz1d2DZHcbEb-kAjvmmiqOIMinUyohNpRjciwG2lQzerHfcNw9qMO1iG4Ey9jtnc_3wDTCAjVuqOE5be0bmnEDBOuWDAle2W2Qnbm9fhem81E5aBuHWif_TXkchYDMrmNiOLWdch1BxLCFd3e3H2eEq5_xCO8_mduhYEH0DAhdvAlNAIEBXkiIbI6HG2NXj8BRElR_mU9jQhDfqhTazBVfgoVa-qla09oRHMf92SJghKN-P0gjZm_veLmpehCb6z-EZ9a33c-eXb9qp5Uxy8YCzwRzPloRcS5B4cMVsIlasWHLdPz5Sk8oFrM6Ld8b4drM4yquWnrpuJlxPayv0Pu-B6RlghOW1Q2lSYxep7FJrqJ1UkkVyZY7mGvqyZp1Iic2XCBj3ZN1s9APrYGDig__c5JYQRr95Npo5an0db-EpSlFT0oglIJ8jpJDT5gfX8CJE1F7zaymoP4Md4YgSxk1630st0ZeoAsXq3feTPUmatWf2iotn9K751OEs05iUoNnOoPPml0DVse8OxPetS8NXIBpd-xIboCto_eBzWRf1w_cc7UA0iF1TKIiMBtmk5Y_fZzAT1RSz0d99W0cpH7KQrm7vFQfLZnofKbO-9j6n8Fk985OPbxCDhX9k=w1920-h912",
    "https://lh3.google.com/u/0/d/1a13LjHPjiFIMwGhCgnvNZILVghi08CN0=w1920-h912-iv1",
    "https://lh3.google.com/u/0/d/18ChA395FEkiI2taFOjfrml4cbkOn01sh=w1920-h912-iv1"
  ]
};
const Slider = ({ id }) => {
  const images = imageSets[id] || [];
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = images.length;
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5e3);
    return () => clearInterval(intervalId);
  }, [slideIndex]);
  const showSlides = () => {
    return images.map((src, index) => /* @__PURE__ */ jsx("div", { className: `slide ${index === slideIndex ? "active" : ""}`, children: /* @__PURE__ */ jsx("img", { src, alt: `Slide ${index + 1}` }) }, index));
  };
  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? totalSlides - 1 : slideIndex - 1);
  };
  const nextSlide = () => {
    setSlideIndex(slideIndex === totalSlides - 1 ? 0 : slideIndex + 1);
  };
  return /* @__PURE__ */ jsxs("div", { className: "slider", children: [
    /* @__PURE__ */ jsx("style", { children: id === 3 ? ".slider {height: 487px !important; width: 100% !important}" : "" }),
    /* @__PURE__ */ jsx("div", { className: "slides", children: showSlides() }),
    /* @__PURE__ */ jsx("button", { className: "prev", onClick: prevSlide, children: "❮" }),
    /* @__PURE__ */ jsx("button", { className: "next", onClick: nextSlide, children: "❯" })
  ] });
};

const $$Nasa = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="container-Nasa" data-astro-cid-xxuzuxzi> <div class="first-container-info" data-astro-cid-xxuzuxzi> <div data-astro-cid-xxuzuxzi> <div class="Article-info" data-astro-cid-xxuzuxzi> <p data-astro-cid-xxuzuxzi><span data-astro-cid-xxuzuxzi>FireGuardian</span> es una aplicación innovadora diseñada para mejorar las capacidades de los bomberos y las autoridades en la prevención y detección rápida de incendios forestales. Nuestra misión es proporcionar un conjunto de herramientas integral que empodere a quienes están en primera línea de la gestión de incendios.
                Propuesta en un Hackaton de la NASA, FireGuardian fue seleccionada como una de la segunda mejor propuesta de la competencia.
</p> </div> <div class="container-presentation" data-astro-cid-xxuzuxzi> ${renderComponent($$result, "Slider", Slider, { "client:load": true, "id": 1, "client:component-hydration": "load", "client:component-path": "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/React/Slider.jsx", "client:component-export": "default", "data-astro-cid-xxuzuxzi": true })} </div> </div> <div data-astro-cid-xxuzuxzi> <div class="information" data-astro-cid-xxuzuxzi> ${renderComponent($$result, "Slider", Slider, { "client:load": true, "id": 2, "client:component-hydration": "load", "client:component-path": "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/React/Slider.jsx", "client:component-export": "default", "data-astro-cid-xxuzuxzi": true })} </div> </div> </div> <div class="container-video" data-astro-cid-xxuzuxzi> <div class="Article-video" data-astro-cid-xxuzuxzi> <p data-astro-cid-xxuzuxzi> <span data-astro-cid-xxuzuxzi>1.-</span> Detección avanzada de incendios
                    Aprovechando la funcionalidad FIRMS de la NASA impulsada por IA, FireGuardian detecta posibles incendios y notifica rápidamente a los bomberos. La aplicación inicia un proceso de verificación utilizando rastreadores de vuelos, lo que garantiza una identificación precisa a través de datos en tiempo real de las cámaras de los aviones.
</p> <p data-astro-cid-xxuzuxzi> <span data-astro-cid-xxuzuxzi>2.-</span> Mapeo predictivo de riesgo de incendio
                    El segundo componente de FireGuardian es un mapa de calor dinámico que evalúa el riesgo de incendio en función de datos históricos de incendios y las condiciones climáticas actuales. Clasifica las áreas en tres niveles de riesgo: bajo, medio y alto, lo que permite a los bomberos monitorear y tomar medidas preventivas de manera proactiva. Actualizaciones de datos en tiempo real con API de Meteomatics
</p> <p data-astro-cid-xxuzuxzi> <span data-astro-cid-xxuzuxzi>3.-</span> FireGuardian lo mantiene informado con datos en tiempo real al interactuar perfectamente con la API de Meteomatics, lo que garantiza la precisión actualizada al minuto en la información meteorológica y sobre incendios. Participación comunitaria con dispositivos alimentados por satélite

                    Estamos ampliando nuestro alcance más allá de los bomberos y las autoridades al equipar a miembros clave de la comunidad, como guardabosques y agricultores, con dispositivos alimentados por satélite. Estos dispositivos cuentan con una interfaz de botón simple que envía alertas instantáneas a los bomberos, incluidos detalles precisos de geolocalización, incluso en áreas sin cobertura celular.
</p> </div> <iframe width="100%" height="561" src="https://www.youtube.com/embed/2GkS4y5iKZo" title="FireGuardian video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen data-astro-cid-xxuzuxzi></iframe> </div> </section> `;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/List/Nasa.astro", void 0);

const $$Astro$3 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  const { id } = Astro2.props;
  return renderTemplate`${id === "Projects" ? Projects.map((item, index) => renderTemplate`${maybeRenderHead()}<a${addAttribute(item.github, "href")} target="_blank" data-astro-cid-qhutehgw><article${addAttribute(index, "key")} data-astro-cid-qhutehgw><div class="pictureArticle" data-astro-cid-qhutehgw><img${addAttribute(item.imageUrl, "src")} data-astro-cid-qhutehgw></div><div class="infoArticle" data-astro-cid-qhutehgw><h4 data-astro-cid-qhutehgw>${item.title}</h4><p data-astro-cid-qhutehgw>Link • 2021</p></div></article></a>`) : id === "Educacion" ? Education.map((item, index) => renderTemplate`<article${addAttribute(index, "key")} data-astro-cid-qhutehgw><div class="pictureArticle" data-astro-cid-qhutehgw><img${addAttribute(item.imageUrl, "src")} data-astro-cid-qhutehgw></div><div class="infoArticle" data-astro-cid-qhutehgw><h4 data-astro-cid-qhutehgw>${item.title}</h4><p data-astro-cid-qhutehgw>${item.time}</p></div></article>`) : id === "Cantantes" ? Cantantes.map((item, index) => renderTemplate`<article${addAttribute(index, "key")} data-astro-cid-qhutehgw><div class="pictureArticle" data-astro-cid-qhutehgw><img${addAttribute(item.imageUrl, "src")} style="border-radius: 50%;     box-shadow: 0 8px 24px rgba(0, 0, 0, .5);" data-astro-cid-qhutehgw></div><div class="infoArticle" data-astro-cid-qhutehgw><h4 data-astro-cid-qhutehgw>${item.title}</h4><p data-astro-cid-qhutehgw>Link • 2021</p></div></article>`) : ""}`;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/List/Card.astro", void 0);

const $$SNetwork = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-u3myskhu> <a href="https://www.linkedin.com/in/alexis-venegas-gonzalez/" data-astro-cid-u3myskhu><img src="./linkedin.png" alt="logo de linkedin" data-astro-cid-u3myskhu></a> <!-- <a href="./Contacto"><img src="./email.png" alt="logo de correo"></a> --> <a href="https://github.com/AlexisVennegas" data-astro-cid-u3myskhu><img src="./github.png" alt="logo de github" data-astro-cid-u3myskhu></a> <a href="https://www.instagram.com/alex.vennegas/" data-astro-cid-u3myskhu><img src="./instagram.png" alt="logo de instagram" data-astro-cid-u3myskhu></a> <a id="download-link" href="cv.pdf" download="cv.pdf" data-astro-cid-u3myskhu><img src="./cv.png" alt="logo de instagram" data-astro-cid-u3myskhu></a> </section>  `;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/List/SNetwork.astro", void 0);

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-hokomaus> ${Skills.slice(0, 5).map((item, index) => renderTemplate`${renderComponent($$result, "List", $$List, { "key": index, "item": item, "index": index, "data-astro-cid-hokomaus": true })}`)} <h1 class="title" data-astro-cid-hokomaus>Discografía</h1> <div class="containerArticleModule" data-astro-cid-hokomaus> ${renderComponent($$result, "Card", $$Card, { "id": "Projects", "data-astro-cid-hokomaus": true })} </div> <h1 class="title" data-astro-cid-hokomaus>Estudios</h1> <div class="containerArticleModule" data-astro-cid-hokomaus> ${renderComponent($$result, "Card", $$Card, { "id": "Educacion", "data-astro-cid-hokomaus": true })} </div> <h1 class="title" data-astro-cid-hokomaus>Relacionados</h1> <div class="containerArticleModule" data-astro-cid-hokomaus> ${renderComponent($$result, "Card", $$Card, { "id": "Cantantes", "data-astro-cid-hokomaus": true })} </div> <h1 class="title" data-astro-cid-hokomaus>Informacion</h1> <div class="containerArticleModule especialContainer" data-astro-cid-hokomaus> <div class="slideraboutme" data-astro-cid-hokomaus> ${renderComponent($$result, "Slider", Slider, { "client:load": true, "id": 3, "client:component-hydration": "load", "client:component-path": "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/React/Slider.jsx", "client:component-export": "default", "data-astro-cid-hokomaus": true })} <p class="aboutmeText" data-astro-cid-hokomaus>Profesional con una destacada capacidad de aprendizaje y resolución de problemas.
                Experiencia en el diseño, desarrollo e implementación de aplicaciones web utilizando
                tecnologías modernas. Conocimientos sólidos en frontend y backend, con una pasión
                por crear soluciones eficientes y de alta calidad. Capaz de trabajar en equipo y
                adaptarse rápidamente a nuevos desafíos tecnológicos.
</p> </div> <div class="social-network" data-astro-cid-hokomaus> ${renderComponent($$result, "Snetwork", $$SNetwork, { "data-astro-cid-hokomaus": true })} </div> </div> </section> `;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/List/AboutMe.astro", void 0);

const $$Reloj = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="svg-special" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"> <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path> <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path> </svg>`;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/Icons/Reloj.astro", void 0);

const MailJs2 = ({ index, item }) => {
  const [valueName, setVname] = useState("");
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    user_message: ""
  });
  const [errors, setErrors] = useState({
    user_name: false,
    user_email: false,
    user_message: false
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
    validateField(name, value);
    if (name === "user_name") {
      setVname(value[0]);
    }
  };
  const validateField = (name, value) => {
    let isValid = true;
    if (name === "user_email" && !value.includes("@")) {
      isValid = false;
    }
    if (name === "user_message" && value.trim() === "") {
      isValid = false;
    }
    setErrors({
      ...errors,
      [name]: !isValid
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target.user_name);
    toast.promise(
      emailPromise,
      {
        loading: "Enviando correo...",
        success: "correo enviado!",
        error: "Error al enviar correo"
      },
      { position: "bottom-center" }
    );
    emailPromise.catch((error) => console.log(error));
  };
  return /* @__PURE__ */ jsxs("div", { className: "form-container", children: [
    /* @__PURE__ */ jsx(Toaster, {}),
    /* @__PURE__ */ jsxs("form", { className: "form-data", onSubmit: sendEmail, children: [
      /* @__PURE__ */ jsx("div", { children: index }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("picture", { className: "pictureStyle", children: valueName ? /* @__PURE__ */ jsx("p", { children: valueName }) : /* @__PURE__ */ jsx("img", { src: item.img, alt: "" }) }),
        item.type === "text" ? /* @__PURE__ */ jsx(
          "input",
          {
            id: "user_name",
            name: "user_name",
            placeholder: "Nombre...",
            "aria-invalid": errors.user_name ? "true" : "false",
            "aria-errormessage": "username-error-message",
            autoComplete: "username",
            className: errors.user_name ? "error" : "inputStyle",
            onChange: handleChange,
            type: "text",
            value: formState.user_name
          }
        ) : item.type === "email" ? /* @__PURE__ */ jsx(
          "input",
          {
            id: "user_email",
            name: "user_email",
            placeholder: "Correo...",
            "aria-invalid": errors.user_email ? "true" : "false",
            "aria-errormessage": "email-error-message",
            autoComplete: "email",
            className: errors.user_email ? "error" : "inputStyle",
            value: formState.user_email,
            onChange: handleChange,
            type: "email"
          }
        ) : item.type === "textarea" ? /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "user_message",
            name: "user_message",
            placeholder: "Mensaje...",
            "aria-invalid": errors.user_message ? "true" : "false",
            "aria-errormessage": "message-error-message",
            autoComplete: "message",
            className: errors.user_message ? "error" : "textareaStyle",
            value: formState.user_message,
            onChange: handleChange
          }
        ) : item.type === "submit" ? /* @__PURE__ */ jsx("button", { className: "buttonStyle", children: "Enviar" }) : null
      ] }),
      /* @__PURE__ */ jsx("div", {}),
      /* @__PURE__ */ jsx("div", {}),
      /* @__PURE__ */ jsx("div", { children: item.duration })
    ] })
  ] });
};

const $$Astro$2 = createAstro();
const $$AreaInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AreaInfo;
  const { title } = Astro2.props;
  const display = title === "Nasa" ? "none" : "flex";
  const widthContainer = title === "Nasa" ? "100%" : "90%";
  return renderTemplate`${maybeRenderHead()}<div class="playListOrder"${addAttribute(`width: ${widthContainer}`, "style")} data-astro-cid-3ntewswn> ${title === "Conoceme" ? renderTemplate`<h1 class="title" data-astro-cid-3ntewswn>Populares</h1>` : ""} <header${addAttribute(`display: ${display}`, "style")} data-astro-cid-3ntewswn> <div class="" data-astro-cid-3ntewswn>
#
</div> <div class="" data-astro-cid-3ntewswn>
Título
</div> <div class="" data-astro-cid-3ntewswn>
Álbum
</div> <div class="" data-astro-cid-3ntewswn>
Link
</div> <div class="" data-astro-cid-3ntewswn> ${renderComponent($$result, "Reloj", $$Reloj, { "data-astro-cid-3ntewswn": true })} </div> </header> ${title === "Habilidades" ? Skills.map((item, index) => renderTemplate`${renderComponent($$result, "List", $$List, { "key": index, "item": item, "index": index, "data-astro-cid-3ntewswn": true })}`) : title === "Proyectos" ? Projects.map((item, index) => renderTemplate`${renderComponent($$result, "List", $$List, { "key": index, "item": item, "index": index, "data-astro-cid-3ntewswn": true })}`) : title === "Educacion" ? Education.map((item, index) => renderTemplate`${renderComponent($$result, "List", $$List, { "key": index, "item": item, "index": index, "data-astro-cid-3ntewswn": true })}`) : title === "Nasa" ? renderTemplate`${renderComponent($$result, "Nasa", $$Nasa, { "data-astro-cid-3ntewswn": true })}` : title === "Conoceme" ? renderTemplate`${renderComponent($$result, "AboutMe", $$AboutMe, { "data-astro-cid-3ntewswn": true })}` : title === "Contacto" ? (
    // <MailJs client:load/>
    ContactoData.map((item, index) => renderTemplate`${renderComponent($$result, "Mailjs2", MailJs2, { "item": item, "index": index, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/React/Mailjs2", "client:component-export": "default", "data-astro-cid-3ntewswn": true })}`)
  ) : ""} </div> `;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/AreaInfo.astro", void 0);

const $$Astro$1 = createAstro();
const $$Check = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Check;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="icon-container" data-astro-cid-swupiobu> <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="icon" data-astro-cid-swupiobu> <path d="M10.814.5a1.658 1.658 0 0 1 2.372 0l2.512 2.572 3.595-.043a1.658 1.658 0 0 1 1.678 1.678l-.043 3.595 2.572 2.512c.667.65.667 1.722 0 2.372l-2.572 2.512.043 3.595a1.658 1.658 0 0 1-1.678 1.678l-3.595-.043-2.512 2.572a1.658 1.658 0 0 1-2.372 0l-2.512-2.572-3.595.043a1.658 1.658 0 0 1-1.678-1.678l.043-3.595L.5 13.186a1.658 1.658 0 0 1 0-2.372l2.572-2.512-.043-3.595a1.658 1.658 0 0 1 1.678-1.678l3.595.043L10.814.5zm6.584 9.12a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z" data-astro-cid-swupiobu></path> </svg> </div> `;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/Icons/Check.astro", void 0);

const $$Vinyl = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="vinyl" data-astro-cid-afnb66u3> <div class="label" data-astro-cid-afnb66u3></div> </div> `;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/Icons/Vinyl.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  function getInformationByTitle(title) {
    return Information.find((item) => item.title === title);
  }
  const info = getInformationByTitle(id);
  const parrafo = info ? info.description : "Descripci\xF3n no encontrada";
  function getColor(id2) {
    const colors = {
      Contacto: "rgb(254,211,0)",
      Habilidades: "rgb(218,31,32)",
      Conoceme: "rgb(46,128,196)",
      Proyectos: "rgb(55,0,93)",
      Educacion: "rgb(223,183,0)",
      Nasa: "rgb(1,0,16)",
      feature: "rgb(48,50,55)"
    };
    return colors[id2] || "rgb(208, 40, 56)";
  }
  const backgroundColor = getColor(id);
  const showIcon = id === "Nasa" ? "none" : "flex";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bienvenido a mi Portafolio", "data-astro-cid-p5zaeqd4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="wrapper" data-astro-cid-p5zaeqd4> <div class="section-up" data-astro-cid-p5zaeqd4> <div class="panel-left" data-astro-cid-p5zaeqd4> ${renderComponent($$result2, "Navigator", $$Navigator, { "data-astro-cid-p5zaeqd4": true })} <div class="list-songs" data-astro-cid-p5zaeqd4> ${renderComponent($$result2, "AsideList", $$AsideList, { "data-astro-cid-p5zaeqd4": true })} <ul data-astro-cid-p5zaeqd4> ${renderComponent($$result2, "AsideLibrary", $$AsideLibrary, { "data-astro-cid-p5zaeqd4": true })} </ul> </div> </div> <div class="panel-center" data-astro-cid-p5zaeqd4> <div class="player"${addAttribute(`background: linear-gradient(to bottom, ${backgroundColor},  #121212 30%);`, "style")} data-astro-cid-p5zaeqd4> <div class="container-player" data-astro-cid-p5zaeqd4${addAttribute(renderTransition($$result2, "rmup7d7b", "", `Article-${id}`), "data-astro-transition-scope")}> <header data-astro-cid-p5zaeqd4> <div class="pictureHeader" data-astro-cid-p5zaeqd4> <img${addAttribute(`./${id}.jpg`, "src")} alt="imagen de articulo" data-astro-cid-p5zaeqd4${addAttribute(renderTransition($$result2, "oweduhhg", "", `Album-${id}`), "data-astro-transition-scope")}> ${renderComponent($$result2, "Vinyl", $$Vinyl, { "data-astro-cid-p5zaeqd4": true })} </div> <div class="infoHeader" data-astro-cid-p5zaeqd4> ${id === "Conoceme" ? renderTemplate`<div class="icon-container" data-astro-cid-p5zaeqd4> ${renderComponent($$result2, "Check", $$Check, { "id": id, "data-astro-cid-p5zaeqd4": true })} <p data-astro-cid-p5zaeqd4>Artista Verificado</p> </div>` : renderTemplate`<h2 data-astro-cid-p5zaeqd4>Playlist</h2>`} <h1${addAttribute(`titleCard${id}-1`, "class")}${addAttribute(id === "Conoceme" ? "margin: 10px 0 0px 50px; font-size: 54px;" : "", "style")} data-astro-cid-p5zaeqd4${addAttribute(renderTransition($$result2, "l6ekbra7", "", `titleCard${id}`), "data-astro-transition-scope")}>${id === "Conoceme" ? "Alexis Venegas Gonz\xE1lez" : id}</h1> <p data-astro-cid-p5zaeqd4${addAttribute(renderTransition($$result2, "2xoxgjuc", "", `paragraph${id}`), "data-astro-transition-scope")}>${id === "Conoceme" ? "14.319.774 oyentes mensuales" : parrafo}</p> </div> </header> <div class="button-container"${addAttribute(`display: ${showIcon}`, "style")} data-astro-cid-p5zaeqd4> <button class="play-button" data-astro-cid-p5zaeqd4${addAttribute(renderTransition($$result2, "jqxgrvd4", "", `Button-${id}`), "data-astro-transition-scope")}> <svg class="svg-special" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-astro-cid-p5zaeqd4><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" data-astro-cid-p5zaeqd4></path></svg> </button> </div> <section class="sectionMiddle" data-astro-cid-p5zaeqd4> ${renderComponent($$result2, "AreaInfo", $$AreaInfo, { "title": `${id}`, "data-astro-cid-p5zaeqd4": true })} </section></div> </div> </div> </div> <div class="section-under" data-astro-cid-p5zaeqd4> <div class="panel-under" data-astro-cid-p5zaeqd4> <div class="information-music" data-astro-cid-p5zaeqd4> <div class="cover" data-astro-cid-p5zaeqd4> <img${addAttribute(`./${id}.jpg`, "src")} alt="varios lenguajes de programacion" data-astro-cid-p5zaeqd4> <div class="information" data-astro-cid-p5zaeqd4> <h4 data-astro-cid-p5zaeqd4>${id}</h4> <p data-astro-cid-p5zaeqd4>Alexis Venegas</p> </div> </div> </div> <div class="control-music" data-astro-cid-p5zaeqd4> ${renderComponent($$result2, "Thumb", $$Thumb, { "data-astro-cid-p5zaeqd4": true })} </div> <div class="control-volumen" data-astro-cid-p5zaeqd4> ${renderComponent($$result2, "VolumenControl", $$VolumenControl, { "data-astro-cid-p5zaeqd4": true })} </div> </div> </div> </div> ` })}  `;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/pages/[id].astro", "self");

const $$file = "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/pages/[id].astro";
const $$url = "/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
