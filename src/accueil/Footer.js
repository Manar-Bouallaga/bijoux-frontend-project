import React from 'react';
import './accueil.css';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      
      {/* Head Office Section */}
      <div className="footer-section">
        <h3>Head Office</h3>
        <ul>
          <li>
            <span className="icon"><img src='./image/gps_15949802.png' width={'20px'} alt='Location Icon'/></span> Jl. Compokla Wonga No.22, Jakarta
          </li>
          <li>
            <span className="icon"><img src='./image/email_4546924.png' width={'20px'} alt='Email Icon'/></span> Support@yourdomain.tld
          </li>
          <li>
            <span className="icon"><img src='./image/telephone_16617661.png' width={'20px'} alt='Phone Icon'/></span> +62 21 2002 2012
          </li>
        </ul>
      </div>
  
      {/* Support Section */}
      <div className="footer-section">
        <h3>Support</h3>
        <ul>
          <li>Help Center</li>
          <li>Submit a Ticket</li>
          <li>Support Center</li>
          <li>FAQ</li>
        </ul>
      </div>
  
      {/* Newsletter Section */}
      <div className="footer-section newsletter">
        <h3>Stay Updated</h3>
        <p>Subscribe to our newsletter for the latest updates and offers.</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button className="jewelry-add-to-cart-btn">Sign Up</button>
        </form>
        <br></br>
        <div className='social-links'>
          <i><img src="./image/twitter.png" alt="Twitter" width="30px" /></i>
          <i><img src="./image/facebook.png" alt="Facebook" width="30px" /></i>
          <i><img src="./image/google-plus.png" alt="Google+" width="30px" /></i>
        </div>
      </div>
      
    </div>
  </footer>
  
  );
};

export default Footer;
