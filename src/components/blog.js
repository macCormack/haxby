import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Blog = () => (
  <StaticQuery
    query={graphql`
    query BlogContent {
      allContentfulBlog {
        edges {
          node {
            blogPosts {
              id
              title
              content {
                content
              }
              author {
                name
              }
            }
          }
        }
      }
    }
    `}
    render={data => (
      <>
        <h2>Blog</h2>
        {data.allContentfulBlog.edges[0].node.blogPosts.map(item => {
          return (
            <section id="blog" key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.content.content}</p>
              <span>By: {item.author.name}</span>
            </section>
          )
        })}
      </>
    )}
  />
)
export default Blog
