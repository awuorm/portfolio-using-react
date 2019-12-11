import React from "react";
import styled from "styled-components";



const NavWrapper = styled.nav`
  display: flex;
  justify-content:flex-start;
  align-items: center;
  width:100vw;
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
            <NavAnchor href="https://drive.google.com/open?id=1Zt6JvWoQMGI46QBHTPs30-AWi1m80D1z">Resume</NavAnchor>
            <NavAnchor href="https://github.com/awuorm">Github</NavAnchor>
            <NavAnchor href="https://twitter.com/gentlestrength_">Twitter</NavAnchor>
            
        </NavWrapper>
        
    )
}

export default Nav;