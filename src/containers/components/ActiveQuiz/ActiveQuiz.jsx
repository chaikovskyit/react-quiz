import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList'

// Компонент який відповідає за відображення питання та варіантів відповдей
const ActiveQuiz = (props) => {
  return (
    <div className={classes.ActiveQuiz}>
    {/* тег р відповідає за питання */}
    <p className={classes.Question}>
      <span>
        {/* Порядковий номер питання */}
        <strong>1.</strong>&nbsp;
        {/* тут лежить питання */}
        {props.question}
      </span>
      {/* порядковий номер запитання 2/10 */}
      <small>4 з 12</small>
    </p>
    <AnswersList
      // тут лежать варіанти відповідей
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
    />
  </div>
  )
}

export default ActiveQuiz