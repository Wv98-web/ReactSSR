import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// 同构:一套React代码，在服务器端执行一次，再在客户端再执行一次

/**
 * 实现同构
 * 配置 webpack.client.js
 * 创建 client文件夹 用来放客户端代码源文件
 * 把组件渲染到根节点上
 */

const reducer = (state = { name: "wuwei" }, action) => {
	return state;
};

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</Provider>
	);
};

// hydrate
ReactDOM.hydrate(<App />, document.getElementById("root"));
