const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  age: { type: Number },
  salaried: { type: Boolean },
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
