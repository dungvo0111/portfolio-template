import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Skill.scss";

import { skillData } from "../../../data/skillData";

export default function Skill() {
  return (
    <>
      <h1 id="skills">Tech Stack</h1>
      <ul className="skills">
        {skillData.map((item, id) => (
          <li key={id}>
            <FontAwesomeIcon icon={item.icon} className="icon" />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

Skill.displayName = "Skill Section";
