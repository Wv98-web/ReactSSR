import { CHANGE_LIST } from "./constants";

const changeList = (list) => ({
	type: CHANGE_LIST,
	list,
});

/**
 * 巧用redux-thunk中的withExtraArgument
 * 请求数据时，接口传入server变量区分服务器还是客户端发的请求
 * 优化避免server的传递
 *
 */
export const getHomeList = () => {
	// http://jx.xuzhixiang.top/ap/api/productlist.php
	// 浏览器运行 api/productlist.php = localhost:3000/api/productlist.php
	// 服务器运行 /api/productlist.php = 服务器根目录下/api/productlist.php

	// let homeListApi = "";
	// if (server) {
	// 	homeListApi = "http://jx.xuzhixiang.top/ap/api/productlist.php";
	// } else {
	// 	homeListApi = "/api/productlist.php";
	// }

	return (dispatch, getState, axiosInstance) => {
		return axiosInstance.get("/api/productlist.php").then((res) => {
			const list = res.data.data;
			dispatch(changeList(list));
		});
	};
};
