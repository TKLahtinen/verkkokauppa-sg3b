import React from 'react'
import { useRef,useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Logo.png'
import register from '../images/register.png'


export default function Header() {

  return (
    <div className='header'>
    <Link className="logolink" to="*">
        <img src={logo} alt="logo"/>
      </Link>
    <ul className="icon-area">
      <li className='icon-item'><Link className="icon-link" to="*"><img src={register}/>Kirjaudu sisään</Link></li>
      <li className='icon-item'><Link className="icon-link" to="*"><img src={register}/>Rekisteröidy</Link></li>
    </ul>
    </div>
  )
}
