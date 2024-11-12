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

                    <div class="pt-5">
                      <h6 class="mb-0"><a href="#!" class="text-body"><i
                            class="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 bg-grey">
                  <div class="p-5">
                    <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                    <hr class="my-4"/>

                    <div class="d-flex justify-content-between mb-4">
                      <h5 class="text-uppercase">{totalUniqueItems} items</h5>
                      
                    </div>

                    {/* <h5 class="text-uppercase mb-3">Shipping</h5> */}

                    {/* <div class="mb-4 pb-2">
                      <select class="select">
                        <option value="1">Standard-Delivery- €5.00</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                      </select>
                    </div> */}

                    {/* <h5 class="text-uppercase mb-3">Give code</h5> */}

                    {/* <div class="mb-5">
                      <div class="form-outline">
                        <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Examplea2">Enter your code</label>
                      </div>
                    </div> */}

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
  )
}
