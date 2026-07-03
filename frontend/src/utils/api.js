import axios from "axios";
  
const api =  axios.create({
  baseURL: "https://task-8-gkpe.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
