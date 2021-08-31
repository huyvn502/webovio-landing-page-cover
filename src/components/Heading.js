import React from 'react';
import NavigationBar from './heading/NavigationBar';
import Header from './heading/Header';
import ImageHeading from '../img/header-background.png';


const Heading = () => {
    return (
        <div id="heading">
            <img src={ImageHeading} alt="Heading Image Background" id="heading-background" />
            <NavigationBar />
            <Header />
        </div>
    );
};

export default Heading;