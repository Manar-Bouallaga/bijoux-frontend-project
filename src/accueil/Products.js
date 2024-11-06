import React from 'react';
import './accueil.css';
import { CartProvider, useCart } from "react-use-cart";

// const product = [
//   {id: 22,
//     name: "Gold Cubic Zirconia Stud Drop Earrings",
//     price: 700.00,
//     prixOriginale: 750.00,
//     sale: true,
//     description : "Classic Big Size Oval Gemstone Classic Big Size Oval GemstoneClassic Big Size Oval Gemstone",
//     img: "./image/pendant-necklace-isolated-white-background_1159488-6958.jpg",
//     categorie_id:2
//   },
//   {id: 1,
//     name: "Gold Cubic Zirconia Stud Drop Earrings",
//     price: 700.00,
//     prixOriginale: 750.00,
//     sale: true,
//     description : "Classic Big Size Oval Gemstone Classic Big Size Oval GemstoneClassic Big Size Oval Gemstone",
//     img: "./image/pendant-necklace-isolated-white-background_1159488-6958.jpg",
//     categorie_id:2
//   },
//   {
//     id: 2,
//     name: "Gold Cubic Zirconia Stud Drop Earrings",
//     price: 700.00,
//     prixOriginale: 750.00,
//     sale: true,
//     description : "Classic Big Size Oval Gemstone Classic Big Size Oval GemstoneClassic Big Size Oval Gemstone",
//     img: "./image/pendant-necklace-isolated-white-background_1159488-6958.jpg",
//     categorie_id:2
//   },
//   {
//     id: 3,
//     name: "Gold Cubic Zirconia Stud Drop Earrings",
//     price: 700.00,
//     prixOriginale: 750.00,
//     sale: true,
//     description : "Classic Big Size Oval Gemstone Classic Big Size Oval GemstoneClassic Big Size Oval Gemstone",
//     img: "./image/pendant-necklace-isolated-white-background_1159488-6958.jpg",
//     categorie_id:2
//   },
//   {
//     id: 5,
//     name: "Gold Cubic Zirconia Stud Drop Earrings",
//     price: 700.00,
//     prixOriginale: 750.00,
//     sale: true,
//     description : "Classic Big Size Oval Gemstone Classic Big Size Oval GemstoneClassic Big Size Oval Gemstone",
//     img: "./image/pendant-necklace-isolated-white-background_1159488-6958.jpg",
//     categorie_id:2
//   },
//   {
//     id: 6,
//     name: "Gold Cubic Zirconia Stud Drop Earrings",
//     price: 700.00,
//     prixOriginale: 750.00,
//     sale: true,
//     description : "Classic Big Size Oval Gemstone Classic Big Size Oval GemstoneClassic Big Size Oval Gemstone",
//     img: "./image/pendant-necklace-isolated-white-background_1159488-6958.jpg",
//     categorie_id:2
//   },
//   {
//     id: 7,
//     name: "Gold Cubic Zirconia Stud Drop Earrings",
//     price: 700.00,
//     prixOriginale: 750.00,
//     sale: true,
//     description : "Classic Big Size Oval Gemstone Classic Big Size Oval GemstoneClassic Big Size Oval Gemstone",
//     img: "./image/pendant-necklace-isolated-white-background_1159488-6958.jpg",
//     categorie_id:2
//   },
//   {
//     id: 8,
//     name: "Gold Cubic Zirconia Stud Drop Earrings",
//     price: 700.00,
//     prixOriginale: 750.00,
//     sale: true,
//     description : "Classic Big Size Oval Gemstone Classic Big Size Oval GemstoneClassic Big Size Oval Gemstone",
//     img: "./image/pendant-necklace-isolated-white-background_1159488-6958.jpg",
//     categorie_id:2
//   },
// ];

const Products = ({product}) => {
  const { addItem } = useCart();
  

  return (
    <div className="new-arrival-container">
      <h2 className="title">New Arrival</h2>
      <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

    <div className="jewelry-grid-container">
      {product.map((produc) => (
        <div key={produc.id} className="jewelry-card">
          {/* {produc.sale && <span className="jewelry-sale-badge">Sale!</span>} */}
          <img src={`image/${produc.img}`} alt={produc.name} className="jewelry-product-image" />
          <h3 className="jewelry-product-name">{produc.name}</h3>
          <div className="jewelry-price-section">
            {/* {produc.prixOriginale && (
              <span className="jewelry-original-price">${produc.prixOriginale.toFixed(2)}</span>
            )} */}
            <span className="jewelry-current-price">${produc.price.toFixed(2)}</span>
          </div>
          <button onClick={() => addItem(produc)} className="jewelry-add-to-cart-btn">Add to cart</button>
        </div>
      ))}
    </div>
    
    </div>
  );
};

export default Products;
