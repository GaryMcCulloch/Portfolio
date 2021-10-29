import {React, useState, useEffect} from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import coder from '../img/coder.png';
import Switch from '@material-ui/core/Switch';
import Brightness4Icon from '@material-ui/icons/Brightness4';


function Navigation() {

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
        <NavigationStyled>
            <div className="avatar">
                <img src={coder} alt="" />
            </div>

            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/"  activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about"  activeClassName="active-class" exact>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume"  activeClassName="active-class" exact>Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolio"  activeClassName="active-class" exact>Portfolio</NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink to="/blogs"  activeClassName="active-class" exact>Blogs</NavLink>
                </li> */}
                <li className="nav-item">
                    <NavLink to="/contact"  activeClassName="active-class" exact>Contact</NavLink>
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
            
            <footer className="footer">
                <p>@2021 Gary McCulloch</p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);

    .avatar{
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img{
            width: 70%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }
    .nav-items{
        width: 100%;
        text-align: center;

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
    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 2rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
    }
`;

export default Navigation;
