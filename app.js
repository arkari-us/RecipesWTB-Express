/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//const db = mongoose.connect('mongodb://localhost/recipes');
const port = process.env.PORT || 3000;
const Recipe = require('./models/recipeModel');
const recipeRouter = require('./routes/recipeRouter')(Recipe);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', recipeRouter);

app.get('/', (req, res) => {
  return res.send('Hello!')
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
