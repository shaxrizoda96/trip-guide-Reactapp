import React, {useState} from 'react'
import styled from 'styled-components'
import {MdSearch} from 'react-icons/md'

const WholeWrapper = styled.div`
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

const Icon = styled.div`
position: absolute;
top: 40%;
left: 15%;

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
const CheckboxWrapper = styled.div`
display: flex;
align-items: center;
margin-bottom: 14px;

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

const Range = styled.div`
width: 282px;
height: 142px;
border-bottom: 2px solid #E7ECF3;
margin-bottom: 30px;
`
const RangeWrapper = styled.div`
display: flex;
align-items: center;
`
const RangeInputText = styled.input`
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

const RangeInputRange = styled.input`
width: 199px;
height: 18px;
margin-right: 17px;
`

const PriceRange = styled.div`
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

const Facilities = styled.div`
width: 279px;
height:289px;
border-bottom: 2px solid #E7ECF3;
margin-bottom: 30px;


`

const Filter = () => {

    const [value, setValue] = useState(50)
    return (
        <WholeWrapper>
        <Div>
        <Label htmlFor="in" > Search location or property</Label>
        <InputWrapper><Input id="in" placeholder="Search location or property"/><Icon><MdSearch style={{width:'17px', height:'17px'}}/></Icon></InputWrapper>
        </Div>

        <Popular>
            <Title>Popular Filters</Title>

            <CheckboxWrapper>
            <Checkbox  id="hotel" type="checkbox"/>
            <LabelCheckbox htmlFor="hotel">Hotels</LabelCheckbox>
            </CheckboxWrapper>

            <CheckboxWrapper>
            <Checkbox  id="dinner" type="checkbox"/>
            <LabelCheckbox htmlFor="dinner">Breakfast and Dinner</LabelCheckbox>
            </CheckboxWrapper>

            <CheckboxWrapper>
            <Checkbox  id="free" type="checkbox"/>
            <LabelCheckbox htmlFor="free">Free Cancellation</LabelCheckbox>
            </CheckboxWrapper>

            <CheckboxWrapper>
            <Checkbox  id="pay" type="checkbox"/>
            <LabelCheckbox htmlFor="pay">No prepayment</LabelCheckbox>
            </CheckboxWrapper>
           <Button>See More</Button>
        </Popular>

        <Range>
            <Title>Price Range</Title>
            <RangeWrapper>
            <RangeInputRange type="range" value={value} onChange={e => setValue(e.target.value)}/>
            <RangeInputText type="text" value={value} onChange={e => setValue(e.target.value)}/>
            </RangeWrapper>
            <PriceRange>
                <Span>$50</Span>
                <Span>$150</Span>
            </PriceRange>
        </Range>


        <Property>
            <Title>Property Type</Title>

            <CheckboxWrapper>
            <Checkbox  id="hotels" type="checkbox"/>
            <LabelCheckbox htmlFor="hotels">Hotels</LabelCheckbox>
            </CheckboxWrapper>

            <CheckboxWrapper>
            <Checkbox  id="dinners" type="checkbox"/>
            <LabelCheckbox htmlFor="dinners">Apertments</LabelCheckbox>
            </CheckboxWrapper>

            <CheckboxWrapper>
            <Checkbox  id="frees" type="checkbox"/>
            <LabelCheckbox htmlFor="frees">Resort</LabelCheckbox>
            </CheckboxWrapper>

            
           <Button>See More</Button>
        </Property>

        <Budget>
            <Title>Your budget</Title>

            <CheckboxWrapper>
            <Checkbox  id="less" type="checkbox"/>
            <LabelCheckbox htmlFor="less">Less than $75</LabelCheckbox>
            </CheckboxWrapper>

            <CheckboxWrapper>
            <Checkbox  id="75" type="checkbox"/>
            <LabelCheckbox htmlFor="75">$75 to 125</LabelCheckbox>
            </CheckboxWrapper>

            <CheckboxWrapper>
            <Checkbox  id="125" type="checkbox"/>
            <LabelCheckbox htmlFor="125">$125 to 200</LabelCheckbox>
            </CheckboxWrapper>

            <CheckboxWrapper>
            <Checkbox  id="200" type="checkbox"/>
            <LabelCheckbox htmlFor="200">$200 to $300</LabelCheckbox>
            </CheckboxWrapper>

            <CheckboxWrapper>
            <Checkbox  id="much" type="checkbox"/>
            <LabelCheckbox htmlFor="much">Greater than $300</LabelCheckbox>
            </CheckboxWrapper>
        </Budget>


        <Facilities>
            <Title>Facilities</Title>

            <CheckboxWrapper>
            <Checkbox  id="out" type="checkbox"/>
            <LabelCheckbox htmlFor="out">Outdoor Sports 108</LabelCheckbox>
            </CheckboxWrapper>

            <CheckboxWrapper>
            <Checkbox  id="bar" type="checkbox"/>
            <LabelCheckbox htmlFor="bar">Berbeque 141</LabelCheckbox>
            </CheckboxWrapper>

            <CheckboxWrapper>
            <Checkbox  id="live" type="checkbox"/>
            <LabelCheckbox htmlFor="live">Living Room 108</LabelCheckbox>
            </CheckboxWrapper>

            <CheckboxWrapper>
            <Checkbox  id="room" type="checkbox"/>
            <LabelCheckbox htmlFor="room">Room Service 108</LabelCheckbox>
            </CheckboxWrapper>

            <CheckboxWrapper>
            <Checkbox  id="swim" type="checkbox"/>
            <LabelCheckbox htmlFor="swim">Swimming Pool 141</LabelCheckbox>
            </CheckboxWrapper>

            <CheckboxWrapper>
            <Checkbox  id="spa" type="checkbox"/>
            <LabelCheckbox htmlFor="spa">Spa 108</LabelCheckbox>
            </CheckboxWrapper>

            

            
           <Button>See More</Button>
        </Facilities>
        
        
        
            
        </WholeWrapper>
    )
}

export default Filter
