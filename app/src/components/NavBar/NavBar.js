import React from 'react'
import { useEffect } from 'react';
import './NavBar.css'
import logo from '../../logoHotel.PNG'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function NavBar() {
  
  return (
    <div className='navBar'>
      <div className='logoBox'>
        <img className='logo' src={logo}></img>
      </div>

      <div className='navList'>
        <ul className='navLinks'>
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/login'} className="nav-link">Login</Link></li>
          <li><Link to={'/booking'} className="nav-link">Booking</Link></li>
          <li><Link to={'/profile'} className="nav-link">Profile</Link></li>
        </ul>
      </div>

    
    </div>
  )
}

export default NavBar;