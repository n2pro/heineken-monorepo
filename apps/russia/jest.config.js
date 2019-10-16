module.exports = {
  name: 'russia',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/russia',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
