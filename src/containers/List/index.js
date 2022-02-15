import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getList } from "./store/actions";

class List extends Component {
	componentDidMount() {
		this.props.getList();
	}

	getList() {
		const { list } = this.props;
		return <div>{list.access_token}</div>;
	}

	render() {
		return this.props.login ? (
			<div>
				{this.getList()}
				list
			</div>
		) : (
			<Redirect to="/" />
		);
	}
}

const mapStateToProps = (state) => ({
	list: state.list.List,
	login: state.header.login,
});

const mapDispatchToProps = (dispatch) => ({
	getList() {
		dispatch(getList());
	},
});

const exportList = connect(mapStateToProps, mapDispatchToProps)(List);
exportList.loadData = (store) => {
	return store.dispatch(getList());
};

export default exportList;
