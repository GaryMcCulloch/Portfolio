import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
            <AboutStyled>
                <Title title={'About Me'} span={'about me'}></Title>
                <div className="about">
                    <div className="aboutText">
                    <p className="mobileVis ">I’m a Full Stack Developer with a strong passion for functionality, efficiency and that feeling when I finally solve a problem that I’ve been stuck on for what feels like an eternity.  I have been developing for 2 years now on various stacks and languages and produced a variety of works ranging from the good to the terrible. </p>
                    <p className="laptopVis">I have been working as a retail manager for 10 years and although I enjoyed this, I was fascinated with the idea of working with technology and decided that I it was worth the risk to pursue this fully and commit to the learning process.</p>

                    <p className="laptopVis">I am a relatively new Dad to my 3-year-old boy and a husband to his Mum.  When I am not developing, I can usually be found out at the climbing center, up the hills or heading for a swim with the family.</p>
                    <Link to="contact">
                        <button className="btn">Let's talk</button>
                    </Link>
                    </div>
                    <div className="imageContainer">
                    </div>
                </div>  
            </AboutStyled>
    )
}

const AboutStyled = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 2rem 5%;
    overflow: hidden;
    
    .about{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        margin-top: 3rem;
        width: 100%;
        p{
            padding-bottom: 1.5rem;
        }
    }

    .aboutText{
        width: 70%;
    }

    .imageContainer{
        position: absolute;
        width: 658.6px;
        height: 1409.55px;
        right: 10%;
        top: -25%;
        background: #0c335f;
        opacity: 0.2;
        transform: rotate(25.83deg);
        z-index: -10;
    }

    @media screen and (min-width: 1200px) {
        .about{
            width: 60%;
        }
    }
`;

export default AboutPage
