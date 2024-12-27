import React, { useEffect, useState } from 'react';
import {useCart } from "react-use-cart";
import './shop.css';
import { Link } from "react-router-dom";
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

    <section className="MoreHelp">
      <h3>Need more help?</h3>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className="features">
        <div className="feature">
          <div className="icon">
            <img src="./image/customer-service_12558537.png" alt="Good Material Icon" />
          </div>
          <h4>Customer Service</h4>
          <p>
            Bibendum dictumst morbi risus in augue himenaeos nunc nisi faucibus.
          </p>
          <button className="add-to-cart-btn">Shot Now</button>
        </div>
        <div className="feature">
          <div className="icon">
            <img src="./image/right_9739898.png" alt="Professional Expert Icon" />
          </div>
          <h4>Send Ticket</h4>
          <p>
            Bibendum dictumst morbi risus in augue himenaeos nunc nisi faucibus.
          </p>
          <button className="add-to-cart-btn">Contact Us</button>
        </div>
        <div className="feature">
          <div className="icon">
            <img src="./image/book_5236623.png" alt="24/7 Premium Support Icon" />
          </div>
          <h4>News & Article</h4>
          <p>
            Bibendum dictumst morbi risus in augue himenaeos nunc nisi faucibus.
          </p>
          <button className="add-to-cart-btn">Read Now</button>
        </div>
      </div>
    </section>

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
    </div></div>
  );
};

export default Shop;
