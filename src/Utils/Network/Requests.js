import { axiosClient } from "./ApiClient.js";

export const getInfo = () => {
	return axiosClient.get("/");
};


export const getTasks = (context) => {
	return axiosClient.post("/tasks", context);
};
