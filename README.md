# generate-json-webpack-plugin
[![npm version](https://img.shields.io/npm/v/generate-json-webpack-plugin.svg)](https://www.npmjs.com/package/generate-json-webpack-plugin)
[![Build Status](https://travis-ci.org/elliottsj/generate-json-webpack-plugin.svg?branch=master)](https://travis-ci.org/elliottsj/generate-json-webpack-plugin)

Webpack plugin to generate a custom JSON asset

### Installation

```shell
npm install generate-json-webpack-plugin
```

### Usage

```js
// webpack.config.js
const GenerateJsonPlugin = require('generate-json-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    // ...
    new GenerateJsonPlugin('my-file.json', {
      foo: 'bar'
    })
  ]
  // ...
};
```

This will create a file `my-file.json` in webpack's output directory, with contents:
```json
{"foo":"bar"}
```
