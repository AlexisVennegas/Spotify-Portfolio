import React, { useState, useEffect } from 'react';
import './Slider.css';

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
            <div className={`slide ${index === slideIndex ? 'active' : ''}`} key={index}>
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
            <div className="slides">
                {showSlides()}
            </div>
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default Slider;
