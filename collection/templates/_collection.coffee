root = exports ? this

root.<%= name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() %> = new Meteor.Collection('<%= name.toLowerCase() %>')