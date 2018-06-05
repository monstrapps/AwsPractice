import React, { PureComponent } from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import WorkoutBuilderContainer from './Components/WorkoutBuilder/WorkoutBuilderContainer';

class App extends PureComponent {
  render() {
    return (
      <Switch>
        <Layout>
          <Route path='/' exact component={Home} />
          <Route path='/builder' component={WorkoutBuilderContainer} />
        </Layout>
      </Switch>
    );
  }
}

export default App;
