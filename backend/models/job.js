import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  job_id: { type: String },
  title: { type: String },
  company: {
    name: { type: String },
    location: { type: String },
    industry: { type: String },
    logo: { type: String },
    size: { type: String },
    website: { type: String },
    culture: { type: String },
    office_environment: { type: String },
  },
  posted_date: { type: Date },
  employment_type: { type: String },
  mode: { type: String },
  experience: { type: String },
  salary_range: { type: String },
  description: { type: String },
  responsibilities: { type: [String] },
  requirements: { type: [String] },
  technologies_used: { type: [String] },
  benefits: { type: [String] },
  interview_process: { type: [String] },
  application_details: {
    contact_email: { type: String },
    additional_instructions: { type: String },
  },
});

const Job = mongoose.model("Job", jobSchema);
export default Job;
