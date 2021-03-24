const express = require('express');

function routes(Recipe) {
  const recipeRouter = express.Router();

  recipeRouter.route('/recipes')
    .get((req, res) => {
      const response = { hello: 'Welcome!' };
      return res.json(response);
    });

  return recipeRouter;
}

module.exports = routes;
