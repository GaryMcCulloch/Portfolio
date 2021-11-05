import React from 'react';
import styled from 'styled-components';

function ContactItem({icon, title, contact1, contact2}) {
    return (
        <ContactItemStyled>
            <div className="left-content">
                <p>{icon}</p>
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{contact1}</p>
            </div>
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
    padding: .5rem 1rem;
    background-color: var(--background-dark-grey);
    display: flex; 
    /* margin: 8px; */
    align-items: center;
    &:not(:last-child){
        margin-bottom: 1.5rem;
    }
    .left-content{
        padding: .5rem;
        border: 1px solid var(--border-color);
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: .5rem;
        svg{
            font-size: 2rem;
        }
    }
    .right-content{
        h6{
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: .6rem;
        }
        p{
            padding: .21rem 0;

        }
    }
`;

export default ContactItem
