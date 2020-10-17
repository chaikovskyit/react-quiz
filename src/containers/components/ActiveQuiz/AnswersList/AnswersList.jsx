import React from 'react'
import classes from './AnswersList.module.css'
import AnswerItem from './AnswerItem/AnswerItem'

// Компонент що відповідає за відображення списук варіантів відповідей
const AnswersList = (props) => {
  return (
    <ul className={classes.AnswersList}>
      {/* Методом меп ми проходимось по масиву варіантів відповідей який знаходиться в стейті, і додавши до них індекс малюєио їх у нашому лісті */}
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem 
            // індекс елементу типу ідентифікатора
            key={index}
            // елемент
            answer={answer}
            // функція кліку
            onAnswerClick={props.onAnswerClick}
          />
        )
      })}
    </ul>
  )
}

export default AnswersList