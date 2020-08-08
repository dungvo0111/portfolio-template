import React from "react";

import About from "./About";
import Project from "./Project";
import Skill from "./Skill";
import Blog from "./Blog";
import Contact from "./Contact";

export default function Main() {
  return (
    <main>
      <About />
      <hr />
      <Project />
      <Skill />
      <Blog />
      <Contact />
    </main>
  );
}

Main.displayName = "Main section"
