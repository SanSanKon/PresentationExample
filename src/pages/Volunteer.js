import React from "react";
import styled from "styled-components";
//import { MovieState } from "../movieState";
//Import images
import VolunteerMain from '../img/volunteerMain.jpg';
import kindel4kids from "../img/kindel4kids.jpg";
import kindel4kids2 from '../img/kindel4kids2.jpg';
import care4kids from '../img/care4kids.jpg';
import ancestors from '../img/ancestors.jpg';
import weRemember from '../img/weRemember.jpg';
import victoryForest from '../img/victoryForest.jpg';

const Volunteer = () => {

    return (
        <ImageDisplay>
        <img src={VolunteerMain} alt='volunteer' />

        <h2>1. Доброе электричество - детям</h2>
        <img src={kindel4kids} alt="movie"/>

        <h2>2. Доброе электричество - детям</h2>
        <img src={kindel4kids2} alt="movie"/>

        <h2>3. С заботой о детях</h2>
        <img src={care4kids} alt="movie"/>

        <h2>4. Предки и потомки</h2>
        <img src={ancestors} alt="movie"/>

        <h2>5. Мы помним</h2>
        <img src={weRemember} alt="movie"/>

        <h2>6. Лес победы</h2>
        <img src={victoryForest} alt="movie"/>
    </ImageDisplay>

    );
}

const ImageDisplay = styled.div`
    //min-height: 50vh;
    h2 {
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

export default Volunteer; 