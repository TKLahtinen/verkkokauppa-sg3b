import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useLocation } from 'react-router'



export default function Account({url}) {
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

        axios.get(url +'getOrders.php?userid='+userId)
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
<div id="account-container">
  {Object.keys(ordersById).map((orderId) => (
    <div key={orderId} id={`order-${orderId}`} class="order-box">
      <h2 class="order-number">Tilausnumero: {orderId}</h2>
      <hr class="divider"/>
      <ul class="product-list">
        {ordersById[orderId].map((order) => (
          <li key={order.id} class="product-item">
            <img src={order.img} alt={order.nimi} class='product-img'/>
            <div class="product-details">
              <h3 class="product-name">{order.nimi}</h3>
              <h4 class="product-quantity">{order.kpl} kpl</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
      );
}
