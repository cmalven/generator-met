# generator-meteor

An opinionated Meteor.js scaffolding tool for Yeoman.

----

## Setup

Before you'll get any use out of this, you'll need to install [Meteor](http://docs.meteor.com/#quickstart) and [Yeoman](http://yeoman.io/gettingstarted.html)

Here are the combined instructions at the time of this writing:

```
# Meteor
curl https://install.meteor.com | /bin/sh

# Yeoman
npm install -g yo

# This generator
npm install -g generator-meteor-coffee
```


## Scaffolding

The following command will scaffold a new meteor app for you, including the `iron-router`, `fastclick`, `jquery`, `coffeescript`, and `underscore` packages by default, and your choice of `stylus`, `less`, or `bootstrap` for CSS preprocessing:

```
mkdir my-app && cd my-app
yo meteor-coffee
```

After your app is scaffolded, you'll want to install dependencies and start your app with:

```
meteor
```

## Structure

The generated app will have the following structure by default:

```
/
    .meteor/
        .gitignore
        packages
        release
    client/
    	main.coffee
    	router.coffee
        vendor/
        views/
        	index/
        		index.html
        		index.coffee
        	layout/
        		layout.html
    lib/
        collections/
    packages/
    public/
    server/
        main.coffee
		methods.coffee
    	publications/
    .gitignore
	README.md
	index.html
```

## Sub-Generators

We've also included a couple of Yeoman sub-generators to simplify common development tasks:

### view

`yo meteor-coffee:view my_view`

Creates `my_view.html` and `my_view.coffee` in `clients/views/my_view/`

### package

`yo meteor-coffee:package my-package`

Scaffolds and installs a new package called "my-package".

### collection

`yo meteor-coffee:collection animals`

Creates a new collection in `lib/collections/animals.coffee` and publication in `server/publications/animals.coffee`.
