import React from 'react'
import DetailsIntro from '../components/MyComponents/DetailsIntro'
import Filter from '../components/MyComponents/Filter'
import styled from 'styled-components'
import FilterLeft from '../components/MyComponents/FilterLeft'
import FooterCard from '../components/MyComponents/FooterCard'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
max-width: 1440px;
width: 100%;
margin: 0 auto;
`
const Div = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
margin-top: 160px;
`

const Details = () => {
    return (
        <>
        <DetailsIntro/>

        <Wrapper>
           <Div>
           <Filter/>
           <FilterLeft/>
           </Div>
        </Wrapper>

        <FooterCard/>
        </>
    )
}

export default Details
