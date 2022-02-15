import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import withStyle from "../../WithStyle";
import { getList } from "./store/actions";
import styles from "./style.css";

class List extends Component {
	componentDidMount() {
		this.props.getList();
	}

	getList() {
		const { list } = this.props;
		return <div className={styles.item}>{list.access_token}</div>;
	}

	render() {
		return this.props.login ? (
			<div className={styles.container}>
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

const exportList = connect(mapStateToProps, mapDispatchToProps)(withStyle(List, styles));
exportList.loadData = (store) => {
	return store.dispatch(getList());
};

export default exportList;
