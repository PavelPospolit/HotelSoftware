import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import handleRegisterID from '../../functions/handleRegisterID'
import handleRegister from '../../functions/handleRegister'
import CryptoJS from 'crypto-js'

function SignUp() {

	const navigate = useNavigate();
	const [getEmail, setEmail] = useState('');
	const [getVorname, setVorname] = useState('');
	const [getNachname, setNachname] = useState('');
	const [getStrasse, setStrasse] = useState('');
	const [getHausnummer, setHausnummer] = useState('');
	const [getPLZ, setPLZ] = useState('');
	const [getOrt, setOrt] = useState('');
	const [getPasswort, setPasswort] = useState('');
	const [getRepPasswort, setRepPasswort] = useState('');
	const [getNewID, setNewID] = useState('');
	let [getdbEmail, setdbEmail] = useState('');

	useEffect(() => {
		handleRegisterID(setNewID, getNewID)
	}, [setVorname, getVorname, setEmail, getEmail])

	return (
		<>
			<div className="form-container sign-up-container">
				<form >
					<h1 style={{ color: 'black' }}>Konto erstellen</h1>
					<br></br>
					<input type="email" placeholder="Email" id='email_reg' onChange={(evt) => {
						setEmail(evt.target.value)
					}} />
					<input type="text" placeholder="Vorname" id='vorname_reg' onChange={(evt) => { setVorname(evt.target.value) }} />
					<input type="text" placeholder="Nachname" id='nachname_reg' onChange={(evt) => { setNachname(evt.target.value) }} />
					<input type="text" placeholder="Straße" id='strasse_reg' onChange={(evt) => { setStrasse(evt.target.value) }} />
					<input type="text" placeholder="Hausnummer" id='hausnummer_reg' onChange={(evt) => { setHausnummer(evt.target.value) }} />
					<input type="text" placeholder="PLZ" id='plz_reg' onChange={(evt) => { setPLZ(evt.target.value) }} />
					<input type="text" placeholder="Ort" id='ort_reg' onChange={(evt) => { setOrt(evt.target.value) }} />
					<input type="password" placeholder="Passwort" id='pw_reg' onChange={(evt) => { setPasswort(evt.target.value) }} />
					<input type="password" placeholder="Passwort wiederholen" id='reppw_reg' onChange={(evt) => { setRepPasswort(evt.target.value) }} />

					<button
						type="button"
						id="btnRegistrieren"
						onClick={() => {
							(async () => {
								try {
									await fetch('http://pavelpospolit.hopto.org/doubleEmail', {
										method: 'POST',
										headers: {
											'Accept': 'application/json, text/plain, */*',
											'Content-Type': 'application/json'
										},
										body: JSON.stringify({ email: getEmail })
									})
										.then((res) => {
											return res.json()
										})
										.then(data => {
											if (!data.unique) {
												alert('EMAIL ALRDY IN USE')
											}
											else if (data.unique) {
												handleRegister(getNewID, getEmail, getVorname, getNachname, getStrasse, getHausnummer, getPLZ, getOrt, getPasswort, getRepPasswort, CryptoJS)
											}

										})
								}
								catch (err) {
									console.log(err);
								}
							})()
						}}
					>Registrieren</button>
				</form>
			</div>
		</>
	)
}

export default SignUp