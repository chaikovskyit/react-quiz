import React, {Component} from 'react'
import ActiveQuiz from '../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.module.css'
import FinishedQuiz from '../components/FinishedQuiz/FinishedQuiz'


class Quiz extends Component {
  state = {
    //обєкт в якому збираються результати відповідей на запитання
    // { [id]: 'success' or 'error' }
    results: {},
    // Відповідає за поточний стан вікторини. За замовчуванням це false тобто вона не завершена, а коли буде дано відповідь на останнє запитання значення isFinished зміниться на true.
    isFinished: false,
    // Поточний номер запитання 
    activeQuestion: 0,
    // Зберігає інформацію про поточний клік користувача(відповідь або правильна або неправильна {[id]: 'success' 'error'}  )
    answerState: null,
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
          {text: 'Енакен Скай Вокер', id: 3},
          {text: 'Палпатін', id: 4}
        ]
      }
    ]
  }
  // Функція яка виводить в консолі id елементу зі списку варіантів по якому був зроблений клік, її передаємо через пропси в сам низ до елементу AnswerItem де вона і викликається.
  onAnswerClickHandler = (answerId) => {
    console.log('Answer id:', answerId);
    if(this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if(this.state.answerState[key] === 'success'){
        return 
      }
    }

    // Тут лежить питання
    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    // Тут ми перевіряємо чи правильно ми відповіли на запитання
    if(question.rightAnswerId === answerId) {
      // якщо відповідь правильна то results буде дорівнювати 'success'
      if(!results[question.id]) {
        results[question.id] = 'success'
      }
      this.setState({
        answerState: {[answerId]: 'success'},
        //// В обєкт results додаємо значення зміної results в даному випадку 'success', тобто змінюємо state
        results: results
      })
      const timeout = window.setTimeout(() => {
        if(this.isQuizFinished()) {
          // коли вікторина завершена значення в state змінюється на true
          this.setState({
            isFinished: true
          })
        } else {
          // При кліку змінюємо activeQuestion якшо відповідь правильна
          this.setState({
            activeQuestion: this.state.activeQuestion +1,
            answerState: null
          })
        }
        window.clearTimeout(timeout)
      }, 1000)
    } else {
      // якщо відповідь не правильна, змінній results присвоюється значення 'error'
      results[question.id] = 'error'
      this.setState({
        answerState: {[answerId]: 'error'},
        // В обєкт results додаємо значення зміної results в даному випадку 'error', тобто змінюємо state
        results: results
        
      })
    }
  }
  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }
  // Функція яка повертає вікторину в початкове значення, тобто обнулює всі показники і ми можемо проходити вікторину заново. Обнуляємо state
  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    })
  }

  componentDidMount() {
    console.log('Quiz ID = ', this.props.match.params.id);
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Дайте відповідь на запитання</h1>

          {/* Відповідно до значення state залежить те який компонент ми будемо рендерити, по дефолту ми рендиремо ActiveQuiz, а коли значення в state змінюється на true ми рендиремо FinishedQuiz */}
          {
            this.state.isFinished
            ? <FinishedQuiz 
                // передаємо компонетну значення result яке лежить в state
                results={this.state.results}
                quiz={this.state.quiz}
                // Викликаємо функцію пройти вікторину заново
                onRetry={this.retryHandler}
              />
            : <ActiveQuiz 
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                // Параметр який відповідає загальну кількість запитаня
                quizLength={this.state.quiz.length}
                // Параметр який відповідає за номер поточного запитання
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
          }
        </div>
      </div>
    )
  }
}

export default Quiz