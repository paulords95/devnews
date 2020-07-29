import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './appStyle.css'

import Menu from './components/Menu'
import HomeScreen from './pages/HomeScreen'
import Category from './pages/Category'

export default () => {

  return (
    <BrowserRouter>

      <Menu />

      <div className="container">

        <Switch>

          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/category/:type">
            <Category />
          </Route>

        </Switch>

      </div>

    </BrowserRouter>
  );
}

