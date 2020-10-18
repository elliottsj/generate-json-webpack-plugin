const del = require('del');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const config = require('../webpack.config');

describe('example', () => {
  it('creates a file my-file.json', async () => {
    await del(path.join(__dirname, '..', 'build'));
    await new Promise((resolve, reject) => {
      webpack(config, (error, stats) => {
        if (error) {
          reject(error);
        }
        fs.readFile(
          path.resolve(stats.compilation.compiler.outputPath, 'my-file.json'),
          'utf8',
          (err, data) => {
            if (err) {
              reject(err);
            }
            expect(data).toBe(
              '{\n' + '  "foo": "baz",\n' + '  "one": "two"\n' + '}'
            );
            resolve();
          }
        );
      });
    });
  });
});
