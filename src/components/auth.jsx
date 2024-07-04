import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [user,setUser] = useState(''); 
    const navigate = useNavigate(); 
  let message=useRef()
  let message1=useRef()
  const load=(e)=>{
    e.preventDefault()
    const forms = document.getElementById('form')

        if (!forms.checkValidity()) {
       
          e.stopPropagation()
          forms.classList.add('was-validated')
return
        } 


        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify(user);
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        fetch("https://exam.xn--80ahdri7a.site/login", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          if ("data" in result) {
            message.current.classList.remove('d-none');
            localStorage.token = result?.data?.user_token;
             message1.current.classList.add('d-none')
             setTimeout(() => {
                navigate('/'); 
              }, 2000);
          }
          else
          if (result.error.code==403) {message1.current.classList.remove('d-none')
          message.current.classList.add('d-none')}
        
        }
      )
        .catch(error => console.log('error', error));
    
    };

 
    return(
<div>
<form className="w-50 m-auto border p-3 need-validation" onSubmit={load} style={{ minWidth: 300 }} id="form" noValidate >
        <div className="mb-3 input-field ">
          <label htmlFor="email" className="form-label">
            Введите адрес электронной почты
          </label>
          <input type="email" required className="form-control" id="email" onChange={(e)=>setUser({...user, email:e.target.value})}/>
          <div className="invalid-feedback">
        Пожалуйста, введите адрес электронной почты корректно
      </div>
         
          <div className="form-text">
            Мы никогда не делимся Вашими e-mail ни с кем. Обязательное поле
          </div>
        </div>
        <div className="mb-3 input-field ">
          <label htmlFor="password" className="form-label">
            Введите пароль:
          </label>
          <input type="password" className="form-control" id="password" required onChange={(e)=>setUser({...user, password:e.target.value})} />
          <div className="invalid-feedback">
        Пожалуйста, введите пароль. Это обязательное поле
      </div>
          <div className="form-text">Обязательное поле</div>
        </div>
        <input type="submit" className="btn btn-primary" defaultValue="Войти" />
      </form>
      <div className="alert alert-dark d-none" role="alert" ref={message}>
 Вы успешно вошли!
</div>
<div className="alert alert-dark d-none" role="alert" ref={message1}>
Неправильный E-mail или пароль
</div>
</div>
    );
};

export default Auth;