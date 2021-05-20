const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeModel = new Schema({
  name: String,
  ingredients: [String],
  instructions: [String],
  tags: [String],
  author: { type: String },
  favoritedBy: { type: [String] }
});

module.exports = mongoose.model('Recipe', recipeModel);
