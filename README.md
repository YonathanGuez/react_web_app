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

### Create Game Tic Tac Toc (morpion) :

We will build an element Game with components/Game.js
inside we will have different class Square / Board / Game
and we will use Game.css for design our Board

into Board we call Square and into game we call Board
square > Board > Game

and we use the function calculateWinner for manage the party

### Use tailwindcss for design:

1. package

```
yarn add tailwindcss postcss-cli autoprefixer -D
```

2. initialization CSS default
   Initialize Tailwind CSS by creating the default configurations:

```
npx tailwind init tailwind.js --full
```

3. create postcss.config.js on the root

```
const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
};
```

4. into src create folder assets and tailwind.css and main.css inside:
   tailwind.css :

```
@tailwind base;

@tailwind components;

@tailwind utilities;
```

    main.css: empty

5. Package.json:

```
"scripts": {
    "start": "npm run watch:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css",
    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
  },

```

6. into App.js replace import './index.css'; by :

```
 import './assets/main.css';
```

#### different examples:
