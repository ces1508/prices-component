import React, { useRef } from 'react'
import './switch.css'

const Switch = ({ handleChange }) => {
  const checkBoxRef = useRef(null)
  function onChange () {
    handleChange(checkBoxRef.current.checked)
  }
  return (
    <div className="switch__wrapper">
      <p className='switch__option'>annually</p>
      <input  onChange={onChange} type='checkbox' id="switch"  className="switch__checkbox" ref={checkBoxRef} />
      <label htmlFor="switch" className='switch'></label>
      <p className='switch__option'>monthly</p>
    </div>
  )
}

export default Switch
