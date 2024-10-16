import React from 'react';
import './accueil.css';

const product = [
  {
    id: 1,
    name: "Larimar Gemstone Handmade Gift Jewelry Pendant",
    price: 449.00,
    originalPrice: 500.00,
    sale: true,
    img: "./image/pendant-form-rings-with-gem-isolated-white_392895-67469", // Replace with actual image path
  },
  {
    id: 2,
    name: "Classic Big Size Oval Gemstone Citrine Topaz",
    price: 597.00,
    originalPrice: 650.00,
    sale: true,
    img: "path_to_image2",
  },
  {
    id: 3,
    name: "Classic Big Size Oval Gemstone",
    price: 527.00,
    originalPrice: 600.00,
    sale: true,
    img: "path_to_image3",
  },
  {
    id: 4,
    name: "Gold Cubic Zirconia Stud Drop Earrings",
    price: 700.00,
    originalPrice: 750.00,
    sale: true,
    img: "path_to_image4",
  },
  {
    id: 5,
    name: "Silver Square Cubic Zirconia Necklace",
    price: 529.00,
    originalPrice: 600.00,
    sale: true,
    img: "path_to_image5",
  },
  {
    id: 6,
    name: "Amethyst Gemstone Handmade Jewelry Necklace",
    price: 532.00,
    originalPrice: 580.00,
    sale: true,
    img: "path_to_image6",
  },
  {
    id: 7,
    name: "Necklace Rose Quartz Gemstone Handmade Jewelry",
    price: 539.00,
    originalPrice: 600.00,
    sale: true,
    img: "path_to_image7",
  },
  {
    id: 8,
    name: "Elegant Women's Silver Blue Sapphire",
    price: 729.00,
    originalPrice: 800.00,
    sale: true,
    img: "path_to_image8",
  },
];

const Products = () => {
  return (
    <div className="new-arrival-container">
      <h2 className="title">New Arrival</h2>
      <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

    <div className="jewelry-grid-container">
      {product.map((produc) => (
        <div key={produc.id} className="jewelry-card">
          {produc.sale && <span className="jewelry-sale-badge">Sale!</span>}
          <img src={produc.img} alt={produc.name} className="jewelry-product-image" />
          <h3 className="jewelry-product-name">{produc.name}</h3>
          <div className="jewelry-price-section">
            {produc.originalPrice && (
              <span className="jewelry-original-price">${produc.originalPrice.toFixed(2)}</span>
            )}
            <span className="jewelry-current-price">${produc.price.toFixed(2)}</span>
          </div>
          <button className="jewelry-add-to-cart-btn">See more</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Products;
