import React, { useState } from "react";
import { graphql, Link, PageProps } from "gatsby";
import { Columns, Form, Heading } from "react-bulma-components";

import Layout from "../components/Layout";
import SEO from "../components/Head";
import LeftCol from "../components/LeftCol";
import BlogTags from "../components/BlogTags";

export const Head = () => <SEO title="Matt McCorry's Blog Index" />;

const Blog: React.FC<PageProps<Queries.BlogQuery>> = ({ data }) => {
  const [filter, setFilter] = useState("");
  const lowerFiler = filter.toLocaleLowerCase();
  const posts = data.allFile.edges.filter(({ node }) => {
    return (
      lowerFiler.length === 0 ||
      node.childMarkdownRemark?.frontmatter.tags
        .toLocaleLowerCase()
        .includes(lowerFiler) ||
      node.childMarkdownRemark?.frontmatter.title
        .toLocaleLowerCase()
        .includes(lowerFiler)
    );
  });

  return (
    <Layout>
      <Columns>
        <Columns.Column size={3}>
          <LeftCol />
        </Columns.Column>
        <Columns.Column>
          <Heading>Blog Posts</Heading>
          <Form.Field>
            <Form.Label>Filter</Form.Label>

            <Form.Control>
              <Form.Input
                placeholder="Filter"
                type="search"
                value={filter}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFilter(e.target.value)
                }
              />
            </Form.Control>
          </Form.Field>
          {posts.map(post => (
            <article key={post.node.id}>
              <Link to={`/blog/${post.node.childMarkdownRemark?.fields.slug}`}>
                <Heading>
                  {post.node.childMarkdownRemark?.frontmatter.title}
                </Heading>
                <Heading subtitle>
                  {post.node.childMarkdownRemark?.frontmatter.author},{" "}
                  {post.node.childMarkdownRemark?.frontmatter.date}
                </Heading>
              </Link>
              <BlogTags
                tags={post.node.childMarkdownRemark?.frontmatter.tags || ""}
              />
              <p>{post.node.childMarkdownRemark?.excerpt}</p>
            </article>
          ))}
        </Columns.Column>
      </Columns>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query Blog {
    allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        childMarkdownRemark: { excerpt: { ne: null } }
      }
      sort: { childMarkdownRemark: { frontmatter: { date: DESC } } }
    ) {
      edges {
        node {
          id
          childMarkdownRemark {
            fields {
              slug
            }
            frontmatter {
              author
              date(fromNow: true)
              tags
              title
            }
            excerpt
          }
        }
      }
    }
  }
`;
