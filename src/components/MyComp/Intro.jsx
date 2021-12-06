import React from 'react'
import styled from 'styled-components'
import {AiFillStar} from 'react-icons/ai'
import { GrLocation}  from 'react-icons/gr';
import Slide1 from '../../img/slide1.jpg'
import Slide2 from '../../img/slide2.jpg'
import Slide3 from '../../img/slide3.jpg'
import Slide4 from '../../img/slide4.jpg'
const Wrapper = styled.div`
   /* width :1440px ;
   margin: 0 auto; */
`
const Links = styled.div`
    display: flex;
    flex-direction: column;
    padding:40px 28px ;
`
const Spans = styled.div`
display: flex;
align-items: center;

`
const Rate = styled.div`
   padding :0 11px ;
   display: flex;
   align-items: center;
   font-family: DM Sans;
   font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #84878B;

`
const Rates = styled.div`
   display: flex; 
`
const Span = styled.div`
    padding: 5px;
`

const Photos = styled.div`
    display: flex;
    width: 1240px;
    padding-bottom: 56px;
    margin: 0 auto;
    /* border: 2px solid red; */

`
const Left = styled.div`
    padding-right: 15.6px;

`
const BigPicture = styled.img`
border-bottom-left-radius: 25px;
border-top-left-radius: 25px;
    
`
const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`
const Img = styled.img`
    
`
const Buttons = styled.div`
    display: flex;
    padding-bottom: 20px;
    align-items: center;
`
const ButtonGreen = styled.div`
    padding-right: 17px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #38B345;
    padding: 5.5px;
    border: none;
    outline: none;
    background: rgba(56, 179, 69, 0.1);
    border-radius: 5px;
    cursor: pointer;
    margin-right: 16px;
`

const ButtonOrange = styled.button`
border: none;
outline: none;
padding: 5px 9px;
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
color: #FD9704;
background: rgba(253, 151, 4, 0.1);
border-radius: 5px;
cursor: pointer;
margin-right: 16px;

`
const ButtonBlue = styled.button`
border: none;
outline: none;
cursor: pointer;
padding: 5px 15.5px;
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
color: #0B3BA7;
background: #EAEEFA;
border-radius: 5px;
margin-right: 16px;

`
const ButtonPink = styled.button`
border: none;
outline: none;
cursor: pointer;
padding: 5px 20px;
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
color: #E96594;
background: #FCEBF1;
border-radius: 5px;
margin-right: 16px;
`
const ButtonBrown = styled.button`
border: none;
outline: none;
cursor: pointer;
padding: 5px 18px;
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
color: #DC6E3D;
background: #FBEEE8;
border-radius: 7px;
margin-right: 18px;

`
const Ratestars = styled.div`
    
`
const Title = styled.h1`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 70px;
letter-spacing: -0.005em;
color: #252525;

    
`
const Intro = () => {
    return (
        <Wrapper>
            <Links>
            <Spans><Span>Home </Span> <Span>Hotel list </Span> <Span>Hotel details</Span></Spans>
            <Title>Switzerland Hotels and Places to Stay </Title>
            <Rates><Rate><AiFillStar style={{color: '#FFC542', width: '18px', height: '18px', marginRight:'9.8px'}}/>4.8 (122 reviews)</Rate>  
            <Rate><GrLocation style={{width:'16px', height:'16px', color:'#84878B'}}/>Zuich town, Switzerland</Rate></Rates>
            </Links>

            <Photos>
                <Left>
                    <BigPicture src={Slide1} alt="photo"/>
                    



                </Left>

                <Right>
                    <Img  style={{borderTopRightRadius: '25px'}} src={Slide2} alt="photo"/>
                    <Img src={Slide3} alt="photo"/>
                    <Img style={{borderBottomRightRadius: '25px'}} src={Slide4} alt="photo"/>
                </Right>
            </Photos>

            <Buttons>
                <ButtonGreen>5.0</ButtonGreen>
                <ButtonOrange>Perfect</ButtonOrange>
                <ButtonBlue>Hotels</ButtonBlue>
                <ButtonPink>Building</ButtonPink>
                <ButtonBrown>Top value</ButtonBrown>
                <Ratestars>
                <AiFillStar style={{color: '#FFC542', width: '22px', height: '21px', marginRight:'9.8px'}}/>
                <AiFillStar style={{color: '#FFC542', width: '22px', height: '21px', marginRight:'9.8px'}}/>
                <AiFillStar style={{color: '#FFC542', width: '22px', height: '21px', marginRight:'9.8px'}}/>
                <AiFillStar style={{color: '#FFC542', width: '22px', height: '21px', marginRight:'9.8px'}}/>
                <AiFillStar style={{color: '#FFC542', width: '22px', height: '21px', marginRight:'9.8px'}}/>
                </Ratestars>
            </Buttons>
            
        </Wrapper>
    )
}

export default Intro
