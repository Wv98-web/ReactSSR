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

export const getHomeList = (server) => {
	// http://jx.xuzhixiang.top/ap/api/productlist.php
	// 浏览器运行 api/productlist.php = localhost:3000/api/productlist.php
	// 服务器运行 /api/productlist.php = 服务器根目录下/api/productlist.php

	let homeListApi = "";
	if (server) {
		homeListApi = "http://jx.xuzhixiang.top/ap/api/productlist.php";
	} else {
		homeListApi = "/api/productlist.php";
	}

	return (dispatch) => {
		return axios.get(homeListApi).then((res) => {
			const list = res.data.data;
			dispatch(changeList(list));
		});
	};
};
