// Це функція обєднююча усі наші reducers

import {combineReducers} from 'redux'
import quizReducer from './quiz'

export default combineReducers({
  // Сюди передаємо обєкт конфігурації де будуть описанні усі наші reducers
  quiz: quizReducer
})