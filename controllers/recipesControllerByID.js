function recipesControllerByID(Recipe) {
  function post(req, res) {
    const recipe = new Recipe(req.body);

    recipe.save();
    return res.status(201).json(recipe);
  }

  function get(req, res) {
    Recipe.findById(req.params.id, (err, recipes) => {
      if (err) {
        return res.send(err);
      }

      return res.json(recipes);
    });
  }

  return { post, get };
}

module.exports = recipesControllerByID;
