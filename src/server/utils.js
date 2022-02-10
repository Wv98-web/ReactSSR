import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Switch, Route, matchPath } from "react-router-dom";
import routes from "../Routes";
import { Provider } from "react-redux";
import getStore from "../store";

export const render = (req) => {
	const store = getStore();

	// 在这里拿到异步数据，并填充到store之中
	// 根据路由的路径，来往store里面加数据
	const matchRoutes = [];

	routes.some((route) => {
		// use `matchPath` here
		const match = matchPath(req.path, route);
		if (match) matchRoutes.push(route.loadData(match));
		return match;
	});

	// 让matchRoutes里面所有的组件，对应的loadData方法执行一次

	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={{}}>
				<Switch>
					{routes.map((route) => (
						<Route key={route.path} {...route} />
					))}
				</Switch>
			</StaticRouter>
		</Provider>
	);

	return `<html>
    <head>
      <title>ReactSSR</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="/index.js"></script>
    </body>
  </html>`;
};
