import { useTranslation } from 'react-i18next';
import styled, { ThemeContext } from 'styled-components';
import {TrendingSection, TrendingBox, TrendingPlace} from '../styled'
import {useState, useEffect} from 'react';
import {AiFillStar} from 'react-icons/ai'
import apiCalls from '../config/api';

const TrendingTopText = styled.div`
text-align: center;
padding-top: 60px;
`
const TrendingTheme = styled.h3`
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 70px;
letter-spacing: -0.005em;
margin-bottom: 20px;
color: ${(props) => props.theme.placeNameColor};
`
const TrendingText = styled.p`
font-size: 24px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
margin-bottom: 50px;
color: ${(props) => props.theme.trendingTextcolor};
`

const TrendingCards =  styled.div`
display:flex;
flex-wrap: wrap;
justify-content:space-between;
max-width: 1160px;
margin: 50px auto;
`

const TrendImg = styled.img`
border-radius: 16px;
height: 160px;
width: 167px;
`

const TrendingAbout = styled.div`
margin-left:25px;
`


const Reviews = styled.div`
display: flex;
align-items: center;
`
const Star = styled.img`
margin-right: 8px;
`

const Number = styled.p`
font-weight: 500;
font-size: 14px;
color: ${(props) => props.theme.numbercolor};
margin-bottom: 1px;

`
const Span = styled.span`
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: ${(props) => props.theme.spanColorTrending};
`

const Price = styled.p`
font-family: Poppins;
font-size: 16px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0em;
color: ${(props) => props.theme.priceColor};
margin-top: 18px;
`
const BookNow = styled.button`
background: #316BFF;
border-radius: 6px;
font-weight: bold;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
padding: 8px 16px;
border:none;
`
const Trending = () => {
    const {t}=  useTranslation()
    const [trendinglist, setTrending] = useState([]);
    const [error, setError] = useState('');
    
    
    useEffect(() => {
        const getCities = async () => {
          try {
              const data = await apiCalls.getCities();
              setTrending(data);
          } catch (error) {
              setError(error.message);
          }
         
        }
        getCities();
    },[]);
    const mappedTrendingList = trendinglist.map( (el, i) => (

        <TrendingBox key={i}>
            <TrendImg src={el.photo}></TrendImg>
            <TrendingAbout>
                <TrendingPlace>{el.name}</TrendingPlace>
                <Reviews>
                    <AiFillStar style={{color:"#FFD166", marginRight: '8px'}}/>
                    <Number>{el.rating}  </Number> 
                </Reviews>
                <Price>$ {el.price}<Span>/night</Span></Price>
                <BookNow>Book Now</BookNow>
            </TrendingAbout>
        </TrendingBox>
    ))
    return (
        <TrendingSection>
            <TrendingTopText>
                <TrendingTheme>{t('trendingTheme')}</TrendingTheme>
                <TrendingText>{t('trendingText')}</TrendingText>
            </TrendingTopText>
            <TrendingCards>
               {mappedTrendingList}
            </TrendingCards>
        </TrendingSection>
        
    )
}

export default Trending;
      
