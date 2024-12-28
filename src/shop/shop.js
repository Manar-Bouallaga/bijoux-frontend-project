import React, { useEffect, useState } from 'react';
import {useCart } from "react-use-cart";
import './shop.css';
import { Link } from "react-router-dom";
import Footer from '../accueil/Footer';
import MoreHelp from '../accueil/MoreHelp';
const Shop = ({ product }) => {
    
    const [countPanier ,setCountPanier] = useState(0)
         // recuperer le nomber de items dans cart 
         const {
            totalItems
         } = useCart();
        
    
         useEffect(() => {
            console.log("Total Items: ", totalItems);
            setCountPanier(totalItems || 0);
        }, [totalItems]);


  return (
    <div className="shop-page">
      <div className="navbar-top container">
                <div className="social-link">
                </div>
                        <div className="logo">
                            <h3>Bijoux Shop</h3>
                        </div>
                        <div className="icons">
                            <i></i>
                            <i></i>
                            <span id="panier">
                    <Link to='/cart' style={{"textDecoration": "none"}}>
                            <span style={{"textDecoration": "none","color": "black","fontWeight": "700","position": "relative","left":" 10px"}}>{countPanier}</span>
                            <i><img src="./image/shopping-cart.png" alt="Cart" width="25px" /></i>
        
                            </Link>
                            </span>
                        </div>
                    </div>
                    {/* Navbar Top */}
        
                    {/* Main Content */}
                    
                    <div className=" ">
                    <div className="">
                        <nav className="navbar navbar-expand-md" id="navbar-color">
                            <div className="container">
                                {/* Toggler/collapsibe Button */}
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                    <span>
                                       <i><img src="./image/menu.png" alt="Menu" width="30px" /></i>
                                        
                                    </span>
                                </button>
        
                                {/* Navbar Links */}
                                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href='/'>Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href='/shop'>Shop</a>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <a className="nav-link" href='/cart'>My Cart</a>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a className="nav-link" href="#ee">Brands</a>
                                        </li> */}
                                        <li className="nav-item">
                                    <a className="nav-link" href='/contact'>Contact</a>
                                </li>
                                    </ul>
        
                                </div>
                                
                            </div>
                            
                        </nav>
                        </div>
          <div className="shop-banner">
        <div className="banner-content">
          <h1>Shop</h1>
          <p>Products</p>
        </div>
      </div>

      <div className="shop-container">
        <div className="sorting-section">
          <select>
            <option value="default">Default sorting</option>
            <option value="price-low-high">price-low-high</option>
            <option value="price-high-low">price-high-low</option>
          </select>
        </div>

        <div className="jewelry-grid-container">
      {product.map((produc) => (
        <div key={produc.id} className="jewelry-card">
          <img src={`image/${produc.img}`} alt={produc.name} className="jewelry-product-image" />
          <h3 className="jewelry-product-name">{produc.name}</h3>
          <div className="jewelry-price-section">
            <span className="jewelry-current-price">${produc.price.toFixed(2)}</span>
          </div>
          <Link to={`/product/${produc.id}`} style={{color: 'white', textDecoration: 'none'}} className="jewelry-add-to-cart-btn">See more ...</Link>
        </div>
      ))}
    </div>

    <MoreHelp />

    <Footer />
      </div>
    </div></div>
  );
};

export default Shop;
