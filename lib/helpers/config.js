var CoreObject = require('core-object');
var path = require('path');

module.exports = CoreObject.extend({
  getPath: function() {
    return path.join(this.root, 'config', 'fastly', env);
  },

  /**
   * @param {String} env
   * @return {Object}
   */
  getConfig: function(env) {
    var configPath = this.getPath(env);
    var config;

    try {
      config = require(configPath);
    } catch (e) {
      config = {};
    }

    return config;
  }
});
