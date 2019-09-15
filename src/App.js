import React from "react";
import styled from "styled-components";
import "./App.css";
import Nav from "./Components/Navigation";
import Footer from "./Components/Footer";
import Profile from "./Components/PersonalProfile";

const PDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
`;

function App() {
  return (
    <PDiv className="App">
      <Nav />
      <Profile/>
      <Footer />
    </PDiv>
  );
}

export default App;
