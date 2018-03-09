function GenerateJsonPlugin(filename, value, replacer, space) {
  Object.assign(this, { filename, value, replacer, space });

  this.plugin = { name: 'GenerateJsonPlugin' };

  this.previousJson = null;
}

GenerateJsonPlugin.prototype.apply = function apply(compiler) {
  const emit = (compilation, callback) => {
    const json = JSON.stringify(this.value, this.replacer, this.space);

    if (this.previousJson === json) {
      return callback(null);
    }

    compilation.assets[this.filename] = {
      source: () => json,
      size: () => json.length,
    };

    this.previousJson = json;

    callback(null);
  };

  if (compiler.hooks) {
    compiler.hooks.emit.tapAsync(this.plugin, emit);
  } else {
    compiler.plugin('emit', emit);
  }
};

module.exports = GenerateJsonPlugin;
