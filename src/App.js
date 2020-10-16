import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout'

class App extends Component {
  render() {
    return (
      <Layout>
      {/* Тут буде складено увесь наш роутинг */}


        <div style={{width: 400, border: '1px solid black'}}>
          <h1>Layout</h1>
        </div>
      </Layout>
    )
  }
}

export default App;
