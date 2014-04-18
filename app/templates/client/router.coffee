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
        # foos: Foos.find()
      }

#  @route 'foos_show',
#    path: '/foo/:_id',
#    template: 'foos_show'
#    waitOn: ->
#      return Meteor.subscribe('foos')
#    data: ->
#      return Foos.findOne({_id: @params._id})
