import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "../Routes";
import { Provider } from "react-redux";
import { getClientStore } from "../store";

const store = getClientStore();

// 同构:一套React代码，在服务器端执行一次，再在客户端再执行一次
/**
 * 实现同构
 * 配置 webpack.client.js
 * 创建 client文件夹 用来放客户端代码源文件
 * 把组件渲染到根节点上
 */

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					{/* {routes.map((route) => (
						<Route key={route.path} {...route} />
					))} */}
					{renderRoutes(routes)}
				</Switch>
			</BrowserRouter>
		</Provider>
	);
};

// hydrate
ReactDOM.hydrate(<App />, document.getElementById("root"));
