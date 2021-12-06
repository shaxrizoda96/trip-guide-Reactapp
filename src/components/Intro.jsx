import React from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';
import { MdHotel } from 'react-icons/md'



const { TabPane } = Tabs;

const Intro = () => {
    
    const IntroPage = styled.section`
    background-image: url(/assets/intro.png);
    background-repeat:no-repeat;
    background-size: 100%;
    height:80vh;
    bacground-position: center;
    position:relative;
    padding: 141px 818px 197px 135px;`

    const IntroTitle = styled.h1`
    Width: 487px;
    Height: 240px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 80px;
    letter-spacing: -0.005em;
    color: #3B3E44;
    text-shadow: 0px 8px 16px rgba(51, 51, 51, 0.08);
    `
    const Container = styled.div`
    max-width: 1440px;
    margin: 0px auto;
    `
    const SearchPage = styled.div`
    Width: 1170px;
    height: 205px;
    position: absolut;
    top: 0;
    z-index: 3;
    margin: 0 auto;
    background: #FFFFFF;
    padding: 30px 60px;
    box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
    border-radius: 20px;
    `
    
    const Search = styled.div`
    display: flex;
    bacground-color: #ffffff;
    padding: 7px;
    border-radius: 7px;
    
    `
    const Contain =  styled.div`
    width: 332px;
    height: 70px;
    display: flex;
    align-item: center;
    justifay-content: center;
    flex-direction: column;
    padding: 0 21px;
    background: #F4F5F7;
    opacity: 0.8;
    border: 1px solid #E7E8EA;
    box-sizing: border-box;
    border-radius: 8px;
    margin-left: 8px;
    `

    const Label = styled.label`
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #3B3E44;
`
    const Input = styled.input`
    background-color: transparent;
    border: none;
    text-align: center;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #B1B5C4;
`
    const Button =  styled.button`
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
    color: #FFFFFF;
    background: #3B71FE;
    border-radius: 10px;
    padding: 23px 42px;
    cursor: pointer;
    text-transform: uppercise;
    transition: 0.3s ease-in-out;
    margin-left: 50px;
`
    
    return (
        
        <IntroPage>
            <Container>
            <IntroTitle>
                Book With Us And Enjoy your Journey !
            </IntroTitle>

            <SearchPage>
            <Demo />

            <Search>
               <Contain>
                    <Label htmlFor="">Location</Label>
                    <Input type="text" placeholder="Where are you from?"/>
                </Contain>

                <Contain>
                    <Label htmlFor="">Check in</Label>
                    <Input type="data" placeholder="Add data"/>
                </Contain>

                <Contain>
                    <Label htmlFor="">Check out</Label>
                    <Input type="data" placeholder="Add data"/>
                </Contain>
                <Button>Search</Button>

            </Search>
            
           </SearchPage>
          
            </Container>
            </IntroPage>
    )
    
}
function callback(key) {
    console.log(key);
  }
   const Demo = () => (
    <Tabs defaultActiveKey="1" onChange={callback}> 
    <MdHotel/>
      <TabPane  tab="Hotel" key="1"> 
        
      </TabPane>
      <TabPane tab="Flight" key="2">
        
      </TabPane>
      <TabPane tab="Car Rental" key="3">
    
      </TabPane>
    </Tabs>
  );
  
    

export default Intro;
// width: 100%;
//     height: 100%;
//    
//     text-align: center;
//     display: flex;
//     flex-direction: column;
//     justufay-content: center;
//    align-items: center;
