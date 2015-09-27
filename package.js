Package.describe({
  name: 'numeral:languages',
  summary: 'Numeral.js languages (official) - A library for formatting and manipulating numbers.',
  version: '1.5.3',
  git: 'https://github.com/MeteorPackaging/numeraljs-languages-wrapper.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');

  api.use('numeral:numeral@1.5.3_1');
  api.imply('numeral:numeral@1.5.3_1');

  api.addFiles([
    'meteor-pre.js',
    'upstream/languages.js',
  ]);
});

Package.on_test(function(api) {
  api.use('numeral:numeral');
  api.use('numeral:languages');

  api.use([
    'tinytest',
    'test-helpers'
  ]);

  api.add_files([
    'tests/tests.js',
  ]);
});
