import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Reg from "../components/reg";
const Registration = () => {
    return(
<div>
<Header/>
<main style={{'minHeight':'70vh'}}>
<h2 className="text-center text-white bg-primary m-2">Регистрация</h2>
  <div className="p-3">
   <Reg/>
  </div>
</main>
<Footer/>
</div>
    );
};

export default Registration;