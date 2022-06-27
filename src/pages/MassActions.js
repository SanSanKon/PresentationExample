import React from "react";
import styled from "styled-components";
//Import images
import Fishing from '../img/29fishing.jpg';
import Skiing from '../img/30skiing.jpg';
import SkiingVolik from '../img/39skiingVolik.jpg';
import SkiingSes from '../img/40skiingses.jpg';
import SkiingSes2 from '../img/42skiingses2.jpg';

const MassActions = () => {
    return (
        <ImageDisplay>
            <h1>Культурно-массовые мероприятия:</h1>

            <h2>1. Ловись, рыбка</h2>
            <img src={Fishing} alt="fishing"/>

            <h2>2. Наша лыжня</h2>
            <img src={Skiing} alt="skiing"/>

            <p>2.1. Лыжня Натальи Волик</p>
            <img src={SkiingVolik} alt='skiing volik' />

            <p>2.2. Лыжные старты Северных электрических сетей</p>
            <img src={SkiingSes} alt='skiingses' />
            <img src={SkiingSes2} alt='skiingses2'/>
        </ImageDisplay>

    );
};

const ImageDisplay = styled.div`
    //min-height: 50vh;
    h1 {
        color: #fff;
        padding: 10px 0 0 20px;
        margin: 0 0 20px;
    }
    h2, p {
        background: #495a78;
        color: #fff;
        margin: 20px 0;
        padding: 10px 0 10px 20px;
        text-decoration: underline;
    }
    img {
        //height: 100vh;
        object-fit: cover;
        width: 100%;
    }
`;

export default MassActions;