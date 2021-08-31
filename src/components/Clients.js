import React from 'react';
import AndrewPorter from '../img/logo/Andrew-Porter-Logo.png';
import IdealContracting from '../img/logo/ideal-contracting-logo.png';
import Leadership from '../img/logo/leadership-logo.png';
import PLA from '../img/logo/PLA-logo.png';
import walbrigde from '../img/logo/walbrigde-logo.png';

const Clients = () => {
    return (
        <div id="clients">
            <img src={AndrewPorter} alt="Andrew Porter Logo" />
            <img src={Leadership} alt="Leadership Logo" />
            <img src={walbrigde} alt="Walbrigde Logo" />
            <img src={IdealContracting} alt="Ideal Contracting Logo" />
            <img src={PLA} alt="Phalen Leadership Academies Logo" />
        </div>
    );
};

export default Clients;