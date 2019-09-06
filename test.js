const assert = require('assert');
const promiseAllForgiving = require('./index');

describe('promise-all-forgiving', done => {
  it('should return a promise which resolves when all promises have resolved', () => {
    const promise1 = Promise.resolve('one');
    const promise2 = Promise.resolve('two');

    promiseAllForgiving([promise1, promise2]).then(data => {
      assert.strictEqual(data.length, 2);
      assert.strictEqual(data[0], 'one');
      assert.strictEqual(data[1], 'two');
    });
  });

  it('should return a promise which resolves with rejected promises', () => {
    const promise1 = Promise.resolve('one');
    const promise2 = Promise.reject('two');

    promiseAllForgiving([promise1, promise2]).then(data => {
      assert.strictEqual(data.length, 2);
      assert.strictEqual(data[0], 'one');
      assert.strictEqual(data[1], 'two');
    });
  });

  it('should return a promise which resolves with no promises', () => {
    promiseAllForgiving([]).then(data => {
      assert.strictEqual(data.length, 0);
    });
  });
});
