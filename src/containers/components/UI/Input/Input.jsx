import React from 'react'
import classes from './Input.module.css'

// Функція яка відповідає за валідацію тобто за те чи є в нашому Input помилка
function isInvalid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched
}

const Input = (props) => {
  // створюємо властивість яке оприділятиме якого типу наш <Input/>

  // Тип <Input/> ми будемо отримувати у пропсах, або він по замовчуванні буде 'text
  const inputType = props.type || 'text'
  // Тут у нас масив класів для стилізації різного роду <Input/>
  const cls = [classes.Input]
  // генеруємо унікальні htmlFor
  const htmlFor = `${inputType}-${Math.random()}`

  if(isInvalid(props)) {
    cls.push(classes.invalid)
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input 
        // параметр який відповідає за тип
        type={inputType}
        // параметр ???????
        id={htmlFor}
        // Параметр який містить значення яке знаходиться в Input
        value={props.value}
        // параметр який дозволяє слідкувати за змінами в Input
        onChange={props.onChange}
      />
      {/* якщо в props помилка то ми виводимо її під Input, якщо ні то нічого не виводимо*/}
      {
        isInvalid(props)
          // повідомлення про помилку заповнення
          ? <span>{props.errorMessage}</span>
          : null
      }
      
    </div>
  )
}

export default Input