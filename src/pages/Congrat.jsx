import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {FaLaptopCode} from 'react-icons/fa'
import {CgCalendarDates} from 'react-icons/cg'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {MdPayment} from 'react-icons/md'
import Last from '../img/last.jpg'

const Wrapper = styled.div`
    width: 1440px;
    margin: 0 auto;
`
const Links = styled.div`
    display: flex;
    align-items: center;
    padding: 45px 75px;
`
const Booked = styled.div`

`
const Con = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 21px;
color: #3B3E44;
padding-bottom: 20px;
`
const Title = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 60px;
color: #3B3E44;
padding-bottom: 24px;
`
const Line = styled.div`
height: 2px;
width: 822px;
background: #E7ECF3;
margin-bottom: 37px;
`
const City = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 44px;
letter-spacing: -0.005em;
color: #23262F;
padding-bottom: 27px;
`
const RoomRate = styled.div`
display: flex;
align-items: center;
padding-bottom: 24px;
`
const Rate = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #353945;
padding-right: 37px;
`
const Room = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #353945;

`
const Line1 = styled.div`
height: 1px;
width: 380px;
background: #F1F2F4;
margin-bottom: 25px;
`
const Info = styled.div`
display: flex;
padding-bottom: 30px;
`
const DateInfo = styled.div`
padding: 7px 36px 11px 20px;
background: #F4F4F6;
border-radius: 12px;
margin-right: 24px;
`
const DateNum = styled.div`

`
const Num = styled.div`

`
const Reserve = styled.div`
padding: 19px 25px 37px 25px;
background: #F4F4F6;
border: 1px solid #F0EFEF;
box-sizing: border-box;
border-radius: 10px;
width: 380px;
height: 283px;
margin-bottom: 30px;
margin-right: 120px;


`
const ReserveTitle = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 41px;
color: #23262F;
padding-bottom: 24px;
`
const IconText = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #777E91;
`
const Items = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-bottom: 22px;
`
const Id = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: right;
color: #353945;
`
const Button = styled.button`

padding: 13px 35px;
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 130.2%;
color: #FFFFFF;
background: #3B71FE;
border-radius: 34px;
border: none;
outline: none;
cursor: pointer;
`
const ImageLast = styled.img`

`
const DivWrapper = styled.div`
display: flex;
align-items: flex-end;

`


const Congrat = () => {
    return (
        <Wrapper>

            <Links>
            <Link to="/" >Home</Link>
            
            <Link to="/list" >Hotel list</Link>
            <Link to="/details" >Hotel details</Link>
            <Link to="/payment" >Confirm and pay</Link>
            <Link to="/congrats" >Congratulations</Link>

            </Links>

            <Booked>
                <Con>Congratulations!</Con>
                <Title>Your trip has been booked!</Title>
                <Line></Line>

                <City>Switzerland Hotels and Places to Stay </City>

                <RoomRate><Rate>4.8 (122 reviews)</Rate><Room>1 bad room  +  Private room</Room></RoomRate>
                <Line1></Line1>

                <Info>
                    <DateInfo>
                        <DateNum>Dates</DateNum>
                        <Num>May 15 - 22, 2021 </Num>
                    </DateInfo>

                    <DateInfo>
                        <DateNum>Travelers</DateNum>
                        <Num>1 Passenger </Num>

                    </DateInfo>
                </Info>
               <DivWrapper>
               <Reserve>
                    <ReserveTitle> Reserve details</ReserveTitle>
                    <Items> 
                        <IconText> <FaLaptopCode/>Booking code</IconText>
                        <Id>FD_158456</Id>
                        
                    </Items>

                    <Items> 
                        <IconText><CgCalendarDates/>Date</IconText>
                        <Id>30 Apr, 2021</Id>
                    </Items>
                    
                    <Items> 
                        <IconText> <RiDeleteBin6Line/>Total</IconText>
                        <Id>$833</Id>
                    </Items>
                    <Items> 
                        <IconText> <MdPayment/>Payment method</IconText>
                        <Id>Creadit card</Id>
                    </Items>
                </Reserve>

                <ImageLast src={Last} alt=""/>
                   </DivWrapper>

               <Link to="/" >  <Button>Go To Your Home </Button></Link>
            </Booked>

            
        </Wrapper>
    )
}

export default Congrat
