import React from "react";
import { Link } from "react-router-dom";
import "../Styles/collections.css";

const collections = [
  {
    image: "/Home/whole-spices.jpg",
    title: "Whole Spices",
    link: "/whole-spices",
  },
  {
    image: "/Home/ground-spices.jpg",
    title: "Grounded Spices",
    link: "/grounded-spices",
  },
  {
    image: "/Home/blended-spices.jpg",
    title: "Blended Spices",
    link: "/blended-spices",
  },
];

const Collections = () => {
  return (
    <section className="collections-section">

      <h2 className="collections-heading">
        Collections
      </h2>

      <div className="collections-grid">

        {collections.map((item, index) => (
          <Link
            to={item.link}
            className="collection-card"
            key={index}
          >
            <img
              src={item.image}
              alt={item.title}
            />

            <div className="collection-overlay">
              <h3>{item.title}</h3>
              <span>SHOP NOW</span>
            </div>
          </Link>
        ))}

      </div>
      <h2 style={{ marginTop:"30px", fontSize:"2rem"}}>World of The Great Indian Spicery</h2>
      <span style={{ padding:"50px", }}>The Great Indian Spicery, with a heritage dating back to 1890, is a venerable institution in the spice industry. Driven by a passion for excellence and an unwavering dedication to the trade of spices, we are committed to sourcing and delivering only the highest quality, authentic spices.
Our products are carefully curated to provide an exceptional flavor and health benefits, while promoting ethical sourcing and trade practices. Elevate your palate and nourish your body with The Great Indian Spicery's rich heritage and commitment to quality.</span>
   

    </section>
  );
};

export default Collections;