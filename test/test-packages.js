/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;

describe('meteor coffee generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'tmp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('meteor-coffee:app',
              ['../../app',
              '../../view']
            );
            
            done();
        }.bind(this));
    });
    
    // test default packages
    it('creates app with stylus as CSS preprocessor', function (done) {
      helpers.mockPrompt(this.app, {
        'cssPreprocessor': 'stylus'
      });
      this.app.run({}, function () {
        helpers.assertFileContent([
          ['.meteor/packages', /\nstandard-app-packages\n/],
          ['.meteor/packages', /\ncoffeescript\n/],
          ['.meteor/packages', /\njquery\n/],
          ['.meteor/packages', /\niron:router\n/],
          ['.meteor/packages', /\nfastclick\n/],
          ['.meteor/packages', /\nunderscore\n/]
        ]);
        done();
      });
    });
    
    // test css preprocessor
    it('creates app with stylus as CSS preprocessor', function (done) {
      helpers.mockPrompt(this.app, {
        'cssPreprocessor': 'stylus'
      });
      this.app.run({}, function () {
        helpers.assertFileContent('.meteor/packages', /\nstylus\n/);
        done();
      });
    });
    
    it('creates app with LESS as CSS preprocessor', function (done) {
      helpers.mockPrompt(this.app, {
        'cssPreprocessor': 'less'
      });
      this.app.run({}, function () {
        helpers.assertFileContent('.meteor/packages', /\nless\n/);
        done();
      });
    });
    
    it('creates app Twitter Bootstrap support', function (done) {
      helpers.mockPrompt(this.app, {
        'cssPreprocessor': 'nemo64:bootstrap'
      });
      this.app.run({}, function () {
        helpers.assertFileContent('.meteor/packages', /\nless\nnemo64:bootstrap\n/);
        done();
      });
    });
    
    it('creates app with no CSS preprocessor', function (done) {
      helpers.mockPrompt(this.app, {
        'cssPreprocessor': 'none'
      });
      this.app.run({}, function () {
        helpers.assertNoFileContent([
          ['.meteor/packages', /\nstylus\n/],
          ['.meteor/packages', /\nless\n/],
          ['.meteor/packages', /\nless\nnemo64:bootstrap\n/]
        ]);
        done();
      });
    });
});
