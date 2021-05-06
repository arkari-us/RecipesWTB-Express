/* eslint-disable global-require */
const express = require('express');

function routes(User) {
  const userRouter = express.Router();
  const userController = require('../controllers/userController')(User);

  userRouter.route('/')
    .get(userController.get)
    .post(userController.post);
  userRouter.route('/:id')
    .get(userController.getById)
    .put(userController.putById)
    .delete(userController.removeById);
  userRouter.route('/favorites')
    .get(userController.getFavorites)
    .delete(userController.removeFavorite);
  return userRouter;
}

module.exports = routes;
