import React from 'react';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from '../Components/Title';
import ContactItem from '../Components/ContactItem';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled>
                <InnerLayout className={'contact-section'}>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form action="" className="form">
                            <div className="form-field">
                                <label htmlFor="name">Name*</label>
                                <input type="text" id={"name"} />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Email*</label>
                                <input type="text" id={"email"} />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject">Subject*</label>
                                <input type="text" id={"subject"} />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Message*</label>
                                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-field f-button">
                                <PrimaryButton title={'Send Email'}/>
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem 
                            icon={phone} 
                            title={'Phone'}
                            contact1={'+77908020543'}
                            contact2={'0141 427 3698'}
                        />
                        <ContactItem 
                            icon={email} 
                            title={'Email'}
                            contact1={'garymcculloch@gmail.com'}
                            contact2={'info@gmail.com'}
                        />
                        <ContactItem 
                            icon={location} 
                            title={'Location'}
                            contact1={'Glasgow'}
                            contact2={'Cambuslang'}
                        />
                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`   
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px) {
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;

                }
            }
            .f-button{
                margin-bottom: 2rem;
            }
        }
    }
`;

export default ContactPage;
