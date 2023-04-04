import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className='d-flex justify-content-center align-items-center'>
      <Link className='mx-3 navlink' to="/Tennarit">Tennarit</Link>
      <Link className='mx-3 navlink' to="/Kengat">Kengät</Link>
      <a href="" className='mx-3 navlink'>Tarvikkeet</a>
      <a href="" className='mx-3 navlink'>Muu</a>
    </nav>
  )
}
