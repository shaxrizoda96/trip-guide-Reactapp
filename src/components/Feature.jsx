import {useTranslation} from 'react-i18next'
import  styled from "styled-components"
import {Container , Theme, Text} from  "../styled"



const FeatureGrid = styled.div`
  display: flex;
`;

const FeaturedLeft = styled.div`
  margin-right: 30px;
`;

const FeaturedRight = styled.div`
  position: relative;
`;

const Lefttopimg = styled.div`
  width: 870px;
  height: 280px;
  margin-bottom: 30px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        45deg, rgba(35, 35, 35, 0.58) 0%, rgba(196, 196, 196, 0) 100%);
    border-radius: 15px
}
`;

const Barselona = styled.img`
border-radius: 18px;
`
const FeatureImg = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 30px;
    background: linear-gradient(
        45deg, rgba(35, 35, 35, 0.58) 0%, rgba(196, 196, 196, 0) 100%);
    border-radius: 15px;
}
`;

const BottomImages = styled.div`
display:flex;
justify-content: space-between;
`

const ImageRight = styled.img`
  width: 270px;
  height: 220px;
  display: flex;
  margin-bottom: 30px;
  border-radius: 18px;
`;

const BottomImg = styled.img`
  width: 408px;
  height: 408px;
  margin-bottom: 30px;
  border-radius: 18px;
`;
const FeatureSpan = styled.span`
font-size: 18px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0em;
color: #FF543D;
padding: 3px 20px;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
border-radius: 20px;
position: absolute;
top: 20px;
left: 20px;
`

const FeatureSpanSmall = styled.span`
font-size: 18px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0em;
color: #FF543D;
padding: 3px 20px;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
border-radius: 20px;
position: absolute;
top: 20px;
left: 20px;
`
const FeatureSpanSmall2 = styled.span`
font-size: 18px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0em;
color: #FF543D;
padding: 3px 20px;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
border-radius: 20px;
position: absolute;
top: 20px;
left: 20px;
`


const ImageRight1 = styled.div`
position:relative;
&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
      45deg, rgba(35, 35, 35, 0.58) 0%, rgba(196, 196, 196, 0) 100%);
  border-radius: 15px;
  z-index: 99;
}
`
const ImageRight2 = styled.div`
position:relative;
&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
      45deg, rgba(35, 35, 35, 0.58) 0%, rgba(196, 196, 196, 0) 100%);
  border-radius: 15px;
  z-index: 99;
}
`
const ImageRight3 = styled.div`
position:relative;
&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
      45deg, rgba(35, 35, 35, 0.58) 0%, rgba(196, 196, 196, 0) 100%);
  border-radius: 15px;
  z-index: 99;
}
`

const TourInfo = styled.div`
position: absolute;
bottom: 50px;
left:20px;
`
const ToursInfo = styled.div`
position: absolute;
bottom: 20px;
left:20px;
`

const ToursName = styled.p`
font-weight: bold;
font-size: 40px;
line-height: 24px;
color: #FFFFFF;
margin-bottom: 20px;
`

const TourPage = styled.p`
font-size: 24px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0em;
color: #FFFFFF;
margin-bottom: 12px;
`
const ToursNameSmall = styled.p`
font-size: 18px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0em;
color: #FFFFFF;
margin-bottom: 6px;
`

const FeatureActiv = styled.span`
font-size: 14px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
color: #FFFFFF;
`

const ActivitiesSmall = styled.span`
font-size: 10px;
font-weight: 400;
line-height: 15px;
letter-spacing: 0em;
color: #FFFFFF;
`
const Avatar1 = styled.img`
border-radius: 50%;
`
const Avatar = styled.img`
border-radius: 50%;
`

const Feature=()=>{
    const {t} = useTranslation()
    return(
      <Container>
          <section>
            <Theme>{t('featuredtheme')}</Theme>
            <Text>{t('featuedtext')}</Text>
          </section>
          <FeatureGrid>
                <FeaturedLeft>
                  <Lefttopimg>
                    <Barselona src='/assets/barcelona.jpg'/>
                    <FeatureSpan>3.5</FeatureSpan>
                    <ToursInfo>
                      <ToursName>{t('tourname')}</ToursName>
                      <FeatureActiv> <Avatar1 src='/assets/avataractivitie.jpg'/> 196{t('touractivitie')} </FeatureActiv>
                    </ToursInfo>
                  </Lefttopimg>
                      <BottomImages>
                        <FeatureImg>
                          <BottomImg src='/assets/london.jpg'/>
                          <FeatureSpan>3.5</FeatureSpan>
                            <TourInfo>
                                <TourPage> {t('toursNameMifddle')}</TourPage>
                                <FeatureActiv><Avatar src='/assets/activite2.jpg'/> 196{t('touractivitie')}</FeatureActiv>
                            </TourInfo>
                        </FeatureImg>
                        <FeatureImg>
                            <BottomImg src='/assets/australia.jpg'/>
                            <FeatureSpan>3.5</FeatureSpan>
                            <TourInfo>
                                <TourPage> {t('toursNameMifddle2')}</TourPage>
                                <FeatureActiv ><Avatar src='/assets/activite2.jpg'/> 196 {t('touractivitie')}</FeatureActiv>
                            </TourInfo>
                        </FeatureImg>
                      </BottomImages>
                </FeaturedLeft>


                
                <FeaturedRight>
                  <ImageRight1>
                    <ImageRight src='/assets/australia2.jpg'/>
                    <FeatureSpanSmall>3.5</FeatureSpanSmall>
                    <ToursInfo>
                        <ToursNameSmall>{t('TourPage2')}</ToursNameSmall>
                        <ActivitiesSmall><Avatar src='/assets/activite2.jpg'/> 196 {t('touractivitie')}</ActivitiesSmall>
                    </ToursInfo>
                  </ImageRight1>


                  <ImageRight2>
                    <ImageRight src='/assets/japan1.jpg'/>
                    <FeatureSpanSmall2>3.5</FeatureSpanSmall2>
                    <ToursInfo>
                        <ToursNameSmall>{t('toursNameSmall')}</ToursNameSmall>
                        <ActivitiesSmall><Avatar src='/assets/activite2.jpg'/> {t('touractivitie')}</ActivitiesSmall>
                    </ToursInfo>
                  </ImageRight2>


                  <ImageRight3>
                    <ImageRight src='/assets/japan.jpg'/>
                    <FeatureSpanSmall>3.5</FeatureSpanSmall>
                    <ToursInfo>
                        <ToursNameSmall> {t('toursNameSmall')}</ToursNameSmall>
                        <ActivitiesSmall><Avatar src='/assets/activite2.jpg'/> 196 {t('touractivitie')}</ActivitiesSmall>
                    </ToursInfo>
                  </ImageRight3>

                </FeaturedRight>
            </FeatureGrid>
          </Container>
            
        
    )
}

export default Feature;