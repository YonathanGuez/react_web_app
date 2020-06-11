import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/profile" component={Profile} exact></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
