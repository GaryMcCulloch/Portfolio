import React from 'react'
import styled from 'styled-components';
import avatar from '../img/avatar.png';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={avatar} alt="resume image" />
            </div>
            <div className="right-content">
                <div className="sub-title">
                    <h4>I am <span>Gary McCulloch</span></h4>
                </div>
                <p className="paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Tenetur delectus veritatis autem maiores sint temporibus, 
                    esse voluptate obcaecati et magnam deserunt aperiam ad provident 
                    laboriosam est ut dignissimos natus ab.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Hobbies</p>
                        <p>Location</p>
                        <p>Service</p>                  
                    </div>
                    <div className="info">
                        <p>: Gary McCulloch</p>
                        <p>: 33</p>
                        <p>: British</p>
                        <p>: Running, Climbing, Adventuring</p>
                        <p>: Glasgow, United Kingdom</p>
                        <p>: Freelance</p>                  
                    </div>
                </div>
                <PrimaryButton title={'Download CV'} />
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        height: 65vh;
        img{
            width: 90%;
            height: 100%;
            object-fit: cover;
        }
    }
    .right-content{
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
                color: var(--primary-color);
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display:flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection
