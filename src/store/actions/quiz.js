// реалізовуємо усі action creator для тестів
import axios from '../../axios/axios-quiz'
import { 
  FETCH_QUIZES_ERROR, 
  FETCH_QUIZES_START, 
  FETCH_QUIZES_SUCCESS, 
  FETCH_QUIZ_SUCCESS 
} from './actionTypes'

export function fetchQuizes() {
  return async dispatch => {

    dispatch(fetchQuizesStart())

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
      // this.setState({
      //   quizes: quizes,
      //   // зупиняємо лоадер
      //   loading: false
      // })
      // ловить помилку
      dispatch(fetchQuizesSuccess(quizes))
    } catch(e) {
      dispatch(fetchQuizesError(e))
    }
  }
}

export function fetchQuizById(quizId) {
  return async dispatch => {
    dispatch(fetchQuizesStart())
    try {
      const response = await axios.get(`/quizes/${quizId}.json`)
      const quiz = response.data

      dispatch(fetchQuizSuccess(quiz))
    } catch (e) {
      dispatch(fetchQuizesError(e))
    }
  }

}

export function fetchQuizSuccess(quiz) {
  return {
    type: FETCH_QUIZ_SUCCESS,
    quiz: quiz
  }
}

export function fetchQuizesStart() {
  return {
    type: FETCH_QUIZES_START
  }
}

export function fetchQuizesSuccess(quizes) {
  return {
    type: FETCH_QUIZES_SUCCESS,
    quizes: quizes
  }
}

export function fetchQuizesError(e) {
  return {
    type: FETCH_QUIZES_ERROR,
    error: e
  }
}

