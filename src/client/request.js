import axios from "axios";

const instance = axios.create({
	baseURL: "/",
	// params: {
	// 	secret: "abcd",
	// },
});

export default instance;
