import styled, { ThemeContext } from 'styled-components';
import {Link, Navigate, useNavigate } from "react-router-dom";
import {useTranslation} from 'react-i18next'



const Cards = styled.div`
border: 1px solid ${(props) => props.theme.dropcontenborder};
background:  ${(props) => props.theme.dropcontentbgColor};
padding: 20px 46px 31px 46px;
width: 408px;
height: 910px;
border-radius: 20px;
`

const PricesList = styled.div`
display: flex;
border-bottom: 1px solid  #E6E8EC;
padding:15px;
align-items: center;
`
const Price = styled.h1`
font-weight: bold;
font-size: 34px;
line-height: 44px;
letter-spacing: -0.005em;
color: ${(props) => props.theme.priceColor};
margin: 0;
`
const Night = styled.span`
color: #84878B;
padding-top: 10px;
`
const Price2 = styled.span`
color: #B1B5C4;
font-size: 18px;
font-weight: 400;
line-height: 23px;
margin-left: 16px;
margin-top: 16px;
`
const Discount = styled.span`
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 18px;
color: #FFFFFF;
background: #145CE6;
padding: 6px 12px;
width: 80px;
border-radius: 25px;
margin-left: 50px;
`
const Row = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 14px;
`

const Check = styled.p`
font-size: 16px;
font-weight: 500;
line-height: 24px;
margin: 20px 0px 12px 0px;
color: ${(props) => props.theme.checkColor};
`
const Dates = styled.div`
display: flex;
align-items: center;
`
 const Calendar = styled.div`
position: relative;
background:${(props) => props.theme.inputBgColors};
box-sizing: border-box;
border-radius: 10px;
width: 152px;
padding: 12px 20px;
&:nth-child(2){
  margin-right: 9px;
}
`
const DataInput = styled.input`
outline: none;
width: 200px;
background-color: transparent;
border-width: initial;
border-style: none;
border-color: initial;
border-image: initial;
outline: none;
padding-left: 20px;
`
const CalIcon = styled.i`
position: absolute;
top: 12px;
left: 15px;
color: #777E90;
font-size: 20px;
`
const Guess = styled.div`
position: relative;
margin: 20px 0px 12px 0px;
`
const GuestInput = styled.input`
Width :316px;
background: ${(props) => props.theme.inputBgColors};
border-radius: 10px;
border: none;
padding: 12px 14px;
`
const BottomIcon = styled.i`
color: #353945;
font-size: 10px;
position: absolute;
top: 60px;
right: 20px;
`
const CardsName = styled.h4`
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: ${(props) => props.theme.guesExtraColor};
`

const Label = styled.label`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color:  ${(props) => props.theme.labelColor};
`

const InputCheck = styled.input`
height: 18px;
width: 18px;
border-radius: 4px;
margin-right: 10px;
`

const Span = styled.span`
font-family: Roboto;
font-size: 14px;
font-weight: 500;
line-height: 27px;
color: #B1B5C3;
`

const PricesLists = styled.div`
width: 316px;
border-radius: 10px;
background: ${(props) => props.theme.inputBgColors};
padding: 13px 20px;
`
const Chexbox = styled.div`
// margin-right: 50px;
`
const PriceText = styled.p`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color:  ${(props) => props.theme.labelColor};
margin-bottom: 0;

`
const Span2 = styled.span`
font-family: Roboto;
line-height: 27px;
color: ${(props) => props.theme.labelColor};
`
const Total = styled.p`
font-size: 16px;
font-weight: 500;
line-height: 24px;
margin: 20px 0px 12px 0px;
color: ${(props) => props.theme.guesExtraColor};
`

const Span3 = styled.span`
font-family: Roboto;
font-size: 16px;
font-weight: 500;
line-height: 27px;
color: ${(props) => props.theme.labelColor};
`
const BookNow = styled.div`
text-align: center;
padding-bottom: 64px;
`
const Btn = styled(Link)`
font-size: 20px;
font-weight: 700;
line-height: 26px;
color: #FFFFFF;
background: #316BFF;
width: 360px;
padding: 11px 104px;
border-radius: 12px;
border: none;

`

const Charged = styled.p`
font-size: 14px;
font-weight: 400;
line-height: 21px;
color: #777E90;
margin-top: 20px;
`
const Card = (props)=>{

      const {t} = useTranslation();
     
    return(
        <Cards>
          <PricesList>
              <div style={{display: 'flex', alignItems: 'center'}}> 
                <Price>$142 </Price>
                <Night>/{t('night')}</Night>
              </div>
              <Price2>$184</Price2>
              <Discount>20% {t('Discount')}</Discount>
          </PricesList>
            <Dates>
              <div>
                <Check>{t('check1')}</Check>
                <Calendar>
                    <DataInput className='check' type='text' placeholder={t('placeholdermay')} />
                    <CalIcon className='icon-calendar'></CalIcon>
                </Calendar>
              </div>
              <div>
                <Check>{t('check2')}</Check>
                <Calendar>
                    <DataInput className='check' type='text' placeholder={t('placeholdermay')}/>
                    <CalIcon className='icon-calendar'></CalIcon>
                </Calendar>
              </div>
            </Dates>
            <Guess>
                <CardsName>{t('cardsName')}</CardsName>
                <GuestInput type='text' placeholder='2 Adults, 1 Children'/>
                <BottomIcon className='icon-bottom'></BottomIcon>
            </Guess>
            <CardsName>{t('cardsName2')}</CardsName>
            <Row>
              <Chexbox>
                <InputCheck type="checkbox" id="check3"/>
                <Label htmlFor=''>{t('labelAllow')}</Label>
              </Chexbox>
              <Span>$13</Span>
            </Row>
            <Row>
              <Chexbox>
                <InputCheck type="checkbox" id="check3"/>
                <Label htmlFor=''>{t('labelbr')}</Label>
              </Chexbox>
              <Span>$10</Span>
            </Row>
            <Row>
              <Chexbox>
                <InputCheck type="checkbox" id="check3"/>
                <Label htmlFor=''>{t('labelpr')}</Label>
              </Chexbox>
              <Span>$6</Span>
            </Row>
            <Row>
              <Chexbox>
                <InputCheck type="checkbox" id="check3"/>
                <Label htmlFor=''>{t('labelex')}</Label>
              </Chexbox>
              <Span>{t('spanfree')}</Span>
            </Row>
            <div>
              <CardsName>{t('cardsName3')}</CardsName>
              <PricesLists>
                  <Row><PriceText>1 {t('priceText1')}</PriceText><Span2>$500</Span2></Row>
                  <Row><PriceText>{t('priceText2')}</PriceText><Span2>$200</Span2></Row>
                  <Row><PriceText>{t('priceText3')}</PriceText><Span2>$10</Span2></Row>
                  <Row><PriceText>{t('priceText4')}</PriceText><Span2>$5</Span2></Row>
              </PricesLists>
            </div>
            <Row>
                <Total>{t('total')}</Total>
                <Span3>$300</Span3>
            </Row>
            <BookNow>
              <Btn  to={`/payment`}>{t('bookNow')}</Btn>
              <Charged>{t('charged')}</Charged>
            </BookNow>
        </Cards>

    )
}

export default Card;