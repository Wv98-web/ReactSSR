import { CHANGE_LOGIN } from "./constants";

const changeLogin = (value) => ({
	type: CHANGE_LOGIN,
	value,
});

export const login = () => {
	return (dispatch, getState, axiosInstance) => {
		return axiosInstance.post("/api/v1/captcha").then((res) => {
			const islogin = res.data.captcha_code ? true : false;
			dispatch(changeLogin(islogin));
		});
	};
};

export const logout = () => {
	return (dispatch, getState, axiosInstance) => {
		return axiosInstance.post("/api/v1/captcha").then((res) => {
			const islogin = res.data.captcha_code ? false : true;
			dispatch(changeLogin(islogin));
		});
	};
};

export const getHeaderInfo = () => {
	return (dispatch, getState, axiosInstance) => {
		return axiosInstance
			.post("/api/v1/authorizations?username=zhaoyadan@hidream.net&password=demo123")
			.then((res) => {
				const isLogin = res.data.access_token ? true : false;
				console.log(isLogin, "islogin");
				dispatch(changeLogin(isLogin));
			});
	};
};
