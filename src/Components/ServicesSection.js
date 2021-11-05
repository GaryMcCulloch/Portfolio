import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';
import { LocalPharmacyRounded } from '@material-ui/icons';
import java from "../img/java.png";

function ServicesSection() {
    return (
            <ServicesSectionStyled>
                <div className="services">
                    <ServiceCard 
                        // image={design} 
                        title={'Full Stack Development'} 
                        paragraph={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe a eaque dicta perspiciatis fugiat sequi unde laudantium.'} />

                    <div className="mid-card">
                        <ServiceCard 
                            // image={intelligence} 
                            title={'Problem Solving'} 
                            paragraph={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe a eaque dicta perspiciatis fugiat sequi unde laudantium.'} />
                    </div>
                    <ServiceCard 
                        // image={gamedev} 
                        title={'Communication'} 
                        paragraph={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe a eaque dicta perspiciatis fugiat sequi unde laudantium.'} />
                </div>
            </ServicesSectionStyled>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 3rem;
        margin-bottom: 3rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width: 1281px) {
            flex-direction: column;
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 860px) {
            grid-template-columns: repeat(1, 1fr);
        }
        @media screen and (max-width: 860px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ServicesSection
