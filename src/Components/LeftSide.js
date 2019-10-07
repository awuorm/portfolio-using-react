import React from "react";
import styled from "styled-components";

const RightDiv = styled.div`
background-color: white;
width:100%;
height: 70vh;
`;
const Image = styled.img`
width:100%;
height: 100%;
`;


const LeftProfile = () => {
    return (
        <RightDiv>
            <Image src="https://d3n8a8pro7vhmx.cloudfront.net/eatradehub/pages/3367/attachments/original/1496739902/Mildred_Awuor.jpg?1496739902" alt="mildred" />
        </RightDiv>
    )
}

export default LeftProfile;