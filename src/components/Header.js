import React from 'react'
import { useRef,useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Logo.png'


export default function Header() {

  const userData = JSON.parse(sessionStorage.getItem('userData'))

  function handleLogout() {
    sessionStorage.removeItem('userData');
    localStorage.removeItem('cart');
    window.location.reload();
  }

  return (

    <div className='header'>
    <Link className="logolink" to="/">
        <img src={logo} alt="logo"/>
      </Link>
    <ul className="icon-area">
    {userData ? (
        <>          
          <li className='icon-item'>
            <button className='icon-link' onClick={handleLogout}>
              Log out
            </button>
          </li>
          <li className='icon-item'>
            <Link className='icon-link' to='/'>
            <i className="bi bi-person-circle"></i>
              {userData[0].username}
            </Link>
          </li>
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
