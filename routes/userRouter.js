/* eslint-disable global-require */
const express = require('express');

function routes(User) {
  const userRouter = express.Router();
  const userController = require('../controllers/userController')(User);

  userRouter.route('/')
    .post(userController.createUser)
    .get(userController.get);
  userRouter.route('/:id')
    .get(userController.getById)
    .patch(userController.update)
    .delete(userController.removeById);
  userRouter.route('/favorites')
    .get(userController.getFavorites)
    .delete(userController.removeFavorite);
  userRouter.route('/favorites/:id')
    .post(userController.addFavorite);
  return userRouter;
}

module.exports = routes;
