import { click } from "@testing-library/user-event/dist/click";
import React, { Component } from "react";

class Clicker extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clicks: 0,
		};
	}

	handleClick = () => {
		const { clicks } = this.state;
		this.setState({
			clicks: clicks + 1,
		});
	};

	componentDidMount() {
		console.log("componentDidMount");
		setInterval(this.handleClick, 1000);
	}

	componentDidUpdate() {
		console.log("componentDidUpdate");

		// BAD
		// this.setState()

		// mb sometimes
		// if(expression) {
		//   this.setState();
		// }
	}

	render() {
		const { clicks } = this.state;

		return (
			<div>
				<p>Clicks: {clicks}</p>
				<button onClick={this.handleClick}>Add click</button>
			</div>
		);
	}
}

export default Clicker;
