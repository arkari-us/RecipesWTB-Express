const express = require('express');
const Recipe = require('../models/recipe');

function routes(Recipe) {
  const router = express.Router();

  router.route('/recipes')
    .post((req, res) => {
      const recipe = new Recipe(req.body);

      console.log(recipe);
      return res.json(recipe);
    })
    .get((req, res) => {

    })
}