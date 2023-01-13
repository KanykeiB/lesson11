import React from "react";
import classNames from "classnames";
import Logo from "../logo";

import styles from './style.module.scss'
import { Link } from "react-router-dom";

const Header = (props) => {
  const {
    className
  } = props

  const headerClassNames = classNames(
    styles.header,
    {
      [`${className}`]: className
    }
  )
  return (
    <header className={headerClassNames}>
      <Link to={`/`}>
        <Logo />
      </Link>
      <nav className={styles['nav-list']}>
        <a className={styles['nav-list-item']} href="#">
          Link
        </a>
        <a className={styles['nav-list-item']} href="#">
          Link
        </a>
        <a className={styles['nav-list-item']} href="#">
          Link
        </a>
        <a className={styles['nav-list-item']} href="#">
          Link
        </a>
        <a className={styles['nav-list-item']} href="#">
          Link
        </a>
      </nav>
    </header>
  )
}

export default Header