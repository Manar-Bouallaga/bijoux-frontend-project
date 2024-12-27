import React, { useEffect, useState } from 'react';
import {useCart } from "react-use-cart";
import './contact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
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
        <div className="contact-page">
            {/* Navbar */}
            <div className="navbar-top container">
                <div className="social-link">
                </div>
                <div className="logo">
                    <h3>Bijoux Shop</h3>
                </div>
                <div className="icons">
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
            </div>

            <div className="">
                <nav className="navbar navbar-expand-md" id="navbar-color">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span>
                                <i><img src="./image/menu.png" alt="Menu" width="30px" /></i>
                            </span>
                        </button>

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
                                <li className="nav-item">
                                    <a className="nav-link" href='/contact'>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Contact Header */}
            <div className="contact-header">
                <h1>Contact</h1>
                <p>We would love to hear from you.</p>
            </div>

            {/* Main Contact Content */}
            <div className="contact-content">
                <div className="contact-info">
                    <div className="map-container">
                        <iframe 
                            title="location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65638878365!2d106.68942955!3d-6.229728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                    
                    <div className="headquarters">
                        <h3>Headquarter</h3>
                        <p><i className="fas fa-map-marker-alt"></i> Jl. Compokla Wonga No.22, Jakarta</p>
                        <p><i className="fas fa-envelope"></i> Support@yourdomain.tld</p>
                        <p><i className="fas fa-phone"></i> +62 21 2002 2012</p>
                    </div>

                    <div className="social-media">
                        <h3>Social Media</h3>
                        <div className="social-links">
                            <a href="#twitter">Twitter</a>
                            <a href="#facebook">Facebook</a>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <h2>Send Us Message</h2>
                    <p>Talk with our customer service</p>
                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <input type="text" placeholder="First name" required />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Last name" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <input type="email" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <input type="tel" placeholder="Phone" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="send-button">Send</button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
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

                    <div className="footer-section">
                        <h3>Support</h3>
                        <ul>
                            <li>Help Center</li>
                            <li>Ticket</li>
                            <li>Support Center</li>
                            <li>Faq</li>
                        </ul>
                    </div>

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
    );
};

export default Contact;
