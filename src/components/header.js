import React from "react"
import { Link } from "gatsby";

import headerStyles from "./component-styles/header.module.scss";

export default function Header({title}) {
  return (
    <header className={headerStyles.header}>
    <h1 className={headerStyles.title}>{title}</h1>
    <nav >
      <ul className={headerStyles.navList}>
        <li>
          <Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About
          </Link>
        </li>
      </ul>
    </nav>
    </header>
  )
}
