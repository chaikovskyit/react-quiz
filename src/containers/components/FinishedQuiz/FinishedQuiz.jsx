import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = (props) => {
  return (
    <div className={classes.FinishedQuiz}>
      {/* В <ul/> ми виводимо список усіх запитань вікторини з їх результатом відповіді*/}
      <ul>
        {/* елемент <li/> відповідає за кожне окреме запитання, його порядковий номер, текст запитання, та іконка в залежності від його статусу, 'success' або 'error'*/}
        <li>
          <strong>1. </strong>
          How are you?
          {/* Для іконок ми підєднували 'font awesome cdn' */}
          <i className={`${'fa fa-times'} + ${classes.error}`}/>
        </li>
        <li>
          <strong>2. </strong>
          If you?
          <i className={`${'fa fa-check'} + ${classes.success}`}/>
        </li>
      </ul>
      {/* інформація про правельно дані відповіді на запитання */}
      <p>Правильно 4 з 12</p>
      <div>
        {/* <button/> який відповідає за повторне проходження вікторини */}
        <button>Повторити</button>
      </div>
    </div>
  )
}
// експортуємо в Quiz
export default FinishedQuiz