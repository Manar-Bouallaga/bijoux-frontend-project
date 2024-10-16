import React from 'react';
import './accueil.css';

const MoreHelp = () => {
  return (
    <section className="why-choose-us">
      <h3>Need more help?</h3>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className="features">
        <div className="feature">
          <div className="icon">
            <img src="./image/bijoux.png" alt="Good Material Icon" />
          </div>
          <h4>Good Material</h4>
          <p>
            Bibendum dictumst morbi risus in augue himenaeos nunc nisi faucibus.
          </p>
        </div>
        <div className="feature">
          <div className="icon">
            <img src="./image/earrings.png" alt="Professional Expert Icon" />
          </div>
          <h4>Professional Expert</h4>
          <p>
            Bibendum dictumst morbi risus in augue himenaeos nunc nisi faucibus.
          </p>
        </div>
        <div className="feature">
          <div className="icon">
            <img src="./image/volume-on_17818606.png" alt="24/7 Premium Support Icon" />
          </div>
          <h4>24/7 Premium Support</h4>
          <p>
            Bibendum dictumst morbi risus in augue himenaeos nunc nisi faucibus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoreHelp;
