import styled from 'styled-components';
import Title from '../Components/Title';
import audiopunk from '../img/audiopunk.png';
import audiopunkTablet from '../img/audiopunkTablet.png';
import cryptohound from '../img/cryptohound.png';
import {Link} from 'react-router-dom';

function Projects() {
    return (
        <ProjectsStyled>
            <Title title={'Projects'} span={'projects'}/>
            <div className="project">
                <h3>Audio<span className="punk">Punk</span></h3>
                <div className="projectImgs">
                    <div className="img laptopImg">
                        <img src={audiopunk} alt="" className="laptop" />
                    </div>
                    <div className="img tabletImg">
                        <img src={audiopunkTablet} alt="" className="tablet" />
                    </div>
                    <div className="img phoneImg">
                        <img src={audiopunkTablet} alt="" className="phone" />
                    </div>
                </div>
                <div className="projectText">
                    <p>This project was designed to work with a user’s data from the Spotify API.  The aim was for the user to be able to sync their Spotify account with the AudioPunk platform to search for songs and create playlists which would then be saved to their account’s playlist feature on the Spotify platform.</p>
                </div>
                <Link to={{pathname : "https://friendly-northcutt-155daf.netlify.app/"}} target="_blank">
                    <button className="btn">Visit Site</button>
                </Link>
                <div className="divider"></div>
            </div>

            <div className="project">
                <h3>Crypto<span className="hound">Hound</span></h3>
                <div className="projectImgs">
                    <div className="img laptopImg">
                        <img src={cryptohound} alt="" className="laptop" />
                    </div>
                    <div className="img tabletImg">
                        <img src={cryptohound} alt="" className="tablet" />
                    </div>
                    <div className="img phoneImg">
                        <img src={cryptohound} alt="" className="phone" />
                    </div>
                </div>
                <div className="projectText">
                    <p>Cryptohound is designed to be a quick, reliable and simple way to check up on the latest market rate changes for all cryptocurrencies.  This app connects with the CoinGecko API to ensure accurate information and search functionality ensures that the user can check up on specific currencies.</p>
                </div>
                <Link to={{pathname : "https://focused-jennings-132f56.netlify.app/"}} target="_blank">
                    <button className="btn">Visit Site</button>
                </Link>
                <div className="divider"></div>
            </div>

            {/* <div className="project">
                <h3>Troll<span>Yard</span></h3>
                <div className="projectImgs">
                    <div className="img laptopImg">
                        <img src={audiopunk} alt="" className="laptop" />
                    </div>
                    <div className="img tabletImg laptopVis">
                        <img src={audiopunkTablet} alt="" className="tablet" />
                    </div>
                    <div className="img phoneImg laptopVis">
                        <img src={audiopunkTablet} alt="" className="phone" />
                    </div>
                </div>
                <div className="projectText">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam maiores aut ex porro quisquam optio saepe expedita excepturi animi molestiae, repellendus quia dolores! Adipisci quibusdam tenetur voluptatum expedita explicabo culpa.</p>
                </div>
                <div className="divider"></div>
            </div> */}
            <div className="button">
                <Link to="/contact">
                <button className="btn main-btn">START PROJECT</button>
                </Link>
            </div>
        </ProjectsStyled>
    )
}

const ProjectsStyled = styled.div`
    padding: 3rem 5%;

    .punk{
        color: #007bff;
    }

    .hound{
        color: #D03CF4;
    }

    .project{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        padding-top: 3rem;
    }

    .projectImgs{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 2rem 0;
    }

    .img{
        margin: 0 1rem;
        border-radius: 10px;
    }

    .laptopImg{
        transition: .4s ease-in-out;
        width: 300px;
        height: 200px;
        overflow-y: scroll;
        overflow-x: hidden;
        ::-webkit-scrollbar {
            display: none;
        }
    }

    .laptopImg:hover{
        width: 600px;
        height: 400px;
        .laptop{
            width: 600px;
        }
    }

    .laptop{
        transition: .4s ease-in-out;
        width: 300px;
        height: auto;
    }

    .tabletImg{
        transition: .4s ease-in-out;
        width: 8rem;
        height: 12rem;
        overflow-y: scroll;
        overflow-x: hidden;
        display: none;
        ::-webkit-scrollbar {
            display: none;
        }
    }

    .tablet{
        transition: .4s ease-in-out;
        width: 6rem;
        height: auto;
    }

    .tabletImg:hover{
        width: 16rem;
        height: 24rem;
        .tablet{
            width: 16rem;
        }
    }

    .phoneImg{
        transition: .4s ease-in-out;
        width: 5rem;
        height: 10rem;
        overflow-y: scroll;
        overflow-x: hidden;
        display: none;

        ::-webkit-scrollbar {
            display: none;
        }
    }

    .phone{
        transition: .4s ease-in-out;
        width: 100%;
        height: auto;
    }

    .phoneImg:hover{
        width: 12rem;
        height: 24rem;
        .phone{
            width: 12rem;
        }
    }

    .projectText{
        width: 100%;
    }

    .divider{
        width: 80%;
        height: 5px;
        background: #007bff;
        border-radius: 10px;
        margin-top: 3rem;
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (min-width: 700px) {
        .projectImgs{
            flex-direction: row;
            align-items: flex-end;
        }
        .phoneImg{
            display: block;
            width: 75px;
            height: 150px;
        }
        .phone{
            width: 75px;
            height: auto;
        }
        .tabletImg{
            display: block;
            width: 110px;
            height: 180px;
        }
    }

    .main-btn{
        background: linear-gradient(to right, #D03CF4, #007bff);
    }

    @media screen and (min-width: 1000px) {
        .projectText{
            width: 60%;
        }
    }
    @media screen and (min-width: 1200px) {
        .projectText{
            width: 40%;
        }
    }
`;

export default Projects
