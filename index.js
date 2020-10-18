const { Compilation } = require('webpack');

function GenerateJsonPlugin(filename, value, replacer, space) {
  Object.assign(this, { filename, value, replacer, space });

  this.plugin = { name: 'GenerateJsonPlugin' };
}

GenerateJsonPlugin.prototype.apply = function apply(compiler) {
  compiler.hooks.compilation.tap(this.plugin, (compilation) => {
    const json = JSON.stringify(this.value, this.replacer, this.space);

    compilation.hooks.processAssets.tap(
      {
        name: this.plugin.name,
        stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
      },
      (assets) => {
        assets[this.filename] = {
          source: () => json,
          size: () => json.length,
        };
      }
    );
  });
};

module.exports = GenerateJsonPlugin;
