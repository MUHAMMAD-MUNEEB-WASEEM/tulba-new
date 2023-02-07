import axios from "axios";

console.log("process.env.base_url >>>>>>>>>", process.env.base_url);

export const api = axios.create({
  baseURL: process.env.base_url,
});
