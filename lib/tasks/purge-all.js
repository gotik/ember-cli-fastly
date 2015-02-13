var Task = require('ember-cli/lib/models/task');
var Promise = require('ember-cli/lib/ext/promise');

var request = require('request');

module.exports = Task.extend({

  /**
   * @param {Object} options
   * @param {String} options.accessKey
   * @param {String} options.productId
   * @return {Promise}
   */
  run: function(options) {
    var accessKey = options.accessKey;
    var productId = options.productId;
    var requestOptions = this.buildRequest(accessKey, productId);

    return this.purgeCache(requestOptions);
  },

  /**
   * @para {Object} requestOptions
   * @return {Promise}
   */
  purgeCache: function(requestOptions) {
    return new Promise(function(resolve, reject) {
      request(requestOptions, function(error, response) {
        if (!error && response.statusCode == 200) {
          resolve();
        } else {
          reject(error, response);
        }
      });
    });
  },

  /**
   * @param {String} accessKey
   * @param {String} productId
   * @return {Object}
   * @see https://docs.fastly.com/api/purge
   */
  buildRequest: function(accessKey, productId) {
    return {
      url: 'https://api.fastly.com/service/' + productId + '/purge_all',
      method: 'POST',
      headers: {
        'Content-Accept': 'application/json',
        'Fastly-Key': accessKey
      }
    };
  }
});
