import React, { useEffect, useState } from 'react'
import './Booking.css'
import foto from './HotelZimmer.jpg'
import Select from 'react-select'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material';
import { useNavigate } from 'react-router';

function Booking() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('id')) {
      navigate('/');
    }
  }, [])

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };


  const selectPeople = [
    { value: 1, label: '1 Person' },
    { value: 2, label: '2 Personen' },
    { value: 3, label: '3 Personen' },
    { value: 4, label: '4 Personen' }
  ];

  const zimmerKlasse = [
    { value: 1, label: 'Basic Klasse' },
    { value: 2, label: 'Standard Klasse' },
    { value: 3, label: 'Premium Klasse' }
  ]


  const autoModell = [
    { value: 1, label: 'Cabrio' },
    { value: 2, label: 'SUV' },
    { value: 3, label: 'Van' },
    { value: 4, label: 'Combi' }
  ]

  return (
    <div className='bookingPage'>
      <div className='bookingLinks'>

        <h1>Zimmer 1</h1>
        <img src={foto} />

        <div className='zimmerinhalt'>
          <h1>Zimmerinhalt:</h1>
          <ul>
            <li>Inhalt1</li>
            <li>Inhalt2</li>
            <li>Inhalt3</li>
            <li>Inhalt4</li>
          </ul>
        </div>


      </div>

      <div className='bookingRechts'>
        <h1>Zimmerauswahl</h1>
        <div className='zimmerSection'>

          <div className='bookFilter'>
            <Select
              id='selectPersonen'
              placeholder='Personenanzahl'
              options={selectPeople}
            />
            <Select
              id='selectKlasse'
              placeholder='Zimmerausstattung'
              options={zimmerKlasse}
            />
            <FormGroup row={true}>
              <FormControlLabel id='checkAuto' control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label='Auto' labelPlacement='start' />
              <FormControlLabel id='checkSPA' control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label='SPA' labelPlacement='start' />

            </FormGroup>
          </div>



          <div className='dateSelectZimmer'>
            <DatePicker selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              className='unstyled-datepicker'/>

          </div>
        </div>

        <div className='autoSection'>
          <h1 id='autoTitle'>Auto</h1>
          <Select
            id='selectAuto'
            placeholder='Modell'
            options={autoModell}
          />

          <div className='dateSelectAuto'>
            <DatePicker selected={new Date()} />
            <DatePicker selected={new Date()} />
          </div>


          <Button variant="contained" id='bookBtn'>Buchen</Button>
        </div>


        <div className='sumPriceSection'>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell >erste</TableCell>
                <TableCell align='right'>zweite</TableCell>
                <TableCell align='right'>dritte</TableCell>
                <TableCell align='right'>vierte</TableCell>
              </TableRow>
            </TableBody>

          </Table>
        </div>



      </div>

    </div>
  )
}

export default Booking