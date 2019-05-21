function MinifyJSONPlugin(_options) {}

MinifyJSONPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    // Create a header string for the generated file:
    // var filelist = 'In this build:\n\n';

    // Loop through all compiled assets,
    // adding a new line item for each filename.
    for (var filename in compilation.assets) {
      if(filename.endsWith('.json')) {
        const old = compilation.assets[filename];
        compilation.assets[filename] = {
          _json: JSON.stringify(JSON.parse(old.source())),
          source: function() {
            return this._json;
          },
          size: function() {
            return this._json.length;
          }
        };
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

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    plugins: [
      new MinifyJSONPlugin()
    ]
  }
}