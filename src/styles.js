import styled from "styled-components";

export const StyledProjectsTitle = styled.div`
  width: 80vw;
  height: 10%;
  padding: 1 em;
  margin-bottom: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span {
    color: white;
    font-size: 1.5em;
    padding: 0.5em;
    margin-bottom: 0.5em;
    margin-left: 0.5em;
  }
`;

export const StyledProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 1em;
  /* width: 100%; */
  div {
    background: white;
    padding: 0.7em;
    /* margin: 0.7em; */
    border-radius: 1em;
    color: darkgray;
    img {
      object-fit: cover;
      width: 100%;
      height: 50%;
    }
    a {
      text-decoration: none;
      color: darkgray;
    }
  }
`;
