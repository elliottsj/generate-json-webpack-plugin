const path = require('path');
const GenerateJsonPlugin = require('..');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    pathinfo: true,
  },
  plugins: [
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
    ),
  ],
};
