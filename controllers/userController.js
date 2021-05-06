function userController(User) {
  function get(req, res) {
    const query = req.body.payload || {};

    User.find(query, (err, users) => {
      if (err) {
        return res.send(err);
      }

      return res.json(users);
    });
  }

  function post(req, res) {
    const user = new User(req.body.payload);

    // TODO: hash password
    user.save();
    return res.status(201).json(user.id);
  }

  function getById(req, res) {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        return res.send(err);
      }

      return res.json(user);
    });
  }

  return { post, get, getById };
}

module.exports = userController;
