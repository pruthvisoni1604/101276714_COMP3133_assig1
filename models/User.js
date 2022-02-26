const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter username'],
    unique: [true, 'Please enter unique username'],
    trim: true,
    lowercase: true
  },
  firstname: {
    type: String,
    required: [true, 'Please enter first name'],
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, 'Please enter last name'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter password'],
    minlength: 6,
    validate: function(value) {
      var passwordRegex = /^[A-Za-z0-9#$&_]+$/
      return passwordRegex.test(value);
    }
  },
  email: {
    type: String,
    required: [true, 'Please enter email'],
    trim: true,
    lowercase: true,
    validate: function(value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    }
  },
  type: {
    type: String,
    required: true,
    enum: ['admin', 'customer'],
    trim: true,
    lowercase: true
  }
})

const User = mongoose.model("User", UserSchema);
module.exports = User;