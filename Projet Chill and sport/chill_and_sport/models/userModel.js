import { Schema, model, models } from 'mongoose';
import { string } from 'prop-types';

const userSchema = new Schema({
  

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true,
    unique: true
  },

  picture: String,

  phone: {
    type: String,
    required: true
  },

  birthday: {
    type: Date,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  is_admin: {
    type: Number,
    default: false
  },

  created_at: Date
});

const User = models.User || model('User', userSchema);

export default User;
