import React from "react";
import { Tag, Tags } from "trunx";

const BlogTags: React.FC<{ tags: string }> = ({ tags }) => (
  <Tags>
    {tags.split(",").map((t: string) => (
      <Tag key={t}>{t}</Tag>
    ))}
  </Tags>
);

export default BlogTags;
