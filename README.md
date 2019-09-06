# promise-all-forgiving

`Promise.all()` has a fail-fast behavior, which means that if any of the promises reject, then `Promise.all()` will reject. Sometimes you don't want this behavior, and that's where promise-all-forgiving comes in. If one or more promises reject, it will continue to wait for all promises to complete and resolve with an array of any resolved values and rejected errors.  

## Installation

Install using NPM:

```shell
$ npm i promise-all-forgiving
```

## Usage

Import the function:

```js
const promiseAllForgiving = require('promise-all-forgiving');

const promise1 = Promise.resolve('one');
const promise2 = Promise.reject(new Error('two'));
const promise3 = Promise.resolve('three');

promiseAllForgiving([promise1, promise2, promise3])
  .then(data => {
    // handle the array of resolved/rejected data
    
    // you could use "instance of Error" to check if each value is an Error (rejected Promise)
  })
```
