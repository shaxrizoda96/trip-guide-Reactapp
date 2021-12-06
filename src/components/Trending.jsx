

import React from 'react';
import styled  from 'styled-components';
import {AiFillStar} from 'react-icons/ai'

const TrandingCard = styled.div`
background:#F5F5F5;

`
const Container = styled.div`
max-width: 1098px;
margin: 0 auto;`

const Row = styled.div`
display:flex;
justify-content:space-between;
`
const Card = styled.div`
Width :534px;
Height :216px;
background: #fff;
border-radius: 20px;
padding:24px;
display:flex;
margin-bottom:35px
`
const CardText = styled.div`
display:flex;
flex-direction:column;
margin-left:23px;

`
const CardTextTitle = styled.strong`
font-family: DM Sans;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #282832;
`
const Span = styled.span`
font-family: DM Sans;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #3B3E44;
margin-top:22px;
`
const Button = styled.button`
background: #316BFF;
border-radius: 6px;
padding:7px 16px;
border:none;
outline:none;
color:#fff;
margin-top:24px
`
const TreandingTitle = styled.h5`
font-family: DM Sans;
font-weight: 700;
font-size: 48px;
line-height: 70px;
text-align: center;
letter-spacing: -0.005em;
color: #222529;
padding-top:59px;

`
const TrendingText = styled.p`
font-family: DM Sans;
font-weight: 400;
font-size: 24px;
line-height: 24px;
text-align: center;
color: #3B3E44;
margin-bottom:50px

`
const Trending = () => {
    return (
        <TrandingCard>
        <Container> 
            <TreandingTitle>Trending cites</TreandingTitle>
            <TrendingText>The most searched for cities on TripGuide</TrendingText>
                <Row>
                    <Card>
                    <img src="/assets/treding.png" alt="" style={{borderRadius:"15px"}} />
                    <CardText>
                        <CardTextTitle>Manila</CardTextTitle>
                        <span>
                            <AiFillStar style={{color:"#FFD166"}} />
                            <span>4.91 (147)</span> 
                        </span>
                        <Span><strong>$250.00</strong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
                    <Card>
                    <img src="/assets/treding.png" alt="" style={{borderRadius:"15px"}}/>
                    <CardText>
                        <CardTextTitle>Manila</CardTextTitle>
                        <span>
                            <AiFillStar style={{color:"#FFD166"}} />
                            <span>4.91 (147)</span> 
                        </span>
                        <Span><strong>$250.00</strong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
             
                </Row>
                <Row>
                    <Card>
                    <img src="/assets/treding.png" alt="" style={{borderRadius:"15px"}}/>
                    <CardText>
                        <CardTextTitle>Manila</CardTextTitle>
                        <span>
                            <AiFillStar style={{color:"#FFD166"}} />
                            <span>4.91 (147)</span> 
                        </span>
                        <Span><strong>$250.00</strong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
                    <Card>
                    <img src="/assets/treding.png" alt="" style={{borderRadius:"15px"}}/>
                    <CardText>
                        <CardTextTitle>Manila</CardTextTitle>
                        <span>
                            <AiFillStar style={{color:"#FFD166"}} />
                            <span>4.91 (147)</span> 
                        </span>
                        <Span><strong>$250.00</strong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
             
                </Row>
                <Row>
                    <Card>
                    <img src="/assets/treding.png" alt="" style={{borderRadius:"15px"}}/>
                    <CardText>
                        <CardTextTitle>Manila</CardTextTitle>
                        <span>
<AiFillStar style={{color:"#FFD166"}} />
                            <span>4.91 (147)</span> 
                        </span>
                        <Span><strong>$250.00</strong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
                    <Card>
                    <img src="/assets/treding.png" alt="" style={{borderRadius:"15px"}}/>
                    <CardText>
                        <CardTextTitle>Manila</CardTextTitle>
                        <span>
                            <AiFillStar style={{color:"#FFD166"}} />
                            <span>4.91 (147)</span> 
                        </span>
                        <Span><strong>$250.00</strong>   /night</Span>
                        <Button type="button" >Book Now</Button>
                     </CardText>
                    </Card>
             
                </Row>
           <Row> 
           
           
            </Row>
            </Container>
        </TrandingCard>
       
    )
}

export default Trending;
      
