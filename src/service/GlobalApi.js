import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + "/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const createNewResume = (data) =>
  axiosClient.post("/user-resumes", data);

export const updateResumeDetail = (id, data) =>
  axiosClient.put("/user-resumes/" + id, data);

//for single user
export const getUserResume = (id) =>
  axiosClient.get("/user-resumes/" + id + "?populate=*");

//for all users
export const getUserResumes = () => axiosClient.get("/user-resumes");

export const deleteUserResume = (id) =>
  axiosClient.delete("/user-resumes/" + id);
