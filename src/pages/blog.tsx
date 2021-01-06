import React from "react";
import { graphql, Link } from "gatsby";
import { Column, Columns, Title, Subtitle } from "trunx";

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
        <Column isOneQuarter>
          <LeftCol />
        </Column>
        <Column>
          <Title>Blog Posts</Title>
          {posts.map(post => (
            <article key={post.id}>
              <Link to={`/blog${post.fields.slug}`}>
                <Title>{post.frontmatter.title}</Title>
                <Subtitle>
                  {post.frontmatter.author}, {post.frontmatter.date}
                </Subtitle>
              </Link>
              <BlogTags tags={post.frontmatter.tags} />
              <p>{post.excerpt}</p>
            </article>
          ))}
        </Column>
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
