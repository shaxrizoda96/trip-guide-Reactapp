import React from 'react'
import styled from 'styled-components'

const FooterCardWrapper = styled.div`
width: 1170px;
height: 248px;
background: #3B71FE;
border-radius: 16px;
margin: 0 auto;
padding: 62px 90px;
display: flex;
justify-content: space-between;
align-items: center;
position: absolute;
top: -19%;
right: 15%;
`
const FooterCardLeft = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`
const FooterCardRight = styled.div`

`
const Title = styled.h1`
font-family: Gilroy;
font-style: normal;
font-weight: 800;
font-size: 44px;
line-height: 52px;
letter-spacing: -0.5px;
color: #FFFFFF;
`
const Span = styled.span`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 28px;
color: #FFFFFF;
opacity: 0.88;
width: 360px;
`

const InputButton = styled.div`
padding: 8px 8px 8px 22px;
width: 488px;
height: 71px;
background: #FCFCFD;
box-shadow: 10px 16px 60px -7px rgba(0, 0, 0, 0.04);
border-radius: 4px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Input = styled.input`
border: none;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #B1B5C4;
outline: none;
`
const Button = styled.button`
padding: 18px 30.5px;
background: #353945;
box-shadow: 0px 12px 20px -5px rgba(23, 23, 126, 0.1);
border-radius: 4px;
border: none;
outline: none;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-align: center;
letter-spacing: -0.02em;
text-transform: capitalize;
color: #FFFFFF;
cursor: pointer;

`
const Wrapper = styled.div`
position: relative;
background: #F4F5F6;
width: 100%;
height: 602px;
display: flex;
justify-content: flex-end;
align-items: flex-end;
padding-bottom: 100px;
margin-top: 260px;
`

const FooterLinks = styled.div`
width: 1055px;
height: 227px;
display: flex;
justify-content: space-between;
margin: 0 auto;
`
const TitleFooter = styled.div`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 27px;
color: #222529;
`
const Section = styled.div`
display: flex;
flex-direction: column;

`
const P = styled.p`
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #84878B;
width: 254px;
`

const Logo = styled.div`
display: flex;
align-items: center;
padding-bottom: 20px;
`
const SectionTitle = styled.h3`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: #222529;
`
const SectionSpan = styled.a`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #84878B;
padding-bottom: 16.06px;
`


const Footer = () => {
    return (
       
            



        <Wrapper>
            <FooterCardWrapper>
                <FooterCardLeft>
                    <Title>Get our pro offers </Title>
                    <Span>Create a visual identity for your company, and an overall brand</Span>
                </FooterCardLeft>

                <FooterCardRight>

                    <InputButton>
                    <Input type="search" placeholder="Type your email here"/>
                    <Button>
                        Subscribe
                    </Button>

                    
                    </InputButton>

                </FooterCardRight>
                
            </FooterCardWrapper>


        <FooterLinks>
            <Section>
            <Logo>
            <img style={{marginRight: '10px'}} src="/assets/header-logo.png" alt="header_logo" />
            <TitleFooter>TripGuide</TitleFooter>
            </Logo>

            <P>This is the team that specializes in
                making sure in the find it a 
                your interior looks cool</P>
            </Section>

            <Section>
                <SectionTitle>Services</SectionTitle>
                <ul>
                <li><SectionSpan> Travel Booking</SectionSpan></li>
                <li><SectionSpan> Flight Booking</SectionSpan></li>
                <li><SectionSpan> Car Booking</SectionSpan></li>
                <li><SectionSpan> Fivestar Hotel</SectionSpan></li>
                <li><SectionSpan> Traveling</SectionSpan></li>
                </ul>
            </Section>


            <Section>
               
                <SectionTitle>Support</SectionTitle>
                <ul>
                <li><SectionSpan>Account</SectionSpan></li>
                <li><SectionSpan>Legal</SectionSpan></li>
                <li><SectionSpan>Contact</SectionSpan></li>
                <li><SectionSpan>Terms & Condition</SectionSpan></li>
                <li><SectionSpan>Privacy Policy</SectionSpan></li>
                </ul>
            </Section>


            <Section>
                
                <SectionTitle>Business</SectionTitle>
                <ul>
                <li><SectionSpan>Success</SectionSpan></li>
                <li><SectionSpan>About Locato</SectionSpan></li>
                <li><SectionSpan>Blog</SectionSpan></li>
                <li><SectionSpan>Information</SectionSpan></li>
                <li><SectionSpan>Travel Guide</SectionSpan></li>
                </ul>
            </Section>


            

        </FooterLinks>



        </Wrapper>
    )
    }


export default Footer
