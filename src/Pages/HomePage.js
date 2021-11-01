import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../Components/Particle';
import AboutPage from './AboutPage';
import PortfolioPage from './PortfolioPage';
import ResumePage from './ResumePage';
import ContactPage from './ContactPage';

function HomePage() {
    return (
        <HomePageStyled>
            {/* <div className="particle-con">
                <Particle />
            </div> */}
            <div className="typography">
                <h1>I'm <span>Gary</span>.</h1>
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
                </div>
            </div>
            <AboutPage />
            <PortfolioPage />
            <ResumePage />
            <ContactPage />
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    /* position: relative; */
    @media screen and (max-width: 502px){
        h1{
            font-size: 80%;
        }
    }
   
    .typography{
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 5rem;
        h1{
            font-size: 6rem;
        }
        span{
            font-size: inherit;
        }
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
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
`;

export default HomePage;