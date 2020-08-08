import React from "react";

import "./Button.scss";

interface ButtonProps {
  text: string;
  className?: string;
  buttonId?: string;
  titleId?: string;
  type?: "submit";
}

export default function Button({
  className,
  buttonId,
  titleId,
  text,
  type,
}: ButtonProps) {
  return (
    <button
      className={className}
      id={buttonId}
      aria-labelledby={`${titleId} ${buttonId}`}
      type={type}
    >
      {text}
    </button>
  );
}

Button.displayName = "Button";
