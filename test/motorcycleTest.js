// load the assert plugin (for testing)
var assert = require('assert')
var success = require('./helpers/success')

// load the Motorcycle class
var Motorcycle = require('../src/Motorcycle')
var Car = require('../src/Car')

// Your tests will go below here

var myMotorcycle = new Motorcycle('Acura', 'Integra', 1999, 'Red', ['Tom'])

assert.strictEqual((myMotorcycle instanceof Motorcycle), true, 'myMotocycle is not an instance of Motorcycle')
assert.strictEqual((myMotorcycle instanceof Car), true, 'myMotocycle is not an instance of Car')
assert.strictEqual(myMotorcycle.make, 'Acura', 'Constructor did not set make.')
assert.strictEqual(myMotorcycle.model, 'Integra', 'Constructor did not set model.')
assert.strictEqual(myMotorcycle.year, 1999, 'Constructor did not set year.')
assert.strictEqual(myMotorcycle.color, 'Red', 'Constructor did not set color.')
assert.strictEqual(myMotorcycle.seats, 2, 'Constructor did not set seats.')
assert.deepEqual(myMotorcycle.passengers, ['Tom'], 'Constructor did not set passengers.')

// test wheelie

assert.strictEqual(myMotorcycle.wheelie(), true, 'Motorcycle cannot do wheelie')
success();
