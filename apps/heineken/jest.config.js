module.exports = {
  name: 'heineken',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/heineken',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
