import React from "react";

import Button from "../Button";

import "./ProjectItem.scss";

interface ProjectItemProps {
  titleId: string;
  title: string;
  content: string;
  buttonId: string;
}

export default function ProjectItem({
  titleId,
  title,
  content,
  buttonId,
}: ProjectItemProps) {
  return (
    <div className="projects__card" key={title}>
      <h3 id={titleId}>{title}</h3>
      <p>{content}</p>
      <Button buttonId={buttonId} titleId={titleId} text={"See more"} />
    </div>
  );
}

ProjectItem.displayName = "Project Card";
