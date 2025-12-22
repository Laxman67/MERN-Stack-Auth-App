import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: {
      type: String,
      enum: ['admin', 'student'],
      default: 'student',
    },
  },
  { timestamps: true }
);

const User = model('User', userSchema);

export default User;
