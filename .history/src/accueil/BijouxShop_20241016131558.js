import React from 'react';
import './accueil.css';

const BijouxShop = () => {
  return (
    <div className="containers">
      <div className="left-section">
        <h2>Fashion and style in every thing we own.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <div className="values">
          <div className="value-item">
            
           
            <img src='./image/knowledge_12056919.png' width={'10px'}/>
              <h3>Knowledge</h3>
              <p>Inceptos porta urna vivamus molestie feugiat ultrices vitae hac.</p>
            </div>
          </div>
          <div className="value-item">
            <div className="icon">🎨</div>
            <div>
              <h3>Creative</h3>
              <p>Inceptos porta urna vivamus molestie feugiat ultrices vitae hac.</p>
            </div>
          </div>
          <div className="value-item">
            <div className="icon">❤️</div>
            <div>
              <h3>Passion</h3>
              <p>Inceptos porta urna vivamus molestie feugiat ultrices vitae hac.</p>
            </div>
          </div>
          <div className="value-item">
            <div className="icon">🏆</div>
            <div>
              <h3>Experienced</h3>
              <p>Inceptos porta urna vivamus molestie feugiat ultrices vitae hac.</p>
            </div>
          </div>
        </div>
      </div>
        <img className="right-section" src="./image/collier-diamants-chaine-or_886983-12133.jpg" alt="Jewelry Showcase" />
    </div>
  );
};

export default BijouxShop;
