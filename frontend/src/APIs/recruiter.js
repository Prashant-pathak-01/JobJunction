import axios from "axios";
const SERVER = "http://localhost:8000";

export const addRecruiter = async (data) => {
  try {
    let res = await axios.post(`${SERVER}/addRecruiter`, data);
    return res;
  } catch (error) {
    return `Some error occured : ${error.message}`;
  }
};

export const sendLoginMail = async (data) => {
  try {
    let res = await axios.post(`${SERVER}/sendLoginMail`, data);
    return res;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const sendSignupMail = async (data) => {
  try {
    let res = await axios.post(`${SERVER}/sendSignupMail`, data);
    return res;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const updatePassword = async (data) => {
  try {
    let res = await axios.post(`${SERVER}/updatePassword`, data);
    return res.data;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const checkPassword = async (data) => {
  try {
    let res = await axios.post(`${SERVER}/checkPassword`, data);
    return res.data;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};
