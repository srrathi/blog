import React from "react"
import { Helmet } from "react-helmet";
import {graphql, useStaticQuery} from "gatsby";

const Head = ({title}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const home = title==="Home";
  const tempTitle = home?`${data.site.siteMetadata.title}`:`${title} | ${data.site.siteMetadata.title}`
  return (
    <Helmet title={tempTitle}/>
  )

}

export default Head;