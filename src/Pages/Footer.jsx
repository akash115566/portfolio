import React from 'react'
import "../Styles/footer.css";

const Footer = () => {
  return (
   <>
    {/* FOOTER */}
      <footer id="contact">

        <div className="footer-container">

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

          <div className="footer-column">

            <h3>SHOP</h3>

            <a href="#products">All Spices</a>
            <a href="#products">Masala Blends</a>
            <a href="#products">Whole Spices</a>
            <a href="#products">Herbs</a>
            <a href="#products">Dry Fruits</a>

          </div>

          <div className="footer-column">

            <h3>HELP</h3>

            <a href="#contact">Contact Us</a>
            <a href="#contact">Shipping</a>
            <a href="#contact">Returns</a>
            <a href="#contact">FAQs</a>
            <a href="#contact">Privacy Policy</a>

          </div>

          <div className="footer-column">

            <h3>CONTACT</h3>

            <p>📍 India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ hello@spicecraft.com</p>
            <p>🕐 Mon - Sat: 9 AM - 6 PM</p>

          </div>

        </div>

        <div className="copyright">
          © 2026 SpiceCraft. All Rights Reserved.
        </div>

      </footer>

   </>
  )
}

export default Footer
