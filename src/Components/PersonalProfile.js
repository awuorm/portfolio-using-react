import React from "react";
import styled from "styled-components";
import ProfileButton from "./Button";

const DivProfile = styled.div`
    max-height: 80%;
`;

const FirstP = styled.span`
    font-size: 3em;
    color: white;
    font-family: ubuntu, sans-serif;
`;
const SecP = styled(FirstP)`
color: #667db6;
font-size: 3.5em;


`;
const ThirdP = styled.p`
    font-size: 1.5em;
    color: white;
    font-family: ubuntu, sans-serif; 
`;


const Profile = (props) => {
    console.log("profile props", props)
    const buttonClicked = event => {
        event.target.parentNode.style.display = "none";
        document.querySelector(".second-profile").style.display = "block";
        document.querySelector(".App").style.width = "1300px";
        props.history.push("/personal-profile");
      };
    return (
        <DivProfile>
        <FirstP>Hey There! I am </FirstP>
        <SecP>Mildred Awuor</SecP>
        <ThirdP>I am passionate about web development and  creating products that solve problems</ThirdP>
        <ProfileButton onClick = {buttonClicked} />
        </DivProfile>
    )
}

export default Profile;