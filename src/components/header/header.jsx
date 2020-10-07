import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons"

import "./header.scss"

const Header = ({ currentUser, logout }) => {
  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <img className="header-logo" src="/assets/logo-transparent.png" alt="Raduga school logo" />
        </Link>
        <div>
          <div className="header-title">The Russian Learning Center</div>
          <div className="header-slogan">Working today for a brighter, and better tomorrow</div>
        </div>
        <div className="header-login-container">
          <div className="p">
            <FontAwesomeIcon icon={faMapMarkedAlt} />
            {"  "}
            <span>Dublin, CA</span>
          </div>
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
