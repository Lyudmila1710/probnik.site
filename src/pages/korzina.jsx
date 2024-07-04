import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Corzina from "../components/corzina";

const Korzina =() => {

return (
    <div>
<Header/>
<main style={{ minHeight: "70vh" }}>
  <h2 className="text-center text-white bg-primary m-2">Корзина</h2>
 <Corzina/>
</main>
<Footer/>
    </div>

);
};
export default Korzina;