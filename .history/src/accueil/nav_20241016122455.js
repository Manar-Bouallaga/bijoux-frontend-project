import React from "react";
import './accueil.css';
import JewelrySection from "./JewelrySection";
import Categories from './categories';
import .why-choose-us {
    text-align: center;
    padding: 80px 20px;
    background-color: #fefbf9;
    color: #6a5d53;
  }
  
  .why-choose-us h2 {
    font-size: 14px;
    color: #d3b89d;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
  }
  
  .why-choose-us h3 {
    font-size: 26px;
    font-weight: 600;
    color: #3e3e3e;
    margin-top: 15px;
  }
  
  .subtitle {
    margin: 20px auto 50px;
    color: #8c8276;
    font-size: 16px;
    max-width: 550px;
    line-height: 1.7;
  }
  
  .features {
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .feature {
    background-color: #faf8f5;
    padding: 40px;
    border-radius: 12px;
    text-align: center;
    width: 30%;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  }
  
  .feature .icon {
    margin-bottom: 20px;
  }
  
  .feature img {
    height: 45px;
    width: 45px;
  }
  
  .feature h4 {
    font-size: 18px;
    font-weight: 600;
    color: #5b5248;
    margin-bottom: 12px;
  }
  
  .feature p {
    color: #938575;
    font-size: 14px;
    line-height: 1.7;
  }
  
  @media (max-width: 768px) {
    .features {
      flex-direction: column;
    }
    
    .feature {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  

export default function Nav() {
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
                    <i><img src="./image/shopping-cart.png" alt="Cart" width="25px" /></i>
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
                            <span><i><img src="./image/menu.png" alt="Menu" width="30px" /></i></span>
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
     <Categories />
     <WhyChooseUs />
            </div></div>
            {/* Main Content */}
            

        </div>
        
   </>
    );
}