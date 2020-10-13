import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuize from '../../components/ActiveQuize/ActiveQuize'
class Quiz extends Component {
  state = {
    quiz: [
      {
        answers: [
          {text: 'Питання 1'},
          {text: 'Питання 2'},
          {text: 'Питання 3'},
          {text: 'Питання 4'},
        ]
      }
    ]
  }
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Дайте відповіді на всі запитання</h1>
          <ActiveQuize 
            answers={this.state.quiz[0].answers}
          />
        </div>
      </div>

    )
  }
}

export default Quiz