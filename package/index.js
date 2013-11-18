'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var PackageGenerator = module.exports = function PackageGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('Creating a new package ' + this.name + '.');
};

util.inherits(PackageGenerator, yeoman.generators.NamedBase);

PackageGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [
    {
      name: 'packageSummary',
      message: 'Describe this package briefly'
    },
    {
      type: 'checkbox',
      name: 'packageDeps',
      message: 'Which Meteor packages does this depend on? (spacebar to check/uncheck)',
      choices: [
        {
          name: 'jquery',
          checked: true
        },
        {
          name: 'coffeescript',
          checked: true
        },
        {
          name: 'templating',
          checked: true
        },
        {
          name: 'minimongo',
          checked: true
        },
        {
          name: 'mongo-livedata',
          checked: true
        }
      ]
    }
  ];

  this.prompt(prompts, function (props) {
    this.packageSummary = props.packageSummary;
    this.packageDeps = props.packageDeps;

    cb();
  }.bind(this));
};

PackageGenerator.prototype.files = function files() {
  var packagePath = 'packages/';
  var thisPath = packagePath + this.name + '/';
  this.mkdir(thisPath);
  this.copy('gitignore', thisPath + '.gitignore');
  this.template('_package.js', thisPath + 'package.js');
};
