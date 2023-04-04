import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className='d-flex justify-content-center align-items-center'>
      <Link className='mx-3 navlink' to="/tuotteet/sneakerit">Sneakerit</Link>
      <Link className='mx-3 navlink' to="/tuotteet/crocsit">Crocsit</Link>
      <a href="" className='mx-3 navlink'>Tarvikkeet</a>
      <a href="" className='mx-3 navlink'>Muu</a>
    </nav>
  )
}
