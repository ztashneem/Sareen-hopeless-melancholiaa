import React from 'react';
import { Toaster } from 'react-hot-toast';
import Banner from '../Banner/Banner';
import Expensive from './Expensive/Expensive';
import Featured from './Featured/Featured';
import Photoghraper from './Photgrapher/Photoghraper';
import Story from './Photgrapher/Story/Story';
import Massio from './Services/Massio/Massio';
import Services from './Services/Services';
import Stories from './STORIES/Stories';

const Home = () => {
    return (
        <div>
            <Toaster></Toaster>
            <Banner></Banner>
            <Photoghraper></Photoghraper>
            <Massio></Massio>
            <Services></Services>
            <Featured></Featured>
            <Stories></Stories>
            <Expensive></Expensive>
            <Story></Story>
        </div>
    );
};

export default Home;