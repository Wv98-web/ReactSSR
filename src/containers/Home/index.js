import React from "react";

const Home = () => {
	return (
		<div>
			<div>Welcome to home</div>
			<button
				onClick={() => {
					alert("click");
				}}
			>
				click
			</button>
		</div>
	);
};

export default Home;
