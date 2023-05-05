import React from 'react';
import Hero from '../../Shared/Hero/Hero';
import ChefData from '../Chef/ChefData';
import Extra from './Extra';
import Extra2 from './Extra2';

const Home = () => {
    return (
        <>
        <Hero></Hero>
        <ChefData></ChefData>
        <Extra></Extra>
        <Extra2></Extra2>
        </>
    );
};

export default Home;