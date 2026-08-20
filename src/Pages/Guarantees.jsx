import React from "react";
import "../Styles/guarantees.css";

const guarantees = [
  {
    image: "/Home/news/navbharat.png",
    title: "Quality Guaranteed",
  },
  {
    image: "/Home/news/news-nation.jfif",
    title: "100% Natural",
  },
  {
    image: "/Home/news/times-now.webp",
    title: "Fresh Products",
  },
  {
    image: "/Home/news/zbarat.png",
    title: "Secure Payment",
  },
  {
    image: "/Home/news/zee-delhi.jfif",
    title: "Fast Delivery",
  },
   {
    image: "/Home/news/zee-news.jfif",
    title: "Fast Delivery",
  },
];

const Guarantees = () => {
  return (
    <section className="guarantees-section">

      <h2 className="guarantees-heading">
      Business Care – Now Telecasting Across India & Launching Soon in USA, UAE & Oman
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