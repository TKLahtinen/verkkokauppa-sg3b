import React from 'react'
import { useRef,useState } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {

  const searchInput = useRef()

  function handleSearch(e) {
    e.preventDefault()
    const searchQuery = searchInput.current.value
    console.log(searchQuery)
    window.location.href = '/haku/' + searchQuery
    
  }

  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" id="logo">
          <span id="span1">3</span>boot<span>leg</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" 
              role="button" data-bs-toggle="dropdown" aria-expanded="false">Kategoriat</Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: 'rgb(193, 211, 254)' }}>
                <li><Link className="dropdown-item" to="/tuotteet/sneakerit">Sneakerit</Link></li>
                <li><Link className="dropdown-item" to="/tuotteet/crocsit">Crocsit</Link></li>
                <li><Link className="dropdown-item" to="/tuotteet/saappaat-ja-talvikengat">Saappaat ja talvikengat</Link></li>
                <li><Link className="dropdown-item" to="/tuotteet/juoksukengat">Juoksukengat</Link></li>
                <li><Link className="dropdown-item" to="/tuotteet/puvunkengat">Puvunkengat</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Yhteystiedot</Link>
            </li>
          </ul>
          <form className="d-flex" id="search">
            <input className="form-control me-2" type="text" placeholder="Haku" ref={searchInput} />
            <button className="btn btn-outline-success"  onClick={handleSearch}>Hae</button>
          </form>
        </div>
      </div>
    </nav>
  )
}


      {/* <Link className='mx-3 navlink' to="/tuotteet/sneakerit">Sneakerit</Link>
      <Link className='mx-3 navlink' to="/tuotteet/crocsit">Crocsit</Link>
      <Link className='mx-3 navlink' to="/tuotteet/saappaat-ja-talvikengat">Saappaat ja talvikengat</Link>
      <Link className='mx-3 navlink' to="/tuotteet/juoksukengat">Juoksukengat</Link>
      <Link className='mx-3 navlink' to="/tuotteet/puvunkengat">Puvunkengat</Link> */}