function GenerateJsonPlugin(filename, value, replacer, space) {
  Object.assign(this, { filename, value, replacer, space });

  this.plugin = { name: 'GenerateJsonPlugin' };
}

GenerateJsonPlugin.prototype.apply = function apply(compiler) {
  const emit = (compilation, callback) => {
    const json = JSON.stringify(this.value, this.replacer, this.space);

    compilation.assets[this.filename] = {
      source: () => json,
      size: () => json.length,
    };

    callback(null);
  };

  if (compiler.hooks) {
    compiler.hooks.emit.tapAsync(this.plugin, emit);
  } else {
    compiler.plugin('emit', emit);
  }
};

module.exports = GenerateJsonPlugin;
