import React from "react";
import "../Styles/guarantees.css";

const guarantees = [
  {
    image: "/Home/award/awa1.webp",
    title: "Quality Guaranteed",
  },
  {
    image: "/Home/award/awa2.webp",
    title: "100% Natural",
  },
  {
    image: "/Home/award/awa3.webp",
    title: "Fresh Products",
  },
  {
    image: "/Home/award/awa4.webp",
    title: "Secure Payment",
  },
  {
    image: "/Home/award/awa5.webp",
    title: "Fast Delivery",
  },
   {
    image: "/Home/award/awa6.webp",
    title: "Fast Delivery",
  },
];

const Guarantees = () => {
  return (
    <section className="guarantees-section">

      <h2 className="guarantees-heading">
       Our Award
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