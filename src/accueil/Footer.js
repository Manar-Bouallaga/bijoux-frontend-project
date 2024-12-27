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
  );
};

export default Footer;
