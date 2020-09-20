import React from "react"

import "./custominput.scss"

const CustomInput = ({ handleChange, label, name, ...other }) => {
  return (
    <div className="inputgroup">
      <input onChange={handleChange} autoComplete={label} name={name} {...other} />
      {label ? (
        <label htmlFor={name} className="label">
          {label}
        </label>
      ) : null}
    </div>
  )
}

export default CustomInput
