import React, { useEffect, useState } from 'react';
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

export default function ProCat({ product, categories }) {
    const [catId, setCatId] = useState([]);
    const [categoryTitle, setCategoryTitle] = useState("");

    // Retrieve category ID from localStorage
    useEffect(() => {
        const idCat = localStorage.getItem("catId");
        if (idCat) {
            setCatId(JSON.parse(idCat));
        }
    }, []);

    // Find the category title
    useEffect(() => {
        if (categories && catId) {
            const category = categories.find(cat => cat.id === catId);
            if (category) {
                setCategoryTitle(category.title);
            }
        }
    }, [categories, catId]);

    const [countPanier, setCountPanier] = useState(0);

    // Retrieve the number of items in the cart
    const { totalItems } = useCart();

    useEffect(() => {
        setCountPanier(totalItems || 0);
    }, [totalItems]);

    return (
        <>
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

            <div className="new-arrival-container" style={{ "margin": "0px" }}>
                <h2 className="title" style={{fontFamily:"cursive",fontWeight:'bold',fontSize:'3rem',color:'#324b50'}}> {categoryTitle}</h2>
                <div className="jewelry-grid-container">
                    {product.map((produc) => (
                        catId === produc.categorie_id ? (
                            <div key={produc.id} className="jewelry-card">
                                <img src={`image/${produc.img}`} alt={produc.name} className="jewelry-product-image" />
                                <h3 className="jewelry-product-name">{produc.name}</h3>
                                <div className="jewelry-price-section">
                                    <span className="jewelry-current-price">${produc.price.toFixed(2)}</span>
                                </div>
                                <Link to={`/product/${produc.id}`} style={{ color: 'white', textDecoration: 'none' }} className="jewelry-add-to-cart-btn">See more ...</Link>
                            </div>
                        ) : null
                    ))}
                </div>
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
        </>
    );
}
