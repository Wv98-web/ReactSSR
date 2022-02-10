import express from "express";
import { render } from "./utils";
import getStore from "../store";
import { matchRoutes } from "react-router-config";
import routes from "../Routes";

// 虚拟Dom是真实DOM的一个javascript对象映射 提升页面渲染性能
// 服务器渲染ssr 首屏速度加快，seo效果提升

// 客户端渲染
// React代码在浏览器上执行，消耗的是用户浏览器的性能

// 服务器端渲染
// React代码在服务器上执行，消耗的是服务器端的性能

// 服务器端渲染只发生在第一次进入页面的时候

const app = express();
const port = 3000;

app.use(express.static("public")); // 请求静态文件，就到根目录找

app.get("*", function (req, res) {
	const store = getStore();

	// 在这里拿到异步数据，并填充到store之中
	// 根据路由的路径，来往store里面加数据
	const matchedRoutes = matchRoutes(routes, req.path);
	// 让matchedRoutes里面所有的组件，对应的loadData方法执行一次
	const promise = [];
	matchedRoutes.forEach((item) => {
		if (item.route.loadData) {
			promise.push(item.route.loadData(store));
		}
	});

	console.log(matchedRoutes);

	Promise.all(promise).then(() => {
		res.send(render(store, routes, req));
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
