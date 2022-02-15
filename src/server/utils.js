import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

export const render = (store, routes, req, context) => {
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={context}>
				<Switch>{renderRoutes(routes)}</Switch>
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
					<script>
						window.context = {
							state: ${JSON.stringify(store.getState())}
						}
					</script>
          <script src="/index.js"></script>
        </body>
      </html>
    `;
};
