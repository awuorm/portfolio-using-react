import React from "react";
import styled from "styled-components";

const Button = styled.div`
    /* background-color: rgba(255,255,255,0.5); */
    font-size: 4em;
    color: white;
    border: none;
    opacity:1;
    cursor: pointer;
    transform: rotate(90deg);
    text-align: center;
    margin: 0.5em;
    padding: 0.5em;
`;

const ProfileButton = (props) => {
console.log(" Button props", props)
    return <Button onClick = {props.onClick} >>></Button>
}

export default ProfileButton;