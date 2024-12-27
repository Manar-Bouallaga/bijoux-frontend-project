import React, { useEffect, useState } from 'react';
import {useCart } from "react-use-cart";
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';


const ProductDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const { addItem } = useCart();

    const [countPanier ,setCountPanier] = useState(0)
             // recuperer le nomber de items dans cart 
             const {
                totalItems
             } = useCart();
            
        
             useEffect(() => {
                console.log("Total Items: ", totalItems);
                setCountPanier(totalItems || 0);
            }, [totalItems]);
    // Find the current product based on the ID from URL params
    const currentProduct = product.find(p => p.id === parseInt(id));

    if (!currentProduct) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {
        const itemToAdd = {
            ...currentProduct,
            id: currentProduct.id.toString(), // Ensure id is a string
            quantity: quantity
        };
        addItem(itemToAdd);
    };

    return (
        <div>
            {/* Navigation */}
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
                                     <i><img src="/image/shopping-cart.png" alt="Cart" width="25px" /></i>
                
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

            {/* Product Detail Content */}
            <div className="product-detail-container">
                <div className="product-detail-content">
                    <div className="product-images">
                        <div className="main-image">
                            <img src={`/image/${currentProduct.img}`} alt={currentProduct.name} />
                        </div>
                        <div className="thumbnail-images">
                            <div className="thumbnail active">
                                <img src={`/image/${currentProduct.img}`} alt={currentProduct.name} />
                            </div>
                        </div>
                    </div>

                    <div className="product-info">
                        <h1>{currentProduct.name}</h1>
                        <div className="rating">
                            {[...Array(5)].map((_, index) => (
                                <span key={index} className="star">★</span>
                            ))}
                            <span className="review-count">(5 Customer reviews)</span>
                        </div>
                        <div className="price">
                            <span className="current-price">${currentProduct.price.toFixed(2)}</span>
                        </div>
                        <p className="description">
                            {currentProduct.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec massa tellus sollicitudin feugiat nec vitae ipsum..."}
                        </p>
                        <div className="add-to-cart">
                            <div className="quantity">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                                <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} />
                                <button onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to cart</button>
                        </div>
                        <div className="product-meta">
                            <p><span>SKU:</span> {currentProduct.id}</p>
                            <p><span>Category:</span> {currentProduct.categorie_id}</p>
                        </div>
                        <div className="social-share">
                            <button className="facebook">Facebook</button>
                            <button className="twitter">Twitter</button>
                            <button className="linkedin">LinkedIn</button>
                            <button className="email">Email</button>
                        </div>
                    </div>
                </div>

                <div className="product-tabs">
                    <div className="tab-headers">
                        <button className="active">Description</button>
                    </div>
                    <div className="tab-content">
                        <div className="description-content">
                            <p>{currentProduct.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus..."}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="related-products">
                <h2>Related Products</h2>
                <div className="related-products-grid">
                    {product
                        .filter(p => p.categorie_id === currentProduct.categorie_id && p.id !== currentProduct.id)
                        .slice(0, 4)
                        .map((relatedProduct) => (
                            <div key={relatedProduct.id} className="jewelry-card">
                                <Link to={`/product/${relatedProduct.id}`}>
                                    <div className="related-product-image">
                                        <img src={`/image/${relatedProduct.img}`} alt={relatedProduct.name} />
                                    </div>
                                    <h3 className="jewelry-product-name">{relatedProduct.name}</h3>
                                    <div className="jewelry-price-section">
                                        <span className="jewelry-current-price">${relatedProduct.price.toFixed(2)}</span>
                                    </div>
                                 <Link to={`/product/${relatedProduct.id}`} style={{color: 'white', textDecoration: 'none'}} className="jewelry-add-to-cart-btn">See more ...</Link>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
            <footer className="footer">
      <div className="footer-container">
        {/* Head Office Section */}
        <div className="footer-section">
          <h3>Head Office</h3>
          <ul>
            <li>
              <span className="icon"><img src='/image/gps_15949802.png' width={'20px'} alt=''/></span> Jl. Compokla Wonga No.22, Jakarta
            </li>
            <li>
              <span className="icon"><img src='/image/email_4546924.png' width={'20px'} alt=''/></span> Support@yourdomain.tld
            </li>
            <li>
              <span className="icon"><img src='/image/telephone_16617661.png' width={'20px'} alt=''/></span> +62 21 2002 2012
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
          <i><img src="/image/twitter.png" alt="Twitter" width="30px" /></i>
          <i><img src="/image/facebook.png" alt="Facebook" width="30px" /></i>
          <i><img src="/image/google-plus.png" alt="Google+" width="30px" /></i>
          </div>
        </div>
        
      </div>
    </footer>
        </div>
    );
};

export default ProductDetail;