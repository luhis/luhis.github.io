import React, { FC, useEffect } from "react";
import { graphql } from "gatsby";
import { highlightBlock } from "highlight.js";
import { Columns, Content, Heading } from "react-bulma-components";

import "highlight.js/styles/default.css";

import Layout from "../components/Layout";
import LeftCol from "../components/LeftCol";
import SEO from "../components/Seo";
import { Post } from "../types/types";
import BlogTags from "../components/BlogTags";

const BlogPost: FC<{ data: { markdownRemark: Post } }> = ({ data }) => {
  const post = data.markdownRemark;
  useEffect(() => {
    document.querySelectorAll("code").forEach(highlightBlock);
  });
  return (
    <Layout>
      <SEO title={`Matt McCorry's Blog ${post.frontmatter.title}`} />
      <Columns>
        <Columns.Column size={3}>
          <LeftCol />
        </Columns.Column>
        <Columns.Column>
          <article>
            <Heading size={3}>{post.frontmatter.title}</Heading>
            <BlogTags tags={post.frontmatter.tags} />
            <Heading subtitle>
              {post.frontmatter.author}, {post.frontmatter.date}
            </Heading>
            <Content dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </Columns.Column>
      </Columns>
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
