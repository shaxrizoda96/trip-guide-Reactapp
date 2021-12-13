import React from 'react'
// import { AutoComplete } from 'antd';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import './styles.css'


const AutoComplete = styled.input`
background: #F4F5F7;
opacity: 0.8;
border: 1px solid #E7E8EA;
box-sizing: border-box;
box-shadow: 0px 6px 18px rgba(32, 32, 32, 0.08);
border-radius: 8px;
outline: none;
padding: 20px 25px 0px 25px;
width: 332px;
height: 70px;
margin-right: 8px;

`
const Label = styled.label`
position: absolute;
z-index: 20;
padding: 10px 0 0 25px;
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 23px;
color: #3B3E44;

`

const Button = styled.div`
background: #3B71FE;
border-radius: 10px;
padding: 22px 42px;
margin-left: 50px;

font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 26px;
color: #FFFFFF;
`
const options = [
    {
      value: 'Burns Bay Road',
    },
    {
      value: 'Downing Street',
    },
    {
      value: 'Wall Street',
    },
  ];

const LocationOne = () => {
  const [value, setValue] = React.useState([null, null]);

  return (
    <>
    
      <form style={{position:'relative', display: 'flex'}}>
        <div><Label htmlFor="in">Leaving from</Label>
            <AutoComplete 
                id="in"  
                type="search" 
                options={options}
                filterOption={(inputValue, option) =>
                  option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}/>
        </div>
        



        <LocalizationProvider dateAdapter={AdapterDateFns} style={{border:'none', backgroundColor:'red'}}>
          <DateRangePicker
              startText="Check-in" endText="Check-out" value={value} onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                    <TextField {...startProps} />
                      <Box sx={{ mx: 0.5 }}>  </Box>
                    <TextField {...endProps} />
                </React.Fragment>
              )}/>
        </LocalizationProvider>

       <Button type="search">Search</Button>
      </form>
  
    </>
  )
};

export default LocationOne;


