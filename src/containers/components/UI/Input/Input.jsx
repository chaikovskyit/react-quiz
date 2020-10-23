import React from 'react'
import classes from './Input.module.css'

function isInvalid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched
}

const Input = (props) => {
  // створюємо властивість яке оприділятиме якого типу наш <Input/>

  // Тип <Input/> ми будемо отримувати у пропсах, або він по замовчуванні буде 'text
  const inputType = props.type || 'text'
  // Тут у нас масив класів для стилізації різного роду <Input/>
  const cls = [classes.Input]

  const htmlFor = `${inputType}-${Math.random()}`

  if(isInvalid(props)) {
    cls.push(classes.invalid)
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input 
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />
      {
        isInvalid(props)
          ? <span>{props.errorMessage}</span>
          : null
      }
      
    </div>
  )
}

export default Input