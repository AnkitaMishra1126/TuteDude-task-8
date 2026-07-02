import axios from "axios";
  
const api =  axios.create({
  baseURL: "https://tutedude-task-8.onrender.com/api/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;