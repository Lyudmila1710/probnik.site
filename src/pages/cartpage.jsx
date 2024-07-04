import React, { useEffect, useState } from 'react';
import Footer from "../components/footer";
import Header from "../components/header";
import Corzina from '../components/corzina';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const handleAdd = (itemId) => {
        // Обновляем количество товара в массиве `tovar`
        setTovar(prevTovar => prevTovar.map(item =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const handleRemove = (itemId) => {
        // Обновляем количество товара в массиве `tovar`
        setTovar(prevTovar => prevTovar.map(item =>
            item.id === itemId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
        ));
    };

    let [tovar, setTovar] = useState([]);
    let history = useNavigate();
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

            })

            .catch(error => console.log('error', error));

    }

    let tovars = tovar.map((order, index) => {
        return <Corzina key={index} data={order} onAdd={handleAdd} onRemove={handleRemove} /> 
    })

    return (



        <div>
            <Header />
            <h2 class="text-center text-white bg-primary m-2">Корзина</h2>
            <table className="table my-3 mx-auto w-75 table-hover table-responsive">
                <thead>
                    <tr>
                        <th scope="col">№ п/п</th>
                        <th scope="col">Наименование</th>
                        <th scope="col">Описание</th>
                        <th scope="col">Количество</th>
                        <th scope="col">Стоимость</th>
                        <th scope="col" />
                        <th scope="col" />
                    </tr>
                </thead>
                <tbody>
                    {tovars}
                </tbody>
            </table>

            <p class="fw-bold text-end w-75 m-auto">Итого: </p>
            <button type="button" class="btn btn-primary mx-5 m-3">Оформить заказ</button>

            <Footer />
        </div>
    );
}

export default Cart;