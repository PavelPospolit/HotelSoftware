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
            <div className='navLeft'>
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
            </div>


            <div className='navRight'>
              <button onClick={() => {
                navigate('/login')
              }}><i class="gg-log-in"></i>login</button>
            </div>
            {/* <li><Link to={'/login'} className="nav-link">Login</Link></li> */}
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
            <div className='navLeft'>
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/booking'} className="nav-link">Booking</Link></li>
              <li><Link to={'/profile'} className="nav-link">Profile</Link></li>
            </div>

            <div className='navRight'>

              <button onClick={() => {
                localStorage.removeItem('id')
                localStorage.removeItem('Admin')
                localStorage.removeItem('Email')
                localStorage.removeItem('Vorname')
                localStorage.removeItem('Nachname')
                localStorage.removeItem('Straße')
                localStorage.removeItem('HausNummer')
                localStorage.removeItem('Ort')
                navigate('/')
              }}>
                <i class="gg-log-out"></i>logout
              </button>


            </div>



          </ul>
        </div>


      </div>
    )
  };
}

export default NavBar;