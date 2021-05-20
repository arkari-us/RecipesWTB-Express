const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String },
  googleToken: { type: String }
});

module.exports = mongoose.model('User', userModel);
