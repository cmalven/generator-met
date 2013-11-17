Deps.autorun ->
  # Don't need this unless we remove autopublish package
  # dashboard_id = Session.get('dashboard_id')
  # Meteor.subscribe('stuff')

# Session Configuration
# Session.set('grid_units_x', 6)

Meteor.startup ->
  new FastClick(document.body)
