import React from "react";
import { Link } from "react-router-dom";
import "../Styles/recipes.css";

const recipes = [
  {
    image: "/Home/gallery/gallery1.webp",
    title: "Celebrity Meet & Greeting",
    date: "APRIL 13, 2023",
    description:
      "A memorable celebrity interaction featuring a special meet and greeting, capturing moments of connection, recognition and celebration.",
    link: "/recipes/celebrity-meet-greeting",
  },

  {
    image: "/Home/gallery/gallery2.webp",
    title: "Celebrity Collaboration",
    date: "APRIL 13, 2023",
    description:
      "A special collaboration with a celebrity, showcasing memorable moments, professional networking and brand engagement.",
    link: "/recipes/celebrity-collaboration",
  },

  {
    image: "/Home/gallery/gellery3.webp",
    title: "Brand Recognition Event",
    date: "APRIL 13, 2023",
    description:
      "A special brand recognition moment celebrating successful partnerships, achievements and meaningful business connections.",
    link: "/recipes/brand-recognition-event",
  },

  {
    image: "/Home/gallery/gellery4.webp",
    title: "Women Leadership & Partnership",
    date: "APRIL 13, 2023",
    description:
      "Celebrating women leadership, professional partnerships and inspiring moments that highlight confidence, success and collaboration.",
    link: "/recipes/women-leadership-partnership",
  },
];
const Recipes = () => {
  return (
    <section className="recipes-section">

      {/* Heading */}
      <h2 className="recipes-heading">
        Gellery
      </h2>

      {/* Recipe Cards */}
      <div className="recipes-grid">

        {recipes.map((recipe, index) => (
          <article className="recipe-card" key={index}>

            {/* Image */}
            <Link to={recipe.link} className="recipe-image-link">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-image"
              />
            </Link>

            {/* Content */}
            <div className="recipe-content">

              <h3 className="recipe-title">
                {recipe.title}
              </h3>

              <p className="recipe-date">
                {recipe.date}
              </p>

              <p className="recipe-description">
                {recipe.description}
              </p>

              <Link
                to={recipe.link}
                className="read-more"
              >
                <span></span>
                Read more
              </Link>

            </div>

          </article>
        ))}

      </div>

      {/* View All */}
      <div className="view-all-wrapper">
        <Link to="/recipes" className="view-all-btn">
          VIEW ALL
        </Link>
      </div>

      {/* Instagram */}
      <div className="instagram-section">

        <p className="follow-us">
          Follow us on
        </p>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          #instagram
        </a>

      </div>

    </section>
  );
};

export default Recipes;