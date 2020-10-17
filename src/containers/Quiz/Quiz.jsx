import React, {Component} from 'react'
import ActiveQuiz from '../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.module.css'


class Quiz extends Component {
  state = {
    quiz: [
      {
        // Питання 
        question: 'Що таке ReactJS',
        // id правельної відповіді
        rightAnswerId: 2,
        // Тестові варіанти відповідей з id для зручності маніпуляцій з ними
        answers: [
          {text: 'Framework', id: 1},
          {text: 'Бібліотека', id: 2},
          {text: 'Мова програмування', id: 3},
          {text: 'Супер Герой', id: 4}
        ]
      }
    ]
  }
  // Функція яка виводить в консолі id елементу зі списку варіантів по якому був зроблений клік
  onAnswerClickHandler = (answerId) => {
    console.log('Answer id:', answerId);
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Дайте відповідь на запитання</h1>
          <ActiveQuiz 
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    )
  }
}

export default Quiz