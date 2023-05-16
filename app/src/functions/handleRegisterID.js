export default function handleRegisterID(setNewID, getNewID) {

    (async () => {
        try {
            await fetch('http://pavelpospolit.hopto.org/userid', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })
                .then((res) => {
                    return res.json()
                }).then((data) => {
                    setNewID(data.id + 1)
                })
        }
        catch (err) {
            console.log(err);
        }
    })()
}