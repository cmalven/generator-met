'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var CollectionGenerator = module.exports = function CollectionGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('Creating a collection ' + this.name + '.');
};

util.inherits(CollectionGenerator, yeoman.generators.NamedBase);

CollectionGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [

  ];

  this.prompt(prompts, function (props) {

    cb();
  }.bind(this));
};

CollectionGenerator.prototype.files = function files() {
  var collectionsPath = 'lib/collections/';
  var publicationsPath = 'server/publications/';
  this.template('_collection.coffee', collectionsPath + this.name + '.coffee');
  this.template('_publication.coffee', publicationsPath + this.name + '.coffee');
};
