# generator-meteor

An opinionated Meteor.js scaffolding tool for Yeoman.

----

## Getting Started

The following command will scaffold a new meteor app for you, including the `iron-router`, `fastclick`, `jquery`, `coffeescript`, and `underscore` packages by default, and your choice of `stylus`, `less`, or `bootstrap` for CSS preprocessing:

```
yo meteor
```

After your app is scaffolded, you'll want to install Meteorite dependencies and start your app with:

```
mrt install && meteor
```

## Sub-Generators

We've also included a couple of Yeoman sub-generators to simplify common development tasks:

### view

`yo meteor:view my_view`

Creates `my_view.html` and `my_view.coffee` in `clients/views/my_view/`

### package

`yo meteor:package my-package`

Scaffolds and installs a new package called "meteor-my-package".