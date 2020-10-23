import React from 'react'
import classes from './Input.module.css'


const Input = (props) => {
  // створюємо властивість яке оприділятиме якого типу наш <Input/>

  // Тип <Input/> ми будемо отримувати у пропсах, або він по замовчуванні буде 'text
  const inputType = props.type || 'text'
  // Тут у нас масив класів для стилізації різного роду <Input/>
  const cls = [classes.Input]

  const htmlFor = `${inputType}-${Math.random()}`

  // if(true) {
  //   cls.push(classes.invalid)
  // }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input 
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />
      <span>{props.errorMessage}</span>
    </div>
  )
}

export default Input