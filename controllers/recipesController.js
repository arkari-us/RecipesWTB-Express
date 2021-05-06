function recipesController(Recipe) {
  function post(req, res) {
    const recipe = new Recipe(req.body.payload);

    recipe.save();
    return res.status(201).json(recipe);
  }

  function get(req, res) {
    res.header('Access-Control-Allow-Origin', '*');

    const query = req.body.payload || {};

    Recipe.find(query, (err, recipes) => {
      if (err) {
        return res.send(err);
      }

      return res.json(recipes);
    });
  }

  function getById(req, res) {
    Recipe.findById(req.params.id, (err, recipe) => {
      if (err) {
        return res.send(err);
      }

      return res.json(recipe);
    });
  }

  function putById(req, res) {
    Recipe.findOneAndReplace(req.params.id, req.body, (err, recipe) => {
      if (err) {
        return res.send(err);
      }
      return res.send(recipe);
    });
  }

  function removeById(req, res) {
    Recipe.findByIdAndDelete(req.params.id, (err, recipe) => {
      if (err) {
        return res.send(err);
      }
      return res.send(recipe);
    });
  }

  return { post, get, getById, putById, removeById };
}

module.exports = recipesController;
