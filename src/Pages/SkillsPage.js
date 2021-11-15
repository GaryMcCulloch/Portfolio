import styled from 'styled-components';
import Skills from '../Components/Skills';


function SkillsPage() {
    return (
        <SkillsPageStyled>
            <Skills />
            <div className="tech">       
                    <div className="techContainer">
                        <div className="techItem">
                            <h5>Javascript</h5>
                        </div>
                        <div className="techItem">
                            <h5>Java</h5>
                        </div>
                        <div className="techItem">
                            <h5>C#</h5>
                        </div>
                        <div className="techItem">
                            <h5>CSS5</h5>
                        </div>
                        <div className="techItem">
                            <h5>HTML3</h5>
                        </div>
                        <div className="techItem">
                            <h5>React</h5>
                        </div>
                        <div className="techItem">
                            <h5>Express</h5>
                        </div>
                        <div className="techItem">
                            <h5>Node</h5>
                        </div>
                        <div className="techItem">
                            <h5>MongoDB</h5>
                        </div>
                        <div className="techItem">
                            <h5>SQLite</h5>
                        </div>
                        <div className="techItem">
                            <h5>Python</h5>
                        </div>
                        <div className="techItem">
                            <h5>PHP</h5>
                        </div>        
                    </div>
                </div>
        </SkillsPageStyled>
    )
}

const SkillsPageStyled = styled.div`
    padding: 3rem 5%;

    .techContainer{
        margin-top: 3rem;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 1.5rem;
    }

    .techItem{
        width: 10rem;
        height: 10rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background: var(--tech-shadow);
        box-shadow:  5px 5px 24px var(--tech-shadow2),
             -5px -5px 24px var(--tech-shadow3);
        h5{
            font-size: 1.5rem;
        }
    }

    .techItem:hover{
        box-shadow: inset 10px 10px 49px var(--tech-shadow),
            inset -10px -10px 49px var(--tech-shadow);
        h5{
            font-size: 1.4rem;
        }
    }

    @media screen and (max-width: 1370px) {
        .techItem{
            width: 8rem;
            height: 8rem;

        }
    }
    @media screen and (max-width: 1150px) {
        .techItem{
            width: 6rem;
            height: 6rem;
                h5{
                font-size: 1.2rem;
            }
        }
    }
    @media screen and (max-width: 940px) {
        .techItem{
            width: 5rem;
            height: 5rem;
        }
    }
    @media screen and (max-width: 940px) {
        .techItem{
            width: 5rem;
            height: 5rem;
        }
    }
    @media screen and (max-width: 800px) {
        .techContainer{
            grid-template-columns: repeat(4, 1fr);

        }
        .techItem{
            width: 5rem;
            height: 5rem;
                h5{
                font-size: 1.1rem;
            }
            .techItem:hover{
        h5{
            font-size: 1rem;
        }
    }
        }
    }

    @media screen and (max-width: 480px) {
        .techContainer{
            grid-template-columns: repeat(3, 1fr);

        }
   
`;

export default SkillsPage
