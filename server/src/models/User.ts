import { Schema, model } from 'mongoose';
import ProfileImage from './Image';
const User = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    },
    password: {
        type: String,
        required: false,
    },
    picture: ProfileImage,
});

export default model('User', User);
