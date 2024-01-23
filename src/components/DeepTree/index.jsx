import React, { Component } from "react";

class Index extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: "our data",
		};
	}

	render() {
		return (
			<div
				style={{
					border: "2px solid black",
					padding: "10px",
				}}
			>
				<h1>DeepTree</h1>
			</div>
		);
	}
}

export default Index;
