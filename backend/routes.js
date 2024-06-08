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
} from "./controllers/user.js";
import {
  addRecruiter,
  updatePassword,
  checkPassword,
} from "./controllers/recruiter.js";
import { getJob } from "./controllers/job.js";
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

route.post("/getJob", getJob);

export default route;
