function GenerateJsonPlugin(filename, value, replacer, space) {
  Object.assign(this, { filename, value, replacer, space });
}

GenerateJsonPlugin.prototype.apply = function apply(compiler) {
  compiler.plugin('emit', (compilation, done) => {
    const value = typeof this.value === 'string' ? require(this.value) : this.value; // eslint-disable-line global-require
    const json = JSON.stringify(value, this.replacer, this.space);
    compilation.assets[this.filename] = { // eslint-disable-line no-param-reassign
      source: () => json,
      size: () => json.length,
    };
    done();
  });
};

module.exports = GenerateJsonPlugin;
