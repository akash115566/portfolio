import React from "react";
import { Link } from "react-router-dom";
import "../Styles/recipes.css";

const recipes = [
  {
    image: "/Home/gallery/gallery1.webp",
    title: "Fish Curry",
    date: "APRIL 13, 2023",
    description:
      "(serves 4) Fish washed & cleaned 500g Ginger garlic paste ½ tbsp Turmeric A pinch Coriander powder 2 tsp Red chilli powder ½ tsp Salt ½ tsp To saute &...",
    link: "/recipes/fish-curry",
  },
  {
    image: "/Home/gallery/gallery2.webp",
    title: "Mumbai Style Pav Bhaji",
    date: "APRIL 13, 2023",
    description:
      "(serves 4) Carrots 1 cup Onion chopped 1 cup Boiled potatoes 3 pc Peas ½ cup Cauliflower ½ cup Tomato 2 cup Ginger paste 2 tsp Garlic paste 2 tsp...",
    link: "/recipes/mumbai-style-pav-bhaji",
  },
  {
    image: "/Home/gallery/gellery3.webp",
    title: "Pani Puri",
    date: "APRIL 13, 2023",
    description:
      "(serves 4) Coriander 1 bunch Mint 1 bunch Green chilli 4pc Ginger ½ inch Black salt 1 tsp Chaat masala 1 tsp Pani puri masala 1 tsp Cold water 1...",
    link: "/recipes/pani-puri",
  },
    {
    image: "/Home/gallery/gellery4.webp",
    title: "Pani Puri",
    date: "APRIL 13, 2023",
    description:
      "(serves 4) Coriander 1 bunch Mint 1 bunch Green chilli 4pc Ginger ½ inch Black salt 1 tsp Chaat masala 1 tsp Pani puri masala 1 tsp Cold water 1...",
    link: "/recipes/pani-puri",
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