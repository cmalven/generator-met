Package.describe({
  summary: "<%= packageSummary %>"
});

Package.on_use(function (api, where) {
  api.use(
    [<% _.each(packageDeps, function(dep, i) { %>
      <%= "'" + dep + "'" %><% if (i != packageDeps.length - 1) { %><%= ',' %><% }}); %>
    ], 
    'client'
  );

  api.add_files(
    [
      // 'panel.coffee'
    ],
    'client'
  );
});