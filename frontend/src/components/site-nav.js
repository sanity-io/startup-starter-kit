import { Link } from 'gatsby'
import React from 'react'

import styles from './site-nav.module.css'

const SiteNav = ({ siteTitle, menu, isMenuExpanded, onExpandMenu }) => (
  <nav className={styles.root}>
    <div className={styles.siteTitle}>
      <Link to="/">{siteTitle}</Link>
    </div>
    <div className={styles.menu} data-is-expanded={isMenuExpanded}>
      <ol>
        {menu.items.map(item => (
          <li key={item.key}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ol>
      <button
        type="button"
        className={styles.menuOverflowButton}
        onClick={onExpandMenu}
      >
        =
      </button>
    </div>
  </nav>
)

export default SiteNav
