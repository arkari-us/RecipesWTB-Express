/* eslint-disable global-require */
const express = require('express');

function routes(Recipe) {
  const recipeRouter = express.Router();
  const recipesController = require('../controllers/recipesController')(Recipe);
  const recipesControllerByID = require('../controllers/recipesControllerByID')(Recipe);

  recipeRouter.route('/recipes')
    .get(recipesController.get)
    .post(recipesController.post);
  recipeRouter.route('/recipes/:id')
    .get(recipesControllerByID.get);

  return recipeRouter;
}

module.exports = routes;
