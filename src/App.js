import React, { PureComponent } from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'

class App extends PureComponent {
  render() {
    return (
      <Switch>
        <Layout>
          <Route path='/' component={Home} />
        </Layout>
      </Switch>
    );
  }
}

export default App;
