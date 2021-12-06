import React from 'react'
import styled from 'styled-components'
import Card1 from '../../img/card1.jpg'
import Card2 from '../../img/card2.jpg'
import {Link } from 'react-router-dom'

const Div = styled.div`
margin-left: 60px;
`

const Title = styled.h2`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 60px;
letter-spacing: -0.005em;
padding-bottom: 24px;
color: #23262F;
`
const Line = styled.div`
height: 2px;
width: 494px;
background: #F4F5F6;
margin-bottom: 40px;
`
const Tour = styled.div`
width: 470px;
padding-bottom: 20px;

`
const TourTitle = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 44px;
letter-spacing: -0.005em;
padding-bottom: 30px;
color: #141416;
`
const Input = styled.input`
height: 64px;
outline: none;
border: none;
background: #F4F4F6;
border-radius: 15px;
width: 470px;
padding:  12px 20px 0 20px;
`
const Label = styled.label`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #141416;
position: absolute;
right: 90%;
/* top: 3%; */

`
const InputWrapper = styled.div`
position: relative;
width: 470px;
padding-bottom: 20px;

`
const CreditCard = styled.div`

`
const CardTitle = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 44px;
letter-spacing: -0.005em;
color: #141416;
padding-bottom: 20px;
`
const Images = styled.div`
width: 417px;
height: 51px;
border: 2px solid red;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
`
const Image = styled.img`
border: 2px solid blue;
width: 96.01px;
height: 48.53px;

`
const CardNumber = styled.form`

`
const Numbers = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 19px;

`
const CardNumTitle = styled.label`
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #353945;
padding-bottom: 12px;
`
const NumInput = styled.input`
background: #F4F5F6;
border: 1px solid #878CFF;
box-sizing: border-box;
border-radius: 10px;
border: none;
outline: none;
width: 471px;
height: 50px;
padding: 13px 20px;
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #4F4F4F;
`
const BottomNum = styled.div`
display: flex;
padding-bottom: 18px;
`
const Save = styled.div`
display: flex;
align-items: center;
padding-bottom: 41px;
`
const CheckLab = styled.label`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 27px;
color: #4F4F4F;
`
const Checkbox = styled.input`
width: 24.01px;
height: 23.95px;
margin-right: 12px;
`
const Button = styled.button`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
color: #FFFFFF;
padding: 11.5px 20px;
background: #3B71FE;
border-radius: 36px;
border: none;
outline: none;
cursor : pointer;
`
const CardImages = styled.div`
display: flex;
align-items: center;
padding-bottom: 40px;
`
const CardImage2 = styled.img`
width: 335px;
/* border: 2px solid red; */
height: 162px;
margin-right: 20px;
border-radius: 20px;
`
const CardImage = styled.img`
width: 335px;
/* border: 2px solid red; */
height: 162px;
border-radius: 20px;

`
const CVC1 = styled.div`
display: flex;
flex-direction: column;
padding-right: 43px;
`
const CVC = styled.div`
display: flex;
flex-direction: column;
`
const DateInput = styled.input`
background: #F4F5F6;
border: 2px solid #EAEAEA;
box-sizing: border-box;
border-radius: 10px;
width: 214px;
height: 50px;
padding: 13px 20px;
outline: none;
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #4F4F4F;
`
const Date = styled.div`flex-direction
`
const PaymentLeft = () => {
    return (
        <Div>
            <Title>Confirm your Book</Title>
            <Line></Line>
            <Tour>
                <TourTitle>Your tour</TourTitle>

                <InputWrapper>
                <Input/>
                <Label>Date</Label>
                </InputWrapper>

                <InputWrapper>
                <Input/>
                <Label>Traveller</Label>
               </InputWrapper>
              
            </Tour>

            <CreditCard>
                <CardTitle>Creadit Cards</CardTitle>
                <Images>
                    <Image src="" alt=""/>
                    <Image src="" alt=""/>
                    <Image src="" alt=""/>
                    <Image src="" alt=""/>
                </Images>
                <Line></Line>

                <CardImages>
                    <CardImage2 src={Card1} alt=""/>
                    <CardImage src={Card2} alt=""/>
                </CardImages>
            </CreditCard>

            <CardNumber>
                <Numbers>
                <CardNumTitle htmlFor="card">Card Number</CardNumTitle>
               <NumInput id="card" type="text" placeholder="5884 6241 4444 3333"/>
               </Numbers>

               <BottomNum>

                    <CVC1>
                     <CardNumTitle htmlFor="date">Expiry Date</CardNumTitle>
                    <DateInput id="date" type="text" placeholder="MM / YY"/>
                    </CVC1>

                    <CVC>
                     <CardNumTitle htmlFor="cv">CVC/CVV</CardNumTitle>
                    <DateInput id="cv" type="text" placeholder="****"/>
                    </CVC>

                    
                </BottomNum>

                <Save>
                    <Checkbox id="save" type="checkbox"/>
                    <CheckLab htmlFor="save">Save Card</CheckLab>
                    
                 </Save>
                    <Link to="/congrat"><Button type="submit">Confirm and reserve</Button></Link>

            </CardNumber>
            
        </Div>
    )
}

export default PaymentLeft
