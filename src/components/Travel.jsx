import React from 'react';
import styled  from 'styled-components';
import {AiFillStar} from 'react-icons/ai'



const Section = styled.section`
background:#F5F5F5;
`
const Container = styled.div`
max-width: 1170px;
margin: 0 auto;
`
const TravelText = styled.div`

`
const Title = styled.h2`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 70px;
letter-spacing: -0.005em;
color: #141416;
`
const Page = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #84878B;
padding-bottom: 42px;
`
const Cards = styled.div`
display: flex;`
const Card = styled.div`
width: 270px;
height: 323px;
position: relative;
background: linear-gradient(8.54deg, rgba(31, 31, 31, 0.63) 17.12%, rgba(35, 35, 35, 0) 92.69%);
border-radius: 15px;
margin: 0px 15px;
`
const CardText = styled.div``
const CardTitle = styled.h3`
font-family: Poppins;
position: absolute;
bottom: 44px;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 32px;
color: #FFFFFF;
margin-bottom: 10px;
padding: 6px 30px;
`
const CardPage = styled.p`
position: absolute;
bottom: 17px;
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;
padding: 0px 30px;`


const Trevel = () => {
    return (
        <Section>
            <Container>
                <TravelText>
                    <Title>Travel Your Passion</Title>
                    <Page>Most Brilliant reasons Entrada should be your one-stop-shop!</Page>
                </TravelText>
                <Cards>
                    <Card>
                        <img src="/assets/trawel.png" alt="" />
                        <CardText>
                            <CardTitle>Beach Hobby</CardTitle>
                            <CardPage><AiFillStar style={{color:"#FFD166"}} />4.8 (122 reviews)</CardPage>
                        </CardText>
                    </Card>
                    <Card>
                        <img src="/assets/trawel.png" alt="" />
                        <CardText>
                            <CardTitle>Beach Hobby</CardTitle>
                            <CardPage><AiFillStar style={{color:"#FFD166"}} />4.8 (122 reviews)</CardPage>
                        </CardText>
                    </Card>
                    <Card>
                        <img src="/assets/trawel.png" alt="" />
                        <CardText>
                            <CardTitle>Beach Hobby</CardTitle>
                            <CardPage><AiFillStar style={{color:"#FFD166"}} />4.8 (122 reviews)</CardPage>
                        </CardText>
                    </Card>
                    <Card>
                        <img src="/assets/trawel.png" alt="" />
                        <CardText>
                            <CardTitle>Beach Hobby</CardTitle>
                            <CardPage><AiFillStar style={{color:"#FFD166"}} />4.8 (122 reviews)</CardPage>
                        </CardText>
                    </Card>
                </Cards>

            </Container>
        </Section>
    )
}

export default Trevel
