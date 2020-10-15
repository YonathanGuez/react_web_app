import React from 'react';
import './App.css';
import './components/Game.css';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Contact } from './components/Contact';
import { Menu } from './components/Menu';
import { Game } from './components/Game';
import { TestTailwindcss } from './components/TestTailwindcss';
import { AddList } from './components/AddList';
import { Form } from './components/todo';
import { Fabric } from './components/Fabric';
import { KonvaJS } from './components/Konva';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { colorPiking } from './components/color';
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Menu />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/contact" component={Contact} exact></Route>
          <Route path="/profile" component={Profile} exact></Route>
          <Route path="/game" component={Game} exact></Route>
          <Route
            path="/testtailwindcss"
            component={TestTailwindcss}
            exact
          ></Route>
          <Route path="/addlist" component={AddList} exact></Route>
          <Route path="/fabricjs" component={Fabric} exact></Route>
          <Route path="/konva" component={KonvaJS} exact></Route>
          <Route path="/color" component={colorPiking} exact></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
