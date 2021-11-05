import React from 'react';
import styled from 'styled-components';

function Title({title, span}) {
    return (
        <TitleStyled>
            <h2>{title}<span>{span}</span></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    h2{
        color: var(--white-color);
        font-size: 3.8rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .7rem;
        @media screen and (max-width: 1000px){
                font-size: 3rem;
            }
            @media screen and (max-width: 800px){
                font-size: 2.2rem;
            }
            @media screen and (max-width: 500px){
                font-size: 2rem;
            }
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 9rem;
            height: .25rem;
            background-color: var(--background-light-color-2);
            border-radius: 15px;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 3.5rem;
            height: .25rem;
            background-color: var(--primary-color);
            border-radius: 15px;
            left: 0;
        }
        span{
            display: none;
            font-weight: 900;
            color: var(--shadow-color);
            font-size: 5rem;
            position: absolute;
            top: 5%;
            left: 0;
            z-index: -1;
            @media screen and (max-width: 800px){
                font-size: 4rem;
            }
            @media screen and (max-width: 496px){
                font-size: 3rem;
            }
            @media screen and (max-width: 370px){
                font-size: 2rem;
            }

        }
    }
`;

export default Title
