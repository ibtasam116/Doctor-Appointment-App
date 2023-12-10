import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  contactInfo: { type: String, required: true },
});

export const doctorModel =
  mongoose.models?.doctors || mongoose.model("doctors", UserSchema);
