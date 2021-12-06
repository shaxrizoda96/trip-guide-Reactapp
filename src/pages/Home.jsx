import React from 'react';
import styled from "styled-components";
import Trending from '../components/Trending';
import Intro from '../components/Intro';
import Search from '../components/Search';
import Feature from '../components/Feature'
import TopTour from '../components/TopTour';
import Explore from '../components/Explore';
import Travel from '../components/Travel';

const Box = styled.div`
    width: 500px;
    height: 100px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.cardBg};
    padding: 10px 20px;
`;

const Home = () => {
    return (
        <div>
            <Intro />
            <Search />
            <Feature />
            <TopTour/>
            <Explore />
            <Trending />
            <Travel />
          
            {/* <Box>This is home page </Box> */}
            
        </div>
    );
}

export default Home;
