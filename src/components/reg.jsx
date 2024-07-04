import React from "react";
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from "react";
const Reg = () => {
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
        
        fetch("https://exam.xn--80ahdri7a.site/signup", requestOptions)
          .then((response) => response.status)
          .then( result => {
            console.log(result);
            if (result==201){ message.current.classList.remove('d-none')
            message1.current.classList.add('d-none')
        setTimeout(() => {
                navigate('/login'); 
              }, 2000);
          }
          else
          if (result==422) {message1.current.classList.remove('d-none')
          message.current.classList.add('d-none')}
          
          })
          .catch(error => console.log('error', error));

    }
    return(
<div>
<form className="w-50 m-auto border p-3 needs-validation" onSubmit={load} style={{ minWidth: 300 }} noValidate id="form">
  <div className="mb-3 input-field">
    <label htmlFor="name" className="form-label" >
      Введите фамилию, имя, отчество:
    </label>
    <input type="text" required className="form-control" id="name"  pattern="^[а-яА-ЯЁё]+\s[а-яА-ЯЁё]+\s[а-яА-ЯЁё]+$" onChange={(e)=>setUser({...user,full_name:e.target.value})}  />
    <div className="invalid-feedback minWidth">
    Пожалуйста, введите имя, фамилию и отчество. Оно может содержать только кириллицу и пробелы 
      </div>
   
    <div id="emailHelp1" className="form-text">
      Обязательное поле
    </div>
  </div>
  <div className="mb-3 input-field">
    <label htmlFor="email" className="form-label">
      Введите адрес электронной почты
    </label>
    <input type="email" className="form-control" required id="email" onChange={(e)=>setUser({...user,email:e.target.value})}/>
    <div className="invalid-feedback minWidth">
        Пожалуйста, введите адрес электронной почты
      </div>
    <div className="form-text">
      Мы никогда не делимся Вашими e-mail ни с кем. Обязательное поле
    </div>
  </div>
  <div className="mb-3 input-field">
    <label htmlFor="password" className="form-label">
      Введите пароль:
    </label>
    <input type="password" className="form-control" id="password" required pattern="(?=.*\d)(?=.*[a-z])[A-Za-z\d]{7,}" onChange={(e)=>setUser({...user,password:e.target.value})}  />
    <div className="invalid-feedback minWidth">
        Пожалуйста, введите пароль.Пароль должен содержать минимум 7 символов, включая по крайней мере одну цифру, одну строчную и одну заглавную латинскую букву
      </div>
    <div className="form-text">Обязательное поле</div>
  </div>
  <div className="mb-3 input-field">
    <label htmlFor="confirm_password" className="form-label">
      Повторите пароль:
    </label>
    <input type="password" pattern={user.password} className="form-control" id="confirm_password" required />
    <div className="invalid-feedback minWidth">
       Пароли не совпадают
      </div>
    <div className="form-text" />
  </div>
  <input
    type="submit"
    className="btn btn-primary"
    defaultValue="Зарегистрироваться"
  />
</form>
<div className="alert alert-dark d-none" role="alert" ref={message}>
 Вы успешно зарегистрировались!
</div>
<div className="alert alert-dark d-none" role="alert" ref={message1}>
Попробуйте зарегистрироваться позже
    </div>
</div>
    );
};

export default Reg;