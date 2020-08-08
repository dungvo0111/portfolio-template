import React from "react";

import Button from "../Button";

import "./BlogItem.scss";

interface BlogItemProps {
  imgSrc: string;
  titleId: string;
  title: string;
  content: string;
  buttonId: string;
}

export default function BlogItem({
  imgSrc,
  titleId,
  title,
  content,
  buttonId,
}: BlogItemProps) {
  return (
    <article className="blogs__card" key={imgSrc}>
      <img src={imgSrc} alt={title} className="blogs__image" />
      <div className="blogs__description">
        <h3 id={titleId}>{title}</h3>
        <h4>Sub title</h4>
        <p>{content}</p>
        <Button
          className={"blogs__button"}
          buttonId={buttonId}
          titleId={titleId}
          text={"View more"}
        />
      </div>
    </article>
  );
}

BlogItem.displayName = "Blog Card";
