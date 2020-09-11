import React from "react";
import { graphql} from "gatsby";

import Layout from './layout';

export const query = graphql`
    query(
    $slug: String!
    ) {
      markdownRemark (
        fields: {
          slug: {
            eq: $slug
          }
        }
      ) {
        frontmatter {
          title
          date
          tags
        }

        html
      }
    }
  `
const BlogPost = (props) => {

  // console.log(props.data)
  return(
    <Layout>
      <div>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <ol>
          {props.data.markdownRemark.frontmatter.tags.map(tag => {
            return <li>{tag}</li>
          })}
        </ol>
      </div>
      <div dangerouslySetInnerHTML = {{ __html: props.data.markdownRemark.html}}>
      </div>
    </Layout>
  )
}

export default BlogPost 