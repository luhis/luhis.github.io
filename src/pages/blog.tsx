import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { Column, Content, Title } from "rbx"
import "highlight.js/styles/default.css"
import hljs from "highlight.js"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import LeftCol from "../components/LeftCol"

interface Post {
  readonly id: number
  readonly frontmatter: {
    readonly title: string
    readonly author: string
    readonly date: string
  }
  readonly excerpt: string
  readonly html: string
}

const Blog: React.FC<{ data: { blog: { posts: readonly Post[] } } }> = ({
  data,
}) => {
  const { posts } = data.blog
  useEffect(() => {
    document.querySelectorAll("code").forEach(block => {
      hljs.highlightBlock(block)
    })
  })
  return (
    <Layout>
      <SEO title="Matt McCorry's Blog" />
      <Column.Group>
        <Column size="one-quarter">
          <LeftCol />
        </Column>
        <Column>
          {posts.map(post => (
            <article key={post.id}>
              <Title size={3}>{post.frontmatter.title}</Title>
              <small>
                {post.frontmatter.author}, {post.frontmatter.date}
              </small>
              <Content dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
          ))}
        </Column>
      </Column.Group>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        html
        excerpt
        id
      }
    }
  }
`
