import React, {Component} from 'react'
import classes from './QuizCreator.module.css'
import Button from '../../containers/components/UI/Button/Button'
import {createControl} from '../../form/formFramework'

function createOptionControl(number) {
  return createControl({
    label: `Варіант відповіді  ${number}`,
    errorMessage: 'Значення не може бути пустим',
    id: number
  }, {required: true})
}

function createFormControl() {
  return {
    question: createControl({
      label: 'Введіть питання',
      errorMessage: 'Питання не може бути пустим'
    }, {required: true}),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4)
  }
}
// Тут генеруємо нові тести 
class QuizCreator extends Component {

  state ={
    quiz: [],
    formControls: createFormControl()
  }

  // Метод який відмінює стандартну паведінку <form/>
  submitHandler = (event) => {
    event.preventDefault()
  }

  addQuestionHandler = () => {

  }

  createQuizHandler = () => {

  }

  renderControls() {
    
  }

  render(){
    return(
      <div className={classes.QuizCreator}>
        <div>
          <h1>Створення вікторини</h1>

          <form onSubmit={this.submitHandler}>

            {this.renderControls}

            <select></select>
            <Button
              type="primary"
              onClick={this.addQuestionHandler}
            >
              Додати питання
            </Button>
            <Button
              type="success"
              onClick={this.createQuizHandler}
            >
              Створити Вікторину
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

export default QuizCreator
