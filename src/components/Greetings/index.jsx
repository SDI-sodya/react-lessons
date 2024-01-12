import React from "react";

class Greetings extends React.Component {
	render() {
		// пропси
		const { user } = this.props;
		return <h1>Hello, {user.name}!</h1>;
	}
}

export default Greetings;
