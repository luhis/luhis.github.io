import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { Column, Content, Tag, Title } from "rbx"
import { highlightBlock } from "highlight.js"
import "highlight.js/styles/default.css"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import LeftCol from "../components/LeftCol"

interface Post {
  readonly id: number
  readonly frontmatter: {
    readonly title: string
    readonly author: string
    readonly date: string
    readonly tags: string
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
      highlightBlock(block)
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
              <Tag.Group>
                {post.frontmatter.tags.split(",").map((t: string) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </Tag.Group>
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
          tags
        }
        html
        excerpt
        id
      }
    }
  }
`
