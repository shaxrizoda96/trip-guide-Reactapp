import React from 'react';
import styled from 'styled-components';



const Section = styled.section`
background:#F5F5F5;
padding: 52px 0px;
`
const Container = styled.div`
max-width: 1170px;
margin: 0 auto;`


const Title = styled.h2`
font-family: DM Sans;
font-weight: 700;
font-size: 48px;
line-height: 70px;
margin-bottom: 12px;
color: #141416;`


const Page = styled.p`
font-family: Poppins;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-bottom: 37px;
color: #3B3E44;`

const Boxs = styled.div`
display: flex;
justifay-content: space-between;`

const BoxLeft = styled.div`

`
const BoxFirst = styled.div`
border: 1px solid #000;
background-image: url();
width: 870px;
height: 280px;
background: linear-gradient(38.52deg, rgba(3, 3, 3, 0.54) -3.66%, rgba(6, 6, 6, 0) 45.57%);
border-radius: 18px;
margin-bottom: 30px;
padding: 20px;
`;

const BoxSecond = styled.div`
display: flex;
`

const Boxes= styled.div`
width: 408px;
height: 408px;
border: 1px solid #000;
background: linear-gradient(2.01deg, rgba(35, 35, 35, 0.58) 13.14%, rgba(196, 196, 196, 0) 26.65%);
border-radius: 20px;
margin-right: 54px;
padding: 20px;
`

const BoxRight = styled.div``


const Box = styled.div`
width: 270px;
height: 220px;
border: 1px solid #000;
margin-bottom: 30px;
background: linear-gradient(0.63deg, rgba(111, 130, 123, 0.48) 19.18%, rgba(31, 71, 56, 0) 39.64%);
border-radius: 15px;
padding: 20px;
`
const Span = styled.span`
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
border-radius: 20px;
margin-bottom: 144px;
padding: 2px 20px;
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 24px;
color: #FF543D;
`



const BoxTitle = styled.div`
font-family: DM Sans;
font-weight: 700;
font-size: 40px;
line-height: 24px;
color: #FFFFFF;
`
const BoxPage = styled.div``
const Img = styled.img``




const Featured = () => {
    


    return (
        <div>
            <Section>
                <Container>
                    <Title>
                    Featured Destinations
                    </Title>
                    <Page>
                    Popular destinations open to visitors from Indonesia
                    </Page>
                    <Boxs>
                        <BoxLeft>
                            <BoxFirst > 
                                <Span>3.5</Span>
                                <BoxTitle>Barcelona Tour</BoxTitle>
                                <Img src="/assets/active.svg" alt="" />
                                <Page>196 Activities</Page>
                            </BoxFirst>
                            <BoxSecond>
                                <Boxes>
                                <Span>3.5</Span>
                                <BoxTitle>London, United State</BoxTitle>
                                <Img src="/assets/active2.svg" alt="" />
                                <BoxPage>196 Activities</BoxPage>
                                </Boxes>

                                <Boxes>
                                <Span>3.5</Span>
                                <BoxTitle>London, United State</BoxTitle>
                                <Img src="/assets/active2.svg" alt="" />
                                <BoxPage>196 Activities</BoxPage>
                                </Boxes>
                            </BoxSecond>
                        </BoxLeft>


                        <BoxRight>
                            <Box>
                                <Span>3.5</Span>
                                <BoxTitle>Australia Tour</BoxTitle>
                                <Img src="/assets/active2.svg" alt="" />
                                <Page>196 Activities</Page>

                            </Box>
                            <Box>
                                <Span>3.5</Span>
                                <BoxTitle>Japan Tour</BoxTitle>
                                <Img src="/assets/active2.svg" alt="" />
                                <Page>196 Activities</Page>

                            </Box>
                            <Box>
                                <Span>3.5</Span>
                                <BoxTitle>Japan Tour</BoxTitle>
                                <Img src="/assets/active2.svg" alt="" />
                                <Page>196 Activities</Page>

                            </Box>

                        </BoxRight>
                    </Boxs>

                </Container>
            </Section>
            
        </div>
    )
}

export default Featured
