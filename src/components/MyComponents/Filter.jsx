import React, {useState} from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {MdSearch} from 'react-icons/md';

const Wrapper = styled.div`
width: 295px;
/* border: 2px solid red; */

`
const Input = styled.input`
width: 290px;
height: 53px;
outline: none;
background: #FFFFFF;
border: 1px solid #E7ECF3;
box-sizing: border-box;
border-radius: 10px;
padding: 16px 20px 13px 20px;
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #B1B5C4;
margin-bottom: 30px;

`
const Label = styled.label`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 23px;
color: #333333;
margin-bottom: 13px;
`

const Div = styled.div`
display: flex;
flex-direction: column;
/* margin: 20px 50px; */
`



const InputWrapper = styled.div`
display: flex;
align-items: center;
position: relative;
`

const SearchIcon = styled.i`
color: #DADADA;
font-size: 26px;
position: absolute;
right: 17px;
top: 16px;
`



////

const Popular = styled.div`
width: 277px;
height: 231px;
border-bottom: 2px solid #E7ECF3;
margin-bottom: 30px;

`
const Title = styled.div`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 23px;
color: #141416;
margin-bottom: 13px;
`
const Checkbox = styled.input`
margin-right: 12px;
border: 1.5px solid #E7ECF3;
box-sizing: border-box;
border-radius: 7px;
width: 24px;
height: 24px;


`
const WrapperBox = styled.div`
display: flex;
align-items: center;
margin-bottom: 14px;

`
const CheckBoxText = styled.div`
display: flex;
justify-content: space-between;
`
const LabelCheckbox = styled.label`
margin-bottom: 0;
cursor: pointer;
font-family: DM Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
color: #3B3E44;

`
const Button = styled.button`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #145CE6;
border: none;
background: none;
cursor: pointer;
`
////

const FilterCard = styled.div`
width: 282px;
height: 142px;
border-bottom: 2px solid #E7ECF3;
margin-bottom: 30px;
`
const FilterCardWrapper = styled.div`
display: flex;
align-items: center;
`
const FilterCardInputText = styled.input`
width: 60px;
height: 32px;
border: 2px solid #316BFF;
box-sizing: border-box;
border-radius: 9px;
padding: 6px 8px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 18px;
color: #0A2541;
outline: none;

`

const FilterCardInputFilterCard = styled.input`
width: 199px;
height: 18px;
margin-right: 17px;
`

const PriceFilterCard = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`
const Span = styled.span`
font-family: DM Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #3B3E44;

`
////

const Property = styled.div`
width: 279px;
height: 191px;
border-bottom: 2px solid #E7ECF3;
margin-bottom: 30px;
`

const Budget = styled.div`
width: 272px;
height:233px;
border-bottom: 2px solid #E7ECF3;
margin-bottom: 30px;
`

const Separated = styled.div`
width: 279px;
height:289px;
border-bottom: 2px solid #E7ECF3;
margin-bottom: 30px;


`
const Spans = styled.span`
font-size: 16px;
font-weight: 400;
line-height: 24px;
color: #84878B;
margin-left: 70px;
`

const Filter = () => {

     const {t} = useTranslation()
    const [value, setValue] = useState(50)
    return (
        <Wrapper>
            <Div>
                <Label htmlFor="in" > {t('searchLoc')}</Label>
                <InputWrapper>
                    <Input type="search" placeholder={t('placeholderr')}/>
                    <SearchIcon className='icon-search'></SearchIcon>
                </InputWrapper>
            </Div>

        <Popular>
            <Title>{t('popFil1')}</Title>

            <WrapperBox>
                <Checkbox  id="hotel" type="checkbox"/>
                <LabelCheckbox htmlFor="hotel">{t('label1')}</LabelCheckbox>
            </WrapperBox>

            <WrapperBox>
                <Checkbox  id="dinner" type="checkbox"/>
                <LabelCheckbox htmlFor="dinner">{t('label2')}</LabelCheckbox>
            </WrapperBox>

            <WrapperBox>
                <Checkbox  id="free" type="checkbox"/>
                <LabelCheckbox htmlFor="free">{t('label3')}</LabelCheckbox>
            </WrapperBox>

            <WrapperBox>
                <Checkbox  id="pay" type="checkbox"/>
                <LabelCheckbox htmlFor="pay">{t('label4')}</LabelCheckbox>
            </WrapperBox>
           <Button>{t('see')}</Button>
        </Popular>

        <FilterCard>
            <Title>{t('popFil2')}</Title>
            <FilterCardWrapper>
                <FilterCardInputFilterCard type="FilterCard" value={value} onChange={e => setValue(e.target.value)}/>
                <FilterCardInputText type="text" value={value} onChange={e => setValue(e.target.value)}/>
            </FilterCardWrapper>
            <PriceFilterCard>
                <Span>$50</Span>
                <Span>$150</Span>
            </PriceFilterCard>
        </FilterCard>


        <Property>
            <Title>{t('popFil3')}</Title>

            <WrapperBox>
                <Checkbox  id="hotels" type="checkbox"/>
                <LabelCheckbox htmlFor="hotels">{t('label1')}</LabelCheckbox>
            </WrapperBox>

            <WrapperBox>
                <Checkbox  id="dinners" type="checkbox"/>
                <LabelCheckbox htmlFor="dinners"> {t('label5')}</LabelCheckbox>
            </WrapperBox>

            <WrapperBox>
                <Checkbox  id="frees" type="checkbox"/>
                <LabelCheckbox htmlFor="frees">{t('label6')}</LabelCheckbox>
            </WrapperBox>

            
           <Button>{t('see')}</Button>
        </Property>

        <Budget>
            <Title>{t('popFil4')}</Title>

            <WrapperBox>
                <Checkbox  id="less" type="checkbox"/>
                <LabelCheckbox htmlFor="less">{t('label7')}</LabelCheckbox>
            </WrapperBox>

            <WrapperBox>
                <Checkbox  id="75" type="checkbox"/>
                <LabelCheckbox htmlFor="75">{t('label8')}</LabelCheckbox>
            </WrapperBox>

            <WrapperBox>
                <Checkbox  id="125" type="checkbox"/>
                <LabelCheckbox htmlFor="125">{t('label9')}</LabelCheckbox>
            </WrapperBox>

            <WrapperBox>
                <Checkbox  id="200" type="checkbox"/>
                <LabelCheckbox htmlFor="200">{t('label10')}</LabelCheckbox>
            </WrapperBox>

            <WrapperBox>
                <Checkbox  id="much" type="checkbox"/>
                <LabelCheckbox htmlFor="much">{t('label11')}</LabelCheckbox>
            </WrapperBox>
        </Budget>


        <Separated>
            <Title>{t('popFil5')}</Title>

            <WrapperBox>
                <CheckBoxText>
                    <Checkbox  id="out" type="checkbox"/>
                    <LabelCheckbox htmlFor="out">{t('label12')}</LabelCheckbox>
                </CheckBoxText>
                <Spans>108</Spans>
            </WrapperBox>
            

            <WrapperBox>
                <CheckBoxText>
                    <Checkbox  id="bar" type="checkbox"/>
                    <LabelCheckbox htmlFor="bar">{t('label13')}</LabelCheckbox>
                </CheckBoxText>
                <Spans>141</Spans>
            </WrapperBox>
            

            <WrapperBox>
                <CheckBoxText>
                    <Checkbox  id="live" type="checkbox"/>
                    <LabelCheckbox htmlFor="live">{t('label14')}</LabelCheckbox>
                </CheckBoxText>
                <Spans>108</Spans>
            </WrapperBox>
            

            <WrapperBox>
                <CheckBoxText>
                    <Checkbox  id="room" type="checkbox"/>
                    <LabelCheckbox htmlFor="room">{t('label15')}</LabelCheckbox>
                </CheckBoxText>
                <Spans>141</Spans>
            </WrapperBox>
           
            <WrapperBox>
                <CheckBoxText>
                    <Checkbox  id="swim" type="checkbox"/>
                    <LabelCheckbox htmlFor="swim">{t('label16')}</LabelCheckbox>
                </CheckBoxText>
                <Spans>108</Spans>
            </WrapperBox>
           

            <WrapperBox>
                <CheckBoxText>
                    <Checkbox  id="spa" type="checkbox"/>
                    <LabelCheckbox htmlFor="spa">{t('label17')}</LabelCheckbox>
                </CheckBoxText>
                <Spans>108</Spans>
            </WrapperBox>
            <Button>{t('see')}</Button>
        </Separated>
        
        
        
            
        </Wrapper>
    )
}

export default Filter
