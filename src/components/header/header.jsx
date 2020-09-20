import React from "react"
import { Link } from "react-router-dom"

import "./header.scss"

const Header = ({ currentUser, logout }) => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src="/assets/logo-transparent.png" alt="Raduga school logo" />
        </Link>
        <div>
          <div className="slogan">The Russian Learning Center</div>
          <div className="color-dark font-special">Working today for a brighter, and better tomorrow</div>
        </div>
        <div>
          <div>Dublin, CA</div>
          <div>{currentUser ? <div onClick={() => logout()}>Sign Out</div> : <Link to="/signin">Sign In</Link>}</div>
        </div>
      </div>

      <nav className="nav">
        <Link to="/programs">Programs</Link>
        <Link to="/tuition">Tuition</Link>
        <Link to="/schedule">Schedule 2020-2021</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
    </header>
  )
}

export default Header
