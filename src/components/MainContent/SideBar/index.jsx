import React, { Component } from "react";
import { UserContext } from "../../../contexts";

const Sidebar = (props) => {
	return (
		<UserContext.Consumer>
			{(user) => (
				<div>
					<h3>Attantion!</h3>
					<p>This is sidebar</p>
					<p>Site theme: {user.theme}</p>
				</div>
			)}
		</UserContext.Consumer>
	);
};

export default Sidebar;
