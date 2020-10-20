import React, {Component} from 'react'
import classes from './Layout.module.css'
import MenuToggle from '../../containers/components/Navigation/MenuToggle/MenuToggle'


class Layout extends Component {

  state = {
    menu: false,
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  render() {
    return(
      // Це корріний <div/> проекту
      <div className={classes.Layout}>
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