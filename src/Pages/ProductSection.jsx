import React from "react";
import { Link } from "react-router-dom";
import "../Styles/productSection.css";

const products = [
    {
    image: "/Home/team/team4.jfif",
    hoverImage: "/Home/chaat1.webp",
    category: "Business Lawyer Founder Business Care",
    name: "Ms Pooja Sharma L.L.B",
    // price: "Rs. 235.00",
    rating: 5,
  },
  {
    image: "/Home/team/team5.jfif",
    hoverImage: "/Home/turmeric1.webp",
    category: "Co-Founder - Business Care",
    name: "Mr. Ankur Bansal",
    // price: "Rs. 230.00",
    rating: 5,
  },
  {
    image: "/Home/team/team2.jfif",
    hoverImage: "/Home/gram1.webp",
    category: "EX- I.A.S(Retd) C.E.O Business Care",
    name: "Mr. Jyoti Kalash",
    // price: "Rs. 260.00",
    rating: 5,
  },
  {
    image: "/Home/team/team3.webp",
    hoverImage: "/Home/sambhar1.webp",
    category: "Legal Advisor - Business Care",
    name: "Mr. Dhanjay Mishra",
    // price: "Rs. 215.00",
    rating: 3,
  },

];

const ProductSection = () => {
  return (
    <section className="product-section">

      {/* Heading */}
      <h2 className="product-section-heading">
       Business Care Team
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