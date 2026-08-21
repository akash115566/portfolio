import React from "react";
import "../Styles/about.css";

const AboutUs = () => {
  const features = [
    {
      icon: "🌶️",
      title: "Ready-Made Spice Blend",
      text: "Perfectly blended spices for quick and convenient curry making.",
    },
    {
      icon: "🌿",
      title: "No Preservatives",
      text: "Made without added preservatives for a simple and better spice experience.",
    },
    {
      icon: "✨",
      title: "No Added Colour",
      text: "Prepared without artificial colours while maintaining authentic spice flavour.",
    },
    {
      icon: "⏱️",
      title: "Fast Curry Making",
      text: "Save preparation time and make delicious curry quickly and easily.",
    },
  ];


    const features1 = [
    {
      icon: "🌶️",
      title: "Ready-Made & Easy to Use",
      text: "No need to measure and mix multiple spices. Our carefully blended masala makes everyday cooking simple and convenient.",
    },
    {
      icon: "🌿",
      title: "No Added Preservatives",
      text: "Made without added preservatives for a simple spice experience focused on authentic taste and flavour.",
    },
    {
      icon: "✨",
      title: "No Added Colour",
      text: "We focus on the natural character of spices without relying on artificial added colour.",
    },
    {
      icon: "⏱️",
      title: "Quick Curry Preparation",
      text: "Save valuable preparation time and prepare delicious curry quickly for your family.",
    },
  ];

  const dishes = [
    "Everyday Curry",
    "Vegetable Dishes",
    "Paneer Recipes",
    "Dal & Gravy",
    "Special Family Meals",
    "Quick Home Cooking",
  ];

  return (
    <>
    <section className="about-spices">

      {/* Decorative Spice Elements */}
      <div className="spice-decoration spice-left">🌶️</div>
      <div className="spice-decoration spice-right">🌿</div>

      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-content">

          <span className="about-label">
            ABOUT OUR SPICES
          </span>

          <h2>
            Premium Tadka Curry
            <span> Masala Spices</span>
          </h2>

          <h3>
            Ready-Made Spices by Business Care
          </h3>

          <p className="about-intro">
            Business Care brings you premium Ready-to-Cook Tadka
            Curry Masala Spices, specially created to make your
            everyday cooking faster, easier and more flavourful.
          </p>

          <p>
            Our carefully prepared spice blend gives your curry an
            authentic Indian taste, rich aroma and delicious tadka
            flavour without the need to mix multiple spices separately.
          </p>

          <div className="about-promise">
            <span>LESS PREPARATION</span>
            <b>•</b>
            <span>LESS TIME</span>
            <b>•</b>
            <span>MORE TASTE</span>
          </div>

        </div>

        {/* RIGHT SPICE VISUAL */}
        <div className="about-visual">

          <div className="spice-circle">

            <div className="spice-bowl">
              <div className="masala-powder"></div>
            </div>

            <span className="floating-spice spice-1">
              🌶️
            </span>

            <span className="floating-spice spice-2">
              🌿
            </span>

            <span className="floating-spice spice-3">
              ✨
            </span>

          </div>

          <div className="visual-text">
            <strong>PREMIUM TADKA</strong>
            <span>Authentic Indian Flavour</span>
          </div>

        </div>

      </div>

      {/* FEATURES */}
      <div className="features-container">

        {features.map((feature, index) => (
          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <div>
              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </div>

          </div>
        ))}

      </div>

    </section>




<main className="about-page">

      {/* ================= HERO ================= */}

      <section className="about-hero">

        <div className="about-hero-content">

          <span className="about-badge">
            🌿 PREMIUM INDIAN SPICES
          </span>

          <h1>
            Premium Tadka Curry
            <span> Masala Spices</span>
          </h1>

          <p>
            Traditional Indian taste with modern cooking convenience.
            Make delicious curry faster, easier and full of flavour.
          </p>

          <button className="about-btn">
            EXPLORE OUR SPICES →
          </button>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="about-intro-section">

        <div className="about-intro-image">

          <div className="spice-visual">

            <span className="floating-chilli">🌶️</span>

            <div className="masala-bowl">
              <div className="masala"></div>
            </div>

            <span className="floating-leaf">🌿</span>

          </div>

        </div>


        <div className="about-intro-content">

          <span className="section-label">
            ABOUT US
          </span>

          <h2>
            Authentic Taste.
            <span> Modern Convenience.</span>
          </h2>

          <p>
            At <strong>Business Care</strong>, we believe that delicious
            food should not require hours of preparation. Our Premium
            Tadka Curry Masala Spices are specially prepared to make
            everyday cooking quick, convenient and full of authentic
            Indian flavour.
          </p>

          <p>
            Our ready-made spice blends are created for modern kitchens
            where you want to enjoy the traditional taste of homemade
            curry while saving valuable preparation time.
          </p>

          <p>
            Simply add the right amount of our masala to your dish and
            bring rich aroma, balanced flavour and authentic Indian
            taste to your everyday meals.
          </p>

        </div>

      </section>


      {/* ================= STORY ================= */}

      <section className="story-section">

        <div className="story-content">

          <span className="section-label">
            OUR STORY
          </span>

          <h2>
            Traditional Taste,
            <span> Made Simple</span>
          </h2>

          <p>
            Indian cooking is known for its rich spices, beautiful aromas
            and unforgettable flavours. But preparing the perfect
            combination of spices for every curry can take time.
          </p>

          <p>
            That's why we created our Ready-Made Tadka Curry Masala —
            a convenient spice blend designed to help you prepare
            flavourful curry quickly and easily.
          </p>

          <div className="story-highlight">

            <div>
              <strong>LESS</strong>
              <span>PREPARATION</span>
            </div>

            <div>
              <strong>LESS</strong>
              <span>TIME</span>
            </div>

            <div>
              <strong>MORE</strong>
              <span>TASTE</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="features-section">

        <div className="section-heading">

          <span className="section-label">
            WHY CHOOSE US?
          </span>

          <h2>
            What Makes Our Spices
            <span> Special?</span>
          </h2>

          <p>
            Carefully created for convenient cooking and authentic
            Indian flavour.
          </p>

        </div>


        <div className="features-grid">

          {features1.map((feature, index) => (

            <div className="about-feature-card" key={index}>

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ================= KITCHEN ================= */}

      <section className="kitchen-section">

        <div className="kitchen-content">

          <span className="section-label">
            MADE FOR EVERY KITCHEN
          </span>

          <h2>
            Perfect for Your
            <span> Everyday Cooking</span>
          </h2>

          <p>
            Whether you're preparing a quick weekday meal or cooking
            for your family and guests, Business Care Premium Tadka
            Curry Masala can make your cooking easier.
          </p>

          <div className="dish-list">

            {dishes.map((dish, index) => (

              <div className="dish-item" key={index}>
                <span>✓</span>
                {dish}
              </div>

            ))}

          </div>

        </div>

        <div className="kitchen-visual">

          <div className="spice-stack">
            <div>🌶️</div>
            <div>🌿</div>
            <div>🥘</div>
          </div>

        </div>

      </section>


      {/* ================= PROMISE ================= */}

      <section className="promise-section">

        <div className="promise-content">

          <span className="section-label">
            OUR PROMISE
          </span>

          <h2>
            Less Preparation.
            <br />
            <span>Less Time. More Taste.</span>
          </h2>

          <p>
            We aim to bring you a convenient spice solution that
            combines authentic Indian flavour with modern-day
            cooking convenience.
          </p>

          <div className="promise-points">

            <span>🌿 Pure Ingredients</span>
            <span>🚫 No Added Preservatives</span>
            <span>✨ No Added Colour</span>
            <span>🌶️ Rich Flavour</span>
            <span>⏱️ Easy Cooking</span>

          </div>

        </div>

      </section>


      {/* ================= VISION ================= */}

      <section className="vision-section">

        <div className="vision-card">

          <span className="section-label">
            OUR VISION
          </span>

          <h2>
            Making Everyday Cooking
            <span> Simple & Delicious</span>
          </h2>

          <p>
            Our vision is to make quality spice blends easily accessible
            to every kitchen while preserving the rich taste and
            tradition of Indian cooking.
          </p>

          <div className="vision-line">
            <span>AUTHENTIC TASTE</span>
            <b>•</b>
            <span>EASY COOKING</span>
            <b>•</b>
            <span>RICH FLAVOUR</span>
          </div>

        </div>

      </section>

    </main>


</>
  );
};

export default AboutUs;