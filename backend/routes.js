import express from "express";
import {
  addUser,
  getUser,
  addEducation,
  removeEducation,
  addSkill,
  removeSkill,
  addLanguage,
  removeLanguage,
  addExperience,
  removeExperience,
  addProject,
  removeProject,
  applied,
  savedJob,
  uploadResumeFileMongoDB,
  uploadPhotoMongoDB,
} from "./controllers/user.js";
import {
  addRecruiter,
  updatePassword,
  checkPassword,
} from "./controllers/recruiter.js";
import {
  getJob,
  addJob,
  getMyJobs,
  getAllJobs,
  apply,
} from "./controllers/job.js";
import sendLoginMail from "./mailSender/loginMail.js";
import sendSignupMail from "./mailSender/signupMail.js";

const route = express.Router();

{
  /* User */
}
route.post("/addUser", addUser);
route.post("/getUser", getUser);
route.post("/addEducation", addEducation);
route.post("/removeEducation", removeEducation);
route.post("/addSkill", addSkill);
route.post("/removeSkill", removeSkill);
route.post("/addLanguage", addLanguage);
route.post("/removeLanguage", removeLanguage);
route.post("/addExperience", addExperience);
route.post("/removeExperience", removeExperience);
route.post("/addProject", addProject);
route.post("/removeProject", removeProject);
route.post("/applied", applied);
route.post("/savedJob", savedJob);
route.post("/uploadResumeFileMongoDB", uploadResumeFileMongoDB);
route.post("/uploadPhotoMongoDB", uploadPhotoMongoDB);

{
  /* Recruiter */
}
route.post("/addrecruiter", addRecruiter);
route.post("/checkPassword", checkPassword);
route.post("/updatePassword", updatePassword);

{
  /* Mail */
}
route.post("/sendLoginMail", sendLoginMail);
route.post("/sendSignupMail", sendSignupMail);

{
  /* Job */
}
route.post("/getJob", getJob);
route.post("/addJob", addJob);
route.post("/getMyJobs", getMyJobs);
route.post("/getAllJobs", getAllJobs);
route.post("/apply", apply);

export default route;
