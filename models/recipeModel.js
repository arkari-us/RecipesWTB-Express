const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeModel = new Schema({
  name: String,
  ingredients: [{ quantity: Number, unit: String, ingredient: String }],
  instructions: String,
  tags: [String]
});

module.exports = mongoose.model('Recipe', recipeModel);
