import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';
import { LocalPharmacyRounded } from '@material-ui/icons';
import java from "../img/java.png";

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <div className="services">
                    
                    <ServiceCard 
                        image={design} 
                        title={'Full Stack Development'} 
                        paragraph={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe a eaque dicta perspiciatis fugiat sequi unde laudantium.'} />

                    <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'Problem Solving'} 
                            paragraph={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe a eaque dicta perspiciatis fugiat sequi unde laudantium.'} />
                    </div>
                    <ServiceCard 
                        image={gamedev} 
                        title={'Communication'} 
                        paragraph={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe a eaque dicta perspiciatis fugiat sequi unde laudantium.'} />
                </div>
                <div className="tech">
                   
                    <div className="techContainer">
                        <div className="techItem">
                            <h5>Javascript</h5>
                        </div>
                        <div className="techItem">
                            <h5>Java</h5>
                        </div>
                        <div className="techItem">
                            <h5>C#</h5>
                        </div>
                        <div className="techItem">
                            <h5>CSS5</h5>
                        </div>
                        <div className="techItem">
                            <h5>HTML3</h5>
                        </div>
                        <div className="techItem">
                            <h5>React</h5>
                        </div>
                        <div className="techItem">
                            <h5>Express</h5>
                        </div>
                        <div className="techItem">
                            <h5>Node</h5>
                        </div>
                        <div className="techItem">
                            <h5>MongoDB</h5>
                        </div>
                        <div className="techItem">
                            <h5>SQLite</h5>
                        </div>
                        <div className="techItem">
                            <h5>Python</h5>
                        </div>
                        <div className="techItem">
                            <h5>PHP</h5>
                        </div>
                        
                    </div>

                </div>

            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width: 1000px) {
            flex-direction: column;
        }
        @media screen and (max-width: 950px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 650px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    
    .techContainer{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width: 1000px) {
            flex-direction: column;
        }
        @media screen and (max-width: 950px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 650px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    .techItem{
        width: 10rem;
        height: 10rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        background: #10121a;
        box-shadow:  5px 5px 24px #0a0b10,
             -5px -5px 24px #161924;
        h5{
            font-size: 1.5rem;
        }
    }

    .techItem:hover{
        box-shadow: inset 10px 10px 49px #06070a,
            inset -10px -10px 49px #1a1d2a;
        h5{
            font-size: 1.4rem;
        }
    }
`;

export default ServicesSection
