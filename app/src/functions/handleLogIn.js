export default function handleLogIn(email, password, navigate) {
    (async () => {
        try {
            await fetch('http://pavelpospolit.hopto.org/users', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, password: password })
            })
                .then((res) => {
                    return res.json()
                })
                .then(data => {
                    if (!data.auth) {
                        alert('Wrong Email and Password combination')
                    }
                    else {
                        localStorage.setItem('id', data.id)
                        localStorage.setItem('Admin', data.admin)
                        localStorage.setItem('Email', data.email)
                        localStorage.setItem('Vorname', data.vorname)
                        localStorage.setItem('Nachname', data.nachname)
                        localStorage.setItem('Straße', data.strasse)
                        localStorage.setItem('HausNummer', data.hausnr)
                        localStorage.setItem('Ort', data.ort)
                        navigate('/')
                    }
                })
        }
        catch (err) {
            console.log(err);
        }
    })()
}
