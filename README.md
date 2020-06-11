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
[example creation components](https://github.com/YonathanGuez/react_web_app/tree/components)


### Build Routing :

[example creation Route](https://github.com/YonathanGuez/react_web_app/tree/router)

### Create Menu :

[example creation Menu ](https://github.com/YonathanGuez/react_web_app/tree/menu)

### Create Tableau :
[example creation Menu ](https://github.com/YonathanGuez/react_web_app/tree/grid)
