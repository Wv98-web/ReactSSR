import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
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
		return (
			<Fragment>
				<Helmet>
					<title>这是ReactSSR的列表页 - ReactSSR</title>
					<meta
						name="description"
						content="从零开始，带你搭建属于自己的React SSR框架，从根本上解决客户端渲染问题 。"
					></meta>
				</Helmet>
				{this.props.login ? (
					<div className={styles.container}>
						{this.getList()}
						list
					</div>
				) : (
					<Redirect to="/" />
				)}
			</Fragment>
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
