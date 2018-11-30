import { Link } from 'gatsby'
import React from 'react'

import styles from './hero.module.css'

const Hero = ({ headline, intro }) => (
  <div className={styles.root}>
    <div className={styles.container}>
      <h1 className={styles.headline}>{headline}</h1>
      <div>{intro}</div>
      <div>
        <Link to="/start/">Get started</Link>
      </div>
    </div>
  </div>
)

export default Hero
