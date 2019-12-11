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
    margin: 1em;
    padding: 1em;
    height: 75%;
    :hover {
        color: #667DB6;
        text-decoration: underline;
    }
`;

const ProfileButton = (props) => {
console.log(" Button props", props)
    return <Button onClick = {props.onClick} >view more</Button>
}

export default ProfileButton;