import api from "../utils/api";

//register user
export const registerUser = async (userData) => {
    const response = await api.post("/api/v1/register", userData);
    return response.data;
};

//login user 
export const loginUser = async (userData) => {
    const response = await api.post("/api/v1/signin", userData);
    return response.data;
}
