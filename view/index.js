'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);
  
  console.log('Creating a new ' + this.name + ' view.');
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.files = function files() {
  var subpath = '';
  
  if (this.config.get('viewHierarchy') == 'nested') {
    this.mkdir('client/views/' + this.name);
    subpath = this.name + '/';
  }
  
  this.template('_index.html', 'client/views/' + subpath + this.name + '.html');
  this.template('_index.coffee', 'client/views/' + subpath + this.name + '.coffee');
};
