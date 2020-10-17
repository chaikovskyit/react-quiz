import React from 'react'
import classes from './AnswerItem.module.css'

//Компонента яка відповідає за відображення варіанта відповіді
const AnswerItem = (props) => {
  return(
    <li className={classes.AnswerItem}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {/* тут лежить  */}
      {props.answer.text}
    </li>
  )
}

export default AnswerItem