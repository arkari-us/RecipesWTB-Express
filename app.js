/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// eslint-disable-next-line
const db = mongoose.connect('mongodb://localhost/recipes');
const port = process.env.PORT || 3000;

const Recipe = require('./models/recipeModel');
const User = require('./models/userModel');
const recipeRouter = require('./routes/recipeRouter')(Recipe, User);
const userRouter = require('./routes/userRouter')(User);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/v1/recipes', recipeRouter);
app.use('/v1/users', userRouter);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
