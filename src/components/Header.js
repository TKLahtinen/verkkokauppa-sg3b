import React from 'react'



export default function Header() {
  return (
    <header className='d-flex justify-content-between align-items-center'>
      <div className="headerLeft ms-3">
        <img src="https://cdn.discordapp.com/attachments/1084753750608072805/1085482794341384262/Logo.png" alt="logo" className="w-100" />
      </div>
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
