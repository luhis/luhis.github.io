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
  const posts = data.blog.posts.filter(({ frontmatter }) => {
    return (
      lowerFiler.length === 0 ||
      frontmatter.tags.toLocaleLowerCase().includes(lowerFiler) ||
      frontmatter.title.toLocaleLowerCase().includes(lowerFiler)
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
            <article key={post.id}>
              <Link to={`/blog/${post.fields.slug}`}>
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
  query Blog {
    blog: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
