const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
});

global.window = jsdom.window;
global.document = jsdom.window.document;
global.navigator = {
  userAgent: 'node.js',
};

test('dummy test', () => {
  // This test is here to prevent the "Test suite failed to run" error
  // that occurs when there are no tests in the test suite.
});
