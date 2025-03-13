import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/User.interface';

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true } // Automatically handles createdAt and updatedAt
);

const User = model<IUser>('User', userSchema);

export default User;
