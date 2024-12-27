import React from 'react';
import './accueil.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Pourquoi Nous Choisir</h2>
      <h3>Des bijoux lumineux et élégants, créés pour vous.</h3>
      <p className="subtitle">
        Chez Bijoux Shop, nous allions matériaux de qualité, expertise artisanale et service client exceptionnel pour vous offrir une expérience unique.
      </p>
      <div className="features">
        <div className="feature">
          <div className="icon">
            <img src="./image/bijoux.png" alt="Icône de matériaux de qualité" />
          </div>
          <h4>Matériaux de Qualité</h4>
          <p>
            Nous sélectionnons soigneusement les meilleurs matériaux pour garantir la durabilité et la beauté intemporelle de nos créations.
          </p>
        </div>
        <div className="feature">
          <div className="icon">
            <img src="./image/earrings.png" alt="Icône d'expertise professionnelle" />
          </div>
          <h4>Experts Professionnels</h4>
          <p>
            Nos artisans expérimentés travaillent avec précision et passion pour concevoir des pièces qui reflètent votre style unique.
          </p>
        </div>
        <div className="feature">
          <div className="icon">
            <img src="./image/volume-on_17818606.png" alt="Icône de support premium" />
          </div>
          <h4>Support Premium 24/7</h4>
          <p>
            Notre équipe est toujours disponible pour répondre à vos questions et vous aider à chaque étape de votre expérience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
