import React from 'react'
import { useTranslation } from 'react-i18next';
import {Navigate, useNavigate } from "react-router-dom";
import Filter from '../components/MyComponents/Filter'
import styled from 'styled-components'
import SearchIntro from '../components/SearchIntro';
import FilterLeft from '../components/MyComponents/FilterLeft'
import Subscribe from '../components/Subscribe'


const DetailsSection = styled.section`
background:${(props) => props.theme.hotelsbgcolor};
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
max-width: 1440px;
width: 100%;
margin: 0 auto;
`
const Container = styled.div`
padding: 40px 
`
const Pages = styled.div`
display: flex;
padding-top: 40px;
`
const HomePage = styled.button`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color: ${(props) => props.theme.homePageColor};
margin-right: 5px;
border: none; 
background: transparent;
`
const RideIcon = styled.i`
color: ${(props) => props.theme.homePageColor};
font-size: 10px;
`
const HotelListPage = styled.button`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color:#B1B5C3;
border: none; 
background: transparent;
`

const Div = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
margin-top: 160px;
`
const MainSearchsection = styled.section`
padding-top: 180px;
margin-bottom: 60px;`

const Details = () => {
    let History = useNavigate()
    const hundleSubmit = (el)=>{
        el.preventDefault()
        History('/')
      }
      const {t}=  useTranslation()
    return (
        <>
       
            <DetailsSection>
                <Wrapper>
                    <Container>
                        <Pages>
                            <HomePage onClick={hundleSubmit}>{t('pageHome')} <RideIcon className='icon-rightside'></RideIcon></HomePage>
                            <HotelListPage>{t('pagelist')}</HotelListPage>
                        </Pages>
                    </Container>
                        <MainSearchsection><SearchIntro/></MainSearchsection>
                    <Div>
                        <Filter/>
                        <FilterLeft/>
                    </Div>
                </Wrapper>
                <Subscribe />
            </DetailsSection>
        </>
    )
}

export default Details
