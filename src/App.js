import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Accueil from './accueil/Accueil';
import ProCat from './accueil/ProCat';
import { useEffect, useState } from 'react';
import { CartProvider } from 'react-use-cart';
import Cart from './accueil/Cart';
import Msg from './accueil/Msg';

function App() {
  const [product, setProduct] = useState([])
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
    <Route path='/procat' element={<ProCat product={product}/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>

   </Routes>
   </BrowserRouter>
   </CartProvider>
   {/* <Accueil /> */}
   </>
  );
}

export default App;
