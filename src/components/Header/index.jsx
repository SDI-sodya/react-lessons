import React from "react";
// import "./style.css";
import NavList from "../NavList";
import { UserContext } from "../../contexts";

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const renderHeader = (theme) => {
			return (
				<>
					<h1>Our site</h1>
				</>
			);
		};

		return <UserContext.Consumer>{renderHeader}</UserContext.Consumer>;
	}
}

export default Header;
