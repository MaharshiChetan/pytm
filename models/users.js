const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
   firstname: { type: String, required: true },
   lastname: { type: String, required: true },
   email: { type: String, unique: true, required: true },
   number: { type: Number, unique: true, required: true },
   created: {
      type: Date,
      default: Date.now
   }
});

var User = mongoose.model('User', userSchema);

module.exports = User;