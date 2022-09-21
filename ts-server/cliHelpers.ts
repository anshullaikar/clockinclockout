

import {default as axios} from "axios";

export const getTasks = async () => {
    const response = await axios.get("http:
    return response.data;
}



export const addTask = async (task: any) => {
    const response = await axios.post("http:
    return response.data;
}



export const updateTask = async (id: string, task: any) => {
    const response = await axios.put(`http:
    return response.data;
}



export const deleteTask = async (id: string) => {
    const response = await axios.delete(`http:
    return response.data;
}



export const getTasksByStatus = async (status: string) => {
    const response = await axios.get(`http:
    return response.data;
}



export const getTaskById = async (id: string) => {
    const response = await axios.get(`http:
    return response.data;
}



export const getTasksByDate = async (date: string) => {
    const response = await axios.get(`http:
    return response.data;
}



export default {
    getTasks,
    addTask,
    updateTask,
    deleteTask,
    getTasksByStatus,
    getTaskById,
    getTasksByDate
}
