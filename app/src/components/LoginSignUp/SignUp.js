import React from 'react'

function SignUp() {
  return (
    <>
    	<div className="form-container sign-up-container">
		<form >
			<h1 style={{color: 'black'}}>Konto erstellen</h1>

      <br></br>
			<input type="text" placeholder="Benutzername"  value='username'/>
			<input type="email" placeholder="Email"  value='user email'/>
			<input type="password" placeholder="Passwort"  value='user password'/>

			<button type="submit" id="btnRegistrieren">Registrieren</button>
		</form>
	</div>
    </>
  )
}

export default SignUp