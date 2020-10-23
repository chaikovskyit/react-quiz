import React, {Component} from 'react'
import classes from './Auth.module.css'
import Button from  '../components/UI/Button/Button'
import Input from '../components/UI/Input/Input'

// компонент який відповідає за авторизацію

class Auth extends Component {

  state = {
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Введіть коректний email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: 'Введіть коректний пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }

      }
    }
  }

  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = (event) => {
    event.preventDefault()
  }

  onChangeHandler = (event, controlName) => {
    console.log(`${controlName}: `, event.target.value);
  }

  renderInputs () {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        >
        
        </Input>
      )
    })
  }

  render(){
    return(
      // Дів для центрування контенту
      <div className={classes.Auth}>
        <div>
          <h1>Авторизація</h1>
          {/* Форма для залогінення і сьворення акаунтів */}
          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            {this.renderInputs()}
            <Button 
              type="success"
              // Функція логінізації яка викликатиметься при кліку на кнопку
              onClick={this.loginHandler}
            >
              Вхід
            </Button>
            <Button 
              type="primary"
              // Функція яка реєстрації викликатиметься при кліку на кнопку
              onClick={this.registerHandler}
            >
              Зареєструватись
            </Button>
            
          </form>
        </div>
      </div>
    )
  }
}

export default Auth
