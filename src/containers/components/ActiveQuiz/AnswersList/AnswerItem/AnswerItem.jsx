import React from 'react'
import classes from './AnswerItem.module.css'

//Компонента яка відповідає за відображення варіанта відповіді
const AnswerItem = (props) => {
  const cls = [classes.AnswerItem]
  if(props.state) {
    cls.push(classes[props.state])
  }

  return(
    <li className={cls.join(' ')}
      // Функція яка повертає id варіанта відповіді
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {/* тут лежить  */}
      {props.answer.text}
    </li>
  )
}

export default AnswerItem