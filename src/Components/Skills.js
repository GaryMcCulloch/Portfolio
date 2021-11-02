import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import ProgressBar from './ProgressBar';
import ServicesSection from '../Components/ServicesSection';

function Skills() {
    return (
        <SkillsStyled>
            <Title title={'My Skills'} span={'My Skills'} />
            <ServicesSection />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar 
                        title={'Front-end'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar 
                        title={'Back-end'}
                        width={'75%'}
                        text={'75%'}
                    />
                    <ProgressBar 
                        title={'REACT JS'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar 
                        title={'Design'}
                        width={'60%'}
                        text={'60%'}
                    />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }

    }
`;

export default Skills
