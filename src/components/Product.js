import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Product({addToCart, url}) {

  const params = useParams()
  const URL = url + 'getProduct.php?tuoteid=';
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
      <div className="row row-md my-3">
        <div className="col-lg ratio ratio-16x9">
          <img src={item.img} className='w-100' alt="" />
        </div>
        <div className="col-lg">
          <h2>{item.nimi}</h2>
          <h3>{item.hinta}€</h3>
          <hr />
          <p>{item.kuvaus}</p>
            <div className="row">
              <div className="col d-grid">
                <button className='btn btn-primary' onClick={e => addToCart(item)}>Lisää ostoskoriin</button>
              </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}
