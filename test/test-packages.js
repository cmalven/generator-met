/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;

describe('met generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'tmp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('met:app',
              ['../../app',
              '../../view',
              '../../collection']
            );
            
            done();
        }.bind(this));
    });
    
    it('creates app without security', function (done) {
      helpers.mockPrompt(this.app, {
        'security': false
      });
      this.app.run({}, function () {
        helpers.assertNoFileContent('.meteor/packages', /\nongoworks:security\n/);
        done();
      });
    });

    it('creates app with security', function (done) {
      helpers.mockPrompt(this.app, {
        'security': true
      });
      this.app.run({}, function () {
        helpers.assertFileContent('.meteor/packages', /\nongoworks:security\n/);
        done();
      });
    });
});
