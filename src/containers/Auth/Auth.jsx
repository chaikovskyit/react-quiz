import React, {Component} from 'react'
import classes from './Auth.module.css'
import Button from  '../components/UI/Button/Button'
import Input from '../components/UI/Input/Input'

// компонент який відповідає за авторизацію

class Auth extends Component {

  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = (event) => {
    event.preventDefault()
  }

  render(){
    return(
      // Дів для центрування контенту
      <div className={classes.Auth}>
        <div>
          <h1>Авторизація</h1>
          {/* Форма для залогінення і сьворення акаунтів */}
          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            <Input 
              label="Email"
            />

            <Input 
              label="Password"
              errorMessage={'test'}
            />
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
