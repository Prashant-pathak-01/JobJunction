import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  projectName: String,
  description: String,
  startDate: String,
  endDate: String,
  liveLink: String,
  githubLink: String,
});

const experienceSchema = new mongoose.Schema({
  companyName: String,
  position: String,
  yearFrom: String,
  yearTo: String,
  period: String,
});

const qualificationSchema = new mongoose.Schema({
  degree: String,
  institution: String,
  fieldOfStudy: String,
  score: String,
  startDate: String,
  endDate: String,
});

const studentSchema = new mongoose.Schema({
  Name: String,
  Email: {
    type: String,
    unique: true,
    required: true,
  },
  Photo: String,
  Gender: String,
  DoB: String,
  Qualifications: [qualificationSchema],
  Skills: [String],
  Languages: [String],
  Projects: [projectSchema],
  Experience: [experienceSchema],
  Resume: {
    type: String,
    default: "",
  },
  SavedJobs: { type: [String], default: [] },
  AppliedJobs: { type: [String], default: [] },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
