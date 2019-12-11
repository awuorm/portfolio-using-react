import React from "react";
import styled from "styled-components";
import LeftProfile from "./LeftProfile";
import RightProfile from "./RightProfile";

const LeftStyles = styled.div`
max-width:50%;
`;

const ProfileStyles = styled.div`
display: flex;
justify-content: space-between;
width:80vw;
`;

const SecondProfile = () => {
    return (
        <ProfileStyles>
        <LeftStyles>
        <LeftProfile></LeftProfile>
        </LeftStyles>
        <RightProfile></RightProfile>
        </ProfileStyles>
    )
}

export default SecondProfile;