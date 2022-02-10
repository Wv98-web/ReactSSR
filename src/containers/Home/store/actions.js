import axios from "axios";
import { CHANGE_LIST } from "./constants";

const changeList = (list) => ({
	type: CHANGE_LIST,
	list,
});

var news = [
	{
		id: "1",
		uname: "user1",
		psw: "1111",
	},
	{
		id: "2",
		uname: "user2",
		psw: "2222",
	},
	{
		id: "3",
		uname: "user3",
		psw: "3333",
	},
	{
		id: "4",
		uname: "user4",
		psw: "4444",
	},
];

export const getHomeList = () => {
	return (dispatch) => {
		return axios.get("/api/productlist.php").then((res) => {
			const list = res.data.data;
			dispatch(changeList(list));
		});
	};
};
