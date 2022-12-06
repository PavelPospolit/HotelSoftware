import React from 'react'
import { useEffect } from 'react'
import './LoginSignUp.css'
import Login from './Login'
import SignUp from './SignUp'

function LoginSignUp({funcNav}) {


  useEffect(()=>{
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });

    funcNav(false)
    
  },[]);

  return (
    <>
    <div style={{boxSizing:"border-box", background:'white', display:"flex", justifyContent:'center', alignItems:"center", flexDirection:'column', fontFamily:'Montserrat', height:'100vh', margin:'0px'}}>
      <div className="container" id="container">
        <SignUp />
        <Login />
      </div>
    </div>
    </>
  )
}

export default LoginSignUp