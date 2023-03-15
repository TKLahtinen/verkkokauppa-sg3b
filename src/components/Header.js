import React from 'react'


export default function Header() {
  return (
    <header className='d-flex justify-content-between align-items-center'>
      <div className="headerLeft">
        <img src="https://cdn.discordapp.com/attachments/1084753750608072805/1085482794341384262/Logo.png" alt="" className="w-100" />
      </div>
      <div className="headerCenter">
        <input type="text" name="Haku" id="" placeholder='Haku'  />
      </div>
      <div className="headerRight ">
        <button className="btn btn-primary">Sign In</button> <button className="btn btn-light">Log In</button>
      </div>
    </header>
  )
}
