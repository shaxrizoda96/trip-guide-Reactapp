import {Navigate, useNavigate } from "react-router-dom";
import {useTranslation} from 'react-i18next'
import { Container, Search, NameActive, TopMenus, Calendar} from "../styled"
import {RiFlightTakeoffFill} from 'react-icons/ri'
import {BiCar}  from 'react-icons/bi'
import {FaBed}  from 'react-icons/fa'
import styled, { ThemeContext } from 'styled-components';
import { useState } from "react"
import  Select  from "react-select";
import { useRef } from "react"
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../style.css'

  const Booking =  styled.div`
  display:flex;
  margin-bottom: 25px;
  `
  const ServiceActiv =  styled.div`
  display:flex;
  align-items: center;
  margin-right: 30px;
  position: relative;
  `

const Name = styled.h5`
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 18px;
letter-spacing: 0em;
color: #84878B;
margin-bottom:0;
margin-left: 8px;
margin-top: 0;
`

const SearchHotel = styled.form`
display:flex;
align-items: center;
margin-top: 27px;
`

const SearchInputsName = styled.h4`
font-size: 18px;
font-weight: 500;
line-height: 23px;
color:${(props) => props.theme.calendarColor};
margin: 0;
`
const LocationSearch = styled.div`
width: 332px;
padding: 8px 20px;
border-radius: 8px;
background:${(props) => props.theme.bgCalandar};
border: 1px solid ${(props) => props.theme.calendarBorder};
margin-right: 9px;
`
const Form = styled.form`
position: relative;
`


const DataInput = styled.input`
outline: none;
width: 200px;
background-color: transparent;
border-width: initial;
border-style: none;
border-color: initial;
border-image: initial;
outline: none;
padding: 0px;
`

const Icon = styled.i`
color: #B1B5C3;
font-size: 10px;
padding: 10px 9px;
border-radius: 50%;
background: ${(props) => props.theme.iconSearchcolor};
position: absolute;
top: 15px;
left: -19px;
text-align: center;
`


const PassengerCount = styled.div`
position: relative;
`

const Content = styled.div`
position: absolute;
bottom: 90px;
right: -249px;
width: 350px;
display: none;
background: ${(props) => props.theme.dropcontentbgColor};
box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
border-radius: 16px;
padding: 21px;
`
const SearchCard
 = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
&:not(:last-child){

  border-bottom: 1px solid  ${(props) => props.theme.borderBottomColor};
}
padding-top: 11px;
padding-bottom: 12px;
`

const ContentText = styled.h5`
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: ${(props) => props.theme.passengerNameColor};
margin-top:0;
margin-bottom: 5px;
`

const ContentAge = styled.span`
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px;
color: ${(props) => props.theme.passengerageColor};
`

const ContentBtn = styled.button`
border: 1px solid  ${(props) => props.theme.contentBtn};
border-radius: 50%;
color: ${(props) => props.theme.contentBtn};
height: 32px;
width: 31px;
`

const UserCount = styled.span`
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 16px;
color: #777E90;
margin-left: 12px; 
margin-right: 12px;
`

const IconBottom = styled.span`
display: inline-block;
margin-left: 10px;
color: #84878B;
font-size: 10px;
transform: rotate(0deg);
`
const Spanicon = styled.span`
color: ${(props) => props.theme.mdhotelIcon}
`
const SearchBtn = styled.button`
background: #3B71FE;
font-family: DM Sans;
font-size: 20px;
font-weight: 700;
line-height: 26px;
color: #FFFFFF;
padding: 21px 42px;
border: none; 
border-radius: 10px;
cursor: pointer;
margin-left: 30px;
`
const SearchIntro = ()=>{
  const {t} = useTranslation()
 let History = useNavigate()
    
  const [passengers, setPassengers] = useState(0)
  const [child, setChild] = useState(0)
  const [infant, setInfant] = useState(0)
  const [countries, setCountries] = useState();
  const total = passengers + child + infant
  const cityName = useRef(null)
  const checkIn = useRef(null)
  const checkOut = useRef(null)

  const cityNames = [
    { value: "Dubai", label: "Dubai" },
    { value: "Doha", label: "Doha" },
    { value: "Darling Harbour", label: "Darling Harbour" },
    { value: "Dhaka", label: "Dhaka" },
    { value: "Chili", label: "Chili" },
    { value: "Russia", label: "Russia" },
    { value: "America", label: "America" },
    { value: "Japan", label: "Japan" },
    { value: "Italy", label: "Italy" },
    { value: "Karea", label: "Karea" },
    { value: "Fransia", label: "Fransia" },
    { value: "Uzbekistan", label: "Uzbekistan" },
  ]

 
  const hendleActive = (e)=>{
    if(e.target.className ==='total'){
      e.target.className = 'total active'
    } else if(e.target.className ==='total active' ){
      e.target.className ='total'
    }
  }

  const hundleSubmit = (el)=>{
    el.preventDefault()
    console.log(cityName.current.controlRef.innerText);
    console.log(checkIn.current.value);
    console.log(checkOut.current.value);
    History('/details')
  }
  const hendleCities = (newValue)=>{
    setCountries(newValue.value)
  }

    return(
      <Container>
        <Search>
          <TopMenus>
              <Booking>
                <Tabs>
                  <TabList>
                    <Tab>
                      <ServiceActiv>
                        <Spanicon><FaBed style={{fontSize: '25px'}}/></Spanicon>
                        <NameActive>{t('searchName')}</NameActive>
                      </ServiceActiv>
                    </Tab>
                    <Tab>
                      <ServiceActiv>
                        <Spanicon>  <RiFlightTakeoffFill style={{fontSize: '25px', color:'#84878B'}}/> </Spanicon>
                        <Name>{t('searchName2')}</Name>
                      </ServiceActiv>
                    </Tab>
                    <Tab>
                      <ServiceActiv>
                          <Spanicon> <BiCar style={{fontSize: '25px', color:'#84878B'}}/></Spanicon>
                          <Name>{t('searchName3')}</Name>
                      </ServiceActiv>
                    </Tab>
                  </TabList>
                </Tabs>
              </Booking>
              <PassengerCount>
                  <button onClick={hendleActive} className="total">{total} {t('passanger')}<IconBottom className="icon-bottom"></IconBottom></button>
                  <Content className="content">
                    <SearchCard>
                      <div>
                        <ContentText>{t('contentText')}</ContentText>
                        <ContentAge>{t('contentAge')}</ContentAge>
                      </div>
                      <div>
                        <ContentBtn onClick={() => {setPassengers(passengers > 0 ? passengers - 1 : 0)}}><i className="icon-minus"></i></ContentBtn>
                        <UserCount>{passengers}</UserCount>
                        <ContentBtn onClick={() => {setPassengers(passengers + 1)}}><i className="icon-plus"></i></ContentBtn>
                      </div>
                    </SearchCard>
                    <SearchCard>
                      <div>
                        <ContentText>{t('contentText2')}</ContentText>
                        <ContentAge>{t('contentAge2')} </ContentAge>
                      </div>
                      <div>
                        <ContentBtn onClick={() => {setChild(child > 0 ? child - 1 : 0)}}><i className="icon-minus"></i></ContentBtn>
                        <UserCount>{child}</UserCount>
                        <ContentBtn onClick={() => {setChild(child + 1)}}><i className="icon-plus"></i></ContentBtn>
                      </div>
                    </SearchCard>
                    <SearchCard>
                      <div>
                        <ContentText>{t('contentText3')}</ContentText>
                        <ContentAge>{t('contentAge3')}</ContentAge>
                      </div>
                      <div >
                        <ContentBtn onClick={() => {setInfant(infant > 0 ? infant - 1 : 0)}}><i className="icon-minus"></i></ContentBtn>
                        <UserCount>{infant}</UserCount>
                        <ContentBtn onClick={() => {setInfant(infant + 1)}}><i className="icon-plus"></i></ContentBtn>
                      </div>
                    </SearchCard>
                  </Content> 
              </PassengerCount>
          </TopMenus>
          <SearchHotel>
            <LocationSearch>
              <Form >
                <SearchInputsName  >{t('searchInput')}</SearchInputsName>
                <Select ref={cityName} options={cityNames} placeholder={t('placeholder1')} onClick={hendleCities} />
              </Form>
            </LocationSearch>
            <Calendar >
              <SearchInputsName >{t('searchInput2')}</SearchInputsName>
              <DataInput ref={checkIn} className='check' type='date' placeholder={t('placeholder2')}/>
              <Icon className='icon-rightleft'></Icon>
            </Calendar>
            <Calendar >
              <SearchInputsName >{t('searchInput3')}</SearchInputsName>
              <DataInput ref={checkOut} className='check' type='date' placeholder={t('placeholder2')}/>
              <Icon className='icon-rightleft'></Icon>
            </Calendar>
            <SearchBtn onClick={hundleSubmit}>{t('searchBtn')}</SearchBtn>
          </SearchHotel>
      </Search>
    </Container>
    )
}

export default SearchIntro;
