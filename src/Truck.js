var Car = require('./Car.js')

// Implement your Truck here
// var make = require('./Car.js')
// var model = require('./Car.js')
// var year = require('./Car.js')
// var color = require('./Car.js')
// var seats = require('./Car.js')

function Truck (make, model, year, color, seats, passengers) {
  Car.call(this, make, model, year, color, seats, passengers)
  this.make = make
  this.model = model
  this.year = year
  this.color = color
  this.seats = seats || 3
}

module.exports = Truck
