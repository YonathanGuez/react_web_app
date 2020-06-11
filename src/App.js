import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <h2>hello</h2>
      <Button variant="primary">test</Button>
      <div className="container">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
