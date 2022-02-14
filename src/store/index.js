import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducer } from "../containers/Home/store";
import { reducer as headerReducer } from "../components/Header/store";
import { reducer as ListReducer } from "../containers/List/store";
import clientAxios from "../client/request";
import serverAxios from "../server/request";

const reducer = combineReducers({
	home: homeReducer,
	header: headerReducer,
	list: ListReducer,
});

/**
 *  动态获取store，保证每次请求服务器返回不同store
 */
// 创建服务器端store
export const getStore = (req) => {
	return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))));
};

// 创建客户端store
export const getClientStore = () => {
	// 数据的脱水和注水
	const defaultState = window.context.state;
	return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
};
