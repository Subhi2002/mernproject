import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type: String,
      default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fblank-profile&psig=AOvVaw2Gga2r7AGd-AL9opBjtpFz&ust=1701306072696000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCMC6n5KB6IIDFQAAAAAdAAAAABAE"
    },
   
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;