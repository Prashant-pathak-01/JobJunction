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
import { getJob } from "./controllers/job.js";
const route = express.Router();

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

route.post("/getJob", getJob);

export default route;
