var ConfigHelper = require('../../../lib/helpers/config');

var chai = require('chai');
var expect = chai.expect;

describe('config helper (smoke test)', function() {
  it('exists', function() {
    var helper = new ConfigHelper();
    expect(helper).to.be.an('object');
  });
});

describe('config helper', function() {
  var helper;

  beforeEach(function() {
    helper = new ConfigHelper({
      getPath: function(env) {
        return __dirname + '/' + env;
      }
    });
  });

  it('returns the config for the given env', function() {
    var actualConfig = helper.getConfig('foo-env');
    var emptyConfig = helper.getConfig('env-doesnt-exist');
    var expected = {
      accessKey: 'le_access_key',
      productId: 'le_product_id'
    };
    expect(emptyConfig).to.deep.equal({});
    expect(actualConfig).to.deep.equal(expected);
  });
});
