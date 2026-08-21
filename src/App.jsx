import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import HeroSlider from "./Pages/HeroSlider";
import ProductSection from "./Pages/ProductSection";
import Guarantees from "./Pages/Guarantees";
import Collections from "./Pages/Collections";
import AboutSection from "./Pages/AboutSection";
import Testimonials from "./Pages/Testimonials";
import BackgroundSection from "./Pages/BackgroundSection";
import Recipes from "./Pages/Recipes";
import Footer from "./Pages/Footer";



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroSlider" element={<HeroSlider />} />
        <Route path="/productsection" element={<ProductSection />} />
         <Route path="/guarantees" element={<Guarantees />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/aboutsection" element={<AboutSection />} />
          <Route path="/testimonals" element={<Testimonials />} />
          <Route path="/backgroundsection" element={<BackgroundSection />} />
          <Route path="/recipes" element={<Recipes />} />

                           
             
             
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
