import React, { useState } from 'react';
import './accueil.css';
import { Link } from 'react-router-dom';

// const categories = [
//   {
//     id: 1,
//     name: 'Larimar Gemstone Handmade Gift Jewelry ',
//     img: './image/photographie-femmes-luxe-modernes-bijoux-elegants_1288657-190820.avif',
 
//   },
//   {
//     id: 2,
//     name: 'Silver Square Cubic Zirconia Necklace',
//     img: './image/topaz-brooch-clean-white-background_1170858-4447.jpg',
   
//   },
//   {
//     id: 3,
//     name: 'Elegant Women Silver Blue Sapphire',
//     img: './image/drop-earring-isolated-white-background_1162228-5542.jpg',
//   },
//   {
//     id: 4,
//     name: 'Round Ceramics Simple White Black',
//     img: './image/jewelry-isolated-white-background_641503-374545.jpg',
//   },
// ];

// procat
const Categories = ({categories}) => {
  const selectedId = (catId) => {
    // Nous avons besoin de transferer le id de categorie selectionner a la composant plat 
    localStorage.setItem("catId", JSON.stringify(catId));
  }
  
  return (
    <section className="product-section">
      <div className='categorie-bg'>
      <div className="header">
        <h2>Discover Categories</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      </div>
      <div className="products-grid">
      
        {categories.map((categorie ) => (
            
          <div key={categorie.id} className="product-card">
            <img src={`image/${categorie.img}`} alt={categorie.title} className="product-image" />
            <h3 className="product-name">{categorie.title}</h3>
            <div className="product-price">
             
            </div>
            <Link to="/procat">
            <button onClick={()=>selectedId(categorie.id)} className="add-to-cart-btn">See more</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
