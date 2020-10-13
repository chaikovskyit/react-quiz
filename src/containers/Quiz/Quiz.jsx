import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuize from '../../components/ActiveQuize/ActiveQuize'
class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'Якого кольору небо',
        rightAnswerId: 2,
        answers: [
          {text: 'Чорний', id: 1},
          {text: 'Синій', id: 2},
          {text: 'Червоний', id: 3},
          {text: 'Зелений', id: 4},
        ]
      }
    ]
  }

  onAnswerClickHandler = (answerId) => {
    console.log('Answer ID: ', answerId);
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Дайте відповіді на всі запитання</h1>
          <ActiveQuize 
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