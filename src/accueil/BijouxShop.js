import React from 'react';
import './accueil.css';

const BijouxShop = () => {
  return (
    <div className="containers">
      <div className="left-section">
        <h2>Mode et élégance dans chaque bijou que nous créons.</h2>
        <p>
          Chez Bijoux Shop, nous combinons créativité, savoir-faire et passion pour offrir des pièces qui racontent une histoire et reflètent votre style unique.
        </p>
        <div className="values">
          <div className="value-item">
            <div>
              <img src='./image/knowledge_12056919.png' width={'37px'} alt="Icône de connaissances" />
              <h3>Connaissances</h3>
              <p>
                Une expertise approfondie dans la conception et la fabrication de bijoux, avec des années d'expérience au service de l'excellence.
              </p>
            </div>
          </div>
          <div className="value-item">
            <div>
              <img src='./image/innovation_11545589.png' width={'37px'} alt="Icône de créativité" />
              <h3>Créativité</h3>
              <p>
                Chaque bijou est conçu avec originalité, reflétant les tendances modernes tout en conservant une touche intemporelle.
              </p>
            </div>
          </div>
          <div className="value-item">
            <div>
              <img src='./image/anneaux-de-mariage.png' width={'37px'} alt="Icône de passion" />
              <h3>Passion</h3>
              <p>
                Nous sommes passionnés par l'idée de créer des pièces qui capturent vos moments les plus précieux et uniques.
              </p>
            </div>
          </div>
          <div className="value-item">
            <div>
              <img src='./image/earrings.png' width={'37px'} alt="Icône d'expérience" />
              <h3>Expérience</h3>
              <p>
                Une longue tradition de perfection artisanale, combinée à des techniques modernes pour des bijoux exceptionnels.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="right-section" src="./image/collier-diamants-chaine-or_886983-12133.jpg" alt="Vitrine de bijoux" />
    </div>
  );
};

export default BijouxShop;
