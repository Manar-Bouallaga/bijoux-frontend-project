import React, { useEffect, useState } from 'react'
import { useCart } from "react-use-cart";
export default function ProCat({product}) {
    const [catId, setCatId] = useState([]);
    const { addItem } = useCart();
    // recuperer id categorie 
    useEffect(() => {
        const idCat = localStorage.getItem("catId");
        if (idCat) {
          setCatId(JSON.parse(idCat));
        }
      }, []);

  return (
    <div className="new-arrival-container"  style={{"margin":"0px"}}>
      <h2 className="title">les produit par categorie</h2>
      <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    <div className="jewelry-grid-container">
      {product.map((produc) => (
        // verifier si le catid = categorie_id de produit 
        catId === produc.categorie_id ?
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
          <button onClick={() => addItem(produc)}  className="jewelry-add-to-cart-btn">add to card</button>
        </div>
        :<></>
      ))}
    </div>
    </div>
  )
}
