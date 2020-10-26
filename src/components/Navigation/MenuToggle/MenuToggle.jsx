import React from 'react'
import classes from './MenuToggle.module.css'


// іконка меню типу бургера
const  MenuToggle = (props) => {

  const cls = [
    classes.MenuToggle,
    'fa',
  ]
  // Якщо в props ми отримаємо параметр open(це означатиме що меню відкрите) то тоді ми будемо добавляти класс який буде малювати хрестик для того щоб меню закрити, в іншому випадку клас який малюватиме бургер
  if(props.isOpen) {
    cls.push('fa-times')
    cls.push(classes.open)
  } else {
    cls.push('fa-bars')
  }

  return (
    <i 
      className={cls.join(' ')}
      onClick={props.onToggle}
    />
  )
}

// підключаємо його в Layout
export default MenuToggle