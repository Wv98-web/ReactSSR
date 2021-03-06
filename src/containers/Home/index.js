import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import withStyle from "../../WithStyle";
import { getHomeList } from "./store/actions";
import styles from "./style.css";
import pic from "./崖上的波妞4k.jpg";

class Home extends Component {
	/**
	 * 列表获取流程
	 * localhost:3000
	 * 服务器接收到请求，这时store是空的
	 * 服务器端不会执行componentDidMount，所以列表获取不到
	 *
	 * 客户端代码运行，store依然是空的
	 * 客户端执行服务器端不会执行componentDidMount，列表数据被获取
	 * store中的链表数据被更新
	 * 客户端渲染出store中list数据对应列表内容
	 *
	 * 如何让服务器端也执行componentDidMount
	 */

	componentDidMount() {
		// componentDidMount只会在客户端渲染执行，在服务端不执行

		// if (!this.props.list.length) {
		// 	this.props.getHomeList(false);
		// }
		this.props.getHomeList(false);
	}

	getList() {
		const { list } = this.props;
		// return list.map((item) => {
		// 	return <div key={item.pid}>{item.pid}</div>;
		// });

		return (
			<Fragment>
				<Helmet>
					<title>这是ReactSSR的首页 - ReactSSR</title>
					<meta
						name="description"
						content="从零开始，带你搭建属于自己的React SSR框架，从根本上解决客户端渲染问题 。"
					></meta>
				</Helmet>
				<div className={styles.item}>
					<p>{list.access_token}</p>
				</div>
			</Fragment>
		);
	}

	render() {
		return (
			<div className={styles.container}>
				<div>My name is {this.props.name}</div>
				<img src={pic} alt="" />
				{this.getList()}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	name: state.home.name,
	list: state.home.newsList,
});

const mapDispatchToProps = (dispatch) => ({
	getHomeList() {
		dispatch(getHomeList());
	},
});

const exportHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home, styles));
exportHome.loadData = (store) => {
	// 这个函数，负责在服务器端渲染之前，把这个路由需要书的数据提前加载好
	// store需要填充什么 需要结合当前用户请求地址和路由，做填充
	return store.dispatch(getHomeList(true));
};

export default exportHome;
