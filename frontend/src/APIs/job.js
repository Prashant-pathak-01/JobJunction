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
