'use strict';
var util = require('util');
var path = require('path');
var open = require('open');
var chalk = require('chalk');
var yeoman = require('yeoman-generator');


var MeteorGenerator = module.exports = function MeteorGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    console.log('\n' + chalk.cyan.bold('All set!') + ' Run ' + chalk.yellow.bold('mrt install && meteor') + ' to start your app.');
    // mrt install && meteor
    // open('http://localhost:3000/');
  });

  this.hookFor('meteor:view', {
    args: ['index']
  });
};

util.inherits(MeteorGenerator, yeoman.generators.Base);

MeteorGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
      name: 'projectName',
      message: 'What should we call this project?'
    },
    {
      name: 'projectSummary',
      message: 'Describe this project briefly'
    },
    {
      type: 'list',
      name: 'cssPreprocessor',
      message: 'Choose a CSS Preprocessor',
      choices: ['stylus', 'less', 'bootstrap', 'none']
    }
  ];

  this.prompt(prompts, function (props) {
    this.projectName = props.projectName;
    this.projectSummary = props.projectSummary;
    this.cssPreprocessor = props.cssPreprocessor;

    cb();
  }.bind(this));
};

MeteorGenerator.prototype.meteor = function app() {
  this.mkdir('.meteor');
  this.copy('meteor/gitignore', '.meteor/.gitignore');
  this.template('meteor/_packages', '.meteor/packages');
  this.copy('meteor/release', '.meteor/release');
};

MeteorGenerator.prototype.lib = function app() {
  this.mkdir('lib');
  this.mkdir('lib/collections');
};

MeteorGenerator.prototype.client = function app() {
  this.mkdir('client');
  this.mkdir('client/vendor');
  this.mkdir('client/views');
  this.mkdir('client/views/layout');
  this.copy('client/main.coffee', 'client/main.coffee');
  this.copy('client/router.coffee', 'client/router.coffee');
  this.copy('client/views/layout/layout.html', 'client/views/layout/layout.html');
};

MeteorGenerator.prototype.server = function app() {
  this.mkdir('server');
  this.copy('server/main.coffee', 'server/main.coffee');
  this.copy('server/methods.coffee', 'server/methods.coffee');
  this.mkdir('server/publications');
};

MeteorGenerator.prototype.app = function app() {
  this.mkdir('public');
  this.mkdir('packages');
  this.copy('gitignore', '.gitignore');
  this.copy('smart.json', 'smart.json');
  this.template('_README.md', 'README.md');
  this.template('_index.html', 'index.html');
};