import React from 'react'
import carousel1 from '../images/3beluga_rdy.jpg'
import carousel2 from '../images/3leg_crocs_test_resized.png'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="carousel slide ratio ratio-21x9" data-bs-ride="carousel">
            <div className="carousel-inner">
              <Link className="carousel-item active" to="/tuote/6">
                <img src={carousel1} alt="..." className="d-block w-100" />
              </Link>
              <Link className="carousel-item" to="/tuote/13">
                <img src={carousel2} alt="..." className="d-block w-100" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          Jottai
        </div>
      </div>
    </>
  )
}
