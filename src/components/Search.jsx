import React from 'react'
import styled from 'styled-components';

const Search = () => {

    const Section = styled.section`
    padding: 75px 0px;`

    const Container = styled.div`
    max-width: 1170px;
    margin: 0 auto;`

    const Title = styled.h2`
    font-family: DM Sans;
font-weight: bold;
font-size: 48px;
text-align: center;
line-height: 70px;
color: #23262F;

    `
    const Page = styled.p`
    Width: 593px;
    Height: 48px;
    font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 16px;
margin: 0 auto 30px;
line-height: 24px;
align-item: center;
text-align: center;
color: #84878B;
`
    const Cards = styled.div`
    display: flex;
    justfay-content: speace-between;
    flex-wrap: wrap;
    `
    const Card = styled.div`
    width: 270px;
    height: 202px;
    border: 1px solid #E7ECF3;
box-sizing: border-box;
border-radius: 10px;
padding: 25px 30px;
margin: 10px;`


    const CardTitle = styled.h3`
    font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 26px;
color: #3B3E44;
margin-bottom: 12px;

`
    const CardPage = styled.p`
    font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #84878B;`

const Img = styled. img`
width: 70px;
height: 70px;
border-radius: 12px;
margin-bottom: 18px;`

    return (
        <div>
            <Section>
                <Container>
                    <Title>
                    Search a best place in the world
                    </Title>
                    <Page>
                    Whether you’re looking for places for a vacation. We are here to Guide you
about the details you need to check in and ease your trips in advance
                    </Page>
                    <Cards>
                        <Card>
                            <Img src="/assets/1.png" alt="" />
                            <CardTitle>Batu, East Java</CardTitle>
                            <CardPage>86 Destinations</CardPage>
                        </Card>
                        <Card>
                            <Img src="/assets/2.png" alt="" />
                            <CardTitle>Kuta</CardTitle>
                            <CardPage>86 Destinations</CardPage>
                        </Card>
                        <Card>
                            <Img src="/assets/3.png" alt="" />
                            <CardTitle>Surabaya, East Java</CardTitle>
                            <CardPage>86 Destinations</CardPage>
                        </Card>
                        <Card>
                            <Img src="/assets/4.png" alt="" />
                            <CardTitle>Malang, East Java</CardTitle>
                            <CardPage>186 Destinations</CardPage>
                        </Card>
                        <Card>
                            <Img src="/assets/5.png" alt="" />
                            <CardTitle>Dieng, Central Java</CardTitle>
                            <CardPage>86 Destinations</CardPage>
                        </Card>
                        <Card>
                            <Img src="/assets/6.png" alt="" />
                            <CardTitle>Nusa Dua, Lombok</CardTitle>
                            <CardPage>86 Destinations</CardPage>
                        </Card>
                        <Card>
                            <Img src="/assets/7.png" alt="" />
                            <CardTitle>Bandung, West Java</CardTitle>
                            <CardPage>86 Destinations</CardPage>
                        </Card>
                        <Card>
                            <Img src="/assets/8.png" alt="" />
                            <CardTitle>Wakatobi, Sumatera</CardTitle>
                            <CardPage>186 Destinations</CardPage>
                        </Card>
                    </Cards>

                </Container>
            </Section>
        </div>
    )
}

export default Search
