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
                    <p className="mobileText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis praesentium ducimus voluptatem animi deleniti molestias ex. Quasi totam veniam unde nesciunt dolorum, inventore quam magni iure rem alias voluptatem quod? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia sit nostrum inventore laborum explicabo fugiat fugit necessitatibus maiores? Ratione eum sapiente magnam voluptatem maiores rem, dignissimos eos nihil perferendis deleniti.</p>
                    <br/>
                    <p className="laptopVis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deserunt velit delectus perferendis a praesentium suscipit impedit sed iste iusto, commodi ea illo porro nobis eligendi. Modi praesentium assumenda necessitatibus!</p>
                    <br/>
                    <p className="laptopVis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatibus odit sit recusandae omnis, quo, quod tempore harum error velit ipsam eaque corrupti quas amet totam aliquam placeat nulla voluptas.</p>
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
        padding: 5vh;
        text-align: center; 
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
`;

export default Skills
