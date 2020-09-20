import React from "react"

import "./custombutton.scss"

const CustomButton = ({ children, ...other }) => {
  return (
    <button className="custombutton" {...other}>
      {children}
    </button>
  )
}

export default CustomButton
