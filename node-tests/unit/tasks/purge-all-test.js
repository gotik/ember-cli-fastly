var PurgeAllTask = require('../../../lib/tasks/purge-all');

var chai = require('chai');
var expect = chai.expect;

describe('fastly:purge-all task (smoke test)', function() {
  it('exists', function() {
    var task = new PurgeAllTask({
      project: { isEmberCLIProject: function() {} }
    });
    expect(task).to.be.an('object');
  });
});

describe('fastly:purge-all task', function() {
  var task;
  var project;

  beforeEach(function() {
    project = {
      isEmberCLIProject: function() {}
    };
    task = new PurgeAllTask({
      project: project
    });
  });

  // @see https://docs.fastly.com/api/purge
  it('builds valid Fastly request options', function() {
    var accessKey = 'foo_access_key';
    var productId = 'foo_product_id';
    var actual = task.buildRequest(accessKey, productId);

    expect(actual.method).to.equal('POST');
    expect(actual.url).to.equal('https://api.fastly.com/service/foo_product_id/purge_all');
    expect(actual.headers['Fastly-Key']).to.equal('foo_access_key');
  });
});
