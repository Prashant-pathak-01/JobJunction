import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  job_id: { type: String },
  title: { type: String },
  company: {
    name: { type: String },
    location: { type: String },
    culture: { type: String },
    logo: { type: String },
    size: { type: String },
    website: { type: String },
  },
  posted_date: { type: Date },
  employment_type: { type: String },
  experience: { type: Number },
  salary_range: { type: Number },
  description: { type: String },
  responsibilities: { type: [String] },
  requirements: { type: [String] },
  benefits: { type: [String] },
  interview_process: { type: [String] },
  application_details: {
    contact_email: { type: String },
    additional_instructions: { type: String },
  },
  Applicants: { type: [String], default: [] },
});

const Job = mongoose.model("Job", jobSchema);
export default Job;
