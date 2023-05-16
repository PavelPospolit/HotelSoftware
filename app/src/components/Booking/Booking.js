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

  const autoModell = [
  ];
  let [getPriceCar, setPriceCar] = useState();
  let carData = []
  let [carDataState, setCarDataState] = useState([])
  let [getSelectedCar, setSelectedCar] = useState()


  useEffect(() => {
    (async () => {
      try {
        await fetch('http://pavelpospolit.hopto.org/cars', {
          method: 'GET',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })
          .then((res) => {
            return res.json()
          })
          .then(data => {
            for (var i = 0; i <= data.length - 1; i++) {
              autoModell.push({ value: i + 1, label: data[i].Typ });
              carData.push(data[i])
            }
          })
      }
      catch (err) {
        console.log(err);
      }
    })()
  })




  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('id')) {
      navigate('/');
    }
  }, [])

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };


  const selectPeople = [
    { value: 1, label: '1 Bett' },
    { value: 2, label: '2 Betten' }
  ];

  const zimmerKlasse = [
    { value: 1, label: 'Basic Klasse' },
    { value: 2, label: 'Standard Klasse' },
    { value: 3, label: 'Premium Klasse' }
  ]




  return (
    <div className='bookingPage'>
      <div className='bookingLeft'>

        <h1 id='titelLeft'>Zimmer 1</h1>
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

      <div className='bookingRight'>
        <h1>Zimmerauswahl</h1>
        <div className='zimmerSection'>

          <div className='bookFilter'>
            <Select
              id='selectPersonen'
              placeholder='Anzahl Betten'
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
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              fixedHeight='100px'
              placeholderText='Zeitraum wählen'
            />
          </div>
        </div>

        <div className='autoSection'>
          <h1>Autoauswahl</h1>
          <Select
            id='selectAuto'
            placeholder='Modell'
            options={autoModell}
            onChange={(evt) => {
              setSelectedCar(evt.label.toString())

            }}
          />

          {/* HILFSBUTTON UM PREIS PRO TAG DES AUTOS FESTZUSTELLEN START */}
          <Button onClick={() => {
            for (var i = 0; i <= carData.length - 1; i++) {
              if (carData[i].Typ === getSelectedCar) {
                setPriceCar(carData[i].Preis_pro_Tag)
              }
            }
          }}>PREIS PRO TAG ERMITTELN</Button>
          {/* HILFSBUTTON UM PREIS PRO TAG DES AUTOS FESTZUSTELLEN ENDE */}


          <div className='dateSelectAuto'>
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              placeholderText='Zeitraum wählen' />
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