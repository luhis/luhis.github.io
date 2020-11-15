import React, { FC, useEffect } from "react";
import { graphql } from "gatsby";
import { highlightBlock } from "highlight.js";
import { Column, Content, Tag, Title } from "rbx";

import "highlight.js/styles/default.css";

import Layout from "../components/Layout";
import LeftCol from "../components/LeftCol";
import SEO from "../components/Seo";
import { Post } from "../types/types";

const BlogPost: FC<{ data: { markdownRemark: Post } }> = ({ data }) => {
  const post = data.markdownRemark;
  useEffect(() => {
    document.querySelectorAll("code").forEach(highlightBlock);
  });
  return (
    <Layout>
      <SEO title={`Matt McCorry's Blog ${post.frontmatter.title}`} />
      <Column.Group>
        <Column size="one-quarter">
          <LeftCol />
        </Column>
        <Column>
          <article>
            <Title size={3}>{post.frontmatter.title}</Title>
            <Tag.Group>
              {post.frontmatter.tags.split(",").map((t: string) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </Tag.Group>
            <Title subtitle>
              {post.frontmatter.author}, {post.frontmatter.date}
            </Title>
            <Content dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </Column>
      </Column.Group>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(fromNow: true)
        title
        author
        tags
      }
    }
  }
`;
