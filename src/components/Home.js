import React from 'react'
import carousel1 from '../images/3beluga_rdy.jpg'
import carousel2 from '../images/3leg_crocs_test_resized.png'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <>

<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="carousel-caption">
        <h1 className="display-2">Tarjous</h1>
        <button type="button" className="btn btn-outline-light btn-lg">Tilaa tästä!</button>
      </div>
      <img src={carousel1} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <div className="carousel-caption">
        <h1 className="display-2">Uutuus</h1>
        <button type="button" className="btn btn-outline-light btn-lg">Ennakkotilaa tästä!</button>
      </div>
      <img src={carousel2} class="d-block w-100" alt="..."/>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>



</>
  )
}
