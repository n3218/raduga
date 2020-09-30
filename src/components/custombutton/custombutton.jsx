import React from "react"

import "./custombutton.scss"

const CustomButton = ({ children, className, ...other }) => {
  return (
    <button className={`custombutton ${className}`} {...other}>
      {children}
    </button>
  )
}

export default CustomButton
