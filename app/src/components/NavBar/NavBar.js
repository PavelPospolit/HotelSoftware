import React from 'react'
import { useEffect } from 'react';
import './NavBar.css'
import logo from '../../logo.svg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function NavBar() {
  const lsID = localStorage.getItem('id');


  if (!lsID) {

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
          </ul>
        </div>


      </div>
    )
  }
  else if (lsID) {

    return (
      <div className='navBar'>
        <div className='logoBox'>
          <img className='logo' src={logo}></img>
        </div>

        <div className='navList'>
          <ul className='navLinks'>
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/booking'} className="nav-link">Booking</Link></li>
            <button onClick={() => {
              localStorage.removeItem('id');
              localStorage.removeItem('Admin');
              window.location.reload();
            }}>logout</button>
          </ul>
        </div>


      </div>
    )
  };
}

export default NavBar;