import { Schema } from 'mongoose';

const ProfileImage = new Schema({
  url: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
});

export default ProfileImage;
