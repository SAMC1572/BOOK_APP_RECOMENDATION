const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true, unique: true },
  avatar:{ type: String, default:"https://cdnjs.cloudflare.com/ajax/libs/iconify/3.1.1/iconify.min.js", required: true },
  role: { type: String, required: true, enum: ['user', 'admin'] },
  favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
  cart:[ { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },],
});

module.exports = mongoose.model('User', userSchema);
