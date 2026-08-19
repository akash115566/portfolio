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
    MSME Business Care is a growth-focused business ecosystem dedicated to
    supporting Micro, Small and Medium Enterprises, startups, entrepreneurs
    and emerging businesses across India.
  </p>

  <p>
    We work as a bridge between government initiatives, business opportunities
    and entrepreneurs by helping businesses understand and access the right
    schemes, resources, markets and growth opportunities.
  </p>

  <p>
    From business branding and marketing to government scheme support, dealer
    and distributor network development, franchise opportunities, investment
    connect and market expansion, MSME Business Care provides practical
    solutions designed to help businesses grow with confidence.
  </p>

  <p>
    Our vision is to create a strong and connected MSME ecosystem where
    entrepreneurs can discover opportunities, build stronger brands and take
    their businesses towards sustainable growth.
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