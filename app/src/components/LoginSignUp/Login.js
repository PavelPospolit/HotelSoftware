import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import handleLogIn from '../../functions/handleLogIn'

function Login() {

	const navigate = useNavigate();
	const [getEmail, setEmail] = useState('')
	const [getPassword, setPassword] = useState('');


	return (
		<>
			<div className="form-container sign-in-container">
				<form   >
					<h1 style={{ color: 'black' }}>Anmeldung</h1>
					<br></br>
					<input type="text" id='email' placeholder="Benutzername" onChange={(evt) => { setEmail(evt.target.value) }} />
					<input type="password" id='password' placeholder="Passwort" onChange={(evt) => { setPassword(evt.target.value) }} />
					<br></br>
					<button type='button' onClick={() => { handleLogIn(getEmail, getPassword, navigate) }}>Anmelden</button>
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