# generate-json-webpack-plugin

[![npm version](https://img.shields.io/npm/v/generate-json-webpack-plugin.svg)](https://www.npmjs.com/package/generate-json-webpack-plugin)
[![Build Status](https://travis-ci.org/elliottsj/generate-json-webpack-plugin.svg?branch=master)](https://travis-ci.org/elliottsj/generate-json-webpack-plugin)
[![Greenkeeper badge](https://badges.greenkeeper.io/elliottsj/generate-json-webpack-plugin.svg)](https://greenkeeper.io/)

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
      foo: 'bar',
    }),
  ],
  // ...
};
```

This will create a file `my-file.json` in webpack's output directory, with contents:

```json
{ "foo": "bar" }
```

You may optionally pass 'replacer' and 'space' arguments as the 3rd and 4th arguments, which will be passed to [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) to customize the JSON output:

```js
new GenerateJsonPlugin(
  'my-file.json',
  { foo: 'bar', one: 'two' },
  (key, value) => {
    if (value === 'bar') {
      return 'baz';
    }
    return value;
  },
  2
);
```

`my-file.json` will contain:

```json
{
  "foo": "baz",
  "one": "two"
}
```
