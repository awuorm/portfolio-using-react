import React from "react";
import styled from "styled-components";

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


const Profile = () => {
    return (
        <div>
        <FirstP>Hey There! I am </FirstP>
        <SecP>Mildred Awuor</SecP>
        <ThirdP>I am passionate about web development and  creating products that solve problems</ThirdP>
        </div>
    )
}

export default Profile;