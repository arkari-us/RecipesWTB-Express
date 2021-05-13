const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

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

  function createUser(req, res) {
    const data = req.body.payload;
    const user = new User();

    if (!data.username || !data.password || !data.email) {
      return res.status(400).send();
    }
    user.userName = data.userName;
    user.email = data.email;

    if (data.password) {
      bcrypt.hash(data.password, SALT_WORK_FACTOR, function (err, hash) {
        if (err) {
          return res.status(500).send();
        }

        user.password = hash;
      }
    }
    // else if (data.googleToken) { //(TODO)
    //   user.googleToken = data.googleToken;
    // }
    else {
      return res.status(400).send('No password or third-party token specified');
    }

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

  return { createUser, get, getById };
}

module.exports = userController;
