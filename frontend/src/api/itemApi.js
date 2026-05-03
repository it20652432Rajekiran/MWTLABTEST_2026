import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/items",
});

export const getItems = () => API.get("/");
export const getItemById = (id) => API.get(`/${id}`);
export const createItem = (data) => API.post("/", data);
export const updateItem = (id, data) => API.put(`/${id}`, data);
export const deleteItem = (id) => API.delete(`/${id}`);