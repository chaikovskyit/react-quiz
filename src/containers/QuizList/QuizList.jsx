import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import classes from './QuizList.module.css'
import axios from 'axios'

// Компонент який відповідає за список доступних тестів і навігацію між ними
class QuizList extends Component {
  
  renderQuizes() {
    return [1, 2, 3].map((quiz, index) => {
      return(
        <li
          key={index}
        >
          <NavLink to={'/quiz/' + quiz}>
            Тест {quiz}
          </NavLink>
        </li>
      )
    })
  }

  componentDidMount() {
    axios.get('https://react-quiz-52bd0.firebaseio.com/quiz.json').then(response => {
      console.log(response);
    })
  }

  render(){
    return(
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестів</h1>
          <ul>
            {this.renderQuizes()}
          </ul>
        </div>
      </div>
    )
  }
}

export default QuizList
