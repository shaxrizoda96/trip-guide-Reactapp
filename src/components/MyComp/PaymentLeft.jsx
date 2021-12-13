import React from 'react'
import styled from 'styled-components'
import {useTranslation} from 'react-i18next'
import {Navigate, useNavigate } from "react-router-dom";

const PaymentsLeft = styled.section`
max-width: 60%;
`
const Confirm = styled.h2`
font-size: 40px;
font-weight: 700;
line-height: 60px;
letter-spacing: -0.005em;
margin: 48px 0px 66px 0px;
color: ${(props) => props.theme.confirmColor};
border-bottom: 1px solid ${(props) => props.theme.priceBg};
`

const YourTour = styled.h3`
font-size: 34px;
font-weight: 700;
line-height: 44px;
letter-spacing: -0.005em;
margin: 40px 22px;
color: ${(props) => props.theme.yourtour};
`

const ToursInputs = styled.div`
position: relative;
background: ${(props) => props.theme.priceBg};
border-radius: 15px;
width: 470px;
padding: 7px 20px;
margin-bottom: 20px;
`
const InputName = styled.h4`
font-size: 16px;
font-weight: 500;
line-height: 24px;
color:${(props) => props.theme.inputNAme};

`

const Input = styled.input`
border: none;
outline: none;
background:${(props) => props.theme.priceBg};
`

const PenIcon = styled.i`
color: #84878B;
font-size: 20px;
position: absolute;
top: 20px;
right: 20px;
`
const CreaditCard = styled.div`
display: flex;
align-items: center;
position: relative;
border-bottom: 2px solid${(props) => props.theme.priceBg};
padding-bottom: 30px;
width: 525px;
`
const Cards = styled.div`
background: rgba(47, 128, 237, 0.05);
opacity: 0.67;
box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.1);
border-radius: 6px;
padding: 4px 27px;
border: 0.5px solid #145CE6;
margin-right: 11px;
`
const CardImg = styled.img`
position: absolute;
top: -3px;
left: 85px;
`
const CardsPay = styled.div`
background: ${(props) => props.theme.cardSponsorColor};
border: 0.5px solid${(props) => props.theme.sponsorBorder};
box-sizing: border-box;
border-radius: 6px;
padding: 12px;
width: 96px;
height: 48px;
text-align: center;
margin-right: 11px;
`
const CardsPayvisa = styled.div`
background: ${(props) => props.theme.cardSponsorColor};
border: 0.5px solid ${(props) => props.theme.sponsorBorder};
box-sizing: border-box;
border-radius: 6px;
padding: 17px;
width: 96px;
height: 48px;
text-align: center;
margin-right: 11px;

`
const CardsPayamerican = styled.div`
background: ${(props) => props.theme.cardSponsorColor};
border: 0.5px solid${(props) => props.theme.sponsorBorder};
box-sizing: border-box;
border-radius: 6px;
padding: 10px;
width: 96px;
height: 48px;
text-align: center;
margin-right: 11px;
display: ${(props) => props.theme.american};
`
const PlasticCard = styled.div`
display: flex;
margin: 52px 0px 40px 0px;
`
const CardsSize = styled.div`
background: #CED9FD;
border-radius: 20px;
width:  400px;
padding: 27px;
margin-right: 20px;
`

const CardsSize2 = styled.div`
border-radius: 20px;
width: 400px;
padding: 27px;
background: #BDDBA6;
`
const LogoCard = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const UnionIcon = styled.i`
font-size: 28px;
`

const CardNumber = styled.p`
font-size: 16px;
font-weight: 500;
line-height: 30px;
letter-spacing: -0.02em;
color: #3D4852;
`

const Marka = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const NameCard = styled.span`
font-size: 16px;
font-weight: 500;
line-height: 30px;
letter-spacing: -0.02em;
color: #3D4852;
`

const AboutCard = styled.h5`
font-size: 16px;
font-weight: 400;
line-height: 24px;
margin-bottom: 15px;
color:${(props) => props.theme.textsColor};
`

const DatesCard = styled.div`
display: flex;
`

const CardInput = styled.div`
position: relative;
width: 471px;
margin: 17px 0px 21px 0px;
`
const CardNumbders = styled.input`
border: 1px solid #878CFF;
background: ${(props) => props.theme.cardNumbders};
padding: 13px 20px;
border-radius: 10px;
width: 471px;
`

const CardsIcon = styled.i`
color: #878CFF;
position: absolute;
top: 15px; 
right: 17px;
`
const CVC = styled.div`
position: relative;
`
const DateInput = styled.input`
background: ${(props) => props.theme.dateinputColor};
border: 2px solid ${(props) => props.theme.borderInput};
box-sizing: border-box;
border-radius: 10px;
padding: 13px 20px;
margin-right: 20px;
`

const PasswordIc = styled.i`
color: #4F4F4F;
font-size: 10px;
position: absolute;
bottom: 20px; 
left: 30px;
`

const Chexbox= styled.div`
margin-top: 18px;
`
const ChecLabel = styled.label`
font-family: Roboto;
font-size: 16px;
font-weight: 500;
line-height: 27px;
color: ${(props) => props.theme.textsColor};
margin-left: 11px;
`
const CardBtn = styled.button`
font-family: Roboto;
font-size: 18px;
font-weight: 500;
line-height: 27px;
color: #FFFFFF;
background: #3B71FE;
padding: 11px 20px;
border-radius: 36px;
border: none;
margin: 34px 0px 120px 0px; 

`
const PaymentLeft = () => {

    const {t} = useTranslation();
    let History = useNavigate()
    const hundleSubmit = (el)=>{
        el.preventDefault()
        History('/congrat')
      }
    return (
        <PaymentsLeft>
            <Confirm>{t('confirm')}</Confirm>
            <YourTour>{t('yourTour1')}</YourTour>
            <ToursInputs>
                <InputName>{t('inputNamedata')}</InputName>
                <Input type='text' placeholder={t('placeholderjune')} />
                <PenIcon className='icon-pen'/>
            </ToursInputs>
            <ToursInputs>
                <InputName>{t('inputName')} </InputName>
                <Input type='text' placeholder={t('placeholderpas')} />
                <PenIcon className='icon-pen'/>
            </ToursInputs>
            <YourTour>{t('yourTour2')}</YourTour>
            <CreaditCard>
                <Cards><img src="/assets/2circle.svg" alt="circle" /></Cards>
                <CardImg src='/assets/check.svg'/>
                <CardsPay><img src="/assets/paypal.svg" alt="paypal" /></CardsPay>
                <CardsPayvisa><img src="/assets/visacard.png" alt="visa" /></CardsPayvisa>
                <CardsPayamerican><img src="/assets/american.svg" alt="american" /></CardsPayamerican>
            </CreaditCard>
            <PlasticCard>
                <CardsSize>
                    <LogoCard>
                        <UnionIcon className='icon-unioncard'/>
                        <img src="/assets/three.svg" alt="" />
                    </LogoCard>
                    <CardNumber>8948   xxxx  xxxx  7894</CardNumber>
                    <Marka>
                        <NameCard>{t('nameCard')}</NameCard>
                        <img src="/assets/2circle.svg" alt="" />
                    </Marka>
                </CardsSize>
                <CardsSize2>
                    <LogoCard>
                        <UnionIcon className='icon-unioncard'/>
                        <img src="/assets/three.svg" alt="" />
                    </LogoCard>
                    <CardNumber>8948   xxxx  xxxx  7894</CardNumber>
                    <Marka>
                        <NameCard>{t('nameCard')}</NameCard>
                        <img src="/assets/visacard.png" alt="" />
                    </Marka>
                </CardsSize2>
            </PlasticCard>
                <div>
                    <AboutCard>{t('aboutCard')}</AboutCard>
                    <CardInput>
                        <CardNumbders type='text' placeholder='5884 6241 4444 3333'/>
                        <CardsIcon className='icon-ptichka'></CardsIcon>
                    </CardInput>
                </div>
            <DatesCard>
                <div>
                    <AboutCard>{t('aboutCard2')}</AboutCard>
                    <DateInput type='text' placeholder='MM / YY'/>
                
                </div>
                <CVC>
                    <AboutCard>{t('aboutCard3')}</AboutCard>
                    <DateInput type='text' />
                    <PasswordIc className='icon-password'></PasswordIc>
                </CVC>
            </DatesCard>
            <Chexbox>
                <input type="checkbox" id="check3"/>
                <ChecLabel htmlFor=''>{t('checLabel')}</ChecLabel>
            </Chexbox>
                <CardBtn onClick={hundleSubmit}>{t('CardBtn')}</CardBtn>
    </PaymentsLeft>
    )
}

export default PaymentLeft