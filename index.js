module.exports = random_value = function () {
  return arguments[Math.floor(Math.random()*arguments.length)]
}