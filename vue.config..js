function MinifyJSONPlugin(_options) { }

MinifyJSONPlugin.prototype.apply = function (compiler) {
  compiler.plugin('emit', function (compilation, callback) {
    // Create a header string for the generated file:
    // var filelist = 'In this build:\n\n';

    // Loop through all compiled assets,
    // adding a new line item for each filename.
    for (var filename in compilation.assets) {
      if (filename.endsWith('.json')) {
        try {

          const old = compilation.assets[filename];
          const jsonpars = JSON.stringify(JSON.parse(old.source()));
          compilation.assets[filename] = {
            _json: jsonpars,
            source: function () {
              return this._json;
            },
            size: function () {
              return this._json.length;
            }
          };
        } catch (error) {
          console.log("JSON ERRROR FOR CUSTOM PLUGIN", error);
        }
        // filelist += ('- '+ filename + ' from ' +old.size() + 'bytes to ' + compilation.assets[filename].size()  +'bytes\n');
      }

    }

    // Insert this list into the Webpack build as a new file asset:
    // compilation.assets['filelist.md'] = {
    //   source: function() {
    //     return filelist;
    //   },
    //   size: function() {
    //     return filelist.length;
    //   }
    // };

    callback();
  });
};

process.env.VUE_APP_VERSION = "v0.2.0";
const versionJson = require('./public/api/version.json');
process.env.VUE_APP_DDRAGON_VERSION = versionJson.v;
process.env.VUE_APP_LOL_PATCH_VERSION = versionJson.dv;
process.env.VUE_APP_LANG = versionJson.l;
process.env.VUE_APP_DDRAGON_CDN = versionJson.cdn;


module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    plugins: [
      new MinifyJSONPlugin()
    ]
  }
}