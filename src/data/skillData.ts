import {
  faJsSquare,
  faHtml5,
  faReact,
  faSass,
  faCss3,
  faNodeJs,
  faJava,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

type skillDataCheck = Array<{
  icon: IconDefinition,
  label: string
}>;

export const skillData: skillDataCheck = [
  {
    icon: faJsSquare,
    label: "JavaScript",
  },
  {
    icon: faHtml5,
    label: "HTML",
  },
  {
    icon: faReact,
    label: "React",
  },
  {
    icon: faSass,
    label: "SASS",
  },
  {
    icon: faCss3,
    label: "CSS",
  },
  {
    icon: faNodeJs,
    label: "NodeJS",
  },
  {
    icon: faJava,
    label: "Java",
  },
];
