import React, { useEffect, useState } from "react";
import './accueil.css';
import JewelrySection from "./JewelrySection";
import Categories from './categories';
import WhyChooseUs from "./WhyChooseUs ";
import BijouxShop from "./BijouxShop";
import Products from "./Products";
import AboutUs from "./AboutUs";
import MoreHelp from "./MoreHelp";
import Footer from "./Footer";
import Cart from "./Cart";
import { CartProvider, useCart } from "react-use-cart";
import { Link } from "react-router-dom";

export default function Accueil({product}) {
    const [categories ,setCategoris] = useState([])
    
    // l'api pour les categories
    useEffect(
        function(){
            fetch("http://127.0.0.1:8000/api/categories")
            .then(Response =>Response.json())
            .then(data=>
                setCategoris(data)
                
                )
            .catch(error=>console.error("erreur : ",error))
        },[]
    )
    // recuperer le nomber de items dans cart 
    const {
        
        totalUniqueItems,
        
      } = useCart();
    
    return (
        <>
        <div className="">
            {/* Navbar Top */}
            <div className="navbar-top container">
                <div className="social-link">
                    <i><img src="./image/twitter.png" alt="Twitter" width="30px" /></i>
                    <i><img src="./image/facebook.png" alt="Facebook" width="30px" /></i>
                    <i><img src="./image/google-plus.png" alt="Google+" width="30px" /></i>
                </div>
                <div className="logo">
                    <h3>Bijoux Shop</h3>
                </div>
                <div className="icons">
                    <i><img src="./image/search.png" alt="Search" width="20px" /></i>
                    <i><img src="./image/heart.png" alt="Favorites" width="20px" /></i>
                    <span id="panier">
                    <Link to="cart">
                    <span style={{"textDecoration": "none","color": "black","fontWeight": "700","position": "relative","left":" 10px"}}>{totalUniqueItems}</span>
                    <i><img src="./image/shopping-cart.png" alt="Cart" width="25px" /></i>

                    </Link>
                    </span>
                </div>
            </div>
            {/* Navbar Top */}

            {/* Main Content */}
            
            <div className="main-content ">
            <div className="back-content">
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
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Top Chair</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Chair</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Brands</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>

                        </div>
                        
                    </div>
                    
                </nav>
                <div className="content-header">
                  <p>WELCOME TO BIJOUX SHOP</p>
                  <h1>Highclass craftsmanship which you have always deserved</h1>
                  <p>we are experts in a number of manufacturing techniques blonding odchod new methods to give you the best of both</p>
                  <button>Shop Now!</button>
                </div>
                
                <div class="services-section">
                    <div class="service-card">
                        <img src="./image/boutique.png" alt="Jewelry Store" class="service-icon"/> 
                        <h3>Jewelry Store</h3>
                        <p>Blibendum dictumst morbi risus in augue aliquam.</p>
                    </div>
                    <div class="service-card">
                        <img src="./image/earrings.png" alt="Jewelry Crafter" class="service-icon"/> 
                        <h3>Jewelry Crafter</h3>
                        <p>Blibendum dictumst morbi risus in augue aliquam.</p>
                    </div>
                    <div class="service-card">
                        <img src="./image/outils.png" alt="Jewelry Repair" class="service-icon"/> 
                        <h3>Jewelry Repair</h3>
                        <p>Blibendum dictumst morbi risus in augue aliquam.</p>
                    </div>
                    <div class="service-card">
                        <img src="./image/bijoux.png" alt="Goldsmith" class="service-icon"/> 
                        <h3>Goldsmith</h3>
                        <p>Blibendum dictumst morbi risus in augue aliquam.</p>
                    </div>
                    </div>
                    <JewelrySection />
                    <Categories categories={categories} />
                    <WhyChooseUs />
                    <BijouxShop />
                    <CartProvider>
                        <Products product={product}/>
                        
                    </CartProvider>
                    {/* <Products product={product}/> */}
                    <AboutUs />
                    <MoreHelp />
                    <Footer />
                    </div></div>
            {/* Main Content */}
            

        </div>
        
   </>
    );
}