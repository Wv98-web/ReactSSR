import { CHANGE_LIST } from "./constants";

const defaultState = {
	List: [],
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_LIST:
			return {
				...state,
				List: action.list,
			};
		default:
			return state;
	}
};
