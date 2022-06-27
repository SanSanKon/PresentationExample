import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
    const {pathname} = useLocation();
    return (
        <StyledNav>
            <h1>
                <Link id="logo" to='/'>
                    РОССЕТИ - Московский регион
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to='/'>
                        1. Общая информация
                    </Link>
                    <Line 
                        transition={{duration: 0.75}} 
                        initial={{ width: "0%" }} 
                        animate={{ width: pathname === '/' ? '50%' : '0%' }}
                    />
                </li>
                <li>
                    <Link to='/work'>
                        2. Мероприятия
                    </Link>
                    <Line 
                        transition={{duration: 0.75}} 
                        initial={{ width: "0%" }} 
                        animate={{ width: pathname === '/work' ? '50%' : '0%' }}
                    />
                </li>
                <li>
                    <Link to='/contact'>
                        3. Участник конкурса
                    </Link>
                    <Line 
                        transition={{duration: 0.75}} 
                        initial={{ width: "0%" }} 
                        animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
                    />
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    align-items: center;
    background: #004e8f;
    display: flex;
    justify-content: space-between;
    margin: auto;
    min-height: 10vh;
    padding: 1rem 10rem;
    position: sticky;
    top: 0;
    z-index: 10;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-family: "Lobster", cursive;
        font-size: 1.5rem;
        font-weight: lighter;
    }
    li {
        padding-left: 5rem;
        position: relative;
    }
    @media screen and (max-width: 1300px) {
        flex-direction: column;
        padding: 1rem;
        #logo {
            display: inline-block;
            margin: 1rem;
        }
        ul{
            justify-content: space-around;
            padding: 1rem;
            width: 100%;
            li {
                padding: 0;
            }
        }
    }
    @media screen and (max-width: 631px) {
        padding: 0.825rem;
        ul {
            padding: 0.825rem;
        }
        a {
            font-size: 0.825rem;
        }
    }
    @media screen and (max-width: 450px) {
        padding: 0.5rem;
        #logo {
            font-size: 1rem;
            margin: 0.5rem;
        }
        ul {
            padding: 0.5rem;
        }
        a {
            font-size: 0.5rem;
        }
    }
`;

const Line = styled(motion.div)`
    background: #23d997;
    bottom: -80%;
    height: 0.3rem;
    left: 40%;
    position: absolute;
    width: 0%;
    @media screen and (max-width: 1300px) {
        left: 0%;
  }
`;

export default Nav; 