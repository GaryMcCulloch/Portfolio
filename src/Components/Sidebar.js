import styled from 'styled-components';
import {React, useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
import Brightness4Icon from '@material-ui/icons/Brightness4';

function Sidebar({navToggle, setNavToggle}) {
    const [theme, setTheme] = useState('dark-theme');
    const [checked, setChecked] = useState(false);

    const themeToggler = () => {
        if(theme === 'light-theme') {
          setTheme('dark-theme');
          setChecked(false);
        } else {
            setTheme('light-theme');
            setChecked(true);
        }
    }

      useEffect(()=> {
        document.documentElement.className = theme;
      }, [theme]);

    return (
        <SidebarStyled className={`${!navToggle ? 'nav-toggle' : ''}`}>              
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/"  activeClassName="active-class" onClick={() => setNavToggle(!navToggle)} exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about"  activeClassName="active-class" onClick={() => setNavToggle(!navToggle)} exact>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/skillspage"  activeClassName="active-class" onClick={() => setNavToggle(!navToggle)} exact>Skills & Experience</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/projects"  activeClassName="active-class" onClick={() => setNavToggle(!navToggle)} exact>Portfolio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact"  activeClassName="active-class" onClick={() => setNavToggle(!navToggle)} exact>Contact</NavLink>
                </li>
            </ul>

            <div className="light-dark-mode">
                <div className="left-content">
                    <Brightness4Icon />
                </div>
                <div className="right-content">
                    <Switch 
                        value=""
                        checked={checked}
                        inputProps={{ 'aria-label': ''}}
                        size="medium"
                        onClick={themeToggler}
                    /> 
                </div>
            </div>
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
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* height: 100%; */
    /* width: 100%; */
    
    .nav-items{
        width: 100%;
        text-align: center;
        margin-bottom: 4rem;

        .active-class{
            background-color: var(--primary-color);
            color: white;
        }
        li{
            display: block;
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                font-size: 2.5rem;
                letter-spacing: 1px;

                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.16,.24,.98);
                    z-index: -1;
                    opacity: 0.2;
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }

    @media screen and (max-width: 800px){
        .nav-items li a{
            font-size: 2rem;
        }
    }
    @media screen and (max-width: 400px){
        .nav-items li a{
            font-size: 1.5rem;
        }
    }
`;
export default Sidebar
