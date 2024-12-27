import React, { useState } from 'react'
import { useCart } from "react-use-cart";
import './cart.css';
import FormClient from './FormClient';
import EmptyMsg from './EmptyMsg';

export default function Cart() {
  const [showClientForm, setShowClientForm] = useState(false);
  const handlerRegister = ()=>{
    setShowClientForm(true)
  }
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        
      } = useCart();
      localStorage.setItem("cartItems", JSON.stringify(items));
      if (isEmpty) return <EmptyMsg/>
  return (
    <>
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
                    <div className="cart-banner">
        <div className="banner-cart">
          <h1>My Cart</h1>
        </div>
      </div>         
                            
    <div>
        {
          showClientForm===false ? 
          <section className="h-100 h-custom" style={{"backgroundColor": "#d2c9ff;"}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12">
          <div className="card card-registration card-registration-2" style={{"border-radius": "15px;"}}>
            <div className="card-body p-0">
              <div className="row g-0">
                <div className="col-lg-8">
                  <div className="p-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                      <h6 className="mb-0 text-muted">{totalUniqueItems} items</h6>
                    </div>
                    <hr className="my-4"/>
                    {/* start item */}
                    {items.map((item) => (
                    <div className="row mb-4 d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <img src={`image/${item.img}`} alt="fdf" style={{"width":"76px"}}/>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <h6 className="text-muted">{item.name}</h6>
                        <h6 className="text-black mb-0">{item.price} </h6>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        {/* <button className="btn btn-link px-2"> -
                          <i className="fas fa-minus"></i>
                        </button> */}
                        <button className="btn  px-2" onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}>-</button>

                        <input id="form1" min="0" name="quantity" style={{"width":"40px"}} value={`${item.quantity}`} type="number" class="form-control form-control-sm" />

                        {/* <button class="btn btn-link px-2">+
                          <i class="fas fa-plus"></i>
                        </button> */}
                        <button className="btn  px-2" onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}>
              +
            </button>
                      </div>

                      <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h6 class="mb-0">{item.itemTotal}</h6>
                      </div>
                      <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                        <img  onClick={() => removeItem(item.id)} src='image/sup.png' alt='supprimer'/>
                        
                      </div>
                    </div>
                     ))}

                    {/* end item */}

                    <hr class="my-4"/>

                  </div>
                </div>
                <div class="col-lg-4 bg-grey">
                  <div class="p-5">
                    <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                    <hr class="my-4"/>

                    <div class="d-flex justify-content-between mb-4">
                      <h5 class="text-uppercase">{totalUniqueItems} items</h5>
                      
                    </div>

      

                    <hr class="my-4"/>

                    <div class="d-flex justify-content-between mb-5">
                      <h5 class="text-uppercase">Total price</h5>
                      <h5>{cartTotal}</h5>
                    </div>

                    <button onClick={handlerRegister} type="button" class="btn btn-dark btn-block btn-lg"
                      data-mdb-ripple-color="dark">Register</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
          :
          <FormClient items={items}/>
        }
    </div>
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
    </>
  )
}
