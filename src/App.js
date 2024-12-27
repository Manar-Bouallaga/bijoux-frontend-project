import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Accueil from './accueil/Accueil';
import ProCat from './accueil/ProCat';
import { useEffect, useState } from 'react';
import { CartProvider } from 'react-use-cart';
import Cart from './accueil/Cart';
import Msg from './accueil/Msg';
import Shop from './shop/shop';
import Contact from './contact/contact';
import ProductDetail from './ProductDt/ProductDetail';

function App() {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  
  // l'api pour les categories
useEffect(() => {
  fetch("http://127.0.0.1:8000/api/categories")
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error("Error: ", error));
}, []);
   // l'api pour les produits
   useEffect(
    function(){
        fetch("http://127.0.0.1:8000/api/produits")
        .then(Response =>Response.json())
        .then(data=>
            setProduct(data)
            
            )
        .catch(error=>console.error("erreur : ",error))
    },[]



)
  return (

   <>
   <CartProvider>
   <BrowserRouter>
   <Routes>
    <Route path='/msg' element={<Msg/>}></Route>
    <Route path='/' element={<Accueil product={product}/>}></Route>
    <Route path='/procat' element={<ProCat product={product} categories={categories} />} />
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/shop' element={<Shop product={product}/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path="/product/:id" element={<ProductDetail product={product} />}></Route>
   </Routes>
   </BrowserRouter>
   </CartProvider>
   {/* <Accueil /> */}
   </>
  );
}

export default App;
