import React from "react"
import { graphql } from "gatsby"
import { Content, Title } from "rbx"

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
  return (
    <React.Fragment>
      <Title>My blog posts</Title>

      {posts.map(post => (
        <article key={post.id}>
          <Title size={3}>{post.frontmatter.title}</Title>
          <small>
            {post.frontmatter.author}, {post.frontmatter.date}
          </small>
          <Content dangerouslySetInnerHTML={{ __html: post.html }}/>
        </article>
      ))}
    </React.Fragment>
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
