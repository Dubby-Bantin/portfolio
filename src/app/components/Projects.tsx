import React from "react";
import { projects } from "../lib/constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center py-20 gap-3"
    >
      <h1 className="md:tracking-wider mb-4 font-heading  lg:text-3xl text-[#1c1e21] text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-t from-indigo-900 via-blue-500 to-neutral-200 bg-opacity-60">
        A small selection of recent projects
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-y-16 px-5 ">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
