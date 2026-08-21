import React from 'react'
import HeroSlider from './HeroSlider'
import ProductSection from './ProductSection';
import Guarantees from './Guarantees';
import Collections from './Collections';
import { Link } from 'react-router-dom';
import AboutSection from './AboutSection';
import Testimonials from './Testimonials';
import BackgroundSection from './BackgroundSection';
import Recipes from './Recipes';
import "../Styles/home.css";



const products = [
  {
    name: "Turmeric Powder",
    subtitle: "Pure Haldi",
    image:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Red Chilli Powder",
    subtitle: "Hot & Fresh",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Coriander Powder",
    subtitle: "Fresh Dhaniya",
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Garam Masala",
    subtitle: "Authentic Blend",
    image:
      "https://images.unsplash.com/photo-1599909533730-f8f8f6e8e2c9?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Cumin Seeds",
    subtitle: "Premium Jeera",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Black Pepper",
    subtitle: "Whole Pepper",
    image:
      "https://images.unsplash.com/photo-1599909533681-1a0e9d5b8b8f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Kitchen King Masala",
    subtitle: "Rich Flavour",
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Kasuri Methi",
    subtitle: "Dried Fenugreek",
    image:
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80",
  },
];

const categories = [
  {
    title: "Whole Spices",
    icon: "🌿",
    text: "Premium whole spices",
  },
  {
    title: "Spice Powders",
    icon: "🌶️",
    text: "Freshly ground spices",
  },
  {
    title: "Masala Blends",
    icon: "🥘",
    text: "Perfect flavour blends",
  },
  {
    title: "Herbs & Leaves",
    icon: "🍃",
    text: "Natural dried herbs",
  },
  {
    title: "Dry Fruits",
    icon: "🥜",
    text: "Premium quality dry fruits",
  },
];

const benefits = [
  {
    icon: "🌱",
    title: "100% Pure",
    text: "No artificial colours",
  },
  {
    icon: "🏆",
    title: "Premium Quality",
    text: "Carefully selected spices",
  },
  {
    icon: "🌶️",
    title: "Rich Flavour",
    text: "Authentic aroma & taste",
  },
  {
    icon: "🛡️",
    title: "Hygienically Packed",
    text: "Freshness protected",
  },
  {
    icon: "🚚",
    title: "Fast Delivery",
    text: "Delivered across India",
  },
];



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
    image: "/Home/no added.webp",
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
const Home = () => {
  return (
 <>




    <div className="spice-app">

   

      {/* HERO */}
      <section className="hero" id="home">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="hero-small">
            ✦ PURE • FRESH • AUTHENTIC ✦
          </p>

          <h2>
            PURE SPICES
            <br />
            <span>RICH FLAVOUR</span>
          </h2>

          <p>
            Bringing authentic taste, rich aroma
            <br />
            and premium quality to every kitchen.
          </p>

          <button className="primary-btn">
            SHOP NOW →
          </button>

        </div>

      </section>

      {/* PRODUCT RANGE */}
      <section className="products-section" id="products">

        <div className="section-heading">
          <span>✦</span>
          <div>
            <p>DISCOVER OUR COLLECTION</p>
            <h2>OUR RANGE OF PRODUCTS</h2>
          </div>
          <span>✦</span>
        </div>

        <p className="section-description">
          Carefully selected spices packed with authentic flavour,
          freshness and aroma for your everyday cooking.
        </p>

        <div className="product-grid">

          {products.map((product, index) => (
            <div className="product-card" key={index}>

              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="product-tag">
                  PURE
                </span>
              </div>

              <div className="product-info">
                <p>{product.subtitle}</p>

                <h3>{product.name}</h3>

                <div className="rating">
                  ★★★★★
                </div>

                <button>
                  SHOP NOW
                </button>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* BENEFITS */}
      <section className="benefits-section">

        <div className="benefits-container">

          {benefits.map((item, index) => (
            <div className="benefit" key={index}>

              <div className="benefit-icon">
                {item.icon}
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* CATEGORIES */}
      <section className="categories-section" id="categories">

        <div className="category-title">

          <p>EXPLORE OUR COLLECTION</p>

          <h2>
            DISCOVER YOUR FAVOURITE SPICES
          </h2>

          <span>
            From everyday essentials to special blends
          </span>

        </div>

        <div className="category-grid">

          {categories.map((category, index) => (
            <div className="category-card" key={index}>

              <div className="category-icon">
                {category.icon}
              </div>

              <h3>{category.title}</h3>

              <p>{category.text}</p>

              <button>
                EXPLORE →
              </button>

            </div>
          ))}

        </div>

      </section>

      {/* NEW ARRIVALS */}
      <section className="new-arrivals" id="new">

        <div className="new-content">

          <div>
            <p className="new-label">
              ✨ JUST ARRIVED
            </p>

            <h2>
              NEW SPICES,
              <br />
              <span>NEW FLAVOURS</span>
            </h2>

            <p>
              Explore our latest collection of premium spices
              and masala blends made to add something special
              to every meal.
            </p>

            <button className="primary-btn">
              EXPLORE NEW ARRIVALS
            </button>
          </div>

          <div className="new-spices">
            <div>🌶️</div>
            <div>🌿</div>
            <div>🧂</div>
            <div>🥘</div>
          </div>

        </div>

      </section>

      {/* QUALITY SECTION */}
      <section className="quality-section">

        <div className="quality-content">

          <p>OUR PROMISE</p>

          <h2>
            FROM NATURE
            <br />
            <span>TO YOUR KITCHEN</span>
          </h2>

          <p className="quality-text">
            We believe that great food begins with great ingredients.
            Our spices are selected with care to bring natural colour,
            authentic aroma and delicious flavour to your kitchen.
          </p>

          <div className="quality-points">

            <div>
              <span>✓</span>
              Freshly Selected
            </div>

            <div>
              <span>✓</span>
              Quality Tested
            </div>

            <div>
              <span>✓</span>
              Hygienically Packed
            </div>

            <div>
              <span>✓</span>
              Authentic Flavour
            </div>

          </div>

        </div>

      </section>

      {/* RECIPES */}
      <section className="recipes-section">

        <div className="section-heading">

          <span>✦</span>

          <div>
            <p>COOK • TASTE • ENJOY</p>
            <h2>RECIPES & COOKING IDEAS</h2>
          </div>

          <span>✦</span>

        </div>

        <p className="section-description">
          Simple ingredients, authentic spices and delicious recipes.
        </p>

        <div className="recipe-grid">

          <div className="recipe-card recipe-one">
            <div>
              <span>RECIPE 01</span>
              <h3>Perfect Paneer Masala</h3>
              <button>VIEW RECIPE →</button>
            </div>
          </div>

          <div className="recipe-card recipe-two">
            <div>
              <span>RECIPE 02</span>
              <h3>Authentic Biryani</h3>
              <button>VIEW RECIPE →</button>
            </div>
          </div>

          <div className="recipe-card recipe-three">
            <div>
              <span>RECIPE 03</span>
              <h3>Masala Chole</h3>
              <button>VIEW RECIPE →</button>
            </div>
          </div>

        </div>

      </section>

      {/* OFFER */}
      <section className="offer-section" id="offers">

        <div className="offer-content">

          <div>
            <p>LIMITED TIME OFFER</p>

            <h2>
              SPICE UP
              <br />
              YOUR KITCHEN!
            </h2>

            <span>
              Get special prices on selected spice combinations.
            </span>
          </div>

          <button>
            VIEW ALL OFFERS →
          </button>

        </div>

      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">

        <div>
          <p>STAY UPDATED</p>

          <h2>
            Get Fresh Flavours in Your Inbox
          </h2>

          <span>
            Subscribe for recipes, new products and exclusive offers.
          </span>
        </div>

        <div className="subscribe-box">
          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button>
            SUBSCRIBE
          </button>
        </div>

      </section>


    </div>
{/*  
<HeroSlider />


<Guarantees />
  <section className="guarantees-section">

      <h2 className="guarantees-heading">
        Guarantees
      </h2>

      <div className="guarantees-logos">

        {guarantees.map((item, index) => (
          <div className="guarantee-item" key={index}>

            <img
              src={item.image}
              alt={item.title}
            />

          </div>
        ))}

      </div>

    </section>

    <ProductSection />
    <Collections />
    <AboutSection />
    <Testimonials />
    
    <BackgroundSection />
    <Recipes /> */}





 </>
  )
}

export default Home
