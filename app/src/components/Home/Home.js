import React, { useEffect } from 'react'
import './Home.css'
import foto from './HotelPic.jpg'
import {useNavigate} from 'react-router'


function Home({funcNav}) {

  const navigate = useNavigate();

  useEffect(()=>{
    funcNav(true)
  }, [])




  return (
    <div className='homepage'>
      <div className='homeLinks'>
        <img src={foto} />

      </div>

      <div className='homeRechts'>
        <div id='title'>HOTEL BENT SERIOUSNESS</div>

        <div id='textL'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>

        <button onClick={()=>{navigate('/booking')}} id='bookingBtnHome'>Buchen</button>

      </div>
    </div>

  )
}

export default Home