import React from 'react'
import styled from 'styled-components';
import Image from '../../img/slide2.jpg'

const Wrapper = styled.div`
padding: 40px 35px 36px 35px;
background: #FFFFFF;
border: 2px solid #E7ECF3;
box-sizing: border-box;
border-radius: 20px;
margin: 0 30px;
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
const Rate = styled.span`
padding-bottom: 26px;
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;

color: #222529;
`
const Image1 = styled.img`
padding-bottom: 32px;
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
const CheckInLab = styled.div`
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
    return (
        <Wrapper>
            <Title>
                <Text>Switzerland Hotels and Places to Stay </Text>
                <Rate>4.8 (122 reviews)</Rate>
                <Image1 src={Image} alt=""/>
            </Title>

            <Info>
                <Rooms>1 bedroom  +  1 private room</Rooms>

                <Checks>
                    <CheckOne>
                        <CheckInLab>Check in</CheckInLab>
                        <CheckText>June 27, 2020 </CheckText>
                    </CheckOne>
                    <CheckOne>
                        <CheckInLab>Check out</CheckInLab>
                        <CheckText>June 30, 2020  </CheckText>
                    </CheckOne>
                </Checks>

                <CheckTwo>
                        <CheckInLab>Guest</CheckInLab>
                        <CheckText>2 guests  </CheckText>
                </CheckTwo>
            </Info>

            <Details>
                <BookTitle>Booked details</BookTitle>

                <Days><DaysSpan>$119  +  5nights</DaysSpan><DaysPrice>$833</DaysPrice></Days>
                <Days><DaysSpan>Ocupancy text and fee</DaysSpan><DaysPrice>-$125</DaysPrice></Days>
                <Days><DaysSpan>Service free</DaysSpan><DaysPrice>$103</DaysPrice></Days>
                <Total><TotalSpan>Total</TotalSpan><DaysPrice>$833</DaysPrice></Total>

                <Report>Report this property</Report>
            </Details>

            
        </Wrapper>
    )
}

export default PaymentRight
