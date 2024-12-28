import React from 'react'
import { Link } from 'react-router-dom'
import "./msg.css"
import Footer from './Footer'
export default function EmptyMsg() {
  return (
    <div>
      <div className="navbar-top container">
                    <div className="social-link">
                        {/* <i><img src="./image/twitter.png" alt="Twitter" width="30px" /></i>
                        <i><img src="./image/facebook.png" alt="Facebook" width="30px" /></i>
                        <i><img src="./image/google-plus.png" alt="Google+" width="30px" /></i> */}
                    </div>
                    <div className="logo">
                        <h3>Bijoux Shop</h3>
                    </div>
                    
                </div>
                {/* Navbar Top */}
    
                {/* Main Content */}
                
                
                
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
        <main class="message-alert">
            <h1> Votre Panier est vide </h1>
            <p class="lead"> Cliquez ci-dessous pour ajouter des commandes .</p>
            <p class="lead">
            <Link to="/" className="jewelry-add-to-cart-btn" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>
                  Passer une commande
                </Link>
            </p>
        </main>
        <Footer/>
    </div>
  )
}
