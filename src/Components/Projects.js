import React from "react";

import { StyledProjects } from "../styles";
import rest_passport from "../imgs/rest_passport.png";
import friend_finder from "../imgs/friend_finder.png";
import dark_mode from "../imgs/dark_mode.png";
import better_prof from "../imgs/better_prof.png";


const Projects = props => {
  const deployedProjects = [
    {
      img: rest_passport,
      title: "Marketing page for restaurant passport app",
      github: "https://github.com/awuorm/Build-1",
      website: "https://restaurant-passport-marketing.netlify.com"
    },
    {
      img: friend_finder,
      title: "Friendfinder app",
      github: "https://github.com/awuorm/friend-finder-frontend",
      website: "https://friend-finder-frontend-app.netlify.com"
    },
    {
      img: dark_mode,
      title: "Crypto tracker web app",
      github: "https://github.com/awuorm/dark-mode",
      website: "https://coins-dark-mode.netlify.com"
    },
    {
        img: better_prof,
        title: "Better professor web app",
        github: "https://github.com/better-professor/frontend",
        website: "https://better-professor-bw.netlify.com",
    }
  ];
  return (
    <StyledProjects>
      {deployedProjects.map((project, index) => {
        return (
          <div key={index}>
            <img src={project.img} alt="restaurant" />
            <h5>{project.title}</h5>
            <a href={project.github}>Github repo</a> <br/>
            <a href={project.website}>Deployed website</a>
          </div>
        );
      })}
    </StyledProjects>
  );
};

export default Projects;
