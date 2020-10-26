import React from 'react'
import classes from './FinishedQuiz.module.css'
// імпортуємо створену кнопку
import Button from '../UI/Button/Button'
import {Link} from 'react-router-dom'

// В пропсах ми отримуємо два параметри, result і quiz
const FinishedQuiz = (props) => {
  // Для того щоб порахувати кількість правильних відповідей ми створюємо змінну successCount і проходимось по параметру props.results це обєкт, тому ми користуємось функцією Object.keys() яка перетворює обєкт в масив ключів цього обєкта. Та використовуємо метод reduce() для того щоб підрахувати правильні відповіді
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if(props.results[key] === 'success'){
      total++
    }
    return total
  }, 0)

  return (
    <div className={classes.FinishedQuiz}>
      {/* В <ul/> ми виводимо список усіх запитань вікторини з їх результатом відповіді*/}
      <ul>
        {/* Ми проходимось по всьому масиву quiz де в нас лежить список питань, за допомогою методу map(). В оператор map() ми отримуємо параметр question та index, і будемо отримувати новий масив який буде повертати масив класів. quizItem це обєкт з масиву quiz, з якого ми беремо поле question та index*/}
        { props.quiz.map((quizItem, index) => {
          // Формуємо масив класів для іконки. Тобто якщо відповідь 'error' то до fa ми дописуємо fa-times, а якщо відповідь 'success' то дописуємо fa-check, за допомогою методу join(' ')
          const cls = [
            'fa',
            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            classes[props.results[quizItem.id]]
          ]
          return (
            // Кожному тегу <li/> ми задаємо key для унікальності елемента
            <li key={index}>
              {/* Тут виводиться номер питання, і оскільки відлік починається з 0 ми до index додаємо 1 і пробіл &nbsp;*/}
              <strong>{index + 1}</strong>.&nbsp;
              {/* Тут лежить текст питання */}
              {quizItem.question}
              {/* Тут лежить іконка яка буде показувати результат відповіді, це або 'success' або 'error', тобто або галочка або хрестик */}
              <i className={cls.join(' ')} />
            </li>
          )
        })}
      </ul>
      {/* інформація про правельно дані відповіді на запитання. props.quiz.length це загальна кількість питань, а successCount це кількість правильних відповідей*/}
      <p>Правильно {successCount}  з {props.quiz.length}</p>
      <div>
        {/* відповідає за повторне проходження вікторини */}
        <Button onClick={props.onRetry} type="primary">Повторити</Button>
        {/* відповідає за перехід в список вікторин*/}
        <Link to='/'>
          <Button onClick={props.onRetry} type="success">Перейти в список тестів</Button>
        </Link>
        
      </div>
    </div>
  )
}
// експортуємо в Quiz
export default FinishedQuiz