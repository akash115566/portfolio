import React from "react";
import { Link } from "react-router-dom";
import "../Styles/footer.css";

const Footer = () => {
  return (
    <>
      {/* FOOTER */}
      <footer id="contact">

        <div className="footer-container">

          {/* BRAND */}
          <div className="footer-brand">

            <h2>
              🌿 SPICE<span>CRAFT</span>
            </h2>

            <p>
              Pure spices, authentic flavours and premium
              quality for every kitchen.
            </p>

            <div className="socials">
              <span>f</span>
              <span>◎</span>
              <span>▶</span>
              <span>𝕏</span>
            </div>

          </div>


          {/* SHOP */}
          <div className="footer-column">

            <h3>SHOP</h3>

            <Link to="/products">All Spices</Link>
            <Link to="/masala-blends">Masala Blends</Link>
            <Link to="/whole-spices">Whole Spices</Link>
            <Link to="/herbs">Herbs</Link>
            <Link to="/dry-fruits">Dry Fruits</Link>

          </div>


          {/* HELP */}
          <div className="footer-column">

            <h3>HELP</h3>

            <Link to="/contact">Contact Us</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/returns">Returns</Link>
            <Link to="/faq">FAQs</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>

          </div>


          {/* CONTACT */}
          <div className="footer-column">

            <h3>CONTACT</h3>

            <p>📍 India</p>
            <p>📞 +91 8076151724</p>
            <p>✉️ info@msmebusinesscare.com</p>
            <p>🕐 Mon - Sat: 9 AM - 6 PM</p>

          </div>

        </div>


        {/* COPYRIGHT */}
        <div className="copyright">
          © 2026 SpiceCraft. All Rights Reserved.
        </div>

      </footer>
    </>
  );
};

export default Footer;