import type {  Request } from 'express';
import User from '../../models/User';


export const createAccount = async (req: Request) => {
  try {
      const { first_name, last_name, picture, email } = req.body;
      const imageProfile = JSON.parse(picture);
      console.log(imageProfile, 'line 13')
    const newUser = new User({
      firstName: first_name,
      lastName: last_name,
      email,
      picture: picture?{
        url: imageProfile.data.url,
        width: imageProfile.data.width,
        height: imageProfile.data.height,
      }:null,
    });

    return await newUser.save();
  } catch (error) {
    throw new Error('Failed to create user account.');
  }
};
