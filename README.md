# Sample values, not simple value.

`sample-value` returns a value randomly from given values.

## Usage

Good for build strong test including eventually invalid values.

```js
// ONLY the example using es6 syntax.

const should_fail = require('sample-value')(null, '', 'INVALID', false)
// returns null OR '' OR 'INVALID' OR false

const users = [
  {age: 26},
  {age: 19},
  {age: 32},
  {age: 43},
  {age: 113},
  {age: -1},
]
const user = require('sample-value')(...users)
// returns any object from users array.
```
