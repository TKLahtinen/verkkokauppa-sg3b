import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useLocation } from 'react-router'



export default function Account() {
    const [orders, setOrders] = useState([])
    const location = useLocation()

    const ordersById = orders.reduce((acc, order) => {
        if (!acc[order.id]) {
          acc[order.id] = [order];
        } else {
          acc[order.id].push(order);
        }
        return acc;
      }, {});

    useEffect(() => {
        if (location.pathname === '/kayttaja') {
        const userData = JSON.parse(sessionStorage.getItem('userData'))
        const userId = userData[0].id

        axios.get('http://localhost:3001/phpbackend/getOrders.php?userid='+userId)
        .then(res => {
            setOrders(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        }
      }, [location.pathname]);

      return (
        <div className='container'>
        {Object.keys(ordersById).map((orderId) => (
            <div key={orderId}>
            <h2>Tilausnumero: {orderId}</h2>
            <hr/>
            <ul>
                {ordersById[orderId].map((order) => (
                <li key={order.id}>
                    <img src={order.img} alt={order.nimi} className='w-25'/>
                    <h3>{order.nimi}</h3>
                    <h4>{order.kpl} kpl</h4>
                </li>
                ))}
            </ul>
            </div>
        ))}
        </div>
      );
}
