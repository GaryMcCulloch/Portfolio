import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../Components/Particle';
import AboutPage from './AboutPage';
import Projects from './Projects';
import ResumePage from './ResumePage';
import ContactPage from './ContactPage';
import SkillsPage from './SkillsPage';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="hero">
                <h1>I'm <span className="accent">Gary</span>.</h1>
                <p>
                    An Independent Full Stack Developer from Glasgow, Scotland.
                </p>
                <div className='icons'>
                <a href="https://codepen.io/pen/" className="icon d-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://codepen.io/pen/" className="icon d-github">
                        <GithubIcon />
                    </a>
                    <a href="https://codepen.io/pen/" className="icon d-youtube">
                        <YoutubeIcon />
                    </a>
                    <div className="line"></div>
                </div>
                <Link to="projects">
                <button className="btn">Projects</button>
                </Link>
            </div>
            <AboutPage />
            <SkillsPage />
            <Projects />
            <ContactPage />
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
   
    .hero{
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 5rem;
        text-align: center;
        
        .icons{
            position: fixed;
            bottom: 0;
            left: 1%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            z-index: 50;
            .line{
                width: 3px;
                height: 5rem;
                background: #007bff;
                margin-top: 10px;
            }
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                margin-top: 10px;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                svg{
                    margin: .5rem;
                }
            }
            .d-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .d-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }

    .accent{
        font-size: inherit;
    }

    @media screen and (max-width: 650px){
        .hero{
            h1{
            font-size: 4rem;
            }
        }
    }
    @media screen and (max-width: 400px){
        .hero{
            .icons{
                display: none;
            }
        }
    }
`;

export default HomePage;