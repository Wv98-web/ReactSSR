import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

export const render = (store, routes, req) => {
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

	return `
      <html>
        <head>
          <title>ReactSSR</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <script src="/index.js"></script>
        </body>
      </html>
    `;
};
