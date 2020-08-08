import React from "react";

import BlogItem from "../../../components/BlogItem";

import "./Blog.scss";

import { blogData } from "../../../data/blogData";
export default function Blog() {
  return (
    <>
      <h1 id="blogs">Blogs</h1>
      <div className="blogs">
        {blogData.map((item, id) => (
          <BlogItem
            key={id}
            imgSrc={item.imgSrc}
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

Blog.displayName = "Blog Section";
