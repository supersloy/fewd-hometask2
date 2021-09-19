import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo.png'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.header}>
      <img src={Logo} />
      <span className={styles.header__title}>2nd Hometask</span>
      <div className={styles.header__linkWrapper}>
        <NavLink
          to="/register"
          className={styles.header__link}
          activeClassName={styles.header__link_active}
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          className={styles.header__link}
          activeClassName={styles.header__link_active}
        >
          Login
        </NavLink>
      </div>
    </div>
  )
}
