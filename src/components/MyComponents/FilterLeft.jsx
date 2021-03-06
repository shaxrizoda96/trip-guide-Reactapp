import React,{ useState, useEffect} from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {Link, Navigate, useNavigate } from "react-router-dom";
import apiCalls from '../../config/api';
import {AiFillStar} from 'react-icons/ai';
import { RiFlag2Line } from 'react-icons/ri';
import { GrLocation}  from 'react-icons/gr';
import {BsCalendar2Day} from 'react-icons/bs';
import {MdOutlineAirplanemodeActive} from 'react-icons/md';
import {HiWifi} from 'react-icons/hi';
import {RiParkingBoxLine} from 'react-icons/ri';
import {BiBook} from 'react-icons/bi';
import {VscGlobe} from 'react-icons/vsc';
import {BiCoinStack} from 'react-icons/bi';
import {BiLoaderCircle} from 'react-icons/bi'

const Card = styled.div`
display: flex;
border: 1px solid #E7ECF3;
box-sizing: border-box;
border-radius: 20px;
width: 970px;
height: 465px;
margin-bottom: 50px;
`
const CardRight = styled.div`
padding: 30px;

`

const HotelPhoto = styled.img`
width: 420px;
height: 465px;
border-bottom-left-radius: 15px;
border-top-left-radius: 15px;

`
const CountryName = styled.h1`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 60px;
letter-spacing: -0.005em;
color: #23262F;

`

const Span = styled.div`
display: flex;
align-items: center;
padding-bottom: 43px;

`
const Spans = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #84878B;
display: flex;
align-items: center;

`
const Span1 = styled.div`
margin-right: 20px;
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #84878B;
display: flex;
align-items: center;

`

const Info  = styled.div`
display: flex; 
align-items: center;
padding-bottom: 15px;
`
const Infos  = styled.div`
display: flex; 
align-items: center;
padding-bottom: 40px;
`
const InfoFas  = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`

const Buttons = styled.div`
display: flex;
flex-direction: column;

`
const Button = styled.button`
    display: flex;
    cursor: pointer;
    align-items: center;
    background: #3B71FE;
    box-shadow: 0px 5px 20px rgba(20, 92, 230, 0.14);
    border-radius: 23px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    padding: 10px 40px;
    border: none;

`
const P = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 41px;
text-align: center;
color: #23262F;
    
`
const Text = styled.span`
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #141416;



`
const Spantext = styled.span`
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
color: #3B3E44;
`
const Box = styled.div`
    display: flex;
    align-items: center;
    margin-right: 19px;

`
const FasInfo = styled.div`
display: flex;
align-items: center;
margin-bottom: 12.5px;
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;

`
const ButtonPrice = styled.button`
margin-bottom: 20px;
display: flex;
justify-content: space-between;
align-items: center;
background: #F4F5F6;
border-radius: 37px;
padding: 4px 19px;
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #84878B;
border: none;
`
const HotelListSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
/* padding-bottom: 120px; */

`
const ButtonView = styled.button`
padding: 10px 41.5px 10px 41.5px;
border: 1px solid #B1B5C4;
box-sizing: border-box;
border-radius: 47px;
width: 176px;
height: 46px;
background-color: white;
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #141416;
display: flex;
align-items: center;
cursor: pointer;

`
const IconLoading = styled.i`

`
const HotelsBtn = styled.i``

const FilterLeft = () => {

    const {t} = useTranslation();
    let History = useNavigate()
    const hundleSubmit = (el)=>{
        el.preventDefault()
        History('/list:id')
      }
     
      const [hotelList, setHotelList] = useState([]);
      const [error, setError] = useState('');
    
      useEffect(() => {
          const getHotels = async () => {
            try {
                const data = await apiCalls.getHotels();
                setHotelList(data);
            } catch (error) {
                setError(error.message);
            }
           
          }
          getHotels();
        },[]);

        const mappedHotels = hotelList.map( (el, i) => (
            <Card key={i}>
                <HotelPhoto src={el.photo}></HotelPhoto>
                <CardRight>
                    <CountryName>{el.name}</CountryName>
                    <Span>
                        <Span1><AiFillStar style={{marginRight: '10px', color: 'yellow', width:'18px', height:'18px'}}/><span style={{color: 'black',fontFamily: 'DM Sans', fontStyle: 'normal', fontWeight: '500',fontSize: '14px',lineHeight: '21px',color: '#3B3E44'}}>4.8</span> ({el.reviews}) reviews</Span1>
                        <Spans><RiFlag2Line style={{marginRight: '10px'}}/>{el.location}</Spans>
                    </Span>

                    <Info>
                        <Box><GrLocation style={{marginRight: '12px',color: '#84878B', width: '16px', height: '20px'}}/><Text>{el.location}</Text></Box>
                        <Box> <BsCalendar2Day style={{marginRight: '12px',color: '#84878B', width: '16px', height: '20px'}}/> <Text>15.05.2021-16.05.2021</Text></Box>
                    </Info>
                    <Infos>
                        <MdOutlineAirplanemodeActive style={{marginRight: '12px',color: '#84878B', width: '20px', height: '20px'}}/><Text>{t('depature')}</Text>
                    </Infos>

                    <Bottom>
                        <InfoFas>
                            <FasInfo><HiWifi style={{marginRight: '12px',color: '#84878B', width: '20px', height: '20px'}} /> <Spantext>{t('li1')}</Spantext></FasInfo>
                            <FasInfo><RiParkingBoxLine style={{marginRight: '12px',color: '#84878B', width: '20px', height: '20px'}}/> <Spantext>{t('li2')}</Spantext></FasInfo>
                            <FasInfo> <BiBook style={{marginRight: '12px',color: '#84878B', width: '20px', height: '20px'}}/> <Spantext>{t('li3')}</Spantext></FasInfo>
                            <FasInfo> <VscGlobe style={{marginRight: '12px',color: '#84878B', width: '20px', height: '20px'}}/><Spantext>{t('li4')} </Spantext></FasInfo>
                            <FasInfo> <BiCoinStack style={{marginRight: '12px',color: '#84878B', width: '20px', height: '20px'}}/><Spantext>{t('li5')}</Spantext></FasInfo>
                        </InfoFas>

                        <Buttons>
                            <ButtonPrice>
                                <P>$320</P>{t('fortwo')}
                            </ButtonPrice>
                                <Link to={`/list/${el.id}`}><Button>{t('bookNow')}</Button></Link>
                        </Buttons>
                    </Bottom>

                </CardRight>
            </Card>

        ))

    return (
        <HotelListSection>
            {mappedHotels}
            
            <HotelsBtn>
                <ButtonView><IconLoading className='icon-loading'/>{t('view')}</ButtonView>
            </HotelsBtn>
        </HotelListSection>
    )
}

export default FilterLeft;
