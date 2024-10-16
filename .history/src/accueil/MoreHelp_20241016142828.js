import React from 'react';
import './accueil.css';

const MoreHelp = () => {
  return (
    <section className="MoreHelp">
      <h3>Need more help?</h3>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className="features">
        <div className="feature">
          <div className="icon">
            <img src="./image/bijoux.png" alt="Good Material Icon" />
          </div>
          <h4>Customer Service</h4>
          <p>
            Bibendum dictumst morbi risus in augue himenaeos nunc nisi faucibus.
          </p>
          <button className="add-to-cart-btn">Shot Now</button>
        </div>
        <div className="feature">
          <div className="icon">
            <img src="./image/earrings.png" alt="Professional Expert Icon" />
          </div>
          <h4>Send Ticket</h4>
          <p>
            Bibendum dictumst morbi risus in augue himenaeos nunc nisi faucibus.
          </p>
          <button className="add-to-cart-btn">Contact Us</button>
        </div>
        <div className="feature">
          <div className="icon">
            <img src="./image/volume-on_17818606.png" alt="24/7 Premium Support Icon" />
          </div>
          <h4>News & Arti</h4>
          <p>
            Bibendum dictumst morbi risus in augue himenaeos nunc nisi faucibus.
          </p>
          <button className="add-to-cart-btn">Read Now</button>
        </div>
      </div>
    </section>
  );
};

export default MoreHelp;
