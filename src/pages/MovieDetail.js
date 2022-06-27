import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {useLocation} from 'react-router-dom';
import { MovieState } from "../movieState";
//Animations
import { motion } from "framer-motion";
import {pageAnimation} from '../animation';


const MovieDetail = () => {
    const url = useLocation();
    // history.location.path
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url.pathname);
        setMovie(currentMovie[0]);
    }, [movies, url]);

    console.log(url);


    return (
        <>
        { movie && (
        <Details
            exit="exit" 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
        >
            <HeadLine>
                <h2>{movie.title}</h2>
                <img src={movie.mainImg} alt="movie"/>
            </HeadLine>
            {/* <Awards>
                {movie.awards.map((award) => (
                    <Award 
                        title={award.title} 
                        description={award.description} 
                        key={award.title} 
                    />
                ))}
            </Awards> */}
            <ImageDisplayVolunteer>
                <h2>1. Доброе электричество - детям</h2>
                <img src={movie.secondImg} alt="movie"/>

                <h2>2. Доброе электричество - детям</h2>
                <img src={movie.thirdImg} alt="movie"/>

                <h2>3. С заботой о детях</h2>
                <img src={movie.fourthImg} alt="movie"/>

                <h2>4. Предки и потомки</h2>
                <img src={movie.fifthImg} alt="movie"/>

                <h2>5. Мы помним</h2>
                <img src={movie.sixthImg} alt="movie"/>

                <h2>6. Лес победы</h2>
                <img src={movie.seventhImg} alt="movie"/>
            </ImageDisplayVolunteer>
            <ImageDisplayMassActions>
                <h2>1. Ловись рыбка</h2>
                <img src={movie.eighthImg} />
            </ImageDisplayMassActions>
        </Details>
        )}
        </>
    );
};

const Details = styled(motion.div)`
    color: white;
`;

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        color: white;
        left: 50%;
        margin: 0 0 10px 20px;
        position: relative;
        top: 10%;
        transform: translate(-50%, -10%);
    }
    img {
        //height: 70vh;
        //object-fit: cover;
        width: 100%;
    }
`;

const Awards = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 5rem 10rem;
    min-height: 80vh;
    @media screen and (max-width: 1500px) {
        display: block;
        margin: 2rem 2rem;
  }
`;

const AwardStyle = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
        width: 100%;
    }
    p {
        padding: 2rem 0rem;
    }
`;

const ImageDisplayVolunteer = styled.div`
    //min-height: 50vh;
    h2 {
        background: #495a78;
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

const ImageDisplayMassActions = styled.div`
    //min-height: 50vh;
    h2 {
        background: #495a78;
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

//Award component
const Award = ({title, description}) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    );
};

export default MovieDetail;

//https://www.reddit.com/r/reactjs/comments/qqg0gz/typeerror_cannot_read_properties_of_undefined/ 