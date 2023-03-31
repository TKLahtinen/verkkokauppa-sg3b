import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { json } from 'react-router-dom';

const URL = 'http://localhost:3001/phpbackend/getProducts.php?tr=1';


export default function Tennarit() {
  
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        const json = response.data;
        console.log(json)
        setItems(json)
        console.log(items)
        
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])

  return (
  <div className='container d-flex'> 
    {items.map(item => (
    <div class="card m-3" key={item.id}>
        <img src={item.img} class="card-img-top w-100" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{item.nimi} {item.hinta}€</h5>
        <p class="card-text">{item.kuvaus}</p>
      </div>
    </div>
    ))}  
  </div>
  )
}
