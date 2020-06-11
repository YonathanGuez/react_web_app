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
