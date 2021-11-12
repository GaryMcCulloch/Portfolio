import { useState } from 'react';
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";
import { Route, Switch as Switching } from "react-router";
import SkillsPage from './Pages/SkillsPage';
import Projects from './Pages/Projects';




function App() {
  const [navToggle, setNavToggle] = useState(false);
 

  return (
    <div className="App">
      <Sidebar navToggle={navToggle} setNavToggle={setNavToggle}/>

      <div className="hamburger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>
        <Switching>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route exact path="/about" >
            <AboutPage />
          </Route>
          <Route exact path="/skillspage" >
            <SkillsPage />
          </Route>
          <Route exact path="/projects" >
            <Projects />
          </Route>
          <Route exact path="/contact" >
            <ContactPage />
          </Route>
        </Switching>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  
`;

export default App;