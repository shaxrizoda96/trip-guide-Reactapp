import React from 'react';
import styled from "styled-components";
import Trending from '../components/Trending';
import Intro from '../components/Intro';
import Search from '../components/Search';
import Feature from '../components/Feature'
import TopTour from '../components/TopTour';
import ExploreWorld from '../components/ExploreWorld';
import Travel from '../components/Travel';
import SearchIntro from '../components/SearchIntro';
import {ForBgColor} from '../styled';
import Subscribe from '../components/Subscribe';
const Home = () => {
    return (
        <section>
            <ForBgColor>
                <Intro />
                <SearchIntro />
                <Search />
                <Feature />
                <TopTour/>
                <ExploreWorld />
                </ForBgColor>
                <Trending />
                <Travel />
                <ForBgColor>
                <Subscribe/>
            </ForBgColor>
          
            
            
        </section>
    );
}

export default Home;
