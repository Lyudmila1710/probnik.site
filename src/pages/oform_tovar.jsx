import React, { useEffect, useState } from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import Oform from "../components/oform";

const Oform_tovar =() => {


  let [tovar, setTovar] = useState([]);
  useEffect(() => req_tovar(tovar, setTovar), []);
  function req_tovar(tovar, setTovar) {

  fetch("https://exam.xn--80ahdri7a.site/products")
  .then(response => response.json())
  .then(result => {
      console.log(result)

      const addQuantityToProducts = (products) => {
          const productCounts = products.reduce((acc, product) => {
            acc[product.product_id] = (acc[product.product_id] || 0) + 1;
            return acc;
          }, {});
        
          return products.map(product => ({
            ...product,
            quantity: productCounts[product.product_id]
          }));
        };
        
        const updatedProducts = addQuantityToProducts(result);
        console.log(updatedProducts);

      setTovar(updatedProducts)



      setTovar(updatedProducts)
  })
  
  .catch(error => console.log('error', error));

}

let tovars = tovar.map((order, index) => {
return <Oform data={order} />;
})

return (
<div>
  <Header />
  <main style={{ minHeight: "70vh" }}>
  <h2 class="text-center text-white bg-primary m-2">Оформленные заказы</h2>
      <table className="table my-3 mx-auto w-75 table-hover table-responsive">
  <thead>
    <tr>
      <th scope="col">№ п/п</th>
      <th scope="col">Наименование</th>
      <th scope="col">Описание</th>
      <th scope="col">Количество</th>
      <th scope="col">Стоимость</th>
    </tr>
  </thead>
  <tbody>
      {tovars}
  </tbody>
  </table>
  </main>
  <Footer />
</div>

);
}
export default Oform_tovar;