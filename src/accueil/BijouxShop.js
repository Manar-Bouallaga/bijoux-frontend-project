import React from 'react';
import './accueil.css';

const BijouxShop = () => {
  return (
    <div className="containers">
  <div className="left-section">
    <h2>Fashion and Style in Every Detail We Create</h2>
    <p>
      Our mission is to blend elegance with creativity, ensuring every piece reflects individuality and timeless beauty.
    </p>
    <div className="values">
      <div className="value-item">
        <div>
          <img src='./image/knowledge_12056919.png' width={'37px'} />
          <h3>Knowledge</h3>
          <p>
            With years of expertise, we ensure precision and sophistication in every design.
          </p>
        </div>
      </div>
      <div className="value-item">
        <div>
          <img src='./image/innovation_11545589.png' width={'37px'} />
          <h3>Creativity</h3>
          <p>
            Innovation is at the heart of our work, crafting unique designs that inspire.
          </p>
        </div>
      </div>
      <div className="value-item">
        <div>
          <img src='./image/anneaux-de-mariage.png' width={'37px'} />
          <h3>Passion</h3>
          <p>
            Our passion drives us to create pieces that resonate with your personal story.
          </p>
        </div>
      </div>
      <div className="value-item">
        <div>
          <img src='./image/earrings.png' width={'37px'} />
          <h3>Experience</h3>
          <p>
            Decades of experience ensure that our craftsmanship meets the highest standards.
          </p>
        </div>
      </div>
    </div>
  </div>
  <img 
    className="right-section" 
    src="./image/collier-diamants-chaine-or_886983-12133.jpg" 
    alt="Jewelry Showcase" 
  />
</div>

  );
};

export default BijouxShop;
