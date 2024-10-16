import React from 'react';
import './accueil.css';

const categories = [
  {
    id: 1,
    name: 'Larimar Gemstone Handmade Gift Jewelry Pendant',
    img: '.image/photographie-femmes-luxe-modernes-bijoux-elegants_1288657-190820.avif',
 
  },
  {
    id: 2,
    name: 'Silver Square Cubic Zirconia Necklace',
    img: 'path_to_image',
   
  },
  {
    id: 3,
    name: 'Elegant Women Silver Blue Sapphire',
    img: 'path_to_image',
  },
  {
    id: 4,
    name: 'Round Ceramics Simple White Black',
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
             
            </div>
            <button className="add-to-cart-btn">See more</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
