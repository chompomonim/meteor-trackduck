Package.describe({
  name: 'chompomonim:trackduck',
  summary: 'Basic integration for TrackDuck.com',
  version: '0.1.0',
  git: 'https://github.com/chompomonim/meteor-trackduck'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');
  api.use('mrt:external-file-loader', 'client');
  api.addFiles('chompomonim:trackduck.js');
  api.export('trackduck');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('chompomonim:trackduck');
  api.addFiles('chompomonim:trackduck-tests.js');
});
