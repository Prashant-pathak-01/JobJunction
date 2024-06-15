import mongoose from "mongoose";

const recruiterSchema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String },
  password: { type: String },
  companyName: { type: String },
  companyWebsite: { type: String },
  companySize: { type: String },
  phoneNumber: { type: String },
  jobTitle: { type: String },
  companyDescription: { type: String },
  profilePicture: { type: String },
  logo: { type: String },
});

const Recruiter = mongoose.model("Recruiter", recruiterSchema);
export default Recruiter;
