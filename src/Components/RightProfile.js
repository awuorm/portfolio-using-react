import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const RightDiv = styled.div`
  background-color: white;
  width: 60vw;
  height: 70vh;
   h5 {
     margin: 1em;
     padding: 0.5em;
     color:darkgray;
     font-weight: bold;
     font-size: 1em;
     font-family: 'Lilita One', cursive;
   }
    p {
      padding: 1em;
      margin: 0.7em;
      line-height: 2em;
    }
  button {
    background-color: #c7385a;
    color: white;
    padding: 0.7em;
    border: none;
    height: 5vh;
    border-radius: 0.5em;
  }
`;

const RightProfile = () => {
  return (
    <RightDiv>
      <h5>
        “You cannot discover new oceans <br /> unless you have the courage
        <br /> to lose sight of the shore.”
        <br /> – André Gide
      </h5>
      <p> Since beginning my journey as a telecom engineer 7 years ago,
         I've been part of teams and projects that span the aviation,
          financial  services and telecoms industries. 
          I am heavily invested in taking part in projects that matter, I enjoy challenges and problem solving.
          I'm quietly confident, naturally curious, and perpetually working on improving my  programming skills. </p>
      <button>
        <NavLink
          style={{ textDecoration: "none", color: "white" }}
          to="/projects"
        >
          view projects
        </NavLink>{" "}
      </button>
    </RightDiv>
  );
};

export default RightProfile;
