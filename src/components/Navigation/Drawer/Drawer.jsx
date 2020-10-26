import React, {Component} from 'react'
import classes from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import {NavLink} from 'react-router-dom'

// тимчасові лінки для виводу в nav
const links = [
  {to: '/', label: 'Список', exact: true},
  {to: '/auth', label: 'Авторизація', exact: false},
  {to: '/quiz-creator', label: 'Створити тест', exact: false}
]

class Drawer extends Component {
  // Функція яка відповідає за закривання Drawer при кліку на лінк
  clickHandler = () => {
    this.props.onClose()
  }

  // Проходимось методом map() по нашому масиву links, і видаємо новий масив <li/>, з елементом масиву links, та індексом. Замість тегу <a/> використовуємо компонент <NavLink/> для того щоб при переході між посиланнями сторінка не перезавантажувалась, а просто перемальовувалась компонента яка вказана у компоненті <Route />
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink> 
        </li>
      )
    })
  }
  
  render(){
    //створюємо масив класів для стилізації
    const cls = [classes.Drawer]
    if(!this.props.isOpen){
      cls.push(classes.close)
    }

    return (
      <React.Fragment>
        {/* Тут знаходяться усі наші навігаційні ссилки */}
        <nav className={cls.join(' ')}>
          <ul>
            {/* метод який буде виводити наші лінки */}
            {this.renderLinks()}
          </ul>

        </nav>
        {/* перевірка для того щоб затемнення відбувалось тільки тоді коли меню відкрите, дропу передаємо параметр onClick для закривання меню*/}
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </React.Fragment>
    )
  }
}
// експортуємо його в Layout
export default Drawer