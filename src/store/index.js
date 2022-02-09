import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducer = (state = { name: "wuwei" }, action) => {
	return state;
};

/**
 *  动态获取store，保证每次请求服务器返回不同store
 */
const getStore = () => {
	return createStore(reducer, applyMiddleware(thunk));
};

export default getStore;
