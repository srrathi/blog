import React from "react";
import { graphql} from "gatsby";

import Head from "../head";
import Layout from './layout';
import blogPostStyles from '../component-styles/blogPost.module.scss';

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
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <div className={blogPostStyles.header}>
        <h1 className={blogPostStyles.title}>{props.data.markdownRemark.frontmatter.title}</h1>
        <ol className={blogPostStyles.tagList}>
          {props.data.markdownRemark.frontmatter.tags.map(tag => {
            return <li className={blogPostStyles.tag}><i>{tag}</i></li>
          })}
        </ol>
      </div>
      <div className={blogPostStyles.content} dangerouslySetInnerHTML = {{ __html: props.data.markdownRemark.html}}>
      </div>
    </Layout>
  )
}

export default BlogPost 