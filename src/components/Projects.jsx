import React from "react";
import propertyImg from "@/assets/projects/property.jpg";
import ProjectItem from "./ProjectItem";
import { Fade } from "react-reveal";
import { project } from "@/portfolio";

const Projects = () => {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div id="projects" className="w-full">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Projects
          </p>
          <h2 className="py-4">What I&apos;ve Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.experience.map((exp, i) => {
              return (
                <ProjectItem
                  key={i}
                  title={exp.title}
                  backgorundImg={exp.backgroundImg}
                  projectUrl={exp.projectUrl}
                  tech={exp.tech}
                  desc={exp.desc}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Projects;
