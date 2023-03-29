import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className='d-flex justify-content-center align-items-center'>
      <Link className='mx-3' to="/Tennarit">Tennarit</Link>
      <a href="" className='mx-3'>Kengät</a>
      <a href="" className='mx-3'>Tarvikkeet</a>
      <a href="" className='mx-3'>Muu</a>
    </nav>
  )
}
