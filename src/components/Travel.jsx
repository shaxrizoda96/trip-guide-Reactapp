import {useTranslation} from 'react-i18next'
import styled, { ThemeContext } from 'styled-components';
import { Container, Theme, PassionBg } from '../styled';
import {AiFillStar} from 'react-icons/ai';

const PassionSection = styled.section`
padding-top: 70px;
`

const StopShop= styled.p`
font-family: Poppins;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
color: #84878B;

`

const PassionCards = styled.div`
display:flex;
justify-content: space-between;
margin-top: 42px;
`

const PassionBox = styled.div`
position:relative;
&::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0px;
    background: linear-gradient(
        45deg, rgba(35, 35, 35, 0.58) 0%, rgba(196, 196, 196, 0) 100%);
    border-radius: 15px
}
`
const PassionImg = styled.img`
border-radius: 15px;
weight: 319px;
`

const PassionName = styled.p`
font-family: Poppins;
font-size: 24px;
font-weight: 600;
line-height: 32px;
letter-spacing: 0em;
color: #FFFFFF;
position: absolute;
bottom: 44px;
left:20px;
margin-bottom:0;
`



const Reviews = styled.div`
display: flex;
align-items: center;
position: absolute;
bottom: 17px;
left:30px;

`
const Review = styled.span`
color: white;
font-size: 14px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
`
const Star = styled.img`
margin-right:10px;
`

const Trevel = () => {
    const {t} = useTranslation();
    return (
      
        <PassionBg>
            <Container>
                <PassionSection>

                    <Theme>{t('themepassion')}</Theme>
                    <StopShop>{t('StopShop')}</StopShop>
                    <PassionCards>
                        <PassionBox>
                            <PassionImg src='/assets/trawel.png'></PassionImg>
                            <PassionName>{t('passionName1')}</PassionName>
                            <Reviews><AiFillStar style={{color:"#FFD166", marginRight: '8px'}}/><Review>4.8 (122 {t('reviews')})</Review></Reviews>
                        </PassionBox>
                        <PassionBox>
                            <PassionImg src='/assets/city.jpg'></PassionImg>
                            <PassionName>{t('passionName2')}</PassionName>
                            <Reviews><AiFillStar style={{color:"#FFD166", marginRight: '8px'}}/><Review>4.8 (122 {t('reviews')})</Review></Reviews>
                        </PassionBox>
                        <PassionBox>
                            <PassionImg src='/assets/hiking.jpg'></PassionImg>
                            <PassionName>{t('passionName3')} </PassionName>
                            <Reviews><AiFillStar style={{color:"#FFD166", marginRight: '8px'}}/><Review>4.8 (122 {t('reviews')})</Review></Reviews>
                        </PassionBox>
                        <PassionBox>
                            <PassionImg src='/assets/sport.jpg'></PassionImg>
                            <PassionName>{t('passionName4')}</PassionName>
                            <Reviews><AiFillStar style={{color:"#FFD166", marginRight: '8px'}}/><Review>4.8 (122 {t('reviews')})</Review></Reviews>
                        </PassionBox>
                    </PassionCards>
                </PassionSection>
            </Container>
        </PassionBg>
    )
}

export default Trevel;
