import React from "react";
import styled from "styled-components";


const FooterNav = styled.nav`
  display: flex;
  justify-content:flex-end;
  align-items: center;
  width: 98%;
`;

const FooterAnchor = styled.a`
  color: white;
  margin: 1em;
  padding: 1em;
  text-decoration: none;
`;

const Footer = () => {
  return (
      <FooterNav>
        <FooterAnchor href="https://www.linkedin.com/in/mildred-awuor-605727a5/">LinkedIn</FooterAnchor>
        <FooterAnchor>Resume</FooterAnchor>
        <FooterAnchor href="https://github.com/awuorm">Github</FooterAnchor>
        <FooterAnchor href="https://twitter.com/gentlestrength_">Twitter</FooterAnchor>
      </FooterNav>
  
  );
};

export default Footer;
