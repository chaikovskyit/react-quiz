import React, {Component} from 'react'
import classes from './Auth.module.css'
import Button from  '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import is from 'is_js'
import {connect} from 'react-redux'
import {auth} from '../../store/actions/auth'
// компонент який відповідає за авторизацію

class Auth extends Component {
  state = { 
    // параметр для загальної валідації форми, його треба змінювати тоді коли ми щось вписуємо в input, параметр буде відповідати за активність кнопок, тобто доки поля будуть не заповнені кнопки будуть не активними
    isFormValid: false,
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
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      true
    ) 
  }
  registerHandler = () => {
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      false
    )
  }
  submitHandler = (event) => {
    event.preventDefault()
  }
  // Передаємо value, і набір параметрів validation
  validateControl(value, validation) {
    // якщо ми у функцію не передали набору параметрів, значить нічого не треба валідувати
    if(!validation) {
      return true
    }
    // А якщо перевірка не пройшла і ми оприділили змінну  validation то створюєм змінну isValid яка по замовчуванні буде дорівнювати true, після перевірок ми її повернемо
    let isValid = true
    // Тепер на основі обєкта конфігурації validation ми будемо змінювати локальну змінну isValid

    // Валідуємо на пустоту поля
    if(validation.required) {
      // для того щоб перевірити що знаходиться в полі вводу, ми звертаємось до value, також ми знаємо що це стрінг тому ми можемо скористуватись методом trim(який почистить зайві пробіли і якщо це все не дорівнює пустій стрінзі то isValid === true) 
      isValid = value.trim() !== '' && isValid
    }
    // Валідуємо на емейл
    if(validation.email) {
      isValid = is.email(value) && isValid
    }

    // Валідуємо на довжину паролю
    // Якщо value.length більше або рівне заданомумінімальному  значенні довжини  в стейті то isValid === true 
    if(validation.minLength) {
        isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }

  onChangeHandler = (event, controlName) => {
    console.log(`${controlName}: `, event.target.value);
    // Копія нашого стейту, тепер її можна змінювати і не переживати 
    const formControls = {...this.state.formControls}
    // Копія контролу, 
    const control = {...formControls[controlName]}

    // В змінну контрол переоприділяємо всі значення control це або password або email
    // Міняємо значення value
    control.value = event.target.value
    // перевіряємо валідність нашого input
    // як тільки ми попали в зміну даного input це означає що користувач вже щось ввів
    control.touched = true
    // Перевіряємо чи валідний наш control(тобто чи правильно заповнене поле password або email) control.value це вже змінене значення, а control.validation це обєкт в якому є умови валідності
    control.valid = this.validateControl(control.value, control.validation)
    // тепер у змінній control  у нас лежать нові значення і нам треба обновити локальну копію formControls по імені controlName(controlName відповідає за назву control це або email або password) control в свою чергу це вже конкретний інпут або email або password
    formControls[controlName] = control

    // по замовчуванні true стан валідності форми
    let isFormValid = true
    // тепер ми маємо пробігтись по усіх обєктах обєкта formControls і запитати у кожного чи він валідний
    Object.keys(formControls).forEach((name) => {
      isFormValid = formControls[name].valid && isFormValid
    })

    // після проведених маніпуляцій нам потрібно змінити state
    this.setState({
      formControls: formControls,
      isFormValid: isFormValid
    })

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
              disabled={!this.state.isFormValid}
            >
              Вхід
            </Button>
            <Button 
              type="primary"
              // Функція яка реєстрації викликатиметься при кліку на кнопку
              onClick={this.registerHandler}
              disabled={!this.state.isFormValid}
            >
              Зареєструватись
            </Button>
            
          </form>
        </div>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch) {
  return {
    auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))

  }
}

export default connect(null, mapDispatchToProps)(Auth)
