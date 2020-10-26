import React from 'react'
import classes from './Select.module.css'


const Select = (props) => {
  // випадково згенерований htmlFor
  const htmlFor = `${props.label}-${Math.random()}`


  return (
    <div className={classes.Select}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <select
        id={htmlFor}
        // значення по замовчувані
        value={props.value}
        // обробник дії
        onChange={props.onChange}
      >
        {/* В  "select" у нас має бути набір опцій які ми будемо показувати як варіант даного "select "*/}
         {props.options.map((option, index) => {
           return (
             <option
              key={option.value + index}
              value={option.value}
             >
               {option.text}
             </option>
           )
         })}
      </select>
    </div>
  )
}

export default Select