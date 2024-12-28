import React from 'react';
import './accueil.css';

const MoreHelp = () => {
  return (
    <section className="MoreHelp">
    <h3>Need More Help?</h3>
    <p className="subtitle">
      We're here to assist you! If you need further information or support, feel free to reach out.
    </p>
    <div className="features">
      <div className="feature">
        <div className="icon">
          <img src="./image/customer-service_12558537.png" alt="Customer Service Icon" />
        </div>
        <h4>Customer Service</h4>
        <p>
          Our customer service team is ready to assist you with any inquiries. We're here to help!
        </p>
        <button className="add-to-cart-btn">Shop Now</button>
      </div>
      <div className="feature">
        <div className="icon">
          <img src="./image/right_9739898.png" alt="Send Ticket Icon" />
        </div>
        <h4>Send a Ticket</h4>
        <p>
          Have an issue or question? Send us a support ticket, and we'll get back to you promptly.
        </p>
        <button className="add-to-cart-btn">Contact Us</button>
      </div>
      <div className="feature">
        <div className="icon">
          <img src="./image/book_5236623.png" alt="News & Articles Icon" />
        </div>
        <h4>News & Articles</h4>
        <p>
          Stay updated with our latest news, trends, and articles related to jewelry and fashion.
        </p>
        <button className="add-to-cart-btn">Read Now</button>
      </div>
    </div>
  </section>
  
  );
};

export default MoreHelp;
