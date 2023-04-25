import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'><span className='navbar-toggler-icon'></span></button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link navlink' to="/tuotteet/sneakerit">Sneakerit</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link navlink' to="/tuotteet/crocsit">Crocsit</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link navlink' to="/tuotteet/saappaat-ja-talvikengat">Saappaat ja talvikengat</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link navlink' to="/tuotteet/juoksukengat">Juoksukengat</Link>
              </li>
            <li className='nav-item'>
              <Link className='nav-link navlink' to="/tuotteet/puvunkengat">Puvunkengat</Link>
            </li>
          </ul>
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