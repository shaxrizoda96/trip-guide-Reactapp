import React from 'react'
import styled from 'styled-components'
import Intro from '../components/MyComp/Intro'
import Rooms from '../components/MyComp/Rooms'
import Card from '../components/MyComp/Card'
import FooterCard from '../components/MyComponents/FooterCard';
const BodyWrap = styled.div`
width: 100%;
max-width: 1440px;

margin: 0 auto;
`
const Body = styled.div`
display: flex;
/* width: 1440px; */
margin: 0 auto;
align-items: flex-start;
/* justify-content: space-between; */
`
const HotelList = () => {
    return (
        
        <div>
            <BodyWrap>
            <Intro/>
            <Body>
            <Rooms/>
            <Card/>
            </Body>
            </BodyWrap>
            
        </div>
    )
}

export default HotelList
