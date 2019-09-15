import React from "react";
import styled from "styled-components";



const NavWrapper = styled.nav`
  display: flex;
  justify-content:flex-start;
  align-items: center;
  width: 100%;
`;

const NavAnchor = styled.a`
  color: white;
  margin: 1em;
  padding: 1em;
  text-decoration: none;
`;
const Nav = () => {
    return (
        
        <NavWrapper>
            <NavAnchor href="https://www.linkedin.com/in/mildred-awuor-605727a5/">LinkedIn</NavAnchor>
            <NavAnchor>Resume</NavAnchor>
            <NavAnchor href="https://github.com/awuorm">Github</NavAnchor>
            <NavAnchor href="https://twitter.com/gentlestrength_">Twitter</NavAnchor>
            
        </NavWrapper>
        
    )
}

export default Nav;