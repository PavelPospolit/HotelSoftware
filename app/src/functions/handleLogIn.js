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
                        console.log(data.id)
                        navigate('/')
                    }
                })
        }
        catch (err) {
            console.log(err);
        }
    })()
}
