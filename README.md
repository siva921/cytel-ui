# cytel-ui

cytel-ui

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

To check linting issue:

```sh
npm run lint
```

## Running

Open the file `dist/index.html` in your browser

### Still figureing out how to setup!!

![Test Image 4](./src/assets/images/es6-webpack-react-babel.png)

The minimal React, Webpack, Babel Setup. You want to get beyond create-react-app?

## Features
* React 16
* Webpack 4
* Babel 7
* Hot Module Replacement

`babel-core` Provides basic core babel configuration
`babel-preset-env` In order to work with latest ES6/ES7/ES8 features
`babel-preset-react` It allows to work with react syntax which is JSX
`babel-loader` Consider this as a bridge of communication between Webpack and Babel
`regenerator-runtime` in order to get async/await and ES6 ES7 working
`core-js` pollyfills for IE11 to get Promise working
`react` the main engine of the React.js
`react-dom` obviously, we are going to create app for browser
`webpack` The main webpack plugin as an engine for its dependents.
`webpack-cli` To access some webpack commands through CLI like starting dev server, creating developement and production build, etc.
`webpack-dev-server` A minimal server for client-side development purpose only.
`html-webpack-plugin` Will help in creating HTML templates for our application.

>Trust me you don’t need to memorize all those plugins, just go through it once and understand what they does.

#### Install Babel packages as dev dependency
`npm i --save-dev babel-core babel-loader babel-preset-env babel-preset-react`

#### Install Webpack packages as dev dependencies
`npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin`

#### Install main packages
`npm i --save react react-dom`

#### `Configuring Babel`
Create a file `.babelrc` in main folder. This is the configuration file babel looks up for and those presets should be mentioned here for Babel to know.

```sh
{"presets":["env", "react"]}
```

### `Folder structure`
```
rootFolder
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── dist
└── src
    ├── index.html
    ├── index.js
    └── webpack.config.js
```
#### Lets configuring Webpack
Considering you are in root directory, create a file `webpack.config.js` 

 ```sh
 const path = require(‘path’);
 const HtmlWebpackPlugin = require(‘html-webpack-plugin’);
 module.exports = {
    entry: path.join(__dirname, ‘/src/index.js’),
    output: {
        filename: ‘build.js’,
        path: path.join(__dirname, ‘/dist’)},
    module:{
        rules:[{
           test: /\.js$/,
           exclude: /node_modules/,
           loader: ‘babel-loader’
        }]
    },
    plugins:[
        new HtmlWebpackPlugin(
           {template: path.join(__dirname,‘/src/index.html’)}
        )
    ]
 }
```
- In this case index.js resides inside `rootFolder/src` directory, so create src directory inside app and create a new file `index.js`.
- We have defined — in production what should be the name of the main file `build.js` and where will it be placed `rootFolder/dist` automatically.
- Similarly, create another file in the same directory `rootFolder/src` and name it `index.html`. This file will act as template file.
- Inside `module section` we need to define the rules webpack should be bind to.
- `plugins` — Webpack needs to know for the purpose of bundling or transpiling, you need to push the reference of the plugin within this array.

Let's start with adding content to `roortFolder/src/index.html` file.

 ```sh
### Let's start with adding content to `roortFolder/src/index.html` file.
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta content="ie=11" http-equiv="x-ua-compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>react-redux-webpack-saga</title>
  </head>
  <body>
    <div id="app">
    </div>
  </body>
</html>
```
Important thing to notice `<div id=”root”></div>` No matter how big your app is going to be, will render inside div.

Lets add the React part of the app in the rootFolder/src/index.js.

 ```sh
 import React from ‘react’;
 import ReactDOM from ‘react-dom’;
 const App = () => (
   <div>
      <h1>Hello world!!</h1>
   </div>
 )
 ReactDOM.render(<App/>, document.getElementById(‘root’));
 ```
We are good to go! Now all we have to do is fire up the `webpack-dev-server` to see our “Hello world” For that lets open package.json and add below line in script. --hot will keep watching your changes and --open trigger browser.

`"start": "webpack-dev-server --hot  --open --mode development"` 

Development Build
`"build-dev": "webpack -d --mode development"`

And filnally production build
`"build-prod": "webpack -p --mode production"`