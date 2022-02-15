import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "./store/index";
import styles from "./style.css";
import withStyle from "../../WithStyle";

export class Header extends Component {
	render() {
		const { login, handleLogin, handleLogout } = this.props;

		return (
			<div className={styles.container}>
				<Link to="/" className={styles.item}>
					首页
				</Link>
				{login ? (
					<Fragment>
						<Link to="/list" className={styles.item}>
							列表
						</Link>
						<div onClick={handleLogout} className={styles.item}>
							退出
						</div>
					</Fragment>
				) : (
					<div onClick={handleLogin} className={styles.item}>
						登录
					</div>
				)}
			</div>
		);
	}
}

const mapState = (state) => ({
	login: state.header.login,
});

const mapDispatch = (dispatch) => ({
	handleLogin() {
		dispatch(actions.login());
	},
	handleLogout() {
		dispatch(actions.logout());
	},
});

export default connect(mapState, mapDispatch)(withStyle(Header, styles));
