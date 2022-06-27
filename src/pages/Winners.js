import React from "react";
import styled from "styled-components";
//Import images
import DynastyOne from '../img/35dynasty1.jpg';
import DynastyTwo from '../img/36dynasty2.jpg';
import SafetyWinner from '../img/37safetywinner.jpg';

const Winners = () => {
    return(
        <ImageDisplay>
            <h1>Победители конкурсов:</h1>

            <h2>1. Трудовая династия</h2>
            <p>Победу в региональном конкурсе "Лучшая трудовая династия" одержала династия Гредчиных – Волковых – Крюковых</p>
            <a href="https://riamo-ru.turbopages.org/riamo.ru/s/article/555748/rosseti-moskovskij-region-nagradili-luchshuyu-trudovuyu-dinastiyu-podmoskovya-xl">Подробности</a>
            <img src={DynastyOne} alt='dynasty' />
            <img src={DynastyTwo} alt='dynasty'/>

            <h2>2. Победитель конкурса "Лучший уполномоченный по охране труда"</h2>
            <img src={SafetyWinner} alt='safety winner' />
        </ImageDisplay>
    );
};

const ImageDisplay = styled.div`
    //min-height: 50vh;
    h1 {
        color: #fff;
        padding: 10px 0 0 20px;
        margin: 0 0 20px;
        @media screen and (max-width: 450px) {
            font-size: 1.25rem;
        }
    }
    h2, p {
        background: #495a78;
        color: #fff;
        margin: 20px 0;
        padding: 10px 0 10px 20px;
        text-decoration: underline;
    }
    a {
        /* background: #508ac0; */
        font-size: 1.25rem;
        padding: 10px 0 10px 20px;
        text-decoration: underline;
        width: 100%;
        &:hover {
            cursor: pointer;
        }
    }
    img {
        //height: 100vh;
        object-fit: cover;
        width: 100%;
    }
`;


export default Winners;