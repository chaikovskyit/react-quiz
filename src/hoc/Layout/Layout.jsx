import React, { Component } from 'react'
import classes from './Layout.module.css'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../../components/Navigation/Drawer/Drawer'
import { connect } from 'react-redux'



class Layout extends Component {
  // стейт який відповідає за наше меню, по замовчуванні ми його не показуємо 
  state = {
    menu: false,
  }

  //Функція яка змінює стейт тобто відкриває меню(викликається в компоненті MenuToggle)
  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  
  menuCloseHandler = () => {
    this.setState({
      menu: false
    })
  }

  render() {
    return(
      // Це корріний <div/> проекту
      <div className={classes.Layout}>
        <Drawer 
          isOpen={this.state.menu}
          // передаємо параметр який буде закривати наше меню
          onClose={this.menuCloseHandler}
          isAuthenticated={this.props.isAuthenticated}
        />
        <MenuToggle 
          // викликаємо меню
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <main>
          {/* Тут буде весь контент */}
          {this.props.children}
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

export default connect(mapStateToProps)(Layout)