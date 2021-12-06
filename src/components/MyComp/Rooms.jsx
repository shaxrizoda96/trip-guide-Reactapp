import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Wrapper = styled.div`
padding-right: 89px;
`
const Title = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 60px;
color: #23262F;
padding: 10px 0;
`
const Span = styled.span`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: #777E91;
padding-bottom: 22px;

`
const SpanBottom = styled.div`
width: 742px;
border-bottom:  2px solid #E6E8EC;

`

const Hotel = styled.div`
width: 742px;
border-bottom: 2px solid  #E6E8EC;

`
const HotelTitle = styled.div`
  font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: #23262F; 

`
const Ul = styled.ul`
    display: flex;
    padding: 24px 0 62px 0;
`
const LIs = styled.li`
    font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
padding:  0 45px 0 10px;
line-height: 24px;
color: #4F4F4F;
list-style:none;
`
const LI = styled.li`
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
list-style: none;
color: #353945;
padding: 0 0 26px 16px;
`
const Amenities = styled.div`

display: flex;
padding-bottom: 31px;

`
const TitleAmenities = styled.div`
padding: 60px 0 28px 0;
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: #23262F;

`
const Ulss = styled.div`
display: flex;
flex-direction: column;
padding-right: 197px;
`

const Uls = styled.div`
display: flex;
flex-direction: column;
`
const Button = styled.button`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
border: none;
outline: none;
color: #FFFFFF;
padding: 10px 31px ;
background: #3B71FE;
border-radius: 47px;
cursor: pointer;
`



const Rooms = () => {
    return (
        <Wrapper>
            <SpanBottom>
            <Title>Exclusive room in house</Title>
            <Span>Zuich, Switzerland</Span>
            </SpanBottom>

            <Tab>

            </Tab>

            <Hotel>
                <HotelTitle>Hotel features</HotelTitle>
                <Ul >
                    <LIs>Wi-fi</LIs>
                    <LIs>Bathup</LIs>
                    <LIs>Breakfast</LIs>
                    <LIs>Kids bed</LIs>
                    <LIs>4m*6m</LIs>
                </Ul>
            </Hotel>

            <TitleAmenities>Amenities</TitleAmenities>
            <Amenities>
               

                <Ulss >
                    <LI>Free computer</LI>
                    <LI>Free wifi 24/7</LI>
                    <LI>Free clean bathroom</LI>
                    <LI>Free wifi 24/7</LI>
                 
                </Ulss>

                <Uls>
                   
                    <LI>Free clean bathroom</LI>
                    <LI>Breakfast included</LI>
                    <LI>ATM</LI>
                    <LI>Nearby city</LI>
                </Uls>

                

            </Amenities>
            <Button>
            More details
            </Button>


            
        </Wrapper>
    )
}

export default Rooms
