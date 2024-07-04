import React from 'react';

const Cart =(props) => {
    const handleBuyClick = () => {
        const token = localStorage.getItem('token'); // Получаем токен из локального хранилища
    
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
    
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          redirect: "follow"
        };
    
        fetch("https://exam.xn--80ahdri7a.site/cart/"+props.data.id, requestOptions)
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));
      };
return (
<div
  className="d-flex flex-row flex-wrap border m-3 p-3" style={{ minWidth: 300, width: "45%" }}
>
  <p className=" text-primary" style={{ minWidth: 250, width: "45%" }}>id:</p>
  <p className="" style={{ minWidth: 250, width: "45%" }}>{props.data.id}</p>
  <p className=" text-primary" style={{ minWidth: 250, width: "45%" }}>Название товара:  </p>
  <p className="" style={{ minWidth: 250, width: "45%" }}>{props.data.name}</p>
  <p className=" text-primary" style={{ minWidth: 250, width: "45%" }}>Описание:</p>
  <p className="" style={{ minWidth: 250, width: "45%" }}>{props.data.description}</p>
  <p className=" text-primary" style={{ minWidth: 250, width: "45%" }}>Цена:</p>
  <p className="" style={{ minWidth: 250, width: "45%" }}>{props.data.price}</p>
  <button type="button" onClick={handleBuyClick} className="btn btn-primary w-50" >Купить</button>
</div>
);
};

export default Cart;