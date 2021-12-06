import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack , IoIosArrowForward } from 'react-icons/io';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


const Section = styled.div`
background:#F5F5F5;
padding: 75px 0px;`
const Container = styled.div`
max-width: 1170px;
margin: 0 auto;`
const Tour = styled.div`
display: flex;
justify-content: space-between;
align-item: center;`
const TopText = styled.div``
const TopIcons = styled.div``

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
color: #777E90;
`
const Cards = styled.div`
display: flex;

`
const Card = styled.div`
Width: 369px;
Height: 495px;
position: relativ;
background: linear-gradient(175.54deg, rgba(2, 0, 14, 0.13) 9.38%, rgba(42, 34, 101, 0) 47.26%, rgba(15, 11, 44, 0.6) 92.77%);
border-radius: 16px;
margin-raight: 30px;`
const CardsText = styled.div`
padding: 30px;
`
const Span = styled.span`
position: absolute;
top: 10px;
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 26px;
color: #E9EBF3;
padding: 12px 28px;
`
const CardTextTitle = styled.h3`
position: absolute;
bottom: 68px;
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 44px;
letter-spacing: -0.005em;
color: #FCFCFD;
text-shadow: 0px 6px 20px rgba(0, 0, 0, 0.4);`
const CardTextPage = styled.p`
position: absolute;
bottom: 38px;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #FCFCFD;
opacity: 0.9;
`


const TopTour = () => {
    return (
        <Section>
            <Container>
                <Tour>
                    <TopText>
                        <Title>Top Tour</Title>
                        <Page>Keep calm & travel on</Page>
                    </TopText>
                    <TopIcons>
                    <IoIosArrowBack style={{Width:'36px', height:'36px', marginRight:'20px', borderRadius:'60%', border: '1px solid #000', background:'#F4F5F6' }}/>
                    <IoIosArrowForward style={{Width:'36px', height:'36px', marginRight:'20px', borderRadius:'60%', border: '1px solid #000', background:'#F4F5F6' }}/>
                    </TopIcons>
                   
                </Tour>
               
                <Cards>
                <Swiper 
                    spaceBetween={30}
                    slidesPerView={3}>
                    <SwiperSlide> 
                    <Card>
                        <img src="/assets/tour.png" alt="" style={{Width: '369px', Height: '495px'}}/>
                        <CardsText>
                            <Span>Japan</Span>
                            <CardTextTitle>Japan</CardTextTitle> 
                            <CardTextPage>10 Popular Places</CardTextPage>  

                        </CardsText>
                    </Card>
                    
                    </SwiperSlide>
                    <SwiperSlide>
                    <Card>
                        <img src="/assets/tour.png" alt="" style={{Width: '369px', Height: '495px'}}/>
                        <CardsText>
                            <Span>Japan</Span>
                            <CardTextTitle>Japan</CardTextTitle> 
                            <CardTextPage>10 Popular Places</CardTextPage>  

                        </CardsText>
                    </Card>
                    </SwiperSlide>
                    <SwiperSlide> <Card>
                        <img src="/assets/tour.png" alt="" style={{Width: '369px', Height: '495px'}}/>
                        <CardsText>
                            <Span>Japan</Span>
                            <CardTextTitle>Japan</CardTextTitle> 
                            <CardTextPage>10 Popular Places</CardTextPage>  

                        </CardsText>
                    </Card>
                    </SwiperSlide>
                    <SwiperSlide> <Card>
                        <img src="/assets/tour.png" alt="" style={{Width: '369px', Height: '495px'}} />
                        <CardsText>
                            <Span>Japan</Span>
                            <CardTextTitle>Japan</CardTextTitle> 
                            <CardTextPage>10 Popular Places</CardTextPage>  

                        </CardsText>
                    </Card>
                    </SwiperSlide>
                    <SwiperSlide> <Card>
                        <img src="/assets/tour.png" alt="" style={{Width: '369px', Height: '495px'}}/>
                        <CardsText>
                            <Span>Japan</Span>
                            <CardTextTitle>Japan</CardTextTitle> 
                            <CardTextPage>10 Popular Places</CardTextPage>  

                        </CardsText>
                    </Card>
                    </SwiperSlide>
                    
                </Swiper>
                    </Cards> 
           
                </Container>
        </Section>
    )
}

export default TopTour
