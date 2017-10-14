[![npm version](https://badge.fury.io/js/rsv.svg)](https://badge.fury.io/js/rsv)

# Sample values, not simple value.

`sample-value` returns a value randomly from given values.

## Usage

Good for build strong test including eventually invalid values.

`npm install rsv`

```js
// ONLY the example using es6 syntax.

const should_fail = require('rsv')(null, '', 'INVALID', false)
// returns null OR '' OR 'INVALID' OR false

const users = [
  {age: 26},
  {age: 19},
  {age: 32},
  {age: 43},
  {age: 113},
  {age: -1},
]
const user = require('rsv')(...users)
// returns any object from users array.
```

## Test

`npm test`

Useful examples at [test.js](https://github.com/eces/random-sample-value/blob/master/test.js).