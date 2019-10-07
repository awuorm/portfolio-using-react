import React from "react";
import styled from "styled-components";

const RightDiv = styled.div`
background-color: white;
width:70%;
height: 70vh;
`;
const Image = styled.img`
width:100%;
height: 100%;
`;

const RightProfile = () => {
    return (
        <RightDiv>
            <p>Experience</p>
            <p>Enterprise Solutions Architect</p>
<p>Enterprise solutions architect at Adrian Kenya Limited. My day to day activities include the research of various ICT solutions to meet client demands, provide a design of the solution once it has been vetoed by the client. The job description also includes maintaining vendor relationships to actualize on clients’ requests. The development of technical solutions and business cases that can be deployed within Adrian’s internal core businesses in the telecommunication, power and ICT industries.</p>
            <p>Fixed Data Engineer</p>
<p>Fixed data engineer at Adrian Kenya Limited. My day to day activities includes the deployment, installation and integration of fixed internet and MPLS for Safaricom enterprise clients using various last mile telecommunication technologies such as fibre, WIMAX, LTE and microwave. The job description also includes customer engagement, decommissioning of old links, link audits and link support in case of network failure for Kiambu County in Central Kenya.</p>
                <p>Projects</p>
                <p>Skills</p>
                    <li> Web development: Experience in HTML, CSS, Javascript and React.js</li>
                    <li>Networks: Experience in design and implementation of enterprise networks</li>
        </RightDiv>
    )
}

export default RightProfile;