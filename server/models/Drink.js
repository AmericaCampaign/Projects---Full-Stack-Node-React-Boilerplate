const mongoose = require('mongoose')

const DrinkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  isDairy: { type: Boolean, required: true, default: false },
  image: { type: String, required: true },
  isSweet: { type: Boolean, required: true, default: false }
})

DrinkSchema.methods.loadData = function (data) {
  this.name = data.name || this.name
  this.isDairy = data.isDairy || this.isDairy
  this.image = data.image || this.image
  this.isSweet = data.isSweet || this.isSweet
}

module.exports = mongoose.model('Drink', DrinkSchema)
