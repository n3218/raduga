import React from "react"
import "./text-block.scss"

const TextBlock = ({ title, image, children, backgroundColor }) => {
  const style = {
    backgroundImage: "url(" + image + ")"
  }

  return (
    <div className={`text-block ${backgroundColor}`}>
      {image && <div style={style} className="text-block_image"></div>}
      <div className="text-block_text">
        {title && <div className="h2">{title}</div>}
        {children}
      </div>
    </div>
  )
}

export const SmallTextBlock = ({ img, title, children }) => (
  <div className="small-text-block">
    {img && (
      <div className="small-text-block_img">
        <img src={img} alt={title} />
      </div>
    )}
    <div className="small-text-block_title">{title}</div>
    {children && <div className="small-text-block_text">{children}</div>}
  </div>
)

export default TextBlock
