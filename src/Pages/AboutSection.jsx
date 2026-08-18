import React from "react";
import { Link } from "react-router-dom";
import "../Styles/aboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">

      {/* Right Side Content */}
      <div className="about-hover-box">

        <div className="about-content">

          <p>
            Our parent company, Laxmi Enterprises. Since then, we've become a
            premium global supplier, bringing the essence of India to various
            corners of the world.
          </p>

          <p>
            Transparency and authenticity have been the pillars of our
            existence for generations. With our deep knowledge and expertise
            in growing, procuring, and providing the highest quality spices,
            we take pride in sharing our passion with the world.
          </p>

          <p>
            Each step of our production process, from sourcing the finest
            ingredients to the careful packaging, is meticulously executed to
            deliver products of unparalleled excellence. When it comes to
            quality, our state of the art procedures ensure there has been
            absolutely no compromise.
          </p>

          <p>
            It is from this heritage and legacy, that The Great Indian Spicery
            was born.
          </p>

          {/* Button */}
          <Link to="/about" className="about-button">
            KNOW MORE
          </Link>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;