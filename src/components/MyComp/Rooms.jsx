import styled from 'styled-components';
import {useTranslation} from 'react-i18next';

const RoomsPage = styled.section`
max-width: 60%;
`
const LuxRooms = styled.h2`
font-size: 40px;
font-weight: 700;
line-height: 60px;
letter-spacing: -0.005em;
color: ${(props) => props.theme.exlusiveroomColor};
margin-bottom: 0;
`
const HotelName = styled.p`
font-size: 24px;
font-weight: 500;
line-height: 36px;
letter-spacing: 0em;
color:${(props) => props.theme.zuichcolor};
margin-top: 10px;
padding-bottom: 20px;
border-bottom: 1px solid ${(props) => props.theme.priceBg};
`
const LuxText = styled.p`
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
color:${(props) => props.theme.exclusiveColor};
margin-top: 30px;
`

const HotelFunction = styled.h3`
font-size: 24px;
font-weight: 500;
line-height: 36px;
color: ${(props) => props.theme.feature};
margin-bottom: 10px;
margin-top: 50px;
`

const Hotelservice = styled.div`
display: flex;
border-bottom: 1px solid ${(props) => props.theme.priceBg};
padding-bottom: 50px;
`

const Obligation = styled.p`
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
color: ${(props) => props.theme.featureLicolor};
margin-right: 40px;
`

const ObligationIcon = styled.i`
color: ${(props) => props.theme.exclusiveColor};
font-size: 18px;
margin-right: 10px;
`

const Amenities = styled.div`
display: flex;
align-items: center;
`
const CardService = styled.div`
margin-right: 190px;
`

const AmenitiesNames = styled.p`
font-size: 16px;
font-weight: 400;
line-height: 24px;
color: ${(props) => props.theme.amenitiesColor};
`

const AmenitiesIcon = styled.i`
font-size: 18px;
color: ${(props) => props.theme.exclusiveColor};
margin-right: 17px;
`

const MoreBtn = styled.button`
font-size: 16px;
font-weight: 500;
line-height: 19px;
color: #FFFFFF;
background: #3B71FE;
border-radius: 47px;
padding: 10px 30px;
border: none;
margin-top: 47px;
`

const Tabs = styled.div`
border-bottom: 1px solid ${(props) => props.theme.priceBg};
padding-bottom: 10px;
`
const TabList = styled.div`
display: flex;
position: relative;
`
const Tab1 = styled.p`
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: #145CE6;
margin-right: 40px;
&:after{
    content: '';
    position: absolute;
    height: 2px;
width: 81px;
border-radius: 12px;
background: #145CE6;
bottom: -10px;
left: 0;
z-index: 99;
}
`
const Tab = styled.p`
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: #23262F;
margin-right: 40px;
`
const Rooms = ()=>{
    const {t} = useTranslation();
    return (
        <RoomsPage>

            <LuxRooms>{t('exclusiveroom')}</LuxRooms>
            <HotelName>{t('hotelName')}</HotelName>
             <Tabs>
                     <TabList >
                        <Tab1>{t('tab1')}</Tab1>
                        <Tab >{t('tab2')}</Tab>
                        <Tab >{t('tab3')}</Tab>
                        <Tab>{t('tab4')}</Tab>
                    </TabList>
             </Tabs>
             <LuxText>{t('exclusiveText')}</LuxText>
             <div>
                 <HotelFunction>{t('hotelfeadtures')}</HotelFunction>
                 <Hotelservice>
                     <Obligation><ObligationIcon className='icon-wifitop'/>{t('features1')}</Obligation>
                     <Obligation><ObligationIcon className='icon-bath'/>{t('features2')}</Obligation>
                     <Obligation><ObligationIcon className='icon-food'/>{t('features3')}</Obligation>
                     <Obligation><ObligationIcon className='icon-bed'/> {t('features4')}</Obligation>
                     <Obligation><ObligationIcon className='icon-krug'/>{t('featucres5')}</Obligation>
                 </Hotelservice>
             </div>
             <div>
                 <HotelFunction>{t('amenities')}</HotelFunction>
                 <Amenities>

                 <CardService>
                     <AmenitiesNames><AmenitiesIcon className='icon-wifitop'/>{t('amenitiesNames1')}</AmenitiesNames>
                     <AmenitiesNames><AmenitiesIcon className='icon-komp'/>{t('amenitiesNames2')}</AmenitiesNames>
                     <AmenitiesNames><AmenitiesIcon className='icon-klavish'/>{t('amenitiesNames1')}</AmenitiesNames>
                     <AmenitiesNames><AmenitiesIcon className='icon-televizor'/>{t('amenitiesNames1')}</AmenitiesNames>
                 </CardService>
                 <div>
                     <AmenitiesNames><AmenitiesIcon className='icon-bath'/>{t('amenitiesNames5')}</AmenitiesNames>
                     <AmenitiesNames><AmenitiesIcon className='icon-pizza'/>{t('amenitiesNames6')} </AmenitiesNames>
                     <AmenitiesNames><AmenitiesIcon className='icon-klavish'/>{t('amenitiesNames7')}</AmenitiesNames>
                     <AmenitiesNames><AmenitiesIcon className='icon-apartment'/>{t('amenitiesNames8')}</AmenitiesNames>
                 </div>
                 </Amenities>
             </div>
             <MoreBtn>{t('moreBtn')}</MoreBtn>
        </RoomsPage>
    )
}

export default Rooms;