
export default function handleRegister(getNewID, getEmail, getVorname, getNachname, getStrasse, getHausnummer, getPLZ, getOrt, getPasswort, getRepPasswort) {
    if (getPasswort === getRepPasswort && (
        getNewID && getEmail && getVorname && getNachname && getStrasse && getHausnummer && getPLZ && getOrt && getPasswort
    )) {
        (async () => {
            try {
                await fetch('http://pavelpospolit.hopto.org/registerUser', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: getNewID, email: getEmail, vorname: getVorname, nachname: getNachname, strasse: getStrasse, hausnummer: getHausnummer, plz: getPLZ, ort: getOrt, passwort: getPasswort })
                })
                    .then((res) => {
                        return res.json()
                    })
                    .then(data => {
                        if (!data.success) {
                            alert('An Error occured')
                        }
                        else {
                            alert('Registrtation successfull')
                        }
                    })
            }
            catch (err) {
                console.log(err);
            }
        })()
    }
    else {
        alert('Passwörter stimmen nicht überein oder einige Felder sind leer!')
    }
}
