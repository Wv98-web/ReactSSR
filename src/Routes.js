import App from "./App";
import Home from "./containers/Home";
import Login from "./containers/Login";

// 当加载HOME组件之前，我希望调用home.loadData方法，提前获取到必要的异步请求
// 然后再做服务器渲染，把页面返回到用户
export default [
	{
		path: "/",
		component: App,
		loadData: App.loadData,
		routes: [
			{
				path: "/",
				exact: true,
				component: Home,
				loadData: Home.loadData,
			},
			{
				path: "/login",
				exact: true,
				component: Login,
			},
		],
	},
];
