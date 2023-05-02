import React from 'react'
import { useRef,useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Logo.png'


export default function Header() {

  return (

    <div className='header'>
    <Link className="logolink" to="*">
        <img src={logo} alt="logo"/>
      </Link>
    <ul className="icon-area">
      <li className='icon-item'><Link className="icon-link" to="*"><i class="bi bi-door-open-fill"></i>Kirjaudu sisään</Link></li>
      <li className='icon-item'><Link className="icon-link" to="*"><i class="bi bi-box-arrow-in-right"></i>Rekisteröidy</Link></li>
      <li className='icon-item'><Link className='icon-link'to="*"><i class="bi bi-cart-fill"></i>Ostoskori</Link></li>
    </ul>
    </div>
  )
}
