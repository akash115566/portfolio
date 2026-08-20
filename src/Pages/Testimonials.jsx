import React, { useState } from "react";
import "../Styles/testimonials.css";

const testimonials = [
  {
    image: "/Home/award/awa1.webp",
    text: "I'm a huge fan of The Great Indian Spicery's spice collection. Their wide variety allows me to experiment with different flavors, making my meals exciting and full of zest!",
    rating: 5,
  },
  {
    image: "/Home/award/awa2.webp",
    text: "Amazing quality and authentic Indian flavors. The spices have completely changed the way I cook at home.",
    rating: 5,
  },
  {
    image: "/Home/award/awa3.webp",
    text: "The freshness and aroma of these spices are exceptional. Highly recommended for every Indian kitchen.",
    rating: 5,
  },
  {
    image: "/Home/award/awa4.webp",
    text: "Beautiful packaging and excellent taste. Every product feels premium and authentic.",
    rating: 5,
  },
  {
    image: "/Home/award/awa5.webp",
    text: "I absolutely love the quality of these spices. They add incredible flavor to every dish.",
    rating: 5,
  },
  {
    image: "/Home/award/awa6.webp",
    text: "The perfect combination of traditional flavors and premium quality.",
    rating: 5,
  },
  {
    image: "/Home/award/awa7.webp",
    text: "Great products with amazing flavor. These spices are now a regular part of my kitchen.",
    rating: 5,
  },
  {
    image: "/Home/award/awa8.webp",
    text: "Authentic taste, wonderful aroma and excellent quality. Truly impressive.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // 7 visible images
  const visibleTestimonials = [];

  for (let i = -3; i <= 3; i++) {
    const index =
      (activeIndex + i + testimonials.length) % testimonials.length;

    visibleTestimonials.push({
      ...testimonials[index],
      position: i,
    });
  }

  return (
    <section className="testimonials-section">

      {/* Heading */}
      <h2 className="testimonials-heading">
        Testimonials
      </h2>

      {/* Image Slider */}
      <div className="testimonial-slider">

        {/* Left Arrow */}
        <button
          className="testimonial-arrow left-arrow"
          onClick={prevSlide}
        >
          ‹
        </button>

        <div className="testimonial-images">

          {visibleTestimonials.map((item, index) => (
            <div
              className={`testimonial-image-box ${
                item.position === 0 ? "active" : ""
              }`}
              key={index}
            >
              <img
                src={item.image}
                alt="Customer testimonial"
              />
            </div>
          ))}

        </div>

        {/* Right Arrow */}
        <button
          className="testimonial-arrow right-arrow"
          onClick={nextSlide}
        >
          ›
        </button>

      </div>

      {/* Active Testimonial */}
      <div className="testimonial-content">

        <div className="testimonial-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star}>★</span>
          ))}
        </div>

        <p className="testimonial-text">
          "{testimonials[activeIndex].text}"
        </p>

      </div>

    </section>
  );
};

export default Testimonials;