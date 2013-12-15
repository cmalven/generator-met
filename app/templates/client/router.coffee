Router.configure
  layoutTemplate: 'layout'
  loadingTemplate: 'loading'

Router.map ->

  @route 'index',
    path: '/',
    template: 'index'
    waitOn: ->
      return Meteor.subscribe('foos')
    data: ->
      {
        foos: Foos.find()
      }