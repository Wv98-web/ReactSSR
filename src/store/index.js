import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducer } from "../containers/Home/store";

const reducer = combineReducers({
	home: homeReducer,
});

/**
 *  动态获取store，保证每次请求服务器返回不同store
 */
export const getStore = () => {
	return createStore(reducer, applyMiddleware(thunk));
};

export const getClientStore = () => {
	// 数据的脱水和注水
	const defaultState = window.context.state;
	return createStore(reducer, defaultState, applyMiddleware(thunk));
};
