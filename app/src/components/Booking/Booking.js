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
import { Table, TableBody, TableHead, TableRow, TableCell, Input } from '@mui/material';
import { useNavigate } from 'react-router';

function Booking() {

  const autoModell = [
  ];
  let [getPriceCar, setPriceCar] = useState();
  let carData = []
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


  useEffect(() => {

  })

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('id')) {
      navigate('/');
    }
  }, [])

  const [startDateZ, setStartDateZ] = useState(null);
  const [endDateZ, setEndDateZ] = useState(null);
  let differenceZ
  let daysZ
  const onChangeZ = (dates) => {
    const [start, end] = dates;
    setStartDateZ(start);
    setEndDateZ(end);
  };
  const [startDateC, setStartDateC] = useState(null);
  const [endDateC, setEndDateC] = useState(null);
  let differenceC
  let daysC
  const onChangeC = (dates) => {
    const [start, end] = dates;
    setStartDateC(start);
    setEndDateC(end);

    let price
    for (var i = 0; i <= carData.length - 1; i++) {
      if (carData[i].Typ === getSelectedCar) {
        price = carData[i].Preis_pro_Tag;
      }
    }
    differenceC = ((end.getTime() - start.getTime()))
    daysC = (Math.ceil(differenceC / (1000 * 3600 * 24))) + 1
    console.log("preisvar: " + price);
    console.log(daysC);
    setPriceCar(price * daysC);
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

  const [autoSelectorDisabled, setAutoSelectorDisabled] = useState(true)
  const [spaCheck, setSpaCheck] = useState(false)


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
              <FormControlLabel
                id='checkAuto'
                control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
                label='Auto'
                labelPlacement='start'
                onChange={(evt) => {
                  setAutoSelectorDisabled(!autoSelectorDisabled)
                }} />
              <FormControlLabel
                id='checkSPA'
                control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
                label='SPA'
                labelPlacement='start'
                onChange={(evt) => {
                  setSpaCheck(!spaCheck)
                }} />
            </FormGroup>
          </div>

          <div className='dateSelectZimmer'>
            <DatePicker
              selected={startDateZ}
              onChange={onChangeZ}
              startDate={startDateZ}
              endDate={endDateZ}
              selectsRange
              fixedHeight='100px'
              placeholderText='Zeitraum wählen'
            />
          </div>

          {/* HILFSBUTTON UM ANZAHL TAGE FÜR ZIMMER ZU ERMITTELN START */}
          <Button onClick={() => {
            differenceZ = ((endDateZ.getTime() - startDateZ.getTime()))
            daysZ = (Math.ceil(differenceZ / (1000 * 3600 * 24))) + 1
            console.log(daysZ);
          }}>HILFSBUTTON ANZ TAGE ZIMMER</Button>
          {/* HILFSBUTTON UM ANZAHL TAGE FÜR ZIMMER ZU ERMITTELN ENDE */}
        </div>

        <div className='autoSection'>
          <h1>Autoauswahl</h1>
          <Select
            id='selectAuto'
            placeholder='Modell'
            options={autoModell}
            isDisabled={autoSelectorDisabled}
            onChange={(evt) => {
              setSelectedCar(evt.label.toString())


            }}
          />

          <div className='dateSelectAuto'>
            <DatePicker
              selected={startDateC}
              onChange={onChangeC}
              startDate={startDateC}
              endDate={endDateC}
              selectsRange
              placeholderText='Zeitraum wählen'
              disabled={autoSelectorDisabled}
            />
          </div>

          <Button variant="contained" id='bookBtn'>Buchen</Button>
        </div>


        <div className='sumPriceSection'>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Preis Zimmer</TableCell>
                <TableCell align="right">Preis Auto</TableCell>
                <TableCell align="right">Preis Spa</TableCell>
                <TableCell align="right">Gesamt</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell ></TableCell>
                <TableCell align='right'>{getPriceCar}</TableCell>
                <TableCell align='right'></TableCell>
                <TableCell align='right'></TableCell>
              </TableRow>
            </TableBody>

          </Table>
        </div>



      </div>

    </div >
  )
}

export default Booking