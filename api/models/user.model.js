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
      default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fhd-wallpaper-desktop-wncoi&psig=AOvVaw3ZPk1N-etVEhkb2g8EjUSm&ust=1702004538811000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCIDLp5Sr_IIDFQAAAAAdAAAAABAE"
    },
   
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;