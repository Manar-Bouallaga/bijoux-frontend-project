import React from 'react';
import './accueil.css';

const MoreHelp = () => {
  return (
    <section className="MoreHelp">
      <h3>Besoin d'aide supplémentaire ?</h3>
      <p className="subtitle">
        Notre équipe est là pour vous accompagner à chaque étape. Que ce soit pour des questions, des conseils ou des informations, nous sommes à votre disposition.
      </p>
      <div className="features">
        <div className="feature">
          <div className="icon">
            <img src="./image/customer-service_12558537.png" alt="Icône Service Client" />
          </div>
          <h4>Service Client</h4>
          <p>
            Une assistance personnalisée pour répondre à toutes vos questions et vous aider à trouver le bijou parfait.
          </p>
          <button className="add-to-cart-btn">Appelez-nous</button>
        </div>
        <div className="feature">
          <div className="icon">
            <img src="./image/right_9739898.png" alt="Icône Ticket Support" />
          </div>
          <h4>Envoyer un Ticket</h4>
          <p>
            Besoin de support ? Soumettez un ticket et notre équipe reviendra vers vous rapidement.
          </p>
          <button className="add-to-cart-btn">Contactez-nous</button>
        </div>
        <div className="feature">
          <div className="icon">
            <img src="./image/book_5236623.png" alt="Icône Articles et Nouvelles" />
          </div>
          <h4>Actualités & Articles</h4>
          <p>
            Découvrez les dernières tendances en bijouterie et nos conseils d'experts dans notre section articles.
          </p>
          <button className="add-to-cart-btn">Lisez maintenant</button>
        </div>
      </div>
    </section>
  );
};

export default MoreHelp;
