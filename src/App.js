import React from "react";
import styled from "styled-components";
import "./App.css";
import Nav from "./Components/Navigation";
import Footer from "./Components/Footer";
import Profile from "./Components/PersonalProfile";
import SecondProfile from "./Components/Portfolio";
import { Route } from "react-router-dom";
import Projects from "./Components/Projects";

const PDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SecondStyles = styled.div`
  display: none;
`;



function App() {
  return (
    <PDiv className="App">
      <Nav />
      <Route exact path="/" render={props => <Profile  {...props} />} />
      <SecondStyles className="second-profile">
        <Route exact path="/personal-profile" render={props => <SecondProfile {...props} />} />
      </SecondStyles>
      <Route exact path="/projects" render={props => <Projects {...props} />} />
      <Footer />
    </PDiv>
  );
}

export default App;
