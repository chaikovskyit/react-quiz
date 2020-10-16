import React, {Component} from 'react'
import ActiveQuiz from '../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.module.css'


class Quiz extends Component {
  state = {
    quiz: [
      {
        answers: [
          {text: 'Чувак'},
          {text: 'Програмер'},
          {text: 'Герой'},
          {text: 'Супер Герой'}
        ]
      }
    ]
  }
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Дайте відповідь на запитання</h1>
          <ActiveQuiz 
            answers={this.state.quiz[0].answers}
          />
        </div>
      </div>
    )
  }
}

export default Quiz