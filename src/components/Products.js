import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { Link,useParams } from 'react-router-dom';




export default function Products({url}) {

    const { tr } = useParams()
    const URL = url + 'getProducts.php?tr=';
  
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get(URL + tr)
      .then((response) => {
        const json = response.data;
        setItems(json)
        
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [tr])

  return (
  <div className='container d-flex'>
    <div className="row">
      {items.map(item => (
      <Link to={'/tuote/' + item.tuoteid} className="card p-4 my-3 productlink col-md-6 col-lg-4 col-xl-3" key={item.id}>
          <img src={item.img} class="card-img-top w-100 " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.nimi} {item.hinta}€</h5>
        </div>
      </Link>
      ))}
    </div>
  </div>
  )
}