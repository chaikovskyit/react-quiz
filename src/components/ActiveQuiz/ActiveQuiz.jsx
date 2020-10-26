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
        <strong>{props.answerNumber}.</strong>&nbsp;
        {/* тут лежить питання */}
        {props.question}
      </span>
      {/* порядковий номер запитання та довжинна масиву з запитань */}
        <small>{props.answerNumber} з {props.quizLength}</small>
    </p>
    <AnswersList
      state={props.state}
      // тут лежать варіанти відповідей
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
    />
  </div>
  )
}

export default ActiveQuiz