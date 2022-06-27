import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <StyledFooter>
            <p>&copy; Developed by Konopatskiy A. 2022</p>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
    align-items: flex-start;
    background: #004e8f;
    display: flex;
    justify-content: space-between;
    max-height: 1vh;
    //padding: 10px;
    position: sticky;
    bottom: 0;
    width: 100%;
    z-index: 10;
    p {
        background: #004e8f;
        font-size: 1rem;
        padding: 0;
        width: 100%;
    }
`;
export default Footer;