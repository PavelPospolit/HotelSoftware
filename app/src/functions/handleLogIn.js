
export default function handleLogIn(email, password, navigate) {
    (async () => {
        try {
            await fetch('/users', {
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
                        navigate('/')
                    }
                })
        }
        catch (err) {
            console.log(err);
        }
    })()
}