# react_web_app

Learn react for website

## Config Vscode

user Settings:

```
{
  "workbench.startupEditor": "newUntitledFile",
  "workbench.settings.editor": "json",
  "editor.formatOnSave": true,
  "eslint.packageManager": "yarn",
  "editor.suggestSelection": "first",
  "css.validate": false,
  "workbench.settings.useSplitJSON": true,
  "editor.rulers": [80],
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.tabSize": 2,
  "files.insertFinalNewline": true,
  "editor.snippetSuggestions": "top",
  "editor.minimap.enabled": false,
  "editor.fontLigatures": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.alwaysShowStatus": true,
  "npm.packageManager": "yarn",
  "terminal.integrated.rendererType": "dom",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "files.associations": {
    ".npmrc": "txt",
    ".*rc": "json"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "workbench.panel.defaultLocation": "right",
  "explorer.confirmDelete": false,
  "prettier.singleQuote": true
}

```

## How to use react :

### Creation Project:

```
npx create-react-app apptest
cd apptest
yarn start
```

### Add bootstrap and use Button:

index.js :

```
import 'bootstrap/dist/css/bootstrap.css';
```

ex : src/App.js:

```
import Button from 'react-bootstrap/Button';
<Button variant="primary">test</Button>
```

### Add component:

create folder components links src/components/:
create in components file Home.js:

```
import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <div className="mt-5 d-flex justify-content-left">
        <h3>dataaaaaaa</h3>
      </div>
    );
  }
}

```

use this component Home :

1. go to src/App.js:
   import Home

```
import { Home } from './components/Home';
```

2. add my new component:

```
<Home></Home>
```

### Build Routing :

1. install:

```
yarn add react-router-dom
```

2. build 2 components : Home / Profile

3. App.js:

```
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

```

4. Result 2 pages:

```
http://localhost:3000/
http://localhost:3000/profile
```

### Create Menu :

1. create Menu navigation into components :

```
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export class Menu extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/">
              Home
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/profile">
              Profile
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/contact">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

```

2. call into App.js:

```
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Contact } from './components/Contact';
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
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
```

### Create Tableau :

```
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [] };
  }

  componentDidMount() {
    this.refreshList();
  }
  refreshList() {
    this.setState({
      deps: [
        { test1: 1, test2: 'salut' },
        { test1: 2, test2: 'Hello' },
      ],
    });
  }

  render() {
    const { deps } = this.state;
    return (
      <Table className="mt-4" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>test1</th>
            <th>test2</th>
          </tr>
        </thead>
        <tbody>
          {deps.map((dep) => (
            <tr key={dep.test1}>
              <td>{dep.test1}</td>
              <td>{dep.test2}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

```
