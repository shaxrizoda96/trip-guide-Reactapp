import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import {AiFillStar} from 'react-icons/ai';
import { GrLocation}  from 'react-icons/gr';
import {  MdOutlineMapsHomeWork }  from 'react-icons/md';
import { IoIosArrowBack , IoIosArrowForward } from 'react-icons/io';

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
Width: 270px;
Height: 362px;
background: #FFFFFF;
border: 1px solid #E7ECF3;
box-sizing: border-box;
border-radius: 20px;
padding: 12px 14px;`
const CardText = styled.div``
const CardTitle = styled.h3`
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 26px;
color: #3B3E44;
pargin-bottom: 6px;
`
const CardPage = styled.p`font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #84878B;
`
const Span = styled.span`
background: rgba(49, 107, 255, 0.2);
border-radius: 6px;
font-weight: 500;
font-size: 18px;
line-height: 23px;
color: #316BFF;
padding: 4px 10px;
margin-left: 27px;
`


const Explore = () => {
    return (
        <Section>
            <Container>
                <Tour>
                    <TopText>
                    <Title>Explore The World</Title>
                    <Page>10,788 beautiful places to go</Page>
                    </TopText>
                    <TopIcons>
                <IoIosArrowBack style={{Width:'36px', height:'36px', marginRight:'20px', borderRadius:'60%', border: '1px solid #000', background:'#F4F5F6' }}/>
                <IoIosArrowForward style={{Width:'36px', height:'36px', marginRight:'20px', borderRadius:'60%', border: '1px solid #000', background:'#F4F5F6' }}/>
                </TopIcons>

                </Tour>
                
                <Cards>
                    <Swiper spaceBetween={30} slidesPerView={4}>
                        <SwiperSlide> 
                            <Card>
                                <img src="/assets/Explore.png" alt="" />
                                <CardText>
                                    <span style={{margin:'17px 0 7px 0'}}>
                                        <AiFillStar style={{color:"#FFD166"}} />
                                        <span style ={{fontWeight: '500', fontSize: '14px'}}>4.91 (147)</span>
                                    </span>
                                    <CardTitle>Comfort Space <Span>$210</Span></CardTitle>
                                    <CardPage>1.2 km to Town Center</CardPage>
                                    <CardPage> <GrLocation/> Turkey, Mamaris</CardPage>
                                    <CardPage> <MdOutlineMapsHomeWork />Rooms available: 375</CardPage>
                                </CardText>
                            </Card>
                        </SwiperSlide> 
                        <SwiperSlide> 
                            <Card>
                                <img src="/assets/Explore.png" alt="" />
                                <CardText>
                                    <span>
                                        <AiFillStar style={{color:"#FFD166"}} />
                                        <span>4.91 (147)</span>
                                    </span>
                                    <CardTitle>Comfort Space <Span>$210</Span></CardTitle>
                                    <CardPage>1.2 km to Town Center</CardPage>
                                    <CardPage> <GrLocation/> Turkey, Mamaris</CardPage>
                                    <CardPage> <MdOutlineMapsHomeWork />Rooms available: 375</CardPage>
                                </CardText>
                            </Card>
                        </SwiperSlide> 
                        <SwiperSlide> 
                            <Card>
                                <img src="/assets/Explore.png" alt="" />
                                <CardText>
                                    <span>
                                        <AiFillStar style={{color:"#FFD166"}} />
                                        <span>4.91 (147)</span>
                                    </span>
                                    <CardTitle>Comfort Space <Span>$210</Span></CardTitle>
                                    <CardPage>1.2 km to Town Center</CardPage>
                                    <CardPage> <GrLocation/> Turkey, Mamaris</CardPage>
                                    <CardPage> <MdOutlineMapsHomeWork />Rooms available: 375</CardPage>
                                </CardText>
                            </Card>
                        </SwiperSlide> 
                        <SwiperSlide> 
                            <Card>
                                <img src="/assets/Explore.png" alt="" />
                                <CardText>
                                    <span>
                                        <AiFillStar style={{color:"#FFD166"}} />
                                        <span>4.91 (147)</span>
                                    </span>
                                    <CardTitle>Comfort Space <Span>$210</Span></CardTitle>
                                    <CardPage>1.2 km to Town Center</CardPage>
                                    <CardPage> <GrLocation/> Turkey, Mamaris</CardPage>
                                    <CardPage> <MdOutlineMapsHomeWork />Rooms available: 375</CardPage>
                                </CardText>
                            </Card>
                        </SwiperSlide> 
                        <SwiperSlide> 
                            <Card>
                                <img src="/assets/Explore.png" alt="" />
                                <CardText>
                                    <span>
                                        <AiFillStar style={{color:"#FFD166"}} />
                                        <span>4.91 (147)</span>
                                    </span>
                                    <CardTitle>Comfort Space <Span>$210</Span></CardTitle>
                                    <CardPage>1.2 km to Town Center</CardPage>
                                    <CardPage> <GrLocation/> Turkey, Mamaris</CardPage>
                                    <CardPage> <MdOutlineMapsHomeWork />Rooms available: 375</CardPage>
                                </CardText>
                            </Card>
                        </SwiperSlide> 
                    </Swiper>
                </Cards>
            </Container>
            

           
            
        </Section>
    )
}

export default Explore
