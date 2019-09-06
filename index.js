/**
 * Like Promise.all(), but waits for all promises to complete, whether resolved or rejected.
 * @param promises
 * @returns {Promise} Promise which resolves with returned values from each passed Promise. Values will be in order of the Promises passed, regardless of completion order.
 */
module.exports = promises =>
  Promise.all(
    promises
      ? promises.map(promise => promise.catch(e => e))
      : promises
  );
