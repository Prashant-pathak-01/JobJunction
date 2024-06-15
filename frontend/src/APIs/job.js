import axios from "axios";
const SERVER = "http://localhost:8000";

export const getJob = async (data) => {
  try {
    let res = axios.post(`${SERVER}/getJob`, data);
    return res;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const addJob = async (data) => {
  try {
    let res = axios.post(`${SERVER}/addJob`, data);
    return res;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const getMyJobs = async (data) => {
  try {
    let res = axios.post(`${SERVER}/getMyJobs`, data);
    return res;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const getAllJobs = async (data) => {
  try {
    let res = axios.post(`${SERVER}/getAllJobs`, data);
    return res;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};

export const apply = async (data) => {
  try {
    let res = axios.post(`${SERVER}/apply`, data);
    return res;
  } catch (error) {
    return `some error occured : ${error.message}`;
  }
};
