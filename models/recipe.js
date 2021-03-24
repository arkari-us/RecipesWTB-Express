const mongoose = require('mongoose');

const { Schema } = mongoose;

const Recipe = new Schema({
  name: String,
  ingredients: [{ quantity: Number, unit: String, ingredient: String }],
  instructions: String,
  tags: [String]
});