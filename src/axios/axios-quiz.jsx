import axios from 'axios'

// створюємо говий інстанс "axios" для того щоб зменшити довжину ссилки в коді, тобто в нього буде завжди базовий URL який ми можемо конфігурувати
export default axios.create({
  baseURL: 'https://react-quiz-52bd0.firebaseio.com/'
})