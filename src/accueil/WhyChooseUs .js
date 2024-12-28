import React from 'react';
import './accueil.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
  <h2>Why Choose Us</h2>
  <h3>Radiant and Unique Jewelry Crafted for You</h3>
  <p className="subtitle">
    Our dedication to quality and exceptional design ensures that every piece of jewelry tells a story of elegance and craftsmanship.
  </p>
  <div className="features">
    <div className="feature">
      <div className="icon">
        <img src="./image/bijoux.png" alt="Good Material Icon" />
      </div>
      <h4>Premium Quality Materials</h4>
      <p>
        We source only the finest materials to create stunning pieces that are durable and timeless.
      </p>
    </div>
    <div className="feature">
      <div className="icon">
        <img src="./image/earrings.png" alt="Professional Expert Icon" />
      </div>
      <h4>Skilled Artisans</h4>
      <p>
        Our team of experts combines traditional techniques with modern innovation to bring your vision to life.
      </p>
    </div>
    <div className="feature">
      <div className="icon">
        <img src="./image/volume-on_17818606.png" alt="24/7 Premium Support Icon" />
      </div>
      <h4>24/7 Dedicated Support</h4>
      <p>
        We're always here to help, ensuring a seamless and delightful shopping experience.
      </p>
    </div>
  </div>
</section>

  );
};

export default WhyChooseUs;
