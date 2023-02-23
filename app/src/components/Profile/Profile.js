import React, { useState, useEffect } from 'react'
import './Profile.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router';

function Profile() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('id')) {
      navigate('/');
    }
  }, [])

  const [vorname, setVorname] = useState('test');
  const [nachname, setNachname] = useState('test1');
  const [email, setEmail] = useState('test2');
  const [userId, setUserId] = useState('test3');

  const [buchungen, setBuchungen] = useState([{ typ: 'test1', buchungID: 'test2', buchungVon: 'test3', buchungBis: 'test4' }])

  return (
    <div className='profilePage'>
      <div className='topDiv'>
        <h1>Mein Konto:</h1>
        <hr />
        <div className='profileContent'>
          <div className='contentLeft'>
            <div className='left'>
              <p>Vorname:</p>
              <p>Nachname:</p>
            </div>
            <div className='right'>
              <p>{localStorage.getItem('Vorname')}</p>
              <p>{localStorage.getItem('Nachname')}</p>
            </div>
          </div>
          <div className='contentRight'>
            <div className='left'>
              <p>E-Mail Adresse:</p>
              <p>Benutzer-ID:</p>
            </div>
            <div className='right'>
              <p>{localStorage.getItem('Email')}</p>
              <p>{localStorage.getItem('id')}</p>
            </div>
          </div>
        </div>
        <div className='profileBtns'>
          <button id='passwortBtn'>Passwort ändern</button>
          <button id='bearbeitenBtn'>Bearbeiten</button>
        </div>
      </div>
      <div className='bottomDiv'>

        <h1>Meine Buchungen:</h1>
        <hr style={{ marginBottom: '30px' }} />

        <div id='Table'>
          <TableContainer component={Paper} id='tableContainer'>
            <Table sx={{ minWidth: 500 }} aria-label="simple table" id='tableBooking'>
              <TableHead>
                <TableRow>
                  <TableCell>Typ</TableCell>
                  <TableCell align="right">Buchungs-ID</TableCell>
                  <TableCell align="right">Vom:</TableCell>
                  <TableCell align="right">Bis:</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {buchungen.map((row) => (
                  <TableRow
                    key={row.typ}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.typ}
                    </TableCell>
                    <TableCell align="right">{row.buchungID}</TableCell>
                    <TableCell align="right">{row.buchungVon}</TableCell>
                    <TableCell align="right">{row.buchungBis}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <button id='stornoBtn'>stornieren</button>
        </div>


      </div>
    </div>
  )
}

export default Profile