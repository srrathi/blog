import React from "react"
import Header from '../header';
import Footer from '../footer';

import {graphql, useStaticQuery} from "gatsby";

import '../../styles/index.scss'
import layoutStyle from '../component-styles/layout.module.scss';

export default function Layout(props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  return (
    <div className={layoutStyle.root}>
      <div className={layoutStyle.outerContainer}>
        <div className={layoutStyle.container}>
          <div id="content" className={layoutStyle.content}>
            <Header title={data.site.siteMetadata.title}/>
            {props.children}
          </div>
          <Footer page={props.page} author={data.site.siteMetadata.author}/>
        </div>
      </div>
    </div>
  )
}
