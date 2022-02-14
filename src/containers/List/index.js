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
		console.log(list, "list");
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

List.loadData = (store) => {
	return store.dispatch(getList());
};

const mapStateToProps = (state) => ({
	list: state.list.List,
	login: state.header.login,
});

const mapDispatchToProps = (dispatch) => ({
	getList() {
		dispatch(getList());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
