import React from 'react';
import styled from 'styled-components';
import {AiFillStar} from 'react-icons/ai';
import {useTranslation} from 'react-i18next';
import Image from '../../img/photo3.jpg';

const Wrapper = styled.div`
padding: 40px 35px 36px 35px;
background: #FFFFFF;
border: 2px solid #E7ECF3;
box-sizing: border-box;
border-radius: 20px;
margin: 55px 30px;
/* border: 2px solid red; */
width: 445px;
height: 899px;
`
const Title = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 32px;
`
const Text = styled.h3`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 23px;
color: #141416;
padding-bottom :14px;
`
const AiStart = styled.span`
padding-bottom: 26px;
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;

color: #222529;
`
const Image1 = styled.img`
/* border: 2px solid red; */
background: #E7ECF3;
/* border: 2px solid #E7ECF3; */
width: 326px;
height: 177px;
box-sizing: border-box;
border-radius: 20px;
`
const Info = styled.div`
display: flex;
flex-direction: column;
`
const Rooms = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #84878B;
`
const Checks = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 20px 20px 0;
`
const CheckOne = styled.div`
`
const CheckTitle = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #B1B5C4;
`
const CheckText = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #84878B;
`
const CheckTwo = styled.div`
padding-bottom: 40px;
`
const Details = styled.div`
`
const BookTitle = styled.h3`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 26px;
line-height: 27px;
color: #333333;
margin: 0;
padding-bottom: 40px;

`
const Days = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-bottom: 20px;
padding: 13px 12px 20px 0;
`
const DaysSpan = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #84878B;

`
const DaysPrice = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #353945;
`
const Total = styled.div`
padding: 8px 12px;
background: #F4F5F6;
height: 41px;
border-radius: 6px;
display: flex;
align-items: center;
justify-content: space-between;
width: 373px;
margin-bottom: 30px;
`
const TotalSpan = styled.div`

font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #23262F;
`
const Report = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #B1B5C4;
text-align:center;
margin-bottom: 36px;
`

const PaymentRight = () => {
    const {t} = useTranslation();
    return (
        <Wrapper>
            <Text>
                <Title>{t('swisHotels')} </Title>
                <AiStart> <AiFillStar style={{color:"#FFD166", marginRight: '8px'}}/>4.8 (122 reviews)</AiStart>
                <Image1 src={Image} alt=""/>
            </Text>

            <Info>
                <Rooms>{t('rooms')}</Rooms>
                    <Checks>
                        <CheckOne>
                            <CheckTitle> {t('check1')}</CheckTitle>
                            <CheckText>{t('checked1')} </CheckText>
                        </CheckOne>
                        <CheckOne>
                            <CheckTitle>{t('check2')}</CheckTitle>
                            <CheckText>{t('checked2')} </CheckText>
                        </CheckOne>
                    </Checks>

                    <CheckTwo>
                            <CheckTitle>{t('check2')}</CheckTitle>
                            <CheckText>{t('checked2')} </CheckText>
                    </CheckTwo>
            </Info>

            <Details>
                <BookTitle>{t('fare')}</BookTitle>
                    <Days>
                        <DaysSpan>$119  +  {t('checkedOther1')}</DaysSpan>
                        <DaysPrice>$833</DaysPrice>
                    </Days>
                    <Days>
                        <DaysSpan>{t('checkedOther2')}</DaysSpan>
                        <DaysPrice>-$125</DaysPrice>
                    </Days>
                    <Days>
                        <DaysSpan>{t('checkedOther3')}</DaysSpan>
                        <DaysPrice>$103</DaysPrice>
                    </Days>
                    <Total>
                        <TotalSpan>{t('checkedOther4')}</TotalSpan>
                        <DaysPrice>$833</DaysPrice>
                    </Total>

                <Report>{t('report')}</Report>
            </Details>
        </Wrapper>
    )
}

export default PaymentRight
