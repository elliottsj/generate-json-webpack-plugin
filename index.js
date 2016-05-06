function GenerateJsonPlugin(filename, obj) {
  this.filename = filename;
  this.obj = obj;
}

GenerateJsonPlugin.prototype.apply = function apply(compiler) {
  compiler.plugin('emit', (compilation, done) => {
    const json = JSON.stringify(this.obj);
    compilation.assets[this.filename] = { // eslint-disable-line no-param-reassign
      source: () => json,
      size: () => json.length,
    };
    done();
  });
};

module.exports = GenerateJsonPlugin;
