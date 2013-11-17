Router.configure
  layoutTemplate: 'layout'

Router.map ->

  @route 'index',
    path: '/',
    template: 'index'
    data: ->
      # Load Template Data Here