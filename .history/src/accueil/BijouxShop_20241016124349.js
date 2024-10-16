import React from 'react';
import './BijouxShop.css';
import jewelryImage from '../../public/image/collier-diamants-chaine-or_886983-12133.jpg'; // Replace with the correct path to your image

const BijouxShop = () => {
  return (
    <div className="bijoux-container">
      <div className="text-section">
        <h2>Fashion and style in everything we own.</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="values">
          <div className="value-item">
            <div className="icon">📚</div> {/* Replace with actual icon */}
            <div className="value-text">
              <h3>Knowledge</h3>
              <p>Inceptos porta urna vivamus molestie feugiat ultrices vitae hac.</p>
            </div>
          </div>
          <div className="value-item">
            <div className="icon">🎨</div> {/* Replace with actual icon */}
            <div className="value-text">
              <h3>Creative</h3>
              <p>Inceptos porta urna vivamus molestie feugiat ultrices vitae hac.</p>
            </div>
          </div>
          <div className="value-item">
            <div className="icon">❤️</div> {/* Replace with actual icon */}
            <div className="value-text">
              <h3>Passion</h3>
              <p>Inceptos porta urna vivamus molestie feugiat ultrices vitae hac.</p>
            </div>
          </div>
          <div className="value-item">
            <div className="icon">🧠</div> {/* Replace with actual icon */}
            <div className="value-text">
              <h3>Experienced</h3>
              <p>Inceptos porta urna vivamus molestie feugiat ultrices vitae hac.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="image-section">
        <img src={jewelryImage} alt="Jewelry Showcase" />
      </div>
    </div>
  );
};

export default BijouxShop;
