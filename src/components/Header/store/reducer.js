import { CHANGE_LOGIN } from "./constants";

const defaultState = {
	login: false,
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_LOGIN:
			console.log(action.value, "action.value");
			return {
				...state,
				login: action.value,
			};
		default:
			return state;
	}
};
