const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeModel = new Schema({
  name: String,
  ingredients: [String],
  instructions: [String],
  tags: [String],
  favorites: Number
});

module.exports = mongoose.model('Recipe', recipeModel);
