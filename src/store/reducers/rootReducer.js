// Це функція обєднююча усі наші reducers

import {combineReducers} from 'redux'
import quizReducer from './quiz'
import createReducer from './create'
import authReducer from './auth'

export default combineReducers({
  // Сюди передаємо обєкт конфігурації де будуть описанні усі наші reducers
  quiz: quizReducer,
  create: createReducer,
  auth: authReducer
})