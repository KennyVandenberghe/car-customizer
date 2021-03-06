Package.describe({
  name: 'car-customizer-core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  const c = 'client',
      s = 'server',
      cs = [c, s];

  api.use([
    'mongo',
    'underscore',
    'dburles:collection-helpers@1.0.3',
    'ecmascript'
  ], cs);

  api.use([
    'ui',
    'templating',
    'kadira:blaze-layout',
    'kadira:flow-router',
    'reactive-var'
  ], c);

  api.addFiles([
    'namespace.js',
    'namespaces/car.js',
    'models/cars.js',
    'methods/cars.js',
    'methods/carBrands.js',
    'validators.js'
  ], cs);

  api.addFiles([
    'layout.html',
    'layout.js',
    'head.html'
  ], c);

  api.addFiles([
    'router.js'
  ], c);

  api.export('CarCustomizer', cs);
});
