import {Navigate, useNavigate } from "react-router-dom";
import { Container } from "../styled"
import {useTranslation} from 'react-i18next'
import styled from "styled-components"
import Subscribe from "../components/Subscribe";
import Congratulation from '../components/Congratulation'


const HotelCongratulationBg = styled.div`
background:  ${(props) => props.theme.subsccribeInHotellBg};
`
const Pages = styled.div`
display: flex;
padding-top: 40px;
`

const Backpage = styled.button`
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
const Congratulationpage = styled.button`
font-size: 14px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
color: #B1B5C3;
border: none; 
background: transparent;
`

const Congrat = ()=>{
    const {t} = useTranslation();
    let History = useNavigate()
    const hundleSubmit = (el)=>{
        el.preventDefault()
        History('/')
      }
      const hundleSubmit2 = (el)=>{
        el.preventDefault()
        History('/details')
      }
      const hundleSubmit3 = (el)=>{
        el.preventDefault()
        History('/list/:id')
      }
      const hundleSubmit4 = (el)=>{
        el.preventDefault()
        History('/payment')
      }
    return(
        <HotelCongratulationBg>

            <Container>
                <Pages>
                    <Backpage onClick={hundleSubmit}>{t('pageHome')} <RideIcon className='icon-rightside'/></Backpage>
                    <Backpage onClick={hundleSubmit2}>{t('pagelist')} <RideIcon className='icon-rightside'/></Backpage>
                    <Backpage onClick={hundleSubmit3}>{t('details')}<RideIcon className='icon-rightside'/> </Backpage>
                    <Backpage onClick={hundleSubmit4}>{t('paymnet')}<RideIcon className='icon-rightside'/>  </Backpage>
                    <Congratulationpage>Congratulations</Congratulationpage>
                </Pages>
                <Congratulation/>
                <Subscribe/>
            </Container>
        </HotelCongratulationBg>

    )
}

export default Congrat;