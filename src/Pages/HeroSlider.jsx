import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/heroSlider.css";

const slides = [
  {
    image: "/Home/top-slider1.jpeg",
    link: "/shop",
  },
  {
    image: "/Home/top-slider2.jpeg",
    link: "/shop",
  },
  {
    image: "/Home/top-slider3.jfif",
    link: "/shop",
  },
];






const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider">

      {/* Slides */}
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${
              currentSlide === index ? "active" : ""
            }`}
          >
            <img
              src={slide.image}
              alt={`Spice Slide ${index + 1}`}
            />

            {/* Shop Now */}
            {/* <Link to={slide.link} className="shop-now-btn">
              SHOP NOW
            </Link> */}
          </div>
        ))}
      </div>

      {/* Bottom Indicators */}
      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${
              currentSlide === index ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

    </section>
  );
};

export default HeroSlider;