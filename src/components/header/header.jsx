import React from "react"
import { Link } from "react-router-dom"

import s from "./header.module.scss"

const Header = ({ currentUser, logout }) => {
  return (
    <header>
      <Link to="/">
        <img className={s.logo} src="/assets/logo-transparent.png" alt="Raduga school logo" />
      </Link>
      <nav className={s.nav}>
        <Link to="/about">Our Classes</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/tuition">Tuition</Link>
        <Link to="/contacts">Contact Us</Link>
        {currentUser ? <div onClick={() => logout()}>Sign Out</div> : <Link to="/signin">Sign In</Link>}
      </nav>
    </header>
  )
}

export default Header
