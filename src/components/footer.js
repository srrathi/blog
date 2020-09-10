import React from "react"

import footerStyles from "./component-styles/footer.module.scss";

export default function Footer({author}) {
  return(
    <footer className={footerStyles.footer}>
      <p>Made with love by {author}</p>
    </footer>
  )
}
