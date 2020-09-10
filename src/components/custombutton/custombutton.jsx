import React from "react"

import "./custombutton.scss"

const CustomButton = ({ children, ...other }) => {
  return (
    <button className="scale custombutton" {...other}>
      {children}
    </button>
  )
}

export default CustomButton
