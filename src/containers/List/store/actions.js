import { CHANGE_LIST } from "./constants";

const changeList = (list) => ({
	type: CHANGE_LIST,
	list,
});

export const getList = () => {
	return (dispatch, getState, axiosInstance) => {
		return axiosInstance
			.post("/api/v1/authorizations?username=zhaoyadan@hidream.net&password=demo123")
			.then((res) => {
				const list = res.data;
				dispatch(changeList(list));
			});
	};
};
