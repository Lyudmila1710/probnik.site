import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Cart from "../components/cart";
import  { useState, useEffect } from 'react';
const Catalog =() => {
     
  let [cart, setCart] = useState([]);
  useEffect(() => req_cart(cart, setCart), []);
  function req_cart(cart, setCart) {

  fetch("https://exam.xn--80ahdri7a.site/products")
  .then(response => response.json())
  .then(result => {
      console.log(result)
      setCart(result)
  })
  
  .catch(error => console.log('error', error));

}

let carts = cart.map((order, index) => {
return <Cart data={order} />;
})

return (
  <div>
      <Header />
      <main style={{ minHeight: "70vh", minWidth: 320 }} className="w-75 m-auto">
      <h2 className="text-center text-white bg-primary m-2">Каталог товаров</h2>
      
      <div className="d-flex flex-row flex-wrap justify-content-around">
          {carts}
      </div>
      </main>
      <Footer />
  </div>
);
}
export default Catalog;