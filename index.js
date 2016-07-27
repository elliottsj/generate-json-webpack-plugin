function GenerateJsonPlugin(filename, value, replacer, space) {
  Object.assign(this, { filename, value, replacer, space });
}

GenerateJsonPlugin.prototype.apply = function apply(compiler) {
  compiler.plugin('emit', (compilation, done) => {
    const json = JSON.stringify(this.value, this.replacer, this.space);
    compilation.assets[this.filename] = { // eslint-disable-line no-param-reassign
      source: () => json,
      size: () => json.length,
    };
    done();
  });
};

module.exports = GenerateJsonPlugin;
