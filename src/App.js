import React from "react";
import Header from "../src/components/Header/index";
import { renderRoutes } from "react-router-config";
import { actions } from "./components/Header/store/index";

const App = (props) => {
	return (
		<div>
			<Header />
			{renderRoutes(props.route.routes)}
		</div>
	);
};

App.loadData = (store) => {
	return store.dispatch(actions.getHeaderInfo());
};

export default App;
