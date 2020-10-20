import React, {Component} from 'react'
import classes from './Layout.module.css'
import MenuToggle from '../../containers/components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../../containers/components/Navigation/Drawer/Drawer'



class Layout extends Component {

  state = {
    menu: false,
  }

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
          onClose={this.menuCloseHandler}
        />
        <MenuToggle 
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

export default Layout