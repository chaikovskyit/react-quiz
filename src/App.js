import React, {Component} from 'react';
import Quiz from './containers/Quiz/Quiz';
import Layout from './hoc/Layout/Layout'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Layout>
          <Quiz /> 
        </Layout>  
      </div>
    )
  }
}

export default App;
