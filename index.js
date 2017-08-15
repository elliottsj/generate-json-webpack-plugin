function GenerateJsonPlugin(filename, value, replacer, space) {
  Object.assign(this, { filename, value, replacer, space });

  this.previousJson = null;
}

GenerateJsonPlugin.prototype.apply = function apply(compiler) {
  compiler.plugin('emit', (compilation, done) => {
    const json = JSON.stringify(this.value, this.replacer, this.space);

    // For faster performance on watch mode
    if (this.previousJson === json) {
      done();
      return;
    }

    compilation.assets[this.filename] = {
      source: () => json,
      size: () => json.length,
    };

    this.previousJson = json;
    done();
  });
};

module.exports = GenerateJsonPlugin;
