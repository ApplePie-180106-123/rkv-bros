import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  name : {type : String}
});

const User = mongoose.model("User", UserSchema);
export default User;
