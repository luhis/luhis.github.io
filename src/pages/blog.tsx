import React from "react";
import { graphql, Link } from "gatsby";
import { Column, Title } from "rbx";

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
      <Column.Group>
        <Column size="one-quarter">
          <LeftCol />
        </Column>
        <Column>
          <Title>Blog Posts</Title>
          {posts.map(post => (
            <article key={post.id}>
              <Link to={`/blog${post.fields.slug}`}>
                <Title>{post.frontmatter.title}</Title>
                <Title subtitle>
                  {post.frontmatter.author}, {post.frontmatter.date}
                </Title>
              </Link>
              <BlogTags tags={post.frontmatter.tags} />
              <p>{post.excerpt}</p>
            </article>
          ))}
        </Column>
      </Column.Group>
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
