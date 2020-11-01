import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import classes from './QuizList.module.css'
import axios from '../../axios/axios-quiz'
import Loader from '../../components/UI/Loader/Loader'
import {connect} from 'react-redux'

// Компонент який відповідає за список доступних тестів і навігацію між ними
class QuizList extends Component {
  
  state = {
    // Масив в який з сервера завантажуються наші тести
    quizes: [],
    // "Loader" буде крутитись по замовчувані, коли загрузка завершиться "Loader" перестане працювати це прописано в "componentDidMount()""
    loading: true
  }

  renderQuizes() {
    // За допомогою методу "map()" пробігаємось по оновленому масиві і рендеремо кожен його.
    return this.state.quizes.map((quiz) => {
      return(
        <li

          key={quiz.id}
        >
          <NavLink to={'/quiz/' + quiz.id}>
            {quiz.name}
          </NavLink>
        </li>
      )
    })
  }

  // Працювати з сервером ми можемо тоді коли в нас є DOM дерево, бо якщо його нема то ми не можемо змінювати "state" бо в нас полізуть помилки. Тому в 99% випадків для того щоб зробити запит на сервер ми використовуватимемо метод "componentDidMount()". Який каже нам про те що дерефо сформувалось що робимо далі? Тепер якщо в нас функція стрілочна то ми "async" пишемо в перед параметрами, а якщо це ES6 то пишемо ось так  
  async componentDidMount() {
    try {
      // cтворюємо змінну " response ", І в ній звертаємось до axios і кажемо нас цікавить метод "get"(дай мені те що лежить на сервері в файлі "quizes.json" )
      const response = await axios.get('/quizes.json')
      // локальна змінна (масив) в який ми додаємо тести
      const quizes = []
      // дивимось що ми отримуємо з сервера, в "response.data" ми отримуємо обєкт в якому ключі являються "id" потрібного нам тесту "Quiz ID =  -MKdlqBUmPaSFmlAfe6F" з його даними. Тепер нам просто потрібно переформатувати дані в той формат який нам підходить.
      console.log(response.data);
      // Для цього юзаємо оператор "Object.keys" для того щоб пробігтись по масиву і за допомогою методу  "forEach()" будемо отримувати ключ даного ключа, тобто "id" кожного обєкту і "index". Тепер нам треба сформувати "state" для даного компоненту де в нас буде зберігатись масив списку тестів які ми завантажуватимемо з сервера
      Object.keys(response.data).forEach((key, index) => {
        // на кожній ітерації ми додаємо новий тест в наш масив
        quizes.push({
          // ключ який ми отримали з сервера
          id: key,
          // імя тесту яке відображатиметься в компоненті <QuizList/>
          name: `Тест №${index + 1}`
        })
      })
      // Ми напакували наш локальний масив, тепер проводимо операцію зміни "state"
      this.setState({
        quizes: quizes,
        // зупиняємо лоадер
        loading: false
      })
      // ловить помилку
    } catch(e) {
      console.log(e);
    }
  }

  render(){
    return(
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестів</h1>
          {/* Виконуємо перевірку, якщо "this.state.loading" тобто якщо йде загрузка то відображаємо <Loader />, "loading: false" то відповідно відображаємо список тестів які ми завантажили з сервера*/}
          {
            this.state.loading
              ? <Loader />
              : <ul>
                  {this.renderQuizes()}
                </ul>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {

}

function mapDispatchToProps() {
  
}

export default connect()(QuizList)
