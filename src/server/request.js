import axios from "axios";

const instance = axios.create({
	baseURL: "http://jx.xuzhixiang.top/ap",
});

export default instance;
