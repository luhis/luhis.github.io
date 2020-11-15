import React from "react";
import { Tag } from "rbx";

const BlogTags: React.FC<{ tags: string }> = ({ tags }) => (
  <Tag.Group>
    {tags.split(",").map((t: string) => (
      <Tag key={t}>{t}</Tag>
    ))}
  </Tag.Group>
);

export default BlogTags;
