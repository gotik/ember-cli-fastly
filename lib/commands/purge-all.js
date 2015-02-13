var Command = require('ember-cli/lib/models/command');
var Task = require('../tasks/purge-all');
var path = require('path');

module.exports = Command.extend({
  name: 'fastly:purge-all',

  description: 'Purges everything from Fastly',

  availableOptions: [
    {
      name: 'environment',
      type: String,
      default: 'development'
    }
  ],

  init: function() {
    this.task = new Task();
    this.configHelper = new ConfigHelper({
      root: this.project.root
    });
  },

  /**
   * @param {Object} options
   * @param {String} options.environment
   * @return {Promise}
   */
  run: function(options) {
    var config = this.configHelper.get(options.environment);
    var ui = this.ui;

    return this.task.run({
      accessKey: config.accessKey,
      productId: config.productId
    }).then(function() {
      ui.write('Cache purged successfully');
    }, function(error, response) {
      ui.write('Purge failed: ' + error);
    });
  }
});
