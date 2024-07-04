import React from "react";
import logo from '../img/logo.jpg'
import {Link,useNavigate} from "react-router-dom";
const Header = () => {
  let history=useNavigate()

  const handleLogout= ()=>{
    localStorage.clear();
    history('/login') 
    
  }
  const token = localStorage.getItem('token');

  if (!token || token === 'undefined') { 
      return (
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-">
      <div className="container-fluid">
        
         <Link to={'/'}><img src={logo} className="w-25 rounded-3" alt="logo" /></Link> 
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           
            <li className="nav-item">
            <Link to={'/register'} className="nav-link " aria-current="page" >Регистрация</Link>
            </li>
            <li className="nav-item">
            <Link to={'/login'} className="nav-link " aria-current="page" >Вход в систему</Link>
            </li>
            <li className="nav-item">
            <Link to={'/'} className="nav-link " aria-current="page" >Каталог</Link>
            </li>
            <li className="nav-item">
            <Link to={'/korzin'} className="nav-link " aria-current="page" >Корзина</Link>
            </li>
            <li className="nav-item">
            <Link to={'/oform'} className="nav-link " aria-current="page" >Оформленные заказы</Link>
            </li>
            </ul>
        </div>
      </div>
    </nav>
    </div>
   ); }
    else{return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-">
            <div className="container-fluid">
              
               <Link to={'/'}><img src={logo} className="w-25 rounded-3" alt="logo" /></Link> 
              
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 
                
                  <li className="nav-item">
                  <Link to={'/'} className="nav-link " aria-current="page" >Каталог</Link>
                  </li>
                  <li className="nav-item">
                  <Link to={'/korzin'} className="nav-link " aria-current="page" >Корзина</Link>
                  </li>
                  <li className="nav-item">
                  <Link to={'/oform'} className="nav-link " aria-current="page" >Оформленные заказы</Link>
                  </li>
       <button type="button" onClick={handleLogout} className="btn btn-primary w-10 ">Выход</button>
            
       </ul>
     </div>
   </div>
 </nav>
</div>
        
    );
};}

export default Header;