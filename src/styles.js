import styled from "styled-components";

export const StyledProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2em;

  div {
    background: white;
    padding: 1.5em;
    margin: 1em;
    border-radius: 1em;
    img {
        object-fit: cover;
      width: 100%;
      height: 75%;
    }
  }
`;
