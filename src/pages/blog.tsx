import React from "react";
import { graphql, Link } from "gatsby";
import { Columns, Heading } from "react-bulma-components";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import LeftCol from "../components/LeftCol";
import BlogTags from "../components/BlogTags";
import { PostSummary } from "../types/types";

const Blog: React.FC<{ data: { blog: { posts: readonly PostSummary[] } } }> = ({
  data,
}) => {
  const { posts } = data.blog;

  return (
    <Layout>
      <SEO title="Matt McCorry's Blog Index" />
      <Columns>
        <Columns.Column size={3}>
          <LeftCol />
        </Columns.Column>
        <Columns.Column>
          <Heading>Blog Posts</Heading>
          {posts.map(post => (
            <article key={post.id}>
              <Link to={`/blog${post.fields.slug}`}>
                <Heading>{post.frontmatter.title}</Heading>
                <Heading subtitle>
                  {post.frontmatter.author}, {post.frontmatter.date}
                </Heading>
              </Link>
              <BlogTags tags={post.frontmatter.tags} />
              <p>{post.excerpt}</p>
            </article>
          ))}
        </Columns.Column>
      </Columns>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
          tags
        }
        excerpt
        id
      }
    }
  }
`;
