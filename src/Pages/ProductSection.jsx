import React from "react";
import { Link } from "react-router-dom";
import "../Styles/productSection.css";

const products = [
  {
    image: "/Home/gram-masala.webp",
    hoverImage: "/Home/gram1.webp",
    category: "THE GREAT INDIAN SPICERY",
    name: "Garam Masala",
    price: "Rs. 260.00",
    rating: 5,
  },
  {
    image: "/Home/sambhar-masala.webp",
    hoverImage: "/Home/sambhar1.webp",
    category: "THE GREAT INDIAN SPICERY",
    name: "Sambhar Masala",
    price: "Rs. 215.00",
    rating: 3,
  },
  {
    image: "/Home/chaat-masala.webp",
    hoverImage: "/Home/chaat1.webp",
    category: "THE GREAT INDIAN SPICERY",
    name: "Chaat Masala",
    price: "Rs. 235.00",
    rating: 5,
  },
  {
    image: "/Home/turmeric-powder.webp",
    hoverImage: "/Home/turmeric1.webp",
    category: "THE GREAT INDIAN SPICERY",
    name: "Turmeric Powder",
    price: "Rs. 230.00",
    rating: 5,
  },
];

const ProductSection = () => {
  return (
    <section className="product-section">

      {/* Heading */}
      <h2 className="product-section-heading">
        Our Products
      </h2>

      {/* Products */}
      <div className="products-grid">

        {products.map((product, index) => (
          <div className="product-card" key={index}>

            {/* Product Image */}
            <Link
              to={`/product/${index + 1}`}
              className="product-image-wrapper"
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image main-image"
              />

              <img
                src={product.hoverImage}
                alt={`${product.name} alternate`}
                className="product-image hover-image"
              />
            </Link>

            {/* Product Info */}
            <div className="product-info">

              <p className="product-category">
                {product.category}
              </p>

              <h3 className="product-name">
                {product.name}
              </h3>

              <p className="product-price">
                {product.price}
              </p>

              {/* Rating */}
              <div className="product-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={
                      star <= product.rating
                        ? "star active"
                        : "star"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Add To Cart */}
              <Link
                to={`/cart?product=${index + 1}`}
                className="add-cart-link"
              >
                ADD TO CART
              </Link>

            </div>

          </div>
        ))}

      </div>

      {/* Shop All */}
      <div className="shop-all-wrapper">
        <Link to="/shop" className="shop-all-btn">
          SHOP ALL
        </Link>
      </div>

    </section>
  );
};

export default ProductSection;