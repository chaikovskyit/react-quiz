import React, {Component} from 'react'
import classes from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

// тимчасові лінки для виводу в nav
const links = [
  1, 2, 3
]

class Drawer extends Component {
  // Проходимось методом map() по нашому масиву links, і видаємо новий масив <li/>, з елементом масиву links, та індексом
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a>link {link}</a> 
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