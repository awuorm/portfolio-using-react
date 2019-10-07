import React from "react";
import styled from "styled-components";
import LeftProfile from "./LeftSide";
import RightProfile from "./RightSide";

const LeftStyles = styled.div`
max-width:50%;
`;

const ProfileStyles = styled.div`
display: flex;
justify-content: space-between;
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