import React from 'react'
import classes from './Backdrop.module.css'

// компонент для затемнення заднього фону при розгортанні меню, та при кліку на нього меню закривається
const Backdrop = (props) => {
  return (
    <div className={classes.Backdrop} onClick={props.onClick}>

    </div>
  )
}

export default Backdrop