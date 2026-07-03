import api from "../utils/api";
//get all tasks
export const getTasks = async (email)=>{
    const response = await api.get(`/api/v2/getlist?email=${email}`);
    return response.data;
};
//add tasks
export const addTask = async (taskData) => {
    const response = await api.post("/api/v2/addlist", taskData);
    return response.data;
};
//update tasks
export const updateTask = async (id,taskData) => {
    const response = await api.put(`/api/v2/updatelist/${id}`, taskData);
    return response.data;
};
//delete tasks
export const deleteTask = async (id, email) => {
    const response = await api.delete( `/api/v2/deletelist/${id}?email=${email}`);
    return response.data;
};
//search task
export const searchTask = async (keyword) => {
    const response = await api.get( `/api/v2/searchlist?keyword=${keyword}`);
    return response.data;
};
