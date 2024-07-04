import React, { useState, useEffect } from "react";

const Corzina = () => {
    const [cards, setCards] = useState([]);
    const [hasPosts, setHasPosts] = useState(false);

    const loadCards = () => {
        var myHeaders = new Headers();
        const token = localStorage.getItem('token');
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("https://exam.xn--80ahdri7a.site/cart", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (result.length > 0) {
                    // Группировка товаров по product_id и подсчет количества
                    const groupedCards = result.reduce((acc, card) => {
                        if (acc[card.product_id]) {
                            acc[card.product_id].quantity += 1;
                        } else {
                            acc[card.product_id] = { ...card, quantity: 1 };
                        }
                        return acc;
                    }, {});

                    setCards(Object.values(groupedCards));
                    setHasPosts(true);
                }
            })
            .catch(error => console.log('error', error));
    };
    const Plus = (index) => {
        const updatedCards = [...cards];
        updatedCards[index].quantity += 1;
        setCards(updatedCards);
    };

    const Minus = (index) => {
        const updatedCards = [...cards];
        if (updatedCards[index].quantity > 1) {
            updatedCards[index].quantity -= 1;
            setCards(updatedCards);
        }
    };

    useEffect(() => {
        loadCards();
    }, []);
    const getTotalPrice = () => {
        let total = 0;
        cards.forEach(card => {
            total += card.quantity * card.price;
        });
        return total;
    };
    return (
        <div>
            {hasPosts && (
               <div>  <table className="table my-3 mx-auto w-75 table-hover table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">№ п/п</th>
                            <th scope="col">Наименование</th>
                            <th scope="col">Описание</th>
                            <th scope="col">Количество</th>
                            <th scope="col">Стоимость</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.map((card, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{card["name"]}</td>
                                <td>{card.description}</td>
                                <td>{card.quantity}</td>
                                <td>{card.price}</td>
                              <td>  <button type="button" className="btn btn-primary" onClick={() => Plus(index)}>+</button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-primary" onClick={() => Minus(index)}>-</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>  
                </table>
               <p className="fw-bold text-end w-75 m-auto">Итого: {getTotalPrice()} руб</p>
                <button type="button" className="btn btn-primary mx-5">
                    Оформить заказ
                </button></div>
              
            )}
            {!hasPosts && (
                <div className="clear text-center bg-grey">
                    <h2>Корзина пуста</h2>
                </div>
            )}
        </div>
    );
};

export default Corzina;