/* eslint-disable no-param-reassign, no-underscore-dangle */
function recipesControllerByID(Recipe) {
  function get(req, res) {
    Recipe.findById(req.params.id, (err, recipe) => {
      if (err) {
        return res.send(err);
      }

      return res.json(recipe);
    });
  }

  function patch(req, res) {
    if (req.body.id) {
      delete req.body.id;
    }

    req.body.ingredients.forEach((element) => {
      if (element._id) {
        delete element._id;
      }
    });

    Recipe.findByIdAndUpdate(req.params.id, req.body, (err, recipe) => {
      if (err) {
        return res.send(err);
      }
      return res.send(recipe);
    });
  }

  function remove(req, res) {
    Recipe.findByIdAndDelete(req.params.id, (err, recipe) => {
      if (err) {
        return res.send(err);
      }
      return res.send(recipe);
    });
  }

  return { get, patch, remove };
}

module.exports = recipesControllerByID;
