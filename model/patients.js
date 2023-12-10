import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  contactDetail: { type: String, required: true },
  medicalHostory: { type: String, required: true },
});

export const patientModel =
  mongoose.models?.patients || mongoose.model("patients", UserSchema);
