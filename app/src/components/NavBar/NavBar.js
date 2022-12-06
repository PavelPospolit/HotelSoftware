import React from 'react'
import './NavBar.css'
import logo from '../../logo.svg'

function NavBar() {
  return (
    <div className='navBar'>
      <div className='logoBox'>
        <img className='logo' src={logo}></img>
      </div>

      <div className='navList'>
        <ul className='navLinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Buchen</a></li>
          <li><a href='#'>Kontakt</a></li>
        </ul>
      </div>

      {/* <div className='profileBox'>
        <img className='profile' src={logo}></img>
      </div> */}
    </div>
  )
}

export default NavBar;