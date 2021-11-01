import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

function Sidebar({navToggle}) {
    if(navToggle) {
        console.log("true");
    } else (console.log("false"))
    return (
        <SidebarStyled className={`${!navToggle ? 'nav-toggle' : ''}`}>              
            <Navigation />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 100%;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
    transition: all .4s ease-in-out;
    z-index: 20;
`;
export default Sidebar
