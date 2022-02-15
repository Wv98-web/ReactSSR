import express from "express";
import { render } from "./utils";
import { getStore } from "../store";
import { matchRoutes } from "react-router-config";
import routes from "../Routes";
import proxy from "express-http-proxy";

// 虚拟Dom是真实DOM的一个javascript对象映射 提升页面渲染性能
// 服务器渲染ssr 首屏速度加快，seo效果提升

const app = express();
const port = 3000;

app.use(express.static("public"));

// 使用proxy代理，让中间层获取数据
// /api/productlist.php
// req.url = productlist.php
// proxyReqPathResolver: /ap/api/productlist.php
// http://jx.xuzhixiang.top + proxyReqPathResolver()
// http://jx.xuzhixiang.top/ap/api/productlist.php
// 其他方法 axios中统一对baseUrl做封装
app.use(
	"/api/v1",
	proxy("http://apit.hidream.net", {
		proxyReqPathResolver: function (req) {
			return "/api/v1" + req.url;
		},
	})
);

app.get("*", function (req, res) {
	const store = getStore(req);

	res.cookie("isLogin", true);

	// 在这里拿到异步数据，并填充到store之中
	// 根据路由的路径，来往store里面加数据
	const matchedRoutes = matchRoutes(routes, req.path);
	// 让matchedRoutes里面所有的组件，对应的loadData方法执行一次
	const promises = [];
	matchedRoutes.forEach((item) => {
		if (item.route.loadData) {
			// 额外封装了一层Promise，对应组件加载内容无论成功或者失败，都会调用外层Promise的resolve，意味着组件对应的promise都会成功。
			// promises是由promise组成，promises的 Promise.all(promises)也会成功
			const promise = new Promise((resolve, reject) => {
				item.route.loadData(store).then(resolve).catch(resolve);
			});
			promises.push(promise);
		}
	});

	/**
	 * 一个页面加载多个组件，多个组件都需要服务器端加载数据
	 * 假设A组件加载数据错误
	 * B,C,D组件有几种情况
	 * 1.B,C,D组件数据加载完成
	 * 2.接口比较慢， B,C,D组件数据没有加载完成
	 */
	Promise.all(promises).then(() => {
		const context = {};
		const html = render(store, routes, req, context);

		/**
		 * 服务器端301重定向
		 * 服务器端404页处理
		 */
		if (context.action === "REPLACE") {
			res.redirect(301, context.url);
		} else if (context.NOT_FOUND) {
			res.status(404);
			res.send(html);
		} else {
			res.send(html);
		}
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
