import React from 'react';
import './accueil.css';
// import { useCart } from 'react-use-cart';
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  // const { addItem } = useCart();

  // const handleAddToCart = (product) => {
  //   addItem(product);
  // };

  // Select the first 12 products
  const limitedProducts = product.slice(0, 12);

  return (
    <div className="new-arrival-container">
  <h2 className="title">New Arrivals</h2>
  <p className="subtitle">
    Discover the latest additions to our collection. Handcrafted with precision, these pieces bring elegance and charm to every occasion.
  </p>

  <div className="jewelry-grid-container">
    {limitedProducts.map((produc) => (
      <div key={produc.id} className="jewelry-card">
        <img src={`image/${produc.img}`} alt={produc.name} className="jewelry-product-image" />
        <h3 className="jewelry-product-name">{produc.name}</h3>
        <div className="jewelry-price-section">
          <span className="jewelry-current-price">${produc.price.toFixed(2)}</span>
        </div>
        <Link 
          to={`/product/${produc.id}`} 
          style={{ color: 'white', textDecoration: 'none' }} 
          className="jewelry-add-to-cart-btn"
        >
          See more ...
        </Link>
      </div>
    ))}
  </div>
</div>

  );
};

export default Products;
