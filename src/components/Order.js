import React, { useEffect, useState } from 'react'
import { createRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';




export default function Order({updateAmount, removeFromCart, cart, url}) {

    const [inputs,_] = useState([])
    const [inputIndex, setInputIndex] = useState(-1)

    useEffect(() => {
        for(let i = 0; i < cart.length; i++){
            inputs[i]=React.createRef()       
        }
    }, [cart.length])

    useEffect(() => {
        if(inputs.lenght > 0 && inputIndex > -1 && inputs[inputIndex].current !== null){
            inputs[inputIndex].current.focus()
        }
    },[cart])

    function changeAmount(e, product, index){
        updateAmount(e.target.value, product)
        setInputIndex(index)

    }

    function handleOrder(){
      const userData = JSON.parse(sessionStorage.getItem('userData'));
      const cart = JSON.parse(localStorage.getItem('cart'));
      const data = {
        userData: userData[0],
        cart: cart
      }

      axios.post(url + 'order.php', data)
      .then(response => {
        console.log("tilaus onnistui")
        localStorage.removeItem('cart');
    })
    .catch(error => {
        console.log(error)
    })
    }

    let sum = 0;
  return (
    <div className='container'>
      <h3 className="header">Ostoskorin sisältö</h3>
      <hr />
      <table className="table">
        <tbody>
          {cart.map((product,index) => {
            sum+=parseFloat(product.hinta);
            return (
              <tr key={uuidv4()}>
                <td ><img src={product.img} className='w-25' /></td>
                <td>{product.nimi}</td>
                <td>{product.hinta} €</td>
                <td>
                  <input ref={inputs[index]} style={{width: '60px'}} value={product.amount} onChange={e => changeAmount(e,product,index)} />
                </td>
                <td><a href="#" className="bi bi-x" onClick={() => removeFromCart(product)}></a></td>
              </tr>
            )
            })}
          <tr key={uuidv4()}>
            <td></td>
            <td></td>
            <td>{sum.toFixed(2)} €</td>
            <td><button className="btn btn-primary" onClick={handleOrder}>Tilaa</button></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
