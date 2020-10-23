import React, {Component} from 'react'
import classes from './Auth.module.css'
import Button from  '../components/UI/Button/Button'
import Input from '../components/UI/Input/Input'

// компонент який відповідає за авторизацію

class Auth extends Component {

  state = { 
    // для зручнішого маніпулювання огорнемо наші обєкти у змінну formControls 
    formControls: {
      // такий собі controlName
      email: {
        // значення по замовчуванні, тобто пусте поле
        value: '',
        // тип даних
        type: 'email',
        // лейбл з індивідуальним id
        label: 'Email',
        // Звідси починаються валідаційні параметри
        // повідомлення яке відображається в <span/> у разі не валідного заповнення поля вводу
        errorMessage: 'Введіть коректний email',
        // Стан валідності поля, по замовчуванню ні, так як значення value порожнє, але так просто залишити не вийде, бо буде помилка, для цього ми передаємо ще один параметр touched про який детальніше нижче
        valid: false,
        // відповідає за те чи відбувалось щось у полі вводу
        touched: false,
        // правила по котрих ми валідуємо компонент <Input />, в нашому випадку їх буде 2, це поле Email та Password 
        validation: {
          // відповідає за те що поле не може бути відправлене тобто submit порожнім
          required: true,
          // відповідає за те що тип правильний
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
          // відповідає за те що поле не може бути відправлене тобто submit порожнім
          required: true,
          // відповідає за те що довжина паролю не може бути коротшою за 6 символів
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

  // Функція яка рендерить компоненти <Input /> за допомогою методу map(), та передає в неї параметри
  renderInputs () {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input
          // ітератор
          key={control + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          // відповідає за зміну в полі вводу, приймає два параметри, подію і controlName який отримує з методу map() тобто це або email або password
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
