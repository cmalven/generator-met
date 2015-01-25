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
    
    it('creates app with Twitter Bootstrap', function (done) {
      helpers.mockPrompt(this.app, {
        'cssPreprocessor': 'bootstrap'
      });
      this.app.run({}, function () {
        helpers.assertFileContent('.meteor/packages', /\nbootstrap\n/);
        done();
      });
    });
    
    it('creates app with LESS version of Twitter Bootstrap', function (done) {
      helpers.mockPrompt(this.app, {
        'cssPreprocessor': 'nemo64:bootstrap'
      });
      this.app.run({}, function () {
        helpers.assertFileContent('.meteor/packages', /\nless\nnemo64:bootstrap\n/);
        done();
      });
    });
});
