import React from 'react'
import { Link } from 'react-router-dom'
import "./msg.css"
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
        <footer className="footer">
      <div className="footer-container">
        {/* Head Office Section */}
        <div className="footer-section">
          <h3>Head Office</h3>
          <ul>
            <li>
              <span className="icon"><img src='./image/gps_15949802.png' width={'20px'} alt=''/></span> Jl. Compokla Wonga No.22, Jakarta
            </li>
            <li>
              <span className="icon"><img src='./image/email_4546924.png' width={'20px'} alt=''/></span> Support@yourdomain.tld
            </li>
            <li>
              <span className="icon"><img src='./image/telephone_16617661.png' width={'20px'} alt=''/></span> +62 21 2002 2012
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Ticket</li>
            <li>Support Center</li>
            <li>Faq</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <form>
            <input type="email" placeholder="Email" />
            <button className="jewelry-add-to-cart-btn">Sign up</button>
          </form>
          <br></br>
          <div className='social-link'>
          <i><img src="./image/twitter.png" alt="Twitter" width="30px" /></i>
          <i><img src="./image/facebook.png" alt="Facebook" width="30px" /></i>
          <i><img src="./image/google-plus.png" alt="Google+" width="30px" /></i>
          </div>
        </div>
        
      </div>
    </footer>
    </div>
  )
}
