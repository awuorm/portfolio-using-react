import React from "react";
import styled from "styled-components";
import "./App.css";
import Nav from "./Components/Navigation";
import Footer from "./Components/Footer";
import Profile from "./Components/PersonalProfile";
import SecondProfile from "./Components/Portfolio";

const PDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SecondStyles = styled.div`
  display: none;
`;

const buttonClicked = event => {
  event.target.parentNode.style.display = "none";
  document.querySelector(".second-profile").style.display = "block";
  
};

function App() {
  return (
    <PDiv className="App">
      <Nav />
      <Profile onClick={buttonClicked} />
      <SecondStyles  className="second-profile" >
        <SecondProfile />
      </SecondStyles>

      <Footer />
    </PDiv>
  );
}

export default App;
