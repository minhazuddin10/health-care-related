import React from 'react';
import Blog from '../Blog/Blog';
import HeroBanner from '../HeroBanner/HeroBanner';
import IntroducingTeam from '../IntroducingTeam/IntroducingTeam';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <HeroBanner></HeroBanner>
            <IntroducingTeam></IntroducingTeam>
            <Services></Services>
            <Blog></Blog>
        </>
    );
};

export default Home;