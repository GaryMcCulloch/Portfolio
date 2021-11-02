import React from 'react';
import styled from 'styled-components';
import { MainLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';
import ReviewsSection from '../Components/ReviewsSection';
import Technologies from "../Components/Technologies";

function AboutPage() {
    return (
        // <MainLayout>
            <AboutStyled>
            <Title title={'About Me'} span={'about me'}></Title>
            <div className="images"></div>
            <div className="container">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis praesentium ducimus voluptatem animi deleniti molestias ex. Quasi totam veniam unde nesciunt dolorum, inventore quam magni iure rem alias voluptatem quod?  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia sit nostrum inventore laborum explicabo fugiat fugit necessitatibus maiores? Ratione eum sapiente magnam voluptatem maiores rem, dignissimos eos nihil perferendis deleniti.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deserunt velit delectus perferendis a praesentium suscipit impedit sed iste iusto, commodi ea illo porro nobis eligendi. Modi praesentium assumenda necessitatibus!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatibus odit sit recusandae omnis, quo, quod tempore harum error velit ipsam eaque corrupti quas amet totam aliquam placeat nulla voluptas.</p>
            </div>
            </AboutStyled>
        // </MainLayout>
    )
}

const AboutStyled = styled.section`
position: relative;
height: 100vh;
overflow: hidden;
    .container{
        margin-top: 5rem;
        width: 40%;

        p{
            padding-bottom: 1.5rem
        }
    }

    .images{
        position: absolute;
        width: 658.6px;
        height: 1409.55px;
        right: 20%;
        top: -25%;
        border: 1px solid blue;
        transform: rotate(25.83deg);
        z-index: 50;
        }
`;

export default AboutPage
