import React from 'react'
import { useRef,useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Logo.png'


export default function Header() {

  const userData = JSON.parse(sessionStorage.getItem('userData'))
  const isAdmin = userData && userData[0].rights === 'a'

  function handleLogout() {
    sessionStorage.removeItem('userData');
    localStorage.removeItem('cart');
    window.location.href = '/';
  }

  return (

    <div className='header'>
    <Link className="logolink" to="/">
      <img src={logo} alt="logo"/>
    </Link>
    <ul className="icon-area">
      {userData ? (
        <>          
          <li className='icon-item'><i className="bi bi-x-circle"></i>
            <Link className='icon-link' onClick={handleLogout}>
              Kirjaudu ulos
            </Link>
          </li>
          <li className='icon-item'>
            <Link className='icon-link' to='/kayttaja'>
              <i className="bi bi-person-circle"></i>
              {userData[0].username}
            </Link>
          </li>
          {isAdmin && (
            <li className='icon-item'>
              <Link className='icon-link' to='/admin'>
                <i className="bi bi-gear-fill"></i>
                Admin
              </Link>
            </li>
          )}
        </>
      ) : (
        <>
          <li className='icon-item'>
            <Link className="icon-link" to="/login">
              <i className="bi bi-door-open-fill"></i>
              Kirjaudu sisään
            </Link>
          </li>
          <li className='icon-item'>
            <Link className="icon-link" to="/signup">
              <i className="bi bi-box-arrow-in-right"></i>
              Rekisteröidy
            </Link>
          </li>
        </>
      )}
      <li className='icon-item'>
        <Link className='icon-link' to="/tilaus">
          <i className="bi bi-cart-fill"></i>
          Ostoskori
        </Link>
      </li>
    </ul>
  </div>
)
}
