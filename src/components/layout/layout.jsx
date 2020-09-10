import React from "react"
import "./layout.scss"

const Layout = ({ title, children }) => {
  return (
    <div className="layout">
      {title && <h1>{title}</h1>}
      {children}
    </div>
  )
}

export default Layout
