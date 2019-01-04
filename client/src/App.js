import React from 'react';
import './App.css';
import Home from './pages/home/home'
import Login from './pages/login/login'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

class App extends React.Component{
  render() {
      return (
          <BrowserRouter>
             <Switch>
                 <Route path='/login' component={Login}></Route>
                 <Route path='/home' component={Home}></Route>
                 <Redirect to='/login'></Redirect>
             </Switch>
          </BrowserRouter>
    )
  }
}

export default App;
