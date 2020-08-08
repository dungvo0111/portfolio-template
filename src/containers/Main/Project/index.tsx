import React from "react";

import ProjectItem from "../../../components/ProjectItem";

import { projectData } from "../../../data/projectData";

import "./Project.scss";

export default function Project() {
  return (
    <>
      <h1 id="projects">Projects</h1>
      <div className="projects">
        {projectData.map((item, id) => (
          <ProjectItem
            key={id}
            titleId={item.titleId}
            title={item.title}
            content={item.content}
            buttonId={item.buttonId}
          />
        ))}
      </div>
    </>
  );
}

Project.displayName = "Project Section";
