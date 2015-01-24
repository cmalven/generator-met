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
  if (this.flatHierarchyViews == false) {
    this.mkdir('client/views/' + this.name);
    this.template('_index.html', 'client/views/' + this.name + '/' + this.name + '.html');
    this.template('_index.coffee', 'client/views/' + this.name + '/' + this.name + '.coffee');
  } else {
    this.template('_index.html', 'client/views/' + this.name + '.html');
    this.template('_index.coffee', 'client/views/' + this.name + '.coffee');
  }
};
