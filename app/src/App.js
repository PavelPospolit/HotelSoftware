import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Homepage from './components/Home/Home';
import Booking from './components/Booking/Booking'
import LoginSignUp from './components/LoginSignUp/LoginSignUp';

function App() {

  const [showNav, setShowNav] = useState(true);

  return (
    <Router>
        <div>
        {   showNav &&
            <NavBar/>
        } 
          <Routes>
              <Route exact path='/' element={<Homepage funcNav={setShowNav}/>} />
              <Route path='/login' element={<LoginSignUp funcNav={setShowNav}/>} />
              <Route path='/booking' element={<Booking />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App