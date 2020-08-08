import React from "react";

type NavLinksProps = {
  type?: string;
};

export default function NavLinks({ type }: NavLinksProps) {
  return (
    <ul className={type}>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#blogs">Blogs</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
}

NavLinks.displayName = "Navigation Links";
