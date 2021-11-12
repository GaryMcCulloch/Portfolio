import React from 'react';
import styled from 'styled-components';
import ServiceCard from '../Components/ServiceCard';

function ServicesSection() {
    return (
            <ServicesSectionStyled>
                <div className="services">
                    <ServiceCard 
                        // image={design} 
                        title={'Full Stack Development'} 
                        paragraph={'I am passionate about working with all aspects of a project from its conception through to production. I am most comfortable with the MERN or MEAN stacks currently however, I have spent a lot of time working with the LAMP stack also. '} />

                    <div className="mid-card">
                        <ServiceCard 
                            // image={intelligence} 
                            title={'Problem Solving'} 
                            paragraph={'Encountering challenges and problems is an unavoidable part of the development process and one that I have learned to embrace effectively.  In my time in development I have found that the right information is always there… I just have to find it. '} />
                    </div>
                    <ServiceCard 
                        // image={gamedev} 
                        title={'Communication'} 
                        paragraph={'A major factor in the success or failure of any development project is communication. Communication is essential for ensuring that a project is being pulled in the same direction by everyone involved and with the vision of the client.'} />
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
