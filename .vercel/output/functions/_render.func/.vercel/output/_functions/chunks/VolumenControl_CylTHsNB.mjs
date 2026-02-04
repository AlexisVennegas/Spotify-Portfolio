import { c as createComponent, e as addAttribute, r as renderTemplate, h as createAstro, g as renderComponent, i as renderHead, j as renderSlot, m as maybeRenderHead } from './astro/server_CwJBoAYP.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "none" })}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/layouts/Layout.astro", void 0);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-uzkvznr5><path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z" data-astro-cid-uzkvznr5></path></svg> `;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/Icons/Home.astro", void 0);

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-7gvu4rio><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z" data-astro-cid-7gvu4rio></path></svg> `;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/Icons/Search.astro", void 0);

const $$Navigator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="navegator" data-astro-cid-ldwxwdsj> <ul data-astro-cid-ldwxwdsj> <a href="./" data-astro-cid-ldwxwdsj> <li data-astro-cid-ldwxwdsj> ${renderComponent($$result, "Home", $$Home, { "data-astro-cid-ldwxwdsj": true })} <p id="search-text" data-astro-cid-ldwxwdsj>Inicio</p> </li> </a> <a data-astro-cid-ldwxwdsj> <li id="search-li" data-astro-cid-ldwxwdsj> ${renderComponent($$result, "Search", $$Search, { "data-astro-cid-ldwxwdsj": true })} <p id="search-text-search" data-astro-cid-ldwxwdsj>Buscar</p> <input id="search-input" type="search" placeholder="Buscar" data-astro-cid-ldwxwdsj> </li> </a> </ul> </div>  `;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/Navigator.astro", void 0);

const $$Biblioteca = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-kprr22id><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z" data-astro-cid-kprr22id></path></svg> `;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/Icons/Biblioteca.astro", void 0);

const $$AsideList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul data-astro-cid-kxnnk3ty> <li data-astro-cid-kxnnk3ty> ${renderComponent($$result, "Biblioteca", $$Biblioteca, { "data-astro-cid-kxnnk3ty": true })} <a href="#" id="aBiblio" data-astro-cid-kxnnk3ty>Biblioteca</a> </li> </ul> `;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/AsideList.astro", void 0);

const Information = [
  {
    id: '1',
    title: "Contacto",
    description: "Busco oportunidades para colaborar con empresas/agencias/personas, aportando mis conocimientos en lógica de programación que facilite el desarrollo y las soluciones adecuadas para cada proyecto, además tengo una actitud proactiva de colaboración en equipo, y la visión de lograr crecimiento en cada uno. proyecto que estoy desarrollando.",
    imageUrl: "./Contacto.jpg",
  },
  {
    id: '2',
    title: "Habilidades",
    description: "A lo largo de mi trayectoria, he trabajado con diversas tecnologías y herramientas que me han permitido desarrollar soluciones eficientes y bien estructuradas. Siempre busco mejorar mis conocimientos y adaptarme a nuevos retos, explorando diferentes enfoques para optimizar cada proyecto.",
    imageUrl: "./Habilidades.jpg",
  },
  {
    id: '3',
    title: "Conoceme",
    description: "Profesional con una destacada capacidad de aprendizaje y resolución de problemas. Experiencia en el diseño, desarrollo e implementación de aplicaciones web utilizandotecnologías modernas. Conocimientos sólidos en frontend y backend, con una pasiónpor crear soluciones eficientes y de alta calidad. Capaz de trabajar en equipo yadaptarse rápidamente a nuevos desafíos tecnológicos",
    imageUrl: "./Conoceme.jpg",
  },
  {
    id: '4',
    title: "Proyectos",
    description: "A lo largo de mi trayectoria, he trabajado en diversos proyectos que abarcan desde el desarrollo web y móvil hasta inteligencia artificial y análisis de datos. Cada uno de ellos ha sido una oportunidad para aprender, experimentar y mejorar mis habilidades. Aquí puedes ver algunos de los proyectos en los que he trabajado. Si quieres conocer más, te invito a visitar mi perfil de GitHub.",
    imageUrl: "./Proyectos.jpg",
  },
  {
    id: '5',
    title: "Educacion",
    description: "Mi formación se ha centrado en el desarrollo de software y la programación, combinando estudios formales con aprendizaje autodidacta. He tenido la oportunidad de formarme en distintos lenguajes, metodologías y herramientas, siempre buscando mejorar mis conocimientos y adaptarme a los nuevos retos del sector.",
    imageUrl: "./Educacion.jpg",
  },
  {
    id: '6',
    title: "Nasa",
    description: "Bienvenido a FireGuardian, una solución innovadora desarrollada como parte del desafío NASA Space Apps 2023: Gestión de incendios: aumento de las oportunidades de gestión de incendios basadas en la comunidad.",
    imageUrl: "./Nasa.jpg",
  },
  {
    id: '7',
    title: "feature",
    description: "¿¿Incognita??",
    imageUrl: "./feature.jpg",
  }
];
const Skills = [
  {
      id: '1',
      title: "HTML",
      description: "lenguaje de marcas ",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02f0cb4035ee036eb4e42169e5",
      album: "front-end",
    
  }
  ,
  {
      id: '2',
      title: "CSS",
      description: "lenguaje de estilos",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e0235692baca45542527d742d0d",
      album: "front-end",
   
  }
  ,
  {
      id: '3',
      title: "JavaScript",
      description: "lenguaje de programación web",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e0276e31f565780a5b45c0bbbd8",
      album: "back-end",
    
  }
  ,
  {
      id: '4',
      title: "Python",
      description: "lenguaje de programación para IA",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png",
      album: "back-end",
     
  
  },
  {
      id: '5',
      title: "C",
      description: "lenguaje de bajo nivel estructurado",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
      album: "back-end",
    
  },
  {
      id: '6',
      title: "Bootstrap",
      description: "framework de CSS.",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
      album: "front-end",
    
  }
  ,
  {
      id: '7',
      title: "php",
      description: "lenguaje de programación web",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e02d699829cd4c29b1b669cb201",
      album: "back-end",
    
  }
  ,
  {
      id: '8',
      title: "Github",
      description: "plataforma de desarrollo colaborativo",
      imageUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da846c3048465107aa5f0aa17393",
      album: "back-end",
  }
  ,
  {
      id: '9',
      title: "SQL",
      description: "lenguaje de consulta estructurada",
      imageUrl: "https://i.scdn.co/image/ab67616d00001e027b349af790501f21719d48d4",
      album: "bbdd",
  }
  
  ,
  {
      id: '10',
      title: "Laravel",
      description: "framework de PHP",
      imageUrl: "https://as1.ftcdn.net/jpg/05/83/61/64/1000_F_583616421_I2gICTJCaqquYwXvNJPWIvcxyJcIqT3J.jpg",
      album: "back-end",
  }
  ,
  {
      id: '11',
      title: "React",
      description: "librería de JavaScript",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      album: "back-end",
  }
  ,{
    id: '12',
    title: "MongoDB",
    description: "base de datos NoSQL",
    imageUrl: "https://images.icon-icons.com/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png",
    album: "bbdd",
}
,{
    id: '13',
    title: "oracle",
    description: "base de datos",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ59E94pQlK2qC1SZlvgPdpgVJabXyhJomDAQ&s",
    album: "bbdd",
},
{
    id: '14',
    title: "Power BI",
    description: "herramienta de análisis de datos",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/1200px-New_Power_BI_Logo.svg.png",
    album: "back-end",
},
{
    id: '15',
    title: "Wordpress",
    description: "gestor de contenido",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQqvP9mSAN_KNxZlbvD9VT-yl4Vf_PuT6Cw&s",
    album: "back-end",
},
{
    id: '16',
    title: "Docker",
    description: "plataforma de contenedores",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdpL-KcerREshg7ug3zsjouWlHyUn3GFP4w&s",
    album: "back-end",
},
  ];


  const Projects = [
    {
        id: '1',
        title: "AfrooBook",
        description: "Foro de discusión",
        imageUrl: "./proyecto1.png",
        album: "html, css, js, php, sql",
        time: "2:30",
        github: "https://github.com/GhassanKY/foro_Repositorio",
        yt: "https://www.youtube.com/watch?v=GNE7Ao_JzwQ&t=150s&ab_channel=AlexisVenegas"
    }   
    ,
    {
        id: '2',
        title: "GeeckyGram",
        description: "Red social para geeks",
        imageUrl: "./Proyecto5.png",
        album: "html, css, js, php, sql",
        time: "2:30",
        github: "https://github.com/rauledutorres/Proyecto-Mini-Red-Social"
    }
    ,
    {
        id: '3',
        title: "Detector de Mensajes de Odio",
        description: "Modelo de IA para detectar mensajes de odio",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e0246b6026ecb5e2c1df32e10e9",
        album: "python, machine learning",
        time: "2:30",
        github: "https://github.com/AI-School-F5-P2/NLP_detector_mensajes_odio.git",
        yt: "https://www.youtube.com/watch?v=jmb8q0X2JTc"
    }
    ,
    {
        id: '4',
        title: "F5 Airlines",
        description: "Prediccion de satisfaccion de clientes",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e02016e0c0dd9748553cf498983",
        album: "python, machine learning",
        time: "2:30",
        github: "https://github.com/AI-School-F5-P2/Aerolinea_equipo_4"
    },
    {
        id: '5',
        title: "Danza Fénix",
        description: "API para la gestión de una escuela de danza",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e029e0d6948f686dc64958dfe15",
        album: "python, flask, sql",
        time: "2:30",
        github: "https://github.com/AI-School-F5-P2/danza_fenix"
    },
    {
        id: '6',
        title: "Reconocimiento Facial",
        description: "Usando CV2 para acceso de seguridad",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e02d85ba0e3102f838cbbf58409",
        album: "CV2, python, tkinter",
        time: "2:30",
        github: "https://github.com/AI-School-F5-P2/Face_Recognition_5",
        yt: "https://www.youtube.com/watch?v=fSl03xKaVvc&t=1s&ab_channel=AlexisVenegas"
    }
    ,
    {
        id: '7',
        title: "42Cursus",
        description: "Programacion en c",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e02fe23dd528684203b1b2eb754",
        album: "c, linux, git, bash",
        time: "2:30",
        github: "https://github.com/AlexisVennegas/42cursus"
    }
    ,
    {
        id: '8',
        title: "Nasa Space APP",
        description: "Consumo de API de la NASA",
        imageUrl: "./Nasa.jpg",
        album: "analisis de datos, python, flask, sql",
        time: "2:30",
        github: "https://github.com/AnaGomez16/NASA_SpaceApps_Challenge"
    }
    ,
    {
        id: '9',
        title: "VinoPremier",
        description: "Programa IA recomendador de vinos",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e025f12c19b6358841472240173",
        album: "python, machine learning, sql",
        time: "2:30",
        github: "https://github.com/AI-School-F5-P2/vinopremier"
    }
    ,
    {
        id: '10',
        title: "Proceso ETL",
        description: "Extraccion, transformacion y carga de datos",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e02f0f7d8fcb934e3407a6ebfac",
        album: "apache kafka, spark, python, sql",
        time: "2:30",
        github: "https://github.com/AI-School-F5-P2/Engineer4"
    }
    ,
    {
        id: '11',
        title: "Oposiciones Madrid APP",
        description: "App para oposiciones en Madrid",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e029b6e2d17adea514703b623cc",
        album: "html, css, js, php, sql",
        time: "2:30",
        github: "https://github.com/AlexisVennegas/App-oposicion-de-madrid-  "
    }
    ,
    {
        id: '12',
        title: "Majica",
        description: "Museo de arte en linea",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e028006c6f9d21c761231926abf",
        album: "html, css, js, php, sql",
        time: "2:30",
        yt: "https://www.youtube.com/watch?v=aBeSC3SYFOs&ab_channel=AlexisVenegas",
        github: "https://github.com/ispipa/Majica-Project.git"
    }
    
    ];

    
  const Education = [
      {
        id: '1',
        title: "FP Ies clara del rey dual",
        description: "Dam + daw",
        imageUrl: "https://pbs.twimg.com/profile_images/1011370492157136897/GOwqqa3H.jpg",
        album: "html, css, js, WordPress",
        time: "2000hrs",
    },
      {
        id: '2',
        title: "Programacion Orientada a objetos",
        description: "Certificado de profesionalidad N.3",
        imageUrl: "https://cursoscastraining.es/wp-content/uploads/2025/07/featured-image-cas-training-2025.png",
        album: "html, css, js, WordPress",
        time: "500hrs",
    },
    {
        id: '3',
        title: "Confeccion y publicacion de paginas web",
        description: "Certificado de profesionalidad N.2",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3UsxStyorODVsS1AV3WnLLZktLD9PPobxQ&s",
        album: "html, css, js, WordPress",
        time: "500hrs",
    }
    ,
    {
        id: '4',
        title: "Bootcamp Microsoft IA",
        description: "Ingeniero de Datos, Analista de Datos, Desarrollador de IA",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqFikwQjZKCRY9hUsF7eP5bB_A7dIB9Ruug&s",
        album: "python, jupyter-Ntbook, Dockers, Azure",
        time: "1250hrs",
    }
    ,
    {
        id: '5',
        title: "42 Madrid - Fundación Telefónica",
        description: "Programación en C",
        imageUrl: "https://i.scdn.co/image/ab67616d00001e02fe23dd528684203b1b2eb754",
        album: "python, machine learning",
        time: "2000hrs", 
    }
    ,
    {
        id: '6',
        title: "Bootcamp Full Stack Developer",
        description: "Desarrollo de aplicaciones web y móviles",
        imageUrl: "https://larueca.info/wp-content/uploads/2021/08/circuloamarillofondo.png",
        album: "js, php, Laravel, React, mysql, ",
        time: "1000hrs",
    
    },
    {
        id: '7',
        title: "Bachillerato",
        description: "Ciencias de la Computación",
        imageUrl: "https://sociedadtecnologiaydeontologia.wordpress.com/wp-content/uploads/2019/01/logotipo_ipn.png",
        album: "Ciencias de la Computación",
        time: "3000hrs",
    
    },
    
    ];

    const Cantantes = [
        {
            id: '1',
            title: "RCHP",
            imageUrl: "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO0nT692-default.jpg",
        }
        ,
        {
            id: '2',
            title: "keane",
            imageUrl: "https://i.scdn.co/image/ab6761610000517492f6dba2793814a1c5aa8d35",
        }
        ,
        {
            id: '3',
            title: "Mac deMarco",
            imageUrl: "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2ggUww-default.jpg"
        }
        ,
        {
            id: '4',
            title: "Juan Gabriel",
            imageUrl: "https://i.scdn.co/image/ab67616d00001e02c9f1936725fe102a81ec28ec",
        
        },
        {
            id: '4',
            title: "Maná",
            imageUrl: "https://i.scdn.co/image/ab67616100005174152dcec8175d19fb12eeb8e0"
        },
        
        ];


const ContactoData = [
            {
                id: '1',
                type: "text",
                duration: "2:30",
                img: "https://i.scdn.co/image/ab67616d00001e02d3ca962fd3e08e4caf33f302"
            }
            ,
            {
                id: '2',
                type: "email",
                duration: "2:30",
                img: "https://i.scdn.co/image/ab67616d00001e02bf76f682f914fd6be05d7856"
            }
            ,
            {
                id: '3',
                type: "textarea",
                duration: "2:30",
                img: "./Contacto.jpg"
            }
            ,
            {
                id: '4',
                type: "submit",
                duration: "2:30",
                img: "https://i.scdn.co/image/ab67616d00001e0217de89297de7b31085c9444d"
            
            }
            
            ];

const $$Astro = createAstro();
const $$AsideLibrary = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AsideLibrary;
  const { id } = Astro2.props;
  function GetTitle(title) {
    if (title === "Nasa")
      return "Hackathon";
    else if (title === "Habilidades")
      return "Album";
    else if (title === "Proyectos")
      return "Album";
    else if (title === "Educacion")
      return "Album";
    else if (title === "Experiencia")
      return "Album";
    else if (title === "Conoceme")
      return "Artista";
    else
      return "Album";
  }
  return renderTemplate`${Information.map((item) => renderTemplate`${maybeRenderHead()}<li class="liListsongs" data-astro-cid-752lpjmo><a${addAttribute(`./${item.title}`, "href")} data-astro-cid-752lpjmo><div class="cover" data-astro-cid-752lpjmo><img${addAttribute(`./${item.title}.jpg`, "src")} alt="varios lenguajes de programacion" data-astro-cid-752lpjmo></div><div class="info" data-astro-cid-752lpjmo><h5 data-astro-cid-752lpjmo>${item.title}</h5><p data-astro-cid-752lpjmo>${GetTitle(item.title)}</p></div></a></li>`)}`;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/AsideLibrary.astro", void 0);

const $$Thumb = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="player-container" data-astro-cid-ly2dno6g> <button class="play-button" data-astro-cid-ly2dno6g> <svg class="svg-special" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-astro-cid-ly2dno6g><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" data-astro-cid-ly2dno6g></path></svg> </button> <div class="progress-container" data-astro-cid-ly2dno6g> <span class="progress-time" data-astro-cid-ly2dno6g>0:00</span> <div class="progress-bar" data-astro-cid-ly2dno6g> <div class="progress-bar-inner" style="width: 0%;" data-astro-cid-ly2dno6g></div> <div class="progress-thumb" style="left: 0%;" data-astro-cid-ly2dno6g></div> </div> <span class="progress-time" data-astro-cid-ly2dno6g>0:00</span> </div> <audio data-astro-cid-ly2dno6g></audio> </div> `;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/Thumb.astro", void 0);

const $$Volumen = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="svg-special" fill="currentColor" role="presentation" height="16" width="16" aria-hidden="true" aria-label="Volumen alto" id="volume-icon" viewBox="0 0 16 16"> <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path> <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path> </svg>`;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/Icons/Volumen.astro", void 0);

const $$VolumenControl = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="volume-control" data-astro-cid-nd3jds23> <button class="volume-button" data-astro-cid-nd3jds23> ${renderComponent($$result, "Volumen", $$Volumen, { "data-astro-cid-nd3jds23": true })} </button> <div class="slider-container" data-astro-cid-nd3jds23> <input type="range" min="0" max="100" value="50" class="slider" id="myRange" data-astro-cid-nd3jds23> <!-- <div class="slider-bar" style="width: 44%;"></div> --> <!-- <div class="slider-thumb" style="left: 44%;"></div> --> </div> </div> `;
}, "C:/Users/Alexis/Desktop/proyectos/spotify-porfolio/src/components/VolumenControl.astro", void 0);

export { $$Layout as $, Cantantes as C, Education as E, Information as I, Projects as P, Skills as S, $$Navigator as a, $$AsideList as b, $$AsideLibrary as c, $$Thumb as d, $$VolumenControl as e, ContactoData as f };
