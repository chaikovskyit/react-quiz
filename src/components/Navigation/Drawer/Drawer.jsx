import React, {Component} from 'react'
import classes from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import {NavLink} from 'react-router-dom'


class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose()
  }
  renderLinks(links) {
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

    const links = [
      {to: '/', label: 'Список', exact: true},
      
    ]
    if (this.props.isAuthenticated) {
      links.push({to: '/quiz-creator', label: 'Створити тест', exact: false})
      links.push({to: '/logout', label: 'Вийти', exact: false})
    } else {
      links.push({to: '/auth', label: 'Авторизація', exact: false})
    }

    return (
      <React.Fragment>
        {/* Тут знаходяться усі наші навігаційні ссилки */}
        <nav className={cls.join(' ')}>
          <ul>
            {/* метод який буде виводити наші лінки */}
            {this.renderLinks(links)}
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