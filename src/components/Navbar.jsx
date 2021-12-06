import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
background: #FFFFFF;
align-items: center;
padding: 20px 40px;
border: 2px solid red;
`  
const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  cursor: pointer;
  
`
const NavInner = styled.div`
display: flex;
justify-content: space-between;
`

const NavBrand = styled.div`
display: flex;
justifay-content: center;
align-items: center;
text-transform: uppercase;
`

const Title = styled.h2`
font-family: Open Sans;
font-size: 20px;
font-weight: 700;
line-height: 27px;
color: #222529;
margin-left: 10px;

`
const NavLeft = styled.div `
display: flex;

`
const Image = styled.img`
margin: 0 14px;
align-item: center;
`
const Contact = styled.h3`
font-family: Roboto;
font-weight: 700;
text-align: center;
align-item:center;
font-size: 14px;
line-height: 16px;
color: #3B3E44;
`
const Navbar = () => {
    return (
        <Nav>
           <Container>
                <NavInner>
                    <NavBrand>
                          <img src="/assets/header-logo.png" alt="header_logo" />
                          <Title>TripGuide</Title>
                    </NavBrand>
                    <NavLeft>
                        <Image src="/assets/currency.svg" alt="" />
                        <Image src="/assets/language.svg" alt="" />
                        <Image src="/assets/notification.svg" alt="" />
                        <Image src="/assets/Rectangle1058.svg" alt="" />
                       <Contact>Delowar</Contact>
                        <Image src="/assets/rectangle.svg" alt="" />
                    </NavLeft>
                </NavInner>
           </Container>
        </Nav>
    )
}

export default Navbar
