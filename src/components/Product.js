import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Product() {

  const params = useParams()
  const URL = 'http://localhost:3001/phpbackend/getProduct.php?tuoteid=';
  const [item, setItem] = useState([])

  console.log(URL + params.tuoteid)

  useEffect(() => {
    axios.get(URL + params.tuoteid)
    .then((response) => {
      const json = response.data;
      console.log(json)
      setItem(json[0])
    })
    .catch(error => {
      alert(error.response === undefined ? error : error.response.data.error)
    })
  }, [])
 
  return (
    <div className='container'>
      <img src={item.img} alt="" />
      <h3>{item.nimi}</h3>
      <p>{item.kuvaus}</p>
      <h3>{item.hinta}€</h3>
      
    </div>
  )
}
