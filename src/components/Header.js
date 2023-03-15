import React from 'react'

export default function Header() {
  return (
    <header className='d-flex justify-content-between align-items-center'>
      <div className="headerLeft">
        <img src="https://media.discordapp.net/attachments/1084753750608072805/1085263140427669645/3valmis.png?width=1000&height=670" alt="" className="w-100" />
      </div>
      <div className="headerCenter">
        <input type="text" name="Haku" id="" placeholder='Haku'  />
      </div>
      <div className="headerRight ">
        Oikea
      </div>
    </header>
  )
}
