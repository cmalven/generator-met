'use strict';

var util = require('util');
var path = require('path');
var open = require('open');
var chalk = require('chalk');
var yeoman = require('yeoman-generator');

var MetGenerator = module.exports = function MetGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
  
  this.on('end', function () {
    console.log('\n' + chalk.cyan.bold('All set!') + ' Run ' + chalk.yellow.bold('meteor') + ' to start your app.');
    // meteor
    // open('http://localhost:3000/');
  });

  this.hookFor('met:view', {
    args: ['index']
  });
};

util.inherits(MetGenerator, yeoman.generators.Base);

MetGenerator.prototype.askFor = function askFor() {
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
      name: 'viewHierarchy',
      message: 'How would you like your views to be organized?',
      choices: [
        { name: 'Nested: Each pair of .html and .coffee template files gets its own directory', value: 'nested' },
        { name: 'Flat: All .html and .coffee template files share the same directory', value: 'flat' }
      ],
      default: 'nested'
    },
    {
      type: 'list',
      name: 'cssPreprocessor',
      message: 'Choose a CSS Preprocessor',
      choices: ['stylus', 'less', 'bootstrap', 'none']
    },
  ];

  this.prompt(prompts, function (props) {
    this.projectName = props.projectName;
    this.projectSummary = props.projectSummary;
    this.viewHierarchy = props.viewHierarchy;
    this.cssPreprocessor = props.cssPreprocessor;
    
    this.config.set('viewHierarchy', this.viewHierarchy);
    this.config.save();

    cb();
  }.bind(this));
};

MetGenerator.prototype.meteor = function app() {
  this.mkdir('.meteor');
  this.copy('meteor/gitignore', '.meteor/.gitignore');
  this.template('meteor/_packages', '.meteor/packages');
  this.copy('meteor/release', '.meteor/release');
};

MetGenerator.prototype.lib = function app() {
  this.mkdir('lib');
  this.mkdir('lib/collections');
};

MetGenerator.prototype.client = function app() {
  this.mkdir('client');
  this.mkdir('client/vendor');
  this.mkdir('client/views');
  if (this.viewHierarchy == 'nested') {
    this.mkdir('client/views/layout');
    this.mkdir('client/views/loading');
  }
  this.copy('client/main.coffee', 'client/main.coffee');
  this.copy('client/router.coffee', 'client/router.coffee');
  if (this.viewHierarchy == 'nested') {
    this.copy('client/views/layout/layout.html', 'client/views/layout/layout.html');
    this.copy('client/views/loading/loading.html', 'client/views/loading/loading.html');
  } else {
    this.copy('client/views/layout/layout.html', 'client/views/layout.html');
    this.copy('client/views/loading/loading.html', 'client/views/loading.html');
  }
};

MetGenerator.prototype.server = function app() {
  this.mkdir('server');
  this.copy('server/main.coffee', 'server/main.coffee');
  this.copy('server/methods.coffee', 'server/methods.coffee');
  this.mkdir('server/publications');
};

MetGenerator.prototype.app = function app() {
  this.mkdir('public');
  this.mkdir('packages');
  this.copy('gitignore', '.gitignore');
  this.template('_README.md', 'README.md');
  this.template('_index.html', 'index.html');
};