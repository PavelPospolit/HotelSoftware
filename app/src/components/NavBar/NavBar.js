import React from 'react'
import { useEffect } from 'react';
import './NavBar.css'
import logo from '../../logoHotel.PNG'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

function NavBar() {
  const lsID = localStorage.getItem('id');
  const navigate = useNavigate();

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
            <li><Link to={'/profile'} className="nav-link">Profile</Link></li>
            <button onClick={() => {
              localStorage.removeItem('id');
              localStorage.removeItem('Admin');
              navigate('/')
            }}>logout</button>
          </ul>
        </div>


      </div>
    )
  };
}

export default NavBar;