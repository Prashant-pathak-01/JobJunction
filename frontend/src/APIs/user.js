import axios from "axios";

const SERVER = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    const res = await axios.post(`${SERVER}/addUser`, data);
    return res.data;
  } catch (error) {
    return `Some error occured : ${error.message}`;
  }
};

export const getUser = async (data) => {
  try {
    const res = await axios.post(`${SERVER}/getUser`, data);
    return res.data;
  } catch (error) {
    return `Some error occured : ${error.message}`;
  }
};

export const addEducation = async (data) => {
  try {
    const res = await axios.post(`${SERVER}/addEducation`, data);
    return res.data;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const removeEducation = async (data) => {
  try {
    const res = await axios.post(`${SERVER}/removeEducation`, data);
    return res.data;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const addSkill = async (data) => {
  try {
    const res = await axios.post(`${SERVER}/addSkill`, data);
    return res.data;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const removeSkill = async (data) => {
  try {
    const res = await axios.post(`${SERVER}/removeSkill`, data);
    return res.data;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const addLanguage = async (data) => {
  try {
    const res = await axios.post(`${SERVER}/addLanguage`, data);
    return res.data;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const removeLanguage = async (data) => {
  try {
    const res = await axios.post(`${SERVER}/removeLanguage`, data);
    return res.data;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const addExperience = async (data) => {
  try {
    const res = await axios.post(`${SERVER}/addExperience`, data);
    return res.data;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const removeExperience = async (data) => {
  try {
    const res = await axios.post(`${SERVER}/removeExperience`, data);
    return res.data;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const addProject = async (data) => {
  try {
    const res = await axios.post(`${SERVER}/addProject`, data);
    return res.data;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const removeProject = async (data) => {
  try {
    const res = await axios.post(`${SERVER}/removeProject`, data);
    return res.data;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const applied = async (data) => {
  try {
    let res = axios.post(`${SERVER}/applied`, data);
    return res;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const savedJob = async (data) => {
  try {
    let res = axios.post(`${SERVER}/savedJob`, data);
    return res;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const uploadResumeFileMongoDB = async (data) => {
  try {
    let res = axios.post(`${SERVER}/uploadResumeFileMongoDB`, data);
    return res;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const uploadPhotoMongoDB = async (data) => {
  try {
    let res = axios.post(`${SERVER}/uploadPhotoMongoDB`, data);
    return res;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};
