Template.<%= name %>.helpers

  foo: ->
    return "You're in the <%= name %> view!"

Template.<%= name %>.events
  'click .foo': (evt) ->
    # Event Callback