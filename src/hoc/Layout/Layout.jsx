import React, {Component} from 'react'
import classes from './Layout.module.css'
import Quiz from '../../containers/Quiz/Quiz'

class Layout extends Component {
  render() {
    return(
      // Це корріний дів проекту
      <div className={classes.Layout}>
        <main>
          {/* Тут буде весь контент */}
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout