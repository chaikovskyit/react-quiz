import React, {Component} from 'react'
import ActiveQuiz from '../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.module.css'


class Quiz extends Component {
  state = {
    // Поточний номер запитання 
    activeQuestion: 0,
    quiz: [
      {
        // Питання 
        question: 'Що таке ReactJS',
        // id правельної відповіді
        rightAnswerId: 2,
        // id запитання, тобто порядковий номер запитання
        id: 1,
        // Тестові варіанти відповідей з id для зручності маніпуляцій з ними
        answers: [
          {text: 'Framework', id: 1},
          {text: 'Бібліотека', id: 2},
          {text: 'Мова програмування', id: 3},
          {text: 'Супер Герой', id: 4}
        ]
      },
      {
        // Питання 
        question: 'Хто такий Дарт Вейдер',
        // id правельної відповіді
        rightAnswerId: 3,
        // id запитання, тобто порядковий номер запитання
        id: 2,
        // Тестові варіанти відповідей з id для зручності маніпуляцій з ними
        answers: [
          {text: 'Супер герой', id: 1},
          {text: 'Yoda', id: 2},
          {text: 'Люк Скай Вокер', id: 3},
          {text: 'Палпатін', id: 4}
        ]
      }
    ]
  }
  // Функція яка виводить в консолі id елементу зі списку варіантів по якому був зроблений клік, її передаємо через пропси в сам низ до елементу AnswerItem де вона і викликається.
  onAnswerClickHandler = (answerId) => {
    console.log('Answer id:', answerId);
    // При кліку змінюємо activeQuestion
    this.setState({
      activeQuestion: this.state.activeQuestion +1
    })
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Дайте відповідь на запитання</h1>
          <ActiveQuiz 
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            // Параметр який відповідає загальну кількість запитаня
            quizLength={this.state.quiz.length}
            // Параметр який відповідає за номер поточного запитання
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    )
  }
}

export default Quiz