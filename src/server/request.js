import axios from "axios";

const createInstance = (req) =>
	axios.create({
		baseURL: "http://apit.hidream.net",
		headers: {
			cookie: req.get("cookie") || "",
		},
	});

export default createInstance;
