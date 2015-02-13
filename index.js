'use strict';

var commands = require('./lib/commands');

module.exports = {
  name: 'ember-cli-fastly',

  includedCommands: function() {
    return commands;
  }
};
