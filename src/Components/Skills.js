import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            <Title title={'My Skills'} span={'My Skills'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar 
                        title={'HTML5'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <ProgressBar 
                        title={'CSS3'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar 
                        title={'JAVASCRIPT'}
                        width={'65%'}
                        text={'65%'}
                    />
                    <ProgressBar 
                        title={'REACT JS'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar 
                        title={'PYTHON'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <ProgressBar 
                        title={'JAVA'}
                        width={'55%'}
                        text={'55'}
                    />
                    <ProgressBar 
                        title={'C#'}
                        width={'75%'}
                        text={'75%'}
                    />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }

    }
`;

export default Skills
