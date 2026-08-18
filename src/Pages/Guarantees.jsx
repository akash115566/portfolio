import React from "react";
import "../Styles/guarantees.css";

const guarantees = [
  {
    image: "/Home/no adul.webp",
    title: "Quality Guaranteed",
  },
  {
    image: "/Home/no preser.webp",
    title: "100% Natural",
  },
  {
    image: "/Home/no  added.webp",
    title: "Fresh Products",
  },
  {
    image: "/Home/no conta.webp",
    title: "Secure Payment",
  },
  {
    image: "/Home/no arti.webp",
    title: "Fast Delivery",
  },
   {
    image: "/Home/no path.webp",
    title: "Fast Delivery",
  },
];

const Guarantees = () => {
  return (
    <section className="guarantees-section">

      <h2 className="guarantees-heading">
        Guarantees
      </h2>

      <div className="guarantees-grid">
        {guarantees.map((item, index) => (
          <div className="guarantee-card" key={index}>
            <img
              src={item.image}
              alt={item.title}
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Guarantees;