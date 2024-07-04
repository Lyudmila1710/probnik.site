import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Auth from "../components/auth";
const Login = () => {
    return(
<div>
<Header/>
<main style={{'minHeight':'70vh'}}>
<h2 className="text-center text-white bg-primary m-2">Аутентификация</h2>
  <div className="p-3">
    <Auth/>
  </div>
</main>
<Footer/>
</div>
    );
};

export default Login;