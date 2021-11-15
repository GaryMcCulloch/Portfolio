import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import ContactItem from '../Components/ContactItem';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import emailjs from 'emailjs-com';


function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('default_service', 'template_b9oinhv', e.target, 'user_uEjlHzZukXjlinmvS5oAv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
            
            <ContactPageStyled id="contact">
                <Title title={'Contact'} span={'Contact'} />
                <div className="contact-section">
                    <div className="left-content">
                        <form action="" className="form" onSubmit={sendEmail}>
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
                                <input type="submit" value="Send Message" id="submitBtn"/>  
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem 
                            icon={phone} 
                            title={'Phone'}
                            contact1={'07908020544'}
                        />
                        <ContactItem 
                            icon={email} 
                            title={'Email'}
                            contact1={'garymcculloch1@gmail.com'}
                        />
                        <ContactItem 
                            icon={location} 
                            title={'Location'}
                            contact1={'Glasgow'}
                            contact2={'Scotland'}
                        />
                    </div>
                    </div>
            </ContactPageStyled>
    )
}

const ContactPageStyled = styled.section` 
    padding: 3rem 5%;
    .right-content{
        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: column;
    }

    .contact-section{
        /* padding: 3rem; */
        
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
            }
        }
        .form{
            width: 100%;
            
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
                    background: var(--background-dark-color);
                    height: 50px;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: var(--background-dark-color);
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
            #submitBtn{
                background-color: var(--primary-color);
                padding: .8rem 2.5rem;
                color: white;
                cursor: pointer;
                display: inline-block;
                font-size: inherit;
                text-transform: uppercase;
                position: relative;
                transition: all .4s ease-in-out;
                
            }
            #submitBtn:hover{
                    border: 1px solid white;
                }
        }
    }
    @media screen and (min-width: 1000px){
        .contact-section{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 2rem;
        }    
    }

`;

export default ContactPage;
