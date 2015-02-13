var PurgeAllCommand = require('../../../lib/commands/purge-all');

var chai = require('chai');
var expect = chai.expect;

describe('fastly:purge-all command (smoke test)', function() {
  it('exists', function() {
    var command = new PurgeAllCommand({
      project: { isEmberCLIProject: function() {} }
    });
    expect(command).to.be.an('object');
  });
});
