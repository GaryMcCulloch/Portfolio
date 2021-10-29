import React from 'react';
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub';
import Pinterest from '@material-ui/icons/Pinterest';


function Menu({menuItem}) {
    return (
        <MenuItemStyled>
            {
                menuItem.map((item)=> {
                    return (
                        <div className="container" key={item.id}>
                            <div className="flex-item">  
                                <h6>{item.title}</h6>
                                <p>{item.text}</p> 
                                <div className="image">               
                                    <img src={item.image} alt="" />
                                </div> 
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </MenuItemStyled>
    )
}

const MenuItemStyled = styled.div`
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        /* padding: 5rem; */
    }

    .flex-item{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        margin-bottom: 5rem;
    }

    .image{
        width: 60rem;
        height: 40rem;
        overflow-y: scroll;
        overflow-x: hidden;
        margin: 2rem 0;
         
        ::-webkit-scrollbar {
            width: 5px;
            border-radius: 20px;
        }

        ::-webkit-scrollbar-track {
        background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
        background: #007bff;
        }

        ::-webkit-scrollbar-thumb:hover {
        background: #555;
        }
    }

    p{
        width: 60rem;
    }

    img{
        width: 60rem;
        height: auto;
    }

    h6{
        font-size: 1.6rem;
    }
    
`;

export default Menu
