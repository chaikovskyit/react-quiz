import React, {Component} from 'react'

class Layout extends Component {
  render() {
    return(
      // Це корріний дів проекту
      <div>
        <main>
          {/* Тут буде весь контент */}
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout