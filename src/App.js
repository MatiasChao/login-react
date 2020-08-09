import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from '../src/components/auth/Login'
import Home from './components/Home'
import User from './components/User'
import Public from './components/Public'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/home" component={ Home } />
          <Route exact path="/user" component={ User } />
          <Route exact path="/public" component={ Public } />
      </Switch>
    </Router>
  );
}

export default App;
