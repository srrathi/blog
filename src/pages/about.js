import React from "react"
import {Link} from "gatsby";

import Head from '../components/head';
import Layout from "../components/templates/layout";
import aboutStyles from '../components/component-styles/about.module.scss';
export default function Home() {
  return(
    <Layout>
      <Head title="About"/>
      <h3>Hey</h3>
      <p>I am just someone who is interested in understanding how stuff around us works, especially the software side of things.</p>
      <p>This blog is a way for me to keep track of my learnings and maybe make some like minded friends along the way</p>
      <p>I would be happy to help you with any problems you are facing with learning to code</p>
      <i> I certainly don't know everything about everything but <b>idk</b>; maybe I might be able to help.</i>
      <p></p>
      <hr></hr>
      <p>Connect with me on twitter at <Link to="https://twitter.com/NRathore404" target="_blank" className={aboutStyles.link}>@NRathore404</Link></p>
      <p>If you want to get about new posts; <Link to="https://tinyletter.com/nsr-py" target="_blank" className={aboutStyles.link}>Subscribe</Link> to be a part of my email list</p>
    </Layout>
  )
}
