import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducer } from "../containers/Home/store";

const reducer = combineReducers({
	home: homeReducer,
});

/**
 *  动态获取store，保证每次请求服务器返回不同store
 */
const getStore = () => {
	return createStore(reducer, applyMiddleware(thunk));
};

export default getStore;
