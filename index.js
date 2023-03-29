// const myvar = require('./myvar')
// sonsole.log(myvar.a)

module.exports = myvar
const resMyvar = require('./myvar')
const setVar = new resMyvar()

console.log(setVar.name)
console.log(setVar.hello)