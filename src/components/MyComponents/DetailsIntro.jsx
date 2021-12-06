import React from 'react'
import styled from 'styled-components';
import Dropdowns from './Dropdown';
import Filter from './Filter';
import FilterLeft from './FilterLeft';
import LocationOne from './LocationOne';

const Wrapper = styled.div`
position: relative;
`

const IntroBack = styled.div`
    height: 206.58px;
    background: #F4F5F6;
    content: "";
`
const Search = styled.div`
width: 1170px;
margin: 0 auto;
height: 205px;
background: #FFFFFF;
box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
border-radius: 20px;
position: absolute;
top: 50%;
left: 15.5%;
padding: 41px 60px;
`
const Line = styled.div`
width: 1440px;
/* height: 2px; */

margin: 0 auto;
background: linear-gradient(90deg, rgba(237, 237, 237, 0.4) 9.24%, #EDEDED 47.09%, rgba(237, 237, 237, 0.4) 100%);
`


const DetailsIntro = () => {
    return (
        <Wrapper>
            <IntroBack>
            Home
            </IntroBack>
            <Search>
                <Dropdowns/>
                <LocationOne/>

            </Search>
            <Line>
               
            </Line>
        </Wrapper>
    )
}

export default DetailsIntro
