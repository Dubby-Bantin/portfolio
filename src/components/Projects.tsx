import React from "react";

import ProjectCard from "./ProjectCard";
import { projects } from "@/app/lib/constants";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center py-20 gap-3"
    >
      <h1 className="text-gradient">A small selection of recent projects</h1>
      <div className="flex flex-wrap justify-center items-center gap-y-16 px-5 ">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
