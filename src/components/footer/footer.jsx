import React from "react"
import { Link } from "react-router-dom"
import s from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={s.footer}>
      <nav className={s.nav}>
        <Link to="maps.google.com">direction</Link>
        <span>©2020 by The Russian Learning Center</span>
        <Link to="/programs">Programs</Link>
        <Link to="/schedule">Schedule</Link>
        <span>123-456-7890</span>
      </nav>
    </footer>
  )
}

export default Footer
