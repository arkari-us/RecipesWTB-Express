/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// eslint-disable-next-line
const db = mongoose.connect('mongodb://localhost/recipes');
const port = process.env.PORT || 3000;
const Recipe = require('./models/recipeModel');
const recipeRouter = require('./routes/recipeRouter')(Recipe);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', recipeRouter);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
