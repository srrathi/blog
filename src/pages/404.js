import React from "react";

import Layout from '../components/templates/layout'
import notFoundStyles from '../components/component-styles/404.module.scss';

const NotFound = () => {
  return(
    <Layout>
      <div className={notFoundStyles.container}>
        <h1>Ooops!!! You should not have come here. Now I feel bad to tell you that</h1>
        <h2>This page was not found (<em>Error: 404</em>)</h2>
      </div>
    </Layout>
  )
}

export default NotFound