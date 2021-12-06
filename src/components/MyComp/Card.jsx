import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import { Checkbox} from 'evergreen-ui'
import {Link} from 'react-router-dom'

const Cards = styled.div`
padding: 20px 46px 31px 46px;
background: #FFFFFF;
border: 1px solid #EAEAEA;
box-sizing: border-box;
border-radius: 20px;
`
const Span = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 23px;
color: #B1B5C4;
display: flex;
align-items: center;
`
const SpanPrice = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 44px;
letter-spacing: -0.005em;
color: #141416;

`
const Top = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-bottom: 17px;
border-bottom: 2px solid #E6E8EC;
`
const Button = styled.div`
padding: 6px 10px;
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
background: #145CE6;
border-radius: 25px;
color: #FFFFFF;
`

const Inner = styled.div`
width: 316px;
`
const Checks = styled.div`
padding:  20px 20px;
`
const Labels = styled.div`
display: flex;
justify-content: space-around;
padding-bottom: 11px;
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #84878B;

`
const Guest = styled.div`
padding-bottom: 11px;
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #777E91;

`
const Select = styled.select`
    width: 316px;
    height: 44px;
    /* padding: 15px; */
    background: #F4F5F6;
    border-radius: 10px;
    outline: none;
    border: none;
    padding: 0 20px ;
`
const Option = styled.option`
   background: #F4F5F6;
    border-radius: 10px; 
`

const Features = styled.div`
padding-top: 20px;
`
const Check = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
color: #353945;
`
const Price = styled.div`

`

const PriceSection = styled.div`

`

const CardPrice = styled.div`
    padding: 2px 20px;
    background: #F4F5F6;
    border-radius: 10px;
`
const Text = styled.div`
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Total = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 12px 15px 23px 0;

`
const TotalSpan = styled.span`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #777E91;
`

const SpanPrices = styled.div`
  font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 27px;
text-align: right;
color: #353945;
`

const ButtonPayment = styled.div`
 font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 26px;
padding: 11px 109px;
background: #316BFF;
border-radius: 12px;
cursor: pointer;
border: none;
outline: none;


color: #FFFFFF;   

`
const SpanText = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
padding-top: 12px;
text-align: center;
color: #777E91;
`
const Card = () => {

    
    const [value, setValue] = React.useState([null, null]);
    const [checked, setChecked] = React.useState(false);
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [color, setColor] = React.useState('red')
    return (
        <Cards>
            <Inner>
            <Top>
                <Span><SpanPrice>$142</SpanPrice> /night $184</Span>
                <Button>20% OFF</Button>
            </Top>

            <Checks>
            <LocalizationProvider dateAdapter={AdapterDateFns} >
               <Labels> <span>Check-In</span>
                <span>Check-In</span></Labels>
            <DateRangePicker
            startText="date in"
            endText="date out"
            value={value}
        
             onChange={(newValue) => {
           setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
           <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 0.5 }}>  </Box>
            <TextField {...endProps} />
              </React.Fragment>
            )}
            />
            </LocalizationProvider>
            </Checks>

            <Guest>Guest</Guest>
            {/* <Combobox
              initialSelectedItem={{ label: 'Banana' }}
              items={[{ label: 'Banana' }, { label: 'Pear' }, { label: 'Kiwi' }]}
              itemToString={item => (item ? item.label : '')}
              onChange={selected => console.log(selected)}
              style={{background: '', width: '316px', height: '44px', border: 'none', paddingBottom: '44px'}}
            /> */}
            <Select>
                <Option>2 Adults, 1 Children</Option>
                <Option>3 Adults, 2 Children</Option>
                <Option>4 Adults, 1 Children</Option>
                <Option>2 Adults, 6 Children</Option>
                <Option>5 Adults, 1 Children</Option>
                <Option>8 Adults, 4 Children</Option>
            </Select>

            <Features>
                <Guest>Extra Features</Guest>
                <Check>  <Checkbox style={{color: 'red'}} label="Allow to bring pet" checked={checked} onChange={e => setChecked(e.target.checked)}/> <Price>$13</Price></Check>
                <Check>  <Checkbox label="Breakfast a day per person" checked={checked1} onChange={e => setChecked1(e.target.checked)}/> <Price>$10</Price></Check>
                <Check>  <Checkbox label="Parking a day" checked={checked2} onChange={e => setChecked2(e.target.checked)}/> <Price>$6</Price></Check>
                <Check>  <Checkbox label="Extra pillow" checked={checked3} onChange={e => setChecked3(e.target.checked)}/> <Price>Free</Price></Check>
            </Features>

            <PriceSection>
                <Guest>Price</Guest>

                <CardPrice>
                    <Text><span>1 Nights</span> <span>$500</span></Text>
                    <Text><span>Discount 20%</span> <span>$200</span></Text>
                    <Text><span>Breakfast a day per person</span> <span>$10</span></Text>
                    <Text><span>Service fee</span> <span>$5</span></Text>

                </CardPrice>

                <Total><TotalSpan>Total payment</TotalSpan> <SpanPrices>$300</SpanPrices></Total>
            </PriceSection>

            <Link to="/payment" ><ButtonPayment>Book Now</ButtonPayment></Link>
            <SpanText>You will not get charged yet</SpanText>
           

            </Inner>

            
        </Cards>
    )
}

export default Card
