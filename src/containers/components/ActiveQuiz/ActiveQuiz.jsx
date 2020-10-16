import React from 'react'
import classes from './ActiveQuiz.module.css'

const ActiveQuiz = (props) =>  (
  <div className={classes.ActiveQuiz}>
    {/* тег р відповідає за питання */}
    <p className={classes.Question}>
      <span>
        {/* Порядковий номер питання */}
        <strong>1.</strong>&nbsp;
        Хто такий Дарт Вейдер?
      </span>
      {/* порядковий номер запитання 2/10 */}
      <small>4 з 12</small>
    </p>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
)

export default ActiveQuiz