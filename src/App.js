import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={Login}></Route>
        <Route path='/' component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
