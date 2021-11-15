import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import ProgressBar from './ProgressBar';
import ServicesSection from '../Components/ServicesSection';

function Skills() {
    return (
        <SkillsStyled>
            <Title title={'My Skills'} span={'My Skills'} />
            <ServicesSection />
            <div className="skillsContainer">
                <div className="skillsText">
                    <h4>Technology Experience</h4>
                    <p className="mobileText">At the beginning of my development journey, I heavily focused on learning HTML5, CSS3 and JavaScript. The resources that I was using to learn all pointed towards gaining experience in the fundamental languages before progressing onto the vast options available.</p>
                    <p className="mobileText">Since that time, I have taken a Software Engineer course through Codecademy which covered the most popular technologies such as Java, PHP, C# and Python.  I have also gained experience with many different frameworks, libraries, development environments and databases.</p>
                    <br/>
                    <p className="laptopVis">With every project I undertake, my knowledge of the wider spectrum continues to be nurtured and I ensure this by researching concepts that I do not understand yet.</p>
                    </div>
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
                        title={'Design'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar 
                        title={'API Development'}
                        width={'60%'}
                        text={'60%'}
                    />
                </div>
            </div>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skillsContainer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;
    }

    .skillsText{
        width: 100%;  
        /* padding: 5vh; */
    }


    .skills{
        margin-top: 2rem;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 1rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
    @media screen and (min-width: 1000px) {
            .skillsContainer{
                flex-direction: row;
            }

            .skillsText{
                text-align: left;
            }
        }
`;

export default Skills
