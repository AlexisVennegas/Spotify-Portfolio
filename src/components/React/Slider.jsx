import React, { useState, useEffect } from "react";
import "./Slider.css";

const imageSets = {
  1: [
    "../App/presentation1.jpg",
    "../App/presentation2.jpg",
    "../App/presentation3.jpg",
    "../App/presentation4.jpg",
    "../App/presentation5.jpg",
    "../App/presentation6.jpg",
    "../App/presentation7.jpg",
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
    "../App/app13.png",
  ],
  3: [
    "https://media.licdn.com/dms/image/D4D22AQEpiXxWcHUzJA/feedshare-shrink_2048_1536/0/1709313128877?e=1723680000&v=beta&t=8T30V0gvMY1mLnY_AeDwAJmYRmDMWe1HVbkGg1V-kzw",
    "https://media.licdn.com/dms/image/D4D22AQEJiVEjQOaLvg/feedshare-shrink_2048_1536/0/1709124883701?e=1723680000&v=beta&t=w6Ej-i3sykXOlzl5dvVaJU-ULPS4U_ta5KwQijW64rM",
    "https://media.licdn.com/dms/image/D4E22AQHLbnx5ShIqPw/feedshare-shrink_800/0/1696967362502?e=1723680000&v=beta&t=jSmVqhOaI7GGo9ykro9QQqp4GAELP3qBrD7VhGY7uZ4",
    "https://lh3.googleusercontent.com/fife/ALs6j_Gkcd8_HcNbtbynGkzY8zUo-JgXitwwEH6dUVEZyWu-gJl-fxumwmSh7mJmwKgTtSW9nVifx3VRlK2cMjEanExP72HRrnf1qXqCrfMUJMvlZk3KMR0w_Syq_Z2tj5M8belyrQ2RYa4oS_H10h3nxJeLifcGnLxYq2XYFx3KTPvCwKGaFZGwxaeylkW5KmeOAov5fwE0Ixgzo0jBSoEcXeS2A5zhyHyFbc-7yICRUL-lrzeLrDtBvyZrKmD1NOz4yZSNghwiBKSR9TqmrZeJvmjkWg67Kq208thUMmRE6j771WxeBV11Xnv8C09fhdeyFsCTY21_YeQgEuM2jGsRS7gQC120R7gyMRjDrzqk3RrD3GdV3T80wg4ZuDTXpW6XcvgrP1bIrITmylHKLiHxfO7I5T6hIYbt2D_O0LS9-9lXVCeHquiiQ6R166MAPBO879xBrDAH7pzPIxBqs5Q_xgKAFsvjS4uNBIGWXvspKsmnViG6SgqgI8kUh5TOdQwPWQAaQOF4wgWDtjH_xBdODCMgziXXu9CHAfo5LIYdwthJW6OB4IfZxNGg9QrXmEpBkZywmWhgPVp0q3EG9XIzCUUsl_JJU2IY-Dc2obyBZ29FJRpDC3mN3SuHuoOG9fkK9HocYxcfj1oq-aQF_7cHFC0Ldy8tofhzNxem_F9fmjbI0tTTwPRPCjQDpiX2exbfLjBofZrCaIyYREiq4qisoAxd0bnlGzJhvfwmb2Ds9DTdec0scmf6Zan79ygF5SrkjXXT_XyuMuXEM8Sf9hucc-TxVETr4iCLQSSK2yR9Twm7D_FK6_Zx4jmuM68BPjSP2JXNNTgCQ57EIZnSc8Q4TVungMwKkaUONBwlmrqxfZUS8jmAubhKk6ARH-6hXcB66_sPeRSzN1qNXuuleLMk0KmiCSiV0ljFTpNto6VAmSL3O7V7ufSXxYmaEycv2GVDSph_9MYWfzxbNAPsRXt5Ulz9D1vnLYQcX_SB9xmucD9QJ5LvSqiH5Xsx8bvPQymoYGdw8e7v1hvnqfqPM0WhpGrsTKBw5QQXZPVoqKacbRMvVk1ImVBbHjIO-HB4reg1wskXrcBpY6Z7ez_gdHHx1O8N-2MeUqRbKrGfpIPWfw-N8CRVR-I7-1N0mscjzqogtwDCwIL-MEEDZ2nh5pcc93qxLro5bDZYOXbGZ2nlIXSEVxGKOcKcTKE6BOLNGdsn7Rrs2dKnLmybl3KJsGgzTO4Ezk9qbkH3LALmn2mKakB3aWSNZ4K4IDPKOqVfLbVbYwurM__g8j62dW24GTQh7Q5V2UHGL3v7u2oTDUmngcIMKmYBllDMeBE0oQ8hc9nUr5Qk9T2kkvH2lgpRfhxw60frUdWiUcMFEtLIC0OV53Wzk7_7kNmFGINfGvQ8e4bpKg7YTQp1JKT3A5tZnKn1bSjO_0dTPwGpRUwWdNDf1I7wIil6lbZVtsTwrBVOpiWE6qpxVQ7Zt5mIVJ3ElQ1kfampYSmk7nLX3b0f1DpayqIpM3SbA0YwSJ329d5TYyCsW-qizZfWnXm9Fjc_yJ5INIBAGB9_e7GZ8SwBh7j5AfOklJs0OolFbEhnirE2LgbRQk6PKqwuEY7Rqaf8uve3ZL_Me6j_3L_vPHIwHUXoyE8MRUf84tkbXmsBt7BP_PobDH1OvhDyQWPZ4QxAAXrmlh6lZuU=w1920-h1080",
    "https://lh3.googleusercontent.com/fife/ALs6j_FhCBJ3z_0KHBCuMGRGU065yRu5sOcjoVhS7LSCc77uSQbxKS2lnI2ubfUa__rkMzAEFUNPmfOBIWy82GBvd-d15DVDBkObxsoLSDcSCmnPt0kebinGLUfs1VmgqJQZw90jIgT_pMEaEQZhKggCMQKvhGRPfHkWmmOb_35kMRPh2PtzcV7rdk51f7J-l3q3IXxtF3qXDs6t1PItrnm-GzRdjjVuH3hkd4EA0-daYs0rnFfnTqVIcyaG0GKVl3tHef-Tr6R-Al77cfzJMQ0EGDNmokBMgpyp_0o3Kg41FczL15LluYLV4zCjxsvi_SFcpDD3I1NOTUDWIs3WGcsHYRoHMLmR4e1tDunhn7pOeSgtQlvEezsE4CCtmf90kaWG9Now8kVtD3wFEvSZ_AGLUW1gZaHXoUajP10l1qSd1XopnLPnHbKmZUEgCMtAOIjjHPWbx-_OAvEESf596TgjekLNkBHjPI70aat6vk6GdqQTV3I8wSco-AaQ5el0eOvur9WlevYN4UtKIG3akwyb5012FhNqMqrVl3ZEq78uFUof2T7fm7O31O3lJXp1H1heVteIZajp3TIXiw0nyAx8DwNTaipdPDt6zJlgB7rY0PD1MNr_Ryn9434uKSgOoVf_bD5I-hF2uGGLEPxyPPBhHV2SlvJ1zPiMT6SyMw7cpsp7mpg7QPVhBs9wMad1KEPcl4L8e_Lp3Cn0laNqehHdaeWaii4R-8cLDmwFEjYe95lt1Q1fdYcC2jMYaXJ8PnNkWv6WWK1h_ECEpIkf6OM_Zkm6zKGOITgB1H9tda7D9DT4oZRAnM_ZpjF8_EdGRSB4JFqUnrsRAHLibP3DIWIkv4BG7n_D6r9Y4t-LBUX_q5ErOEMaOUvMrileINaCtH76LSXC6GIFkrs9W6XMGwLmBraHy133hisZ7siTt14SulXeBgxD7Vpo3deKQ07WwyCuEQIMMtym2g23qAOP4gQW75-xtZzODMJGUn7oOustalyfqtRcWBv7NCTMlkfXPVsDsAtwx5mD4HW0xgxjQVWgoDedYE1e0WFIaz1d2DZHcbEb-kAjvmmiqOIMinUyohNpRjciwG2lQzerHfcNw9qMO1iG4Ey9jtnc_3wDTCAjVuqOE5be0bmnEDBOuWDAle2W2Qnbm9fhem81E5aBuHWif_TXkchYDMrmNiOLWdch1BxLCFd3e3H2eEq5_xCO8_mduhYEH0DAhdvAlNAIEBXkiIbI6HG2NXj8BRElR_mU9jQhDfqhTazBVfgoVa-qla09oRHMf92SJghKN-P0gjZm_veLmpehCb6z-EZ9a33c-eXb9qp5Uxy8YCzwRzPloRcS5B4cMVsIlasWHLdPz5Sk8oFrM6Ld8b4drM4yquWnrpuJlxPayv0Pu-B6RlghOW1Q2lSYxep7FJrqJ1UkkVyZY7mGvqyZp1Iic2XCBj3ZN1s9APrYGDig__c5JYQRr95Npo5an0db-EpSlFT0oglIJ8jpJDT5gfX8CJE1F7zaymoP4Md4YgSxk1630st0ZeoAsXq3feTPUmatWf2iotn9K751OEs05iUoNnOoPPml0DVse8OxPetS8NXIBpd-xIboCto_eBzWRf1w_cc7UA0iF1TKIiMBtmk5Y_fZzAT1RSz0d99W0cpH7KQrm7vFQfLZnofKbO-9j6n8Fk985OPbxCDhX9k=w1920-h912",
    "https://lh3.google.com/u/0/d/1a13LjHPjiFIMwGhCgnvNZILVghi08CN0=w1920-h912-iv1",
    "https://lh3.google.com/u/0/d/18ChA395FEkiI2taFOjfrml4cbkOn01sh=w1920-h912-iv1",
  ],
};

const Slider = ({ id }) => {
  const images = imageSets[id] || [];
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = images.length;

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Cambiar cada 5 segundos (5000 milisegundos)
    return () => clearInterval(intervalId);
  }, [slideIndex]);

  const showSlides = () => {
    return images.map((src, index) => (
      <div
        className={`slide ${index === slideIndex ? "active" : ""}`}
        key={index}
      >
        <img src={src} alt={`Slide ${index + 1}`} />
      </div>
    ));
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? totalSlides - 1 : slideIndex - 1);
  };

  const nextSlide = () => {
    setSlideIndex(slideIndex === totalSlides - 1 ? 0 : slideIndex + 1);
  };

  return (
    <div className="slider">
      <style>
        {id === 3
          ? ".slider {height: 487px !important; width: 100% !important}"
          : ""}
      </style>
      <div className="slides">{showSlides()}</div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
