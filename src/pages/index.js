import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby";
import Layout from "../components/templates/layout";

export default function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }

            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return(
    <Layout>
      <h4>All articles </h4>
      <hr />
      <ol>
        {data.allMarkdownRemark.edges.map(post => {
          return (
            <li>
              <Link to={`/${post.node.fields.slug}`}>
                <h3>{post.node.frontmatter.title}</h3>
                <p>{post.node.frontmatter.date}</p> 
              </Link>
            </li>
            )
        })}
      </ol>
    </Layout>
  )
}
