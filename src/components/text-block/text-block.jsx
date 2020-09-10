import React from "react"
import "./text-block.scss"

const TextBlock = ({ image, children }) => {
  const style = {
    backgroundImage: "url(" + image + ")"
  }

  return (
    <div className="text-block">
      <div style={style} className="image"></div>
      <div className="text">{children}</div>
    </div>
  )
}

export default TextBlock
