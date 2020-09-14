import React from "react";
import {Helmet} from "react-helmet";

import {useStaticQuery, graphql} from "gatsby";

const Head = ({title}) => {
  const data = useStaticQuery(graphql`
    query{
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const home = ( title === "Home" )
  const titleStr = home ? data.site.siteMetadata.title : `${title} | ${data.site.siteMetadata.title}`

  return <Helmet title = {titleStr}/>
} 

export default Head