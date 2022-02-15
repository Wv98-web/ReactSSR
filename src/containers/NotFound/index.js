import React, { Component } from "react";

class NotFound extends Component {
	componentWillMount() {
		// 只有服务器渲染会传staticContext
		const { staticContext } = this.props;
		staticContext && (staticContext.NOT_FOUND = true);
	}

	render() {
		return <div>404, page not found</div>;
	}
}

export default NotFound;
