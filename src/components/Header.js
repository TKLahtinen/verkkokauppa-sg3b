import React from 'react'
import { useRef,useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Logo.png'


export default function Header() {

  const searchInput = useRef()

  function handleSearch(e) {
    e.preventDefault()
    const searchQuery = searchInput.current.value
    console.log(searchQuery)
    window.location.href = '/haku/' + searchQuery
    
  }

  return (
    <header className='d-flex justify-content-between align-items-center'>
      <Link className="headerLeft ms-3" to="/">
        <img src={logo} alt="logo" className="w-100" />
      </Link>
      <div className="headerCenter d-flex">
        <input type="text" className="form-control me-3" placeholder='Haku' ref={searchInput} />
        <button className="btn btn-light" onClick={handleSearch}> Hae </button>
      </div>
      <div className="headerRight me-3">
        <button className="btn btn-primary">Sign In</button> 
        <button className="btn btn-light">Log In</button>
      </div>
    </header>
  )
}
