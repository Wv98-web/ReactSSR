import React, { Component } from "react";
import Header from "../../components/Header";
import { connect } from "react-redux";
import { getHomeList } from "./store/actions";

class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<div>My name is {this.props.name}</div>
				<button
					onClick={() => {
						alert("click");
					}}
				>
					click
				</button>
			</div>
		);
	}

	componentDidMount() {
		this.props.getHomeList();
	}
}

const mapStateToProps = (state) => ({
	name: state.home.name,
});

const mapDispatchToProps = (dispatch) => ({
	getHomeList() {
		dispatch(getHomeList());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
