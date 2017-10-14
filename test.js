const rsv = require('./index.js')
const debug = require('debug')('rsv')

const result = {}

result['return not -1'] = (rsv(1, 2, 3) > 0)

const falsy = rsv(null, false, '')
result['return falsy'] = (Boolean(falsy) === false)

const users = [
  {age: 26},
  {age: 19},
  {age: 32},
  {age: 43},
  {age: 113},
  {age: -1},
]
result['return object from array'] = Number.isFinite(rsv(...users).age)

const count = Object.keys(result).length
const passing = Object.values(result).reduce( (sum, v) => {
  return sum + (v ? 1:0) 
}, 0)
  
result.count = count
result.passing = passing
result.failing = count - passing

console.log(JSON.stringify(result, null, '  '))