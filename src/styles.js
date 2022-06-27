import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
    align-items: center;
    color: white;
    display: flex;
    justify-content: space-between;
    min-height: 90vh;
    padding: 5rem 10rem;
    @media screen and (max-width: 1300px) {
        display: block;
        padding: 2rem 2rem;
        text-align: center;
    }
    @media screen and (max-width: 450px) {
        padding: 1rem 1rem;
    }
`;
 
export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;
    z-index: 2;
    h2 {
        font-weight: lighter;
    }
    @media screen and (max-width: 1300px) {
        padding: 0;
        button {
            margin: 2rem 0rem 5rem 0rem;
        }
    }
    @media screen and (max-width: 450px) {
        button {
            margin: 1rem 0rem 2rem 0rem;
        }
    }
`;

export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2;
    img {
        height: 80vh;
        object-fit: cover;
        width: 100%;
       
    }
    @media screen and (max-width: 450px) {
        overflow: auto;
            img {
                display: none;
            }
    }
`;

export const ImageTwo = styled.div`
    flex: 1;
    //overflow: hidden;
    z-index: 2;
    img {
        height: 100%;
        object-fit: cover;
        width: 100%;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;