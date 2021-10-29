import { useState } from 'react';
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfolioPage from "./Pages/PortfolioPage";
import ContactPage from "./Pages/ContactPage";
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";
import { Route, Switch as Switching } from "react-router";




function App() {
  const [navToggle, setNavToggle] = useState(false);
 

  return (
    <div className="App">
      <Sidebar navToggle={navToggle}/>

      <div className="hamburger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Switching>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route exact path="/about" >
            <AboutPage />
          </Route>
          <Route exact path="/resume" >
            <ResumePage />
          </Route>
          <Route exact path="/portfolio" >
            <PortfolioPage />
          </Route>
          {/* <Route exact path="/blogs" >
            <BlogsPage />
          </Route> */}
          <Route exact path="/contact" >
            <ContactPage />
          </Route>
        </Switching>

      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px){
    margin-left: 0px;
  }
  
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;