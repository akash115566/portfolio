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
<HeroSlider />


<Guarantees />
  {/* <section className="guarantees-section">

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

    </section> */}

    <ProductSection />
    <Collections />
    <AboutSection />
    <Testimonials />
    
    <BackgroundSection />
    <Recipes />





 </>
  )
}

export default Home
