const sum = require('../src/runloop');

test('simple loop', () => {
  expect(sum()).toBe(1);
});
