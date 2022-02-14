import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "./store/index";

export class Header extends Component {
	render() {
		const { login, handleLogin, handleLogout } = this.props;
		console.log(login, "login");

		return (
			<div>
				<Link to="/">Home</Link>
				<br />
				{login ? (
					<Fragment>
						<div onClick={handleLogout}>logout</div>
					</Fragment>
				) : (
					<div onClick={handleLogin}>Login</div>
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

export default connect(mapState, mapDispatch)(Header);
