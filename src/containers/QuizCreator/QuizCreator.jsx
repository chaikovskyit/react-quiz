import React, {Component} from 'react'
import classes from './QuizCreator.module.css'
import Button from '../../containers/components/UI/Button/Button'
// імпортуємо метод
import {createControl} from '../../form/formFramework'
import Input from '../../containers/components/UI/Input/Input'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

// Функція яка допомагає зменшити написання коду, тобто для того щоб описати варіанти відповіді і не писати все в ручну створена функція яка буде повертати обєкт варіанта відповіді з готовими параметрами залишеться просто викликати її і передавати їй в якості параметра порядковий номер 
function createOptionControl(number) {
  return createControl({
    label: `Варіант ${number}`,
    errorMessage: 'Значення не можу бути пустим',
    id: number
  },{required: true})
}

// Коли ми додаємо нове питання нам потрібно оновлювати стейт, і обнуляти його, тому ми створюємо цю функцію яку просто передаємо в наш "state" в поле "formControls"
function createFormControls() {
  return {
    // для поля "question" викликаємо метод "createControl(config, validation)" (він повертає обєкт), а для поля "question" ми просто витягуємо потрібні нам ключі це параметр "config", другим параметром передаємо набір валідацій "validation"
    question: createControl({
      label: 'Введіть запитання',
      errorMessage: "Питання не може бути пустим"
      // Це другий параметр методу "createControl()" який передає набір валідацій, в конкретному випадку ми дивимось за тим щоб поле не було пустим
    },{required: true}),
    // використовуємо метод "createOptionControl(number)" який під капотом повертає обєкт з потрібними нам ключами, нам залишається в якості параметра передавати йому лише порядковий номер. Це зроблено для того що не викликати кожен раз "createControl" і передавати їй вагон одинакових параметрів, бо "createOptionControl()" під капотом вже містить функцію "createControl" з прописаними потрібними нам параметрами
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  }
}
// Тут генеруємо нові тести 
class QuizCreator extends Component {
  // створюємо state де ми опишемо всі поля
  state = {
    // створюємо порожній масив, де в подальшому будуть зберігатисься усі наші запитання, які будуть добавлятись сюди за допомогою addQuestionHandler()
    quiz: [],
    // це обєкт який містить поле для вводу "питання" та 4 поля вводу варіантів "відповіді"
    formControls: createFormControls()
  }
  // Метод який відмінює стандартну паведінку <form/>
  submitHandler = (event) => {
    event.preventDefault()
  }

  addQuestionHandler = () => {

  }

  createQuizHandler = () => {

  }

  changeHandler = (value, controlName) => {
    
  }
  // Метод який рендерить <Input/> з параметрами. Залежить від state
  renderControls() {
    // за допомогою оператора Object.keys ми отримуємо набір ключів (question, option1 - option4) далі оператором map() 
    return Object.keys(this.state.formControls).map((controlName, index) => {
      // control це або question, або option1 - option4
      const control = this.state.formControls[controlName]
      return (
        <Auxiliary key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event => this.changeHandler(event.target.value, controlName)}
          />
          {/* Для того щоб відділити питання від відповідей використовуємо <hr/> і ось таку перевірку */}
          { index === 0 ? <hr/> : null }
        </Auxiliary>
      )
    })
  }
  
  render(){
    return(
      <div className={classes.QuizCreator}>
        <div>
          <h1>Створення вікторини</h1>
          <form onSubmit={this.submitHandler}>
            {/* Рендеремо наші <Input/> */}
            {this.renderControls()}
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
