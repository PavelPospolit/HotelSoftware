import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {useNavigate} from 'react-router'

function Login() {

	const navigate = useNavigate();

  return (
    <>
    <div className="form-container sign-in-container">
		<form   >
		{/* ALT: <form action="#" onSubmit={handleSubmit}  > */}
			<h1 style={{color: 'black'}}>Anmeldung</h1>
			<br></br>
			{/* ALT: <input type="text" placeholder="Benutzername" onChange={handleName}/>
			<input type="password" placeholder="Passwort" onChange={handlePassword}/> */}
			<input type="text" placeholder="Benutzername"  value='username state'/>
			<input type="password" placeholder="Passwort"  value='user password state'/>

			<br></br>
			<button onClick={()=>{navigate('/')}}>Anmelden</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Willkommen!</h1>
				<p>Um dich anzumelden gib deine Login Daten hier ein</p>
				<button className="ghost" id="signIn">Anmelden</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hallo!</h1>
				<p>Gib deine Informationen ein und registriere dich hier</p>
				<button className="ghost" id="signUp">Registrieren</button>
			</div>
		</div>
	</div>
  </>
  )
}

export default Login