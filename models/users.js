const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
   firstname: { type: String, required: true },
   lastname: { type: String, required: true },
   email: { type: String, required: true },
   number: { type: String, required: true },
   created: {
      type: Date,
      default: Date.now
   }
});

var User = mongoose.model('User', userSchema);

module.exports = User;