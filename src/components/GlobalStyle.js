import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    @media screen and (max-width: 1700ppx) {
        font-size: 75%;
    }
}

body {
    background-color: #0f67b1;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}

button {
    background: transparent;
    border: 3px solid #23d997;
    color: white;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 1rem 2rem;
    transition: all 0.5s ease;
    &:hover {
        background-color: #23d997;
        color: white;
    }
}

a {
    color: #fff;
    text-decoration: none;
}

h2 {
    font-size: 2rem;
    font-weight: lighter;
    @media screen and (max-width: 631px) {
        font-size: 1.5rem;
    }
    @media screen and (max-width: 450px) {
        font-size: 1rem;
    }
}

h3 {
    color: white;
    @media screen and (max-width: 450px) {
        font-size: 0.8rem;
    }
}

h4 {
    font-size: 2rem;
    font-weight: bold;
    @media screen and (max-width: 631px) {
        font-size: 1.5rem;
    }
    @media screen and (max-width: 450px) {
        font-size: 0.75rem;
    }
}

a {
    font-size: 1.1rem;
}

span {
    color:  #23d997;
    font-weight: bold;
}

p {
    color: #fff;
    font-size: 1.4rem;
    line-height: 150%;
    padding: 3rem 0rem;
    @media screen and (max-width: 631px) {
        padding: 1.5rem;
    }
    @media screen and (max-width: 450px) {
        font-size: 0.7rem;
        padding: 1rem;
    }
}

`;

export default GlobalStyle;