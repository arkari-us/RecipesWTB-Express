/* eslint-disable global-require */
const express = require('express');

function routes(Recipe) {
  const recipeRouter = express.Router();
  const recipesController = require('../controllers/recipesController')(Recipe);

  recipeRouter.route('/')
    .get(recipesController.get)
    .post(recipesController.post);
  recipeRouter.route('/:id')
    .get(recipesController.getById)
    .put(recipesController.putById)
    .delete(recipesController.removeById);
  return recipeRouter;
}

module.exports = routes;
