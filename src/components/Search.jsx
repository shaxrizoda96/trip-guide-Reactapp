import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import { Container,  SectionBg, IntroTheme, PlaceName } from '../styled';

    
    const Places = styled.section`
    margin-top:70px;
    margin-bottom: 82px;
`
    const PlaceText = styled.div`
    text-align:center;
    `
    const IntroText = styled.p`
    font-family: Poppins;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0em;
    color: #84878B;
    width: 593px;
    margin: 0 auto;
    `
    const Cards = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 65px;
    `
    const Card = styled.div`
    width: 270px;
    border-radius: 10px;
    border: 1px solid #E7ECF3;
    padding: 30px;
    margin-bottom: 30px;
    &:hover {
        {
        background:  ${(props) => props.theme.cardHover};
        box-shadow: 0px 20px 51px 0px #6060601A;
    }`

    const CardPage = styled.p`
    font-size: 14px;
font-weight: 500;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
color: #84878B;`

    const Img = styled. img`
    height: 70px;
    width: 70px;
    left: 330px;
    top: 249.00244140625px;
    border-radius: 10px;`

const Search = () => {
      const {t} = useTranslation();
  
    return (
        <>
            <SectionBg>
                <Container>
                    <Places>
                        <PlaceText>
                        <IntroTheme>{t('besttitle')}</IntroTheme>
                        <IntroText>{t('besttext')}</IntroText>
                        </PlaceText>
                    <Cards>
                        <Card>
                            <Img src="/assets/1.png" alt="" />
                            <PlaceName>Batu, East Java</PlaceName>
                            <CardPage>86 Destinations</CardPage>
                        </Card>
                        <Card>
                            <Img src="/assets/2.png" alt="" />
                            <PlaceName>Kuta</PlaceName>
                            <CardPage>86 Destinations</CardPage>
                        </Card>
                        <Card>
                            <Img src="/assets/3.png" alt="" />
                            <PlaceName>Surabaya, East Java</PlaceName>
                            <CardPage>86 Destinations</CardPage>
                        </Card>
                        <Card>
                            <Img src="/assets/4.png" alt="" />
                            <PlaceName>Malang, East Java</PlaceName>
                            <CardPage>186 Destinations</CardPage>
                        </Card>
                        <Card>
                            <Img src="/assets/5.png" alt="" />
                            <PlaceName>Dieng, Central Java</PlaceName>
                            <CardPage>86 Destinations</CardPage>
                        </Card>
                        <Card>
                            <Img src="/assets/6.png" alt="" />
                            <PlaceName>Nusa Dua, Lombok</PlaceName>
                            <CardPage>86 Destinations</CardPage>
                        </Card>
                        <Card>
                            <Img src="/assets/7.png" alt="" />
                            <PlaceName>Bandung, West Java</PlaceName>
                            <CardPage>86 Destinations</CardPage>
                        </Card>
                        <Card>
                            <Img src="/assets/8.png" alt="" />
                            <PlaceName>Wakatobi, Sumatera</PlaceName>
                            <CardPage>186 Destinations</CardPage>
                        </Card>
                    </Cards>
                    </Places>
                </Container>
            </ SectionBg>
        </>
    )
}

export default Search
