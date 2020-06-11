import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Contact } from './components/Contact';
import { Grid } from './components/Grid';
import { Menu } from './components/Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Menu />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/contact" component={Contact} exact></Route>
          <Route path="/profile" component={Profile} exact></Route>
          <Route path="/grid" component={Grid} exact></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
