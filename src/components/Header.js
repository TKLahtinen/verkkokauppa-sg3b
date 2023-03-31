import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Logo.png'


export default function Header() {
  return (
    <header className='d-flex justify-content-between align-items-center'>
      <Link className="headerLeft ms-3" to="*">
        <img src={logo} alt="logo" className="w-100" />
      </Link>
      <div className="headerCenter d-flex">
        <input type="text" className="form-control me-3" placeholder='Haku' />
        <button className="btn btn-light"> Hae </button>    
      </div>
      <div className="headerRight me-3">
        <button className="btn btn-primary">Sign In</button> 
        <button className="btn btn-light">Log In</button>
      </div>
    </header>
  )
}
