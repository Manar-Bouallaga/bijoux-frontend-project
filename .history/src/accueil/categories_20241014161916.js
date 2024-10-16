import React from 'react';
import './accueil.css';

const categories = [
  {
    id: 1,
    name: 'Larimar Gemstone Handmade Gift Jewelry Pendant',
    price: 449.00,
    originalPrice: 520.00,
    img: 'path_to_image',
 
  },
  {
    id: 2,
    name: 'Silver Square Cubic Zirconia Necklace',
    price: 629.00,
    originalPrice: 920.00,
    img: 'path_to_image',
   
  },
  {
    id: 3,
    name: 'Elegant Women Silver Blue Sapphire',
    price: 739.00,
    originalPrice: null,
    img: 'path_to_image',
  },
  {
    id: 4,
    name: 'Round Ceramics Simple White Black',
    price: 399.00,
    originalPrice: 430.00,
    img: 'path_to_image',
  },
];

const Product = () => {
  return (
    <section className="product-section">
      <div className="header">
        <h2>Discover Collections</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="products-grid">
        {categories.map((categorie) => (
          <div key={categorie.id} className="product-card">
            <img src={categorie.img} alt={categorie.name} className="product-image" />
            <h3 className="product-name">{categorie.name}</h3>
            <div className="product-price">
              {categorie.originalPrice && (
                <span className="original-price">${categorie.originalPrice.toFixed(2)}</span>
              )}
              <span className="current-price">${categorie.price.toFixed(2)}</span>
            </div>
            <button className="add-to-cart-btn">See more</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
