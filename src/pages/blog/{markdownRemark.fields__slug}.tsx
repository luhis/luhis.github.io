import React, { FC } from "react";
import { PageProps, graphql } from "gatsby";
import { Columns, Content, Heading } from "react-bulma-components";

import "prismjs/themes/prism-solarizedlight.css";

import Layout from "../../components/Layout";
import LeftCol from "../../components/LeftCol";
import SEO from "../../components/Head";
import BlogTags from "../../components/BlogTags";

const BlogPost: FC<PageProps<Queries.BlogPostQuery>> = ({ data }) => {
  const post = data.markdownRemark!;

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
            <BlogTags tags={post.frontmatter.tags || ""} />
            <Heading subtitle>
              {post.frontmatter.author}, {post.frontmatter.date}
            </Heading>
            <Content dangerouslySetInnerHTML={{ __html: post.html || "" }} />
          </article>
        </Columns.Column>
      </Columns>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPost($fields__slug: String!) {
    markdownRemark(fields: { slug: { eq: $fields__slug } }) {
      fields {
        slug
      }
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
