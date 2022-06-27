import React from "react";
//Import images
import OsnPokaz from '../img/empty.jpg';
import PlanOne from '../img/empty.jpg';
import PlanTwo from '../img/empty.jpg';
import YouthActOne from '../img/empty.jpg';
import YouthActTwo from '../img/empty.jpg';

//Styles
import {About, Description, ImageTwo} from '../styles';
import styled from "styled-components";
import { fade } from "../animation";
import { useScroll } from "./useScroll";


const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <>
        <Services variants={fade} ref={element} animate={controls} initial="hidden">
            <ImageTwo>
                <h2>Основные показатели деятельности первичной профсоюзной организации</h2>
                <img src={OsnPokaz} alt="common-info" />
            </ImageTwo>
        </Services>
        <Services>
            <ImageTwo>
                <h2>План мероприятий на 2021 год</h2>
                <img src ={PlanOne} alt='planOne' />
                <img src = {PlanTwo} alt='planTwo' />
            </ImageTwo>
        </Services>
        <Services>
            <ImageTwo>
                <h2>План совета молодых работников</h2>
                <img src={YouthActOne} alt='youthActOne'/>
                <img src={YouthActTwo} alt='youthActTwo' />
            </ImageTwo>
        </Services>
        </>
    );
};

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
        @media screen and (max-width: 631px) {
            padding-bottom: 2.5rem;
        }
    }
    p {
        padding: 2rem 0rem 4rem 0rem;
        width: 70%;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 1300px) {
        justify-content: center;
    }
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        align-items: center;
        display: flex;
        h3 {
            background: white;
            color: black;
            margin-left: 1rem;
            padding: 1rem;
        }
    }
`;

export default ServicesSection;