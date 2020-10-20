import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
  // Масив прийямає два класи
  const cls = [
    // клас який відноситься до кнопки
    classes.Button,
    // клас кольору або типу кнопки
    classes[props.type]
  ]

  return(
    <button 
      className={cls.join(' ')}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {/* ??????????? */}
        {props.children}
    </button>
  )
}

export default Button