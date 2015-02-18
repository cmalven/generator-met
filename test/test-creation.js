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

            this.app = helpers.createGenerator('met:app',
              ['../../app',
              '../../view']
            );
            
            this.view = helpers.createGenerator('mete:view',
              ['../../view'],
              ['testview']
            );
            
            done();
        }.bind(this));
    });

    it('creates app with view templates inside a directory', function (done) {
      helpers.mockPrompt(this.app, {
        'viewHierarchy': 'nested'
      });
      this.app.run({}, function () {
        helpers.assertFile([
          'client/views/layout/layout.html',
          'client/views/loading/loading.html',
          'client/views/index/index.html',
          'client/views/index/index.coffee',
        ]);
        done();
      });
    });

    it('creates app with view templates with a flat hierarchy', function (done) {

      helpers.mockPrompt(this.app, {
        'viewHierarchy': 'flat'
      });
      this.app.run({}, function () {
        helpers.assertFile([
          'client/views/layout.html',
          'client/views/loading.html',
          'client/views/index.html',
          'client/views/index.coffee'
        ]);
        done();
      });
    });

    it('creates view template inside a directory', function (done) {
      this.view.config.set('viewHierarchy', 'nested');
      this.view.config.save();
      this.view.run({}, function () {
        helpers.assertFile([
          'client/views/testview/testview.html',
          'client/views/testview/testview.coffee',
        ]);
        done();
      });
    });
    
    it('creates view template with a flat hierarchy', function (done) {
      this.view.config.set('viewHierarchy', 'flat');
      this.view.config.save();
      this.view.run({}, function () {
        helpers.assertFile([
          'client/views/testview.html',
          'client/views/testview.coffee'
        ]);
        done();
      });
    });
});
