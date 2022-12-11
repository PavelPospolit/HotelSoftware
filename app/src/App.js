import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Homepage from './components/Home/Home';
import Booking from './components/Booking/Booking'
import LoginSignUp from './components/LoginSignUp/LoginSignUp';
import Profile from './components/Profile/Profile';

function App() {

  const [showNav, setShowNav] = useState(true);

  return (
    <Router>
        <div id='container'>
        {   showNav &&
            <NavBar/>
        } 

          {/* <Profile /> */}

          <Routes>
              <Route exact path='/' element={<Homepage funcNav={setShowNav}/>} />
              <Route path='/login' element={<LoginSignUp funcNav={setShowNav}/>} />
              <Route path='/booking' element={<Booking />} />
              <Route path='/profile' element={<Profile/>} />
          </Routes>
        </div>
      </Router>
  )
}

export default App